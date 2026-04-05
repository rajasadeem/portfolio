import type { ExperienceItem } from "@/types/content";

export const experienceItems: ExperienceItem[] = [
  {
    company: "Apex Digital Systems",
    role: "Lead Full Stack Engineer",
    startDate: "Jan 2023",
    endDate: "Present",
    location: "Remote",
    description:
      "Leading architecture and delivery for modern SaaS products, internal platforms, and AI-assisted customer workflows.",
    achievements: [
      "Directed the rebuild of a multi-tenant product platform using Next.js, Node.js, and MongoDB, improving release velocity and user retention.",
      "Introduced CI/CD pipelines, containerized environments, and observability standards that reduced deployment friction and production regressions.",
      "Built AI-powered support and operations automations that removed repetitive manual processing across multiple teams.",
    ],
    technologies: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Docker", "AWS"],
  },
  {
    company: "Northstar Product Studio",
    role: "Senior MERN Developer",
    startDate: "May 2020",
    endDate: "Dec 2022",
    location: "Hybrid",
    description:
      "Delivered full lifecycle product engineering for startups needing fast execution with senior-level technical ownership.",
    achievements: [
      "Designed reusable frontend systems and API architecture across several funded startup products in healthcare, logistics, and B2B SaaS.",
      "Shipped multiple admin dashboards, partner portals, and user-facing experiences with a strong focus on responsiveness and maintainability.",
      "Mentored developers on architecture decisions, code quality, and production readiness as teams scaled.",
    ],
    technologies: ["React", "Express", "MongoDB", "Tailwind CSS", "Redis", "GraphQL"],
  },
  {
    company: "Orbit Automation Lab",
    role: "Automation & Platform Engineer",
    startDate: "Aug 2017",
    endDate: "Apr 2020",
    location: "Remote",
    description:
      "Built workflow automation products and internal tooling bridging traditional engineering with no-code operations systems.",
    achievements: [
      "Automated lead routing, reporting, and onboarding flows using API integrations and low-code orchestration tools.",
      "Created lightweight platforms that let non-technical teams manage processes without developer intervention.",
      "Established deployment templates and reusable backend services for rapid new-project launches.",
    ],
    technologies: ["Node.js", "Python", "Zapier", "Make", "PostgreSQL", "Nginx"],
  },
];
