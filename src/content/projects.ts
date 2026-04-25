import type { ProjectItem } from "@/types/content";

export const projectItems: ProjectItem[] = [
  {
    slug: "doc-africa",
    title: "Doc Africa",
    description: "AI-powered healthcare consultation platform with structured symptom capture and secure API workflows.",
    summary:
      "Built backend APIs and data structures that support an AI-assisted medical consultation flow, helping the platform collect symptoms and deliver structured reports for follow-up care.",
    techStack: ["Express.js", "PostgreSQL", "React Native", "TypeScript"],
    image: "/projects/atlas-commerce.svg",
    category: ["Featured", "Healthcare", "AI Workflow"],
    featured: true,
  },
  {
    slug: "focal",
    title: "Focal",
    description: "Integration-focused backend service for ERP workflows and third-party platform synchronization.",
    summary:
      "Developed a dedicated Node.js and NestJS microservice for a Laravel ERP ecosystem, connecting platforms like Gusto, ShipHero, WooCommerce, and eBay through scheduled jobs and background workers.",
    techStack: ["Node.js", "NestJS", "MySQL", "TypeScript", "Redis", "BullMQ", "AWS"],
    image: "/projects/opspilot-ai.svg",
    category: ["SaaS", "Integrations", "Backend"],
  },
  {
    slug: "parks-for-pups",
    title: "ParksForPups",
    description: "Pet park booking SaaS with subscriptions, admin workflows, and customer-facing reservation flows.",
    summary:
      "Delivered core booking and payment functionality for a pet services platform, including Stripe-powered subscriptions, admin capabilities, and a polished React-based user experience.",
    techStack: ["Express.js", "PostgreSQL", "React.js", "TypeScript", "Stripe"],
    image: "/projects/launchpad-workflows.svg",
    category: ["SaaS", "Payments", "Full Stack"],
  },
];
