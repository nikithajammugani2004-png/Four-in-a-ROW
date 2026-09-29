import React, { useState, useEffect, useRef } from 'react';
import { Board } from '../domain/board';
import { BoardCoord, Player } from '../domain/types';
import { Token } from './Token';

interface BoardViewProps {
  board: Board;
  currentPlayer: Player;
  winningLine: readonly BoardCoord[] | null;
  isLocked: boolean;
  onDrop: (col: number) => void;
  lastMove?: { row: number; col: number; player: Player } | null;
  hintCol?: number | null;
}

export const BoardView: React.FC<BoardViewProps> = ({
  board,
  currentPlayer,
  winningLine,
  isLocked,
  onDrop,
  lastMove,
  hintCol = null
}) => {
  const [hoveredCol, setHoveredCol] = useState<number | null>(null);
  const [focusedCol, setFocusedCol] = useState<number>(3);
  const boardRef = useRef<HTMLDivElement>(null);

  const cols = board.cols;
  const rows = board.rows;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isLocked) return;

      if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
        e.preventDefault();
        setFocusedCol(prev => Math.max(0, prev - 1));
      } else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
        e.preventDefault();
        setFocusedCol(prev => Math.min(cols - 1, prev + 1));
      } else if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') {
        e.preventDefault();
        if (!board.isColumnFull(focusedCol)) {
          onDrop(focusedCol);
        }
      } else if (e.key >= '1' && e.key <= '7') {
        const colIdx = parseInt(e.key, 10) - 1;
        if (colIdx >= 0 && colIdx < cols && !board.isColumnFull(colIdx)) {
          e.preventDefault();
          setFocusedCol(colIdx);
          onDrop(colIdx);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [board, cols, focusedCol, isLocked, onDrop]);

  const isCellWinning = (row: number, col: number): boolean => {
    if (!winningLine) return false;
    return winningLine.some(([wr, wc]) => wr === row && wc === col);
  };

  const handleColumnClick = (col: number) => {
    if (isLocked || board.isColumnFull(col)) return;
    setFocusedCol(col);
    onDrop(col);
  };

  return (
    <div className="board-wrapper" ref={boardRef}>
      <div className="ghost-bar" aria-hidden="true">
        {Array.from({ length: cols }).map((_, c) => {
          const isTargeted = (hoveredCol === c || focusedCol === c) && !board.isColumnFull(c) && !isLocked;
          const isHint = hintCol === c && !board.isColumnFull(c);

          return (
            <div key={`ghost-${c}`} className={`ghost-slot ${isHint ? 'ghost-slot-hint' : ''}`}>
              {isTargeted && (
                <Token player={currentPlayer} isGhost />
              )}
              {isHint && !isTargeted && (
                <div className="hint-indicator">HINT</div>
              )}
            </div>
          );
        })}
      </div>

      <div
        className="board-grid-frame"
        role="grid"
        aria-label="Connect Four Game Board"
        aria-readonly="true"
      >
        <div className="column-interactive-layer">
          {Array.from({ length: cols }).map((_, c) => {
            const height = board.columnHeight(c);
            const isFull = height >= rows;
            const label = `Column ${c + 1}, ${height} of ${rows} filled${isFull ? ' (Full)' : ''}`;

            return (
              <button
                key={`col-btn-${c}`}
                type="button"
                className={`col-tap-target ${hoveredCol === c ? 'is-hovered' : ''} ${focusedCol === c ? 'is-focused' : ''} ${isFull ? 'is-full' : ''}`}
                onClick={() => handleColumnClick(c)}
                onMouseEnter={() => setHoveredCol(c)}
                onMouseLeave={() => setHoveredCol(null)}
                onFocus={() => {
                  setFocusedCol(c);
                  setHoveredCol(c);
                }}
                onBlur={() => setHoveredCol(null)}
                aria-label={label}
                disabled={isLocked || isFull}
                tabIndex={0}
              >
                <span className="sr-only">{label}</span>
              </button>
            );
          })}
        </div>

        <div className="slots-grid">
          {Array.from({ length: rows }).map((_, visualRowIndex) => {
            const engineRow = rows - 1 - visualRowIndex;

            return (
              <div key={`row-${engineRow}`} className="board-row" role="row">
                {Array.from({ length: cols }).map((_, c) => {
                  const cell = board.cellAt(engineRow, c);
                  const isWinning = isCellWinning(engineRow, c);
                  const isJustDropped = lastMove && lastMove.row === engineRow && lastMove.col === c;
                  const dropDistance = isJustDropped ? (rows - engineRow) : 0;

                  return (
                    <div
                      key={`cell-${engineRow}-${c}`}
                      className={`board-cell ${isWinning ? 'cell-winning' : ''}`}
                      role="gridcell"
                      aria-label={`Row ${engineRow + 1}, Column ${c + 1}: ${cell === 0 ? 'Empty' : `Player ${cell}`}`}
                    >
                      <div className="cell-hole">
                        {cell !== 0 && (
                          <Token
                            player={cell}
                            isWinning={isWinning}
                            dropDistance={dropDistance}
                          />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .board-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: min(
            100%,
            calc((var(--board-max-height, calc(100dvh - 220px))) * (7 / 6)),
            620px
          );
          max-width: 100%;
          margin: 0 auto;
          position: relative;
          user-select: none;
        }

        .ghost-bar {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          width: 100%;
          height: clamp(26px, 6vw, 56px);
          margin-bottom: clamp(2px, 0.8vw, 6px);
          padding: 0 clamp(4px, 1.5vw, 16px);
        }

        .ghost-slot {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .ghost-slot-hint {
          background: rgba(99, 102, 241, 0.15);
          border-radius: var(--radius-sm);
        }

        .hint-indicator {
          font-size: clamp(9px, 1.8vw, 11px);
          font-weight: 800;
          color: #818cf8;
          background: rgba(99, 102, 241, 0.25);
          padding: 2px 6px;
          border-radius: var(--radius-sm);
          border: 1px solid rgba(99, 102, 241, 0.4);
          animation: ghostFloat 1.5s ease-in-out infinite;
        }

        .board-grid-frame {
          position: relative;
          width: 100%;
          aspect-ratio: 7 / 6;
          background: var(--board-bg-gradient);
          border-radius: clamp(12px, 2.8vw, 26px);
          box-shadow: var(--board-shadow);
          padding: clamp(6px, 1.6vw, 16px);
          border: 2px solid var(--board-rim);
          overflow: hidden;
        }

        .board-grid-frame::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent 5%, rgba(255, 255, 255, 0.5) 30%, rgba(129, 140, 248, 0.9) 70%, transparent 95%);
          pointer-events: none;
        }

        .column-interactive-layer {
          position: absolute;
          inset: 0;
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          z-index: 20;
          pointer-events: none;
        }

        .col-tap-target {
          pointer-events: auto;
          height: 100%;
          min-width: 38px;
          background: transparent;
          border-radius: var(--radius-sm);
          transition: background 0.18s ease, box-shadow 0.18s ease;
          position: relative;
        }

        .col-tap-target:hover, .col-tap-target.is-hovered {
          background: linear-gradient(180deg, rgba(99, 102, 241, 0.24) 0%, rgba(99, 102, 241, 0.08) 65%, transparent 100%);
          box-shadow: inset 0 0 14px rgba(99, 102, 241, 0.35);
        }

        .col-tap-target:focus-visible, .col-tap-target.is-focused {
          background: linear-gradient(180deg, rgba(99, 102, 241, 0.32) 0%, rgba(99, 102, 241, 0.12) 65%, transparent 100%);
          outline: 2px solid rgba(129, 140, 248, 0.85);
          outline-offset: -2px;
          box-shadow: inset 0 0 16px rgba(99, 102, 241, 0.45);
        }

        .col-tap-target.is-full {
          cursor: not-allowed;
        }

        .slots-grid {
          width: 100%;
          height: 100%;
          display: grid;
          grid-template-rows: repeat(6, 1fr);
          gap: clamp(2px, 0.9vw, 10px);
        }

        .board-row {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: clamp(2px, 0.9vw, 10px);
        }

        .board-cell {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cell-hole {
          width: 100%;
          aspect-ratio: 1 / 1;
          border-radius: 50%;
          background: var(--board-slot-empty);
          box-shadow: var(--board-slot-shadow);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .cell-winning .cell-hole {
          box-shadow: 0 0 16px 3px var(--focus-ring), var(--board-slot-shadow);
        }
      `}</style>
    </div>
  );
};
