import React from 'react';
import { GameStatus, Player } from '../domain/types';
import { Token } from './Token';

interface TurnIndicatorProps {
  status: GameStatus;
  mode: 'ai' | 'local';
  isAiThinking: boolean;
  p1Name?: string;
  p2Name?: string;
}

export const TurnIndicator: React.FC<TurnIndicatorProps> = ({
  status,
  mode,
  isAiThinking,
  p1Name = 'Player 1',
  p2Name = mode === 'ai' ? 'Computer' : 'Player 2'
}) => {
  let title = '';
  let subtitle = '';
  let activePlayer: Player | null = null;

  if (status.kind === 'playing') {
    activePlayer = status.next;
    const isAiTurn = mode === 'ai' && activePlayer === 2;

    if (isAiThinking) {
      title = `${p2Name} is thinking...`;
      subtitle = 'Analyzing board positions';
    } else {
      title = `${activePlayer === 1 ? p1Name : p2Name}'s Turn`;
      subtitle = isAiTurn ? 'Computer is calculating' : 'Choose a column to drop';
    }
  } else if (status.kind === 'won') {
    activePlayer = status.winner;
    const winnerName = status.winner === 1 ? p1Name : p2Name;
    title = `${winnerName} Wins!`;
    subtitle = '4 in a row connected!';
  } else {
    title = "It's a Draw!";
    subtitle = 'Board is completely full';
  }

  return (
    <div className="turn-indicator-card" aria-live="polite" aria-atomic="true">
      <div className="player-badge-container">
        {activePlayer && (
          <div className="token-preview-wrapper">
            <Token player={activePlayer} />
          </div>
        )}
      </div>

      <div className="text-info">
        <h2 className="turn-title">
          {title}
          {isAiThinking && <span className="thinking-dots">...</span>}
        </h2>
        <p className="turn-subtitle">{subtitle}</p>
      </div>

      <style>{`
        .turn-indicator-card {
          display: flex;
          align-items: center;
          gap: 14px;
          background: var(--surface-glass);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1px solid var(--surface-border);
          border-radius: var(--radius-lg);
          padding: 10px 22px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15), 0 0 20px var(--surface-border-glow);
          transition: all 0.25s ease;
        }

        .player-badge-container {
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .token-preview-wrapper {
          width: 38px;
          height: 38px;
        }

        .text-info {
          display: flex;
          flex-direction: column;
        }

        .turn-title {
          font-size: clamp(16px, 3.5vw, 19px);
          font-weight: 700;
          color: var(--text-main);
          letter-spacing: -0.01em;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .turn-subtitle {
          font-size: clamp(12px, 2.5vw, 13px);
          color: var(--text-muted);
          margin-top: 1px;
        }

        .thinking-dots {
          display: inline-block;
          animation: ghostFloat 1s infinite alternate;
        }
      `}</style>
    </div>
  );
};
