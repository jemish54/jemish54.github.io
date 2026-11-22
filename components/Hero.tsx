"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useMode } from "@/components/ModeContext";
import { sound } from "@/lib/audio";
import { 
  ArrowRight, 
  Smartphone, 
  Server, 
  Cpu, 
  Terminal, 
  Check, 
  Copy, 
  Sparkles, 
  Activity, 
  Play, 
  Layers,
  Database,
  ShieldCheck,
  Zap
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import confetti from "canvas-confetti";

export function Hero() {
  const { mode } = useMode();
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"astrosight" | "scorecord" | "tracxpense" | "infra">("astrosight");

  const copyEmail = () => {
    sound.chime();
    navigator.clipboard.writeText("jemishmavani054@gmail.com");
    setCopied(true);
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#06b6d4", "#10b981", "#6366f1"],
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const switchTab = (tab: typeof activeTab) => {
    sound.pop();
    setActiveTab(tab);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      
      {/* Background ambient mesh */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-gradient-to-tr from-cyan-900/10 via-indigo-900/10 to-transparent blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Vision & Identity (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Live Availability Pill */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-neutral-900/90 border border-white/10 backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-xs font-mono text-neutral-300">
                Surat, India • Available for Senior Engineering Roles
              </span>
            </div>

            {/* Concise Bold Title */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.1]">
                Architecting the <span className="gradient-text-cyan">Full Loop</span>.
              </h1>
              
              <p className="text-sm sm:text-base font-mono text-cyan-400 font-medium">
                Mobile Systems • Distributed Edge • Grounded AI
              </p>
            </div>

            {/* Concise Value Statement */}
            <p className="text-base text-neutral-400 leading-relaxed font-light max-w-xl">
              Hi, I&apos;m <strong className="text-white font-medium">Jemish Mavani</strong>, founder of <strong className="text-white font-medium">Solenyx Studio</strong>. 
              I engineer end-to-end production ecosystems: 60 FPS Flutter clients, sub-10ms Bun/Elysia backends, 
              and Markdown knowledge vault RAG pipelines.
            </p>

            {/* 3 Quick Impact Stat Badges */}
            <div className="grid grid-cols-3 gap-2.5 py-2 font-mono text-xs">
              <div className="p-2.5 rounded-xl bg-neutral-950/70 border border-white/[0.06]">
                <div className="text-base font-bold text-white">4+</div>
                <div className="text-[11px] text-neutral-500">Shipped Monorepos</div>
              </div>
              <div className="p-2.5 rounded-xl bg-neutral-950/70 border border-white/[0.06]">
                <div className="text-base font-bold text-cyan-400">&lt;12ms</div>
                <div className="text-[11px] text-neutral-500">API Gateway</div>
              </div>
              <div className="p-2.5 rounded-xl bg-neutral-950/70 border border-white/[0.06]">
                <div className="text-base font-bold text-emerald-400">99.9%</div>
                <div className="text-[11px] text-neutral-500">Google Play Uptime</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                onClick={() => sound.click()}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-neutral-200 text-black font-semibold text-xs font-mono transition-all group"
              >
                <span>Inspect Flagships</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#architecture"
                onClick={() => sound.click()}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-white/10 text-xs font-mono transition-all"
              >
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                <span>System Circuit</span>
              </a>

              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-neutral-900/60 hover:bg-neutral-800 text-neutral-400 hover:text-white border border-white/10 text-xs font-mono transition-all cursor-pointer"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Connectivity */}
            <div className="flex items-center gap-4 pt-3 border-t border-white/[0.06] text-xs font-mono text-neutral-500">
              <a
                href="https://github.com/jemish54"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>github/jemish54</span>
              </a>
              <span>•</span>
              <a
                href="https://linkedin.com/in/jemish-mavani-129510214"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>linkedin/jemish-mavani</span>
              </a>
            </div>

          </div>

          {/* Right Column: The Interactive System & Device Viewport (6 cols) */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl bg-neutral-950 border border-white/10 p-5 shadow-2xl backdrop-blur-2xl space-y-4">
              
              {/* Window Bar with Interactive System Switcher Tabs */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-white/[0.08]">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                  <span className="text-[11px] font-mono text-neutral-500 ml-1.5">solenyx-core-v2</span>
                </div>

                <div className="flex items-center gap-1 p-0.5 rounded-lg bg-neutral-900 border border-white/[0.06] font-mono text-[11px]">
                  <button
                    onClick={() => switchTab("astrosight")}
                    className={`px-2 py-1 rounded transition-colors cursor-pointer ${
                      activeTab === "astrosight"
                        ? "bg-cyan-500/20 text-cyan-300 font-medium"
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    AstroSight AI
                  </button>
                  <button
                    onClick={() => switchTab("scorecord")}
                    className={`px-2 py-1 rounded transition-colors cursor-pointer ${
                      activeTab === "scorecord"
                        ? "bg-cyan-500/20 text-cyan-300 font-medium"
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    Scorecord
                  </button>
                  <button
                    onClick={() => switchTab("tracxpense")}
                    className={`px-2 py-1 rounded transition-colors cursor-pointer ${
                      activeTab === "tracxpense"
                        ? "bg-cyan-500/20 text-cyan-300 font-medium"
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    Graph Solver
                  </button>
                  <button
                    onClick={() => switchTab("infra")}
                    className={`px-2 py-1 rounded transition-colors cursor-pointer ${
                      activeTab === "infra"
                        ? "bg-cyan-500/20 text-cyan-300 font-medium"
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    Dokploy
                  </button>
                </div>
              </div>

              {/* Viewport Content based on Selected Tab */}
              {activeTab === "astrosight" && (
                <div className="space-y-3 animate-in fade-in duration-200">
                  <div className="relative w-full h-56 rounded-xl overflow-hidden border border-white/[0.08] bg-black">
                    <Image
                      src="/assets/astrosight-screen.png"
                      alt="AstroSight UI"
                      fill
                      className="object-cover object-top opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2 py-0.5 rounded bg-black/80 border border-cyan-500/30 font-mono text-[10px] text-cyan-300">
                      <Sparkles className="w-3 h-3" />
                      RAG Knowledge Engine
                    </div>
                  </div>

                  {/* Telemetry Stream */}
                  <div className="grid grid-cols-2 gap-2 font-mono text-xs">
                    <div className="p-2.5 rounded-lg bg-neutral-900/60 border border-white/[0.04]">
                      <span className="text-neutral-500 text-[10px] block">GATEWAY RESPONSE</span>
                      <span className="text-emerald-400 font-semibold">9.4ms (Bun Native)</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-neutral-900/60 border border-white/[0.04]">
                      <span className="text-neutral-500 text-[10px] block">AI INFERENCE</span>
                      <span className="text-cyan-300 font-semibold">SSE Grounded Stream</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "scorecord" && (
                <div className="space-y-3 animate-in fade-in duration-200">
                  <div className="relative w-full h-56 rounded-xl overflow-hidden border border-white/[0.08] bg-black">
                    <Image
                      src="/assets/scorecord-live.jpg"
                      alt="Scorecord Live App"
                      fill
                      className="object-cover opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/30 font-mono text-[10px] text-emerald-300">
                      <Play className="w-3 h-3 fill-emerald-300" />
                      Google Play Production
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 font-mono text-xs">
                    <div className="p-2.5 rounded-lg bg-neutral-900/60 border border-white/[0.04]">
                      <span className="text-neutral-500 text-[10px] block">SYNC SPEED</span>
                      <span className="text-cyan-300 font-semibold">&lt; 50ms WebSocket</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-neutral-900/60 border border-white/[0.04]">
                      <span className="text-neutral-500 text-[10px] block">DATABASE</span>
                      <span className="text-white font-semibold">PocketBase + SQLite WAL</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "tracxpense" && (
                <div className="space-y-3 animate-in fade-in duration-200">
                  <div className="relative w-full h-56 rounded-xl overflow-hidden border border-white/[0.08] bg-black p-4 flex flex-col justify-between">
                    <div className="flex items-center justify-between font-mono text-[11px] text-neutral-400">
                      <span>Debt Simplification Matrix</span>
                      <span className="text-emerald-400">O(V+E) Active</span>
                    </div>

                    {/* Minimalist interactive balance simulation */}
                    <div className="space-y-2 font-mono text-xs">
                      <div className="flex items-center justify-between p-2 rounded bg-neutral-900 border border-white/5">
                        <span className="text-neutral-300">Alice → Bob (Net Owed)</span>
                        <span className="text-cyan-400 font-semibold">$145.00</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded bg-neutral-900 border border-white/5">
                        <span className="text-neutral-300">Charlie → Alice (Net Owed)</span>
                        <span className="text-emerald-400 font-semibold">$80.00</span>
                      </div>
                      <div className="p-2 rounded bg-neutral-900/60 text-[11px] text-neutral-400">
                        Minimized 6 group peer debts into 2 single bank transfers.
                      </div>
                    </div>

                    <div className="text-[10px] font-mono text-neutral-500">
                      BetterAuth Session Guard • PostgreSQL ACID Ledger
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 font-mono text-xs">
                    <div className="p-2.5 rounded-lg bg-neutral-900/60 border border-white/[0.04]">
                      <span className="text-neutral-500 text-[10px] block">SECURITY</span>
                      <span className="text-white font-semibold">BetterAuth Session</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-neutral-900/60 border border-white/[0.04]">
                      <span className="text-neutral-500 text-[10px] block">LEDGER</span>
                      <span className="text-cyan-300 font-semibold">Drizzle ORM / Postgres</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "infra" && (
                <div className="space-y-3 animate-in fade-in duration-200 font-mono text-xs">
                  <div className="w-full h-56 rounded-xl border border-white/[0.08] bg-black p-4 space-y-3 overflow-y-auto">
                    <div className="flex items-center justify-between text-[11px] text-neutral-400 pb-2 border-b border-white/[0.06]">
                      <span>Dokploy Production Cluster</span>
                      <span className="text-emerald-400 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                        Healthy
                      </span>
                    </div>

                    <div className="space-y-2 text-[11px]">
                      <div className="flex items-center justify-between p-2 rounded bg-neutral-900">
                        <span className="text-neutral-300">app-frontend (Flutter Web)</span>
                        <span className="text-emerald-400">200 OK • 0.1% CPU</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded bg-neutral-900">
                        <span className="text-neutral-300">core-api (Bun + Elysia)</span>
                        <span className="text-emerald-400">200 OK • 12MB RAM</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded bg-neutral-900">
                        <span className="text-neutral-300">knowledge-engine (RAG Ingest)</span>
                        <span className="text-cyan-300">Idle • Hot Standby</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded bg-neutral-900">
                        <span className="text-neutral-300">postgres-db (Drizzle Migrations)</span>
                        <span className="text-emerald-400">WAL Active • 14ms ping</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2.5 rounded-lg bg-neutral-900/60 border border-white/[0.04]">
                      <span className="text-neutral-500 text-[10px] block">CONTAINERIZATION</span>
                      <span className="text-white font-semibold">Docker Compose</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-neutral-900/60 border border-white/[0.04]">
                      <span className="text-neutral-500 text-[10px] block">REVERSE PROXY</span>
                      <span className="text-cyan-300 font-semibold">Traefik + SSL</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Viewport Footer Bar */}
              <div className="pt-2 flex items-center justify-between font-mono text-[11px] text-neutral-500 border-t border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Production Verified</span>
                </div>
                <span className="text-cyan-400">Solenyx Studio</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
