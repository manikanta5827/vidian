import Link from "next/link";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { ArrowLeft, Cpu } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="relative flex flex-1 items-center justify-center overflow-hidden">
        {/* Background elements to match the site's modern UI */}
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:32px_32px] opacity-10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="relative z-10 mx-auto max-w-2xl px-5 py-24 text-center lg:px-8">
          <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-3xl border border-primary/20 bg-primary/10 shadow-2xl shadow-primary/20">
            <Cpu className="h-12 w-12 text-primary" />
          </div>
          
          <h1 className="font-display text-7xl font-bold tracking-tight text-foreground sm:text-9xl">
            404
          </h1>
          <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Signal lost. Page not found.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-md mx-auto">
            The page you are looking for doesn't exist or has been moved. Let's get you back to familiar ground.
          </p>
          
          <div className="mt-10 flex justify-center gap-4">
            <Link 
              href="/"
              className={buttonVariants({ className: "h-12 px-8 gap-2 font-semibold shadow-lg shadow-primary/20 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30" })}
            >
              <ArrowLeft className="size-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
