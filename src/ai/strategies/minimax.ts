import { Board } from '../../domain/board';
import { Player } from '../../domain/types';
import { WinDetector } from '../../domain/winDetector';
import { COLUMN_EXPLORATION_ORDER, evaluateBoard } from '../evaluation';
import { MoveStrategy } from '../types';

interface TranspositionEntry {
  depth: number;
  score: number;
  flag: 'EXACT' | 'LOWERBOUND' | 'UPPERBOUND';
}

export class MinimaxStrategy implements MoveStrategy {
  private depth: number;
  private timeBudgetMs: number;
  private transpositionTable: Map<string, TranspositionEntry> = new Map();
  private startTime = 0;
  private timedOut = false;

  constructor(depth: number, timeBudgetMs = 1500) {
    this.depth = depth;
    this.timeBudgetMs = timeBudgetMs;
  }

  async chooseMove(board: Board, player: Player, signal?: AbortSignal): Promise<number> {
    const legalMoves = board.legalMoves();
    if (legalMoves.length === 0) return 0;
    if (legalMoves.length === 1) return legalMoves[0];

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

    this.startTime = performance.now();
    this.timedOut = false;
    this.transpositionTable.clear();

    const orderedMoves = COLUMN_EXPLORATION_ORDER.filter(col => legalMoves.includes(col));

    let bestMove = orderedMoves[0];
    let bestScore = -Infinity;

    const maxDepth = this.depth;
    const startDepth = Math.min(3, maxDepth);

    for (let currentDepth = startDepth; currentDepth <= maxDepth; currentDepth++) {
      if (this.timedOut || signal?.aborted) break;

      let depthBestMove = bestMove;
      let depthBestScore = -Infinity;
      let alpha = -Infinity;
      const beta = Infinity;

      for (const col of orderedMoves) {
        if (this.isOutOfTime() || signal?.aborted) {
          this.timedOut = true;
          break;
        }

        const dropRes = board.drop(col, player);
        if (!dropRes.success) continue;

        const winCheck = WinDetector.checkWinFromMove(
          dropRes.board.getRawGrid(),
          dropRes.row,
          col,
          player,
          board.config
        );
        if (winCheck) {
          return col;
        }

        const score = -this.minimax(
          dropRes.board,
          currentDepth - 1,
          -beta,
          -alpha,
          opponent,
          player,
          dropRes.row,
          col,
          signal
        );

        if (score > depthBestScore) {
          depthBestScore = score;
          depthBestMove = col;
        }
        alpha = Math.max(alpha, score);
      }

      if (!this.timedOut) {
        bestMove = depthBestMove;
        bestScore = depthBestScore;
        if (bestScore >= 90000) break;
      }
    }

    return bestMove;
  }

  private isOutOfTime(): boolean {
    return performance.now() - this.startTime > this.timeBudgetMs;
  }

  private minimax(
    board: Board,
    depth: number,
    alpha: number,
    beta: number,
    currentPlayer: Player,
    maximizingPlayer: Player,
    lastRow: number,
    lastCol: number,
    signal?: AbortSignal
  ): number {
    if (this.isOutOfTime() || signal?.aborted) {
      this.timedOut = true;
      return 0;
    }

    const previousPlayer: Player = currentPlayer === 1 ? 2 : 1;

    const won = WinDetector.checkWinFromMove(
      board.getRawGrid(),
      lastRow,
      lastCol,
      previousPlayer,
      board.config
    );
    if (won) {
      return previousPlayer === maximizingPlayer ? 100000 + depth : -(100000 + depth);
    }

    const legalMoves = board.legalMoves();
    if (legalMoves.length === 0) {
      return 0;
    }

    if (depth === 0) {
      const evalScore = evaluateBoard(board, maximizingPlayer);
      return currentPlayer === maximizingPlayer ? evalScore : -evalScore;
    }

    const orderedMoves = COLUMN_EXPLORATION_ORDER.filter(col => legalMoves.includes(col));
    let maxEval = -Infinity;

    for (const col of orderedMoves) {
      const dropRes = board.drop(col, currentPlayer);
      if (!dropRes.success) continue;

      const score = -this.minimax(
        dropRes.board,
        depth - 1,
        -beta,
        -alpha,
        previousPlayer,
        maximizingPlayer,
        dropRes.row,
        col,
        signal
      );

      maxEval = Math.max(maxEval, score);
      alpha = Math.max(alpha, score);
      if (alpha >= beta) {
        break;
      }
    }

    return maxEval;
  }
}
