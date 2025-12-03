import Link from "next/link";
import type { Metadata } from "next";

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

// Simulation d'une base de données d'articles
const posts = [
  {
    slug: "salaire-minimum-pologne-2025",
    title: "SMIC en Pologne (2025) : Combien ça coûte vraiment d'embaucher ?",
    excerpt:
      "Avec un salaire minimum à 4 666 PLN (environ 1 090 €), la Pologne reste attractive mais rattrape son retard. Analyse du coût employeur pour les entrepreneurs.",
    date: "1 Décembre 2025",
    category: "Pologne",
    readTime: "4 min",
  },
  {
    slug: "pourquoi-choisir-pologne-business",
    title: "Pourquoi la Pologne est le nouvel eldorado des entrepreneurs digitaux",
    excerpt:
      "Fiscalité avantageuse, coûts réduits, écosystème tech dynamique : découvrez pourquoi de plus en plus d'entrepreneurs choisissent Varsovie ou Cracovie.",
    date: "1 Décembre 2025",
    category: "Pologne",
    readTime: "5 min",
  },
  {
    slug: "llc-delaware-vs-wyoming",
    title: "LLC Delaware vs Wyoming : Le comparatif honnête",
    excerpt:
      "Faut-il vraiment aller au Delaware ? Le Wyoming n'est-il pas mieux pour un freelance ? On casse les mythes et on regarde les chiffres.",
    date: "28 Novembre 2025",
    category: "USA",
    readTime: "7 min",
  },
  {
    slug: "compte-bancaire-llc-pologne-guide",
    title: "Compte Bancaire : Le guide de survie pour LLC & Pologne (2025)",
    excerpt:
      "Ouvrir une société est facile, ouvrir le compte bancaire l'est moins. Fintechs ou banques traditionnelles ? Découvrez les pièges à éviter et comment sécuriser vos fonds.",
    date: "3 Décembre 2025",
    category: "Finance",
    readTime: "6 min",
  },
];

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
          {posts.map((post) => (
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

