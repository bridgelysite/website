import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

// Simulation des données (à remplacer par vos vrais articles plus tard)
const posts: Record<string, { title: string; content: string; date: string; category: string }> = {
  "salaire-minimum-pologne-2025": {
    title: "SMIC en Pologne (2025) : Combien ça coûte vraiment d'embaucher ?",
    date: "1 Décembre 2025",
    category: "Pologne",
    content: `
      <p class="lead text-xl text-slate-600 mb-8">
        Pour un entrepreneur français, la Pologne offre un compromis rare : des talents qualifiés, une culture de travail occidentale, et un coût du travail encore très compétitif. Mais combien cela coûte-t-il vraiment en 2025 ?
      </p>

      <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Les chiffres officiels 2025</h2>
      <p class="mb-4">
        Depuis le 1er janvier 2025, le salaire minimum brut en Pologne est fixé à <strong>4 666 PLN</strong>, soit environ <strong>1 091 €</strong> (selon le taux de change).
      </p>
      <ul class="list-disc list-inside mb-6 space-y-2 ml-4">
        <li><strong>Salaire Brut :</strong> 4 666 PLN (≈ 1 091 €)</li>
        <li><strong>Taux horaire minimum :</strong> 30,50 PLN (≈ 7,10 €)</li>
      </ul>
      <p class="mb-4 text-sm text-slate-500 italic">
        Source : <a href="https://lessentieldeleco.fr/4570-smic-a-combien-seleve-le-salaire-minimum-en-pologne/" target="_blank" rel="nofollow" class="underline hover:text-blue-600">L'Essentiel de l'Éco</a>
      </p>

      <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Combien ça coûte à l'employeur ? (Coût Total)</h2>
      <p class="mb-4">
        C'est là que la différence avec la France est frappante. En France, pour un SMIC, l'employeur paie environ 45% de charges patronales (hors allègements). En Pologne, le "surcoût" employeur est d'environ <strong>20,48%</strong> au-dessus du brut.
      </p>
      <div class="bg-slate-100 p-6 rounded-xl my-6">
        <h3 class="font-bold text-lg mb-4">Exemple de coût mensuel pour un salarié au SMIC (Estimation)</h3>
        <div class="grid grid-cols-2 gap-4 text-sm">
          <div>Salaire Brut :</div>
          <div class="font-semibold text-right">4 666 PLN</div>
          <div>Charges Patronales (≈ 20%) :</div>
          <div class="font-semibold text-right">+ 956 PLN</div>
          <div class="border-t border-slate-300 pt-2 font-bold mt-2">COÛT TOTAL EMPLOYEUR :</div>
          <div class="border-t border-slate-300 pt-2 font-bold text-right mt-2 text-emerald-700">≈ 5 622 PLN</div>
        </div>
        <p class="text-xs text-center mt-4 text-slate-500">Soit environ <strong>1 315 € coût total</strong> pour l'entreprise.</p>
      </div>

      <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Pourquoi est-ce intéressant pour votre business ?</h2>
      <p class="mb-4">
        Embaucher en Pologne, ce n'est pas chercher le "low cost" à tout prix (pour cela, l'Asie reste moins chère). C'est chercher le <strong>rapport qualité/prix</strong>.
      </p>
      <p class="mb-4">
        Pour environ <strong>1 300 - 1 500 € coût total</strong>, vous pouvez avoir un employé junior motivé, qui parle souvent anglais, dans un cadre juridique stable et européen (UE).
      </p>

      <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Ce qu'il faut retenir</h2>
      <p class="mb-4">
        Le SMIC polonais augmente vite (+8,5% par rapport à mi-2024), signe que le pays se développe. Mais l'écart avec l'Europe de l'Ouest reste massif pour un employeur, surtout grâce aux charges sociales plus légères et à l'impôt sur les sociétés réduit (9% pour les petites entreprises).
      </p>
      
      <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mt-8">
        <p class="font-semibold text-blue-900">Vous voulez embaucher en Pologne ?</p>
        <p class="text-blue-800 text-sm mt-1">
          Il vous faut d'abord une structure locale. Le <a href="/pologne-business-pack" class="underline font-bold">Pack Pologne Premium</a> contient tout ce qu'il faut pour démarrer : statuts, guide fiscal et modèles de contrats.
        </p>
      </div>
    `,
  },
  "llc-delaware-vs-wyoming": {
    title: "LLC Delaware vs Wyoming : Le comparatif honnête",
    date: "28 Novembre 2025",
    category: "USA",
    content: `
      <p class="mb-4">C'est la question N°1 de nos clients. On vous dit tout.</p>
      <p class="mb-4">Le Delaware est prestigieux, le Wyoming est économique. Faites votre choix en fonction de vos besoins réels, pas de la "hype".</p>
      <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Le Delaware : Pour les Startups</h2>
      <p class="mb-4">Si vous visez une levée de fonds auprès de VCs américains, le Delaware est obligatoire. C'est le standard.</p>
      <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Le Wyoming : Pour les Freelances & E-commerçants</h2>
      <p class="mb-4">Moins de frais annuels, anonymat garanti, pas d'impôt sur le revenu de l'État. C'est le choix pragmatique pour 90% des entrepreneurs solos.</p>
    `,
  },
  "compte-bancaire-llc-pologne-guide": {
    title: "Compte Bancaire : Le guide de survie pour LLC & Pologne (2025)",
    date: "3 Décembre 2025",
    category: "Finance",
    content: `
      <p class="lead text-xl text-slate-600 mb-8">
        C'est le cauchemar de tout entrepreneur international : vous avez vos statuts, votre Kbis (ou Articles of Organization), mais la banque vous dit "non".
        Pourquoi est-ce si compliqué ? Et surtout, comment ne pas se retrouver avec une société "coquille vide" sans compte pour encaisser ?
      </p>

      <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Le mythe de la "banque traditionnelle"</h2>
      <p class="mb-4">
        Oubliez tout de suite l'idée d'aller voir votre conseiller BNP ou Société Générale du coin pour ouvrir un compte à votre LLC américaine ou votre Sp. z o.o. polonaise.
        Pour eux, "société étrangère" = "risque de blanchiment". Ils refuseront dans 99% des cas, sauf si vous pesez déjà des millions.
      </p>

      <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Pour une LLC USA : La Jungle des Fintechs</h2>
      <p class="mb-4">
        Pendant longtemps, certaines banques en ligne étaient la référence. Aujourd'hui, le paysage a changé. Elles sont devenues extrêmement sélectives, fermant parfois les comptes des résidents de certains pays sans préavis.
      </p>
      <h3 class="font-bold text-lg mb-2">Attention aux refus "silencieux"</h3>
      <p class="mb-4">
        Beaucoup d'entrepreneurs tentent d'ouvrir des comptes seuls sur des plateformes populaires, pour se voir rejeter après 3 semaines d'attente sans explication. Le problème vient souvent d'une mauvaise présentation de l'activité ou d'un "Operating Agreement" mal rédigé.
      </p>
      <p class="mb-4">
        Chez <strong>Bridgely</strong>, nous savons exactement quelles portes frapper en fonction de votre activité (E-commerce, Consulting, SaaS) et comment présenter votre dossier pour maximiser vos chances d'ouverture immédiate.
      </p>

      <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Pour la Pologne : Le réseau fait tout</h2>
      <p class="mb-4">
        La Pologne est plus traditionnelle. Les grandes banques historiques offrent d'excellents services et de vrais IBAN polonais. Mais elles exigent presque toujours une présence physique et, surtout, une <strong>introduction</strong>.
      </p>
      <p class="mb-4">
        Arriver au guichet sans parler polonais et sans rendez-vous qualifié est le meilleur moyen de perdre sa journée.
      </p>
      <p class="mb-4">
        Il existe des alternatives 100% en ligne pour démarrer, mais là encore, la conformité est stricte. Nous guidons nos clients vers les établissements qui comprennent les entrepreneurs internationaux.
      </p>

      <div class="bg-amber-50 border-l-4 border-amber-500 p-4 mt-8">
        <p class="font-semibold text-amber-900">Attention au "De-risking"</p>
        <p class="text-amber-800 text-sm mt-1">
          Ne gardez jamais 100% de votre trésorerie sur une seule Fintech. Elles peuvent geler un compte pour vérification pendant des semaines. Ayez toujours au moins <strong>deux comptes</strong>. C'est une stratégie de structuration que nous mettons en place systématiquement avec nos clients Premium.
        </p>
      </div>

      <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Ne restez pas bloqué</h2>
      <p class="mb-4">
        L'ouverture du compte bancaire ne devrait pas être un frein. C'est une formalité administrative si l'on a les bons contacts.
        Ne prenez pas le risque de bloquer votre business pendant des mois.
      </p>
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
              <a
                href="https://calendly.com/hinnovllc/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-slate-900"
              >
                Parler à un expert
              </a>
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
