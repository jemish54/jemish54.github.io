"use client";

import React from "react";
import { experiences, education } from "@/data/experience";
import { 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Sparkles,
  Building
} from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-slate-950/60 border-t border-white/[0.06]">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[300px] bg-indigo-600/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career & Engineering History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Experience & Milestones
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            From agency client applications to founding Solenyx Studio and building 
            full-scale monorepos and AI orchestration systems.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:w-[1px] before:bg-gradient-to-b before:from-cyan-500/50 before:via-indigo-500/30 before:to-transparent">
          {experiences.map((exp, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row gap-8 items-start ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Center Node on Timeline */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-950 border-2 border-cyan-500 flex items-center justify-center shadow-lg shadow-cyan-500/30 z-20">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                </div>

                {/* Card Container */}
                <div className="ml-10 md:ml-0 md:w-1/2 md:px-6 w-full">
                  <div className="p-6 rounded-2xl bg-slate-900/80 border border-white/[0.08] hover:border-cyan-500/40 backdrop-blur-xl shadow-xl transition-all duration-300 hover:shadow-cyan-950/20 space-y-4">
                    
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-2 pb-3 border-b border-white/[0.06]">
                      <div>
                        {exp.badge && (
                          <span className="inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 mb-1.5">
                            {exp.badge}
                          </span>
                        )}
                        <h3 className="text-lg font-bold text-white">
                          {exp.role}
                        </h3>
                        <div className="text-sm font-semibold text-cyan-400 flex items-center gap-1.5">
                          <Building className="w-3.5 h-3.5" />
                          <span>{exp.company}</span>
                        </div>
                      </div>

                      <div className="text-right font-mono text-xs text-slate-400">
                        <div className="flex items-center gap-1 text-slate-300">
                          <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1 text-slate-500 mt-0.5">
                          <MapPin className="w-3 h-3" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Summary Description */}
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2 pt-1">
                      {exp.achievements.map((ach, aIdx) => (
                        <div key={aIdx} className="flex items-start gap-2 text-xs text-slate-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.04]">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-950 text-slate-400 border border-white/[0.04]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Education Card */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-white/[0.08] backdrop-blur-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-slate-950 border border-white/10 text-cyan-400 shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block">
                  Education & Foundation
                </span>
                <h4 className="text-base font-bold text-white">
                  {education.degree}
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  {education.institution} • {education.location}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {education.coursework.map((c) => (
                    <span key={c} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-white/[0.04]">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="shrink-0 text-right font-mono text-xs text-slate-400">
              <span className="px-3 py-1 rounded-full bg-slate-950 border border-white/10 text-slate-300">
                {education.period}
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
