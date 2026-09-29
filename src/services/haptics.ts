export type HapticType = 'light' | 'medium' | 'success' | 'warning' | 'error';

export class HapticsService {
  private enabled: boolean = true;

  constructor(initialEnabled = true) {
    this.enabled = initialEnabled;
  }

  setEnabled(enabled: boolean) {
    this.enabled = enabled;
  }

  get isEnabled(): boolean {
    return this.enabled;
  }

  trigger(type: HapticType = 'light') {
    if (!this.enabled || typeof window === 'undefined' || !('vibrate' in navigator)) {
      return;
    }

    try {
      switch (type) {
        case 'light':
          navigator.vibrate(15);
          break;
        case 'medium':
          navigator.vibrate(30);
          break;
        case 'success':
          navigator.vibrate([20, 60, 40, 60, 60]);
          break;
        case 'warning':
        case 'error':
          navigator.vibrate([50, 40, 50]);
          break;
      }
    } catch {
    }
  }
}
