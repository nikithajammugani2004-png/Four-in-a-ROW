import { BoardCoord, BoardConfig, Cell, Player } from './types';

export const DIRECTIONS: readonly [number, number][] = [
  [0, 1],
  [1, 0],
  [1, 1],
  [-1, 1]
];

export class WinDetector {
  static checkWinFromMove(
    grid: readonly (readonly Cell[])[],
    row: number,
    col: number,
    player: Player,
    config: BoardConfig
  ): BoardCoord[] | null {
    const { rows, cols, connect } = config;

    for (const [dr, dc] of DIRECTIONS) {
      const line: BoardCoord[] = [[row, col]];

      let r = row + dr;
      let c = col + dc;
      while (r >= 0 && r < rows && c >= 0 && c < cols && grid[r][c] === player) {
        line.push([r, c]);
        r += dr;
        c += dc;
      }

      r = row - dr;
      c = col - dc;
      while (r >= 0 && r < rows && c >= 0 && c < cols && grid[r][c] === player) {
        line.unshift([r, c]);
        r -= dr;
        c -= dc;
      }

      if (line.length >= connect) {
        return line;
      }
    }

    return null;
  }

  static scanBoardForWin(
    grid: readonly (readonly Cell[])[],
    config: BoardConfig
  ): { winner: Player; line: BoardCoord[] } | null {
    const { rows, cols, connect } = config;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const player = grid[r][c];
        if (player === 0) continue;

        for (const [dr, dc] of DIRECTIONS) {
          const endR = r + (connect - 1) * dr;
          const endC = c + (connect - 1) * dc;

          if (endR >= 0 && endR < rows && endC >= 0 && endC < cols) {
            let matches = true;
            const line: BoardCoord[] = [];
            for (let step = 0; step < connect; step++) {
              const curR = r + step * dr;
              const curC = c + step * dc;
              if (grid[curR][curC] !== player) {
                matches = false;
                break;
              }
              line.push([curR, curC]);
            }

            if (matches) {
              return { winner: player, line };
            }
          }
        }
      }
    }

    return null;
  }
}
