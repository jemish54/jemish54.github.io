"use client";

import React, { useState } from "react";
import { 
  Mail, 
  Copy, 
  Check, 
  FileDown, 
  ArrowRight, 
  Sparkles,
  MapPin
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { sound } from "@/lib/audio";
import confetti from "canvas-confetti";

export function ContactMinimal() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    sound.chime();
    navigator.clipboard.writeText("jemishmavani054@gmail.com");
    setCopied(true);
    confetti({
      particleCount: 45,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#06b6d4", "#10b981", "#6366f1"],
    });
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-28 relative z-10 border-t border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl bg-neutral-950 border border-white/10 p-8 sm:p-14 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Top Accent */}
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Col */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
                <span>Available for Senior Roles & High-Impact Contracts</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
                Let&apos;s build something <span className="gradient-text-cyan">meaningful</span>.
              </h2>

              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-light max-w-lg">
                I help fast-moving engineering teams and founders architect 
                high-concurrency mobile apps, low-latency Bun/Elysia backends, and grounded AI knowledge pipelines.
              </p>

              <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-neutral-400">
                <span className="px-3 py-1 rounded-lg bg-neutral-900 border border-white/[0.04]">
                  Full-Stack Mobile
                </span>
                <span className="px-3 py-1 rounded-lg bg-neutral-900 border border-white/[0.04]">
                  Distributed Backend
                </span>
                <span className="px-3 py-1 rounded-lg bg-neutral-900 border border-white/[0.04]">
                  AI Orchestration
                </span>
              </div>
            </div>

            {/* Right Col: Contact Action Box */}
            <div className="lg:col-span-5 space-y-3">
              <div className="p-6 rounded-2xl bg-neutral-900/60 border border-white/[0.06] space-y-4">
                
                {/* Email Box */}
                <div>
                  <span className="text-[11px] font-mono text-neutral-500 uppercase block mb-1">
                    Direct Electronic Mail
                  </span>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-black border border-white/[0.08] font-mono text-xs">
                    <span className="text-cyan-300 truncate mr-2">
                      jemishmavani054@gmail.com
                    </span>
                    <button
                      onClick={copyEmail}
                      className="p-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors cursor-pointer shrink-0"
                      title="Copy email"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                {/* Primary Buttons */}
                <div className="space-y-2 pt-1">
                  <a
                    href="mailto:jemishmavani054@gmail.com"
                    onClick={() => sound.click()}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white hover:bg-neutral-200 text-black font-semibold text-xs font-mono transition-all"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Initiate Conversation</span>
                  </a>

                  <a
                    href="/resume_jemish_mavani.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sound.click()}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-white/10 text-xs font-mono transition-all"
                  >
                    <FileDown className="w-4 h-4 text-cyan-400" />
                    <span>Curriculum Vitae (PDF)</span>
                  </a>
                </div>

                {/* Social Connects */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/[0.04] font-mono text-xs">
                  <a
                    href="https://github.com/jemish54"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-black/40 hover:bg-black border border-white/[0.04] text-neutral-400 hover:text-white flex items-center gap-2 transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href="https://linkedin.com/in/jemish-mavani-129510214"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-black/40 hover:bg-black border border-white/[0.04] text-neutral-400 hover:text-white flex items-center gap-2 transition-colors"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5 text-indigo-400" />
                    <span>LinkedIn</span>
                  </a>
                </div>

                <div className="text-[11px] font-mono text-neutral-500 text-center pt-1">
                  Surat, India • Available for global remote contracts & roles
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
