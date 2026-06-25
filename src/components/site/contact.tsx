"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const interests = ["VLSI Services", "VLSI Training", "Software", "Partnership"];

export function Contact() {
  const [interest, setInterest] = useState(interests[0]);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  // ponytail: no backend wired — validates then shows confirmation only.
  // Add a POST to a form endpoint (Resend/Formspree/route handler) when live.
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = String(data.get("email") ?? "").trim();
    const name = String(data.get("name") ?? "").trim();
    if (!name) return setError("Please tell us your name.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return setError("Please enter a valid email address.");
    setError("");
    setSent(true);
  }

  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <div className="grid gap-10 rounded-3xl border border-border bg-card/50 p-8 lg:grid-cols-2 lg:p-12">
        {/* left: pitch + contacts */}
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Let&apos;s talk
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Have a chip to build or a team to train?
          </h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            Tell us what you&apos;re working on. We&apos;ll get back within one
            business day with the right people and a clear next step.
          </p>

          <div className="mt-8 space-y-4 text-sm">
            <a
              href="mailto:hello@vidian.com"
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground"
            >
              <span className="grid size-9 place-items-center rounded-lg bg-primary/12 text-primary ring-1 ring-primary/25">
                <Mail className="size-4" />
              </span>
              hello@vidian.com
            </a>
            <div className="flex items-center gap-3 text-muted-foreground">
              <span className="grid size-9 place-items-center rounded-lg bg-primary/12 text-primary ring-1 ring-primary/25">
                <Phone className="size-4" />
              </span>
              +91 00000 00000
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <span className="grid size-9 place-items-center rounded-lg bg-primary/12 text-primary ring-1 ring-primary/25">
                <MapPin className="size-4" />
              </span>
              Hyderabad, India
            </div>
          </div>
        </div>

        {/* right: form */}
        <div className="rounded-2xl border border-border bg-background/50 p-6 lg:p-8">
          {sent ? (
            <div className="flex h-full min-h-72 flex-col items-center justify-center text-center">
              <CheckCircle className="size-12 text-primary" />
              <h3 className="mt-4 font-display text-xl font-semibold">
                Message received
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Thanks — we&apos;ll be in touch within one business day.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-5" noValidate>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium" htmlFor="name">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    aria-invalid={error.includes("name") || undefined}
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium" htmlFor="email">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    aria-invalid={error.includes("email") || undefined}
                  />
                </div>
              </div>

              <div>
                <span className="mb-1.5 block text-sm font-medium">
                  I&apos;m interested in
                </span>
                <div className="flex flex-wrap gap-2">
                  {interests.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      aria-pressed={interest === opt}
                      onClick={() => setInterest(opt)}
                      className={`rounded-full border px-3 py-1.5 font-mono text-xs transition-colors ${
                        interest === opt
                          ? "border-primary/40 bg-primary/15 text-primary"
                          : "border-border text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium" htmlFor="message">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="A few lines about your project or goals…"
                />
              </div>

              <p
                role="alert"
                aria-live="polite"
                className={`text-sm text-destructive ${error ? "" : "sr-only"}`}
              >
                {error}
              </p>

              <Button type="submit" className="h-11 w-full gap-2 font-semibold">
                Send message <ArrowRight className="size-4" />
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
