import type { IconType } from "react-icons";

export interface NavItem {
  id: string;
  label: string;
  href: `#${string}`;
}

export interface SiteConfig {
  name: string;
  brand: string;
  title: string;
  description: string;
  email: string;
  location: string;
  timezone: string;
  resumeHref: string;
  navItems: NavItem[];
}

export interface HeroBadge {
  label: string;
  icon: IconType;
}

export interface HeroStat {
  value: string;
  label: string;
}

export interface HeroContent {
  eyebrow: string;
  title: string;
  summary: string;
  description: string;
  availability: string;
  panelEyebrow: string;
  panelTitle: string;
  badges: HeroBadge[];
  focusAreas: string[];
  stats: HeroStat[];
}

export interface SectionIntro {
  eyebrow: string;
  title: string;
  description: string;
}

export interface ContactHighlight {
  label: string;
  value: string;
  icon: IconType;
}

export interface ContactContent {
  section: SectionIntro;
  cardBadge: string;
  cardTitle: string;
  cardDescription: string;
  formTitle: string;
  formDescription: string;
  highlights: ContactHighlight[];
}

export interface SkillItem {
  name: string;
  icon: IconType;
  label?: string;
  proficiency?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  items: SkillItem[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface ProjectItem {
  slug: string;
  title: string;
  description: string;
  summary: string;
  techStack: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  category: string[];
  featured?: boolean;
}

export interface SocialLink {
  name: string;
  href: string;
  label: string;
  icon: IconType;
}
