"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { sound } from "@/lib/audio";

export type ViewMode = "executive" | "architect";

interface ModeContextType {
  mode: ViewMode;
  setMode: (mode: ViewMode) => void;
  toggleMode: () => void;
  soundEnabled: boolean;
  setSoundEnabled: (enabled: boolean) => void;
  toggleSound: () => void;
}

const ModeContext = createContext<ModeContextType | undefined>(undefined);

export function ModeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<ViewMode>("executive");
  const [soundEnabled, setSoundState] = useState(false);

  const setMode = (newMode: ViewMode) => {
    sound.pop();
    setModeState(newMode);
  };

  const toggleMode = () => {
    sound.pop();
    setModeState((prev) => (prev === "executive" ? "architect" : "executive"));
  };

  const toggleSound = () => {
    const next = !soundEnabled;
    sound.enabled = next;
    setSoundState(next);
    if (next) sound.chime();
  };

  const setSoundEnabled = (enabled: boolean) => {
    sound.enabled = enabled;
    setSoundState(enabled);
  };

  return (
    <ModeContext.Provider
      value={{
        mode,
        setMode,
        toggleMode,
        soundEnabled,
        setSoundEnabled,
        toggleSound,
      }}
    >
      {children}
    </ModeContext.Provider>
  );
}

export function useMode() {
  const context = useContext(ModeContext);
  if (!context) {
    throw new Error("useMode must be used within a ModeProvider");
  }
  return context;
}
