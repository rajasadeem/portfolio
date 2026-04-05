"use client";

import { motion } from "framer-motion";
import { HiArrowDownTray, HiArrowLongRight } from "react-icons/hi2";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionShell } from "@/components/ui/section-shell";
import { heroContent } from "@/content/hero";
import { siteConfig } from "@/content/site";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function HeroSection() {
  return (
    <SectionShell id="hero" className="pt-32 sm:pt-36">
      <div className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-card/70 px-6 py-10 shadow-[0_30px_100px_rgba(15,23,42,0.18)] sm:px-10 sm:py-14">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_28%),radial-gradient(circle_at_85%_15%,rgba(99,102,241,0.16),transparent_22%),radial-gradient(circle_at_50%_100%,rgba(16,185,129,0.12),transparent_30%)]" />
        <div className="relative grid items-center gap-12 lg:grid-cols-[1.12fr_0.88fr]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.div variants={fadeUp} className="space-y-5">
              <Badge>{heroContent.eyebrow}</Badge>
              <div className="space-y-5">
                <h1 className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl lg:leading-[1.05]">
                  {siteConfig.name}
                  <span className="mt-3 block bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                    {heroContent.title}
                  </span>
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                  {heroContent.summary}
                </p>
                <p className="max-w-2xl text-base leading-7 text-muted-foreground">
                  {heroContent.description}
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href="#projects">
                  View Projects
                  <HiArrowLongRight className="size-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-card/75">
                <a href="#contact">Contact Me</a>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <a href={siteConfig.resumeHref} download>
                  Download CV
                  <HiArrowDownTray className="size-4" />
                </a>
              </Button>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              {heroContent.badges.map((item) => {
                const Icon = item.icon;
                return (
                  <Badge key={item.label} variant="secondary" className="px-4 py-2 text-sm">
                    <Icon className="size-4" />
                    {item.label}
                  </Badge>
                );
              })}
            </motion.div>

            <motion.div variants={fadeUp} className="grid gap-4 sm:grid-cols-3">
              {heroContent.stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.5rem] border border-border/70 bg-background/40 p-5"
                >
                  <p className="font-display text-2xl font-semibold text-foreground">{item.value}</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-emerald-400/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 px-6 py-6 text-slate-100 shadow-[0_30px_100px_rgba(2,6,23,0.45)]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-cyan-300/80">
                    {heroContent.panelEyebrow}
                  </p>
                  <p className="mt-2 font-display text-2xl font-semibold">
                    {heroContent.panelTitle}
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <span className="size-3 rounded-full bg-cyan-400" />
                  <span className="size-3 rounded-full bg-blue-400" />
                  <span className="size-3 rounded-full bg-emerald-400" />
                </div>
              </div>

              <div className="mt-8 space-y-4">
                {heroContent.focusAreas.map((item, index) => (
                  <div
                    key={item}
                    className="rounded-[1.35rem] border border-slate-800 bg-white/5 p-4 transition hover:border-cyan-400/30 hover:bg-white/[0.07]"
                  >
                    <div className="mb-3 flex items-center gap-3">
                      <span className="flex size-8 items-center justify-center rounded-full bg-white/8 text-sm font-semibold text-cyan-300">
                        0{index + 1}
                      </span>
                      <div className="h-px flex-1 bg-gradient-to-r from-cyan-400/60 to-transparent" />
                    </div>
                    <p className="text-sm leading-6 text-slate-300">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[1.35rem] border border-cyan-400/15 bg-cyan-400/8 p-4">
                <p className="text-sm font-medium text-cyan-200">{heroContent.availability}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionShell>
  );
}
