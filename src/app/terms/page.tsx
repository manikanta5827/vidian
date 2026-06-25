import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";

export default function TermsAndConditions() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-5 py-32 lg:px-8 min-h-screen">
        <h1 className="font-display text-4xl font-bold tracking-tight text-green-950">Terms and Conditions</h1>
        <div className="mt-8 space-y-6 text-muted-foreground">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>
            These Terms and Conditions constitute a legally binding agreement made between you, whether personally 
            or on behalf of an entity ("you") and Vidian ("we," "us" or "our"), concerning your access to and use 
            of our website as well as any other media form, media channel, mobile website or mobile application 
            related, linked, or otherwise connected thereto.
          </p>
          
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">1. Intellectual Property Rights</h3>
            <p>
              Unless otherwise indicated, the Site is our proprietary property and all source code, databases, 
              functionality, software, website designs, audio, video, text, photographs, and graphics on the Site 
              and the trademarks, service marks, and logos contained therein are owned or controlled by us or 
              licensed to us.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">2. User Representations</h3>
            <p>
              By using the Site, you represent and warrant that all registration information you submit will be 
              true, accurate, current, and complete. You will maintain the accuracy of such information and promptly 
              update such registration information as necessary.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">3. Governing Law</h3>
            <p>
              These Terms shall be governed by and defined following the laws of India. Vidian and yourself 
              irrevocably consent that the courts of India shall have exclusive jurisdiction to resolve any dispute 
              which may arise in connection with these terms.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
