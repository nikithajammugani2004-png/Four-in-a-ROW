export type ThemeOption = 'system' | 'light' | 'dark';
export type PaletteOption = 'classic' | 'colorblind' | 'neon' | 'monochrome';
export type MotionOption = 'system' | 'on' | 'off';

export interface UserSettings {
  theme: ThemeOption;
  palette: PaletteOption;
  sound: boolean;
  haptics: boolean;
  reducedMotion: MotionOption;
}

export interface ModeStats {
  played: number;
  won: number;
  lost: number;
  drawn: number;
  bestStreak: number;
  currentStreak: number;
  fastestWinMoves?: number;
  hintsUsed: number;
}

export interface InProgressGame {
  mode: 'ai' | 'local';
  level?: string;
  starter: 1 | 2;
  moves: string;
  startedAt: string;
}

export interface StoredAppState {
  version: 1;
  settings: UserSettings;
  stats: Record<string, ModeStats>;
  inProgress?: InProgressGame;
}

const STORAGE_KEY = 'four_in_a_row_state_v1';

export const DEFAULT_SETTINGS: UserSettings = {
  theme: 'system',
  palette: 'classic',
  sound: true,
  haptics: true,
  reducedMotion: 'system'
};

const DEFAULT_STATE: StoredAppState = {
  version: 1,
  settings: DEFAULT_SETTINGS,
  stats: {}
};

export class StorageService {
  private cachedState: StoredAppState | null = null;

  load(): StoredAppState {
    if (this.cachedState) {
      return this.cachedState;
    }

    if (typeof window === 'undefined' || !window.localStorage) {
      return { ...DEFAULT_STATE };
    }

    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        this.cachedState = { ...DEFAULT_STATE };
        return this.cachedState;
      }

      const parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== 'object' || parsed.version !== 1) {
        console.warn('Unknown state version, resetting to defaults.');
        this.cachedState = { ...DEFAULT_STATE };
        this.save(this.cachedState);
        return this.cachedState;
      }

      this.cachedState = {
        version: 1,
        settings: { ...DEFAULT_SETTINGS, ...parsed.settings },
        stats: parsed.stats || {},
        inProgress: parsed.inProgress
      };
      return this.cachedState;
    } catch (e) {
      console.error('Failed to load state from localStorage, falling back to default:', e);
      this.cachedState = { ...DEFAULT_STATE };
      return this.cachedState;
    }
  }

  save(state: StoredAppState): void {
    this.cachedState = state;
    if (typeof window === 'undefined' || !window.localStorage) return;

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.error('Failed to write state to localStorage:', e);
    }
  }

  updateSettings(partial: Partial<UserSettings>): UserSettings {
    const state = this.load();
    const updated = { ...state.settings, ...partial };
    this.save({ ...state, settings: updated });
    return updated;
  }

  recordGame(
    statKey: string,
    result: 'win' | 'loss' | 'draw',
    movesCount?: number
  ): void {
    const state = this.load();
    const current = state.stats[statKey] || {
      played: 0,
      won: 0,
      lost: 0,
      drawn: 0,
      bestStreak: 0,
      currentStreak: 0,
      hintsUsed: 0
    };

    const played = current.played + 1;
    let won = current.won;
    let lost = current.lost;
    let drawn = current.drawn;
    let currentStreak = current.currentStreak;
    let bestStreak = current.bestStreak;
    let fastestWinMoves = current.fastestWinMoves;

    if (result === 'win') {
      won++;
      currentStreak++;
      if (currentStreak > bestStreak) {
        bestStreak = currentStreak;
      }
      if (movesCount !== undefined) {
        if (!fastestWinMoves || movesCount < fastestWinMoves) {
          fastestWinMoves = movesCount;
        }
      }
    } else if (result === 'loss') {
      lost++;
      currentStreak = 0;
    } else {
      drawn++;
      currentStreak = 0;
    }

    const updatedStats: ModeStats = {
      ...current,
      played,
      won,
      lost,
      drawn,
      bestStreak,
      currentStreak,
      fastestWinMoves
    };

    this.save({
      ...state,
      stats: {
        ...state.stats,
        [statKey]: updatedStats
      },
      inProgress: undefined
    });
  }

  incrementHintUsed(statKey: string): void {
    const state = this.load();
    const current = state.stats[statKey] || {
      played: 0,
      won: 0,
      lost: 0,
      drawn: 0,
      bestStreak: 0,
      currentStreak: 0,
      hintsUsed: 0
    };
    this.save({
      ...state,
      stats: {
        ...state.stats,
        [statKey]: {
          ...current,
          hintsUsed: current.hintsUsed + 1
        }
      }
    });
  }

  saveInProgress(game: InProgressGame): void {
    const state = this.load();
    this.save({ ...state, inProgress: game });
  }

  clearInProgress(): void {
    const state = this.load();
    if (state.inProgress) {
      this.save({ ...state, inProgress: undefined });
    }
  }

  resetStats(): void {
    const state = this.load();
    this.save({ ...state, stats: {} });
  }
}

export const storage = new StorageService();
