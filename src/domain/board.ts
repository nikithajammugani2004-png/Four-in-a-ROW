import { BoardConfig, Cell, DEFAULT_CONFIG, DropResult, Player } from './types';

export class Board {
  readonly config: BoardConfig;
  private readonly grid: readonly (readonly Cell[])[];
  private readonly heights: readonly number[];
  readonly moveCount: number;

  constructor(
    grid?: readonly (readonly Cell[])[],
    heights?: readonly number[],
    config: BoardConfig = DEFAULT_CONFIG,
    moveCount = 0
  ) {
    this.config = config;
    const { rows, cols } = config;

    if (grid && heights) {
      this.grid = grid;
      this.heights = heights;
    } else {
      const emptyGrid: Cell[][] = Array.from({ length: rows }, () =>
        Array.from({ length: cols }, () => 0 as Cell)
      );
      this.grid = emptyGrid;
      this.heights = Array.from({ length: cols }, () => 0);
    }
    this.moveCount = moveCount;
  }

  get rows(): number {
    return this.config.rows;
  }

  get cols(): number {
    return this.config.cols;
  }

  cellAt(row: number, col: number): Cell {
    if (row < 0 || row >= this.config.rows || col < 0 || col >= this.config.cols) {
      return 0;
    }
    return this.grid[row][col];
  }

  columnHeight(col: number): number {
    if (col < 0 || col >= this.config.cols) {
      return this.config.rows;
    }
    return this.heights[col];
  }

  isColumnFull(col: number): boolean {
    return this.columnHeight(col) >= this.config.rows;
  }

  isFull(): boolean {
    return this.heights.every(h => h >= this.config.rows);
  }

  legalMoves(): readonly number[] {
    const moves: number[] = [];
    for (let c = 0; c < this.config.cols; c++) {
      if (!this.isColumnFull(c)) {
        moves.push(c);
      }
    }
    return moves;
  }

  drop(col: number, player: Player): DropResult {
    if (col < 0 || col >= this.config.cols) {
      return { success: false, error: 'OUT_OF_RANGE' };
    }

    const currentHeight = this.heights[col];
    if (currentHeight >= this.config.rows) {
      return { success: false, error: 'COLUMN_FULL' };
    }

    const targetRow = currentHeight;

    const newGrid = this.grid.map((rowArr, r) => {
      if (r === targetRow) {
        const newRow = [...rowArr];
        newRow[col] = player;
        return newRow;
      }
      return rowArr;
    });

    const newHeights = [...this.heights];
    newHeights[col] = currentHeight + 1;

    const newBoard = new Board(
      newGrid,
      newHeights,
      this.config,
      this.moveCount + 1
    );

    return {
      success: true,
      board: newBoard,
      row: targetRow,
      col,
      player
    };
  }

  dropOrThrow(col: number, player: Player): Board {
    const res = this.drop(col, player);
    if (!res.success) {
      throw new Error(`Drop failed: ${res.error}`);
    }
    return res.board;
  }

  getRawGrid(): readonly (readonly Cell[])[] {
    return this.grid;
  }

  static createEmpty(config: BoardConfig = DEFAULT_CONFIG): Board {
    return new Board(undefined, undefined, config, 0);
  }
}
