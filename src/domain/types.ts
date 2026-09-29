export type Player = 1 | 2;
export type Cell = 0 | Player;

export type BoardCoord = [row: number, col: number];

export interface BoardConfig {
  readonly rows: number;
  readonly cols: number;
  readonly connect: number;
}

export const DEFAULT_CONFIG: BoardConfig = {
  rows: 6,
  cols: 7,
  connect: 4
};

export type GameStatus =
  | { kind: 'playing'; next: Player }
  | { kind: 'won'; winner: Player; line: readonly BoardCoord[] }
  | { kind: 'draw' };

export type DropError = 'COLUMN_FULL' | 'OUT_OF_RANGE' | 'GAME_OVER';

export type DropResult =
  | { success: true; board: any; row: number; col: number; player: Player }
  | { success: false; error: DropError };

export interface MoveRecord {
  readonly col: number;
  readonly row: number;
  readonly player: Player;
}
