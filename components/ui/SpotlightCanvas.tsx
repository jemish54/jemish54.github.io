"use client";

import React, { useEffect, useRef } from "react";

export function SpotlightCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const x = e.clientX;
      const y = e.clientY;
      containerRef.current.style.setProperty("--mouse-x", `${x}px`);
      containerRef.current.style.setProperty("--mouse-y", `${y}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={
        {
          "--mouse-x": "50vw",
          "--mouse-y": "50vh",
        } as React.CSSProperties
      }
    >
      {/* Dynamic Cursor Spotlight */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(650px circle at var(--mouse-x) var(--mouse-y), rgba(6, 182, 212, 0.08), transparent 70%)",
        }}
      />
      {/* Secondary subtle emerald ambient pulse */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(450px circle at calc(var(--mouse-x) + 40px) calc(var(--mouse-y) + 40px), rgba(16, 185, 129, 0.04), transparent 60%)",
        }}
      />
    </div>
  );
}
