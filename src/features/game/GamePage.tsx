import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { AiController } from '../../ai/aiController';
import { AiDifficulty } from '../../ai/types';
import { MinimaxStrategy } from '../../ai/strategies/minimax';
import { BoardView } from '../../components/BoardView';
import { ReplayControls } from '../../components/ReplayControls';
import { ResultOverlay } from '../../components/ResultOverlay';
import { TurnIndicator } from '../../components/TurnIndicator';
import { Board } from '../../domain/board';
import { Game, StarterPolicy } from '../../domain/game';
import { BoardCoord, Player } from '../../domain/types';
import { HapticsService } from '../../services/haptics';
import { SoundPlayer } from '../../services/sound';
import { storage } from '../../services/storage';

interface GamePageProps {
  mode: 'ai' | 'local';
  difficulty?: AiDifficulty;
  soundPlayer: SoundPlayer;
  haptics: HapticsService;
  onNavigateHome: () => void;
  onOpenSettings: () => void;
  initialMoveString?: string;
  initialStarter?: Player;
  reducedMotion?: boolean;
}

export const GamePage: React.FC<GamePageProps> = ({
  mode,
  difficulty = 'medium',
  soundPlayer,
  haptics,
  onNavigateHome,
  onOpenSettings,
  initialMoveString,
  initialStarter = 1,
  reducedMotion = false
}) => {
  const [game, setGame] = useState<Game>(() => {
    if (initialMoveString) {
      return Game.fromMoveString(initialMoveString, initialStarter);
    }
    return new Game(initialStarter);
  });

  const [isLocked, setIsLocked] = useState(false);
  const [isAiThinking, setIsAiThinking] = useState(false);
  const [lastMove, setLastMove] = useState<{ row: number; col: number; player: Player } | null>(null);
  const [hintCol, setHintCol] = useState<number | null>(null);
  const [overlayDismissed, setOverlayDismissed] = useState(false);
  const [showResultOverlay, setShowResultOverlay] = useState(false);

  // Match Replay State
  const [isReplaying, setIsReplaying] = useState(false);
  const [replayStep, setReplayStep] = useState(0);
  const [isReplayPlaying, setIsReplayPlaying] = useState(false);
  const [replaySpeed, setReplaySpeed] = useState<number>(1);

  const aiControllerRef = useRef<AiController | null>(null);

  useEffect(() => {
    if (mode === 'ai') {
      aiControllerRef.current = new AiController();
    }
    return () => {
      aiControllerRef.current?.destroy();
    };
  }, [mode]);

  const statKey = mode === 'ai' ? `ai:${difficulty}` : 'local';

  useEffect(() => {
    if (game.isOver) {
      storage.clearInProgress();
    } else if (game.history.length > 0) {
      storage.saveInProgress({
        mode,
        level: difficulty,
        starter: game.state.starter,
        moves: game.toMoveString(),
        startedAt: new Date().toISOString()
      });
    }
  }, [game, mode, difficulty]);

  useEffect(() => {
    if (game.isOver) {
      const isWon = game.status.kind === 'won';
      if (isWon) {
        soundPlayer.play('win');
        haptics.trigger('success');
      } else {
        soundPlayer.play('draw');
        haptics.trigger('medium');
      }

      if (isWon) {
        const isPlayer1Winner = game.status.winner === 1;
        if (mode === 'local') {
          storage.recordGame(statKey, 'win', game.history.length);
        } else {
          const result = isPlayer1Winner ? 'win' : 'loss';
          storage.recordGame(statKey, result, isPlayer1Winner ? game.history.length : undefined);
        }
      } else {
        storage.recordGame(statKey, 'draw');
      }

      const timer = setTimeout(() => {
        setShowResultOverlay(true);
      }, 700);

      return () => clearTimeout(timer);
    }
  }, [game.isOver, game.status, mode, statKey, soundPlayer, haptics, game.history.length]);

  const handleDrop = useCallback(async (col: number) => {
    if (isLocked || game.isOver) return;

    const res = game.makeMove(col);
    if (!res.success) {
      soundPlayer.play('invalid');
      haptics.trigger('error');
      return;
    }

    soundPlayer.play('drop');
    haptics.trigger('light');
    setLastMove(res.move);
    setHintCol(null);

    setGame(Object.assign(Object.create(Object.getPrototypeOf(game)), game));

    setIsLocked(true);
    setTimeout(() => {
      setIsLocked(false);
    }, reducedMotion ? 50 : 380);
  }, [game, isLocked, reducedMotion, soundPlayer, haptics]);

  useEffect(() => {
    if (mode !== 'ai' || game.isOver || game.currentPlayer !== 2) {
      return;
    }

    let isMounted = true;
    setIsAiThinking(true);
    setIsLocked(true);

    const executeAiMove = async () => {
      try {
        const chosenCol = await (aiControllerRef.current
          ? aiControllerRef.current.getMove(game.board, 2, difficulty)
          : new MinimaxStrategy(4).chooseMove(game.board, 2));

        if (!isMounted) return;

        setIsAiThinking(false);
        const res = game.makeMove(chosenCol);
        if (res.success) {
          soundPlayer.play('drop');
          haptics.trigger('light');
          setLastMove(res.move);
          setGame(Object.assign(Object.create(Object.getPrototypeOf(game)), game));
        }

        setTimeout(() => {
          if (isMounted) setIsLocked(false);
        }, reducedMotion ? 50 : 380);
      } catch (err) {
        console.error('AI Move calculation error:', err);
        if (isMounted) {
          setIsAiThinking(false);
          setIsLocked(false);
        }
      }
    };

    executeAiMove();

    return () => {
      isMounted = false;
    };
  }, [game, mode, difficulty, reducedMotion, soundPlayer, haptics]);

  const handleUndo = useCallback(() => {
    if (isLocked || game.history.length === 0) return;
    const steps = mode === 'ai' ? 2 : 1;
    const ok = game.undo(steps);
    if (ok) {
      soundPlayer.play('click');
      setLastMove(null);
      setHintCol(null);
      setShowResultOverlay(false);
      setOverlayDismissed(false);
      setGame(Object.assign(Object.create(Object.getPrototypeOf(game)), game));
    }
  }, [game, isLocked, mode, soundPlayer]);

  const handleHint = useCallback(async () => {
    if (isLocked || game.isOver || isAiThinking) return;
    try {
      storage.incrementHintUsed(statKey);
      const hintStrategy = new MinimaxStrategy(4, 400);
      const bestCol = await hintStrategy.chooseMove(game.board, game.currentPlayer || 1);
      setHintCol(bestCol);
      soundPlayer.play('click');
    } catch (e) {
      console.warn('Hint calculation error:', e);
    }
  }, [game, isLocked, isAiThinking, statKey, soundPlayer]);

  const handleRematch = useCallback((policy: StarterPolicy = 'alternating') => {
    game.rematch(policy);
    setLastMove(null);
    setHintCol(null);
    setShowResultOverlay(false);
    setOverlayDismissed(false);
    setIsLocked(false);
    setIsAiThinking(false);
    setIsReplaying(false);
    setIsReplayPlaying(false);
    setGame(Object.assign(Object.create(Object.getPrototypeOf(game)), game));
    soundPlayer.play('click');
  }, [game, soundPlayer]);

  // Replay Handlers
  const handleStartReplay = useCallback(() => {
    setShowResultOverlay(false);
    setOverlayDismissed(false);
    setIsReplaying(true);
    setReplayStep(0);
    setIsReplayPlaying(true);
    soundPlayer.play('click');
  }, [soundPlayer]);

  const handleExitReplay = useCallback(() => {
    setIsReplaying(false);
    setIsReplayPlaying(false);
    setShowResultOverlay(true);
    soundPlayer.play('click');
  }, [soundPlayer]);

  const handleReplayPlayToggle = useCallback(() => {
    if (isReplayPlaying) {
      setIsReplayPlaying(false);
    } else {
      if (replayStep >= game.history.length) {
        setReplayStep(0);
      }
      setIsReplayPlaying(true);
    }
  }, [isReplayPlaying, replayStep, game.history.length]);

  const handleReplayStepForward = useCallback(() => {
    if (replayStep < game.history.length) {
      setReplayStep(prev => prev + 1);
      soundPlayer.play('drop');
    }
  }, [replayStep, game.history.length, soundPlayer]);

  const handleReplayStepBackward = useCallback(() => {
    if (replayStep > 0) {
      setReplayStep(prev => prev - 1);
      soundPlayer.play('click');
    }
  }, [replayStep, soundPlayer]);

  const handleReplayJumpToStart = useCallback(() => {
    setReplayStep(0);
    setIsReplayPlaying(false);
    soundPlayer.play('click');
  }, [soundPlayer]);

  const handleReplayJumpToEnd = useCallback(() => {
    setReplayStep(game.history.length);
    setIsReplayPlaying(false);
    soundPlayer.play('click');
  }, [game.history.length, soundPlayer]);

  const handleReplaySeek = useCallback((step: number) => {
    const target = Math.max(0, Math.min(game.history.length, step));
    setReplayStep(target);
    setIsReplayPlaying(false);
    if (target > 0) {
      soundPlayer.play('drop');
    }
  }, [game.history.length, soundPlayer]);

  // Auto-play timer for match replay
  useEffect(() => {
    if (!isReplaying || !isReplayPlaying) return;

    if (replayStep >= game.history.length) {
      setIsReplayPlaying(false);
      return;
    }

    const intervalMs = replaySpeed === 0.5 ? 900 : replaySpeed === 2 ? 280 : 550;
    const timer = setTimeout(() => {
      setReplayStep(prev => {
        const next = prev + 1;
        soundPlayer.play('drop');
        if (next >= game.history.length) {
          setIsReplayPlaying(false);
          if (game.status.kind === 'won') {
            soundPlayer.play('win');
            haptics.trigger('success');
          }
        }
        return next;
      });
    }, intervalMs);

    return () => clearTimeout(timer);
  }, [isReplaying, isReplayPlaying, replayStep, replaySpeed, game.history.length, game.status, soundPlayer, haptics]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (isReplaying) return;

      if (e.key === 'u' || e.key === 'U') {
        e.preventDefault();
        handleUndo();
      } else if (e.key === 'r' || e.key === 'R') {
        e.preventDefault();
        handleRematch('alternating');
      } else if (e.key === 'h' || e.key === 'H') {
        e.preventDefault();
        handleHint();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleUndo, handleRematch, handleHint, isReplaying]);

  const p1Name = mode === 'ai' ? 'You' : 'Player 1';
  const p2Name = mode === 'ai' ? `AI (${difficulty})` : 'Player 2';

  // Derived board for replay mode or active match
  const replayBoard = useMemo(() => {
    if (!isReplaying) return game.board;
    let b = Board.createEmpty(game.config);
    for (let i = 0; i < replayStep; i++) {
      const m = game.history[i];
      const res = b.drop(m.col, m.player);
      if (res.success) {
        b = res.board;
      }
    }
    return b;
  }, [isReplaying, replayStep, game.config, game.history, game.board]);

  const activeLastMove = isReplaying
    ? (replayStep > 0 ? game.history[replayStep - 1] : null)
    : lastMove;

  const activeWinningLine: readonly BoardCoord[] | null = isReplaying
    ? (replayStep === game.history.length && game.status.kind === 'won' ? game.status.line : null)
    : (game.status.kind === 'won' ? game.status.line : null);

  const activeCurrentPlayer: Player = isReplaying
    ? (replayStep === 0 ? game.state.starter : (game.history[replayStep - 1].player === 1 ? 2 : 1))
    : (game.currentPlayer || 1);

  return (
    <div className="game-page-container">
      <div className="game-info-side">
        {isReplaying ? (
          <ReplayControls
            currentStep={replayStep}
            totalSteps={game.history.length}
            isPlaying={isReplayPlaying}
            playbackSpeed={replaySpeed}
            lastMove={activeLastMove}
            status={game.status}
            p1Name={p1Name}
            p2Name={p2Name}
            onPlayToggle={handleReplayPlayToggle}
            onStepForward={handleReplayStepForward}
            onStepBackward={handleReplayStepBackward}
            onJumpToStart={handleReplayJumpToStart}
            onJumpToEnd={handleReplayJumpToEnd}
            onSeek={handleReplaySeek}
            onSpeedChange={setReplaySpeed}
            onExitReplay={handleExitReplay}
            onRematch={() => handleRematch('alternating')}
          />
        ) : (
          <>
            <div className="status-row">
              <TurnIndicator
                status={game.status}
                mode={mode}
                isAiThinking={isAiThinking}
                p1Name={p1Name}
                p2Name={p2Name}
              />
            </div>

            <div className="game-toolbar">
              <button
                type="button"
                className="tool-btn"
                onClick={handleUndo}
                disabled={isLocked || game.history.length === 0}
                title="Undo Move (U)"
                aria-label="Undo Move (U)"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 7v6h6M21 17a9 9 0 00-9-9 9 9 0 00-6 2.3L3 13" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Undo</span>
              </button>

              <button
                type="button"
                className="tool-btn"
                onClick={handleHint}
                disabled={isLocked || game.isOver || isAiThinking}
                title="Get Move Hint (H)"
                aria-label="Get Move Hint (H)"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2a7 7 0 00-7 7c0 2.5 1.5 4.5 3.5 5.5V17a2 2 0 002 2h3a2 2 0 002-2v-2.5c2-1 3.5-3 3.5-5.5a7 7 0 00-7-7zM9 21h6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Hint</span>
              </button>

              <button
                type="button"
                className="tool-btn"
                onClick={() => handleRematch('alternating')}
                title="Restart Match (R)"
                aria-label="Restart Match (R)"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 4v6h6M23 20v-6h-6M20.49 9A9 9 0 005.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 013.51 15" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Restart</span>
              </button>

              <button
                type="button"
                className="tool-btn secondary"
                onClick={onNavigateHome}
                title="Return to Main Menu"
                aria-label="Return to Main Menu"
              >
                <span>Menu</span>
              </button>
            </div>
          </>
        )}
      </div>

      {/* Main Board View */}
      <div className="board-play-area">
        <BoardView
          board={replayBoard}
          currentPlayer={activeCurrentPlayer}
          winningLine={activeWinningLine}
          isLocked={isReplaying || isLocked || isAiThinking || (mode === 'ai' && game.currentPlayer === 2)}
          onDrop={handleDrop}
          lastMove={activeLastMove}
          hintCol={isReplaying ? null : hintCol}
        />
      </div>

      {/* Result Overlay Dialog */}
      {showResultOverlay && !isReplaying && (
        <ResultOverlay
          status={game.status}
          mode={mode}
          isDismissed={overlayDismissed}
          onRematch={() => handleRematch('alternating')}
          onReviewBoard={() => setOverlayDismissed(true)}
          onShowOverlay={() => setOverlayDismissed(false)}
          onNavigateHome={onNavigateHome}
          onOpenSettings={onOpenSettings}
          onWatchReplay={game.history.length > 0 ? handleStartReplay : undefined}
          p1Name={p1Name}
          p2Name={p2Name}
          reducedMotion={reducedMotion}
        />
      )}

      <style>{`
        .game-page-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          max-width: 780px;
          margin: 0 auto;
          padding: clamp(4px, 1.5vh, 12px) clamp(8px, 2vw, 16px) clamp(8px, 2vh, 24px);
          min-height: calc(100dvh - 70px);
          box-sizing: border-box;
        }

        .game-info-side {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: clamp(6px, 1.2vh, 12px);
          margin-bottom: clamp(6px, 1.2vh, 14px);
        }

        .status-row {
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .board-play-area {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex: 1;
        }

        .game-toolbar {
          display: flex;
          align-items: center;
          gap: clamp(6px, 1.5vw, 12px);
          background: var(--surface-glass);
          border: 1px solid var(--surface-border);
          padding: clamp(4px, 1vw, 8px) clamp(8px, 2vw, 16px);
          border-radius: var(--radius-full);
          backdrop-filter: blur(12px);
          flex-wrap: wrap;
          justify-content: center;
        }

        .tool-btn {
          display: flex;
          align-items: center;
          gap: 5px;
          padding: clamp(6px, 1vh, 8px) clamp(10px, 1.8vw, 14px);
          border-radius: var(--radius-full);
          font-size: clamp(11px, 2.5vw, 13px);
          font-weight: 700;
          color: var(--text-main);
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.2s ease;
        }

        .tool-btn:hover:not(:disabled) {
          background: rgba(255, 255, 255, 0.16);
          transform: translateY(-1px);
        }

        .tool-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .tool-btn.secondary {
          background: transparent;
          border-color: transparent;
          color: var(--text-dim);
        }

        .tool-btn.secondary:hover {
          color: var(--text-main);
          background: var(--surface-glass);
        }

        /* Landscape Mobile / Short Screen Split (Side-by-side) */
        @media (orientation: landscape) and (max-height: 560px) {
          .game-page-container {
            flex-direction: row-reverse;
            justify-content: center;
            align-items: center;
            gap: clamp(12px, 2.5vw, 28px);
            padding: 4px 12px;
            min-height: calc(100dvh - 50px);
            max-width: 920px;
          }

          .game-info-side {
            width: auto;
            flex-shrink: 0;
            margin-bottom: 0;
            gap: 10px;
          }

          .board-play-area {
            flex: initial;
            --board-max-height: calc(100dvh - 75px);
          }

          .game-toolbar {
            flex-direction: column;
            border-radius: var(--radius-lg);
            padding: 8px;
            gap: 6px;
          }

          .tool-btn {
            width: 100%;
            justify-content: center;
            padding: 6px 12px;
          }
        }
      `}</style>
    </div>
  );
};
