"use client";

import React, { useState } from "react";
import { architectures, ArchNode } from "@/data/architecture";
import { 
  Cpu, 
  Smartphone, 
  Server, 
  Database, 
  Terminal, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Layers,
  Activity
} from "lucide-react";

export function ArchitectureView() {
  const [activeArchIndex, setActiveArchIndex] = useState(0);
  const currentArch = architectures[activeArchIndex];
  const [selectedNode, setSelectedNode] = useState<ArchNode>(currentArch.nodes[0]);

  // When switching arch, reset selected node to first node of new arch
  const handleSelectArch = (index: number) => {
    setActiveArchIndex(index);
    setSelectedNode(architectures[index].nodes[0]);
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

  const getNodeBadgeColor = (type: ArchNode["type"]) => {
    switch (type) {
      case "client":
        return "bg-cyan-500/10 text-cyan-400 border-cyan-500/30";
      case "gateway":
        return "bg-indigo-500/10 text-indigo-400 border-indigo-500/30";
      case "engine":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/30";
      case "database":
        return "bg-amber-500/10 text-amber-400 border-amber-500/30";
      case "ops":
        return "bg-purple-500/10 text-purple-400 border-purple-500/30";
    }
  };

  return (
    <section id="architecture" className="py-24 relative overflow-hidden bg-slate-950/60 border-t border-b border-white/[0.06]">
      {/* Background glow accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-600/10 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-indigo-600/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
            <Activity className="w-3.5 h-3.5" />
            <span>Interactive System Design</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Production System Architectures
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Real systems engineered from scratch. Inspect the multi-tier architectures, data flows, 
            and design decisions powering high-concurrency mobile apps and AI pipelines.
          </p>
        </div>

        {/* Architecture Tab Selector */}
        <div className="flex flex-wrap gap-3 mb-8">
          {architectures.map((arch, idx) => (
            <button
              key={arch.id}
              onClick={() => handleSelectArch(idx)}
              className={`px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-2.5 ${
                activeArchIndex === idx
                  ? "bg-slate-800 text-cyan-300 border border-cyan-500/40 shadow-lg shadow-cyan-500/10"
                  : "bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-white/[0.06] hover:bg-slate-800/60"
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${activeArchIndex === idx ? "bg-cyan-400" : "bg-slate-600"}`} />
              <span>{arch.name.split(":")[0]}</span>
              <span className="text-[11px] font-mono text-slate-500 hidden sm:inline">
                {arch.id === "astrosight" ? "RAG & Monorepo" : "Graph Settlement"}
              </span>
            </button>
          ))}
        </div>

        {/* Interactive Architecture Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Node Flow Map (7 cols on desktop) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="p-4 rounded-xl bg-slate-900/70 border border-white/[0.08] backdrop-blur-md">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-mono text-slate-300">
                    Component Pipeline ({currentArch.nodes.length} Nodes)
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-500">
                  Click node to inspect specs
                </span>
              </div>

              {/* Node Cards Flow */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentArch.nodes.map((node, i) => {
                  const isSelected = selectedNode.id === node.id;
                  return (
                    <button
                      key={node.id}
                      onClick={() => setSelectedNode(node)}
                      className={`text-left p-4 rounded-xl border transition-all cursor-pointer relative group ${
                        isSelected
                          ? "bg-slate-800/90 border-cyan-500/60 shadow-lg shadow-cyan-500/15"
                          : "bg-slate-950/60 border-white/[0.06] hover:border-white/20 hover:bg-slate-900/40"
                      }`}
                    >
                      {/* Active indicator dot */}
                      {isSelected && (
                        <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                      )}

                      <div className="flex items-center gap-3 mb-2">
                        <div className={`p-2 rounded-lg border ${getNodeBadgeColor(node.type)}`}>
                          {getNodeIcon(node.type)}
                        </div>
                        <div>
                          <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                            {node.type}
                          </span>
                          <h4 className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                            {node.label}
                          </h4>
                        </div>
                      </div>

                      <p className="text-xs text-slate-400 line-clamp-1 mb-2 font-mono">
                        {node.tech}
                      </p>

                      <div className="text-[11px] text-slate-500 flex items-center justify-between pt-2 border-t border-white/[0.04]">
                        <span>Stage {i + 1} of {currentArch.nodes.length}</span>
                        <span className="text-cyan-400/80 group-hover:text-cyan-300 flex items-center gap-0.5">
                          Inspect &rarr;
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Step-by-Step Data Sequence */}
              <div className="mt-5 pt-4 border-t border-white/[0.08]">
                <div className="text-xs font-mono text-slate-400 mb-3 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Sequential Data Flow</span>
                </div>
                <div className="space-y-1.5 font-mono text-xs">
                  {currentArch.dataFlow.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-2 rounded bg-slate-950/40 border border-white/[0.03] text-slate-300 flex items-start gap-2"
                    >
                      <span className="text-cyan-400 font-bold shrink-0">&gt;</span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Deep Node Inspection Panel (5 cols on desktop) */}
          <div className="lg:col-span-5">
            <div className="sticky top-24 rounded-xl bg-slate-900/90 border border-cyan-500/30 backdrop-blur-xl p-6 shadow-2xl space-y-6">
              
              {/* Header */}
              <div className="pb-4 border-b border-white/[0.08]">
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-2.5 py-0.5 rounded text-[11px] font-mono border ${getNodeBadgeColor(selectedNode.type)}`}>
                    {selectedNode.type.toUpperCase()} SPECIFICATION
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    Node ID: {selectedNode.id}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  {getNodeIcon(selectedNode.type)}
                  {selectedNode.label}
                </h3>
                <p className="text-xs font-mono text-cyan-400 mt-1">
                  {selectedNode.role}
                </p>
              </div>

              {/* Technology Stack Spec */}
              <div>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">
                  Runtime & Tech Stack
                </span>
                <div className="p-3 rounded-lg bg-slate-950/80 border border-white/[0.08] font-mono text-xs text-slate-200">
                  {selectedNode.tech}
                </div>
              </div>

              {/* Architecture & Engineering Decisions */}
              <div>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-3">
                  Production Engineering Decisions
                </span>
                <div className="space-y-2.5">
                  {selectedNode.details.map((detail, index) => (
                    <div key={index} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* System Note / Monorepo Context */}
              <div className="p-3.5 rounded-lg bg-indigo-950/30 border border-indigo-500/20 text-xs text-indigo-300">
                <span className="font-semibold block mb-1">Architecture Guarantee:</span>
                This node is decoupled via strict type contracts and tested with automated end-to-end integration flows.
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
