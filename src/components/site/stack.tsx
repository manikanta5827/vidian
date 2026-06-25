import { SectionHeading } from "./section-heading";
import { FadeIn, StaggerContainer, StaggerItem } from "./fade-in";

// color-coded by discipline — proof-of-stack grid
// on-theme: green for design disciplines, neutral for the rest
const groups = [
  {
    label: "Front-End",
    color: "text-primary border-primary/30 bg-primary/10",
    items: ["Verilog", "SystemVerilog", "VHDL", "UVM", "SVA"],
  },
  {
    label: "Back-End",
    color: "text-primary/80 border-primary/20 bg-primary/[0.06]",
    items: ["Synthesis", "Place & Route", "STA", "ECO", "Sign-off"],
  },
  {
    label: "DFT",
    color: "text-foreground/80 border-border bg-muted/40",
    items: ["Scan Insertion", "ATPG", "MBIST", "Boundary Scan"],
  },
  {
    label: "Software",
    color: "text-foreground/70 border-border bg-muted/40",
    items: ["Python", "TCL", "C/C++", "React", "Cloud / CI"],
  },
];

export function Stack() {
  return (
    <section
      id="stack"
      className="border-y border-border/60 bg-card/40"
    >
      <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Capabilities"
            title="A toolchain that spans"
            accent="the full flow."
            description="From front-end design through sign-off and the software that glues it together — color-coded by discipline."
          />
        </FadeIn>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_350px]">
          <StaggerContainer className="grid gap-6 sm:grid-cols-2">
            {groups.map((g) => (
              <StaggerItem
                key={g.label}
                className="rounded-2xl border border-border bg-card p-6 shadow-xl shadow-primary/5 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10"
              >
                <span
                  className={`inline-flex rounded-md border px-2.5 py-1 font-mono text-xs ${g.color}`}
                >
                  {g.label}
                </span>
                <ul className="mt-5 space-y-3">
                  {g.items.map((it) => (
                    <li
                      key={it}
                      className="flex items-center gap-3 text-sm text-muted-foreground"
                    >
                      <span className="size-1.5 rounded-full bg-primary/60" />
                      {it}
                    </li>
                  ))}
                </ul>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn delay={0.2} className="relative hidden lg:block">
            <div className="mt-8 lg:mt-0">
             <div className="overflow-hidden rounded-2xl border border-border shadow-2xl shadow-primary/10 h-full min-h-[300px]">
              <img
                src="/img/processor_board.jpg"
                alt="Close-up of a processor on a motherboard"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
