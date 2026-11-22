"use client";

import React, { useState, useEffect } from "react";
import { Terminal, FileDown, Search, Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  onOpenCommandPalette: () => void;
}

export function Navbar({ onOpenCommandPalette }: NavbarProps) {
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
    { name: "Projects", href: "#projects" },
    { name: "Architecture", href: "#architecture" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl shadow-cyan-950/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 to-indigo-600 p-[1px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all">
            <div className="w-full h-full bg-slate-950 rounded-lg flex items-center justify-center font-mono font-bold text-sm text-cyan-400 group-hover:text-white transition-colors">
              JM
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm tracking-tight text-white group-hover:text-cyan-400 transition-colors">
              Jemish Mavani
            </span>
            <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
              Solenyx Studio
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/[0.08]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-medium text-slate-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/[0.06] transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Status Pill */}
          <div className="hidden lg:flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] text-emerald-400 font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 radar-badge inline-block" />
            <span>Open for Senior Roles</span>
          </div>

          {/* Cmd + K Button */}
          <button
            onClick={onOpenCommandPalette}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-xs text-slate-400 hover:text-slate-200 border border-white/[0.08] hover:border-cyan-500/30 transition-all cursor-pointer shadow-sm"
            title="Open command palette (Cmd+K)"
          >
            <Search className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden xl:inline">Search</span>
            <kbd className="px-1.5 py-0.5 text-[10px] bg-slate-800 rounded border border-slate-700 font-mono text-slate-300">
              ⌘K
            </kbd>
          </button>

          {/* Resume PDF */}
          <a
            href="/resume_jemish_mavani.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 hover:from-cyan-500/30 hover:to-indigo-500/30 border border-cyan-500/30 hover:border-cyan-500/50 text-xs font-medium text-cyan-300 hover:text-white transition-all shadow-sm"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenCommandPalette}
            className="p-2 rounded-lg bg-slate-900 border border-white/[0.08] text-slate-300"
            aria-label="Open command palette"
          >
            <Search className="w-4 h-4 text-cyan-400" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-900 border border-white/[0.08] text-slate-300"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 border-b border-white/[0.08] px-4 pt-3 pb-5 space-y-3 backdrop-blur-2xl">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400 font-mono mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 radar-badge inline-block" />
            <span>Open for Senior / High-Impact Roles</span>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-800 flex gap-2">
            <a
              href="/resume_jemish_mavani.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-cyan-600/20 border border-cyan-500/30 text-xs font-medium text-cyan-300"
            >
              <FileDown className="w-4 h-4" />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
