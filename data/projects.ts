export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: "Mobile & AI" | "Full-Stack Monorepo" | "Game & Physics" | "Systems & Automation";
  description: string;
  longDescription: string;
  highlights: string[];
  techStack: string[];
  architecture: string;
  icon: string;
  banner?: string;
  links: {
    github?: string;
    live?: string;
    playStore?: string;
    appStore?: string;
    docs?: string;
  };
  metrics: { label: string; value: string }[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "astrosight",
    title: "AstroSight",
    tagline: "Vedic Astrology Platform with Grounded AI Knowledge Engine",
    category: "Mobile & AI",
    description:
      "Full-stack production monorepo uniting a high-performance Flutter mobile client (iOS/Android) with a Bun/Elysia backend and a specialized RAG engine analyzing multidimensional astrological charts.",
    longDescription:
      "AstroSight is an end-to-end production ecosystem for computational Vedic astrology. Built as a Turborepo monorepo powered by Bun workspaces, it combines a responsive Flutter client with an ultra-low latency Bun + Elysia backend. The core intelligence runs on a dedicated knowledge engine that ingests structured Markdown astrological vaults, computes planetary vectors, and generates grounded, citation-backed analyses via LLM orchestration.",
    highlights: [
      "Custom RAG analysis pipeline grounded on markdown knowledge vaults",
      "Bun + ElysiaJS + Drizzle ORM backend for sub-10ms API responses",
      "Headless automated store recording and Blender 3D marketing render pipeline",
      "Production deployment orchestrated via Dokploy, Docker & Postgres",
    ],
    techStack: [
      "Flutter",
      "Dart",
      "Riverpod",
      "Bun",
      "ElysiaJS",
      "Drizzle ORM",
      "PostgreSQL",
      "RAG / Vector AI",
      "Turborepo",
      "Dokploy",
    ],
    architecture:
      "Flutter Client (FVM/Riverpod) → Elysia API Gateway → Embedding & Ingestion Worker → Knowledge Vault RAG → Streaming LLM Engine",
    icon: "/assets/astrosight-icon.png",
    banner: "/assets/astrosight-banner.png",
    links: {
      github: "https://github.com/jemish54/astrosight",
    },
    metrics: [
      { label: "Architecture", value: "Monorepo (Turborepo)" },
      { label: "API Latency", value: "< 12ms avg" },
      { label: "Platforms", value: "iOS & Android" },
    ],
    featured: true,
  },
  {
    id: "tracxpense",
    title: "TracXpense Pro",
    tagline: "Collaborative Financial Tracking & Multi-Member Split Engine",
    category: "Full-Stack Monorepo",
    description:
      "Personal and shared expense tracking platform supporting multi-user joints, complex split math, debt simplification algorithms, and instant invite-to-join flows.",
    longDescription:
      "TracXpense is a full-stack platform solving complex peer-to-peer and group financial accountability. Structured as a Bun monorepo, it pairs a snappy Flutter app (Riverpod, go_router, dio, freezed) with an ElysiaJS backend, BetterAuth authentication, and Drizzle ORM over PostgreSQL. It features an optimized debt minimization graph algorithm to settle group expenses in the minimum possible transactions.",
    highlights: [
      "Joint expense tracking with real-time per-member split & settlement calculations",
      "BetterAuth authentication with secure session management across mobile & API",
      "Offline-first architecture with optimistic UI updates and background synchronization",
      "Automated Dokploy deployment stack with automated database migrations",
    ],
    techStack: [
      "Flutter",
      "Riverpod",
      "ElysiaJS",
      "Bun",
      "BetterAuth",
      "Drizzle ORM",
      "PostgreSQL",
      "Docker",
      "Dokploy",
    ],
    architecture:
      "Flutter App (Dio/Freezed) → BetterAuth Session Validation → Elysia Route Handlers → Debt Minimization Graph → Postgres Cluster",
    icon: "/assets/tracxpense-icon.png",
    links: {
      github: "https://github.com/jemish54/tracxpense_pro",
    },
    metrics: [
      { label: "State Engine", value: "Riverpod + Freezed" },
      { label: "Settlement", value: "O(V+E) Graph Solv" },
      { label: "Deployment", value: "Dokploy / Docker" },
    ],
    featured: true,
  },
  {
    id: "scorecord",
    title: "Scorecord",
    tagline: "Real-Time Cricket Scoring & Live Match Streaming",
    category: "Mobile & AI",
    description:
      "Live cricket tournament scoring platform published on Google Play. Features instant ball-by-ball updates, tournament hosting, and an Astro-powered promotional portal.",
    longDescription:
      "Scorecord is an active mobile application on Google Play built for amateur and semi-professional cricket leagues. It allows umpires and scorers to log real-time ball-by-ball events, calculate Duckworth-Lewis-Stern and strike rates, and stream match updates directly to spectators. Deployed on PocketBase with self-hosted Dokploy infrastructure.",
    highlights: [
      "Live ball-by-ball score tracking with real-time tournament tables & player stats",
      "PocketBase backend deployed with high reliability on self-hosted VPS via Dokploy",
      "Dedicated promotional portal built with Astro 5 with sub-second page loads",
      "Published on Google Play with 100% crash-free sessions",
    ],
    techStack: [
      "Flutter",
      "Dart",
      "PocketBase",
      "SQLite / WAL",
      "Astro 5",
      "Dokploy",
      "Google Play Console",
    ],
    architecture:
      "Flutter Ball-by-Ball Engine → PocketBase Real-time WebSocket → Dokploy VPS → Astro 5 Landing Portal",
    icon: "/assets/scorecord-icon.png",
    banner: "/assets/scorecord-banner.jpg",
    links: {
      playStore: "https://play.google.com/store/apps/details?id=studio.solenyx.scorecord",
      live: "https://scorecord.solenyx.studio",
    },
    metrics: [
      { label: "Google Play", value: "Published App" },
      { label: "Sync Speed", value: "< 50ms Realtime" },
      { label: "Crash Free", value: "99.9%" },
    ],
    featured: true,
  },
  {
    id: "lanternova",
    title: "Lanternova",
    tagline: "Wordless Light-Routing Optical Puzzle Game for Mobile",
    category: "Game & Physics",
    description:
      "Atmospheric mobile puzzle game where players route beams of light using mirrors, prisms, and optical lenses to awaken ancient seaside beacons.",
    longDescription:
      "Lanternova is a physics-driven mobile puzzle game created under Solenyx Studio. Engineered with Flutter and custom 2D canvas ray-tracing shaders, players interact with optical elements to guide colored light beams through foggy seaside landscapes. Features custom acoustic soundscapes and smooth 60fps gesture physics.",
    highlights: [
      "Custom 2D ray-casting and reflection engine calculated in real-time at 60 FPS",
      "Immersive atmospheric visual aesthetic with dynamic glow and volumetric light paths",
      "Haptic feedback integration mapped to mirror rotations and beam activations",
      "Cross-platform architecture tested across iOS and Android flagships",
    ],
    techStack: [
      "Flutter",
      "Flame / Custom Canvas",
      "Dart",
      "Mathematical Optics",
      "Vector Math",
      "Shader Effects",
    ],
    architecture:
      "Gesture Input Stream → 2D Raycasting Engine (Vector Reflection Math) → Custom Canvas Shader Pass → 60 FPS Render Loop",
    icon: "/assets/lanternova-icon.png",
    links: {},
    metrics: [
      { label: "Frame Rate", value: "Locked 60 FPS" },
      { label: "Math Engine", value: "Vector Optics" },
      { label: "Levels", value: "10+ Prototypes" },
    ],
    featured: true,
  },
  {
    id: "ai-orchestration-pipelines",
    title: "Autonomous Content & Media Engine",
    tagline: "Headless Python Simulator Driving & Blender 3D Video Automation",
    category: "Systems & Automation",
    description:
      "Automated marketing production pipeline driving Android/iOS simulators via Python, rendering procedural 3D marketing materials in headless Blender, and assembling social motion via HyperFrames.",
    longDescription:
      "To automate high-fidelity app store marketing and social presence, Jemish engineered an autonomous media system. Python drivers spin up simulators, execute deterministic user flows, and capture clean UI frames. Simultaneously, headless Blender scripts generate candy-glass 3D models with engraved astrological motifs, which are combined programmatically into animated launch films.",
    highlights: [
      "Deterministic simulator test runner recording app workflows for app store reels",
      "Headless Blender 3D scripts producing ray-traced marketing assets via CLI",
      "Programmatic video generation using HyperFrames HTML/CSS-to-video render pipeline",
      "Zero-manual intervention production of localized multi-device store screenshots",
    ],
    techStack: [
      "Python",
      "Blender 3D (Python API)",
      "HyperFrames",
      "ADB & xcrun simctl",
      "FFmpeg",
      "Automated CLI",
    ],
    architecture:
      "CLI Trigger → simctl / ADB Driver → Frame Capture → Headless Blender Render → HyperFrames Synthesis → Store Assets",
    icon: "/assets/astrosight-icon.png",
    links: {},
    metrics: [
      { label: "Pipeline", value: "100% Headless" },
      { label: "Video Render", value: "Programmatic" },
      { label: "Efficiency", value: "10x Faster ASO" },
    ],
    featured: false,
  },
];
