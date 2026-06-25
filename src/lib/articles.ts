export const articles = [
  {
    slug: "timing-closure-finfet-nodes",
    title: "Addressing Timing Closure Challenges in Advanced FinFET Nodes",
    date: "2026-06-20",
    summary: "As we scale down to 5nm and beyond, routing congestion and RC delays are becoming the dominant bottlenecks in achieving timing closure. Here is how our physical design teams approach it.",
    content: "When working with advanced FinFET nodes like 5nm and 3nm, traditional physical design methodologies often break down. The dominant factor in timing delay is no longer the standard cell delay, but rather the parasitic RC delays from congested routing layers.\n\n### The Challenge of Congestion\nIn highly congested designs, the router is forced to take detours or use higher-resistance lower metal layers. This introduces massive variability in timing that is often not visible until post-route extraction.\n\n### Our Methodology\nAt Vidian, we utilize an aggressive placement strategy combined with early global routing estimation. By intentionally spreading logic and reserving routing tracks for critical paths during the placement phase, we dramatically reduce the delta between pre-route and post-route timing.\n\nFurthermore, utilizing machine learning-driven layout heuristics allows our teams to predict congestion hotspots before they become timing violations."
  },
  {
    slug: "rtl-to-uvm-verification",
    title: "Transitioning from RTL Design to UVM Verification",
    date: "2026-06-15",
    summary: "For RTL designers looking to expand their skill set, mastering the Universal Verification Methodology (UVM) is the next logical step. Learn the fundamental mindset shift required.",
    content: "Writing RTL is fundamentally about designing hardware structures. Verification, however, is about designing software that attempts to break those structures. This requires a significant shift in mindset for many engineers.\n\n### Thinking in OOP\nUVM is built on SystemVerilog's Object-Oriented Programming (OOP) features. You are no longer writing continuous assignments; you are building class hierarchies, factories, and virtual interfaces.\n\n### The Power of Constrained Randomization\nInstead of writing directed tests, UVM encourages building a highly configurable environment where stimulus is generated randomly but within specific, intelligent constraints. This ensures higher coverage and uncovers corner cases that a human would never think to test manually.\n\nOur Vidian Training Academy focuses heavily on this transition, offering hands-on projects that force you to think like a verification engineer."
  },
  {
    slug: "mbist-atpg-modern-soc",
    title: "Understanding MBIST and ATPG in Modern SOCs",
    date: "2026-06-05",
    summary: "Design for Testability (DFT) is no longer an afterthought. With modern SOCs containing billions of transistors, robust MBIST and ATPG strategies are critical for yield.",
    content: "Ensuring that a manufactured chip actually works is the domain of Design for Testability (DFT). Without DFT, identifying manufacturing defects in a multi-billion transistor SOC would be mathematically impossible.\n\n### ATPG: Automatic Test Pattern Generation\nATPG tools automatically generate specific input vectors designed to propagate faults (like stuck-at-0 or stuck-at-1) to an observable output. To do this efficiently, the design must be modified by inserting scan chains—turning flip-flops into massive shift registers during test mode.\n\n### MBIST: Memory Built-In Self-Test\nMemories are incredibly dense and highly susceptible to manufacturing defects. MBIST involves wrapping every SRAM/ROM instance in the SOC with dedicated test logic that algorithmically writes and reads data patterns to ensure the memory cells and address decoders are flawless.\n\nAt Vidian, our DFT engineers architect these solutions early in the RTL phase to ensure minimal area overhead while achieving >99% fault coverage."
  }
];
