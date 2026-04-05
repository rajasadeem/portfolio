"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0.01,
      },
    );

    siteConfig.navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container-shell pt-4">
        <div
          className={cn(
            "glass-panel flex items-center justify-between rounded-full border px-4 py-3 transition-all duration-300 sm:px-5",
            scrolled
              ? "border-border/70 bg-card/88 shadow-[0_24px_70px_rgba(15,23,42,0.18)]"
              : "border-white/10 bg-card/62",
          )}
        >
          <Link href="#hero" className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 font-display text-sm font-bold text-white shadow-lg shadow-blue-500/20">
              {siteConfig.brand}
            </span>
            <div className="hidden sm:block">
              <p className="font-display text-sm font-semibold text-foreground">{siteConfig.name}</p>
              <p className="text-xs text-muted-foreground">{siteConfig.title}</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 rounded-full border border-border/70 bg-background/35 px-2 py-1 md:flex">
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  activeSection === item.id
                    ? "bg-primary text-primary-foreground shadow-lg shadow-blue-500/20"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
            <Button asChild variant="outline" className="border-border/70 bg-card/75">
              <a href={siteConfig.resumeHref} download>
                Download CV
              </a>
            </Button>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="border-border/70 bg-card/75">
                  <HiBars3 className="size-5" />
                  <span className="sr-only">Open navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-background/95">
                <SheetHeader>
                  <SheetTitle className="font-display text-xl text-foreground">Navigate</SheetTitle>
                </SheetHeader>
                <div className="flex flex-1 flex-col gap-3">
                  {siteConfig.navItems.map((item) => (
                    <SheetClose asChild key={item.id}>
                      <Link
                        href={item.href}
                        className="rounded-2xl border border-border/70 bg-card/70 px-4 py-3 text-base font-medium text-foreground transition hover:border-primary/30"
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))}
                </div>
                <div className="mt-6">
                  <SheetClose asChild>
                    <Button asChild className="w-full">
                      <a href={siteConfig.resumeHref} download>
                        Download CV
                      </a>
                    </Button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
