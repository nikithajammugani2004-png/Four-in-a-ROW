import React, { useState, useEffect } from 'react';
import { AiDifficulty } from '../../ai/types';
import { Board } from '../../domain/board';
import { Player } from '../../domain/types';
import { BoardView } from '../../components/BoardView';

interface LandingPageProps {
  onStartAiGame: (difficulty: AiDifficulty) => void;
  onStartLocalGame: () => void;
  onOpenHowToPlay: () => void;
  hasSavedGame: boolean;
  onResumeSavedGame: () => void;
}

const DEMO_MOVES = [3, 3, 2, 4, 3, 2, 4, 4, 1, 5, 0, 3];

export const LandingPage: React.FC<LandingPageProps> = ({
  onStartAiGame,
  onStartLocalGame,
  onOpenHowToPlay,
  hasSavedGame,
  onResumeSavedGame
}) => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<AiDifficulty>('medium');
  const [demoBoard, setDemoBoard] = useState<Board>(() => Board.createEmpty());
  const [, setDemoMoveIndex] = useState<number>(0);
  const [demoPlayer, setDemoPlayer] = useState<Player>(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDemoMoveIndex(prevIdx => {
        if (prevIdx >= DEMO_MOVES.length) {
          setDemoBoard(Board.createEmpty());
          setDemoPlayer(1);
          return 0;
        }

        const col = DEMO_MOVES[prevIdx];
        setDemoBoard(currBoard => {
          const res = currBoard.drop(col, demoPlayer);
          return res.success ? res.board : currBoard;
        });

        setDemoPlayer(p => (p === 1 ? 2 : 1));
        return prevIdx + 1;
      });
    }, 1400);

    return () => clearInterval(timer);
  }, [demoPlayer]);

  return (
    <main className="landing-container">
      {hasSavedGame && (
        <div className="resume-banner">
          <div className="resume-info">
            <span className="live-pulse-dot" />
            <span>Active match detected in progress</span>
          </div>
          <button type="button" className="resume-btn" onClick={onResumeSavedGame}>
            Resume Game →
          </button>
        </div>
      )}

      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-glow-dot" /> Pure TypeScript Engine • 60 FPS
          </div>
          <h1 className="hero-title">
            Tactical Drop & Connect, <span className="gradient-text">Perfected.</span>
          </h1>
          <p className="hero-subtitle">
            Enter the arena against our 5-tier calibrated AI running on dedicated Web Workers,
            or battle a rival in local pass & play. Powered by procedural Web Audio, accessible graphics, and zero latency.
          </p>

          <div className="hero-cta-box">
            <div className="difficulty-picker">
              <div className="picker-header">
                <span className="picker-label">AI CHALLENGE TIER</span>
                <span className="picker-hint">Select opponent strength</span>
              </div>

              <div className="difficulty-buttons">
                {(['beginner', 'easy', 'medium', 'hard', 'expert'] as AiDifficulty[]).map(lvl => (
                  <button
                    key={lvl}
                    type="button"
                    className={`diff-btn diff-${lvl} ${selectedDifficulty === lvl ? 'active' : ''}`}
                    onClick={() => setSelectedDifficulty(lvl)}
                  >
                    <span className={`diff-dot dot-${lvl}`} />
                    {lvl.charAt(0).toUpperCase() + lvl.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className="cta-actions">
              <button
                type="button"
                className="cta-btn primary-cta"
                onClick={() => onStartAiGame(selectedDifficulty)}
              >
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                  <polygon points="6 4 20 12 6 20 6 4"/>
                </svg>
                <span>Play vs Computer</span>
              </button>

              <button
                type="button"
                className="cta-btn secondary-cta"
                onClick={onStartLocalGame}
              >
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
                </svg>
                <span>Two Players (Pass & Play)</span>
              </button>
            </div>
          </div>
        </div>

        <div className="hero-board-wrapper" aria-hidden="true">
          <div className="board-ambient-glow" />
          <div className="demo-label">
            <span className="live-pulse-dot" /> LIVE ENGINE ARENA
          </div>
          <BoardView
            board={demoBoard}
            currentPlayer={demoPlayer}
            winningLine={null}
            isLocked={true}
            onDrop={() => {}}
          />
        </div>
      </section>

      <section className="how-it-works-section">
        <h2 className="section-title">How It Works</h2>
        <div className="steps-container">
          <div className="step-card">
            <div className="step-badge">01</div>
            <h3>Drop into Columns</h3>
            <p>Target any of the 7 column shafts. Real gravity easing sends your piece to the lowest open slot.</p>
          </div>
          <div className="step-card">
            <div className="step-badge">02</div>
            <h3>Form Lines of Four</h3>
            <p>Line up 4 matching pieces horizontally, vertically, or along diagonals while countering enemy vectors.</p>
          </div>
          <div className="step-card">
            <div className="step-badge">03</div>
            <h3>Claim Victory</h3>
            <p>Seal your four-in-a-row alignment before your rival corners you or the 42 slots exhaust into a draw.</p>
          </div>
        </div>
      </section>

      <section className="ai-levels-section">
        <h2 className="section-title">Calibrated AI Opponents</h2>
        <p className="section-desc">
          Because Connect Four is a mathematically solved game, a computer with perfect play wins every time as Player 1.
          Our engine calibrates 5 distinctive skill levels designed for genuine tactical fun and competition.
        </p>

        <div className="levels-grid">
          <div className="level-card tier-beginner">
            <div className="level-header">
              <span className="level-tag beginner">TIER 1</span>
              <span className="level-rank">RECRUIT</span>
            </div>
            <h4>Beginner</h4>
            <p>Random legal exploration with a 50% chance of seizing an open win. Great for newcomers and casual play.</p>
          </div>

          <div className="level-card tier-easy">
            <div className="level-header">
              <span className="level-tag easy">TIER 2</span>
              <span className="level-rank">FIGHTER</span>
            </div>
            <h4>Easy</h4>
            <p>Always detects 1-ply winning moves and shuts down your immediate threats with center-biased tactical drops.</p>
          </div>

          <div className="level-card tier-medium">
            <div className="level-header">
              <span className="level-tag medium">TIER 3</span>
              <span className="level-rank">VETERAN</span>
            </div>
            <h4>Medium</h4>
            <p>Minimax search looking 4 plies ahead with alpha-beta pruning and positional window evaluations. A balanced foe.</p>
          </div>

          <div className="level-card tier-hard">
            <div className="level-header">
              <span className="level-tag hard">TIER 4</span>
              <span className="level-rank">ELITE</span>
            </div>
            <h4>Hard</h4>
            <p>Deep 7-ply alpha-beta search with center-first exploration ordering and transposition memory. Punishes subtle blunders.</p>
          </div>

          <div className="level-card tier-expert">
            <div className="level-header">
              <span className="level-tag expert">TIER 5</span>
              <span className="level-rank">MASTER</span>
            </div>
            <h4>Expert</h4>
            <p>Iterative deepening to depth 9 within a 1.5s time budget. Deep strategic foresight engineered for high-level players.</p>
          </div>
        </div>
      </section>

      <footer className="landing-footer">
        <div className="footer-content">
          <p>© {new Date().getFullYear()} Four in a Row • Esports Tactical Engine</p>
          <div className="footer-links">
            <button type="button" onClick={onOpenHowToPlay}>Rules & Shortcuts</button>
            <span>•</span>
            <span>Local Storage Only</span>
            <span>•</span>
            <span>WCAG 2.2 AA</span>
          </div>
        </div>
      </footer>

      <style>{`
        .landing-container {
          width: 100%;
          max-width: 1120px;
          margin: 0 auto;
          padding: clamp(8px, 1.8vh, 18px) clamp(12px, 3vw, 26px) 60px;
          display: flex;
          flex-direction: column;
          gap: clamp(36px, 6vw, 64px);
          box-sizing: border-box;
          color: var(--text-main);
        }

        /* Active Match Resume Banner */
        .resume-banner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: var(--surface-glass);
          border: 1px solid var(--surface-border);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          padding: clamp(10px, 1.5vh, 14px) clamp(14px, 2vw, 22px);
          border-radius: var(--radius-md);
          font-size: clamp(13px, 2.5vw, 15px);
          font-weight: 600;
          flex-wrap: wrap;
          gap: 10px;
        }

        .resume-info {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .resume-btn {
          background: var(--accent-gradient);
          color: #fff;
          padding: 8px 18px;
          border-radius: var(--radius-sm);
          font-weight: 800;
          font-size: 13px;
          letter-spacing: 0.02em;
          box-shadow: var(--accent-glow);
          transition: transform 0.15s ease, filter 0.15s ease;
        }

        .resume-btn:hover {
          transform: translateY(-1px);
          filter: brightness(1.15);
        }

        /* Hero Layout */
        .hero-section {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: clamp(24px, 4vw, 44px);
          align-items: center;
          padding-top: 10px;
        }

        @media (max-width: 880px) {
          .hero-section {
            grid-template-columns: 1fr;
          }
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: clamp(10px, 2vw, 12px);
          font-weight: 800;
          color: var(--accent-color);
          background: var(--surface-glass);
          border: 1px solid var(--surface-border);
          box-shadow: var(--accent-glow);
          padding: 5px 12px;
          border-radius: var(--radius-full);
          margin-bottom: 14px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .badge-glow-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--accent-color);
          box-shadow: 0 0 8px var(--accent-color);
        }

        .hero-title {
          font-size: clamp(30px, 6vw, 54px);
          font-weight: 900;
          line-height: 1.1;
          letter-spacing: -0.03em;
          color: var(--text-main);
          margin-bottom: 14px;
        }

        .gradient-text {
          background: var(--accent-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtitle {
          font-size: clamp(14px, 2vw, 17px);
          line-height: 1.55;
          color: var(--text-muted);
          margin-bottom: 24px;
        }

        /* Hero Gaming CTA Box */
        .hero-cta-box {
          display: flex;
          flex-direction: column;
          gap: 16px;
          background: var(--surface-card);
          border: 1px solid var(--surface-border);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.1);
          padding: clamp(16px, 2.5vw, 22px);
          border-radius: var(--radius-lg);
        }

        .difficulty-picker {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .picker-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
        }

        .picker-label {
          font-size: 11px;
          font-weight: 800;
          color: var(--text-dim);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .picker-hint {
          font-size: 11px;
          color: var(--text-muted);
        }

        .difficulty-buttons {
          display: flex;
          gap: 6px;
          background: var(--surface-card-subtle);
          padding: 4px;
          border-radius: var(--radius-md);
          border: 1px solid var(--surface-border);
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }

        .diff-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 8px 10px;
          font-size: clamp(11px, 2.2vw, 13px);
          font-weight: 700;
          border-radius: var(--radius-sm);
          color: var(--text-muted);
          transition: all 0.2s ease;
          white-space: nowrap;
          background: transparent;
          border: 1px solid transparent;
        }

        .diff-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          display: inline-block;
        }

        .dot-beginner { background: var(--tier-beginner); box-shadow: 0 0 6px var(--tier-beginner); }
        .dot-easy { background: var(--tier-easy); box-shadow: 0 0 6px var(--tier-easy); }
        .dot-medium { background: var(--tier-medium); box-shadow: 0 0 6px var(--tier-medium); }
        .dot-hard { background: var(--tier-hard); box-shadow: 0 0 6px var(--tier-hard); }
        .dot-expert { background: var(--tier-expert); box-shadow: 0 0 6px var(--tier-expert); }

        .diff-btn:hover {
          color: var(--text-main);
          background: var(--surface-glass-hover);
        }

        .diff-btn.active {
          background: var(--surface-glass);
          color: var(--accent-color);
          border: 1px solid var(--accent-color);
          box-shadow: var(--accent-glow);
        }

        .cta-actions {
          display: flex;
          gap: 12px;
        }

        @media (max-width: 520px) {
          .cta-actions {
            flex-direction: column;
          }
        }

        .cta-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: clamp(13px, 2vh, 16px) clamp(16px, 2.5vw, 24px);
          border-radius: var(--radius-md);
          font-size: clamp(14px, 2.5vw, 16px);
          font-weight: 800;
          letter-spacing: 0.02em;
          transition: all 0.2s ease;
        }

        .primary-cta {
          background: var(--accent-gradient);
          color: #ffffff;
          box-shadow: var(--accent-glow);
          border: none;
          flex: 1.25;
        }

        .primary-cta:hover {
          filter: brightness(1.15);
          transform: translateY(-2px);
        }

        .primary-cta:active {
          transform: translateY(1px);
        }

        .secondary-cta {
          background: var(--surface-glass);
          border: 1px solid var(--surface-border);
          color: var(--text-main);
          flex: 1;
        }

        .secondary-cta:hover {
          background: var(--surface-glass-hover);
          transform: translateY(-2px);
        }

        .secondary-cta:active {
          transform: translateY(1px);
        }

        /* Demo Board Area */
        .hero-board-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          width: 100%;
          max-width: 490px;
          margin: 0 auto;
        }

        .board-ambient-glow {
          position: absolute;
          width: 95%;
          height: 95%;
          background: radial-gradient(circle, var(--accent-color) 0%, transparent 75%);
          opacity: 0.2;
          filter: blur(40px);
          z-index: -1;
          pointer-events: none;
        }

        .demo-label {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-weight: 800;
          color: var(--text-dim);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 8px;
          background: var(--surface-glass);
          border: 1px solid var(--surface-border);
          padding: 4px 10px;
          border-radius: var(--radius-full);
        }

        .live-pulse-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 8px #10b981;
          animation: ghostFloat 1.2s infinite alternate;
        }

        /* Section Headings */
        .section-title {
          font-size: clamp(26px, 4.5vw, 36px);
          font-weight: 900;
          color: var(--text-main);
          text-align: center;
          margin-bottom: 12px;
          letter-spacing: -0.02em;
        }

        .section-desc {
          font-size: 15px;
          color: var(--text-muted);
          text-align: center;
          max-width: 700px;
          margin: 0 auto 36px;
          line-height: 1.6;
        }

        /* How It Works Tutorial Cards */
        .steps-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 24px;
        }

        @media (max-width: 760px) {
          .steps-container {
            grid-template-columns: 1fr;
          }
        }

        .step-card {
          background: var(--surface-card);
          border: 1px solid var(--surface-border);
          border-radius: var(--radius-lg);
          padding: 26px 22px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 12px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.05);
          transition: all 0.25s ease;
        }

        .step-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.1), var(--accent-glow);
        }

        .step-badge {
          font-family: monospace;
          font-size: 13px;
          font-weight: 900;
          color: var(--accent-color);
          background: var(--surface-glass);
          border: 1px solid var(--surface-border);
          padding: 4px 10px;
          border-radius: var(--radius-sm);
        }

        .step-card h3 {
          font-size: 19px;
          font-weight: 800;
          color: var(--text-main);
        }

        .step-card p {
          font-size: 14px;
          line-height: 1.55;
          color: var(--text-muted);
        }

        /* Calibrated AI Grid (Boss Cards) */
        .levels-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 18px;
        }

        .level-card {
          background: var(--surface-card);
          border: 1px solid var(--surface-border);
          border-radius: var(--radius-md);
          padding: 22px 18px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
          transition: all 0.25s ease;
          position: relative;
          overflow: hidden;
        }

        .level-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
        }

        .level-card.tier-beginner::before { background: var(--tier-beginner); box-shadow: 0 0 10px var(--tier-beginner); }
        .level-card.tier-easy::before { background: var(--tier-easy); box-shadow: 0 0 10px var(--tier-easy); }
        .level-card.tier-medium::before { background: var(--tier-medium); box-shadow: 0 0 10px var(--tier-medium); }
        .level-card.tier-hard::before { background: var(--tier-hard); box-shadow: 0 0 10px var(--tier-hard); }
        .level-card.tier-expert::before { background: var(--tier-expert); box-shadow: 0 0 10px var(--tier-expert); }

        .level-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.1);
        }

        .level-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .level-tag {
          font-size: 10px;
          font-weight: 900;
          text-transform: uppercase;
          padding: 3px 8px;
          border-radius: 4px;
          letter-spacing: 0.05em;
        }

        .level-tag.beginner { background: rgba(16, 185, 129, 0.2); color: var(--tier-beginner); }
        .level-tag.easy { background: rgba(6, 182, 212, 0.2); color: var(--tier-easy); }
        .level-tag.medium { background: rgba(245, 158, 11, 0.2); color: var(--tier-medium); }
        .level-tag.hard { background: rgba(249, 115, 22, 0.2); color: var(--tier-hard); }
        .level-tag.expert { background: rgba(239, 68, 68, 0.2); color: var(--tier-expert); }

        .level-rank {
          font-size: 10px;
          font-weight: 800;
          color: var(--text-dim);
          letter-spacing: 0.06em;
        }

        .level-card h4 {
          font-size: 17px;
          font-weight: 800;
          color: var(--text-main);
        }

        .level-card p {
          font-size: 13px;
          line-height: 1.55;
          color: var(--text-muted);
        }

        /* Footer */
        .landing-footer {
          border-top: 1px solid var(--surface-border);
          padding-top: 28px;
          margin-top: 10px;
        }

        .footer-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 13px;
          color: var(--text-dim);
          flex-wrap: wrap;
          gap: 12px;
        }

        .footer-links {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .footer-links button {
          color: var(--text-muted);
          font-weight: 600;
          background: transparent;
          border: none;
          cursor: pointer;
        }

        .footer-links button:hover {
          color: var(--text-main);
        }
      `}</style>
    </main>
  );
};
