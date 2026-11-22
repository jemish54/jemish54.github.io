export interface ArchNode {
  id: string;
  label: string;
  role: string;
  tech: string;
  details: string[];
  type: "client" | "gateway" | "engine" | "database" | "ops";
}

export interface SystemArchitecture {
  id: string;
  name: string;
  tagline: string;
  description: string;
  nodes: ArchNode[];
  dataFlow: string[];
}

export const architectures: SystemArchitecture[] = [
  {
    id: "astrosight",
    name: "AstroSight: RAG Knowledge Engine & Monorepo",
    tagline: "End-to-End Multimodal AI Knowledge Retrieval & Mobile Inference",
    description:
      "How a client query flows from a Flutter mobile app through an ultra-low latency Bun API into a domain-grounded vector knowledge engine to stream precision astrological insights.",
    nodes: [
      {
        id: "mobile-client",
        label: "Flutter Mobile App",
        role: "Client Interface (iOS & Android)",
        tech: "Flutter 3.x, Riverpod, FVM, Dio",
        details: [
          "Cross-platform responsive rendering at locked 60 FPS",
          "Local SQLite cache for offline transit calculations",
          "Reactive UI with Riverpod state management and Freezed data models",
        ],
        type: "client",
      },
      {
        id: "api-gateway",
        label: "Bun + Elysia Gateway",
        role: "High-Throughput API Gateway",
        tech: "Bun runtime, ElysiaJS, TypeBox",
        details: [
          "Sub-10ms response times with Bun's native HTTP server",
          "Strict end-to-end type safety between client and server",
          "JWT session verification and rate-limited API routes",
        ],
        type: "gateway",
      },
      {
        id: "rag-engine",
        label: "Knowledge Ingestion & RAG Engine",
        role: "Semantic Context Grounding",
        tech: "Custom Markdown Vault Ingestion, Vector Embeddings",
        details: [
          "Automated parsing of domain knowledge markdown vaults",
          "Hierarchical chunking preserving astrological house & sign context",
          "Deterministic cosine similarity retrieval over planetary alignments",
        ],
        type: "engine",
      },
      {
        id: "llm-stream",
        label: "LLM Orchestration Layer",
        role: "Grounded Domain Synthesis",
        tech: "LangChain / OpenAI / Claude API",
        details: [
          "Strict system prompts preventing astrological hallucinations",
          "Server-Sent Events (SSE) streaming output directly to the mobile device",
          "Structured JSON response enforcement for chart visualization components",
        ],
        type: "engine",
      },
      {
        id: "database",
        label: "PostgreSQL & Drizzle ORM",
        role: "Relational Ledger & User Profiles",
        tech: "PostgreSQL 16, Drizzle ORM",
        details: [
          "Zero-overhead type-safe queries with Drizzle ORM",
          "Encrypted user birth coordinates and timezone offset tables",
          "Automated schema migrations synchronized in CI/CD",
        ],
        type: "database",
      },
      {
        id: "ops",
        label: "Dokploy Self-Hosted VPS",
        role: "Container Orchestration & DevOps",
        tech: "Docker, Dokploy, Traefik, Hetzner VPS",
        details: [
          "Self-hosted PaaS with automatic Git webhook deployments",
          "Zero-downtime rolling container updates",
          "Automated SSL certificates via Let's Encrypt and Traefik reverse proxy",
        ],
        type: "ops",
      },
    ],
    dataFlow: [
      "1. User enters natal coordinates in Flutter client",
      "2. Elysia Gateway authenticates token & verifies payload in < 8ms",
      "3. Planetary transit vectors computed and sent to RAG Knowledge Engine",
      "4. Markdown vault indexed vectors injected as grounded domain context",
      "5. LLM generates precision synthesis streamed via SSE to mobile app",
      "6. Transaction logged to PostgreSQL via Drizzle ORM",
    ],
  },
  {
    id: "tracxpense",
    name: "TracXpense Pro: Graph Debt Settlement Engine",
    tagline: "High-Concurrency Joint Expense Architecture with O(V+E) Simplification",
    description:
      "A distributed ledger architecture where group expenses are settled using a debt minimization graph algorithm, ensuring the fewest physical money transfers between participants.",
    nodes: [
      {
        id: "client",
        label: "Flutter Joint Client",
        role: "Expense Input & Real-time Sync",
        tech: "Flutter, Riverpod, GoRouter, Freezed",
        details: [
          "Optimistic UI updates for immediate feedback during offline usage",
          "Dynamic currency conversion and localized receipt parsing",
          "Real-time visual breakdown of net positive and negative balances",
        ],
        type: "client",
      },
      {
        id: "auth-guard",
        label: "BetterAuth Session Layer",
        role: "Authentication & Group Access Control",
        tech: "BetterAuth, Session Cookies, JWT",
        details: [
          "Multi-tenant group access verification",
          "Secure cross-device session synchronization",
          "Role-based authorization for joint account administrators",
        ],
        type: "gateway",
      },
      {
        id: "settle-engine",
        label: "Graph Debt Minimizer",
        role: "Greedy / Flow Balance Algorithm",
        tech: "TypeScript, Custom Graph Solver",
        details: [
          "Reduces N*(N-1) peer debts into minimal transaction vectors",
          "Greedy cash flow matching achieving O(V log V) complexity",
          "Guarantees net zero settlement sum across all group members",
        ],
        type: "engine",
      },
      {
        id: "api-backend",
        label: "Bun / Elysia Monorepo API",
        role: "Turborepo Backend Core",
        tech: "Bun, ElysiaJS, Turborepo",
        details: [
          "Shared schema contracts shared between frontend and backend",
          "Automated background notifications for settlement requests",
          "Instant invoice and PDF report generation",
        ],
        type: "engine",
      },
      {
        id: "db-ledger",
        label: "PostgreSQL ACID Ledger",
        role: "Transactional Source of Truth",
        tech: "PostgreSQL, Strict Foreign Keys, Drizzle",
        details: [
          "Strict ACID transactions preventing double-counting of split shares",
          "Audit trail for every modified transaction and member entry",
          "Automated continuous database snapshots",
        ],
        type: "database",
      },
      {
        id: "infra",
        label: "Dokploy Production Stack",
        role: "Infrastructure as Code",
        tech: "Dokploy, Docker Compose, Linux Host",
        details: [
          "Containerized isolated services behind Traefik reverse proxy",
          "Healthcheck monitoring with auto-restart policies",
          "Single-command makefile deployment integration",
        ],
        type: "ops",
      },
    ],
    dataFlow: [
      "1. Member adds multi-currency restaurant bill in Flutter app",
      "2. BetterAuth validates group membership & permissions",
      "3. Elysia API commits split splits into PostgreSQL ledger",
      "4. Graph Debt Minimizer recalculates global group balance matrix",
      "5. Minimal settlement payment paths broadcast back to all devices",
    ],
  },
];
