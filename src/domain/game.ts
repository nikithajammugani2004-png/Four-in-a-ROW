import { Board } from './board';
import {
  BoardConfig,
  DEFAULT_CONFIG,
  DropError,
  GameStatus,
  MoveRecord,
  Player
} from './types';
import { WinDetector } from './winDetector';

export type StarterPolicy = 'alternating' | 'winner' | 'loser' | 'always-p1' | 'always-p2';

export interface GameState {
  readonly board: Board;
  readonly status: GameStatus;
  readonly history: readonly MoveRecord[];
  readonly starter: Player;
}

export class Game {
  readonly config: BoardConfig;
  private _state: GameState;

  constructor(starter: Player = 1, config: BoardConfig = DEFAULT_CONFIG) {
    this.config = config;
    this._state = {
      board: Board.createEmpty(config),
      status: { kind: 'playing', next: starter },
      history: [],
      starter
    };
  }

  get state(): GameState {
    return this._state;
  }

  get board(): Board {
    return this._state.board;
  }

  get status(): GameStatus {
    return this._state.status;
  }

  get isOver(): boolean {
    return this._state.status.kind !== 'playing';
  }

  get history(): readonly MoveRecord[] {
    return this._state.history;
  }

  get currentPlayer(): Player | null {
    return this._state.status.kind === 'playing' ? this._state.status.next : null;
  }

  makeMove(col: number): { success: true; move: MoveRecord; status: GameStatus } | { success: false; error: DropError } {
    if (this._state.status.kind !== 'playing') {
      return { success: false, error: 'GAME_OVER' };
    }

    const player = this._state.status.next;
    const dropRes = this._state.board.drop(col, player);

    if (!dropRes.success) {
      return { success: false, error: dropRes.error };
    }

    const newBoard = dropRes.board;
    const move: MoveRecord = {
      col,
      row: dropRes.row,
      player
    };

    const winLine = WinDetector.checkWinFromMove(
      newBoard.getRawGrid(),
      dropRes.row,
      col,
      player,
      this.config
    );

    let nextStatus: GameStatus;

    if (winLine) {
      nextStatus = {
        kind: 'won',
        winner: player,
        line: winLine
      };
    } else if (newBoard.isFull()) {
      nextStatus = { kind: 'draw' };
    } else {
      const nextPlayer: Player = player === 1 ? 2 : 1;
      nextStatus = {
        kind: 'playing',
        next: nextPlayer
      };
    }

    this._state = {
      board: newBoard,
      status: nextStatus,
      history: [...this._state.history, move],
      starter: this._state.starter
    };

    return { success: true, move, status: nextStatus };
  }

  undo(steps = 1): boolean {
    if (this._state.history.length === 0 || steps <= 0) {
      return false;
    }

    const targetMoveCount = Math.max(0, this._state.history.length - steps);
    const retainedHistory = this._state.history.slice(0, targetMoveCount);

    let replayedBoard = Board.createEmpty(this.config);
    for (const move of retainedHistory) {
      const res = replayedBoard.drop(move.col, move.player);
      if (res.success) {
        replayedBoard = res.board;
      }
    }

    const nextPlayer: Player =
      retainedHistory.length % 2 === 0
        ? this._state.starter
        : (this._state.starter === 1 ? 2 : 1);

    this._state = {
      board: replayedBoard,
      status: { kind: 'playing', next: nextPlayer },
      history: retainedHistory,
      starter: this._state.starter
    };

    return true;
  }

  rematch(policy: StarterPolicy = 'alternating'): void {
    let nextStarter: Player;
    const currentStarter = this._state.starter;

    switch (policy) {
      case 'alternating':
        nextStarter = currentStarter === 1 ? 2 : 1;
        break;
      case 'winner':
        nextStarter = this._state.status.kind === 'won' ? this._state.status.winner : currentStarter;
        break;
      case 'loser':
        if (this._state.status.kind === 'won') {
          nextStarter = this._state.status.winner === 1 ? 2 : 1;
        } else {
          nextStarter = currentStarter === 1 ? 2 : 1;
        }
        break;
      case 'always-p1':
        nextStarter = 1;
        break;
      case 'always-p2':
        nextStarter = 2;
        break;
    }

    this._state = {
      board: Board.createEmpty(this.config),
      status: { kind: 'playing', next: nextStarter },
      history: [],
      starter: nextStarter
    };
  }

  toMoveString(): string {
    return this._state.history.map(m => m.col.toString()).join('');
  }

  static fromMoveString(
    moveString: string,
    starter: Player = 1,
    config: BoardConfig = DEFAULT_CONFIG
  ): Game {
    const game = new Game(starter, config);
    for (const char of moveString) {
      const col = parseInt(char, 10);
      if (!isNaN(col)) {
        game.makeMove(col);
      }
    }
    return game;
  }
}
