export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  tech: string[];
  badge?: string;
}

export const experiences: ExperienceItem[] = [
  {
    id: "solenyx",
    role: "Founder & Lead Systems Engineer",
    company: "Solenyx Studio",
    location: "Remote",
    period: "2024 – Present",
    badge: "Independent Studio",
    description:
      "Architected and shipped production mobile apps, distributed backend systems, and AI orchestration engines across the Solenyx product suite.",
    achievements: [
      "Engineered AstroSight: Full-stack Vedic astrology monorepo with Bun/Elysia backend and grounded AI knowledge engine",
      "Created TracXpense Pro: Joint expense tracking monorepo with graph-based debt minimization algorithm and BetterAuth",
      "Published Scorecord to Google Play: Real-time cricket tournament scoring engine deployed with Dokploy and Astro 5",
      "Built automated Python simulator driving and headless Blender 3D pipelines for programmatic marketing generation",
    ],
    tech: ["Flutter", "Bun", "ElysiaJS", "PostgreSQL", "Drizzle", "RAG / Vector AI", "Dokploy", "Turborepo"],
  },
  {
    id: "tst",
    role: "Flutter Developer",
    company: "TST Technology",
    location: "Surat, Gujarat",
    period: "Dec 2024 – Present",
    badge: "Current Role",
    description:
      "Leading mobile architecture, delivering high-performance cross-platform Flutter applications with scalable codebases.",
    achievements: [
      "Delivered and optimized multiple Flutter apps with clean architecture, achieving smooth 60 FPS rendering",
      "Engineered the CAARD mobile application UI/UX, drastically improving code maintainability and test coverage",
      "Pioneered advanced hardware integrations: NFC data exchange, speech recognition, and low-power background location",
    ],
    tech: ["Flutter", "Dart", "BLoC", "Riverpod", "Clean Architecture", "NFC", "REST APIs"],
  },
  {
    id: "freelance",
    role: "Freelance Full-Stack & Mobile Developer",
    company: "Self-Employed",
    location: "Surat, Gujarat",
    period: "Nov 2023 – Dec 2024",
    description:
      "Delivered end-to-end mobile applications and backend services for international and domestic clients.",
    achievements: [
      "Delivered 3 custom Flutter applications from initial Figma design to production store deployment",
      "Engineered robust backend microservices with relational database schemas and third-party API integrations",
      "Advised founders on mobile UX ergonomics, offline-first syncing, and cloud infrastructure cost optimization",
    ],
    tech: ["Flutter", "Node.js", "PostgreSQL", "Firebase", "Supabase", "Docker", "Figma"],
  },
  {
    id: "onex",
    role: "Junior Flutter Developer & Intern",
    company: "+OneX India",
    location: "Surat, Gujarat",
    period: "Feb 2023 – Nov 2023",
    description:
      "Contributed to enterprise vehicle service platforms, developing critical checkout and garage management flows.",
    achievements: [
      "Improved MotorHappy and MotorHappy Garage app UX, stability, and load performance based on telemetry",
      "Engineered secure payment UI using Flutter BLoC with comprehensive unit and widget tests",
      "Assisted senior engineers in CI/CD pipeline automation and Google Play production rollouts",
    ],
    tech: ["Flutter", "Dart", "BLoC", "Riverpod", "RESTful APIs", "Unit Testing", "Google Play"],
  },
];

export const education = {
  degree: "B.Tech in Computer Science & Engineering",
  institution: "Gujarat Technological University",
  location: "Vadodara, Gujarat",
  period: "2019 – 2023",
  coursework: ["Data Structures & Algorithms", "Operating Systems", "Computer Networks", "Database Management Systems", "Software Engineering"],
};
