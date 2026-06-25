import { ArrowRight, Activity, CircuitBoard, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

const ticker = [
  "RTL Design",
  "Functional Verification",
  "DFT",
  "Physical Design",
  "STA",
  "Analog Layout",
  "FPGA Prototyping",
  "Post-Silicon Validation",
  "DV / UVM",
  "Embedded Software",
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-circuit" />
      <div className="pointer-events-none absolute -top-40 left-1/2 size-[640px] -translate-x-1/2 glow-green opacity-40" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pt-20 pb-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pt-28 lg:pb-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
            <span className="size-1.5 animate-pulse rounded-full bg-primary" />
            silicon-to-system engineering
          </span>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Tape-out{" "}
            <span className="text-primary text-glow">ready.</span>{" "}
            <br />
            From RTL to reality.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Vidian is an engineering partner for{" "}
            <span className="text-foreground">VLSI design services</span>,
            career-grade{" "}
            <span className="text-foreground">VLSI training</span>, and custom{" "}
            <span className="text-foreground">software engineering</span> — one
            team across the full chip-to-cloud stack.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button
              nativeButton={false}
              render={<a href="#contact" />}
              className="h-12 gap-2 px-6 text-base font-semibold ring-glow"
            >
              Get Started <ArrowRight className="size-4" />
            </Button>
            <Button
              nativeButton={false}
              variant="outline"
              render={<a href="#services" />}
              className="h-12 px-6 text-base"
            >
              Explore Services
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-xs text-muted-foreground">
            <span className="flex items-center gap-2">
              <Cpu className="size-4 text-primary" /> 7nm → 180nm nodes
            </span>
            <span className="flex items-center gap-2">
              <CircuitBoard className="size-4 text-primary" /> ASIC · FPGA · SoC
            </span>
          </div>
        </div>

        {/* hero visual — real silicon photo + floating live-status chip */}
        <div className="relative">
          <div className="absolute -inset-6 glow-green opacity-60" />
          <div className="relative overflow-hidden rounded-2xl border border-border ring-glow">
            <img
              src="/img/chip.jpg"
              alt="Macro photograph of a microprocessor die mounted on a circuit board"
              width={1400}
              height={1050}
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />

            {/* floating glass stat chip */}
            <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/30 bg-white/80 p-4 backdrop-blur-md sm:right-auto">
              <div className="flex items-center gap-2 font-mono text-[11px] text-primary">
                <Activity className="size-3.5" /> live-status · online
              </div>
              <div className="mt-3 flex gap-5">
                {[
                  { k: "Tape-outs", v: "35" },
                  { k: "Engineers", v: "60+" },
                  { k: "Trained", v: "1.2k" },
                ].map((s) => (
                  <div key={s.k}>
                    <div className="font-display text-xl font-bold text-foreground">
                      {s.v}
                    </div>
                    <div className="text-[11px] text-muted-foreground">{s.k}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* keyword marquee */}
      <div className="relative overflow-hidden border-y border-border/60 bg-card/30 py-3">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap font-mono text-sm text-muted-foreground">
          {[...ticker, ...ticker].map((t, i) => (
            <span key={i} className="flex items-center gap-10">
              <span className="text-primary/60">◆</span>
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
