"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal, Stagger } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { experienceItems } from "@/content/experience";
import { experienceSectionIntro } from "@/content/sections";
import { fadeUp } from "@/lib/motion";

export function ExperienceSection() {
  return (
    <SectionShell id="experience" className="relative">
      <Reveal>
        <SectionHeading
          eyebrow={experienceSectionIntro.eyebrow}
          title={experienceSectionIntro.title}
          description={experienceSectionIntro.description}
        />
      </Reveal>

      <Stagger className="relative mt-12 space-y-6 before:absolute before:left-[17px] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-gradient-to-b before:from-cyan-500/60 before:via-blue-500/20 before:to-transparent sm:before:left-6">
        {experienceItems.map((item, index) => (
          <motion.div key={`${item.company}-${item.role}`} variants={fadeUp} className="relative pl-12 sm:pl-16">
            <div className="absolute left-0 top-8 flex size-9 items-center justify-center rounded-full border border-cyan-500/30 bg-background text-sm font-semibold text-primary shadow-lg shadow-cyan-500/10 sm:size-12">
              {index + 1}
            </div>
            <Card className="border-border/70 bg-card/82">
              <CardHeader className="gap-4 md:flex-row md:items-start md:justify-between">
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <CardTitle className="text-2xl">{item.role}</CardTitle>
                    <Badge variant="secondary">{item.company}</Badge>
                  </div>
                  <CardDescription className="max-w-2xl">{item.description}</CardDescription>
                </div>
                <div className="rounded-[1.2rem] border border-border/70 bg-background/40 px-4 py-3 text-sm text-muted-foreground">
                  <p>{item.startDate} - {item.endDate}</p>
                  <p className="mt-1">{item.location}</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-3">
                  {item.achievements.map((achievement) => (
                    <div
                      key={achievement}
                      className="rounded-[1.25rem] border border-border/70 bg-background/35 px-4 py-3 text-sm leading-6 text-muted-foreground"
                    >
                      {achievement}
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  {item.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Stagger>
    </SectionShell>
  );
}
