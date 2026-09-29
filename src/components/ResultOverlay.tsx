import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { GameStatus } from '../domain/types';
import { Token } from './Token';

interface ResultOverlayProps {
  status: GameStatus;
  mode: 'ai' | 'local';
  isDismissed: boolean;
  onRematch: () => void;
  onReviewBoard: () => void;
  onShowOverlay: () => void;
  onNavigateHome: () => void;
  onOpenSettings: () => void;
  onWatchReplay?: () => void;
  p1Name?: string;
  p2Name?: string;
  reducedMotion?: boolean;
}

export const ResultOverlay: React.FC<ResultOverlayProps> = ({
  status,
  mode,
  isDismissed,
  onRematch,
  onReviewBoard,
  onShowOverlay,
  onNavigateHome,
  onOpenSettings,
  onWatchReplay,
  p1Name = 'Player 1',
  p2Name = mode === 'ai' ? 'Computer' : 'Player 2',
  reducedMotion = false
}) => {
  if (status.kind === 'playing') {
    return null;
  }

  useEffect(() => {
    if (reducedMotion) return;

    if (status.kind === 'won') {
      const isHumanWin = mode === 'local' || (mode === 'ai' && status.winner === 1);
      if (isHumanWin) {
        confetti({
          particleCount: 85,
          spread: 70,
          origin: { y: 0.6 },
          colors: status.winner === 1 ? ['#ef4444', '#f87171', '#ffffff'] : ['#eab308', '#facc15', '#ffffff']
        });
      }
    }
  }, [status, mode, reducedMotion]);

  if (isDismissed) {
    return (
      <div className="review-banner-container">
        <div className="review-banner">
          <span>Board inspection mode</span>
          <div className="review-actions">
            {onWatchReplay && (
              <button type="button" className="btn-small replay" onClick={onWatchReplay}>
                <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginRight: '4px', verticalAlign: '-1px' }}>
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                Replay
              </button>
            )}
            <button type="button" className="btn-small primary" onClick={onRematch}>
              Rematch
            </button>
            <button type="button" className="btn-small secondary" onClick={onShowOverlay}>
              Show Result
            </button>
          </div>
        </div>

        <style>{`
          .review-banner-container {
            position: fixed;
            bottom: 24px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 100;
            width: 90%;
            max-width: 440px;
          }

          .review-banner {
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: rgba(15, 23, 42, 0.92);
            backdrop-filter: blur(14px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            padding: 10px 16px;
            border-radius: var(--radius-full);
            color: #fff;
            font-size: 14px;
            font-weight: 600;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          }

          .review-actions {
            display: flex;
            gap: 8px;
          }

          .btn-small {
            padding: 6px 14px;
            border-radius: var(--radius-full);
            font-size: 13px;
            font-weight: 700;
            transition: all 0.2s ease;
          }

          .btn-small.primary {
            background: var(--accent-gradient);
            color: #fff;
          }

          .btn-small.secondary {
            background: rgba(255, 255, 255, 0.15);
            color: #fff;
          }

          .btn-small.replay {
            background: rgba(99, 102, 241, 0.35);
            border: 1px solid rgba(129, 140, 248, 0.5);
            color: #fff;
            display: inline-flex;
            align-items: center;
          }

          .btn-small.replay:hover {
            background: rgba(99, 102, 241, 0.55);
          }
        `}</style>
      </div>
    );
  }

  const isWon = status.kind === 'won';
  const winnerName = isWon ? (status.winner === 1 ? p1Name : p2Name) : null;

  return (
    <div className="result-backdrop" role="dialog" aria-modal="true" aria-labelledby="result-title">
      <div className="result-card">
        {isWon && (
          <div className="result-token-showcase">
            <div className="result-token-wrapper">
              <Token player={status.winner} />
            </div>
          </div>
        )}

        <h2 id="result-title" className="result-title">
          {isWon ? `${winnerName} Victory!` : "It's a Draw!"}
        </h2>

        <p className="result-desc">
          {isWon
            ? `${winnerName} lined up 4 in a row to take the match.`
            : 'Every slot has been filled without a four-in-a-row alignment.'}
        </p>

        <div className="result-buttons">
          <button
            type="button"
            className="action-btn primary-btn"
            onClick={onRematch}
            autoFocus
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M1 4v6h6M23 20v-6h-6" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M20.49 9A9 9 0 005.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 013.51 15" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Play Rematch (R)
          </button>

          {onWatchReplay && (
            <button
              type="button"
              className="action-btn replay-btn"
              onClick={onWatchReplay}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              Watch Replay
            </button>
          )}

          <button
            type="button"
            className="action-btn secondary-btn"
            onClick={onReviewBoard}
          >
            Review Board
          </button>

          <div className="aux-buttons">
            <button
              type="button"
              className="action-btn tertiary-btn"
              onClick={onNavigateHome}
            >
              Main Menu
            </button>
            <button
              type="button"
              className="action-btn tertiary-btn"
              onClick={onOpenSettings}
            >
              Settings
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .result-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(4, 6, 18, 0.78);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          z-index: 90;
          animation: overlayFadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .result-card {
          width: 100%;
          max-width: 440px;
          background: rgba(22, 28, 58, 0.95);
          border: 1px solid var(--surface-border);
          border-radius: var(--radius-lg);
          padding: 32px 28px;
          text-align: center;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
        }

        .result-token-showcase {
          display: flex;
          justify-content: center;
          margin-bottom: 16px;
        }

        .result-token-wrapper {
          width: 68px;
          height: 68px;
        }

        .result-title {
          font-size: clamp(24px, 5vw, 30px);
          font-weight: 800;
          color: var(--text-main);
          margin-bottom: 8px;
          letter-spacing: -0.02em;
        }

        .result-desc {
          font-size: 15px;
          color: var(--text-muted);
          margin-bottom: 26px;
          line-height: 1.5;
        }

        .result-buttons {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .action-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 14px 20px;
          border-radius: var(--radius-md);
          font-size: 16px;
          font-weight: 700;
          transition: all 0.2s ease;
        }

        .primary-btn {
          background: var(--accent-gradient);
          color: #ffffff;
          box-shadow: 0 8px 20px rgba(99, 102, 241, 0.35);
        }

        .primary-btn:hover {
          filter: brightness(1.1);
          transform: translateY(-2px);
        }

        .replay-btn {
          background: rgba(99, 102, 241, 0.16);
          border: 1px solid rgba(129, 140, 248, 0.38);
          color: var(--text-main);
          box-shadow: 0 4px 14px rgba(99, 102, 241, 0.2);
        }

        .replay-btn:hover {
          background: rgba(99, 102, 241, 0.3);
          border-color: rgba(129, 140, 248, 0.65);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(99, 102, 241, 0.35);
        }

        .secondary-btn {
          background: var(--surface-glass);
          border: 1px solid var(--surface-border);
          color: var(--text-main);
        }

        .secondary-btn:hover {
          background: var(--surface-glass-hover);
        }

        .aux-buttons {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-top: 4px;
        }

        .tertiary-btn {
          background: transparent;
          border: 1px solid var(--surface-border);
          color: var(--text-muted);
          font-size: 14px;
          padding: 10px;
        }

        .tertiary-btn:hover {
          background: var(--surface-glass);
          color: var(--text-main);
        }
      `}</style>
    </div>
  );
};
