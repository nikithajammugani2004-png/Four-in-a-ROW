import { Board } from '../domain/board';
import { Cell, Player } from '../domain/types';

export const COLUMN_EXPLORATION_ORDER = [3, 2, 4, 1, 5, 0, 6];

export const POSITION_WEIGHTS: number[][] = [
  [3, 4, 5, 7, 5, 4, 3],
  [4, 6, 8, 10, 8, 6, 4],
  [5, 8, 11, 13, 11, 8, 5],
  [5, 8, 11, 13, 11, 8, 5],
  [4, 6, 8, 10, 8, 6, 4],
  [3, 4, 5, 7, 5, 4, 3]
];

function evaluateWindow(window: Cell[], player: Player): number {
  const opponent: Player = player === 1 ? 2 : 1;
  let playerCount = 0;
  let oppCount = 0;
  let emptyCount = 0;

  for (let i = 0; i < 4; i++) {
    const c = window[i];
    if (c === player) playerCount++;
    else if (c === opponent) oppCount++;
    else emptyCount++;
  }

  if (playerCount > 0 && oppCount > 0) return 0;

  if (playerCount === 4) return 100000;
  if (playerCount === 3 && emptyCount === 1) return 80;
  if (playerCount === 2 && emptyCount === 2) return 12;

  if (oppCount === 4) return -100000;
  if (oppCount === 3 && emptyCount === 1) return -100;
  if (oppCount === 2 && emptyCount === 2) return -14;

  return 0;
}

export function evaluateBoard(board: Board, player: Player): number {
  let score = 0;
  const rawGrid = board.getRawGrid();
  const rows = board.rows;
  const cols = board.cols;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const cell = rawGrid[r][c];
      if (cell === player) {
        score += POSITION_WEIGHTS[r][c];
      } else if (cell !== 0) {
        score -= POSITION_WEIGHTS[r][c];
      }
    }
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c <= cols - 4; c++) {
      const window: Cell[] = [
        rawGrid[r][c],
        rawGrid[r][c + 1],
        rawGrid[r][c + 2],
        rawGrid[r][c + 3]
      ];
      score += evaluateWindow(window, player);
    }
  }

  for (let c = 0; c < cols; c++) {
    for (let r = 0; r <= rows - 4; r++) {
      const window: Cell[] = [
        rawGrid[r][c],
        rawGrid[r + 1][c],
        rawGrid[r + 2][c],
        rawGrid[r + 3][c]
      ];
      score += evaluateWindow(window, player);
    }
  }

  for (let r = 0; r <= rows - 4; r++) {
    for (let c = 0; c <= cols - 4; c++) {
      const window: Cell[] = [
        rawGrid[r][c],
        rawGrid[r + 1][c + 1],
        rawGrid[r + 2][c + 2],
        rawGrid[r + 3][c + 3]
      ];
      score += evaluateWindow(window, player);
    }
  }

  for (let r = 3; r < rows; r++) {
    for (let c = 0; c <= cols - 4; c++) {
      const window: Cell[] = [
        rawGrid[r][c],
        rawGrid[r - 1][c + 1],
        rawGrid[r - 2][c + 2],
        rawGrid[r - 3][c + 3]
      ];
      score += evaluateWindow(window, player);
    }
  }

  return score;
}
