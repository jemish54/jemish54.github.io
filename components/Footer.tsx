"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp, Heart, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export function Footer() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour12: true,
          hour: "2-digit",
          minute: "2-digit",
        }) + " IST"
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-slate-950/80 py-12 relative z-10 text-xs text-slate-400 font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Branding & Status */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 radar-badge inline-block" />
            <span className="text-white font-semibold">Jemish Mavani</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">Solenyx Studio</span>
          </div>
          {currentTime && (
            <span className="text-slate-500">
              [Local: {currentTime}]
            </span>
          )}
        </div>

        {/* Center: Tech Stack Attribution */}
        <div className="text-center text-slate-500 text-[11px]">
          Built with Next.js 15, React 19, Tailwind CSS & Bun.
        </div>

        {/* Right: Socials & Back to Top */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/jemish54"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/jemish-mavani-129510214"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-white/[0.08] text-slate-400 hover:text-white transition-all cursor-pointer"
            title="Scroll to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
