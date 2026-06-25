import { SectionHeading } from "./section-heading";

const steps = [
  {
    n: "01",
    title: "Scope & align",
    desc: "We map your spec, node, schedule, and risk — then propose the right engagement model and team shape.",
  },
  {
    n: "02",
    title: "Design & verify",
    desc: "Our engineers execute against milestones with continuous verification, reviews, and transparent reporting.",
  },
  {
    n: "03",
    title: "Close & hand off",
    desc: "Sign-off, tape-out support, and clean documentation — plus trained talent to sustain it after delivery.",
  },
];

export function Process() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <SectionHeading
        eyebrow="How we engage"
        title="A clear path from"
        accent="kickoff to closure."
      />
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {steps.map((s) => (
          <div
            key={s.n}
            className="relative rounded-2xl border border-border bg-card/50 p-7"
          >
            <span className="font-display text-5xl font-bold text-primary/50">
              {s.n}
            </span>
            <h3 className="mt-3 font-display text-xl font-semibold">
              {s.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
