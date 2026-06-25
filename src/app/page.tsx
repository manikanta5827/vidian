import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { Stats } from "@/components/site/stats";
import { Services } from "@/components/site/services";
import { Training } from "@/components/site/training";
import { Why } from "@/components/site/why";
import { Stack } from "@/components/site/stack";
import { Process } from "@/components/site/process";
import { Faq } from "@/components/site/faq";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Services />
        <Training />
        <Why />
        <Stack />
        <Process />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
