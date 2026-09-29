import { Board } from '../domain/board';
import { DEFAULT_CONFIG } from '../domain/types';
import { createStrategy } from './strategies/factory';
import { WorkerRequest, WorkerResponse } from './types';

self.onmessage = async (e: MessageEvent<WorkerRequest>) => {
  const data = e.data;
  if (!data || data.type !== 'CHOOSE_MOVE') return;

  try {
    const { id, boardGrid, player, difficulty } = data;

    const rows = boardGrid.length;
    const cols = boardGrid[0]?.length || DEFAULT_CONFIG.cols;
    const heights: number[] = Array.from({ length: cols }, () => 0);

    for (let c = 0; c < cols; c++) {
      let h = 0;
      for (let r = 0; r < rows; r++) {
        if (boardGrid[r][c] !== 0) {
          h = r + 1;
        }
      }
      heights[c] = h;
    }

    const board = new Board(boardGrid, heights, { rows, cols, connect: DEFAULT_CONFIG.connect });
    const strategy = createStrategy(difficulty);
    const col = await strategy.chooseMove(board, player);

    const response: WorkerResponse = {
      id,
      type: 'MOVE_CHOSEN',
      col
    };

    self.postMessage(response);
  } catch (error) {
    console.error('AI Worker error:', error);
    self.postMessage({
      id: data.id,
      type: 'MOVE_CHOSEN',
      col: 3
    } as WorkerResponse);
  }
};
