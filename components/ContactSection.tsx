"use client";

import React, { useState } from "react";
import { 
  Mail, 
  MapPin, 
  FileDown, 
  Check, 
  Copy, 
  Sparkles, 
  MessageSquare,
  ArrowRight
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import confetti from "canvas-confetti";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("jemishmavani054@gmail.com");
    setCopied(true);
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.8 },
      colors: ["#06b6d4", "#10b981", "#6366f1"],
    });
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-grid-pattern">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-600/10 via-indigo-600/10 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Container Glass Box */}
        <div className="rounded-3xl bg-slate-900/80 border border-white/10 backdrop-blur-2xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          
          {/* Subtle gradient border line */}
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Heading & Value Prop */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 radar-badge inline-block" />
                <span>Currently Available for Opportunities</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Let&apos;s Build Something <span className="gradient-text-cyan">Extraordinary</span>
              </h2>

              <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl font-light">
                Whether you need a senior engineer to lead high-performance mobile architectures, 
                scale backend microservices with Bun/Elysia, or design grounded AI RAG orchestration, 
                I&apos;m ready to contribute from day one.
              </p>

              {/* Inquiry Focus Badges */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-mono text-slate-500 block uppercase tracking-wider">
                  Target Engagements
                </span>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Senior Mobile Engineer",
                    "Full-Stack Monorepo Architect",
                    "AI Orchestration & Systems",
                    "High-Impact Startup Core Team",
                  ].map((role) => (
                    <span
                      key={role}
                      className="px-3 py-1 rounded-lg bg-slate-950/60 border border-white/[0.06] text-xs font-mono text-slate-300"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Direct Reach Out Card */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 rounded-2xl bg-slate-950/80 border border-white/[0.08] space-y-4 shadow-xl">
                
                {/* Email Copy Card */}
                <div>
                  <span className="text-xs font-mono text-slate-400 block mb-1.5">Direct Email</span>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-white/[0.06] font-mono text-xs sm:text-sm">
                    <span className="text-cyan-300 truncate mr-2">jemishmavani054@gmail.com</span>
                    <button
                      onClick={copyEmail}
                      className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer shrink-0"
                      title="Copy email"
                    >
                      {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Primary Action Buttons */}
                <div className="pt-2 space-y-2">
                  <a
                    href="mailto:jemishmavani054@gmail.com"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/20 transition-all"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send Message</span>
                  </a>

                  <a
                    href="/resume_jemish_mavani.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-white/10 text-sm font-medium transition-all"
                  >
                    <FileDown className="w-4 h-4 text-cyan-400" />
                    <span>Download Full Resume (PDF)</span>
                  </a>
                </div>

                {/* Social Connects */}
                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/[0.06] font-mono text-xs">
                  <a
                    href="https://github.com/jemish54"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-white/[0.04] text-slate-300 hover:text-white flex items-center gap-2 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4 text-slate-400" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href="https://linkedin.com/in/jemish-mavani-129510214"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-white/[0.04] text-slate-300 hover:text-white flex items-center gap-2 transition-colors"
                  >
                    <LinkedinIcon className="w-4 h-4 text-indigo-400" />
                    <span>LinkedIn</span>
                  </a>
                </div>

                <div className="text-[11px] font-mono text-slate-500 text-center pt-1">
                  Surat, Gujarat, India • Available for global remote
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
