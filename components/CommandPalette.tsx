"use client";

import React, { useState, useEffect } from "react";
import { 
  Search, 
  Layers, 
  Activity, 
  Cpu, 
  Briefcase, 
  Mail, 
  FileDown, 
  Play, 
  X, 
  ArrowRight,
  ExternalLink,
  Sparkles
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import confetti from "canvas-confetti";

interface CommandItem {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  category: "Navigation" | "Projects" | "Actions";
  action: () => void;
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const commands: CommandItem[] = [
    {
      id: "nav-projects",
      title: "Projects",
      subtitle: "Jump to featured production apps and monorepos",
      category: "Navigation",
      icon: <Layers className="w-4 h-4 text-cyan-400" />,
      action: () => {
        window.location.hash = "#projects";
        onClose();
      },
    },
    {
      id: "nav-architecture",
      title: "System Architecture",
      subtitle: "Inspect AstroSight & TracXpense system designs",
      category: "Navigation",
      icon: <Activity className="w-4 h-4 text-emerald-400" />,
      action: () => {
        window.location.hash = "#architecture";
        onClose();
      },
    },
    {
      id: "nav-skills",
      title: "Skills Matrix",
      subtitle: "Explore Mobile, Backend, AI & DevOps depth",
      category: "Navigation",
      icon: <Cpu className="w-4 h-4 text-indigo-400" />,
      action: () => {
        window.location.hash = "#skills";
        onClose();
      },
    },
    {
      id: "nav-experience",
      title: "Experience Timeline",
      subtitle: "View career history, Solenyx Studio & roles",
      category: "Navigation",
      icon: <Briefcase className="w-4 h-4 text-amber-400" />,
      action: () => {
        window.location.hash = "#experience";
        onClose();
      },
    },
    {
      id: "proj-astrosight",
      title: "AstroSight (Vedic AI Monorepo)",
      subtitle: "Open GitHub repository",
      category: "Projects",
      icon: <GithubIcon className="w-4 h-4 text-slate-300" />,
      action: () => {
        window.open("https://github.com/jemish54/astrosight", "_blank");
        onClose();
      },
    },
    {
      id: "proj-scorecord",
      title: "Scorecord on Google Play",
      subtitle: "Open live app listing",
      category: "Projects",
      icon: <Play className="w-4 h-4 text-emerald-400" />,
      action: () => {
        window.open("https://play.google.com/store/apps/details?id=studio.solenyx.scorecord", "_blank");
        onClose();
      },
    },
    {
      id: "action-resume",
      title: "Download Resume",
      subtitle: "Open PDF in new tab",
      category: "Actions",
      icon: <FileDown className="w-4 h-4 text-cyan-400" />,
      action: () => {
        window.open("/resume_jemish_mavani.pdf", "_blank");
        onClose();
      },
    },
    {
      id: "action-copy-email",
      title: "Copy Email Address",
      subtitle: "jemishmavani054@gmail.com",
      category: "Actions",
      icon: <Mail className="w-4 h-4 text-cyan-400" />,
      action: () => {
        navigator.clipboard.writeText("jemishmavani054@gmail.com");
        confetti({
          particleCount: 50,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#06b6d4", "#10b981", "#6366f1"],
        });
        onClose();
      },
    },
  ];

  const filteredCommands = commands.filter((cmd) =>
    `${cmd.title} ${cmd.subtitle} ${cmd.category}`
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredCommands.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length);
      } else if (e.key === "Enter" && filteredCommands.length > 0) {
        e.preventDefault();
        filteredCommands[selectedIndex]?.action();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/80 backdrop-blur-md transition-opacity">
      <div 
        className="relative w-full max-w-xl rounded-2xl bg-slate-900 border border-cyan-500/30 shadow-2xl shadow-cyan-950/50 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-white/[0.08] gap-3 bg-slate-950/60">
          <Search className="w-5 h-5 text-cyan-400 shrink-0" />
          <input
            type="text"
            placeholder="Type a command or search sections..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm text-white placeholder-slate-500 focus:outline-none font-mono"
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Command List */}
        <div className="max-h-96 overflow-y-auto p-2 space-y-1">
          {filteredCommands.length === 0 ? (
            <div className="py-8 text-center text-xs text-slate-500 font-mono">
              No matching commands found.
            </div>
          ) : (
            filteredCommands.map((cmd, index) => {
              const isSelected = index === selectedIndex;
              return (
                <button
                  key={cmd.id}
                  onClick={cmd.action}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`w-full flex items-center justify-between p-3 rounded-xl transition-all cursor-pointer text-left ${
                    isSelected
                      ? "bg-slate-800/90 text-white border border-cyan-500/30 shadow-sm"
                      : "text-slate-300 hover:bg-slate-800/50 border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-950 border border-white/[0.06]">
                      {cmd.icon}
                    </div>
                    <div>
                      <div className="text-sm font-semibold flex items-center gap-2">
                        <span>{cmd.title}</span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-950 text-slate-400 border border-white/[0.04]">
                          {cmd.category}
                        </span>
                      </div>
                      <div className="text-xs text-slate-400 font-light">
                        {cmd.subtitle}
                      </div>
                    </div>
                  </div>

                  {isSelected && (
                    <ArrowRight className="w-4 h-4 text-cyan-400 shrink-0" />
                  )}
                </button>
              );
            })
          )}
        </div>

        {/* Footer info bar */}
        <div className="px-4 py-2.5 bg-slate-950/80 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-500">
          <div className="flex items-center gap-3">
            <span><kbd className="px-1 py-0.5 bg-slate-800 rounded border border-slate-700">↑↓</kbd> to navigate</span>
            <span><kbd className="px-1 py-0.5 bg-slate-800 rounded border border-slate-700">↵</kbd> to select</span>
            <span><kbd className="px-1 py-0.5 bg-slate-800 rounded border border-slate-700">esc</kbd> to close</span>
          </div>
          <span className="text-cyan-400">Jemish Mavani CLI</span>
        </div>

      </div>
    </div>
  );
}
