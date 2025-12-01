import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Création Société en Pologne (sp. z o.o.) | Fiscalité 9% | Bridgely",
  description:
    "Créez votre société en Pologne clé en main. Accompagnement complet : statuts, NIP, TVA, comptabilité. Profitez d'une fiscalité à 9% en Europe avec Bridgely.",
  alternates: {
    canonical: "https://bridgely.fr/creation-societe-pologne",
  },
  openGraph: {
    title: "Création Société en Pologne (sp. z o.o.) | Fiscalité 9% | Bridgely",
    description: "Profitez d'une fiscalité à 9% et d'un cadre pro-business en Europe.",
    url: "https://bridgely.fr/creation-societe-pologne",
  },
};

export default function CreationPolognePage() {
  return (
    <div className="section">
      <div className="container-bridgely max-w-4xl">
        <h1 className="section-title">
          Création de société en Pologne (sp. z o.o. & activités individuelles)
        </h1>
        <p className="section-subtitle mb-8">
          Une solution premium pour structurer votre activité en Europe dans un
          pays pro-business, avec une fiscalité moderne et une administration
          pragmatique.
        </p>

        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 mb-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">
            Ce que nous prenons en charge
          </h2>
          <ul className="space-y-3 text-sm text-slate-700">
            <li>• Analyse de votre situation et choix du type de structure</li>
            <li>• Rédaction et dépôt des statuts de la sp. z o.o. ou enregistrement de l’activité</li>
            <li>• Enregistrement auprès du registre compétent (KRS / CEIDG)</li>
            <li>• Obtention des numéros NIP & REGON</li>
            <li>• Option TVA si nécessaire (PL & intra-UE)</li>
            <li>• Mise en relation avec une comptabilité de confiance en Pologne</li>
            <li>• Pack de documents digitaux (modèles de factures, contrats de base, etc.)</li>
          </ul>
        </div>

        <div className="grid gap-6 md:grid-cols-2 mb-10">
          <div className="bg-slate-900 text-slate-50 rounded-3xl p-6">
            <h3 className="text-lg font-semibold mb-2">Formule Standard</h3>
            <p className="text-sm text-slate-200 mb-4">
              Idéale pour les freelances, consultants, e-commerçants et petites
              structures qui veulent se lancer proprement.
            </p>
            <ul className="text-sm space-y-2 mb-4">
              <li>• Création complète de la société</li>
              <li>• NIP, REGON, TVA si nécessaire</li>
              <li>• Mise en relation comptable</li>
              <li>• 30 jours de support par e-mail</li>
            </ul>
            <p className="text-sm font-semibold">
              Honoraires : <span className="text-[color:var(--color-accent)]">990 €</span> HT
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-6">
            <h3 className="text-lg font-semibold mb-2">Formule Plus (recommandée)</h3>
            <p className="text-sm text-slate-600 mb-4">
              Pour les entrepreneurs qui veulent aller plus loin avec une vision
              claire de la fiscalité et de la structuration future.
            </p>
            <ul className="text-sm space-y-2 mb-4 text-slate-700">
              <li>• Tout ce qui est inclus dans la Formule Standard</li>
              <li>• 1 session de consulting (45 min) sur la structuration internationale</li>
              <li>• Pack digital Pologne offert</li>
              <li>• Support étendu 60 jours</li>
            </ul>
            <p className="text-sm font-semibold">
              Honoraires : <span className="text-[color:var(--color-accent)]">1 490 €</span> HT
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link href="/contact" className="btn-primary">
            Demander un accompagnement
          </Link>
          <Link href="/pologne-business-pack" className="btn-secondary">
            Voir le Pack digital Pologne
          </Link>
        </div>
      </div>
    </div>
  );
}
