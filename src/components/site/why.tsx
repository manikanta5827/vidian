import { ShieldCheck, Gauge, Layers, Network } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { FadeIn, StaggerContainer, StaggerItem } from "./fade-in";
import { ImageStack } from "./image-stack";

const reasons = [
  {
    icon: Layers,
    title: "Full-stack, chip to cloud",
    desc: "Design, verification, and the software around it under one roof — fewer handoffs, tighter loops, faster closure.",
  },
  {
    icon: ShieldCheck,
    title: "Silicon-proven engineers",
    desc: "Teams that have taken designs through real tape-outs across mature and advanced nodes — not theory, shipped chips.",
  },
  {
    icon: Gauge,
    title: "Flexible engagement",
    desc: "Turnkey blocks, dedicated pods, or staff augmentation — scale the model up or down as your roadmap moves.",
  },
  {
    icon: Network,
    title: "Talent pipeline built in",
    desc: "Our academy feeds trained, screened engineers straight into services delivery — quality you can grow with.",
  },
];

export function Why() {
  return (
    <section id="why" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 overflow-hidden">
      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
        <div>
          <FadeIn>
            <SectionHeading
              eyebrow="Why Vidian"
              title="An engineering partner that"
              accent="closes the loop."
            />
          </FadeIn>
          <StaggerContainer className="mt-14 grid gap-6 sm:grid-cols-2">
            {reasons.map((r) => (
              <StaggerItem
                key={r.title}
                className="rounded-2xl border border-border bg-card/50 p-6 transition-all duration-300 hover:border-primary/40 hover:-translate-y-2 shadow-xl shadow-primary/5 hover:shadow-2xl hover:shadow-primary/15"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-primary/12 text-primary ring-1 ring-primary/25">
                  <r.icon className="size-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {r.desc}
                </p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
        
        <FadeIn delay={0.2} className="relative z-10 w-full lg:pl-10">
          <div className="relative">
            <ImageStack />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
