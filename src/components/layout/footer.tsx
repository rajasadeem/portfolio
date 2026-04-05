import Link from "next/link";
import { footerContent } from "@/content/sections";
import { socialLinks } from "@/content/social";
import { siteConfig } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-border/70 py-10">
      <div className="container-shell flex flex-col gap-8">
        <div className="flex flex-col gap-6 rounded-[2rem] border border-border/70 bg-card/65 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.12)] sm:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <p className="font-display text-2xl font-semibold text-foreground">{siteConfig.name}</p>
              <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
                {footerContent.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
                    aria-label={item.label}
                    className="flex size-11 items-center justify-center rounded-full border border-border/70 bg-background/40 text-muted-foreground transition hover:-translate-y-0.5 hover:border-primary/30 hover:text-foreground"
                  >
                    <Icon className="size-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-3 border-t border-border/70 pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-4">
              {siteConfig.navItems.map((item) => (
                <Link key={item.id} href={item.href} className="transition hover:text-foreground">
                  {item.label}
                </Link>
              ))}
            </div>
            <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
