import {
  HiOutlineEnvelope,
  HiOutlineGlobeAlt,
  HiOutlineMapPin,
} from "react-icons/hi2";
import { siteConfig } from "@/content/site";
import type { ContactContent, SectionIntro } from "@/types/content";

export const skillsSectionIntro: SectionIntro = {
  eyebrow: "Capabilities",
  title: "A senior-level toolkit across product, platform, and automation.",
  description:
    "The stack below is fully editable in dedicated content files, so you can tune your portfolio without touching component code.",
};

export const experienceSectionIntro: SectionIntro = {
  eyebrow: "Experience",
  title: "Hands-on leadership across shipped products, infrastructure, and automation.",
  description:
    "A portfolio-ready experience timeline with placeholder entries you can swap out quickly from the content layer.",
};

export const projectsSectionIntro: SectionIntro = {
  eyebrow: "Selected Work",
  title: "Projects shaped to feel like senior-level product and platform work.",
  description:
    "Each project is driven from a content file, with public images, links, tags, and summaries you can replace without touching the layout.",
};

export const contactContent: ContactContent = {
  section: {
    eyebrow: "Contact",
    title: "Let’s build something ambitious and operationally sharp.",
    description:
      "The form submits through a real Next.js backend route with SMTP delivery and attachment support. Update the environment variables and your inbox is ready.",
  },
  cardBadge: "Direct contact details",
  cardTitle: "Fast-moving collaboration, clean communication.",
  cardDescription:
    "Use this section for client work, consulting, product builds, platform upgrades, or AI automation engagements.",
  formTitle: "Start the conversation",
  formDescription:
    "Add your SMTP credentials in the environment file, then this form will send directly to your inbox.",
  highlights: [
    {
      icon: HiOutlineEnvelope,
      label: "Email",
      value: siteConfig.email,
    },
    {
      icon: HiOutlineMapPin,
      label: "Location",
      value: siteConfig.location,
    },
    {
      icon: HiOutlineGlobeAlt,
      label: "Timezone",
      value: siteConfig.timezone,
    },
  ],
};

export const footerContent = {
  description:
    "Senior full stack developer crafting premium product experiences across MERN, DevOps, AI automation, and no-code systems.",
};
