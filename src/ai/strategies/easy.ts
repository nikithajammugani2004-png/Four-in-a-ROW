import { Board } from '../../domain/board';
import { Player } from '../../domain/types';
import { WinDetector } from '../../domain/winDetector';
import { MoveStrategy } from '../types';

export class EasyStrategy implements MoveStrategy {
  async chooseMove(board: Board, player: Player): Promise<number> {
    const legalMoves = board.legalMoves();
    if (legalMoves.length === 0) return 0;

    const opponent: Player = player === 1 ? 2 : 1;

    for (const col of legalMoves) {
      const dropRes = board.drop(col, player);
      if (dropRes.success) {
        const isWin = WinDetector.checkWinFromMove(
          dropRes.board.getRawGrid(),
          dropRes.row,
          col,
          player,
          board.config
        );
        if (isWin) return col;
      }
    }

    for (const col of legalMoves) {
      const dropRes = board.drop(col, opponent);
      if (dropRes.success) {
        const isOppWin = WinDetector.checkWinFromMove(
          dropRes.board.getRawGrid(),
          dropRes.row,
          col,
          opponent,
          board.config
        );
        if (isOppWin) return col;
      }
    }

    const weights: Record<number, number> = { 3: 7, 2: 5, 4: 5, 1: 3, 5: 3, 0: 1, 6: 1 };
    const weightedPool: number[] = [];
    for (const col of legalMoves) {
      const count = weights[col] || 1;
      for (let i = 0; i < count; i++) {
        weightedPool.push(col);
      }
    }

    const randomIndex = Math.floor(Math.random() * weightedPool.length);
    return weightedPool[randomIndex];
  }
}
