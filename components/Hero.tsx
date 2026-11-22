"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useMode } from "@/components/ModeContext";
import { sound } from "@/lib/audio";
import { 
  ArrowRight, 
  Layers, 
  Cpu, 
  Terminal, 
  Check, 
  Copy, 
  ExternalLink,
  Sparkles,
  Server,
  Smartphone
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import confetti from "canvas-confetti";

export function Hero() {
  const { mode } = useMode();
  const [copied, setCopied] = useState(false);

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

  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      
      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-cyan-900/10 via-indigo-900/10 to-transparent blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-neutral-900/80 border border-white/10 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-xs font-mono text-neutral-300">
                Surat, India • Available for Senior Roles & Worldwide Remote
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-tight">
                Jemish Mavani
              </h1>
              
              <div className="font-mono text-lg sm:text-xl text-cyan-400 font-medium">
                Full-Stack Mobile • Distributed Backend • AI Orchestration
              </div>
            </div>

            {/* Adaptive Value Statement based on Mode */}
            <p className="text-base sm:text-lg text-neutral-400 leading-relaxed max-w-xl font-light">
              {mode === "executive" ? (
                <>
                  Founder of <strong className="text-white font-medium">Solenyx Studio</strong>. I architect production systems from the ground up: 
                  60 FPS mobile applications on Google Play & App Store, sub-12ms <strong className="text-white font-medium">Bun/Elysia</strong> APIs, 
                  and grounded <strong className="text-white font-medium">AI RAG engines</strong>.
                </>
              ) : (
                <>
                  Designing low-latency monorepos powered by Turborepo and Bun. Bridging native Flutter threads with 
                  <strong className="text-white font-medium"> ElysiaJS edge gateways</strong>, Drizzle ORM over PostgreSQL, 
                  and hierarchical Markdown AST vector ingestion pipelines.
                </>
              )}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                onClick={() => sound.click()}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-neutral-200 text-black font-semibold text-xs font-mono transition-all group"
              >
                <span>Inspect Work</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#architecture"
                onClick={() => sound.click()}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-white/10 text-xs font-mono transition-all"
              >
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                <span>System Topology</span>
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
                    <span>jemishmavani054@gmail.com</span>
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
              <span>•</span>
              <a
                href="https://play.google.com/store/apps/details?id=studio.solenyx.scorecord"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Google Play App</span>
              </a>
            </div>

          </div>

          {/* Right Column: Telemetry Spec Monolith (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative group">
              
              {/* Subtle ambient border sheen */}
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-indigo-500/20 to-emerald-500/20 blur-lg opacity-40 group-hover:opacity-75 transition-opacity" />

              {/* Glass Monolith */}
              <div className="relative rounded-2xl bg-neutral-950/90 border border-white/10 p-6 shadow-2xl space-y-5">
                
                {/* Header with Avatar & Live State */}
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                  <div className="flex items-center gap-3">
                    <div className="relative w-11 h-11 rounded-xl overflow-hidden border border-white/10 bg-neutral-900">
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
                        <Sparkles className="w-3 h-3 text-cyan-400" />
                      </div>
                      <div className="text-[11px] font-mono text-neutral-400">
                        Lead Engineer @ Solenyx Studio
                      </div>
                    </div>
                  </div>

                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                    ONLINE
                  </span>
                </div>

                {/* Technical Telemetry Grid */}
                <div className="space-y-2.5 font-mono text-xs">
                  <div className="flex items-center justify-between p-2 rounded-lg bg-neutral-900/50 border border-white/[0.04]">
                    <span className="text-neutral-500 flex items-center gap-2">
                      <Smartphone className="w-3.5 h-3.5 text-cyan-400" />
                      Mobile Engine
                    </span>
                    <span className="text-neutral-200">Flutter • Riverpod • Jetpack</span>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded-lg bg-neutral-900/50 border border-white/[0.04]">
                    <span className="text-neutral-500 flex items-center gap-2">
                      <Server className="w-3.5 h-3.5 text-indigo-400" />
                      Edge Backend
                    </span>
                    <span className="text-neutral-200">Bun + Elysia • Drizzle • Postgres</span>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded-lg bg-neutral-900/50 border border-white/[0.04]">
                    <span className="text-neutral-500 flex items-center gap-2">
                      <Cpu className="w-3.5 h-3.5 text-emerald-400" />
                      AI Retrieval
                    </span>
                    <span className="text-neutral-200">RAG Knowledge Vaults</span>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded-lg bg-neutral-900/50 border border-white/[0.04]">
                    <span className="text-neutral-500 flex items-center gap-2">
                      <Terminal className="w-3.5 h-3.5 text-amber-400" />
                      Infra & DevOps
                    </span>
                    <span className="text-neutral-200">Dokploy VPS • Docker</span>
                  </div>
                </div>

                {/* Quantitative Metric Badges */}
                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/[0.08] text-center font-mono">
                  <div className="p-2 rounded bg-black/50 border border-white/[0.04]">
                    <div className="text-base font-bold text-white">4+</div>
                    <div className="text-[10px] text-neutral-500">Shipped Apps</div>
                  </div>
                  <div className="p-2 rounded bg-black/50 border border-white/[0.04]">
                    <div className="text-base font-bold text-cyan-400">&lt;12ms</div>
                    <div className="text-[10px] text-neutral-500">API Latency</div>
                  </div>
                  <div className="p-2 rounded bg-black/50 border border-white/[0.04]">
                    <div className="text-base font-bold text-emerald-400">60 FPS</div>
                    <div className="text-[10px] text-neutral-500">Locked Loop</div>
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
