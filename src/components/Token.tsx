import React from 'react';
import { Player } from '../domain/types';

interface TokenProps {
  player: Player;
  isWinning?: boolean;
  isGhost?: boolean;
  dropDistance?: number;
  className?: string;
}

export const Token: React.FC<TokenProps> = ({
  player,
  isWinning = false,
  isGhost = false,
  dropDistance = 0,
  className = ''
}) => {
  const isP1 = player === 1;

  const style: React.CSSProperties = {
    '--drop-distance': dropDistance,
    animation: dropDistance > 0 ? `dropFall 0.38s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards` : undefined
  } as React.CSSProperties;

  return (
    <div
      className={`token-container ${isWinning ? 'token-winning' : ''} ${isGhost ? 'token-ghost' : ''} ${className}`}
      style={style}
      aria-hidden="true"
    >
      <div className={`coin-3d ${isP1 ? 'coin-p1' : 'coin-p2'}`}>
        <div className="coin-inner-ring">
          <div className="coin-center-face" />
        </div>
      </div>

      <style>{`
        .token-container {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .coin-3d {
          width: 88%;
          height: 88%;
          border-radius: 50%;
          position: relative;
          box-sizing: border-box;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .coin-p1 {
          background: var(--p1-gradient);
          border: clamp(2px, 0.5vw, 4px) solid rgba(0, 0, 0, 0.4);
          box-shadow: 
            var(--p1-shadow),
            inset 0 0 0 clamp(2px, 0.5vw, 4px) rgba(255, 0, 0, 0.5),
            inset 0 5px 8px rgba(255, 255, 255, 0.4),
            inset 0 -5px 8px rgba(0, 0, 0, 0.3);
        }

        .coin-p2 {
          background: var(--p2-gradient);
          border: clamp(2px, 0.5vw, 4px) solid rgba(0, 0, 0, 0.4);
          box-shadow: 
            var(--p2-shadow),
            inset 0 0 0 clamp(2px, 0.5vw, 4px) rgba(255, 140, 0, 0.6),
            inset 0 5px 8px rgba(255, 255, 255, 0.5),
            inset 0 -5px 8px rgba(0, 0, 0, 0.2);
        }

        .coin-inner-ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          pointer-events: none;
        }

        .coin-center-face {
          position: absolute;
          top: 6%;
          left: 15%;
          width: 70%;
          height: 40%;
          border-radius: 50%;
          background: linear-gradient(180deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 80%);
          pointer-events: none;
        }

        .token-winning {
          z-index: 10;
        }

        .token-winning .coin-3d {
          animation: winPulse 1.2s ease-in-out infinite alternate;
          border-color: #ffffff;
        }

        .token-winning .coin-p1 {
          box-shadow:
            0 0 24px 6px rgba(244, 63, 94, 0.95),
            0 4px 12px rgba(0, 0, 0, 0.75),
            inset 0 1.5px 2px rgba(255, 255, 255, 0.7);
        }

        .token-winning .coin-p2 {
          box-shadow:
            0 0 24px 6px rgba(250, 204, 21, 0.95),
            0 4px 12px rgba(0, 0, 0, 0.75),
            inset 0 1.5px 2px rgba(255, 255, 255, 0.8);
        }

        .token-ghost {
          opacity: 0.7;
          animation: ghostFloat 1.8s ease-in-out infinite;
        }

        .token-ghost .coin-3d {
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.35);
        }
        [data-palette="colorblind"] .coin-p1 {
          background: var(--p1-gradient);
        }
        [data-palette="colorblind"] .coin-p2 {
          background: var(--p2-gradient);
        }

        [data-palette="neon"] .coin-p1 {
          background: var(--p1-gradient);
        }
        [data-palette="neon"] .coin-p2 {
          background: var(--p2-gradient);
        }

        [data-palette="monochrome"] .coin-p1 {
          background: var(--p1-gradient);
        }
        [data-palette="monochrome"] .coin-p2 {
          background: var(--p2-gradient);
        }
      `}</style>
    </div>
  );
};

