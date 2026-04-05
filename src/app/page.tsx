import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ContactSection } from "@/components/sections/contact-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-0 h-[30rem] w-[30rem] rounded-full bg-cyan-400/16 blur-3xl" />
        <div className="absolute right-[-12%] top-[12rem] h-[28rem] w-[28rem] rounded-full bg-indigo-500/12 blur-3xl" />
        <div className="absolute bottom-[-10rem] left-[20%] h-[20rem] w-[20rem] rounded-full bg-emerald-400/10 blur-3xl" />
      </div>

      <Header />

      <main>
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
