import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Création LLC USA (Delaware, Wyoming) pour non-résidents | Bridgely",
  description:
    "Ouvrez votre LLC aux États-Unis sans vous déplacer. Gestion complète : Agent enregistré, EIN, Operating Agreement. Idéal e-commerce et services.",
  alternates: {
    canonical: "https://bridgely.fr/llc-usa",
  },
  openGraph: {
    title: "Création LLC USA (Delaware, Wyoming) | Bridgely",
    description: "Lancez votre activité aux USA avec une LLC clé en main.",
    url: "https://bridgely.fr/llc-usa",
  },
};

export default function LlcUsaPage() {
  return (
    <div className="section">
      <div className="container-bridgely max-w-4xl">
        <h1 className="section-title">
          Création de LLC aux États-Unis
        </h1>
        <p className="section-subtitle mb-8">
          Ouvrez une LLC dans l’État le plus adapté à votre activité
          (Wyoming, Delaware, New Mexico, etc.) avec un accompagnement complet,
          sans vous déplacer et en maîtrisant vos obligations.
        </p>

        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 mb-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">
            Ce que nous gérons pour vous
          </h2>
          <ul className="space-y-3 text-sm text-slate-700">
            <li>• Recommandation de l’État le plus pertinent (Wyoming, Delaware, NM…)</li>
            <li>• Création de la LLC et dépôt des documents</li>
            <li>• Agent enregistré (registered agent) via partenaires</li>
            <li>• Obtention de l’EIN (numéro fiscal) si nécessaire</li>
            <li>• Pack de documents digitaux (Operating Agreement, modèles de factures, etc.)</li>
            <li>• Explication claire des obligations annuelles et des risques</li>
          </ul>
        </div>

        <div className="bg-white/80 backdrop-blur border border-slate-100 rounded-3xl shadow-md p-6 sm:p-8 mb-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">
            Ce que nous gérons pour vous
          </h2>
          <ul className="space-y-3 text-sm text-slate-700">
            <li>• Recommandation de l’État le plus pertinent (Wyoming, Delaware, NM…)</li>
            <li>• Création de la LLC et dépôt des documents</li>
            <li>• Agent enregistré (registered agent) via partenaires</li>
            <li>• Obtention de l’EIN (numéro fiscal) si nécessaire</li>
            <li>• Pack de documents digitaux (Operating Agreement, modèles de factures, etc.)</li>
            <li>• Explication claire des obligations annuelles et des risques</li>
          </ul>
        </div>

        <div className="grid gap-6 md:grid-cols-2 mb-10">
          <div className="bg-slate-900 text-slate-50 rounded-3xl p-6">
            <h3 className="text-lg font-semibold mb-2">LLC Standard</h3>
            <p className="text-sm text-slate-200 mb-4">
              Création de LLC pour activité en ligne, consulting, e-commerce,
              SaaS, etc.
            </p>
            <ul className="text-sm space-y-2 mb-4">
              <li>• Création de la LLC dans l’État choisi</li>
              <li>• Coordination avec l’agent enregistré</li>
              <li>• EIN (si nécessaire)</li>
              <li>• Pack de documents LLC</li>
            </ul>
            <p className="text-sm font-semibold">
              Honoraires Bridgely (hors frais d’État) :{" "}
              <span className="text-[color:var(--color-accent)]">890 €</span> HT
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-6">
            <h3 className="text-lg font-semibold mb-2">LLC + Europe</h3>
            <p className="text-sm text-slate-600 mb-4">
              Pour les entrepreneurs qui combinent activité européenne et
              américaine et veulent une vision claire des impacts.
            </p>
            <ul className="text-sm space-y-2 mb-4 text-slate-700">
              <li>• Tout ce qui est inclus dans LLC Standard</li>
              <li>• 1 session de consulting structuration (Europe + USA)</li>
              <li>• Guide digital “LLC & fiscalité internationale”</li>
            </ul>
            <p className="text-sm font-semibold">
              Honoraires Bridgely (hors frais d’État) :{" "}
              <span className="text-[color:var(--color-accent)]">1 290 €</span> HT
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link href="/contact" className="btn-primary">
            Parler de mon projet LLC
          </Link>
          <Link href="/consulting-international" className="btn-secondary">
            Voir le consulting international
          </Link>
        </div>
      </div>
    </div>
  );
}
