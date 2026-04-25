import {
  FaGithub,
    FaInstagram,
  FaLinkedinIn,
    FaXTwitter,
      FaFacebookF,
} from "react-icons/fa6";
import { HiOutlineEnvelope } from "react-icons/hi2";
import type { SocialLink } from "@/types/content";

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/rajasadeem",
    label: "View GitHub profile",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/raja-sadeem/",
    label: "View LinkedIn profile",
    icon: FaLinkedinIn,
  },
    {
    name: "Instagram",
    href: "https://www.instagram.com/raja.sadeem/",
    label: "View Instagram profile",
    icon: FaInstagram,
  },
    {
    name: "Facebook",
    href: "https://www.facebook.com/raja.sadeem.dev",
    label: "View Facebook profile",
    icon: FaFacebookF,
  },
  {
    name: "Twitter",
    href: "https://x.com/raja_sadeem",
    label: "View X profile",
    icon: FaXTwitter,
  },
  {
    name: "Email",
    href: "mailto:rajasadeem96@gmail.com",
    label: "Send an email",
    icon: HiOutlineEnvelope,
  },
];
