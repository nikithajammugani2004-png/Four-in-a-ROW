import { describe, it, expect } from 'vitest';
import { Game } from '../domain/game';

describe('Game Controller and History', () => {
  it('alternates turns between Player 1 and Player 2', () => {
    const game = new Game(1);
    expect(game.currentPlayer).toBe(1);

    const m1 = game.makeMove(3);
    expect(m1.success).toBe(true);
    expect(game.currentPlayer).toBe(2);

    const m2 = game.makeMove(4);
    expect(m2.success).toBe(true);
    expect(game.currentPlayer).toBe(1);
    expect(game.history.length).toBe(2);
  });

  it('serializes moves and restores exact board position', () => {
    const game = new Game(1);
    game.makeMove(3);
    game.makeMove(3);
    game.makeMove(2);
    game.makeMove(4);

    const moveStr = game.toMoveString();
    expect(moveStr).toBe('3324');

    const restored = Game.fromMoveString(moveStr, 1);
    expect(restored.history.length).toBe(4);
    expect(restored.board.cellAt(0, 3)).toBe(1);
    expect(restored.board.cellAt(1, 3)).toBe(2);
    expect(restored.board.cellAt(0, 2)).toBe(1);
    expect(restored.board.cellAt(0, 4)).toBe(2);
    expect(restored.currentPlayer).toBe(1);
  });

  it('supports undoing plies cleanly', () => {
    const game = new Game(1);
    game.makeMove(3);
    game.makeMove(4);

    expect(game.board.cellAt(0, 4)).toBe(2);
    expect(game.history.length).toBe(2);

    const undone = game.undo(1);
    expect(undone).toBe(true);
    expect(game.history.length).toBe(1);
    expect(game.board.cellAt(0, 4)).toBe(0);
    expect(game.currentPlayer).toBe(2);
  });
});
