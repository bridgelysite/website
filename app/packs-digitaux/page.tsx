import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Packs & Guides Digitaux Création Entreprise (Pologne, USA) | Bridgely",
  description:
    "Guides pratiques et modèles de contrats à télécharger. Comprenez la fiscalité polonaise et américaine (LLC Delaware) avant de vous lancer. À partir de 29€.",
  alternates: {
    canonical: "https://bridgely.fr/packs-digitaux",
  },
};

export default function PacksDigitauxPage() {
  return (
    <div className="section">
      <div className="container-bridgely max-w-4xl">
        <h1 className="section-title">Packs Digitaux & Guides</h1>
        <p className="section-subtitle mb-8">
          Des ressources concrètes et abordables pour comprendre la création
          d’entreprise à l’étranger avant de vous lancer.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Pack 1 - Guide Pologne */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-500 bg-slate-100 rounded-full mb-2">
                Pologne
              </span>
              <h3 className="text-lg font-semibold text-slate-900">
                Avantages Société Pologne
              </h3>
            </div>
            <p className="text-sm text-slate-600 mb-4 flex-1">
              Pourquoi choisir la Pologne ? Fiscalité (9% IS), charges sociales,
              coût de la vie. Un guide clair pour décider.
            </p>
            <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xl font-bold text-slate-900">29 €</span>
              <button className="btn-primary px-4 py-2 text-xs h-auto">
                Acheter
              </button>
            </div>
          </div>

          {/* Pack 2 - Guide Delaware */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-500 bg-slate-100 rounded-full mb-2">
                USA
              </span>
              <h3 className="text-lg font-semibold text-slate-900">
                Avantages LLC Delaware
              </h3>
            </div>
            <p className="text-sm text-slate-600 mb-4 flex-1">
              Pourquoi le Delaware ? Anonymat, fiscalité, protection juridique.
              Comprenez pourquoi les startups l'adorent.
            </p>
            <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xl font-bold text-slate-900">29 €</span>
              <button className="btn-primary px-4 py-2 text-xs h-auto">
                Acheter
              </button>
            </div>
          </div>

          {/* Pack 3 - Complet Pologne */}
          <div className="bg-slate-900 text-white rounded-2xl p-5 flex flex-col">
             <div className="mb-4">
              <span className="inline-block px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-900 bg-yellow-400 rounded-full mb-2">
                Complet
              </span>
              <h3 className="text-lg font-semibold">
                Pack "Pologne Business"
              </h3>
            </div>
            <p className="text-sm text-slate-300 mb-4 flex-1">
              Guide complet, statuts commentés, checklist, modèles de contrats.
              Tout pour se préparer sérieusement.
            </p>
            <div className="mt-auto pt-4 border-t border-slate-700 flex items-center justify-between">
              <div className="flex flex-col leading-none">
                 <span className="text-xl font-bold">79 €</span>
                 <span className="text-[10px] line-through text-slate-400">129 €</span>
              </div>
              <Link href="/pologne-business-pack" className="btn-secondary px-4 py-2 text-xs h-auto border-transparent">
                Voir le détail
              </Link>
            </div>
          </div>

          {/* Pack 4 - Complet LLC Delaware */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col">
             <div className="mb-4">
              <span className="inline-block px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white bg-slate-800 rounded-full mb-2">
                Nouveau
              </span>
              <h3 className="text-lg font-semibold text-slate-900">
                Pack Complet LLC Delaware
              </h3>
            </div>
            <p className="text-sm text-slate-600 mb-4 flex-1">
              Operating Agreement modèle, résolutions annuelles, guide compliance & banking. L'essentiel pour gérer sa LLC.
            </p>
            <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xl font-bold text-slate-900">89 €</span>
              <button className="btn-primary px-4 py-2 text-xs h-auto">
                Acheter
              </button>
            </div>
          </div>

          {/* Pack 5 - Kit Nomad */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-emerald-700 bg-emerald-50 rounded-full mb-2">
                Lifestyle
              </span>
              <h3 className="text-lg font-semibold text-slate-900">
                Kit "Freelance Nomad"
              </h3>
            </div>
            <p className="text-sm text-slate-600 mb-4 flex-1">
              Checklist avant départ, assurance santé internationale, résidence fiscale : ne rien oublier avant de partir.
            </p>
            <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xl font-bold text-slate-900">49 €</span>
              <button className="btn-primary px-4 py-2 text-xs h-auto">
                Acheter
              </button>
            </div>
          </div>

           {/* Pack 6 - Contrats Express */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-purple-700 bg-purple-50 rounded-full mb-2">
                Outils
              </span>
              <h3 className="text-lg font-semibold text-slate-900">
                Pack Contrats Express
              </h3>
            </div>
            <p className="text-sm text-slate-600 mb-4 flex-1">
              Modèles de contrats de prestation bilingues (FR/EN) solides pour sécuriser vos missions internationales.
            </p>
            <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xl font-bold text-slate-900">49 €</span>
              <button className="btn-primary px-4 py-2 text-xs h-auto">
                Acheter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
