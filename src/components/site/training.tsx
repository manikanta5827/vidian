import { Check, BookOpen, Users, Wrench, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

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
      className="relative overflow-hidden border-y border-border/60 bg-card/40"
    >
      <div className="pointer-events-none absolute inset-0 bg-circuit opacity-50" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-2 lg:px-8">
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Vidian Academy
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Train on real silicon,{" "}
            <span className="text-primary">not slideware.</span>
          </h2>
          <p className="mt-4 max-w-lg text-muted-foreground">
            Our VLSI training turns students and fresh graduates into
            job-ready design engineers. Structured tracks, real toolchains, and
            mentorship from people who ship chips for a living.
          </p>

          <ul className="mt-8 space-y-3">
            {highlights.map((h) => (
              <li key={h.text} className="flex items-center gap-3">
                <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-primary/12 text-primary ring-1 ring-primary/25">
                  <h.icon className="size-4" />
                </span>
                <span className="text-sm text-foreground">{h.text}</span>
              </li>
            ))}
          </ul>

          <Button
            nativeButton={false}
            render={<a href="#contact" />}
            className="mt-9 h-11 px-6 font-semibold"
          >
            Enroll for a cohort
          </Button>
        </div>

        <div className="space-y-4">
          <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
            <img
              src="/img/circuit.jpg"
              alt="Macro view of a circuit board, representing hands-on hardware training"
              width={1000}
              height={420}
              className="aspect-[21/9] w-full object-cover"
            />
          </div>
          {tracks.map((t) => (
            <div
              key={t.code}
              className="group flex items-center gap-4 rounded-2xl border border-border bg-background/60 p-5 transition-colors hover:border-primary/40"
            >
              <span className="font-mono text-sm text-primary">{t.code}</span>
              <div className="h-8 w-px bg-border" />
              <div className="flex-1">
                <div className="font-display font-semibold">{t.name}</div>
                <div className="mt-0.5 flex items-center gap-2 text-xs text-muted-foreground">
                  <Check className="size-3.5 text-primary" /> Project-backed ·{" "}
                  {t.weeks}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
