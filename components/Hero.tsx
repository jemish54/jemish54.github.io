"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { 
  ArrowRight, 
  Terminal, 
  Cpu, 
  Layers, 
  Sparkles, 
  Check, 
  Copy, 
  Server,
  Smartphone,
  ExternalLink
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import confetti from "canvas-confetti";

export function Hero() {
  const roles = [
    "Full-Stack Mobile Architect",
    "Distributed Backend Engineer",
    "AI Orchestration Specialist",
    "Monorepo & Systems Builder",
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [roles.length]);

  const copyEmail = () => {
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

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Decorative background radial flares */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-600/15 via-indigo-600/10 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[250px] bg-emerald-600/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bio & Core Positioning */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-white/10 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span className="text-xs font-mono text-slate-300">
                Solenyx Studio • Surat & Remote
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I&apos;m <span className="gradient-text-cyan">Jemish Mavani</span>
              </h1>
              
              {/* Dynamic Rotating Role */}
              <div className="h-12 flex items-center">
                <span className="text-xl sm:text-2xl lg:text-3xl font-mono font-medium text-cyan-400 flex items-center gap-2">
                  <span className="text-slate-500">&gt;</span>
                  <span className="border-b-2 border-cyan-400/60 pb-0.5">
                    {roles[currentRoleIndex]}
                  </span>
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl font-light">
              Engineering high-scale monorepos, low-latency <strong className="text-slate-200 font-medium">Bun + Elysia</strong> backends, 
              domain-grounded <strong className="text-slate-200 font-medium">AI RAG knowledge engines</strong>, and fluid 
              <strong className="text-slate-200 font-medium"> 60 FPS Flutter mobile apps</strong> across iOS and Android.
            </p>

            {/* Call To Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#architecture"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-semibold text-sm shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all group"
              >
                <span>Explore Architecture</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-white/10 hover:border-cyan-500/30 font-medium text-sm transition-all"
              >
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>Production Apps</span>
              </a>

              {/* Copy Email Button */}
              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/10 text-sm font-mono transition-all cursor-pointer"
                title="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Social / Proof Links */}
            <div className="flex items-center gap-4 pt-4 border-t border-white/[0.08] text-xs text-slate-400 font-mono">
              <a
                href="https://github.com/jemish54"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>github/jemish54</span>
              </a>
              <span className="text-slate-700">•</span>
              <a
                href="https://linkedin.com/in/jemish-mavani-129510214"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>linkedin/jemish-mavani</span>
              </a>
              <span className="text-slate-700">•</span>
              <a
                href="https://play.google.com/store/apps/details?id=studio.solenyx.scorecord"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Google Play</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive System Specs Card */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Card Ambient Glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-indigo-500/20 to-emerald-500/20 blur-xl opacity-75 group-hover:opacity-100 transition-opacity" />

              {/* Glass Card Container */}
              <div className="relative rounded-2xl bg-slate-900/80 border border-white/10 backdrop-blur-2xl p-6 shadow-2xl space-y-5">
                
                {/* Header with Avatar & Status */}
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-cyan-500/40 shadow-md">
                      <Image
                        src="/assets/pfp.jpg"
                        alt="Jemish Mavani"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-white flex items-center gap-1.5">
                        Jemish Mavani
                        <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                      </div>
                      <div className="text-xs font-mono text-slate-400">
                        @jemish54 • Solenyx
                      </div>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-mono text-emerald-400">
                    LIVE_ACTIVE
                  </span>
                </div>

                {/* System Telemetry Specs */}
                <div className="space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950/60 border border-white/[0.04]">
                    <span className="text-slate-400 flex items-center gap-2">
                      <Smartphone className="w-3.5 h-3.5 text-cyan-400" />
                      Mobile Stack
                    </span>
                    <span className="text-slate-200 font-semibold">Flutter • Riverpod • Jetpack</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950/60 border border-white/[0.04]">
                    <span className="text-slate-400 flex items-center gap-2">
                      <Server className="w-3.5 h-3.5 text-indigo-400" />
                      Backend Core
                    </span>
                    <span className="text-slate-200 font-semibold">Bun + Elysia • Drizzle • Postgres</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950/60 border border-white/[0.04]">
                    <span className="text-slate-400 flex items-center gap-2">
                      <Cpu className="w-3.5 h-3.5 text-emerald-400" />
                      AI Orchestration
                    </span>
                    <span className="text-slate-200 font-semibold">RAG Vaults • Multi-Agent</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950/60 border border-white/[0.04]">
                    <span className="text-slate-400 flex items-center gap-2">
                      <Terminal className="w-3.5 h-3.5 text-amber-400" />
                      Infrastructure
                    </span>
                    <span className="text-slate-200 font-semibold">Dokploy VPS • Docker • Linux</span>
                  </div>
                </div>

                {/* Quantitative Metric Grid */}
                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/[0.08] text-center">
                  <div className="p-2 rounded-lg bg-slate-950/40">
                    <div className="text-lg font-bold text-cyan-400 font-mono">4+</div>
                    <div className="text-[10px] text-slate-400">Production Apps</div>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-950/40">
                    <div className="text-lg font-bold text-emerald-400 font-mono">&lt;12ms</div>
                    <div className="text-[10px] text-slate-400">API Response</div>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-950/40">
                    <div className="text-lg font-bold text-indigo-400 font-mono">60 FPS</div>
                    <div className="text-[10px] text-slate-400">Locked Motion</div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
