import { AiDifficulty, MoveStrategy } from '../types';
import { BeginnerStrategy } from './beginner';
import { EasyStrategy } from './easy';
import { MinimaxStrategy } from './minimax';

export function createStrategy(difficulty: AiDifficulty): MoveStrategy {
  switch (difficulty) {
    case 'beginner':
      return new BeginnerStrategy();
    case 'easy':
      return new EasyStrategy();
    case 'medium':
      return new MinimaxStrategy(4, 500);
    case 'hard':
      return new MinimaxStrategy(7, 1000);
    case 'expert':
      return new MinimaxStrategy(9, 1500);
    default:
      return new EasyStrategy();
  }
}
