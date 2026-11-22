"use client";

import React, { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, X, Minus, Maximize2, Sparkles, Send } from "lucide-react";

interface TerminalLine {
  id: string;
  type: "input" | "output" | "system";
  text: string;
}

export function TerminalWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<TerminalLine[]>([
    {
      id: "sys-1",
      type: "system",
      text: "Jemish Mavani Shell [Version 2.4.0-release]",
    },
    {
      id: "sys-2",
      type: "system",
      text: "Type 'help' to see available commands or 'skills' for full stack capabilities.",
    },
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [history, isOpen, isMinimized]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const newHistory: TerminalLine[] = [
      ...history,
      { id: String(Date.now()), type: "input", text: `$ ${cmd}` },
    ];

    switch (trimmed) {
      case "help":
        newHistory.push({
          id: String(Date.now() + 1),
          type: "output",
          text: `Available commands:
  whoami    - Profile summary and current focus
  skills    - Production mobile, backend, AI & infra stack
  projects  - List of production monorepos and live apps
  arch      - System architecture summary
  contact   - Direct email, GitHub, and LinkedIn handles
  resume    - Open downloadable resume PDF
  clear     - Wipe terminal output buffer`,
        });
        break;

      case "whoami":
        newHistory.push({
          id: String(Date.now() + 1),
          type: "output",
          text: `Jemish Mavani
Role: Full-Stack Mobile Engineer, Distributed Backend Architect & AI Systems Specialist
Founder: Solenyx Studio (Surat, Gujarat / Remote)
Status: Available for Senior & High-Impact Engineering Roles`,
        });
        break;

      case "skills":
        newHistory.push({
          id: String(Date.now() + 1),
          type: "output",
          text: `[MOBILE]: Flutter (Riverpod, BLoC), Dart, Jetpack Compose, Kotlin, iOS Bridging
[BACKEND]: Bun, ElysiaJS, Node.js, NestJS, Go, PostgreSQL, Drizzle ORM, BetterAuth
[AI ORCH]: RAG Knowledge Vaults, Vector Embeddings, Headless Simulators & Blender 3D
[INFRA]: Dokploy, Docker Compose, Linux Administration, Traefik, Turborepo`,
        });
        break;

      case "projects":
        newHistory.push({
          id: String(Date.now() + 1),
          type: "output",
          text: `* AstroSight: Vedic astrology monorepo (Flutter + Bun/Elysia + RAG knowledge engine)
* TracXpense Pro: Joint expense tracker with graph debt minimization
* Scorecord: Real-time cricket tournament scoring engine on Google Play
* Lanternova: Atmospheric 2D raycasting mobile puzzle game
* Autonomous Media: Headless simulator recording & programmatic Blender 3D video generation`,
        });
        break;

      case "arch":
        newHistory.push({
          id: String(Date.now() + 1),
          type: "output",
          text: `AstroSight: Flutter Client -> Elysia Gateway (<10ms) -> Vector RAG -> SSE Stream
TracXpense: Flutter -> BetterAuth -> Graph Solver O(V+E) -> Postgres ACID Ledger`,
        });
        break;

      case "contact":
        newHistory.push({
          id: String(Date.now() + 1),
          type: "output",
          text: `Email: jemishmavani054@gmail.com
GitHub: https://github.com/jemish54
LinkedIn: https://linkedin.com/in/jemish-mavani-129510214
Studio: Solenyx Studio`,
        });
        break;

      case "resume":
        window.open("/resume_jemish_mavani.pdf", "_blank");
        newHistory.push({
          id: String(Date.now() + 1),
          type: "output",
          text: `Opening resume_jemish_mavani.pdf in a new tab...`,
        });
        break;

      case "clear":
        setHistory([]);
        setInputVal("");
        return;

      case "":
        break;

      default:
        newHistory.push({
          id: String(Date.now() + 1),
          type: "output",
          text: `command not found: "${cmd}". Type 'help' for available commands.`,
        });
        break;
    }

    setHistory(newHistory);
    setInputVal("");
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    handleCommand(inputVal);
  };

  return (
    <div className="fixed bottom-4 right-4 z-40 font-mono text-xs">
      {!isOpen ? (
        <button
          onClick={() => {
            setIsOpen(true);
            setIsMinimized(false);
          }}
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-slate-900/90 hover:bg-slate-800 border border-cyan-500/30 text-cyan-400 hover:text-cyan-300 shadow-xl shadow-cyan-950/40 cursor-pointer backdrop-blur-md transition-all group hover:scale-105"
        >
          <TerminalIcon className="w-4 h-4" />
          <span className="font-semibold text-xs">Interactive Terminal</span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 radar-badge" />
        </button>
      ) : (
        <div className="w-[360px] sm:w-[460px] rounded-xl bg-slate-950/95 border border-cyan-500/40 shadow-2xl shadow-cyan-950/60 overflow-hidden flex flex-col backdrop-blur-2xl">
          
          {/* Terminal Window Header */}
          <div className="flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-white/[0.08] select-none">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80 cursor-pointer" onClick={() => setIsOpen(false)} />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 cursor-pointer" onClick={() => setIsMinimized(!isMinimized)} />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              <span className="text-[11px] text-slate-400 ml-1">jemish@solenyx:~</span>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-1 hover:bg-slate-800 text-slate-400 hover:text-white rounded"
              >
                <Minus className="w-3 h-3" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-slate-800 text-slate-400 hover:text-white rounded"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Terminal Output & Input (if not minimized) */}
          {!isMinimized && (
            <>
              <div className="p-3.5 h-64 overflow-y-auto space-y-2 text-[11px] leading-relaxed">
                {history.map((line) => (
                  <div key={line.id}>
                    {line.type === "input" && (
                      <div className="text-cyan-300 font-bold">{line.text}</div>
                    )}
                    {line.type === "system" && (
                      <div className="text-slate-400">{line.text}</div>
                    )}
                    {line.type === "output" && (
                      <div className="text-slate-300 whitespace-pre-wrap">{line.text}</div>
                    )}
                  </div>
                ))}
                <div ref={bottomRef} />
              </div>

              {/* Input prompt */}
              <form onSubmit={onSubmit} className="flex items-center px-3 py-2 bg-slate-900/80 border-t border-white/[0.06] gap-2">
                <span className="text-cyan-400 font-bold">$</span>
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder="type 'help'..."
                  className="w-full bg-transparent text-xs text-white placeholder-slate-600 focus:outline-none"
                  autoFocus
                />
                <button type="submit" className="text-slate-400 hover:text-cyan-400">
                  <Send className="w-3 h-3" />
                </button>
              </form>
            </>
          )}

        </div>
      )}
    </div>
  );
}
