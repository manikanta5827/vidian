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

const services = [
  {
    icon: Cpu,
    img: "/img/pcb.jpg",
    alt: "Close-up of a green printed circuit board with surface-mounted chips",
    title: "VLSI Design Services",
    desc: "End-to-end semiconductor design — from spec to GDSII. Turnkey blocks or staffed teams that plug straight into your flow.",
    tags: ["RTL Design", "DV / UVM", "DFT", "Physical Design", "STA"],
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
      <SectionHeading
        eyebrow="What we do"
        title="Three disciplines,"
        accent="one engineering team."
        description="Vidian pairs deep silicon expertise with modern software craft — so design, talent, and tooling come from a single partner."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {services.map((s) => (
          <Card
            key={s.title}
            className="group relative overflow-hidden border-border bg-card/60 transition-colors hover:border-primary/40"
          >
            <div className="relative overflow-hidden">
              <img
                src={s.img}
                alt={s.alt}
                width={800}
                height={420}
                className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
            </div>
            <CardHeader>
              <span className="grid size-11 place-items-center rounded-xl bg-primary/12 text-primary ring-1 ring-primary/25">
                <s.icon className="size-5" />
              </span>
              <CardTitle className="mt-4 flex items-center justify-between font-display text-xl">
                {s.title}
                <ArrowUpRight className="size-5 text-muted-foreground transition-colors group-hover:text-primary" />
              </CardTitle>
              <CardDescription className="mt-2 text-sm leading-relaxed">
                {s.desc}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {s.tags.map((t) => (
                <Badge
                  key={t}
                  variant="secondary"
                  className="border border-border bg-secondary/60 font-mono text-[11px] font-normal text-muted-foreground"
                >
                  {t}
                </Badge>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
