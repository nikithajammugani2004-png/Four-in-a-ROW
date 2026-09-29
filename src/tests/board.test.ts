import { describe, it, expect } from 'vitest';
import { Board } from '../domain/board';

describe('Board Domain Engine', () => {
  it('initializes an empty 7x6 board correctly', () => {
    const board = Board.createEmpty();
    expect(board.cols).toBe(7);
    expect(board.rows).toBe(6);
    expect(board.isFull()).toBe(false);
    expect(board.legalMoves()).toEqual([0, 1, 2, 3, 4, 5, 6]);

    for (let r = 0; r < 6; r++) {
      for (let c = 0; c < 7; c++) {
        expect(board.cellAt(r, c)).toBe(0);
      }
    }
  });

  it('drops token into lowest empty row and updates immutably', () => {
    const board0 = Board.createEmpty();
    const res1 = board0.drop(3, 1);

    expect(res1.success).toBe(true);
    if (!res1.success) return;

    expect(res1.row).toBe(0);
    expect(res1.col).toBe(3);
    expect(res1.board.cellAt(0, 3)).toBe(1);
    expect(board0.cellAt(0, 3)).toBe(0);

    const res2 = res1.board.drop(3, 2);
    expect(res2.success).toBe(true);
    if (!res2.success) return;

    expect(res2.row).toBe(1);
    expect(res2.col).toBe(3);
    expect(res2.board.cellAt(1, 3)).toBe(2);
  });

  it('rejects drops into a full column with COLUMN_FULL', () => {
    let board = Board.createEmpty();
    for (let i = 0; i < 6; i++) {
      const res = board.drop(0, (i % 2 === 0 ? 1 : 2));
      expect(res.success).toBe(true);
      if (res.success) board = res.board;
    }

    expect(board.isColumnFull(0)).toBe(true);
    expect(board.legalMoves().includes(0)).toBe(false);

    const overflowRes = board.drop(0, 1);
    expect(overflowRes.success).toBe(false);
    if (!overflowRes.success) {
      expect(overflowRes.error).toBe('COLUMN_FULL');
    }
  });

  it('rejects out of range columns with OUT_OF_RANGE', () => {
    const board = Board.createEmpty();
    const resNegative = board.drop(-1, 1);
    expect(resNegative.success).toBe(false);
    if (!resNegative.success) {
      expect(resNegative.error).toBe('OUT_OF_RANGE');
    }

    const resTooLarge = board.drop(7, 1);
    expect(resTooLarge.success).toBe(false);
    if (!resTooLarge.success) {
      expect(resTooLarge.error).toBe('OUT_OF_RANGE');
    }
  });
});
