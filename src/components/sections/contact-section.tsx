import { ContactForm } from "@/components/sections/contact-form";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { contactContent } from "@/content/sections";

export function ContactSection() {
  return (
    <SectionShell id="contact">
      <div className="grid gap-6 xl:grid-cols-[0.88fr_1.12fr]">
        <Reveal>
          <div className="space-y-6">
            <SectionHeading
              eyebrow={contactContent.section.eyebrow}
              title={contactContent.section.title}
              description={contactContent.section.description}
            />
            <Card className="overflow-hidden border-border/70 bg-card/82">
              <CardHeader>
                <Badge variant="accent">{contactContent.cardBadge}</Badge>
                <CardTitle>{contactContent.cardTitle}</CardTitle>
                <CardDescription>
                  {contactContent.cardDescription}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactContent.highlights.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-4 rounded-[1.4rem] border border-border/70 bg-background/35 px-4 py-4"
                    >
                      <div className="flex size-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/14 via-blue-500/12 to-indigo-500/14 text-primary">
                        <Icon className="size-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">{item.label}</p>
                        <p className="text-sm text-muted-foreground">{item.value}</p>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <Card className="border-border/70 bg-card/84">
            <CardHeader>
              <CardTitle className="text-2xl">{contactContent.formTitle}</CardTitle>
              <CardDescription>{contactContent.formDescription}</CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </SectionShell>
  );
}
