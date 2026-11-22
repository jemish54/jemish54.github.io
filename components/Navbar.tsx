"use client";

import React, { useState, useEffect } from "react";
import { useMode } from "@/components/ModeContext";
import { sound } from "@/lib/audio";
import { 
  Search, 
  FileDown, 
  Volume2, 
  VolumeX, 
  Layers, 
  Cpu, 
  Menu, 
  X,
  Sparkles
} from "lucide-react";

interface NavbarProps {
  onOpenCommandPalette: () => void;
}

export function Navbar({ onOpenCommandPalette }: NavbarProps) {
  const { mode, toggleMode, soundEnabled, toggleSound } = useMode();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Works", href: "#projects" },
    { name: "Architecture", href: "#architecture" },
    { name: "Capabilities", href: "#skills" },
    { name: "Timeline", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-2xl border-b border-white/[0.08] py-3.5 shadow-2xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Left: Brand Monogram */}
        <a 
          href="#" 
          onClick={() => sound.click()}
          className="flex items-center gap-3 group"
        >
          <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center font-mono font-bold text-xs text-neutral-200 group-hover:text-cyan-400 group-hover:border-cyan-500/40 transition-all">
            JM
          </div>
          <div className="flex flex-col">
            <span className="font-medium text-xs tracking-tight text-white group-hover:text-cyan-400 transition-colors">
              Jemish Mavani
            </span>
            <span className="text-[10px] font-mono text-neutral-500">
              Solenyx Studio
            </span>
          </div>
        </a>

        {/* Center: Minimal Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-neutral-950/80 backdrop-blur-xl px-3 py-1.5 rounded-full border border-white/[0.08]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => sound.click()}
              className="text-xs font-mono text-neutral-400 hover:text-white px-3 py-1 rounded-full hover:bg-white/[0.04] transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right: Controls & Actions */}
        <div className="hidden sm:flex items-center gap-2.5">
          
          {/* Executive / Architect Mode Toggle */}
          <button
            onClick={toggleMode}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-neutral-900/80 hover:bg-neutral-800 border border-white/[0.08] text-[11px] font-mono transition-all cursor-pointer"
            title="Toggle between Executive (Recruiter) and Architect (Deep System) mode"
          >
            {mode === "executive" ? (
              <>
                <Layers className="w-3 h-3 text-cyan-400" />
                <span className="text-neutral-300">Executive</span>
              </>
            ) : (
              <>
                <Cpu className="w-3 h-3 text-emerald-400" />
                <span className="text-neutral-300">Architect</span>
              </>
            )}
          </button>

          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            className="p-1.5 rounded-lg bg-neutral-900/80 hover:bg-neutral-800 border border-white/[0.08] text-neutral-400 hover:text-neutral-200 transition-all cursor-pointer"
            title={soundEnabled ? "Mute interactive audio" : "Enable interactive audio"}
          >
            {soundEnabled ? (
              <Volume2 className="w-3.5 h-3.5 text-cyan-400" />
            ) : (
              <VolumeX className="w-3.5 h-3.5 text-neutral-500" />
            )}
          </button>

          {/* Cmd+K trigger */}
          <button
            onClick={() => {
              sound.click();
              onOpenCommandPalette();
            }}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-neutral-900/80 hover:bg-neutral-800 border border-white/[0.08] text-[11px] font-mono text-neutral-400 hover:text-neutral-200 transition-all cursor-pointer"
          >
            <Search className="w-3 h-3 text-cyan-400" />
            <span>⌘K</span>
          </button>

          {/* Resume Link */}
          <a
            href="/resume_jemish_mavani.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.click()}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-neutral-200 text-black text-xs font-mono font-medium transition-all"
          >
            <FileDown className="w-3 h-3" />
            <span>CV</span>
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleMode}
            className="px-2 py-1 rounded bg-neutral-900 border border-white/10 text-[10px] font-mono text-cyan-400"
          >
            {mode === "executive" ? "Exec" : "Arch"}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded bg-neutral-900 border border-white/10 text-neutral-300"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 border-b border-white/[0.08] px-4 pt-3 pb-6 space-y-2 backdrop-blur-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                sound.click();
                setMobileMenuOpen(false);
              }}
              className="block px-3 py-2 rounded-lg text-xs font-mono text-neutral-300 hover:text-white hover:bg-neutral-900"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-neutral-900 flex gap-2">
            <a
              href="/resume_jemish_mavani.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2 rounded bg-neutral-900 border border-white/10 text-xs font-mono text-cyan-300"
            >
              <FileDown className="w-3.5 h-3.5" />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
