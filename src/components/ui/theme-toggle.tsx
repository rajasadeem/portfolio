"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

function SunIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="block size-5 overflow-visible text-amber-500"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4.25" />
      <path d="M12 2.5v2.25" />
      <path d="M12 19.25v2.25" />
      <path d="M4.93 4.93l1.59 1.59" />
      <path d="M17.48 17.48l1.59 1.59" />
      <path d="M2.5 12h2.25" />
      <path d="M19.25 12h2.25" />
      <path d="M4.93 19.07l1.59-1.59" />
      <path d="M17.48 6.52l1.59-1.59" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="block size-5 overflow-visible text-indigo-500 dark:text-indigo-300"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.5 14.2A8.7 8.7 0 1 1 9.8 3.5a7.2 7.2 0 0 0 10.7 10.7Z" />
    </svg>
  );
}

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <Button
      variant="outline"
      size="icon"
      type="button"
      className="border-border/70 bg-card/70 text-foreground cursor-pointer"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span className="flex items-center justify-center">
        {isDark ? <SunIcon /> : <MoonIcon />}
      </span>
    </Button>
  );
}
