export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: "Mobile & AI" | "Full-Stack Monorepo" | "Game & Physics" | "Systems & Automation";
  description: string;
  highlights: string[];
  techStack: string[];
  architecture: string;
  icon: string;
  banner: string;
  screenImage?: string;
  links: {
    github?: string;
    live?: string;
    playStore?: string;
    appStore?: string;
  };
  metrics: { label: string; value: string }[];
  accentColor: string;
}

export const projects: Project[] = [
  {
    id: "astrosight",
    title: "AstroSight",
    tagline: "Vedic Astrology Platform with Grounded AI Knowledge Engine",
    category: "Mobile & AI",
    description:
      "Full-stack production monorepo pairing a 60fps Flutter mobile client with a sub-10ms Bun/Elysia edge API and a specialized Markdown knowledge vault RAG engine.",
    highlights: [
      "Custom RAG pipeline indexing structured astrological Markdown vaults",
      "Bun + ElysiaJS + Drizzle backend delivering <12ms average API responses",
      "Turborepo monorepo uniting iOS/Android apps, backend, and knowledge admin",
      "Self-hosted Dokploy VPS infrastructure with automated Docker deployments",
    ],
    techStack: [
      "Flutter",
      "Bun",
      "ElysiaJS",
      "Drizzle ORM",
      "PostgreSQL",
      "RAG / Vector AI",
      "Turborepo",
      "Dokploy",
    ],
    architecture:
      "Flutter Mobile (FVM/Riverpod) → Elysia Gateway (<10ms) → Ingestion Worker → Knowledge Vault RAG → SSE Stream",
    icon: "/assets/astrosight-icon.png",
    banner: "/assets/astrosight-banner.png",
    screenImage: "/assets/astrosight-screen.png",
    links: {
      github: "https://github.com/jemish54/astrosight",
    },
    metrics: [
      { label: "API Latency", value: "< 12ms" },
      { label: "Platforms", value: "iOS + Android" },
      { label: "Architecture", value: "Turborepo" },
      { label: "AI Grounding", value: "RAG Vault" },
    ],
    accentColor: "from-cyan-500/20 via-indigo-500/10 to-transparent",
  },
  {
    id: "tracxpense",
    title: "TracXpense Pro",
    tagline: "Collaborative Expense Monorepo with Graph Debt Simplification",
    category: "Full-Stack Monorepo",
    description:
      "Joint expense platform solving peer debts via an O(V+E) graph minimization algorithm, backed by BetterAuth session verification and PostgreSQL ACID transactions.",
    highlights: [
      "Debt minimization graph algorithm resolving group splits in minimal bank transfers",
      "BetterAuth authentication with secure session tokens across mobile and API",
      "Offline-first mobile architecture with optimistic local updates and background sync",
      "Dockerized production deployment managed via Dokploy and automated migrations",
    ],
    techStack: [
      "Flutter",
      "Riverpod",
      "ElysiaJS",
      "Bun",
      "BetterAuth",
      "Drizzle ORM",
      "PostgreSQL",
      "Dokploy",
    ],
    architecture:
      "Flutter (Freezed/Dio) → BetterAuth Session Guard → Elysia Route Handler → Graph Solver O(V+E) → PostgreSQL ACID",
    icon: "/assets/tracxpense-icon.png",
    banner: "/assets/astrosight-analysis.png",
    links: {
      github: "https://github.com/jemish54/tracxpense_pro",
    },
    metrics: [
      { label: "Graph Math", value: "O(V+E) Solver" },
      { label: "State Engine", value: "Riverpod" },
      { label: "Auth Layer", value: "BetterAuth" },
      { label: "Sync Speed", value: "Optimistic" },
    ],
    accentColor: "from-emerald-500/20 via-cyan-500/10 to-transparent",
  },
  {
    id: "scorecord",
    title: "Scorecord",
    tagline: "Real-Time Cricket Scoring & Live Match Streaming",
    category: "Mobile & AI",
    description:
      "Commercial cricket tournament scoring engine published on Google Play. Delivers instant ball-by-ball streaming via PocketBase with sub-50ms sync latency.",
    highlights: [
      "Live ball-by-ball tournament tracking with automated strike-rate and DLS algorithms",
      "Real-time WebSocket match streaming to spectators via Dokploy-hosted PocketBase",
      "Dedicated Astro 5 marketing portal with sub-second page loads",
      "Published on Google Play with 99.9% crash-free sessions across real devices",
    ],
    techStack: [
      "Flutter",
      "Dart",
      "PocketBase",
      "SQLite / WAL",
      "Astro 5",
      "Dokploy",
      "Google Play",
    ],
    architecture:
      "Flutter Ball-by-Ball Engine → PocketBase Real-time WebSocket → Dokploy VPS → Astro 5 Landing Portal",
    icon: "/assets/scorecord-icon.png",
    banner: "/assets/scorecord-banner.jpg",
    screenImage: "/assets/scorecord-live.jpg",
    links: {
      playStore: "https://play.google.com/store/apps/details?id=studio.solenyx.scorecord",
      live: "https://scorecord.solenyx.studio",
    },
    metrics: [
      { label: "Store Status", value: "Google Play" },
      { label: "Live Sync", value: "< 50ms" },
      { label: "Reliability", value: "99.9% Crash-Free" },
      { label: "Web Portal", value: "Astro 5" },
    ],
    accentColor: "from-blue-500/20 via-cyan-500/10 to-transparent",
  },
  {
    id: "lanternova",
    title: "Lanternova",
    tagline: "Wordless Light-Routing Optical Puzzle Game for Mobile",
    category: "Game & Physics",
    description:
      "Atmospheric mobile puzzle game with a custom 2D ray-tracing canvas physics loop, dynamic glow shaders, and optical prism reflection mathematics.",
    highlights: [
      "Custom 2D raycasting and vector reflection engine locked at 60 FPS",
      "Dynamic volumetric light paths with optical refraction and color dispersion",
      "Haptic feedback integration mapped to mirror rotations and beam activations",
      "Custom soundscapes and shaders crafted for iOS and Android flagships",
    ],
    techStack: [
      "Flutter",
      "Flame / Custom Canvas",
      "Vector Math",
      "Optical Raycasting",
      "Custom Shaders",
    ],
    architecture:
      "Touch Gesture Stream → 2D Raycasting Engine (Vector Reflection) → Shader Glow Pass → 60 FPS Canvas Loop",
    icon: "/assets/lanternova-icon.png",
    banner: "/assets/lanternova-beam.png",
    links: {},
    metrics: [
      { label: "Render Loop", value: "Locked 60 FPS" },
      { label: "Physics", value: "Vector Raycast" },
      { label: "Shaders", value: "Custom GLSL" },
      { label: "Engine", value: "Flutter Canvas" },
    ],
    accentColor: "from-amber-500/20 via-purple-500/10 to-transparent",
  },
  {
    id: "autonomous-pipelines",
    title: "Autonomous Media Engine",
    tagline: "Headless Simulator Driving & Blender 3D Video Automation",
    category: "Systems & Automation",
    description:
      "Autonomous marketing production pipeline driving mobile simulators via Python, rendering procedural 3D assets in headless Blender, and assembling launch films.",
    highlights: [
      "Deterministic simulator test runner recording app workflows for store releases",
      "Headless Blender 3D Python scripts generating candy-glass marketing models",
      "Programmatic video rendering using HyperFrames HTML/CSS motion engine",
      "Zero-manual intervention production of localized multi-device store screenshots",
    ],
    techStack: [
      "Python",
      "Blender 3D (Python API)",
      "HyperFrames",
      "ADB & xcrun simctl",
      "FFmpeg",
    ],
    architecture:
      "CLI Command → simctl/ADB Simulator → Raw Frame Capture → Headless Blender Render → HyperFrames Synthesis",
    icon: "/assets/astrosight-icon.png",
    banner: "/assets/astrosight-banner.png",
    links: {},
    metrics: [
      { label: "Automation", value: "100% Headless" },
      { label: "3D Pipeline", value: "Python Blender" },
      { label: "Video Render", value: "Programmatic" },
      { label: "Efficiency", value: "10x Faster ASO" },
    ],
    accentColor: "from-purple-500/20 via-cyan-500/10 to-transparent",
  },
];
