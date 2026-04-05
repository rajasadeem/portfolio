import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={cn("max-w-2xl space-y-5", centered && "mx-auto text-center")}>
      <Badge variant="accent" className={cn("w-fit", centered && "mx-auto")}>
        {eyebrow}
      </Badge>
      <div className="space-y-4">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h2>
        <p className="text-base leading-7 text-muted-foreground sm:text-lg">{description}</p>
      </div>
    </div>
  );
}
