import React, { useState, useEffect, useRef } from 'react';
import { AiDifficulty } from './ai/types';
import { Header } from './components/Header';
import { HowToPlayModal } from './components/HowToPlayModal';
import { SettingsModal } from './components/SettingsModal';
import { GamePage } from './features/game/GamePage';
import { LandingPage } from './features/landing/LandingPage';
import { StatsModal } from './features/stats/StatsModal';
import { HapticsService } from './services/haptics';
import { SoundPlayer } from './services/sound';
import { InProgressGame, UserSettings, storage } from './services/storage';

export const App: React.FC = () => {
  const [settings, setSettings] = useState<UserSettings>(() => storage.load().settings);
  const soundPlayerRef = useRef<SoundPlayer>(new SoundPlayer(!settings.sound));
  const hapticsRef = useRef<HapticsService>(new HapticsService(settings.haptics));

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isStatsOpen, setIsStatsOpen] = useState(false);
  const [isHowToPlayOpen, setIsHowToPlayOpen] = useState(false);

  const [savedGame, setSavedGame] = useState<InProgressGame | undefined>(() => storage.load().inProgress);

  const [view, setView] = useState<'landing' | 'game'>('landing');
  const [gameMode, setGameMode] = useState<'ai' | 'local'>('ai');
  const [difficulty, setDifficulty] = useState<AiDifficulty>('medium');
  const [initialMoves, setInitialMoves] = useState<string | undefined>(undefined);
  const [initialStarter, setInitialStarter] = useState<1 | 2>(1);

  useEffect(() => {
    const root = document.documentElement;

    if (settings.theme === 'system') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      root.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    } else {
      root.setAttribute('data-theme', settings.theme);
    }

    root.setAttribute('data-palette', settings.palette);
    root.setAttribute('data-reduced-motion', settings.reducedMotion);

    soundPlayerRef.current.setMuted(!settings.sound);
    hapticsRef.current.setEnabled(settings.haptics);
  }, [settings]);

  useEffect(() => {
    const unlockAudio = () => {
      soundPlayerRef.current.unlock();
      window.removeEventListener('pointerdown', unlockAudio);
      window.removeEventListener('keydown', unlockAudio);
    };

    window.addEventListener('pointerdown', unlockAudio);
    window.addEventListener('keydown', unlockAudio);

    return () => {
      window.removeEventListener('pointerdown', unlockAudio);
      window.removeEventListener('keydown', unlockAudio);
    };
  }, []);

  const handleUpdateSettings = (partial: Partial<UserSettings>) => {
    const updated = storage.updateSettings(partial);
    setSettings(updated);
  };

  const handleStartAiGame = (selectedDiff: AiDifficulty) => {
    setGameMode('ai');
    setDifficulty(selectedDiff);
    setInitialMoves(undefined);
    setInitialStarter(1);
    setView('game');
    soundPlayerRef.current.play('click');
  };

  const handleStartLocalGame = () => {
    setGameMode('local');
    setInitialMoves(undefined);
    setInitialStarter(1);
    setView('game');
    soundPlayerRef.current.play('click');
  };

  const handleResumeSavedGame = () => {
    if (!savedGame) return;
    setGameMode(savedGame.mode);
    if (savedGame.level) setDifficulty(savedGame.level as AiDifficulty);
    setInitialMoves(savedGame.moves);
    setInitialStarter(savedGame.starter);
    setView('game');
    soundPlayerRef.current.play('click');
  };

  const handleNavigateHome = () => {
    setSavedGame(storage.load().inProgress);
    setView('landing');
    soundPlayerRef.current.play('click');
  };

  const handleToggleSound = () => {
    handleUpdateSettings({ sound: !settings.sound });
  };

  const handleToggleTheme = () => {
    let currentTheme = settings.theme;
    if (currentTheme === 'system') {
      currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
    handleUpdateSettings({ theme: nextTheme });
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.key === 'm' || e.key === 'M') {
        handleToggleSound();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [settings.sound]);

  return (
    <div className="app-root">
      <Header
        mode={view === 'landing' ? 'landing' : gameMode}
        difficulty={difficulty}
        soundMuted={!settings.sound}
        onToggleSound={handleToggleSound}
        onOpenSettings={() => setIsSettingsOpen(true)}
        onOpenStats={() => setIsStatsOpen(true)}
        onOpenHowToPlay={() => setIsHowToPlayOpen(true)}
        onNavigateHome={view === 'game' ? handleNavigateHome : undefined}
        theme={settings.theme}
        onToggleTheme={handleToggleTheme}
      />

      {view === 'landing' ? (
        <LandingPage
          onStartAiGame={handleStartAiGame}
          onStartLocalGame={handleStartLocalGame}
          onOpenHowToPlay={() => setIsHowToPlayOpen(true)}
          hasSavedGame={Boolean(savedGame && savedGame.moves.length > 0)}
          onResumeSavedGame={handleResumeSavedGame}
        />
      ) : (
        <GamePage
          key={`${gameMode}-${difficulty}-${initialMoves || 'new'}`}
          mode={gameMode}
          difficulty={difficulty}
          soundPlayer={soundPlayerRef.current}
          haptics={hapticsRef.current}
          onNavigateHome={handleNavigateHome}
          onOpenSettings={() => setIsSettingsOpen(true)}
          initialMoveString={initialMoves}
          initialStarter={initialStarter}
          reducedMotion={settings.reducedMotion === 'on'}
        />
      )}

      <SettingsModal
        isOpen={isSettingsOpen}
        settings={settings}
        onUpdateSettings={handleUpdateSettings}
        onClose={() => setIsSettingsOpen(false)}
      />

      <StatsModal
        isOpen={isStatsOpen}
        onClose={() => setIsStatsOpen(false)}
      />

      <HowToPlayModal
        isOpen={isHowToPlayOpen}
        onClose={() => setIsHowToPlayOpen(false)}
      />

      <style>{`
        .app-root {
          display: flex;
          flex-direction: column;
          min-height: 100dvh;
          width: 100%;
        }
      `}</style>
    </div>
  );
};
