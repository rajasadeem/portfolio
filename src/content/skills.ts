import {
  FaAws,
  FaCodeBranch,
  FaCubesStacked,
  FaDatabase,
  FaDocker,
  FaFigma,
  FaGears,
  FaGitAlt,
  FaNodeJs,
  FaPython,
  FaReact,
  FaRobot,
  FaServer,
  FaWandMagicSparkles,
} from "react-icons/fa6";
import {
  HiOutlineBeaker,
  HiOutlineBolt,
  HiOutlineCircleStack,
  HiOutlineCloud,
  HiOutlineCloudArrowUp,
  HiOutlineCodeBracket,
  HiOutlineCodeBracketSquare,
  HiOutlineCommandLine,
  HiOutlineCubeTransparent,
  HiOutlineGlobeAlt,
  HiOutlineRocketLaunch,
  HiOutlineServerStack,
  HiOutlineSparkles,
} from "react-icons/hi2";
import type { SkillCategory } from "@/types/content";

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    description: "High-performance interfaces with strong UX, accessibility, and design systems.",
    items: [
      { name: "React", icon: FaReact, proficiency: "Advanced" },
      { name: "Next.js", icon: HiOutlineRocketLaunch, proficiency: "Advanced" },
      { name: "TypeScript", icon: HiOutlineCodeBracket, proficiency: "Advanced" },
      { name: "Tailwind CSS", icon: FaWandMagicSparkles, proficiency: "Advanced" },
      { name: "Component Architecture", icon: HiOutlineCubeTransparent, proficiency: "Expert" },
    ],
  },
  {
    title: "Backend",
    description: "Service architecture, APIs, business logic, and platform integrations.",
    items: [
      { name: "Node.js", icon: FaNodeJs, proficiency: "Advanced" },
      { name: "Express / API Layers", icon: HiOutlineServerStack, proficiency: "Advanced" },
      { name: "REST API Design", icon: HiOutlineBeaker, proficiency: "Advanced" },
      { name: "System Architecture", icon: FaServer, proficiency: "Advanced" },
      { name: "Python Services", icon: FaPython, proficiency: "Advanced" },
    ],
  },
  {
    title: "Databases",
    description: "Data modeling for transactional, analytical, and real-time workloads.",
    items: [
      { name: "MongoDB", icon: HiOutlineCircleStack, proficiency: "Expert" },
      { name: "PostgreSQL", icon: FaDatabase, proficiency: "Advanced" },
      { name: "MySQL", icon: HiOutlineServerStack, proficiency: "Advanced" },
      { name: "Redis / Caching", icon: FaCubesStacked, proficiency: "Advanced" },
    ],
  },
  {
    title: "DevOps / Cloud",
    description: "Automated delivery pipelines and infrastructure with strong operational hygiene.",
    items: [
      { name: "Docker", icon: FaDocker, proficiency: "Advanced" },
      { name: "AWS", icon: FaAws, proficiency: "Advanced" },
      { name: "CI / CD", icon: HiOutlineCloudArrowUp, proficiency: "Advanced" },
      { name: "GitHub Actions", icon: FaCodeBranch, proficiency: "Advanced" },
      { name: "Infrastructure", icon: HiOutlineCloud, proficiency: "Advanced" },
      { name: "Observability", icon: FaServer, proficiency: "Advanced" },
    ],
  },
  {
    title: "AI / Automation",
    description: "AI-assisted workflows and operational automation that create leverage.",
    items: [
      { name: "OpenAI Workflows", icon: FaRobot, proficiency: "Advanced" },
      { name: "LLM Experience Design", icon: HiOutlineSparkles, proficiency: "Advanced" },
      { name: "Automation Logic", icon: FaGears, proficiency: "Advanced" },
      { name: "Process Optimization", icon: HiOutlineBolt, proficiency: "Advanced" },
    ],
  },
  {
    title: "No-Code / Low-Code",
    description: "Rapid validation systems and internal tools that move ideas into production faster.",
    items: [
      { name: "Figma to Build Workflow", icon: FaFigma, proficiency: "Advanced" },
      { name: "Internal Tooling", icon: HiOutlineCommandLine, proficiency: "Advanced" },
      { name: "Low-Code Systems", icon: HiOutlineCubeTransparent, proficiency: "Advanced" },
      { name: "Web Delivery Platforms", icon: HiOutlineGlobeAlt, proficiency: "Advanced" },
      { name: "Versioned Delivery", icon: FaGitAlt, proficiency: "Advanced" },
      { name: "Custom Integrations", icon: HiOutlineCodeBracketSquare, proficiency: "Advanced" },
    ],
  },
];
