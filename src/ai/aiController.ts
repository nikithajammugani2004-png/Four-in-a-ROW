import { Board } from '../domain/board';
import { Player } from '../domain/types';
import { createStrategy } from './strategies/factory';
import { AiDifficulty, WorkerRequest, WorkerResponse } from './types';

export class AiController {
  private worker: Worker | null = null;
  private reqId = 0;
  private pendingRequests: Map<number, (col: number) => void> = new Map();

  constructor() {
    this.initWorker();
  }

  private initWorker() {
    try {
      if (typeof window !== 'undefined' && typeof Worker !== 'undefined') {
        this.worker = new Worker(new URL('./worker.ts', import.meta.url), {
          type: 'module'
        });

        this.worker.onmessage = (e: MessageEvent<WorkerResponse>) => {
          const { id, col } = e.data;
          const resolver = this.pendingRequests.get(id);
          if (resolver) {
            this.pendingRequests.delete(id);
            resolver(col);
          }
        };

        this.worker.onerror = (err) => {
          console.warn('AI Worker error, fallback will be used:', err);
          this.worker = null;
        };
      }
    } catch (e) {
      console.warn('Failed to initialize AI Web Worker, using main thread fallback:', e);
      this.worker = null;
    }
  }

  async getMove(
    board: Board,
    player: Player,
    difficulty: AiDifficulty,
    minDelayMs = 400
  ): Promise<number> {
    const startTime = performance.now();

    let movePromise: Promise<number>;

    if (this.worker) {
      const id = ++this.reqId;
      movePromise = new Promise<number>((resolve) => {
        this.pendingRequests.set(id, resolve);
        const req: WorkerRequest = {
          id,
          type: 'CHOOSE_MOVE',
          boardGrid: board.getRawGrid() as (0 | 1 | 2)[][],
          player,
          difficulty
        };
        this.worker?.postMessage(req);
      });
    } else {
      const strategy = createStrategy(difficulty);
      movePromise = strategy.chooseMove(board, player);
    }

    const col = await movePromise;

    const elapsed = performance.now() - startTime;
    if (elapsed < minDelayMs) {
      await new Promise(res => setTimeout(res, minDelayMs - elapsed));
    }

    return col;
  }

  destroy() {
    if (this.worker) {
      this.worker.terminate();
      this.worker = null;
    }
    this.pendingRequests.clear();
  }
}
