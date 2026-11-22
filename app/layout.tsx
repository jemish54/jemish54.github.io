import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jemish54.github.io"),
  title: "Jemish Mavani — Full-Stack Mobile & AI Systems Architect",
  description:
    "Portfolio of Jemish Mavani (Solenyx Studio). Engineering production monorepos, low-latency Bun/Elysia backends, grounded AI RAG engines, and 60 FPS Flutter mobile applications.",
  keywords: [
    "Jemish Mavani",
    "Solenyx Studio",
    "Full-Stack Developer",
    "Mobile Application Architect",
    "Flutter Specialist",
    "Bun and Elysia",
    "PostgreSQL Drizzle",
    "AI Orchestration",
    "RAG Knowledge Engine",
    "Next.js 15",
  ],
  authors: [{ name: "Jemish Mavani", url: "https://jemish54.github.io" }],
  openGraph: {
    title: "Jemish Mavani — Full-Stack Mobile & AI Systems Architect",
    description:
      "Engineering production monorepos, low-latency Bun/Elysia backends, grounded AI RAG engines, and 60 FPS Flutter mobile applications.",
    url: "https://jemish54.github.io",
    siteName: "Jemish Mavani Portfolio",
    images: [
      {
        url: "/assets/astrosight-banner.png",
        width: 1200,
        height: 630,
        alt: "Jemish Mavani Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jemish Mavani — Full-Stack Mobile & AI Systems Architect",
    description:
      "Engineering production monorepos, low-latency Bun/Elysia backends, grounded AI RAG engines, and 60 FPS Flutter mobile applications.",
    images: ["/assets/astrosight-banner.png"],
  },
  icons: {
    icon: "/assets/pfp.jpg",
    apple: "/assets/pfp.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500/20 selection:text-cyan-300">
        {children}
      </body>
    </html>
  );
}
