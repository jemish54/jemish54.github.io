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
  Layers,
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
        return <Smartphone className="w-4 h-4 text-cyan-400" />;
      case "gateway":
        return <Server className="w-4 h-4 text-indigo-400" />;
      case "engine":
        return <Cpu className="w-4 h-4 text-emerald-400" />;
      case "database":
        return <Database className="w-4 h-4 text-amber-400" />;
      case "ops":
        return <Terminal className="w-4 h-4 text-purple-400" />;
    }
  };

  return (
    <section id="architecture" className="py-28 relative z-10 bg-neutral-950/70 border-t border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
              <span>02 // ARCHITECTURE</span>
              <span className="text-neutral-600">•</span>
              <span className="text-neutral-400">DISTRIBUTED SYSTEM TOPOLOGY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
              System Design & Data Topology.
            </h2>
            <p className="text-sm text-neutral-400 leading-relaxed font-light">
              Interactive structural topologies showcasing how user requests traverse edge gateways, 
              knowledge vaults, vector stores, and relational ACID clusters.
            </p>
          </div>

          {/* Architecture Switcher */}
          <div className="flex items-center gap-2 p-1 rounded-xl bg-neutral-900 border border-white/[0.08]">
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

        {/* Visual Pipeline Layout with Animated Wires */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Topology Pipeline (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="p-6 rounded-2xl bg-black/60 border border-white/[0.08] backdrop-blur-xl space-y-6">
              
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] font-mono text-xs text-neutral-400">
                <span className="flex items-center gap-2">
                  <Activity className="w-3.5 h-3.5 text-cyan-400" />
                  Active Data Pipeline
                </span>
                <span className="text-emerald-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Live Reactive Path
                </span>
              </div>

              {/* Node Sequence List */}
              <div className="space-y-3 relative">
                {currentArch.nodes.map((node, i) => {
                  const isActive = node.id === activeNodeId;

                  return (
                    <div
                      key={node.id}
                      onClick={() => handleNodeClick(node.id)}
                      className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-4 group ${
                        isActive
                          ? "bg-neutral-900/90 border-cyan-500/50 shadow-lg shadow-cyan-950/40"
                          : "bg-neutral-950/40 border-white/[0.04] hover:border-white/10 hover:bg-neutral-900/30"
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <div className={`p-2 rounded-lg border ${
                          isActive
                            ? "bg-cyan-500/10 border-cyan-500/30"
                            : "bg-neutral-900 border-white/[0.06]"
                        }`}>
                          {getNodeIcon(node.type)}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                              {node.label}
                            </span>
                            <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-white/[0.04] text-neutral-400 border border-white/[0.04]">
                              {node.type}
                            </span>
                          </div>
                          <p className="text-xs font-mono text-neutral-400 mt-0.5 line-clamp-1">
                            {node.tech}
                          </p>
                        </div>
                      </div>

                      <div className="shrink-0 font-mono text-xs flex items-center gap-2">
                        <span className="text-neutral-500 text-[11px] hidden sm:inline">
                          0{i + 1}
                        </span>
                        <div className={`w-2 h-2 rounded-full ${isActive ? "bg-cyan-400" : "bg-neutral-700"}`} />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Data Flow Stepper */}
              <div className="pt-4 border-t border-white/[0.06] space-y-2">
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider block mb-2">
                  Execution Pathway
                </span>
                <div className="space-y-1.5 font-mono text-xs">
                  {currentArch.dataFlow.map((step, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-2 rounded bg-neutral-950/60 border border-white/[0.03] text-neutral-300 flex items-start gap-2"
                    >
                      <span className="text-cyan-400 font-bold">→</span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Node Spec Drawer (5 cols) */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 p-6 sm:p-7 rounded-2xl bg-neutral-950 border border-cyan-500/30 backdrop-blur-2xl shadow-2xl space-y-6">
              
              <div className="pb-4 border-b border-white/[0.08]">
                <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-2">
                  <span className="text-cyan-400 uppercase tracking-wider">
                    [NODE TELEMETRY]
                  </span>
                  <span>{selectedNode.type.toUpperCase()}</span>
                </div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
                  {getNodeIcon(selectedNode.type)}
                  {selectedNode.label}
                </h3>
                <p className="text-xs font-mono text-neutral-400 mt-1">
                  {selectedNode.role}
                </p>
              </div>

              {/* Technologies in this node */}
              <div>
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider block mb-2">
                  Core Runtime
                </span>
                <div className="p-3 rounded-xl bg-neutral-900 border border-white/[0.06] font-mono text-xs text-cyan-200">
                  {selectedNode.tech}
                </div>
              </div>

              {/* Architectural Verification Points */}
              <div>
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider block mb-3">
                  Implementation Guarantees
                </span>
                <div className="space-y-2.5">
                  {selectedNode.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Design Decision Insight */}
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs text-neutral-400 font-light leading-relaxed">
                <span className="text-neutral-200 font-medium block mb-1">Architectural Trade-off:</span>
                Engineered with strict zero-coupling boundaries to allow independent scaling, localized benchmarking, and sub-millisecond serialization.
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
