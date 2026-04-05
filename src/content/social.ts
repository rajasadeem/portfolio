import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { HiOutlineEnvelope } from "react-icons/hi2";
import type { SocialLink } from "@/types/content";

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/yourusername",
    label: "View GitHub profile",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/yourusername",
    label: "View LinkedIn profile",
    icon: FaLinkedinIn,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/yourusername",
    label: "View Instagram profile",
    icon: FaInstagram,
  },
  {
    name: "Facebook",
    href: "https://facebook.com/yourusername",
    label: "View Facebook profile",
    icon: FaFacebookF,
  },
  {
    name: "Twitter",
    href: "https://x.com/yourusername",
    label: "View X profile",
    icon: FaXTwitter,
  },
  {
    name: "Email",
    href: "mailto:hello@yourdomain.com",
    label: "Send an email",
    icon: HiOutlineEnvelope,
  },
];
