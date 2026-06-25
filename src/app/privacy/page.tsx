import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-5 py-32 lg:px-8 min-h-screen">
        <h1 className="font-display text-4xl font-bold tracking-tight text-green-950">Privacy Policy</h1>
        <div className="mt-8 space-y-6 text-muted-foreground">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>
            Welcome to Vidian. We are committed to protecting your personal information and your right to privacy. 
            If you have any questions or concerns about our policy, or our practices with regards to your personal 
            information, please contact us at hello@vidian.in.
          </p>
          
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">1. Information We Collect</h3>
            <p>
              We collect personal information that you voluntarily provide to us when expressing an interest in 
              obtaining information about us or our products and services, when participating in activities on the 
              Website or otherwise contacting us.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">2. How We Use Your Information</h3>
            <p>
              We use personal information collected via our Website for a variety of business purposes described below. 
              We process your personal information for these purposes in reliance on our legitimate business interests, 
              in order to enter into or perform a contract with you, with your consent, and/or for compliance with our 
              legal obligations.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">3. Will Your Information Be Shared With Anyone?</h3>
            <p>
              We only share information with your consent, to comply with laws, to provide you with services, 
              to protect your rights, or to fulfill business obligations.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
