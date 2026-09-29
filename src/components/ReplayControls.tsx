import React, { useEffect } from 'react';
import { GameStatus, MoveRecord } from '../domain/types';
import { Token } from './Token';

interface ReplayControlsProps {
  currentStep: number;
  totalSteps: number;
  isPlaying: boolean;
  playbackSpeed: number;
  lastMove: MoveRecord | null;
  status: GameStatus;
  p1Name?: string;
  p2Name?: string;
  onPlayToggle: () => void;
  onStepForward: () => void;
  onStepBackward: () => void;
  onJumpToStart: () => void;
  onJumpToEnd: () => void;
  onSeek: (step: number) => void;
  onSpeedChange: (speed: number) => void;
  onExitReplay: () => void;
  onRematch: () => void;
}

export const ReplayControls: React.FC<ReplayControlsProps> = ({
  currentStep,
  totalSteps,
  isPlaying,
  playbackSpeed,
  lastMove,
  status,
  p1Name = 'Player 1',
  p2Name = 'Player 2',
  onPlayToggle,
  onStepForward,
  onStepBackward,
  onJumpToStart,
  onJumpToEnd,
  onSeek,
  onSpeedChange,
  onExitReplay,
  onRematch
}) => {
  // Keyboard navigation for replay controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      if (e.code === 'Space') {
        e.preventDefault();
        onPlayToggle();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        onStepBackward();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        onStepForward();
      } else if (e.key === 'Home') {
        e.preventDefault();
        onJumpToStart();
      } else if (e.key === 'End') {
        e.preventDefault();
        onJumpToEnd();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onExitReplay();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onPlayToggle, onStepBackward, onStepForward, onJumpToStart, onJumpToEnd, onExitReplay]);

  const isAtStart = currentStep === 0;
  const isAtEnd = currentStep === totalSteps;
  const isWon = status.kind === 'won' && isAtEnd;
  const winnerName = status.kind === 'won' ? (status.winner === 1 ? p1Name : p2Name) : null;
  const lastPlayerName = lastMove ? (lastMove.player === 1 ? p1Name : p2Name) : null;

  return (
    <div className="replay-controls-card" role="region" aria-label="Game Replay Controls">
      {/* Top Banner / Move Status */}
      <div className="replay-header">
        <div className="replay-badge">
          <span className="replay-icon">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </span>
          <span className="badge-text">REPLAY</span>
        </div>

        <div className="replay-step-info">
          {isAtStart ? (
            <span className="step-desc">Starting Board</span>
          ) : isWon ? (
            <div className="victory-pill">
              <span className="trophy-icon">🏆</span>
              <span>{winnerName} Victory! (Move {totalSteps})</span>
            </div>
          ) : status.kind === 'draw' && isAtEnd ? (
            <div className="victory-pill draw">
              <span>🤝 Match Drawn (Move {totalSteps})</span>
            </div>
          ) : (
            <div className="move-detail">
              {lastMove && (
                <div className="token-thumb">
                  <Token player={lastMove.player} />
                </div>
              )}
              <span>
                Move {currentStep} of {totalSteps}: <strong>{lastPlayerName}</strong> in Col {lastMove ? lastMove.col + 1 : ''}
              </span>
            </div>
          )}
        </div>

        <div className="speed-pills">
          {[0.5, 1, 2].map(speed => (
            <button
              key={speed}
              type="button"
              className={`speed-btn ${playbackSpeed === speed ? 'active' : ''}`}
              onClick={() => onSpeedChange(speed)}
              aria-label={`Playback speed ${speed}x`}
            >
              {speed}x
            </button>
          ))}
        </div>
      </div>

      {/* Progress Scrubber */}
      <div className="scrubber-row">
        <span className="scrubber-time">0</span>
        <div className="slider-wrapper">
          <input
            type="range"
            min="0"
            max={totalSteps}
            value={currentStep}
            onChange={e => onSeek(Number(e.target.value))}
            className="replay-slider"
            aria-label="Replay move scrubber"
          />
          <div
            className="slider-progress"
            style={{ width: `${totalSteps > 0 ? (currentStep / totalSteps) * 100 : 0}%` }}
          />
        </div>
        <span className="scrubber-time">{totalSteps}</span>
      </div>

      {/* Playback Controls & Action Buttons */}
      <div className="controls-footer">
        <div className="playback-btns">
          <button
            type="button"
            className="ctrl-btn"
            onClick={onJumpToStart}
            disabled={isAtStart}
            title="Jump to Start (Home)"
            aria-label="Jump to Start (Home)"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="5" x2="5" y2="19" strokeLinecap="round" />
              <polygon points="19 19 8 12 19 5 19 19" fill="currentColor" />
            </svg>
          </button>

          <button
            type="button"
            className="ctrl-btn"
            onClick={onStepBackward}
            disabled={isAtStart}
            title="Previous Move (Left Arrow)"
            aria-label="Previous Move (Left Arrow)"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polygon points="19 19 7 12 19 5 19 19" fill="currentColor" />
            </svg>
          </button>

          <button
            type="button"
            className={`play-btn ${isPlaying ? 'playing' : ''}`}
            onClick={onPlayToggle}
            title={isPlaying ? 'Pause (Space)' : 'Play (Space)'}
            aria-label={isPlaying ? 'Pause (Space)' : 'Play (Space)'}
          >
            {isPlaying ? (
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <rect x="6" y="4" width="4" height="16" rx="1.5" />
                <rect x="14" y="4" width="4" height="16" rx="1.5" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" style={{ marginLeft: '2px' }}>
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            )}
          </button>

          <button
            type="button"
            className="ctrl-btn"
            onClick={onStepForward}
            disabled={isAtEnd}
            title="Next Move (Right Arrow)"
            aria-label="Next Move (Right Arrow)"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polygon points="5 5 17 12 5 19 5 5" fill="currentColor" />
            </svg>
          </button>

          <button
            type="button"
            className="ctrl-btn"
            onClick={onJumpToEnd}
            disabled={isAtEnd}
            title="Jump to End (End)"
            aria-label="Jump to End (End)"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polygon points="5 5 16 12 5 19 5 5" fill="currentColor" />
              <line x1="19" y1="5" x2="19" y2="19" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="action-btns">
          <button
            type="button"
            className="action-btn secondary"
            onClick={onExitReplay}
            title="Exit Replay to Result Screen (Esc)"
          >
            <span>Exit Replay</span>
          </button>

          <button
            type="button"
            className="action-btn primary"
            onClick={onRematch}
            title="Start New Match"
          >
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M1 4v6h6M23 20v-6h-6" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M20.49 9A9 9 0 005.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 013.51 15" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>Rematch</span>
          </button>
        </div>
      </div>

      <style>{`
        .replay-controls-card {
          width: 100%;
          max-width: 660px;
          margin: 0 auto;
          background: rgba(18, 24, 48, 0.94);
          border: 1px solid var(--surface-border-glow);
          box-shadow: 0 16px 36px -10px rgba(0, 0, 0, 0.7), 0 0 30px rgba(99, 102, 241, 0.2);
          border-radius: var(--radius-lg);
          padding: clamp(10px, 1.8vh, 16px) clamp(12px, 2.5vw, 20px);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          display: flex;
          flex-direction: column;
          gap: 12px;
          animation: overlayFadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .replay-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          flex-wrap: wrap;
        }

        .replay-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(99, 102, 241, 0.25);
          border: 1px solid rgba(129, 140, 248, 0.4);
          padding: 4px 10px;
          border-radius: var(--radius-full);
          color: #a5b4fc;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.08em;
        }

        .replay-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          color: #818cf8;
        }

        .replay-step-info {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          color: var(--text-main);
          font-weight: 600;
          flex: 1;
          min-width: 160px;
        }

        .move-detail {
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .token-thumb {
          width: 18px;
          height: 18px;
          flex-shrink: 0;
        }

        .victory-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(16, 185, 129, 0.2);
          border: 1px solid rgba(16, 185, 129, 0.4);
          color: #34d399;
          padding: 3px 10px;
          border-radius: var(--radius-full);
          font-size: 12px;
          font-weight: 700;
        }

        .victory-pill.draw {
          background: rgba(245, 158, 11, 0.2);
          border-color: rgba(245, 158, 11, 0.4);
          color: #fbbf24;
        }

        .trophy-icon {
          font-size: 13px;
        }

        .speed-pills {
          display: inline-flex;
          align-items: center;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-full);
          padding: 2px;
          gap: 2px;
        }

        .speed-btn {
          background: transparent;
          border: none;
          color: var(--text-muted);
          font-size: 11px;
          font-weight: 700;
          padding: 3px 8px;
          border-radius: var(--radius-full);
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .speed-btn:hover {
          color: var(--text-main);
        }

        .speed-btn.active {
          background: var(--accent-gradient);
          color: #ffffff;
          box-shadow: 0 2px 6px rgba(99, 102, 241, 0.4);
        }

        .scrubber-row {
          display: flex;
          align-items: center;
          gap: 12px;
          width: 100%;
        }

        .scrubber-time {
          font-size: 11px;
          font-weight: 700;
          color: var(--text-dim);
          min-width: 16px;
          text-align: center;
        }

        .slider-wrapper {
          position: relative;
          flex: 1;
          display: flex;
          align-items: center;
          height: 20px;
        }

        .replay-slider {
          -webkit-appearance: none;
          appearance: none;
          width: 100%;
          height: 6px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 999px;
          outline: none;
          position: relative;
          z-index: 2;
          cursor: pointer;
        }

        .replay-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #ffffff;
          box-shadow: 0 0 10px rgba(99, 102, 241, 0.8), 0 2px 4px rgba(0, 0, 0, 0.4);
          cursor: pointer;
          transition: transform 0.15s ease;
        }

        .replay-slider::-webkit-slider-thumb:hover {
          transform: scale(1.2);
        }

        .slider-progress {
          position: absolute;
          left: 0;
          top: 7px;
          height: 6px;
          background: var(--accent-gradient);
          border-radius: 999px;
          pointer-events: none;
          z-index: 1;
        }

        .controls-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
        }

        .playback-btns {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .ctrl-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: var(--text-main);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .ctrl-btn:hover:not(:disabled) {
          background: rgba(255, 255, 255, 0.18);
          transform: translateY(-1px);
        }

        .ctrl-btn:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }

        .play-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--accent-gradient);
          border: none;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 6px 16px rgba(99, 102, 241, 0.45);
          transition: all 0.2s ease;
        }

        .play-btn:hover {
          transform: scale(1.08);
          filter: brightness(1.1);
        }

        .play-btn:active {
          transform: scale(0.96);
        }

        .action-btns {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-left: auto;
        }

        .action-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          border-radius: var(--radius-full);
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .action-btn.secondary {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: var(--text-main);
        }

        .action-btn.secondary:hover {
          background: rgba(255, 255, 255, 0.16);
        }

        .action-btn.primary {
          background: var(--accent-gradient);
          border: none;
          color: #ffffff;
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.35);
        }

        .action-btn.primary:hover {
          filter: brightness(1.1);
          transform: translateY(-1px);
        }

        @media (max-width: 520px) {
          .controls-footer {
            justify-content: center;
          }
          .action-btns {
            width: 100%;
            justify-content: center;
            margin-left: 0;
          }
        }
      `}</style>
    </div>
  );
};
