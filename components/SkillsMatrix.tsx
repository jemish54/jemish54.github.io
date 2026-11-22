"use client";

import React, { useState } from "react";
import { skillCategories, SkillCategory } from "@/data/skills";
import { 
  Smartphone, 
  Server, 
  Cpu, 
  Terminal, 
  Check, 
  Sparkles,
  Layers,
  Wrench
} from "lucide-react";

export function SkillsMatrix() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Smartphone":
        return <Smartphone className="w-5 h-5 text-cyan-400" />;
      case "Server":
        return <Server className="w-5 h-5 text-indigo-400" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-emerald-400" />;
      case "Terminal":
        return <Terminal className="w-5 h-5 text-amber-400" />;
      default:
        return <Wrench className="w-5 h-5 text-cyan-400" />;
    }
  };

  const displayedCategories = activeCategory === "all"
    ? skillCategories
    : skillCategories.filter((c) => c.id === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950/40 border-t border-white/[0.06]">
      {/* Background radial flare */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[400px] bg-cyan-600/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[300px] bg-indigo-600/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Engineering & Orchestration Matrix
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Depth over buzzwords. Every tool and framework below has been battle-tested in 
            production monorepos, published apps, or self-hosted cloud infrastructure.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 pt-2">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                activeCategory === "all"
                  ? "bg-slate-800 text-cyan-300 border border-cyan-500/40 shadow-sm"
                  : "bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-white/[0.06]"
              }`}
            >
              All Domains
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-slate-800 text-cyan-300 border border-cyan-500/40 shadow-sm"
                    : "bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-white/[0.06]"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedCategories.map((cat) => (
            <div
              key={cat.id}
              className="rounded-2xl bg-slate-900/70 border border-white/[0.08] backdrop-blur-xl p-6 shadow-xl space-y-5"
            >
              {/* Category Title */}
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-white/10 shadow-inner">
                    {getCategoryIcon(cat.iconName)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-light">
                      {cat.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-3">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3 rounded-xl bg-slate-950/60 border border-white/[0.04] hover:border-cyan-500/30 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm text-slate-200">
                          {skill.name}
                        </span>
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-mono border ${
                            skill.level === "Production"
                              ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                              : "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
                          }`}
                        >
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-xs font-mono text-slate-400 mt-0.5">
                        {skill.context}
                      </p>
                    </div>

                    <div className="shrink-0 text-right">
                      <span className="text-xs font-mono text-cyan-300/80 bg-slate-900 px-2 py-1 rounded border border-white/[0.06]">
                        {skill.experience}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
