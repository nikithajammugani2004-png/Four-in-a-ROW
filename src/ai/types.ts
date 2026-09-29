import { Board } from '../domain/board';
import { Player } from '../domain/types';

export type AiDifficulty = 'beginner' | 'easy' | 'medium' | 'hard' | 'expert';

export interface MoveStrategy {
  chooseMove(board: Board, player: Player, signal?: AbortSignal): Promise<number>;
}

export interface WorkerRequest {
  id: number;
  type: 'CHOOSE_MOVE';
  boardGrid: (0 | 1 | 2)[][];
  player: Player;
  difficulty: AiDifficulty;
  timeLimitMs?: number;
}

export interface WorkerResponse {
  id: number;
  type: 'MOVE_CHOSEN';
  col: number;
  evalScore?: number;
  nodesVisited?: number;
}
