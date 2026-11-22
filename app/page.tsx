"use client";

import React, { useState, useEffect } from "react";
import { SpotlightCanvas } from "@/components/ui/SpotlightCanvas";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ArchitectureView } from "@/components/ArchitectureView";
import { BentoProjects } from "@/components/BentoProjects";
import { SkillsMatrix } from "@/components/SkillsMatrix";
import { Experience } from "@/components/Experience";
import { ContactSection } from "@/components/ContactSection";
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
    <main className="relative min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Interactive Ambient Cursor Glow */}
      <SpotlightCanvas />

      {/* Floating Navigation */}
      <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* Content Sections */}
      <div className="flex-1 space-y-4">
        <Hero />
        <ArchitectureView />
        <BentoProjects />
        <SkillsMatrix />
        <Experience />
        <ContactSection />
      </div>

      {/* Footer */}
      <Footer />

      {/* Interactive Raycast-Style Command Palette (Cmd+K) */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />

      {/* Interactive Draggable Terminal Easter Egg */}
      <TerminalWidget />
    </main>
  );
}
