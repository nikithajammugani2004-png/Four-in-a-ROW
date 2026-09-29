import React, { useEffect, useState } from 'react';
import { ModeStats, StoredAppState, storage } from '../../services/storage';

interface StatsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StatsModal: React.FC<StatsModalProps> = ({ isOpen, onClose }) => {
  const [appState, setAppState] = useState<StoredAppState>(() => storage.load());
  const [selectedKey, setSelectedKey] = useState<string>('ai:medium');
  const [confirmReset, setConfirmReset] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setAppState(storage.load());
      setConfirmReset(false);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentStats: ModeStats = appState.stats[selectedKey] || {
    played: 0,
    won: 0,
    lost: 0,
    drawn: 0,
    bestStreak: 0,
    currentStreak: 0,
    hintsUsed: 0
  };

  const winRate = currentStats.played > 0
    ? Math.round((currentStats.won / currentStats.played) * 100)
    : 0;

  const handleReset = () => {
    storage.resetStats();
    setAppState(storage.load());
    setConfirmReset(false);
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="stats-title">
      <div className="modal-card" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2 id="stats-title" className="modal-title">Personal Statistics</h2>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close Stats (Esc)"
          >
            &times;
          </button>
        </div>

        <div className="modal-body">
          <div className="mode-tabs">
            {[
              { key: 'ai:beginner', label: 'Beginner' },
              { key: 'ai:easy', label: 'Easy' },
              { key: 'ai:medium', label: 'Medium' },
              { key: 'ai:hard', label: 'Hard' },
              { key: 'ai:expert', label: 'Expert' },
              { key: 'local', label: '2 Players' }
            ].map(tab => (
              <button
                key={tab.key}
                type="button"
                className={`mode-tab-btn ${selectedKey === tab.key ? 'active' : ''}`}
                onClick={() => setSelectedKey(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="stat-grid">
            <div className="stat-box primary">
              <span className="stat-label">Win Rate</span>
              <span className="stat-value">{winRate}%</span>
              <div className="win-bar">
                <div className="win-bar-fill" style={{ width: `${winRate}%` }} />
              </div>
            </div>

            <div className="stat-box">
              <span className="stat-label">Games Played</span>
              <span className="stat-value">{currentStats.played}</span>
            </div>

            <div className="stat-box">
              <span className="stat-label">Wins</span>
              <span className="stat-value text-green">{currentStats.won}</span>
            </div>

            <div className="stat-box">
              <span className="stat-label">Losses</span>
              <span className="stat-value text-red">{currentStats.lost}</span>
            </div>

            <div className="stat-box">
              <span className="stat-label">Draws</span>
              <span className="stat-value text-yellow">{currentStats.drawn}</span>
            </div>

            <div className="stat-box">
              <span className="stat-label">Current Streak</span>
              <span className="stat-value">{currentStats.currentStreak} 🔥</span>
            </div>

            <div className="stat-box">
              <span className="stat-label">Best Streak</span>
              <span className="stat-value">{currentStats.bestStreak} 🏆</span>
            </div>

            <div className="stat-box">
              <span className="stat-label">Fastest Win</span>
              <span className="stat-value">
                {currentStats.fastestWinMoves ? `${currentStats.fastestWinMoves} moves` : '—'}
              </span>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          {confirmReset ? (
            <div className="reset-confirm-bar">
              <span className="confirm-text">Are you sure?</span>
              <button type="button" className="confirm-btn yes" onClick={handleReset}>
                Reset
              </button>
              <button type="button" className="confirm-btn no" onClick={() => setConfirmReset(false)}>
                Cancel
              </button>
            </div>
          ) : (
            <button
              type="button"
              className="reset-stats-btn"
              onClick={() => setConfirmReset(true)}
            >
              Reset All Stats
            </button>
          )}

          <button type="button" className="done-btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>

      <style>{`
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(4, 7, 20, 0.78);
          backdrop-filter: blur(12px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 18px;
          z-index: 100;
          animation: overlayFadeIn 0.25s ease-out;
        }

        .modal-card {
          width: 100%;
          max-width: 540px;
          background: rgba(22, 28, 58, 0.96);
          border: 1px solid var(--surface-border);
          border-radius: var(--radius-lg);
          box-shadow: 0 24px 48px rgba(0, 0, 0, 0.6);
          overflow: hidden;
        }

        .modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 24px;
          border-bottom: 1px solid var(--surface-border);
        }

        .modal-title {
          font-size: 20px;
          font-weight: 800;
          color: var(--text-main);
        }

        .modal-close-btn {
          font-size: 26px;
          color: var(--text-dim);
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
        }

        .modal-body {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          max-height: 70vh;
          overflow-y: auto;
        }

        .mode-tabs {
          display: flex;
          gap: 6px;
          background: rgba(0, 0, 0, 0.3);
          padding: 4px;
          border-radius: var(--radius-md);
          overflow-x: auto;
        }

        .mode-tab-btn {
          flex: 1;
          white-space: nowrap;
          padding: 8px 12px;
          border-radius: var(--radius-sm);
          font-size: 13px;
          font-weight: 600;
          color: var(--text-muted);
          transition: all 0.2s ease;
        }

        .mode-tab-btn.active {
          background: var(--accent-color);
          color: #ffffff;
        }

        .stat-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }

        .stat-box {
          background: rgba(0, 0, 0, 0.24);
          border: 1px solid var(--surface-border);
          border-radius: var(--radius-md);
          padding: 14px 16px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .stat-box.primary {
          grid-column: span 2;
          background: rgba(99, 102, 241, 0.12);
          border-color: rgba(99, 102, 241, 0.3);
        }

        .stat-label {
          font-size: 12px;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 600;
        }

        .stat-value {
          font-size: 24px;
          font-weight: 800;
          color: var(--text-main);
        }

        .win-bar {
          width: 100%;
          height: 6px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-full);
          margin-top: 6px;
          overflow: hidden;
        }

        .win-bar-fill {
          height: 100%;
          background: var(--accent-gradient);
          border-radius: var(--radius-full);
          transition: width 0.4s ease;
        }

        .text-green { color: #22c55e; }
        .text-red { color: #ef4444; }
        .text-yellow { color: #eab308; }

        .modal-footer {
          padding: 16px 24px;
          border-top: 1px solid var(--surface-border);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .reset-stats-btn {
          color: #f87171;
          font-size: 13px;
          font-weight: 600;
        }

        .reset-stats-btn:hover {
          text-decoration: underline;
        }

        .reset-confirm-bar {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .confirm-text {
          font-size: 13px;
          color: #f87171;
        }

        .confirm-btn {
          padding: 4px 10px;
          border-radius: var(--radius-sm);
          font-size: 12px;
          font-weight: 700;
        }

        .confirm-btn.yes {
          background: #ef4444;
          color: #ffffff;
        }

        .confirm-btn.no {
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
        }

        .done-btn {
          background: var(--accent-gradient);
          color: #ffffff;
          padding: 10px 24px;
          border-radius: var(--radius-md);
          font-size: 14px;
          font-weight: 700;
        }
      `}</style>
    </div>
  );
};
