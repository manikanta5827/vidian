import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { articles } from "@/lib/articles";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

// Required for Next.js static HTML export with dynamic routes
export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 py-32 lg:px-8 min-h-screen">
        <a 
          href="/insights" 
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-10"
        >
          <ArrowLeft className="mr-2 size-4" /> Back to Insights
        </a>
        
        <article>
          <header className="mb-12 border-b border-border/60 pb-8">
            <div className="font-mono text-sm text-primary mb-4">
              {new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </div>
            <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-foreground leading-tight">
              {article.title}
            </h1>
          </header>
          
          <div 
            className="prose prose-green prose-lg max-w-none text-muted-foreground prose-headings:text-foreground prose-a:text-primary"
            dangerouslySetInnerHTML={{ 
              __html: article.content
                .replace(/\n\n### (.*?)\n/g, '<h3 class="font-display text-2xl font-bold mt-10 mb-4">$1</h3>')
                .replace(/\n\n/g, '</p><p class="mt-6 leading-relaxed">') 
            }}
          />
        </article>
      </main>
      <Footer />
    </>
  );
}
