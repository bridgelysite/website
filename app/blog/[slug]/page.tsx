import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

// Simulation des données (à remplacer par vos vrais articles plus tard)
const posts: Record<string, { title: string; content: string; date: string; category: string }> = {
  "pourquoi-choisir-pologne-business": {
    title: "Pourquoi la Pologne est le nouvel eldorado des entrepreneurs digitaux",
    date: "1 Décembre 2025",
    category: "Pologne",
    content: `
      <p class="mb-4">La Pologne n'est plus ce pays de l'Est gris et lointain que certains imaginent encore. C'est devenu en quelques années le hub technologique central de l'Europe, attirant Google, Microsoft, et des milliers d'entrepreneurs indépendants.</p>
      <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">1. Une fiscalité pragmatique</h2>
      <p class="mb-4">Contrairement à la France et ses cotisations sociales lourdes, la Pologne offre plusieurs régimes fiscaux adaptés aux petites structures, comme le ryczałt (impôt sur le chiffre d'affaires) ou l'IP Box pour les développeurs.</p>
      <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">2. Un coût de vie maîtrisé</h2>
      <p class="mb-4">Même si Varsovie rattrape son retard, le coût de la vie reste 30 à 40% moins élevé qu'à Paris ou Berlin. Vos euros vous permettent un style de vie bien supérieur.</p>
      <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-8">
        <p class="font-semibold text-blue-900">Le saviez-vous ?</p>
        <p class="text-blue-800 text-sm mt-1">Varsovie est classée dans le top 10 des villes "Business Friendly" d'Europe en 2024.</p>
      </div>
      <p class="mb-4">Pour en savoir plus sur la création de société, consultez notre <a href="/creation-societe-pologne" class="text-blue-600 hover:underline">guide complet sur la Pologne</a>.</p>
    `,
  },
  "llc-delaware-vs-wyoming": {
    title: "LLC Delaware vs Wyoming : Le comparatif honnête",
    date: "28 Novembre 2025",
    category: "USA",
    content: `
      <p class="mb-4">C'est la question N°1 de nos clients. On vous dit tout.</p>
      <p>Le Delaware est prestigieux, le Wyoming est économique. Faites votre choix en fonction de vos besoins réels, pas de la "hype".</p>
    `,
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return { title: "Article non trouvé" };

  return {
    title: `${post.title} | Blog Bridgely`,
    description: `Découvrez notre article sur : ${post.title}`,
    alternates: {
      canonical: `https://bridgely.fr/blog/${slug}`,
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    notFound();
  }

  return (
    <div className="section">
      <div className="container-bridgely max-w-3xl">
        <Link href="/blog" className="text-sm text-slate-500 hover:text-slate-800 mb-8 inline-block">
          ← Retour au blog
        </Link>
        
        <article>
          <header className="mb-10">
            <div className="flex items-center gap-3 mb-4 text-sm font-medium">
              <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded-md uppercase tracking-wide">
                {post.category}
              </span>
              <span className="text-slate-400">{post.date}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-6">
              {post.title}
            </h1>
          </header>

          {/* Contenu de l'article */}
          <div 
            className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-a:text-[color:var(--color-accent)] hover:prose-a:text-amber-600"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          {/* Call to Action Fin d'article */}
          <div className="mt-16 p-8 bg-slate-900 rounded-2xl text-center text-white">
            <h3 className="text-xl font-bold mb-2">Vous voulez aller plus loin ?</h3>
            <p className="text-slate-300 mb-6">
              Ne restez pas avec vos questions. Nos experts sont là pour vous aider à structurer votre projet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/consulting-international" className="btn-primary text-slate-900">
                Parler à un expert
              </Link>
              <Link href="/packs-digitaux" className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors font-semibold">
                Voir nos guides
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

