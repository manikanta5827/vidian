"use client";

import { useState } from "react";
import { Menu, X, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const links = [
  { label: "Services", href: "#services" },
  { label: "Training", href: "#training" },
  { label: "Why Vidian", href: "#why" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
      setOpen(false); // Close menu if scrolling down
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-150%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed left-1/2 top-4 z-50 w-[95%] max-w-4xl -translate-x-1/2 rounded-full border border-border bg-background shadow-2xl shadow-primary/10"
    >
      <nav className="mx-auto flex h-16 items-center justify-between px-5 lg:px-8">
        <a href="#top" className="flex items-center gap-1.5">
          <div className="grid size-8 place-items-center rounded-lg bg-green-950 text-white shadow-sm">
            <span className="font-display font-bold text-lg leading-none">V</span>
          </div>
          <span className="font-display text-xl font-bold tracking-tight text-green-950">Vidian</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <Button
            nativeButton={false}
            render={<a href="#contact" />}
            className="h-9 rounded-full px-5 text-sm shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30"
          >
            Let&apos;s Talk
          </Button>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="grid size-9 place-items-center rounded-lg border border-border text-foreground md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "overflow-hidden md:hidden transition-all duration-300 ease-in-out",
          open ? "max-h-96 border-t border-border/60" : "max-h-0"
        )}
      >
        <div className="flex flex-col gap-1 px-5 pb-4 pt-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <Button
            nativeButton={false}
            render={<a href="#contact" onClick={() => setOpen(false)} />}
            className="mt-3 h-10 rounded-full"
          >
            Let&apos;s Talk
          </Button>
        </div>
      </div>
    </motion.header>
  );
}
