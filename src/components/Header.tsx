import React from 'react';
import { AiDifficulty } from '../ai/types';

interface HeaderProps {
  mode?: 'landing' | 'ai' | 'local';
  difficulty?: AiDifficulty;
  soundMuted: boolean;
  onToggleSound: () => void;
  onOpenSettings: () => void;
  onOpenStats: () => void;
  onOpenHowToPlay: () => void;
  onNavigateHome?: () => void;
  theme: 'system' | 'light' | 'dark';
  onToggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  mode = 'landing',
  difficulty,
  soundMuted,
  onToggleSound,
  onOpenSettings,
  onOpenStats,
  onOpenHowToPlay,
  onNavigateHome,
  theme,
  onToggleTheme
}) => {
  return (
    <header className="app-header">
      <div className="header-left">
        {onNavigateHome && mode !== 'landing' ? (
          <button
            type="button"
            className="brand-button"
            onClick={onNavigateHome}
            aria-label="Back to home"
          >
            <span className="brand-dot p1-dot" />
            <span className="brand-dot p2-dot" />
            <span className="brand-title">Four in a Row</span>
          </button>
        ) : (
          <div className="brand-button">
            <span className="brand-dot p1-dot" />
            <span className="brand-dot p2-dot" />
            <span className="brand-title">Four in a Row</span>
          </div>
        )}

        {mode !== 'landing' && (
          <div className="mode-badge">
            {mode === 'ai' ? `vs AI (${difficulty})` : '2 Players (Pass & Play)'}
          </div>
        )}
      </div>

      <div className="header-actions">
        <button
          type="button"
          className="icon-button theme-toggle"
          onClick={onToggleTheme}
          title="Toggle Theme"
          aria-label="Toggle Theme"
        >
          {theme === 'dark' ? (
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="5"/>
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
            </svg>
          )}
        </button>
        <button
          type="button"
          className={`icon-button ${soundMuted ? 'muted' : ''}`}
          onClick={onToggleSound}
          title={soundMuted ? 'Unmute Sound' : 'Mute Sound'}
          aria-label={soundMuted ? 'Unmute Sound (M)' : 'Mute Sound (M)'}
        >
          {soundMuted ? (
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M11 5L6 9H2v6h4l5 4V5zM23 9l-6 6M17 9l6 6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M11 5L6 9H2v6h4l5 4V5zM19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </button>

        <button
          type="button"
          className="icon-button"
          onClick={onOpenStats}
          title="Statistics"
          aria-label="View Statistics"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 20V10M12 20V4M6 20v-6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <button
          type="button"
          className="icon-button"
          onClick={onOpenHowToPlay}
          title="How to Play"
          aria-label="How to Play Rules and Help"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <button
          type="button"
          className="icon-button"
          onClick={onOpenSettings}
          title="Settings"
          aria-label="Game Settings"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="3"/>
            <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/>
          </svg>
        </button>
      </div>

      <style>{`
        .app-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          max-width: 100%;
          margin: 0 auto;
          padding: clamp(8px, 1.5vh, 12px) clamp(12px, 3vw, 24px);
          z-index: 50;
          box-sizing: border-box;
          background: var(--surface-glass);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--surface-border);
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: clamp(6px, 1.5vw, 12px);
          min-width: 0;
        }

        .brand-button {
          display: flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          border: none;
          padding: 4px 8px;
          border-radius: var(--radius-sm);
          transition: background 0.2s ease;
          flex-shrink: 0;
        }

        .brand-button:hover {
          background: var(--surface-glass-hover);
        }

        .brand-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }

        .p1-dot {
          background: var(--p1-gradient);
          box-shadow: 0 0 8px var(--p1-color);
        }

        .p2-dot {
          background: var(--p2-gradient);
          box-shadow: 0 0 8px var(--p2-color);
          margin-left: -5px;
        }

        .brand-title {
          font-size: clamp(14px, 3.5vw, 18px);
          font-weight: 900;
          letter-spacing: -0.02em;
          color: var(--text-main);
          white-space: nowrap;
        }

        .mode-badge {
          font-size: clamp(10px, 2vw, 11px);
          font-weight: 800;
          color: var(--accent-color);
          background: var(--surface-glass);
          border: 1px solid var(--surface-border);
          box-shadow: var(--accent-glow);
          padding: 3px 9px;
          border-radius: var(--radius-full);
          text-transform: uppercase;
          letter-spacing: 0.04em;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          max-width: 150px;
        }

        @media (max-width: 440px) {
          .mode-badge {
            display: none;
          }
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: clamp(5px, 1.2vw, 8px);
          flex-shrink: 0;
        }

        .icon-button {
          width: clamp(34px, 8vw, 40px);
          height: clamp(34px, 8vw, 40px);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: var(--surface-glass);
          border: 1px solid var(--surface-border);
          color: var(--text-muted);
          transition: all 0.2s ease;
        }

        .icon-button svg {
          width: clamp(16px, 4vw, 19px);
          height: clamp(16px, 4vw, 19px);
        }

        .icon-button:hover {
          background: var(--surface-glass-hover);
          border-color: var(--accent-color);
          color: var(--text-main);
          box-shadow: var(--accent-glow);
          transform: translateY(-1px);
        }

        .icon-button.muted {
          color: #f87171;
          border-color: rgba(239, 68, 68, 0.45);
          box-shadow: 0 0 10px rgba(239, 68, 68, 0.25);
        }
      `}</style>
    </header>
  );
};
