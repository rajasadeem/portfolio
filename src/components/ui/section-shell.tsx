import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionShellProps {
  id: string;
  className?: string;
  children: ReactNode;
}

export function SectionShell({ id, className, children }: SectionShellProps) {
  return (
    <section id={id} className={cn("scroll-mt-28 py-20 sm:py-24", className)}>
      <div className="container-shell">{children}</div>
    </section>
  );
}
