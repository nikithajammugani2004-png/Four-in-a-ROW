import { describe, it, expect } from 'vitest';
import { EasyStrategy } from '../ai/strategies/easy';
import { MinimaxStrategy } from '../ai/strategies/minimax';
import { Board } from '../domain/board';

describe('AI Strategies', () => {
  it('EasyStrategy takes an immediate win (100%)', async () => {
    const strategy = new EasyStrategy();
    let board = Board.createEmpty();
    board = board.dropOrThrow(0, 2);
    board = board.dropOrThrow(1, 2);
    board = board.dropOrThrow(2, 2);

    const chosenMove = await strategy.chooseMove(board, 2);
    expect(chosenMove).toBe(3);
  });

  it('EasyStrategy blocks opponent immediate win (100%)', async () => {
    const strategy = new EasyStrategy();
    let board = Board.createEmpty();
    board = board.dropOrThrow(3, 1);
    board = board.dropOrThrow(4, 1);
    board = board.dropOrThrow(5, 1);

    const chosenMove = await strategy.chooseMove(board, 2);
    expect([2, 6]).toContain(chosenMove);
  });

  it('MinimaxStrategy takes immediate win on depth 4', async () => {
    const minimax = new MinimaxStrategy(4);
    let board = Board.createEmpty();
    board = board.dropOrThrow(3, 2);
    board = board.dropOrThrow(3, 2);
    board = board.dropOrThrow(3, 2);

    const chosenMove = await minimax.chooseMove(board, 2);
    expect(chosenMove).toBe(3);
  });
});
