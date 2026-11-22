"use client";

import React, { useState } from "react";
import Image from "next/image";
import { projects, Project } from "@/data/projects";
import { useMode } from "@/components/ModeContext";
import { sound } from "@/lib/audio";
import { 
  ArrowUpRight, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  Play, 
  ExternalLink,
  Cpu,
  Layers,
  Sparkles
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

export function WorkShowcase() {
  const { mode } = useMode();
  const [expandedId, setExpandedId] = useState<string | null>("astrosight");
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = ["All", "Mobile & AI", "Full-Stack Monorepo", "Game & Physics", "Systems & Automation"];

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  const toggleExpand = (id: string) => {
    sound.pop();
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="projects" className="py-28 relative z-10 border-t border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
              <span>01 // SHOWCASE</span>
              <span className="text-neutral-600">•</span>
              <span className="text-neutral-400">SELECTED PRODUCTION SYSTEMS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
              Built from Ground Truth.
            </h2>
            <p className="text-sm text-neutral-400 leading-relaxed font-light">
              {mode === "executive"
                ? "Shipped cross-platform mobile apps, commercial products on Google Play, and enterprise monorepos with verified uptime."
                : "Inspecting Turborepo monorepo setups, RAG knowledge vaults, O(V+E) graph settlement solvers, and custom canvas rendering loops."}
            </p>
          </div>

          {/* Minimalist Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-neutral-900/60 border border-white/[0.06] backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  sound.click();
                  setActiveFilter(cat);
                }}
                className={`px-3 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  activeFilter === cat
                    ? "bg-white/10 text-white font-medium shadow-sm"
                    : "text-neutral-400 hover:text-neutral-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Minimalist Interactive Work List */}
        <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {filteredProjects.map((project, idx) => {
            const isExpanded = expandedId === project.id;
            const projectNumber = String(idx + 1).padStart(2, "0");

            return (
              <div
                key={project.id}
                className="group transition-colors duration-200 hover:bg-white/[0.02]"
              >
                {/* List Row Item */}
                <div
                  onClick={() => toggleExpand(project.id)}
                  className="py-6 sm:py-8 px-2 sm:px-4 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer select-none"
                >
                  <div className="flex items-start sm:items-center gap-4 sm:gap-6">
                    <span className="font-mono text-xs text-neutral-500 pt-1 sm:pt-0 shrink-0">
                      /{projectNumber}
                    </span>

                    <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-neutral-900 border border-white/10 shrink-0 p-1">
                      <Image
                        src={project.icon}
                        alt={project.title}
                        fill
                        className="object-contain p-0.5"
                      />
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2.5">
                        <h3 className="text-lg sm:text-xl font-medium text-white group-hover:text-cyan-400 transition-colors">
                          {project.title}
                        </h3>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.06] text-neutral-400 border border-white/[0.06]">
                          {project.category}
                        </span>
                      </div>
                      <p className="text-xs text-neutral-400 font-light mt-0.5 max-w-xl">
                        {project.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Right: Metrics / Quick Badges & Expand Indicator */}
                  <div className="flex items-center justify-between md:justify-end gap-6 ml-14 md:ml-0">
                    <div className="hidden lg:flex items-center gap-2 font-mono text-xs text-neutral-400">
                      {project.metrics.slice(0, 2).map((m, mIdx) => (
                        <span
                          key={mIdx}
                          className="px-2 py-1 rounded bg-neutral-950 border border-white/[0.06] text-neutral-300"
                        >
                          <span className="text-neutral-500 mr-1.5">{m.label}:</span>
                          <span className="text-cyan-300 font-semibold">{m.value}</span>
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-neutral-500 group-hover:text-neutral-300 hidden sm:inline">
                        {isExpanded ? "Collapse" : "Inspect Specs"}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:border-white/20 transition-all">
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* In-Place Cinematic Drawer */}
                {isExpanded && (
                  <div className="px-2 sm:px-6 pb-8 pt-2 animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="p-6 sm:p-8 rounded-2xl bg-neutral-950/80 border border-white/10 backdrop-blur-xl shadow-2xl space-y-6">
                      
                      {/* Banner (if available) */}
                      {project.banner && (
                        <div className="relative w-full h-56 sm:h-72 rounded-xl overflow-hidden border border-white/[0.08] bg-black">
                          <Image
                            src={project.banner}
                            alt={`${project.title} Banner`}
                            fill
                            className="object-cover opacity-90"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
                          <div className="absolute bottom-4 left-4 font-mono text-xs px-3 py-1 rounded-full bg-neutral-900/90 border border-white/10 text-cyan-300">
                            Production Architecture Verification
                          </div>
                        </div>
                      )}

                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        
                        {/* Left: Deep Summary */}
                        <div className="lg:col-span-7 space-y-4">
                          <div>
                            <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider block mb-1">
                              {mode === "executive" ? "System Overview & Value" : "Architectural In-Depth"}
                            </span>
                            <p className="text-sm text-neutral-300 leading-relaxed font-light">
                              {project.longDescription}
                            </p>
                          </div>

                          {/* Architecture Data Flow String */}
                          <div className="p-3.5 rounded-xl bg-neutral-900/80 border border-white/[0.06] font-mono text-xs">
                            <span className="text-neutral-500 block mb-1 text-[11px] uppercase">Data Pipeline:</span>
                            <span className="text-cyan-300">{project.architecture}</span>
                          </div>

                          {/* Highlights */}
                          <div className="space-y-2 pt-2">
                            <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider block">
                              Production Highlights
                            </span>
                            {project.highlights.map((h, hIdx) => (
                              <div key={hIdx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                <span>{h}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Right: Metrics & Actions */}
                        <div className="lg:col-span-5 space-y-6 lg:border-l lg:border-white/[0.08] lg:pl-8">
                          
                          {/* Metrics Card */}
                          <div>
                            <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider block mb-2.5">
                              Telemetry & Benchmarks
                            </span>
                            <div className="grid grid-cols-2 gap-2 font-mono">
                              {project.metrics.map((m, mIdx) => (
                                <div key={mIdx} className="p-3 rounded-xl bg-neutral-900/60 border border-white/[0.04]">
                                  <div className="text-sm font-semibold text-white">{m.value}</div>
                                  <div className="text-[11px] text-neutral-500">{m.label}</div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Tech Stack Chips */}
                          <div>
                            <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider block mb-2.5">
                              Technology Matrix
                            </span>
                            <div className="flex flex-wrap gap-1.5">
                              {project.techStack.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-2.5 py-1 rounded-lg text-xs font-mono bg-neutral-900 text-neutral-300 border border-white/[0.06]"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Action Links */}
                          <div className="pt-2 flex flex-wrap gap-3">
                            {project.links.github && (
                              <a
                                href={project.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-200 hover:text-white border border-white/10 text-xs font-mono transition-colors"
                              >
                                <GithubIcon className="w-3.5 h-3.5" />
                                <span>GitHub Repository</span>
                              </a>
                            )}
                            {project.links.playStore && (
                              <a
                                href={project.links.playStore}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-950/40 hover:bg-emerald-900/60 text-emerald-400 border border-emerald-500/30 text-xs font-mono transition-colors"
                              >
                                <Play className="w-3.5 h-3.5 fill-emerald-400" />
                                <span>Google Play Store</span>
                              </a>
                            )}
                            {project.links.live && (
                              <a
                                href={project.links.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-950/40 hover:bg-cyan-900/60 text-cyan-300 border border-cyan-500/30 text-xs font-mono transition-colors"
                              >
                                <ExternalLink className="w-3.5 h-3.5" />
                                <span>Live Web Portal</span>
                              </a>
                            )}
                          </div>

                        </div>

                      </div>

                    </div>
                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
