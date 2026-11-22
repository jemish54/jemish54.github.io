"use client";

import React from "react";
import { experiences, education } from "@/data/experience";
import { useMode } from "@/components/ModeContext";
import { 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ArrowUpRight 
} from "lucide-react";

export function ExperienceMinimal() {
  const { mode } = useMode();

  return (
    <section id="experience" className="py-28 relative z-10 border-t border-white/[0.08] bg-neutral-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-xl mb-16 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
            <span>04 // TRAJECTORY</span>
            <span className="text-neutral-600">•</span>
            <span className="text-neutral-400">TRACK RECORD & IMPACT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            Engineering Milestones.
          </h2>
          <p className="text-sm text-neutral-400 leading-relaxed font-light">
            Career evolution from enterprise agency client applications to founding Solenyx Studio 
            and deploying full-stack AI monorepos.
          </p>
        </div>

        {/* Minimal Timeline */}
        <div className="space-y-6">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="p-6 sm:p-8 rounded-2xl bg-neutral-950/70 border border-white/[0.06] hover:border-white/15 transition-all space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/[0.04]">
                <div>
                  <div className="flex items-center gap-2.5">
                    <h3 className="text-lg font-semibold text-white">
                      {exp.role}
                    </h3>
                    {exp.badge && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
                        {exp.badge}
                      </span>
                    )}
                  </div>
                  <div className="text-sm font-medium text-cyan-400 mt-0.5">
                    {exp.company}
                  </div>
                </div>

                <div className="font-mono text-xs text-neutral-400 text-left sm:text-right">
                  <div className="text-neutral-300">{exp.period}</div>
                  <div className="text-neutral-500 text-[11px] mt-0.5">{exp.location}</div>
                </div>
              </div>

              <p className="text-xs text-neutral-300 leading-relaxed font-light">
                {exp.description}
              </p>

              {/* Achievements */}
              <div className="space-y-2 pt-1">
                {exp.achievements.map((ach, aIdx) => (
                  <div key={aIdx} className="flex items-start gap-2.5 text-xs text-neutral-400">
                    <span className="text-cyan-400 font-bold shrink-0 mt-0.5">•</span>
                    <span>{ach}</span>
                  </div>
                ))}
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.04]">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded text-[10px] font-mono bg-neutral-900 text-neutral-400 border border-white/[0.04]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Education Card */}
        <div className="mt-8 p-6 rounded-2xl bg-neutral-950/40 border border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="p-2.5 rounded-xl bg-neutral-900 border border-white/10 text-cyan-400">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono text-neutral-500 uppercase">Degree</div>
              <h4 className="text-sm font-semibold text-white">{education.degree}</h4>
              <p className="text-xs text-neutral-400">{education.institution} • {education.location}</p>
            </div>
          </div>
          <div className="font-mono text-xs text-neutral-400 px-3 py-1 rounded bg-neutral-900 border border-white/10">
            {education.period}
          </div>
        </div>

      </div>
    </section>
  );
}
