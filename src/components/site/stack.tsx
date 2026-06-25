import { SectionHeading } from "./section-heading";

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
        <SectionHeading
          eyebrow="Capabilities"
          title="A toolchain that spans"
          accent="the full flow."
          description="From front-end design through sign-off and the software that glues it together — color-coded by discipline."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((g) => (
            <div
              key={g.label}
              className="rounded-2xl border border-border bg-background/50 p-5"
            >
              <span
                className={`inline-flex rounded-md border px-2.5 py-1 font-mono text-xs ${g.color}`}
              >
                {g.label}
              </span>
              <ul className="mt-4 space-y-2">
                {g.items.map((it) => (
                  <li
                    key={it}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="size-1.5 rounded-full bg-primary/60" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
