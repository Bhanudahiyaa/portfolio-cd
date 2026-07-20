import type { Project } from "../types/projects"

const GITHUB_FAVICON_URL =
  "https://github.githubassets.com/favicons/favicon.png"

export const PROJECTS: Project[] = [
  {
    id: "luxllm",
    title: "LuxLLM",
    link: "https://github.com/Bhanudahiyaa/LuxLLMProd",
    skills: ["TypeScript", "Supabase", "PostgreSQL", "Vercel"],
    description:
      "Built a React and Vercel serverless chatbot embed platform that lets teams create customizable AI assistants for websites, backed by Supabase PostgreSQL with row level security, dynamic embed scripts, public chat APIs, conversation storage, analytics, and OpenRouter powered responses.",
    logo: GITHUB_FAVICON_URL,
    isExpanded: true,
  },
  {
    id: "livekit-ingress-pipeline",
    title: "LiveKit Ingress Pipeline",
    link: "https://github.com/Bhanudahiyaa/CUA-LiveKit-Ingress",
    skills: ["Python", "LiveKit", "WebRTC", "RTMP", "WHIP"],
    description:
      "Built a Python LiveKit integration for bringing external RTMP and WHIP media streams into realtime AI and voice agent workflows, with stream checks, Docker based local setup, configuration handling, and validation scripts around the ingestion flow.",
    logo: GITHUB_FAVICON_URL,
  },
  {
    id: "acp-conversion-layer",
    title: "ACP Conversion Layer",
    link: "https://github.com/Bhanudahiyaa/DB-ACP-Conversion",
    skills: ["Python", "Relational Databases", "ACP"],
    description:
      "Built a Python conversion layer that turns database schemas and records into ACP compatible structures for agent communication, using retailer and supplier agents, SQLite data, runtime verification, and tests to keep protocol exchange reliable.",
    logo: GITHUB_FAVICON_URL,
  },
]
