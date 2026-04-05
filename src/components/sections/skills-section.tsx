"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal, Stagger } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { skillsSectionIntro } from "@/content/sections";
import { skillCategories } from "@/content/skills";
import { fadeUp } from "@/lib/motion";

export function SkillsSection() {
  return (
    <SectionShell id="skills">
      <Reveal>
        <SectionHeading
          eyebrow={skillsSectionIntro.eyebrow}
          title={skillsSectionIntro.title}
          description={skillsSectionIntro.description}
        />
      </Reveal>

      <Stagger className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {skillCategories.map((category) => (
          <motion.div key={category.title} variants={fadeUp}>
            <Card className="group h-full border-border/70 bg-card/80 transition duration-300 hover:-translate-y-1 hover:border-primary/25">
              <CardHeader>
                <CardTitle>{category.title}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {category.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.name}
                      className="flex items-center justify-between rounded-[1.25rem] border border-border/70 bg-background/35 px-4 py-3 transition group-hover:border-border/80"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex size-10 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/14 via-blue-500/12 to-indigo-500/14 text-primary">
                          <Icon className="size-[18px]" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-foreground">{item.name}</p>
                          {item.label ? (
                            <p className="text-xs text-muted-foreground">{item.label}</p>
                          ) : null}
                        </div>
                      </div>
                      {item.proficiency ? (
                        <Badge variant="secondary" className="shrink-0">
                          {item.proficiency}
                        </Badge>
                      ) : null}
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Stagger>
    </SectionShell>
  );
}
