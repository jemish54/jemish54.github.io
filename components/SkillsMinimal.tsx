"use client";

import React, { useState } from "react";
import { skillCategories } from "@/data/skills";
import { useMode } from "@/components/ModeContext";
import { sound } from "@/lib/audio";
import { 
  Smartphone, 
  Server, 
  Cpu, 
  Terminal, 
  Layers, 
  Sparkles,
  ArrowRight
} from "lucide-react";

export function SkillsMinimal() {
  const { mode } = useMode();
  const [selectedDomain, setSelectedDomain] = useState<string>("all");

  const getDomainIcon = (id: string) => {
    switch (id) {
      case "mobile":
        return <Smartphone className="w-4 h-4 text-cyan-400" />;
      case "backend":
        return <Server className="w-4 h-4 text-indigo-400" />;
      case "ai":
        return <Cpu className="w-4 h-4 text-emerald-400" />;
      case "devops":
        return <Terminal className="w-4 h-4 text-amber-400" />;
      default:
        return <Layers className="w-4 h-4 text-cyan-400" />;
    }
  };

  const domains = selectedDomain === "all"
    ? skillCategories
    : skillCategories.filter((c) => c.id === selectedDomain);

  return (
    <section id="skills" className="py-28 relative z-10 border-t border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
              <span>03 // CAPABILITIES</span>
              <span className="text-neutral-600">•</span>
              <span className="text-neutral-400">TECHNICAL MONOLITH</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
              Core Engineering Stack.
            </h2>
            <p className="text-sm text-neutral-400 leading-relaxed font-light">
              Battle-tested depth across mobile frontends, edge runtimes, vector indexing, 
              and self-hosted container orchestration.
            </p>
          </div>

          {/* Domain Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-neutral-900/60 border border-white/[0.06] backdrop-blur-md">
            <button
              onClick={() => {
                sound.click();
                setSelectedDomain("all");
              }}
              className={`px-3 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                selectedDomain === "all"
                  ? "bg-white/10 text-white font-medium shadow-sm"
                  : "text-neutral-400 hover:text-neutral-200"
              }`}
            >
              All Domains
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  sound.click();
                  setSelectedDomain(cat.id);
                }}
                className={`px-3 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  selectedDomain === cat.id
                    ? "bg-white/10 text-white font-medium shadow-sm"
                    : "text-neutral-400 hover:text-neutral-200"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* 4-Pillar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {domains.map((domain) => (
            <div
              key={domain.id}
              className="p-6 sm:p-8 rounded-2xl bg-neutral-950/60 border border-white/[0.08] backdrop-blur-xl hover:border-white/20 transition-all space-y-6"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-neutral-900 border border-white/10">
                    {getDomainIcon(domain.id)}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white">
                      {domain.title}
                    </h3>
                    <p className="text-xs text-neutral-400 font-light mt-0.5">
                      {domain.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Skills Items */}
              <div className="space-y-3">
                {domain.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3 rounded-xl bg-neutral-900/40 border border-white/[0.03] hover:border-cyan-500/30 transition-all flex items-center justify-between gap-3 group"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-neutral-200 group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/[0.04] text-neutral-400 border border-white/[0.04]">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-xs font-mono text-neutral-500 mt-0.5">
                        {skill.context}
                      </p>
                    </div>

                    <div className="shrink-0 text-right">
                      <span className="text-xs font-mono text-cyan-400/90 bg-black/40 px-2 py-1 rounded border border-white/[0.04]">
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
