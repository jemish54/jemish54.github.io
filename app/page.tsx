"use client";

import React, { useState, useEffect } from "react";
import { ModeProvider } from "@/components/ModeContext";
import { InteractiveConstellation } from "@/components/ui/InteractiveConstellation";
import { SpotlightCanvas } from "@/components/ui/SpotlightCanvas";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { WorkShowcase } from "@/components/WorkShowcase";
import { ArchitectureCanvas } from "@/components/ArchitectureCanvas";
import { SkillsMinimal } from "@/components/SkillsMinimal";
import { ExperienceMinimal } from "@/components/ExperienceMinimal";
import { ContactMinimal } from "@/components/ContactMinimal";
import { Footer } from "@/components/Footer";
import { CommandPalette } from "@/components/CommandPalette";
import { TerminalWidget } from "@/components/TerminalWidget";

export default function Home() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <ModeProvider>
      <main className="relative min-h-screen bg-black text-neutral-100 flex flex-col selection:bg-cyan-500/20 selection:text-cyan-300 overflow-x-hidden">
        {/* Interactive Vector Constellation Canvas */}
        <InteractiveConstellation />

        {/* Ambient Cursor Spotlight */}
        <SpotlightCanvas />

        {/* Refined Floating Navbar */}
        <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

        {/* Core Layout Sections */}
        <div className="flex-1 space-y-0">
          <Hero />
          <WorkShowcase />
          <ArchitectureCanvas />
          <SkillsMinimal />
          <ExperienceMinimal />
          <ContactMinimal />
        </div>

        {/* Footer */}
        <Footer />

        {/* Quick Command Launcher (Cmd+K) */}
        <CommandPalette
          isOpen={commandPaletteOpen}
          onClose={() => setCommandPaletteOpen(false)}
        />

        {/* Bottom Interactive Terminal Pill */}
        <TerminalWidget />
      </main>
    </ModeProvider>
  );
}
