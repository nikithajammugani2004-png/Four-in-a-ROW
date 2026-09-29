import { describe, it, expect } from 'vitest';
import { Game } from '../domain/game';
import { Board } from '../domain/board';

describe('Replay Reconstruction System', () => {
  it('correctly reconstructs board step-by-step from move history', () => {
    const game = new Game(1);
    // Sequence of moves leading to vertical 4-in-a-row for player 1
    // Col 0: P1, Col 1: P2, Col 0: P1, Col 1: P2, Col 0: P1, Col 1: P2, Col 0: P1 (Win!)
    const moves = [0, 1, 0, 1, 0, 1, 0];
    for (const col of moves) {
      const res = game.makeMove(col);
      expect(res.success).toBe(true);
    }

    expect(game.isOver).toBe(true);
    expect(game.status.kind).toBe('won');
    expect(game.history.length).toBe(7);

    // Step 0: Initial empty board
    const boardStep0 = Board.createEmpty(game.config);
    expect(boardStep0.cellAt(0, 0)).toBe(0);

    // Helper to replay N moves
    const replayMoves = (count: number): Board => {
      let b = Board.createEmpty(game.config);
      for (let i = 0; i < count; i++) {
        const m = game.history[i];
        const res = b.drop(m.col, m.player);
        if (res.success) {
          b = res.board;
        }
      }
      return b;
    };

    // Step 1: Only first move
    const boardStep1 = replayMoves(1);
    expect(boardStep1.cellAt(0, 0)).toBe(1);
    expect(boardStep1.cellAt(0, 1)).toBe(0);

    // Step 4: First 4 moves
    const boardStep4 = replayMoves(4);
    expect(boardStep4.cellAt(0, 0)).toBe(1);
    expect(boardStep4.cellAt(0, 1)).toBe(2);
    expect(boardStep4.cellAt(1, 0)).toBe(1);
    expect(boardStep4.cellAt(1, 1)).toBe(2);
    expect(boardStep4.cellAt(2, 0)).toBe(0);

    // Final Step 7: All 7 moves matches game.board
    const boardStep7 = replayMoves(7);
    expect(boardStep7.cellAt(3, 0)).toBe(1); // 4th token in col 0
    expect(boardStep7.getRawGrid()).toEqual(game.board.getRawGrid());
  });
});
