import { describe, it, expect } from 'vitest';
import { Board } from '../domain/board';
import { DEFAULT_CONFIG } from '../domain/types';
import { WinDetector } from '../domain/winDetector';

describe('WinDetector Engine & Edge Cases', () => {
  it('detects a horizontal win', () => {
    let board = Board.createEmpty();
    board = board.dropOrThrow(0, 1);
    board = board.dropOrThrow(1, 1);
    board = board.dropOrThrow(2, 1);
    const res = board.drop(3, 1);
    expect(res.success).toBe(true);
    if (!res.success) return;

    const win = WinDetector.checkWinFromMove(
      res.board.getRawGrid(),
      res.row,
      res.col,
      1,
      DEFAULT_CONFIG
    );

    expect(win).not.toBeNull();
    expect(win?.length).toBe(4);
    expect(win).toEqual([[0, 0], [0, 1], [0, 2], [0, 3]]);
  });

  it('detects a vertical win', () => {
    let board = Board.createEmpty();
    board = board.dropOrThrow(4, 1);
    board = board.dropOrThrow(4, 1);
    board = board.dropOrThrow(4, 1);
    const res = board.drop(4, 1);
    expect(res.success).toBe(true);
    if (!res.success) return;

    const win = WinDetector.checkWinFromMove(
      res.board.getRawGrid(),
      res.row,
      res.col,
      1,
      DEFAULT_CONFIG
    );

    expect(win).not.toBeNull();
    expect(win?.length).toBe(4);
    expect(win).toEqual([[0, 4], [1, 4], [2, 4], [3, 4]]);
  });

  it('detects diagonal up-right (/) win', () => {
    let board = Board.createEmpty();
    board = board.dropOrThrow(0, 1);

    board = board.dropOrThrow(1, 2);
    board = board.dropOrThrow(1, 1);

    board = board.dropOrThrow(2, 2);
    board = board.dropOrThrow(2, 2);
    board = board.dropOrThrow(2, 1);

    board = board.dropOrThrow(3, 2);
    board = board.dropOrThrow(3, 2);
    board = board.dropOrThrow(3, 2);
    const res = board.drop(3, 1);
    expect(res.success).toBe(true);
    if (!res.success) return;

    const win = WinDetector.checkWinFromMove(
      res.board.getRawGrid(),
      res.row,
      res.col,
      1,
      DEFAULT_CONFIG
    );

    expect(win).not.toBeNull();
    expect(win).toEqual([[0, 0], [1, 1], [2, 2], [3, 3]]);
  });

  it('detects diagonal down-right (\\) win', () => {
    let board = Board.createEmpty();
    board = board.dropOrThrow(0, 2);
    board = board.dropOrThrow(0, 2);
    board = board.dropOrThrow(0, 2);
    board = board.dropOrThrow(0, 1);

    board = board.dropOrThrow(1, 2);
    board = board.dropOrThrow(1, 2);
    board = board.dropOrThrow(1, 1);

    board = board.dropOrThrow(2, 2);
    board = board.dropOrThrow(2, 1);

    const res = board.drop(3, 1);
    expect(res.success).toBe(true);
    if (!res.success) return;

    const win = WinDetector.checkWinFromMove(
      res.board.getRawGrid(),
      res.row,
      res.col,
      1,
      DEFAULT_CONFIG
    );

    expect(win).not.toBeNull();
    expect(win).toEqual([[3, 0], [2, 1], [1, 2], [0, 3]]);
  });

  it('MUST NOT create false wrap-around wins across board boundaries', () => {
    let board = Board.createEmpty();
    board = board.dropOrThrow(5, 1);
    board = board.dropOrThrow(6, 1);
    board = board.dropOrThrow(0, 2);
    board = board.dropOrThrow(0, 1);
    board = board.dropOrThrow(1, 2);
    const res = board.drop(1, 1);
    expect(res.success).toBe(true);
    if (!res.success) return;

    const win = WinDetector.checkWinFromMove(
      res.board.getRawGrid(),
      res.row,
      res.col,
      1,
      DEFAULT_CONFIG
    );

    expect(win).toBeNull();
  });

  it('correctly handles 5-in-a-row (overlong)', () => {
    let board = Board.createEmpty();
    board = board.dropOrThrow(0, 1);
    board = board.dropOrThrow(1, 1);
    board = board.dropOrThrow(2, 1);
    board = board.dropOrThrow(3, 1);
    const res = board.drop(4, 1);
    expect(res.success).toBe(true);
    if (!res.success) return;

    const win = WinDetector.checkWinFromMove(
      res.board.getRawGrid(),
      res.row,
      res.col,
      1,
      DEFAULT_CONFIG
    );

    expect(win).not.toBeNull();
    expect(win?.length).toBe(5);
  });
});
