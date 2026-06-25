import { Check, BookOpen, Users, Wrench, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "./fade-in";

const tracks = [
  { code: "TRK-01", name: "RTL Design with Verilog/SystemVerilog", weeks: "10 wks" },
  { code: "TRK-02", name: "Functional Verification (UVM)", weeks: "12 wks" },
  { code: "TRK-03", name: "Design for Test (DFT)", weeks: "8 wks" },
  { code: "TRK-04", name: "Physical Design & STA", weeks: "10 wks" },
];

const highlights = [
  { icon: Wrench, text: "Hands-on with industry-standard EDA tools" },
  { icon: Briefcase, text: "Live, tape-out-style mini projects" },
  { icon: Users, text: "Mentored by working VLSI engineers" },
  { icon: BookOpen, text: "Interview prep + placement assistance" },
];

export function Training() {
  return (
    <section
      id="training"
      className="relative overflow-hidden bg-green-950 text-white"
    >
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-2 lg:px-8">
        <div>
          <FadeIn>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-green-400">
              Vidian Academy
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Train on real silicon,{" "}
              <span className="font-cursive text-green-400 font-normal tracking-normal text-[1.1em]">not slideware.</span>
            </h2>
            <p className="mt-4 max-w-lg text-green-50/90">
              Our VLSI training turns students and fresh graduates into
              job-ready design engineers. Structured tracks, real toolchains, and
              mentorship from people who ship chips for a living.
            </p>
          </FadeIn>

          <StaggerContainer className="mt-8 space-y-3">
            {highlights.map((h) => (
              <StaggerItem key={h.text} className="flex items-center gap-3">
                <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-green-400/10 text-green-400 ring-1 ring-green-400/25">
                  <h.icon className="size-4" />
                </span>
                <span className="text-sm text-green-50">{h.text}</span>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn delay={0.3}>
            <Button
              nativeButton={false}
              render={<a href="#contact" />}
              className="mt-9 h-11 px-6 font-semibold bg-white text-green-950 shadow-xl shadow-black/20 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40 hover:bg-green-50"
            >
              Enroll for a cohort
            </Button>
          </FadeIn>
        </div>

        <StaggerContainer className="space-y-4">
          <StaggerItem>
            <div className="overflow-hidden rounded-2xl shadow-2xl shadow-black/40">
              <img
                src="/img/circuit.jpg"
                alt="Macro view of a circuit board, representing hands-on hardware training"
                width={1000}
                height={420}
                className="aspect-[21/9] w-full object-cover"
              />
            </div>
          </StaggerItem>
          {tracks.map((t) => (
            <StaggerItem
              key={t.code}
              className="group flex items-center gap-4 rounded-2xl border border-green-800/50 bg-green-900/40 p-5 shadow-xl shadow-black/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-400/20 hover:border-green-400/40"
            >
              <span className="font-mono text-sm text-green-400">{t.code}</span>
              <div className="h-8 w-px bg-green-800/60" />
              <div className="flex-1">
                <div className="font-display font-semibold">{t.name}</div>
                <div className="mt-0.5 flex items-center gap-2 text-xs text-green-200/80">
                  <Check className="size-3.5 text-green-400" /> Project-backed ·{" "}
                  {t.weeks}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
