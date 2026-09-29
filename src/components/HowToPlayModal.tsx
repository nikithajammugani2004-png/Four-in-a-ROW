import React, { useEffect } from 'react';

interface HowToPlayModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HowToPlayModal: React.FC<HowToPlayModalProps> = ({ isOpen, onClose }) => {
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

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="rules-title">
      <div className="modal-card" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2 id="rules-title" className="modal-title">How to Play</h2>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close Rules (Esc)"
          >
            &times;
          </button>
        </div>

        <div className="modal-body">
          <div className="rule-cards-grid">
            <div className="rule-card">
              <div className="rule-number">1</div>
              <h3 className="rule-heading">Drop</h3>
              <p className="rule-text">
                Tap or click any of the 7 columns. Your token drops by gravity to the lowest unoccupied slot.
              </p>
            </div>

            <div className="rule-card">
              <div className="rule-number">2</div>
              <h3 className="rule-heading">Connect 4</h3>
              <p className="rule-text">
                Build a continuous sequence of 4 tokens horizontally, vertically, or diagonally while blocking your opponent.
              </p>
            </div>

            <div className="rule-card">
              <div className="rule-number">3</div>
              <h3 className="rule-heading">Win</h3>
              <p className="rule-text">
                The first player to connect 4 wins! If all 42 slots are filled without a line of four, the match ends in a draw.
              </p>
            </div>
          </div>

          <div className="keyboard-shortcuts-section">
            <h3 className="shortcuts-title">Keyboard Shortcuts</h3>
            <div className="shortcuts-grid">
              <div className="shortcut-item">
                <kbd className="key-badge">←</kbd> <kbd className="key-badge">→</kbd>
                <span>Select column</span>
              </div>
              <div className="shortcut-item">
                <kbd className="key-badge">Enter</kbd> / <kbd className="key-badge">Space</kbd>
                <span>Drop token</span>
              </div>
              <div className="shortcut-item">
                <kbd className="key-badge">1</kbd> – <kbd className="key-badge">7</kbd>
                <span>Quick drop column</span>
              </div>
              <div className="shortcut-item">
                <kbd className="key-badge">U</kbd>
                <span>Undo move</span>
              </div>
              <div className="shortcut-item">
                <kbd className="key-badge">R</kbd>
                <span>Restart / Rematch</span>
              </div>
              <div className="shortcut-item">
                <kbd className="key-badge">M</kbd>
                <span>Toggle Sound</span>
              </div>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button type="button" className="got-it-btn" onClick={onClose}>
            Got It!
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
          max-width: 520px;
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

        .modal-close-btn:hover {
          color: var(--text-main);
          background: var(--surface-glass);
        }

        .modal-body {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 22px;
          max-height: 70vh;
          overflow-y: auto;
        }

        .rule-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }

        @media (max-width: 480px) {
          .rule-cards-grid {
            grid-template-columns: 1fr;
          }
        }

        .rule-card {
          background: rgba(0, 0, 0, 0.28);
          border: 1px solid var(--surface-border);
          border-radius: var(--radius-md);
          padding: 16px 14px;
          text-align: center;
        }

        .rule-number {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: var(--accent-gradient);
          color: #fff;
          font-weight: 800;
          font-size: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 10px;
        }

        .rule-heading {
          font-size: 15px;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 6px;
        }

        .rule-text {
          font-size: 12px;
          line-height: 1.45;
          color: var(--text-muted);
        }

        .keyboard-shortcuts-section {
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid var(--surface-border);
          border-radius: var(--radius-md);
          padding: 16px 18px;
        }

        .shortcuts-title {
          font-size: 14px;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 12px;
        }

        .shortcuts-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px 14px;
        }

        @media (max-width: 480px) {
          .shortcuts-grid {
            grid-template-columns: 1fr;
          }
        }

        .shortcut-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: var(--text-muted);
        }

        .key-badge {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-bottom-width: 2px;
          border-radius: 4px;
          padding: 2px 7px;
          font-family: monospace;
          font-size: 12px;
          color: var(--text-main);
        }

        .modal-footer {
          padding: 16px 24px;
          border-top: 1px solid var(--surface-border);
          display: flex;
          justify-content: flex-end;
        }

        .got-it-btn {
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
