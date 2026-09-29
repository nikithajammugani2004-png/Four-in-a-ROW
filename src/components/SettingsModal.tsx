import React, { useEffect } from 'react';
import { MotionOption, PaletteOption, ThemeOption, UserSettings } from '../services/storage';

interface SettingsModalProps {
  isOpen: boolean;
  settings: UserSettings;
  onUpdateSettings: (partial: Partial<UserSettings>) => void;
  onClose: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  settings,
  onUpdateSettings,
  onClose
}) => {
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
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="settings-title">
      <div className="modal-card" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2 id="settings-title" className="modal-title">Settings & Accessibility</h2>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close Settings (Esc)"
          >
            &times;
          </button>
        </div>

        <div className="modal-body">
          <div className="setting-group">
            <label className="setting-label">Theme</label>
            <div className="segmented-control">
              {(['system', 'dark', 'light'] as ThemeOption[]).map(t => (
                <button
                  key={t}
                  type="button"
                  className={`segment-btn ${settings.theme === t ? 'active' : ''}`}
                  onClick={() => onUpdateSettings({ theme: t })}
                >
                  {t.charAt(0).toUpperCase() + t.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="setting-group">
            <div className="setting-label-row">
              <label className="setting-label">Color Palette</label>
              <span className="setting-hint">Accessible token styling</span>
            </div>
            <div className="palette-grid">
              {[
                { id: 'classic', label: 'Classic', c1: '#ef4444', c2: '#eab308' },
                { id: 'colorblind', label: 'Colorblind Safe', c1: '#0284c7', c2: '#ea580c' },
                { id: 'neon', label: 'Neon Cyber', c1: '#06b6d4', c2: '#ec4899' },
                { id: 'monochrome', label: 'Monochrome', c1: '#ffffff', c2: '#1e293b' }
              ].map(p => (
                <button
                  key={p.id}
                  type="button"
                  className={`palette-card ${settings.palette === p.id ? 'active' : ''}`}
                  onClick={() => onUpdateSettings({ palette: p.id as PaletteOption })}
                >
                  <div className="palette-swatches">
                    <span className="swatch" style={{ background: p.c1 }} />
                    <span className="swatch" style={{ background: p.c2 }} />
                  </div>
                  <span className="palette-title">{p.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="setting-row">
            <div>
              <div className="setting-title-line">Sound Effects</div>
              <div className="setting-hint">Procedural drop, win, and draw chimes</div>
            </div>
            <button
              type="button"
              className={`toggle-switch ${settings.sound ? 'on' : 'off'}`}
              onClick={() => onUpdateSettings({ sound: !settings.sound })}
              role="switch"
              aria-checked={settings.sound}
            >
              <span className="toggle-handle" />
            </button>
          </div>

          <div className="setting-row">
            <div>
              <div className="setting-title-line">Haptic Feedback</div>
              <div className="setting-hint">Tactile vibrations on supported mobile devices</div>
            </div>
            <button
              type="button"
              className={`toggle-switch ${settings.haptics ? 'on' : 'off'}`}
              onClick={() => onUpdateSettings({ haptics: !settings.haptics })}
              role="switch"
              aria-checked={settings.haptics}
            >
              <span className="toggle-handle" />
            </button>
          </div>

          <div className="setting-group">
            <div className="setting-label-row">
              <label className="setting-label">Motion Animations</label>
              <span className="setting-hint">Controls drop bounce and particle effects</span>
            </div>
            <div className="segmented-control">
              {(['system', 'off', 'on'] as MotionOption[]).map(m => (
                <button
                  key={m}
                  type="button"
                  className={`segment-btn ${settings.reducedMotion === m ? 'active' : ''}`}
                  onClick={() => onUpdateSettings({ reducedMotion: m })}
                >
                  {m === 'system' ? 'System Pref' : m === 'on' ? 'Reduced' : 'Full Motion'}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button type="button" className="done-btn" onClick={onClose}>
            Done
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
          max-width: 480px;
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
          line-height: 1;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: background 0.2s ease;
        }

        .modal-close-btn:hover {
          color: var(--text-main);
          background: var(--surface-glass);
        }

        .modal-body {
          padding: 22px 24px;
          display: flex;
          flex-direction: column;
          gap: 22px;
          max-height: 68vh;
          overflow-y: auto;
        }

        .setting-group {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .setting-label-row {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
        }

        .setting-label {
          font-size: 14px;
          font-weight: 700;
          color: var(--text-main);
        }

        .setting-hint {
          font-size: 12px;
          color: var(--text-dim);
        }

        .setting-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        .setting-title-line {
          font-size: 15px;
          font-weight: 600;
          color: var(--text-main);
        }

        .segmented-control {
          display: flex;
          background: rgba(0, 0, 0, 0.3);
          padding: 4px;
          border-radius: var(--radius-md);
          border: 1px solid var(--surface-border);
        }

        .segment-btn {
          flex: 1;
          padding: 8px 12px;
          font-size: 13px;
          font-weight: 600;
          border-radius: var(--radius-sm);
          color: var(--text-muted);
          transition: all 0.2s ease;
        }

        .segment-btn.active {
          background: var(--accent-color);
          color: #ffffff;
          box-shadow: 0 2px 8px rgba(99, 102, 241, 0.4);
        }

        .palette-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .palette-card {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          border-radius: var(--radius-md);
          background: rgba(0, 0, 0, 0.25);
          border: 1px solid var(--surface-border);
          transition: all 0.2s ease;
          text-align: left;
        }

        .palette-card.active {
          border-color: var(--accent-color);
          background: rgba(99, 102, 241, 0.15);
        }

        .palette-swatches {
          display: flex;
          gap: 4px;
        }

        .swatch {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .palette-title {
          font-size: 13px;
          font-weight: 600;
          color: var(--text-main);
        }

        .toggle-switch {
          width: 48px;
          height: 28px;
          border-radius: var(--radius-full);
          background: rgba(255, 255, 255, 0.15);
          position: relative;
          transition: background 0.25s ease;
          flex-shrink: 0;
        }

        .toggle-switch.on {
          background: var(--accent-color);
        }

        .toggle-handle {
          position: absolute;
          top: 3px;
          left: 3px;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #ffffff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
          transition: transform 0.25s cubic-bezier(0.34, 1.4, 0.64, 1);
        }

        .toggle-switch.on .toggle-handle {
          transform: translateX(20px);
        }

        .modal-footer {
          padding: 16px 24px;
          border-top: 1px solid var(--surface-border);
          display: flex;
          justify-content: flex-end;
        }

        .done-btn {
          background: var(--accent-gradient);
          color: #ffffff;
          padding: 10px 24px;
          border-radius: var(--radius-md);
          font-size: 14px;
          font-weight: 700;
          transition: transform 0.15s ease;
        }

        .done-btn:hover {
          transform: translateY(-1px);
        }
      `}</style>
    </div>
  );
};
