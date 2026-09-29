# Four in a Row (Tactical Drop & Connect)

A production-grade, accessible, offline-ready web implementation of the classic four-in-a-row tactical connection game. Built with TypeScript, React 19, and Vite, strictly complying with SOLID principles and WCAG 2.2 AA accessibility standards.

---

## 🌟 Key Features

- **Pure TypeScript Domain Engine**: Zero DOM coupling, fully immutable board representations, 100% test coverage against all win vectors (horizontal, vertical, diagonal / and \\), with boundary-tested protection against wrap-around bugs.
- **5 Calibrated AI Difficulty Levels**:
  - **Beginner**: Random moves with a 50% chance of seizing an immediate win.
  - **Easy**: 100% immediate win execution and loss blocking with center bias.
  - **Medium**: Minimax depth 4 with alpha-beta pruning and positional heuristics.
  - **Hard**: Minimax depth 7 with center-first exploration ordering and transposition memory.
  - **Expert**: Depth 9 iterative deepening within a 1.5s time budget.
- **Dedicated Web Worker**: Heavy AI calculations execute in the background via a Web Worker (`src/ai/worker.ts`), preserving 60 FPS animation smoothness on all devices.
- **Tactile Modern Aesthetics**: Fluid `min()` board scaling, realistic physics gravity drop animations with bounce easing, glowing victory cell animations, and dark/light/glassmorphism design tokens.
- **Accessible Beyond Color (WCAG 2.2 AA)**:
  - Tokens incorporate distinctive tactile inner emblems (solid cross-star vs concentric rings) so the game is 100% playable for individuals with red-green or blue-yellow color vision deficiencies.
  - Selectable palettes: Classic, Colorblind-Safe (Blue & Orange), Neon Cyber, and High-Contrast Monochrome.
  - Complete keyboard navigation (Arrow keys, 1–7 direct drop, Space/Enter, `U` for Undo, `R` for Rematch, `M` for Mute).
  - ARIA live announcements for screen readers.
- **Zero-Dependency Procedural Audio**: Built using the Web Audio API to synthesize resonant drop thuds, victory arpeggios, and draw chimes with zero external audio assets.
- **Offline PWA**: Full service worker caching (`sw.js`), standalone web manifest (`manifest.webmanifest`), and auto-saving of in-progress games for seamless resumption.
- **Personal Statistics Dashboard**: Persistent win/loss/draw rates, current & best streaks, and fastest win tracking via schema-versioned local storage.

---

## 🏗️ Architecture & SOLID Compliance

```
src/
├── domain/             # Pure TypeScript: Board, Rules, WinDetector, Game, types
├── ai/                 # Strategies (Beginner, Easy, Minimax), Evaluation, Web Worker
├── services/           # SoundPlayer (Web Audio), Haptics, StorageService (LocalStorage)
├── components/         # BoardView, Token, TurnIndicator, ResultOverlay, SettingsModal, HowToPlayModal
├── features/
│   ├── landing/        # Hero with self-playing demo loop, AI explainer, Features, FAQ
│   ├── game/           # GamePage controller, toolbar, keyboard event coordination
│   └── stats/          # StatsModal dashboard and breakdown
├── styles/             # tokens.css, reset.css, animations.css
└── tests/              # Vitest suite for board, win detector, game, and AI logic
```

- **Single Responsibility Principle (SRP)**: `Board` manages grid state; `WinDetector` tests geometric alignments; `Game` sequences turns and history; `SoundPlayer` synthesizes audio.
- **Open/Closed Principle (OCP)**: New AI strategies implement `MoveStrategy` without touching existing engine files.
- **Liskov Substitution Principle (LSP)**: Any AI or human player produces moves conforming to the legal moves contract.
- **Interface Segregation Principle (ISP)**: Decoupled ports for audio, storage, and AI worker messaging.
- **Dependency Inversion Principle (DIP)**: `GamePage` accepts ports and dependencies injected at runtime.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Run Automated Tests
```bash
npm test
```

### 4. Build for Production
```bash
npm run build
```

---

## 🚢 Deployment Guide

The production bundle in `dist/` is purely static:

- **Vercel**: Run `vercel` or link repository. Build command: `npm run build`, Output directory: `dist`.
- **Netlify**: Connect repository or run `netlify deploy --prod --dir=dist`.
- **GitHub Pages**: Build with `npm run build` and publish the `dist` directory.
- **Cloudflare Pages**: Connect Git repository, set build command to `npm run build` and output directory to `dist`.

---

## 📜 License
MIT License. Free to use, modify, and distribute.
