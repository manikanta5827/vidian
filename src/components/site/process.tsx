import { SectionHeading } from "./section-heading";
import { FadeIn, StaggerContainer, StaggerItem } from "./fade-in";

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
    <section className="bg-green-950 text-white pb-12">
      <div className="mx-auto max-w-7xl px-5 pt-24 pb-12 lg:px-8">
        <FadeIn>
          <div className="flex flex-col">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-green-400">
              How we engage
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              A clear path from <span className="font-cursive text-green-400 font-normal tracking-normal text-[1.1em]">kickoff to closure.</span>
            </h2>
          </div>
        </FadeIn>
        <div className="mt-14 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div className="flex flex-col gap-10 pb-10">
            {steps.map((s, i) => (
              <div
                key={s.n}
                className="sticky flex gap-6 rounded-2xl border border-green-800/50 bg-green-900/40 p-7 shadow-2xl shadow-black/50 backdrop-blur-sm transition-all"
                style={{ top: `calc(7rem + ${i * 1.5}rem)` }}
              >
                <div className="font-display text-4xl font-bold text-green-400/30">
                  {s.n}
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-green-100/80">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <FadeIn delay={0.2} className="relative hidden lg:block">
            <div className="sticky top-24 overflow-hidden rounded-2xl shadow-2xl shadow-black/40 h-full min-h-[400px]">
              <img
                src="/img/cleanroom_lab.jpg"
                alt="Engineers working in a modern semiconductor cleanroom"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
