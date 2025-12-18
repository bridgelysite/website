import Link from "next/link";
import type { Metadata } from "next";
import { blogPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog Bridgely | Conseils pour entrepreneurs internationaux",
  description:
    "Articles, guides et conseils sur la création de société à l'étranger (Pologne, USA), la fiscalité internationale et l'expatriation.",
  alternates: {
    canonical: "https://bridgely.fr/blog",
  },
  openGraph: {
    title: "Blog Bridgely | Entreprendre sans frontières",
    description: "L'expertise pratique pour vos projets internationaux.",
    url: "https://bridgely.fr/blog",
  },
};

export default function BlogPage() {
  return (
    <div className="section">
      <div className="container-bridgely max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="section-title">Le Blog Bridgely</h1>
          <p className="section-subtitle">
            Analyses, tutoriels et décryptages pour piloter votre business international.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4 text-xs font-medium">
                  <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded-md uppercase tracking-wide">
                    {post.category}
                  </span>
                  <span className="text-slate-400">{post.readTime} de lecture</span>
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[color:var(--color-accent)] transition-colors">
                  {post.title}
                </h2>
                <p className="text-slate-600 text-sm mb-6 flex-1">
                  {post.excerpt}
                </p>
                <div className="mt-auto flex items-center justify-between text-xs text-slate-400 pt-4 border-t border-slate-100">
                  <span>{post.date}</span>
                  <span className="group-hover:translate-x-1 transition-transform">
                    Lire l'article →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

