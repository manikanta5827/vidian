"use client";

import { useEffect, useRef, useState } from "react";
import { FadeIn, StaggerContainer, StaggerItem, HorizontalStaggerItem } from "./fade-in";

const stats = [
  { value: 60, suffix: "+", label: "VLSI engineers" },
  { value: 35, suffix: "", label: "Tape-outs delivered" },
  { value: 1200, suffix: "+", label: "Students trained" },
  { value: 9, suffix: "", label: "Years of silicon" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting || done.current) return;
        done.current = true;
        const start = performance.now();
        const dur = 1400;
        const tick = (t: number) => {
          const p = Math.min((t - start) / dur, 1);
          // easeOutCubic
          const eased = 1 - Math.pow(1 - p, 3);
          setN(Math.round(eased * value));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="font-display text-4xl font-bold text-primary sm:text-5xl">
      {n.toLocaleString()}
      {suffix}
    </div>
  );
}

  export function Stats() {
  return (
    <section className="border-y border-border/60 bg-card/40">
      <StaggerContainer className="mx-auto grid max-w-7xl grid-cols-2 gap-x-8 gap-y-10 px-5 py-12 lg:grid-cols-4 lg:px-8">
        {stats.map((s) => (
          <HorizontalStaggerItem key={s.label} className="text-center rounded-2xl bg-card border border-border p-6 shadow-xl shadow-primary/5 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1 transition-all">
            <Counter value={s.value} suffix={s.suffix} />
            <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
          </HorizontalStaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
