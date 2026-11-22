"use client";

import React, { useState } from "react";
import Image from "next/image";
import { projects, Project } from "@/data/projects";
import { 
  ExternalLink, 
  Layers, 
  ArrowUpRight, 
  Sparkles, 
  Terminal, 
  Smartphone,
  CheckCircle,
  Play
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

export function BentoProjects() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Mobile & AI", "Full-Stack Monorepo", "Game & Physics", "Systems & Automation"];

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-dot-pattern">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[300px] bg-cyan-600/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[250px] bg-emerald-600/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-400">
              <Layers className="w-3.5 h-3.5" />
              <span>Production Systems & Applications</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Featured Engineering Work
            </h2>
            <p className="text-slate-400 text-base leading-relaxed">
              Monorepos, published mobile apps, and autonomous media pipelines engineered with 
              modern architectural standards.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm"
                    : "bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-white/[0.06] hover:bg-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => {
            const isAstroSight = project.id === "astrosight";
            const isTracXpense = project.id === "tracxpense";

            return (
              <div
                key={project.id}
                className={`group relative rounded-2xl bg-slate-900/70 border border-white/[0.08] hover:border-cyan-500/40 backdrop-blur-xl p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-950/30 flex flex-col justify-between ${
                  isAstroSight ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                {/* Top Accent Line */}
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Card Header with Icon, Category & Actions */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-white/10 bg-slate-950 p-1 shadow-md group-hover:scale-105 transition-transform">
                        <Image
                          src={project.icon}
                          alt={project.title}
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                      <div>
                        <span className="text-[11px] font-mono text-cyan-400 block uppercase tracking-wider">
                          {project.category}
                        </span>
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-2">
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white border border-white/[0.06] transition-colors"
                          title="View GitHub Repository"
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                      )}
                      {project.links.playStore && (
                        <a
                          href={project.links.playStore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-emerald-950/40 hover:bg-emerald-900/50 text-emerald-400 hover:text-emerald-300 border border-emerald-500/30 transition-colors"
                          title="View on Google Play"
                        >
                          <Play className="w-4 h-4 fill-emerald-400" />
                        </a>
                      )}
                      {project.links.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-cyan-950/40 hover:bg-cyan-900/50 text-cyan-400 hover:text-cyan-300 border border-cyan-500/30 transition-colors"
                          title="View Live Web Portal"
                        >
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Banner Image (for AstroSight or Scorecord if present) */}
                  {project.banner && isAstroSight && (
                    <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4 border border-white/[0.08] bg-slate-950">
                      <Image
                        src={project.banner}
                        alt={`${project.title} preview`}
                        fill
                        className="object-cover opacity-85 group-hover:opacity-100 transition-opacity"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-3 text-xs font-mono px-2.5 py-1 rounded bg-slate-900/90 border border-white/10 text-cyan-300">
                        Multimodal Vedic Chart Inference
                      </div>
                    </div>
                  )}

                  {/* Tagline */}
                  <p className="text-sm font-medium text-slate-200 mb-2">
                    {project.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-1.5 mb-5">
                    {project.highlights.slice(0, 3).map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Metrics Row */}
                  <div className="grid grid-cols-3 gap-2 py-3 my-3 border-t border-b border-white/[0.06] text-center font-mono">
                    {project.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="p-1.5 rounded bg-slate-950/50">
                        <div className="text-xs font-bold text-cyan-400">{m.value}</div>
                        <div className="text-[10px] text-slate-500 truncate">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800/80 text-slate-300 border border-white/[0.04]"
                      >
                        {tech}
                      </span>
                    ))}
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
