import { Cpu, Globe, X, Mail } from "lucide-react";

const cols = [
  {
    title: "Services",
    links: [
      { label: "VLSI Design", href: "#services" },
      { label: "Verification", href: "#services" },
      { label: "DFT", href: "#services" },
      { label: "Physical Design", href: "#services" },
      { label: "Software", href: "#services" },
    ],
  },
  {
    title: "Academy",
    links: [
      { label: "RTL Track", href: "#training" },
      { label: "Verification Track", href: "#training" },
      { label: "DFT Track", href: "#training" },
      { label: "PD Track", href: "#training" },
      { label: "Placements", href: "#contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Why Vidian", href: "#why" },
      { label: "Capabilities", href: "#stack" },
      { label: "Process", href: "#process" },
      { label: "FAQ", href: "#faq" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-card/30">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-1.5">
              <div className="grid size-8 place-items-center rounded-lg bg-green-950 text-white shadow-sm">
                <span className="font-display font-bold text-lg leading-none">V</span>
              </div>
              <span className="font-display text-xl font-bold tracking-tight text-green-950">Vidian</span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Silicon-to-system engineering — VLSI services, training, and
              software, from a single team.
            </p>
            <div className="mt-5 flex gap-3">
              {[
                { Icon: Globe, label: "Website" },
                { Icon: X, label: "Vidian on X" },
                { Icon: Mail, label: "Email Vidian" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid size-9 place-items-center rounded-lg border border-border text-muted-foreground transition-all hover:border-primary/40 hover:text-primary shadow-sm hover:shadow-md hover:-translate-y-0.5"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="font-display text-sm font-semibold">{c.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row">
          <span>© {new Date().getFullYear()} Vidian. All rights reserved.</span>
          <div className="flex gap-5 font-mono">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
