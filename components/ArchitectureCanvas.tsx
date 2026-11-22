"use client";

import React, { useState } from "react";
import { architectures, ArchNode } from "@/data/architecture";
import { useMode } from "@/components/ModeContext";
import { sound } from "@/lib/audio";
import { 
  Smartphone, 
  Server, 
  Cpu, 
  Database, 
  Terminal, 
  CheckCircle2, 
  ArrowRight,
  Activity,
  Sparkles,
  Zap
} from "lucide-react";

export function ArchitectureCanvas() {
  const { mode } = useMode();
  const [activeArchIndex, setActiveArchIndex] = useState(0);
  const currentArch = architectures[activeArchIndex];
  const [activeNodeId, setActiveNodeId] = useState<string>(currentArch.nodes[0].id);

  const selectedNode = currentArch.nodes.find((n) => n.id === activeNodeId) || currentArch.nodes[0];

  const handleArchSwitch = (idx: number) => {
    sound.pop();
    setActiveArchIndex(idx);
    setActiveNodeId(architectures[idx].nodes[0].id);
  };

  const handleNodeClick = (id: string) => {
    sound.click();
    setActiveNodeId(id);
  };

  const getNodeIcon = (type: ArchNode["type"]) => {
    switch (type) {
      case "client":
        return <Smartphone className="w-5 h-5 text-cyan-400" />;
      case "gateway":
        return <Server className="w-5 h-5 text-indigo-400" />;
      case "engine":
        return <Cpu className="w-5 h-5 text-emerald-400" />;
      case "database":
        return <Database className="w-5 h-5 text-amber-400" />;
      case "ops":
        return <Terminal className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section id="architecture" className="py-28 relative z-10 bg-neutral-950/70 border-t border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
              <span>02 // ARCHITECTURE CIRCUIT</span>
              <span className="text-neutral-600">•</span>
              <span className="text-neutral-400">DISTRIBUTED DATA TOPOLOGY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
              The System Circuit.
            </h2>
            <p className="text-sm text-neutral-400 leading-relaxed font-light">
              Interactive topologies mapping client requests across edge gateways, 
              knowledge vaults, vector embeddings, and container clusters.
            </p>
          </div>

          {/* Architecture Switcher */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-neutral-900 border border-white/[0.08]">
            {architectures.map((arch, idx) => (
              <button
                key={arch.id}
                onClick={() => handleArchSwitch(idx)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer flex items-center gap-2 ${
                  activeArchIndex === idx
                    ? "bg-white/10 text-cyan-300 font-medium shadow-sm"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${activeArchIndex === idx ? "bg-cyan-400" : "bg-neutral-600"}`} />
                <span>{arch.id === "astrosight" ? "AstroSight (RAG)" : "TracXpense (Graph)"}</span>
              </button>
            ))}
          </div>
        </div>

        {/* The Circuit Board Box */}
        <div className="p-8 sm:p-10 rounded-3xl bg-neutral-950 border border-white/10 shadow-2xl space-y-8 relative overflow-hidden">
          
          {/* Subtle Circuit Grid Background */}
          <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

          {/* Top Circuit Status Bar */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.08] font-mono text-xs">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-semibold">
                TOPOLOGY_ACTIVE
              </span>
              <span className="text-neutral-400">
                {currentArch.tagline}
              </span>
            </div>

            <div className="flex items-center gap-2 text-emerald-400 text-[11px]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Reactive Signal Loop</span>
            </div>
          </div>

          {/* Interactive Node Chain */}
          <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {currentArch.nodes.map((node, i) => {
              const isActive = node.id === activeNodeId;

              return (
                <button
                  key={node.id}
                  onClick={() => handleNodeClick(node.id)}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer relative group flex flex-col justify-between h-36 ${
                    isActive
                      ? "bg-neutral-900 border-cyan-500/60 shadow-xl shadow-cyan-950/40"
                      : "bg-neutral-950/80 border-white/[0.06] hover:border-white/20 hover:bg-neutral-900/40"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="p-2 rounded-xl bg-black border border-white/10">
                      {getNodeIcon(node.type)}
                    </div>
                    <span className="font-mono text-[10px] text-neutral-500">
                      0{i + 1}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
                      {node.label}
                    </h4>
                    <p className="text-[10px] font-mono text-neutral-400 line-clamp-1 mt-0.5">
                      {node.tech.split(",")[0]}
                    </p>
                  </div>

                  {/* Active Indicator Bar */}
                  <div className={`h-[2px] rounded-full transition-all ${
                    isActive ? "bg-cyan-400 shadow-sm shadow-cyan-400" : "bg-transparent"
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Detailed Node HUD (Interactive Telemetry Panel) */}
          <div className="relative z-10 p-6 sm:p-8 rounded-2xl bg-black/80 border border-white/[0.08] backdrop-blur-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left: Active Node Specs (7 cols) */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-neutral-900 border border-white/10">
                    {getNodeIcon(selectedNode.type)}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block">
                      Stage Telemetry • {selectedNode.type}
                    </span>
                    <h3 className="text-xl font-bold text-white">
                      {selectedNode.label}
                    </h3>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-neutral-900/60 border border-white/[0.04] font-mono text-xs text-neutral-300">
                  <span className="text-neutral-500 block mb-0.5 text-[10px] uppercase">Runtime Stack:</span>
                  <span className="text-cyan-300">{selectedNode.tech}</span>
                </div>

                <div className="space-y-2 pt-1 font-mono text-xs">
                  {selectedNode.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-neutral-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Step-by-Step Execution Sequence (5 cols) */}
              <div className="lg:col-span-5 space-y-3 font-mono text-xs lg:border-l lg:border-white/[0.08] lg:pl-8">
                <span className="text-neutral-500 uppercase tracking-wider block text-[11px]">
                  Execution Pipeline Flow
                </span>
                <div className="space-y-1.5">
                  {currentArch.dataFlow.slice(0, 4).map((step, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-2 rounded bg-neutral-950 border border-white/[0.04] text-neutral-300 flex items-start gap-2 text-[11px]"
                    >
                      <span className="text-cyan-400 font-bold shrink-0">→</span>
                      <span className="line-clamp-2">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
