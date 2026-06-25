import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { SectionHeading } from "@/components/site/section-heading";
import { articles } from "@/lib/articles";
import { ArrowRight } from "lucide-react";

export default function InsightsIndex() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl px-5 py-32 lg:px-8 min-h-screen">
        <SectionHeading 
          eyebrow="Insights" 
          title="Engineering notes and" 
          accent="technical perspectives." 
          description="Read our latest thoughts on semiconductor design, verification methodologies, and industry training."
        />
        
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <a 
              key={article.slug} 
              href={`/insights/${article.slug}`}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-xl shadow-primary/5 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30"
            >
              <div className="text-xs font-mono text-muted-foreground mb-4">
                {new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </div>
              <h3 className="font-display text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                {article.title}
              </h3>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed flex-grow">
                {article.summary}
              </p>
              <div className="mt-6 flex items-center text-sm font-medium text-primary">
                Read article <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </div>
            </a>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
