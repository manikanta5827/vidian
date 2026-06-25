"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "./section-heading";
import { FadeIn, StaggerContainer, StaggerItem } from "./fade-in";

const faqs = [
  {
    q: "What engagement models do you offer for VLSI services?",
    a: "Turnkey block delivery, dedicated engineering pods, and staff augmentation. We help you pick based on scope, timeline, and how much you want to own internally.",
  },
  {
    q: "Who is the VLSI training for?",
    a: "Final-year students, fresh graduates, and working engineers looking to move into RTL design, verification, DFT, or physical design. Tracks run from fundamentals to job-ready.",
  },
  {
    q: "Do you provide placement support after training?",
    a: "Yes. Cohorts include interview preparation, resume reviews, and placement assistance — and strong performers can be considered for Vidian's own delivery teams.",
  },
  {
    q: "What does the software engineering practice build?",
    a: "Automation and EDA tooling, internal flow dashboards, APIs, and full-stack products — often for teams that need software built by people who understand silicon.",
  },
  {
    q: "Which process nodes do you work with?",
    a: "Across advanced and mature nodes, roughly 7nm through 180nm, depending on the project and foundry. Share your target and we'll confirm fit.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="border-t border-border/60 bg-card/40">
      <div className="mx-auto max-w-3xl px-5 py-24 lg:px-8">
        <FadeIn>
          <SectionHeading eyebrow="FAQ" title="Questions," accent="answered." />
        </FadeIn>
        <Accordion className="mt-12">
          <StaggerContainer>
            {faqs.map((f, i) => (
              <StaggerItem key={i}>
                <AccordionItem 
                  value={`item-${i}`}
                  className="mb-4 rounded-xl border border-border bg-card/60 px-5 shadow-md shadow-primary/5 transition-all hover:shadow-lg hover:shadow-primary/10 data-[state=open]:shadow-xl data-[state=open]:shadow-primary/15"
                >
                  <AccordionTrigger className="py-5 text-base font-medium text-left">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Accordion>
      </div>
    </section>
  );
}
