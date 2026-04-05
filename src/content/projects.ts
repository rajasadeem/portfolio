import type { ProjectItem } from "@/types/content";

export const projectItems: ProjectItem[] = [
  {
    slug: "atlas-commerce-cloud",
    title: "Atlas Commerce Cloud",
    description: "Enterprise storefront and operations suite for a scaling DTC brand.",
    summary:
      "A premium multi-surface commerce platform with customer storefronts, role-based operations dashboards, automation hooks, and deployment pipelines tuned for rapid iteration.",
    techStack: ["Next.js 15", "TypeScript", "Node.js", "MongoDB", "Redis", "AWS"],
    image: "/projects/atlas-commerce.svg",
    githubUrl: "https://github.com/yourusername/atlas-commerce-cloud",
    liveUrl: "https://example.com/atlas-commerce-cloud",
    category: ["Featured", "Full Stack", "E-commerce"],
    featured: true,
  },
  {
    slug: "ops-pilot-ai",
    title: "OpsPilot AI",
    description: "AI automation workspace for support, CRM syncing, and operations triage.",
    summary:
      "A workflow system that combines LLM-powered classification, human review checkpoints, and back-office automations to reduce response times and repetitive operations load.",
    techStack: ["Next.js", "OpenAI", "Node.js", "PostgreSQL", "Docker"],
    image: "/projects/opspilot-ai.svg",
    githubUrl: "https://github.com/yourusername/opspilot-ai",
    liveUrl: "https://example.com/opspilot-ai",
    category: ["AI Automation", "Internal Tools"],
  },
  {
    slug: "launchpad-workflows",
    title: "LaunchPad Workflows",
    description: "Low-code client operations hub for fast-moving service teams.",
    summary:
      "A hybrid no-code and custom-code delivery system connecting forms, approvals, CRMs, and reporting into a coherent client experience.",
    techStack: ["Retool", "Make", "Node.js", "PostgreSQL", "Vercel"],
    image: "/projects/launchpad-workflows.svg",
    githubUrl: "https://github.com/yourusername/launchpad-workflows",
    liveUrl: "https://example.com/launchpad-workflows",
    category: ["No-Code", "Automation"],
  },
  {
    slug: "signal-devops-console",
    title: "Signal DevOps Console",
    description: "Deployment observability dashboard for engineering and platform teams.",
    summary:
      "A monitoring and release management interface for surfacing environment health, deployment confidence, and incident context in one operational layer.",
    techStack: ["React", "TypeScript", "Docker", "GitHub Actions", "AWS"],
    image: "/projects/signal-devops.svg",
    githubUrl: "https://github.com/yourusername/signal-devops-console",
    liveUrl: "https://example.com/signal-devops-console",
    category: ["DevOps", "Platform"],
  },
];
