"use client";

import React, { useState } from "react";
import Image from "next/image";
import { projects, Project } from "@/data/projects";
import { useMode } from "@/components/ModeContext";
import { sound } from "@/lib/audio";
import { 
  ArrowUpRight, 
  Play, 
  ExternalLink,
  Cpu,
  Layers,
  Sparkles,
  CheckCircle2,
  ChevronRight,
  Activity,
  Terminal,
  ShieldCheck
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

export function WorkShowcase() {
  const { mode } = useMode();
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Mobile & AI", "Full-Stack Monorepo", "Game & Physics", "Systems & Automation"];

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-28 relative z-10 border-t border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
              <span>01 // FLAGSHIPS</span>
              <span className="text-neutral-600">•</span>
              <span className="text-neutral-400">PRODUCTION SHOWCASE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
              Engineered from Zero to Production.
            </h2>
            <p className="text-sm text-neutral-400 leading-relaxed font-light">
              High-concurrency mobile clients, edge backends, and domain-grounded intelligence.
            </p>
          </div>

          {/* Minimalist Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-neutral-900/60 border border-white/[0.06] backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  sound.click();
                  setActiveCategory(cat);
                }}
                className={`px-3 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-white/10 text-white font-medium shadow-sm"
                    : "text-neutral-400 hover:text-neutral-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Flagship Visual Cards */}
        <div className="space-y-12">
          {filteredProjects.map((project, idx) => {
            const isAstroSight = project.id === "astrosight";
            const isScorecord = project.id === "scorecord";

            return (
              <div
                key={project.id}
                className="group relative rounded-3xl bg-neutral-950 border border-white/[0.08] hover:border-white/20 transition-all duration-300 overflow-hidden shadow-2xl"
              >
                {/* Subtle top accent gradient */}
                <div className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r ${project.accentColor} opacity-75`} />

                <div className="p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  
                  {/* Left Column: Metadata & Core Proof (6 cols) */}
                  <div className="lg:col-span-6 space-y-6">
                    
                    {/* Header with App Icon and Badge */}
                    <div className="flex items-center gap-3.5">
                      <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-neutral-900 border border-white/10 p-1 shrink-0">
                        <Image
                          src={project.icon}
                          alt={project.title}
                          fill
                          className="object-contain p-0.5"
                        />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 block">
                          {project.category}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-semibold text-white group-hover:text-cyan-300 transition-colors">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    {/* Tagline */}
                    <p className="text-sm font-medium text-neutral-200">
                      {project.tagline}
                    </p>

                    {/* Concise Summary */}
                    <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
                      {project.description}
                    </p>

                    {/* 2 Concise Production Highlights */}
                    <div className="space-y-2 pt-1 font-mono text-xs">
                      {project.highlights.slice(0, 3).map((item, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-neutral-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* 4 Metric Badges */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-white/[0.06] font-mono text-xs">
                      {project.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="p-2 rounded-lg bg-neutral-900/60 border border-white/[0.04]">
                          <div className="text-xs font-bold text-white">{m.value}</div>
                          <div className="text-[10px] text-neutral-500">{m.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges & Actions */}
                    <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded text-[10px] font-mono bg-neutral-900 text-neutral-400 border border-white/[0.06]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-2">
                        {project.links.github && (
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => sound.click()}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-white/10 text-xs font-mono transition-colors"
                          >
                            <GithubIcon className="w-3.5 h-3.5" />
                            <span>Source</span>
                          </a>
                        )}
                        {project.links.playStore && (
                          <a
                            href={project.links.playStore}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => sound.click()}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/40 hover:bg-emerald-900/60 text-emerald-400 border border-emerald-500/30 text-xs font-mono transition-colors"
                          >
                            <Play className="w-3.5 h-3.5 fill-emerald-400" />
                            <span>Google Play</span>
                          </a>
                        )}
                        {project.links.live && (
                          <a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => sound.click()}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-950/40 hover:bg-cyan-900/60 text-cyan-300 border border-cyan-500/30 text-xs font-mono transition-colors"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>Live Web</span>
                          </a>
                        )}
                      </div>
                    </div>

                  </div>

                  {/* Right Column: Visual Frame & Screenshot Mockup (6 cols) */}
                  <div className="lg:col-span-6">
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black shadow-2xl group/preview h-64 sm:h-80 w-full">
                      
                      {/* Image Preview */}
                      <Image
                        src={project.screenImage || project.banner}
                        alt={`${project.title} Preview`}
                        fill
                        className="object-cover object-top opacity-85 group-hover/preview:scale-105 group-hover/preview:opacity-100 transition-all duration-500"
                      />

                      {/* Subtle overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent" />

                      {/* Floating HUD Badge */}
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[11px] px-3 py-2 rounded-xl bg-neutral-950/90 border border-white/10 backdrop-blur-md">
                        <span className="text-neutral-300 truncate mr-2">
                          {project.architecture.split("→")[0]} → {project.architecture.split("→").slice(-1)[0]}
                        </span>
                        <span className="text-cyan-400 font-bold shrink-0">
                          VERIFIED
                        </span>
                      </div>

                    </div>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
