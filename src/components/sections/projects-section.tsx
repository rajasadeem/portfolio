"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa6";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal, Stagger } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { projectItems } from "@/content/projects";
import { projectsSectionIntro } from "@/content/sections";
import { fadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function ProjectsSection() {
  return (
    <SectionShell id="projects">
      <Reveal>
        <SectionHeading
          eyebrow={projectsSectionIntro.eyebrow}
          title={projectsSectionIntro.title}
          description={projectsSectionIntro.description}
        />
      </Reveal>

      <Stagger className="mt-12 grid gap-6 lg:grid-cols-2">
        {projectItems.map((project) => (
          <motion.article
            key={project.slug}
            variants={fadeUp}
            className={cn(project.featured && "lg:col-span-2")}
          >
            <Card className="group h-full overflow-hidden border-border/70 bg-card/84">
              <div
                className={cn(
                  "grid h-full",
                  project.featured ? "xl:grid-cols-[1.08fr_0.92fr]" : "",
                )}
              >
                <div className="relative min-h-[260px] overflow-hidden border-b border-border/70 xl:border-b-0 xl:border-r">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/8 via-transparent to-indigo-500/10" />
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.03]"
                    sizes={project.featured ? "(min-width: 1280px) 52vw, 100vw" : "(min-width: 1024px) 48vw, 100vw"}
                  />
                </div>

                <div className="flex flex-col">
                  <CardHeader className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.category.map((tag) => (
                        <Badge
                          key={tag}
                          variant={tag === "Featured" ? "accent" : "secondary"}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="space-y-3">
                      <CardTitle className="text-2xl">{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                      <p className="text-sm leading-7 text-muted-foreground">{project.summary}</p>
                    </div>
                  </CardHeader>
                  <CardContent className="mt-auto space-y-6">
                    <div className="flex flex-wrap gap-3">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {(project.githubUrl || project.liveUrl) ? (
                      <div className="flex flex-wrap gap-3">
                        {project.githubUrl ? (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/40 px-4 py-2 text-sm font-medium text-foreground transition hover:border-primary/30 hover:text-primary"
                          >
                            <FaGithub className="size-4" />
                            GitHub
                          </a>
                        ) : null}
                        {project.liveUrl ? (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/40 px-4 py-2 text-sm font-medium text-foreground transition hover:border-primary/30 hover:text-primary"
                          >
                            <HiArrowTopRightOnSquare className="size-4" />
                            Live Preview
                          </a>
                        ) : null}
                      </div>
                    ) : null}
                  </CardContent>
                </div>
              </div>
            </Card>
          </motion.article>
        ))}
      </Stagger>
    </SectionShell>
  );
}
