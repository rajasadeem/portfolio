import type { SiteConfig } from "@/types/content";

export const siteConfig: SiteConfig = {
  name: "Raja Sadeem",
  brand: "RS",
  title: "Senior Full Stack Developer",
  description:
    "Senior full stack developer specializing in MERN Stack, DevOps, AI automation, and no-code product delivery.",
  email: "rajasadeem96@gmail.com",
  location: "Remote · Available worldwide",
  timezone: "UTC+05:00",
  resumeHref: "/cv.pdf",
  navItems: [
    { id: "hero", label: "Home", href: "#hero" },
    { id: "skills", label: "Skills", href: "#skills" },
    { id: "experience", label: "Experience", href: "#experience" },
    { id: "projects", label: "Projects", href: "#projects" },
    { id: "contact", label: "Contact", href: "#contact" },
  ],
};

