export interface SkillItem {
  name: string;
  level: "Advanced" | "Expert" | "Production";
  experience: string;
  context: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  iconName: string;
  description: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "mobile",
    title: "Mobile Architecture",
    iconName: "Smartphone",
    description: "Production mobile applications with 60fps performance, custom canvas engines, and clean reactive architectures.",
    skills: [
      { name: "Flutter", level: "Production", experience: "3+ Years", context: "AstroSight, TracXpense, Scorecord, CAARD app" },
      { name: "Dart", level: "Production", experience: "3+ Years", context: "Deep asynchronous streams, generics, reflection" },
      { name: "Riverpod & BLoC", level: "Production", experience: "2+ Years", context: "Predictable state, dependency injection, testability" },
      { name: "Native Android & Kotlin", level: "Advanced", experience: "2 Years", context: "Jetpack Compose, Coroutines & Flows, JNI" },
      { name: "iOS Native Bridging", level: "Advanced", experience: "2 Years", context: "Swift, SPM, CocoaPods, simctl automation" },
      { name: "Custom Canvas & Flame", level: "Advanced", experience: "1.5 Years", context: "Lanternova 2D raycasting & shader simulation" },
      { name: "App Store & Play Store CI/CD", level: "Production", experience: "2+ Years", context: "Automated signing, release tracks, ASO optimization" },
    ],
  },
  {
    id: "backend",
    title: "Backend & Systems",
    iconName: "Server",
    description: "High-throughput APIs, type-safe monorepos, relational ledgers, and low-latency microservices.",
    skills: [
      { name: "Bun & ElysiaJS", level: "Production", experience: "2 Years", context: "Ultra-fast HTTP gateway for AstroSight & TracXpense" },
      { name: "Node.js & NestJS", level: "Production", experience: "2+ Years", context: "Modular enterprise microservices & REST APIs" },
      { name: "Go (Golang)", level: "Advanced", experience: "1.5 Years", context: "Concurrent microservices, CLI utilities, network tools" },
      { name: "PostgreSQL & Drizzle ORM", level: "Production", experience: "2+ Years", context: "Relational ledgers, complex joins, schema migrations" },
      { name: "BetterAuth & Security", level: "Production", experience: "1.5 Years", context: "Cross-platform multi-tenant auth & session validation" },
      { name: "PocketBase & Supabase", level: "Production", experience: "2 Years", context: "Real-time subscriptions for Scorecord live match data" },
      { name: "WebSockets & SSE", level: "Production", experience: "2 Years", context: "Real-time cricket feeds & streaming AI token output" },
    ],
  },
  {
    id: "ai",
    title: "AI Orchestration",
    iconName: "Cpu",
    description: "Domain-grounded RAG pipelines, agentic workflows, knowledge ingestion, and headless automation.",
    skills: [
      { name: "RAG & Vector Embeddings", level: "Production", experience: "1.5 Years", context: "AstroSight knowledge engine with semantic retrieval" },
      { name: "Markdown Knowledge Ingestion", level: "Production", experience: "1.5 Years", context: "Hierarchical AST chunking preserving contextual trees" },
      { name: "Multi-Agent Workflows", level: "Advanced", experience: "1 Year", context: "Autonomous agent execution, validation, task dispatch" },
      { name: "Headless Simulator Automation", level: "Production", experience: "1.5 Years", context: "Python simctl & ADB drivers for recording store flows" },
      { name: "Headless Blender 3D Automation", level: "Advanced", experience: "1 Year", context: "Python 3D scripting for marketing candy-glass visuals" },
      { name: "HyperFrames Video Generation", level: "Production", experience: "1 Year", context: "Programmatic HTML/CSS motion rendering to MP4" },
    ],
  },
  {
    id: "devops",
    title: "DevOps & Cloud",
    iconName: "Terminal",
    description: "Self-hosted infrastructure, containerized deployments, reverse proxies, and monorepo management.",
    skills: [
      { name: "Dokploy & Docker", level: "Production", experience: "2 Years", context: "Production self-hosted PaaS orchestrating services" },
      { name: "Linux Server Administration", level: "Production", experience: "3+ Years", context: "VPS hardening, systemd, SSH keys, network tuning" },
      { name: "Traefik & Caddy", level: "Production", experience: "2 Years", context: "Automated Let's Encrypt SSL & reverse proxy routing" },
      { name: "Turborepo & Bun Workspaces", level: "Production", experience: "2 Years", context: "Shared TypeScript packages between apps & APIs" },
      { name: "Git & CI/CD Pipelines", level: "Production", experience: "3+ Years", context: "Automated builds, linting, tests, release tags" },
      { name: "Next.js 15 & Astro 5", level: "Production", experience: "2 Years", context: "High-performance promotional sites & portfolios" },
    ],
  },
];
