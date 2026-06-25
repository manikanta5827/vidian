import { ArrowRight, Activity, CircuitBoard, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "./fade-in";
import { ImageStack } from "./image-stack";
import { Typewriter } from "./typewriter";

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
    <>
      <section id="top" className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-green-950">
        
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 bg-green-950">
            <img
              src="/img/chip.jpg"
              alt="Processor chip"
              className="h-full w-full object-cover mix-blend-luminosity opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-green-950/80 via-transparent to-green-950/90" />
          </div>

          <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center text-center px-5 py-24 lg:px-8">
            <FadeIn className="flex flex-col items-center">
              <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Tape-out ready. <br />
                From RTL to{" "}
                <Typewriter 
                  words={["reality.", "silicon.", "production.", "systems."]} 
                  className="font-cursive text-green-400 font-normal tracking-normal text-[1.2em]" 
                />
              </h1>

              <p className="mt-6 max-w-xl text-lg text-white/90">
                Vidian is an engineering partner for{" "}
                <span className="text-white font-medium">VLSI design services</span>,
                career-grade{" "}
                <span className="text-white font-medium">VLSI training</span>, and custom{" "}
                <span className="text-white font-medium">software engineering</span>.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button
                  nativeButton={false}
                  render={<a href="#contact" />}
                  className="h-12 gap-2 rounded-full px-6 text-base font-semibold shadow-xl shadow-black/20 bg-white text-green-900 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40 hover:bg-green-50"
                >
                  Get Started <ArrowRight className="size-4" />
                </Button>
                <Button
                  nativeButton={false}
                  variant="outline"
                  render={<a href="#services" />}
                  className="h-12 rounded-full px-6 text-base border-white/50 bg-white/10 text-white backdrop-blur-sm shadow-xl shadow-black/10 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/30 hover:bg-white/20 hover:text-white"
                >
                  Explore Services
                </Button>
              </div>

              <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-mono text-xs text-green-200">
                <span className="flex items-center gap-2">
                  <Cpu className="size-4" /> 7nm → 180nm nodes
                </span>
                <span className="flex items-center gap-2">
                  <CircuitBoard className="size-4" /> ASIC · FPGA · SoC
                </span>
              </div>
            </FadeIn>
          </div>
        </section>

      {/* keyword marquee */}
      <FadeIn delay={0.4} className="relative overflow-hidden border-y border-border/60 bg-card/30 py-3">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap font-mono text-sm text-muted-foreground">
          {[...ticker, ...ticker].map((t, i) => (
            <span key={i} className="flex items-center gap-10">
              <span className="text-primary/60">◆</span>
              {t}
            </span>
          ))}
        </div>
      </FadeIn>
    </>
  );
}
