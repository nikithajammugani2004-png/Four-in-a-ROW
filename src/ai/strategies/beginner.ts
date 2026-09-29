import { Board } from '../../domain/board';
import { Player } from '../../domain/types';
import { WinDetector } from '../../domain/winDetector';
import { MoveStrategy } from '../types';

export class BeginnerStrategy implements MoveStrategy {
  async chooseMove(board: Board, player: Player): Promise<number> {
    const legalMoves = board.legalMoves();
    if (legalMoves.length === 0) return 0;

    if (Math.random() < 0.5) {
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
    }

    const randomIndex = Math.floor(Math.random() * legalMoves.length);
    return legalMoves[randomIndex];
  }
}
