import { Cpu, GraduationCap, Code, ArrowUpRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "./section-heading";
import { FadeIn, StaggerContainer, HorizontalStaggerItem } from "./fade-in";

const services = [
  {
    icon: Cpu,
    img: "/img/pcb.jpg",
    alt: "Close-up of a green printed circuit board with surface-mounted chips",
    title: "VLSI Design Services",
    desc: "End-to-end semiconductor design — from spec to GDSII. Turnkey blocks or staffed teams that plug straight into your flow.",
    tags: ["RTL Design", "DV / UVM", "DFT", "Physical Design"],
  },
  {
    icon: GraduationCap,
    img: "/img/lab.jpg",
    alt: "Engineers working at a hardware lab bench",
    title: "VLSI Training",
    desc: "Industry-built programs that take engineers and graduates from fundamentals to job-ready on real EDA tools and live projects.",
    tags: ["RTL", "Verification", "DFT", "PD", "Placement track"],
  },
  {
    icon: Code,
    img: "/img/code.jpg",
    alt: "Source code displayed on a dark monitor",
    title: "Software Engineering",
    desc: "Custom software, automation and EDA tooling — internal flows, dashboards, and full-stack products built by engineers who know silicon.",
    tags: ["Automation", "Web Apps", "APIs", "Cloud", "Tooling"],
  },
];

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <FadeIn>
        <SectionHeading
          eyebrow="What we do"
          title="Three disciplines,"
          accent="one engineering team."
          description="Vidian pairs deep silicon expertise with modern software craft — so design, talent, and tooling come from a single partner."
        />
      </FadeIn>

      <StaggerContainer className="mt-14 grid gap-6 md:grid-cols-3">
        {services.map((s) => (
          <HorizontalStaggerItem key={s.title} className="h-full">
            <Card
              className="group relative overflow-hidden border-border bg-card pt-0 shadow-xl shadow-primary/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 h-full flex flex-col"
            >
              <div className="relative overflow-hidden">
                <img
                  src={s.img}
                  alt={s.alt}
                  width={800}
                  height={420}
                  className="aspect-[16/9] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <span className="grid size-11 place-items-center rounded-xl bg-primary/12 text-primary ring-1 ring-primary/25 shadow-sm transition-transform group-hover:scale-110">
                  <s.icon className="size-5" />
                </span>
                <CardTitle className="mt-4 flex items-center justify-between font-display text-xl">
                  {s.title}
                  <ArrowUpRight className="size-5 text-muted-foreground transition-all group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1" />
                </CardTitle>
                <CardDescription className="mt-2 text-sm leading-relaxed">
                  {s.desc}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2 mt-auto">
                {s.tags.map((t) => (
                  <Badge
                    key={t}
                    variant="secondary"
                    className="border border-border bg-secondary/60 font-mono text-[11px] font-normal text-muted-foreground transition-colors group-hover:bg-primary/10 group-hover:text-primary"
                  >
                    {t}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          </HorizontalStaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
