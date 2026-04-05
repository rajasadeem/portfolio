import {
  HiOutlineCloud,
  HiOutlineCpuChip,
  HiOutlineSparkles,
  HiOutlineSquares2X2,
} from "react-icons/hi2";
import type { HeroContent } from "@/types/content";

export const heroContent: HeroContent = {
  eyebrow: "Senior Engineer · Product Builder · Technical Partner",
  title: "Full stack systems that scale cleanly, ship fast, and feel premium.",
  summary:
    "I design and build polished digital products across the MERN stack, DevOps pipelines, AI-powered workflows, and no-code delivery ecosystems.",
  description:
    "From product strategy to production infrastructure, I help teams launch resilient platforms with thoughtful architecture, elegant user experiences, and automation that compounds operational leverage.",
  availability: "Open to select freelance, consulting, and product partnership work.",
  panelEyebrow: "Current Focus",
  panelTitle: "Systems, automation, and elegant product delivery",
  badges: [
    { label: "MERN Stack", icon: HiOutlineSquares2X2 },
    { label: "DevOps", icon: HiOutlineCloud },
    { label: "AI Automation", icon: HiOutlineSparkles },
    { label: "No-Code Apps", icon: HiOutlineCpuChip },
  ],
  focusAreas: [
    "Production-grade React and Next.js applications with scalable frontends.",
    "Backend systems, APIs, and data flows built for maintainability and growth.",
    "Cloud deployments, CI/CD, observability, and platform reliability.",
    "AI-powered automations and low-code systems that reduce manual work.",
  ],
  stats: [
    { value: "8+", label: "Years delivering full stack products" },
    { value: "25+", label: "End-to-end launches across web and automation" },
    { value: "99.9%", label: "Mindset for resilient delivery and uptime" },
  ],
};
