# Four in a Row (Connect Four) — Product Requirements Document (PRD)

**Version:** 1.0  **Status:** Ready for build  **Type:** Responsive browser game (landing page + local play + AI opponent), installable as a PWA

> **Working title note:** "Connect 4" is a trademarked product name (verify current ownership before any commercial use). The PRD uses the generic name **Four in a Row**; the final brand name is decision Q1 in §16.

---

## 1. Executive Summary

The uploaded project is a vanilla HTML/CSS/JS Connect Four with three files. It has the right core idea and a real logic skeleton, but its state lives in the DOM (inline `backgroundColor` strings), it uses `eval()` to read and mutate columns, it references a `#whosturn` element that does not exist, it never detects a draw, and it ends games with `alert()` plus a page reload. In its current state the first two or three moves work, and then the game crashes or misbehaves.

This PRD converts it into a **polished, deployable game product**: a stunning landing page, a pure and fully tested game engine, a hot-seat two-player mode, a single-player mode against AI at several difficulty levels, smooth animation, accessibility that goes beyond color, persistent stats, offline installability, and a clean architecture where the rules, the AI, and the UI are independent, replaceable pieces. That independence is the most natural showcase of SOLID you could ask for.

**Core product promise:** open the link on any device, be playing a satisfying game in one tap, with no sign-up and no loading spinner, and never see a bug in the rules.

---

## 2. Honest Evaluation of the Current Idea

### 2.1 Defects found in the existing code (verified from your analysis)

| # | Finding | Severity | Resolution |
|---|---------|----------|------------|
| 1 | `#whosturn` referenced in JS but absent in HTML: uncaught `TypeError`, breaks the turn flow | Critical | State-driven UI; turn indicator is a rendered component |
| 2 | `eval()` used to read and increment `val_cN` | Critical (security and maintainability) | Column heights derived from the board array; no dynamic code anywhere |
| 3 | Column counter increments before the "is column full" check: clicking a full column corrupts state | Critical | `Board.drop()` returns a typed error for full columns and mutates nothing |
| 4 | Board state is read back from inline `style.backgroundColor` | High | In-memory immutable board; DOM is a pure view |
| 5 | Implicit globals (`val_c1..7`, `turn`, `sum`, `i`, `j`) | High | ES modules, `const` and `let`, strict mode |
| 6 | No draw detection | High | Draw when all 42 cells are filled without a winner |
| 7 | Win → `alert()` + `location.reload()`; players cannot inspect the winning line | High | Result overlay, highlighted winning four, Rematch and Menu actions |
| 8 | 200ms `setTimeout` before checking the win: rapid clicks can interleave, and a third move can land before the check | High | Synchronous engine; UI input locked during animation |
| 9 | `<p>` directly inside `<ul>`: invalid HTML; no ARIA; no keyboard | High | Accessible column buttons and live announcements |
| 10 | Red versus yellow is the only cue | High (about 8 percent of men have red-green color vision deficiency) | Add shape or pattern per player plus selectable palettes |
| 11 | Fixed 75px slots with three ad-hoc media queries | Medium | Fluid board sizing from the viewport; no breakpoints needed for the board itself |
| 12 | Six hardcoded column `id`s (`c1r6`...) coupling logic to markup | Medium | Board size configurable (7x6 default) via config |

### 2.2 Things the concept never mentions but a real product needs

Who moves first and how that alternates across rematches; a rematch flow; move undo; draw handling; a landing page that explains the game and gets someone playing in one tap; an AI whose difficulty is calibrated (a beatable one and a strong one); persistence of stats and settings; sound (with a mute switch); haptics on mobile; a "how to play" for newcomers; pause-safe behavior when a tab is hidden; offline play; a PWA install path; privacy statement (even with no accounts, `localStorage` is used); and analytics, if wanted, without collecting personal data.

### 2.3 Insights that should shape the design

1. **Connect Four is a solved game.** With perfect play, the first player wins. Two consequences: (a) a perfect AI is not fun as a top difficulty for humans, so the hardest level should be strong but slightly imperfect and explainable ("Expert"); (b) a "Hint" feature can be honest and useful. A perfect-play engine is a possible later mode ("Impossible") and a bragging-rights feature.
2. **The state space is tiny** (about 4.5 trillion positions, but 7 moves per ply). Alpha-beta search at depth 8 to 10 with column-order heuristics runs in milliseconds to a couple of seconds in a Web Worker. No server needed.
3. **The UI should never own the truth.** The single most valuable architectural decision is a pure engine with no DOM knowledge. Every bug in the current code traces back to violating this.
4. **Online multiplayer is the feature people will ask for first.** It is deliberately out of v1 scope, but the architecture (a `Player` port and serializable move history) makes it a bounded addition rather than a rewrite.

---

## 3. Goals and Non-Goals

### Goals
- G1. First move made within 5 seconds of landing on the page (one tap from the landing hero).
- G2. Zero rules bugs: the engine is verified against exhaustive tests.
- G3. Lighthouse 95 or above (Performance, Accessibility, Best Practices, SEO) on mobile.
- G4. Playable and delightful from 320px phones to 4K monitors, with touch, mouse, and keyboard.
- G5. Loads under 100 KB of JavaScript and works offline after the first visit.
- G6. Codebase where a new AI strategy or a new board size is added without touching existing files.

### Non-Goals (v1)
Online multiplayer, accounts and login, leaderboards across users, monetization, chat, native apps. All are in the roadmap (§15).

---

## 4. Users and Key Scenarios

| Persona | Need | Success looks like |
|---------|------|--------------------|
| **Casual Kavya** (phone, commute, 5 minutes) | Instant game, no setup | One tap to start against the AI, plays with one thumb |
| **Family Farid** (tablet, two players on one screen) | Fair hot-seat play, big board | Alternating starter, clear whose turn it is, rematch button |
| **Competitive Chen** (desktop, wants challenge) | Strong AI, undo, hints, stats | Expert AI that punishes mistakes, streak tracking |
| **Access Amara** (color vision deficiency or screen reader) | Play without relying on color | Distinct token shapes, keyboard play, announced moves |
| **Owner Olivia** (client, non-technical) | Something to show and share | Beautiful link, working share preview, no maintenance |

Primary scenario: land → tap "Play vs Computer" (or "Play with a friend") → drop tokens → win, lose, or draw → see result overlay with the winning line highlighted → Rematch in one tap.

---

## 5. Scope (MoSCoW)

**Must:** Landing page, correct rules engine (win and draw), two-player local mode, AI opponent with at least 3 difficulty levels, turn indicator, drop animation, winning-line highlight, result overlay with rematch, alternating starter, responsive board, keyboard and touch support, color-independent token design, sound toggle, persisted settings and stats, how-to-play, 404, PWA offline support, SEO basics, deployment.

**Should:** Undo, hint, move history, hover column preview ("ghost token"), themes (light, dark, high contrast), reduced-motion mode, haptic feedback, share result, confetti or subtle celebration, analytics without PII.

**Could:** Board size variants (e.g., 8x7, 5x4 "Connect 3"), timed turns, daily challenge puzzles, replay of the last game, custom token colors.

**Won't (v1):** Online play, accounts, global leaderboards, ads, in-app purchases.

---

## 6. Information Architecture and Routes

| Route | Page | Notes |
|-------|------|-------|
| `/` | Landing page | Hero with a live demo board, mode buttons, how it works, features, FAQ |
| `/play?mode=ai&level=medium&first=you` | Game | Settings encoded in the URL so a game setup is shareable |
| `/play?mode=local` | Two-player hot-seat | |
| `/how-to-play` | Rules and tips | Also opened as a modal from the game |
| `/stats` | Personal statistics | From `localStorage` |
| `/about` | Credits, licenses, privacy | Required for asset attributions |
| `*` | 404 | Designed, with a "Play" button |

Settings (theme, sound, motion, palette) live in a modal reachable from every page.

---

## 7. Functional Requirements

### 7.1 Landing page (the "stunning" part)
- **FR-L1** Hero: brand name, one-line promise, two primary CTAs ("Play vs Computer", "Play with a Friend"), and an **animated demo board** that plays a scripted game in a loop (pauses under reduced motion, becomes static).
- **FR-L2** "How it works" in three steps with tiny illustrations (drop, connect four, win).
- **FR-L3** Feature highlights: five difficulty levels, works offline, colorblind-friendly, no sign-up.
- **FR-L4** Difficulty explainer with honest descriptions ("Expert looks 8 moves ahead").
- **FR-L5** FAQ (including "Who wins with perfect play?") to serve as SEO content.
- **FR-L6** Footer: about, privacy, source repository link if public, credits.
- **FR-L7** Install prompt shown as a subtle secondary action, never a modal.

### 7.2 Game rules and engine
- **FR-G1** 7 columns x 6 rows by default; board dimensions and win length configurable (`rows`, `cols`, `connect`).
- **FR-G2** A move is a column index; the token lands in the lowest empty row. Full column: move rejected with a typed error, state unchanged, gentle "column full" feedback.
- **FR-G3** Win: 4 connected horizontally, vertically, or diagonally (both directions); engine returns the exact winning cell coordinates.
- **FR-G4** Draw: board full without a winner.
- **FR-G5** First player alternates each rematch by default; option "loser starts" or "always me".
- **FR-G6** After game end, further moves are rejected.
- **FR-G7** Undo: reverts the last move (hot-seat) or the last two plies (vs AI); disabled after game end unless the rematch is not yet started; configurable off for "ranked" style play.
- **FR-G8** Hint (Should): highlights the engine's best column, counted in stats as "hints used".

### 7.3 AI opponent
Five levels, all implementing the same `MoveStrategy` interface:

| Level | Behavior | Intent |
|-------|----------|--------|
| Beginner | Random legal move, but takes an immediate win 50 percent of the time | Kids and newcomers |
| Easy | Takes immediate wins, blocks immediate losses, otherwise random with a center bias | Casual |
| Medium | Minimax depth 4 with alpha-beta and positional heuristic | Balanced |
| Hard | Minimax depth 7 with alpha-beta, center-first move ordering, transposition table | Challenging |
| Expert | Depth 9 or iterative deepening within a 1.5s budget; a small random tie-break | Strong but slightly human |

- **FR-A1** AI runs in a **Web Worker**; the UI never freezes; a subtle "thinking" indicator appears only if thinking exceeds 300ms.
- **FR-A2** AI never selects a full column; never misses an immediate win; at Easy and above never misses an immediate block (test-enforced).
- **FR-A3** Artificial minimum delay of about 400ms so moves feel natural rather than instant.
- **FR-A4** Deterministic seed option for reproducible tests and daily challenges.

### 7.4 UI and interaction
- **FR-U1** Whole column is a single large tap target (top-to-bottom), at least 44px wide even on 320px screens.
- **FR-U2** Hover or focus on a column shows a ghost token at the top and highlights the column; touch devices show it on press.
- **FR-U3** Token drop animates with gravity easing (transform only, GPU-friendly); duration scales with distance; skipped under reduced motion.
- **FR-U4** Input locked during drop animation and AI thinking; queued clicks are ignored, not deferred.
- **FR-U5** Turn indicator always visible and names the current player, with shape and color.
- **FR-U6** Winning four pulse or glow; result overlay after about 700ms so the line can be seen, with "Rematch", "Change settings", "Menu" and "Review board" (dismisses overlay to inspect).
- **FR-U7** Keyboard: Left and Right (or A and D) move column focus, Enter or Space or Down drops, digits 1 to 7 drop directly, `U` undo, `R` restart, `M` mute, `Esc` closes overlays.
- **FR-U8** Screen reader: each column is a button with a label like "Column 3, 2 of 6 filled"; moves and results are announced through an `aria-live` region ("Yellow dropped in column 4. Red's turn.").
- **FR-U9** Sound (drop, win, draw, illegal move) off by default until the user enables it; preference persisted; audio unlocks on first user gesture to satisfy autoplay rules.
- **FR-U10** Haptics (`navigator.vibrate`) on supported devices; toggle in settings.
- **FR-U11** If the tab is hidden mid-game, state is preserved; an in-progress game survives reload (persisted move list) with a "Resume" prompt.

### 7.5 Stats and persistence
- **FR-P1** Track games played, wins, losses, draws per mode and difficulty, current and best win streak, fastest win (in moves).
- **FR-P2** Data stored in `localStorage` under a versioned key with a migration function; corrupted data is discarded safely.
- **FR-P3** "Reset stats" and "Export/Import as JSON" (Could).

### 7.6 Accessibility and themes
- **FR-T1** Players are distinguished by **color plus shape or pattern** (e.g., solid disc and ringed disc), never color alone.
- **FR-T2** Palettes: Classic (red and yellow), Colorblind-safe (blue and orange), High-contrast; light and dark themes following `prefers-color-scheme` with manual override.
- **FR-T3** `prefers-reduced-motion` disables drop bounce, demo loops, and confetti.

---

## 8. Non-Functional Requirements

### 8.1 Responsiveness (every screen, every device)
- The board is sized by the **smaller of available width and height** using CSS `min()`, `aspect-ratio: 7 / 6`, and container units, so it always fits without scrolling in portrait, landscape, split-screen, foldables, and desktop; no reliance on fixed pixel slots.
- Layout adapts: portrait phones stack header, board, controls; landscape phones place controls beside the board; desktops add a side panel for history and stats.
- `100dvh` for full-height layouts (mobile browser bars), safe-area insets for notches, `touch-action: manipulation` to remove 300ms tap delay and stop double-tap zoom on the board.
- Supported: last two versions of Chrome, Safari, Firefox, Edge, Samsung Internet; iOS Safari 15 and above.

### 8.2 Performance budget
First load under 100 KB JS gzipped (excluding the worker, lazily loaded), LCP under 1.5s on mid-range 4G, INP under 100ms, CLS 0, 60fps animation (transform and opacity only), AI move at Hard under 500ms on a mid-range phone, images replaced by SVG and CSS wherever possible.

### 8.3 Accessibility (WCAG 2.2 AA)
Keyboard complete, focus visible, contrast 4.5:1 for text and 3:1 for tokens against the board, live announcements, no reliance on color, respects reduced motion, touch targets at least 44px, meaningful page titles per route, language attribute set.

### 8.4 Offline and installability
Service worker precaches the app shell and worker; the whole game works offline; web manifest with icons (192, 512, maskable), theme color, and standalone display; update flow shows a small "New version available, Reload" toast rather than silently swapping code mid-game.

### 8.5 Security and privacy
No accounts, no personal data collected; `localStorage` only for settings, stats, and the in-progress game; no `eval`, no inline scripts (strict CSP); if analytics is used, choose a cookieless privacy-first tool and state it in the privacy page; dependency audit in CI.

### 8.6 SEO and sharing
Unique title and description per route, Open Graph and Twitter cards with a striking preview image, JSON-LD `VideoGame` schema, `sitemap.xml`, `robots.txt`, canonical URLs, FAQ content on the landing page, fast Core Web Vitals.

### 8.7 Reliability
Error boundary with a "Something went wrong, restart game" fallback; corrupted saved state never blocks the app; worker crash falls back to a synchronous simple strategy so a game is never stuck.

---

## 9. Architecture and SOLID Compliance

### 9.1 Recommended stack (and why)
**TypeScript + Vite**, with **React** for the view layer, CSS Modules plus CSS custom properties for design tokens, a Web Worker for AI, Vitest for engine tests, React Testing Library for components, Playwright for end-to-end, `vite-plugin-pwa` for offline, ESLint and Prettier.

Tradeoffs considered: **vanilla TypeScript with a tiny render function** is entirely viable for a single-screen game and would shave about 40 KB; choose it if the 100 KB budget becomes the priority or if you want the purest showcase of the engine. **Svelte** gives smaller bundles and pleasant animation primitives and is a strong alternative. **Canvas or PixiJS** would only pay off for particle-heavy effects; DOM and CSS transforms are simpler, more accessible, and fast enough for 42 cells. Because the engine is framework-agnostic, this choice is reversible at low cost, which is the point of the architecture.

### 9.2 Layering

```
UI (React components, pages)         → renders state, dispatches intents
Application (useGame, GameController)→ turns intents into engine calls, manages turns and timing
Domain (pure TypeScript)             → Board, Rules, WinDetector, Game, MoveStrategy interface
Infrastructure (adapters)            → MinimaxWorkerStrategy, LocalStorageRepository, WebAudioSoundPlayer, VibrationHaptics
```

The domain imports nothing from React, the DOM, the worker, or storage. It is testable in milliseconds and reusable for a future server or online mode.

### 9.3 SOLID mapping

| Principle | Concrete application |
|-----------|----------------------|
| **S**ingle Responsibility | `Board` holds cells; `WinDetector` finds lines; `Game` sequences turns; `MinimaxStrategy` chooses moves; `StatsRepository` persists; `ColumnButton` renders one column. No class knows another's job. |
| **O**pen/Closed | Adding "Impossible" perfect-play AI, a new heuristic, or a different board size means adding a new `MoveStrategy` or config value; `Game` and UI never change. Win detection iterates a list of direction vectors rather than four copy-pasted loops. |
| **L**iskov Substitution | Every `Player` (`HumanPlayer`, `AiPlayer`, later `RemotePlayer`) honors the same contract: given a game state, eventually produce a legal column or be cancelled. `Game` cannot tell them apart. Every `MoveStrategy` must never return an illegal move (contract-tested). |
| **I**nterface Segregation | Small ports: `MoveStrategy { chooseMove(state, signal) }`, `StatsRepository { load, save }`, `SoundPlayer { play(effect) }`, `Haptics { pulse(kind) }`. UI never receives a "god" object. |
| **D**ependency Inversion | The composition root (`main.tsx`) wires concrete adapters into the application layer. Tests inject a `FakeStrategy` and `InMemoryStatsRepository`; production injects the worker and `localStorage`. |

Also enforced: DRY (one direction-vector table), KISS (React state plus a reducer is enough; no external state library), YAGNI (no networking code in v1), immutability (`Board.drop` returns a new board), and "make illegal states unrepresentable" (a `GameStatus` discriminated union: `playing | won(player, line) | draw`).

### 9.4 Core contracts

```ts
type Player = 1 | 2;
type Cell = Player | 0;

interface Board {
  readonly rows: number; readonly cols: number;
  cellAt(row: number, col: number): Cell;
  legalMoves(): readonly number[];
  drop(col: number, player: Player): Result<Board, 'COLUMN_FULL' | 'OUT_OF_RANGE'>;
}

type GameStatus =
  | { kind: 'playing'; next: Player }
  | { kind: 'won'; winner: Player; line: readonly [number, number][] }
  | { kind: 'draw' };

interface MoveStrategy {
  chooseMove(board: Board, me: Player, signal: AbortSignal): Promise<number>;
}
```

Because moves are just column integers, a whole game is a **string of digits** (`"3344556"`), which makes undo, persistence, replay, sharing, tests, and future online play trivial.

### 9.5 Folder structure

```
src/
  app/            router, providers, composition root
  domain/         board.ts, rules.ts, winDetector.ts, game.ts, types.ts
  ai/             strategies/{random,heuristic,minimax}.ts, evaluation.ts, worker.ts
  services/       ports.ts, localStorageStats.ts, webAudioSound.ts, haptics.ts, settingsStore.ts
  features/
    landing/      Hero, DemoBoard, HowItWorks, Features, DifficultyExplainer, Faq
    game/         GamePage, BoardView, ColumnButton, Token, TurnIndicator, ResultOverlay, useGame
    stats/        StatsPage, StatCard
    settings/     SettingsModal, PalettePicker
  components/     Button, Modal, Toast, Icon, Switch, Segmented
  styles/         tokens.css, reset.css, animations.css
  config/         game.config.ts (rows, cols, connect, delays, difficulty presets)
  tests/
public/           icons, manifest, og-image, sounds, robots.txt
```

### 9.6 Persistence schema (versioned)

```ts
interface SavedState {
  version: 1;
  settings: { theme: 'system'|'light'|'dark'; palette: string; sound: boolean; haptics: boolean; reducedMotion: 'system'|'on'|'off' };
  stats: Record<string /* mode:level */, { played: number; won: number; lost: number; drawn: number; bestStreak: number; currentStreak: number; fastestWinMoves?: number }>;
  inProgress?: { mode: string; level?: string; firstPlayer: 1|2; moves: string; startedAt: string };
}
```

---

## 10. Design System and UI Direction

**Aesthetic:** modern, tactile, and playful without being childish. A deep blue board with soft inner shadows and glossy tokens on a calm gradient background; generous spacing; big rounded controls. Motion is the star: satisfying gravity drops with a tiny bounce, a glow sweep on the winning four, and restrained celebration.

**Tokens (verify contrast):**

| Token | Value | Use |
|-------|-------|-----|
| `--board` | `#2f3fb3` (light) / `#1f2a7a` (dark) | Board body |
| `--board-hole` | `#0e1240` in dark, `#e9ecff` in light | Slot cutouts |
| `--p1` | `#e5384f` (Classic) with **solid disc** | Player 1 |
| `--p2` | `#f5c518` (Classic) with **ring or dot** pattern | Player 2 |
| `--bg` | soft gradient from `#f6f7ff` to `#e6e9ff` (light), `#0b0e2a` to `#141a4d` (dark) | Page |
| `--radius` | `20px` | Panels and buttons |

**Typography:** a friendly geometric sans for display (Poppins, Outfit, or Sora) and system UI stack for body; fluid scale with `clamp()`; fonts self-hosted, subsetted, `font-display: swap`.

**Components to build once:** Button, IconButton, Switch, Segmented control, Modal, Toast, Token, BoardView, ColumnButton, TurnIndicator, ResultOverlay, StatCard, Header, Footer. Each supports default, hover, focus-visible, active, disabled, and loading states.

**Landing page storytelling:** the hero board plays itself; scroll reveals rules and features with the same components used in the game, so marketing and product never drift apart.

---

## 11. Testing Strategy

The engine is small and exact, so test it exhaustively.

- **Engine unit tests (Vitest), target 100 percent line and branch on `domain/`:**
  - all four win directions from every valid starting cell, including diagonals near every corner and edge;
  - **no wrap-around wins** (a token at the end of a row must not connect with the start of the next row, the classic bug in flat-array or bitboard implementations);
  - a line of 3 or 5 (overlong) behaves correctly; a five-in-a-row counts as a win with the right line;
  - full-column rejection leaves state unchanged; draw detection on a constructed full board; no moves after game end;
  - move-string replay reproduces the exact board; undo then redo is identity.
- **AI tests:** never returns an illegal move; always takes an immediate win; blocks an immediate loss (Easy and above); finds a forced win-in-2 at Medium and above on curated positions; completes within the time budget; seeded runs are deterministic.
- **Property-based tests (fast-check):** random legal games always terminate in at most 42 plies with a consistent status; `drop` never mutates its input.
- **Component tests:** ColumnButton labels, TurnIndicator, ResultOverlay actions, keyboard handlers.
- **End-to-end (Playwright):** play a scripted game to a win, a draw, and an AI loss; refresh mid-game and resume; run at mobile, tablet, desktop, and landscape viewports; verify offline mode after first load.
- **Accessibility:** axe in CI, manual keyboard-only run, VoiceOver and TalkBack announcement check, colorblind simulation of all palettes.
- **Device pass:** real iPhone Safari, mid-range Android Chrome, tablet, desktop Chrome, Firefox, Edge; test with 4x CPU throttling.

---

## 12. Acceptance Criteria (Definition of Done for v1)

1. A user can begin playing within one tap from the landing page and complete a full game on a 320px-wide phone with one thumb.
2. The engine passes the full test suite: every win direction, no wrap-around false wins, correct draw, full-column rejection, and no moves after game end.
3. No `eval`, no implicit globals, no inline scripts; ESLint and TypeScript strict mode clean.
4. The AI never returns an illegal move, always takes an immediate win, blocks an immediate loss at Easy and above, and Hard responds in under 500ms on a mid-range phone; the UI never freezes.
5. Winning four cells are visibly highlighted and remain visible until the player dismisses or chooses Rematch; there is no `alert()` or forced reload anywhere.
6. Players are distinguishable without color; the whole game is playable by keyboard alone and announced to screen readers.
7. Lighthouse mobile 95 or above in all four categories on the deployed URL; JS under 100 KB gzipped for first load.
8. The game works fully offline after first load and can be installed as a PWA; an interrupted game resumes after refresh.
9. Settings and stats persist; corrupted storage never breaks the app.
10. Refreshing any route on production works; 404 is designed.

---

## 13. Delivery Plan

| Phase | Deliverable | Est. |
|-------|-------------|------|
| 0 | Decide name, modes, and visual direction; collect or create assets (icons, sounds, fonts) with licenses | 1 to 2 days |
| 1 | Scaffold (Vite, TS strict, lint, CI), tokens, base components | 1 day |
| 2 | Domain engine and its exhaustive tests | 2 days |
| 3 | Game UI: board, animation, turn indicator, result overlay, keyboard, touch | 3 days |
| 4 | AI strategies, worker, difficulty tuning, AI tests | 3 days |
| 5 | Landing page, how-to-play, stats, settings, themes, sound | 3 to 4 days |
| 6 | PWA, SEO, accessibility audit, performance, device passes | 2 days |
| 7 | Deploy, domain, monitoring, documentation, handover | 1 day |

Realistic total: **2 to 3 weeks** for one developer. The engine and tests are the smallest part; polish, tuning, and testing on real devices take the most time.

---

## 14. Risks and Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| Rules bugs (edge or wrap-around wins) | Broken core promise | Exhaustive and property-based engine tests before any UI |
| AI too strong, too weak, or slow | Frustration or boredom | Five calibrated levels, worker thread, time budget, playtesting with real users |
| Layout breaks on unusual viewports (landscape phones, foldables, split screen) | Unplayable on some devices | Board sized from `min(width, height)` with aspect-ratio; device matrix in handover |
| Color-only distinction | Excludes color-blind players; accessibility failure | Shapes and patterns plus alternative palettes |
| Audio blocked by autoplay policies | Silent or erroring sound | Unlock on first gesture; sound optional and off by default |
| Trademark on the "Connect 4" name and artwork | Legal takedown | Use a distinct or generic name; original visuals; verify before commercial use |
| Unlicensed sounds, fonts, or images | Copyright claims | Only CC0 or licensed assets, listed in `/about` and in the handover pack |
| Service worker serving stale code | Users stuck on old bug | Versioned caches and an explicit "update available" toast |
| Scope creep to online play | Delay | Non-goals signed off; online mode is a roadmap item built on the existing `Player` port |

---

## 15. Roadmap After v1

- **v1.1:** Board variants (Connect 3, 8x7), timed turns, daily puzzle with a seeded AI position, custom token colors.
- **v1.2:** Perfect-play "Impossible" mode using a solver, move-quality review (blunder detection) after a game.
- **v2:** Online multiplayer via WebSockets or Supabase Realtime with shareable room links; a `RemotePlayer` implements the existing `Player` port.
- **v3:** Optional accounts, ratings, and leaderboards; localization.

---

## 16. Open Questions to Answer Before Coding

1. **Name and brand:** what is the final product name (avoid the trademarked "Connect 4")? Is there a logo or color identity?
2. **Purpose:** portfolio piece, client deliverable, or public product? (Affects analytics, monetization, and polish priorities.)
3. Which modes are essential at launch: hot-seat, vs AI, or both? (Recommendation: both.)
4. Should sound be part of v1, and are there licensed or CC0 assets available?
5. Does the client want ads, analytics, or a share feature? (Ads add privacy, consent, and performance obligations.)
6. Target audience: kids, families, or competitive players? (Drives tone, copy, and AI calibration.)
7. Domain and hosting already owned?
8. Is the source to be public (portfolio) or private (client)? Determines license choice and repository transfer method.

---

## 17. Client Handover Checklist (Last-Minute Safe)

### 17.1 Product and content readiness
- [ ] Final product name confirmed; trademark check done and documented
- [ ] Logo (SVG and PNG), favicon, app icons (192, 512, maskable), theme color, Open Graph image supplied
- [ ] All copy proofread: landing page, how-to-play, FAQ, error messages, privacy page
- [ ] Every sound, font, and illustration has a license recorded and credited on `/about`
- [ ] Privacy statement matches reality (what is stored locally, whether analytics exists)
- [ ] Difficulty levels playtested by at least three different people; feedback recorded

### 17.2 Functional verification (test on the live URL, not localhost)
- [ ] Play to a win as each player, to a draw, and to a loss against every AI level
- [ ] Try to click a full column, click rapidly during animation, and click after game end: nothing breaks
- [ ] Undo, hint (if included), rematch, and alternating first player behave correctly
- [ ] Winning four highlighted correctly for horizontal, vertical, ascending diagonal, and descending diagonal wins
- [ ] Refresh mid-game: "Resume" restores the exact position; corrupt the saved data manually and confirm the app still loads
- [ ] Stats and settings persist across sessions and reset correctly
- [ ] Airplane mode after first load: game still works; the "update available" flow works after a redeploy
- [ ] Keyboard-only play (arrows, Enter, digits, `U`, `R`, `M`, `Esc`) works end to end
- [ ] Screen reader announcements verified (VoiceOver and TalkBack)
- [ ] Colorblind simulation confirms players are distinguishable in every palette
- [ ] Tested on iPhone Safari, Android Chrome, a tablet, desktop Chrome, Firefox, and Edge, in portrait and landscape, and at 320px width

### 17.3 Quality gates
- [ ] Lighthouse mobile 95 or above for Performance, Accessibility, Best Practices, and SEO
- [ ] axe scan clean; reduced-motion mode verified
- [ ] First-load JS under 100 KB gzipped; no console errors or warnings
- [ ] Engine coverage 100 percent; all unit, component, and end-to-end tests pass in CI
- [ ] No `eval`, no implicit globals, no `alert()`, no `location.reload()` in the codebase
- [ ] `npm audit` clean or exceptions documented

### 17.4 Deployment and infrastructure
- [ ] Production build deployed (Netlify, Vercel, Cloudflare Pages, or GitHub Pages) with correct base path
- [ ] Custom domain connected, HTTPS active, www and apex redirects configured
- [ ] SPA fallback configured so deep links and refresh work (a common GitHub Pages pitfall)
- [ ] Security headers set (CSP without `unsafe-inline`, Referrer-Policy, X-Content-Type-Options)
- [ ] Web manifest and service worker verified with Lighthouse PWA checks; install tested on Android and iOS ("Add to Home Screen")
- [ ] `sitemap.xml`, `robots.txt`, canonical URLs, and Open Graph preview verified with a social share debugger
- [ ] Analytics (if any) under the client's account, privacy-first configuration
- [ ] Uptime and error monitoring configured (e.g., UptimeRobot, Sentry free tier)

### 17.5 Ownership and access transfer
- [ ] Repository transferred to (or shared with) the client; license file chosen and included
- [ ] Hosting, domain registrar, and analytics accounts owned by the client
- [ ] Credentials shared through a password manager, never plain email or chat
- [ ] Any API keys or tokens rotated after handover (none should exist in v1)

### 17.6 Documentation delivered
- [ ] `README.md`: install, run, test, build, deploy, and environment notes
- [ ] Architecture note: layers, ports, how to add a new AI strategy or board size, how moves are encoded as a digit string
- [ ] "How to change colors, copy, and difficulty presets" guide (tokens and `game.config.ts`)
- [ ] "How to release an update" guide (including the service worker update flow)
- [ ] Asset and license register
- [ ] Support terms: what is covered, response times, cost of changes, renewal dates for domain and hosting
- [ ] Backup: repository archive and asset originals delivered

### 17.7 Sign-off
- [ ] Client played the live game on their own phone and desktop
- [ ] Acceptance criteria (§12) signed off
- [ ] Post-launch review scheduled for 7 days out: check errors, performance, real-user feedback, and any stuck-game reports

---

## 18. Appendix — Existing Code to New Architecture Mapping

| Existing asset | Becomes |
|----------------|---------|
| `index.html` (7 `<ul>` columns, 42 `<p>` slots with ids) | Generated `BoardView` from board state; 7 accessible `ColumnButton`s and a `role="grid"` visual; no hand-written ids |
| `connect4.css` (fixed 75px slots, three media queries) | `tokens.css` and component CSS Modules; fluid `min()` sizing with `aspect-ratio` |
| `val_c1..val_c7` + `eval()` | `Board.legalMoves()` and derived column heights; no dynamic code |
| `turn` counter (odd or even) | `Game.next` player in a `GameStatus` union; alternating starter policy |
| `check(player)` with four copy-pasted scans and 200ms delay | `WinDetector` using a table of direction vectors; synchronous; returns the winning line |
| `alert()` + `location.reload()` | `ResultOverlay` with Rematch, Settings, Menu, and Review board |
| `element.style.backgroundColor == player` | Immutable in-memory board; DOM as a pure projection |
| Missing `#whosturn` | `TurnIndicator` component driven by state |
| Missing draw check | `GameStatus.draw` when the board is full without a winner |
| Ideas: AI, sound, scoreboard, undo, glow on win | Delivered as `MoveStrategy` implementations, `SoundPlayer` port, `StatsRepository`, `Game.undo`, and win-line animation |
