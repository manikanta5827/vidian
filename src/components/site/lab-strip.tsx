import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LabStrip() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card/40">
        <div className="grid md:grid-cols-2">
          <div className="p-10 lg:p-14 flex flex-col justify-center">
             <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-4">
              Infrastructure
            </span>
            <h2 className="font-display text-3xl font-bold tracking-tight">
              Physical labs for physical designs.
            </h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              We validate every design using physical devices, FPGA prototyping boards, and robust testing infrastructure. Tape-out ready means proven in the lab.
            </p>
            <div className="mt-8">
              <Button nativeButton={false} render={<a href="#contact" />} variant="outline" className="h-11 px-6 gap-2">
                Tour our lab <ArrowRight className="size-4" />
              </Button>
            </div>
          </div>
          <div className="relative min-h-[300px]">
            <img 
              src="/img/device.jpg" 
              alt="Close-up of testing devices and FPGA prototyping boards"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
