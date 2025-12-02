import type { Metadata } from "next";
import Link from "next/link";
import { ConfigurableBuyButton } from "@/components/ConfigurableBuyButton";

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

        <div className="grid gap-6 md:grid-cols-2 mb-6">
          <div className="bg-slate-900 text-slate-50 rounded-3xl p-6 flex flex-col">
            <h3 className="text-lg font-semibold mb-2">Formule Standard</h3>
            <p className="text-sm text-slate-200 mb-4">
              Idéale pour les freelances, consultants, e-commerçants et petites
              structures qui veulent se lancer proprement.
            </p>
            <ul className="text-sm space-y-2 mb-4 flex-1">
              <li>• Création complète de la société</li>
              <li>• NIP, REGON, TVA si nécessaire</li>
              <li>• Mise en relation comptable</li>
              <li>• 30 jours de support par e-mail</li>
            </ul>
            <div className="mt-4">
              <ConfigurableBuyButton
                  mainPriceId="price_1SZVOiRPyuf04COPv5rrXKrP"
                  mainPriceLabel="Formule Standard"
                  basePrice={990}
                  extraOptionPriceId="price_1SZVRrRPyuf04COPkLcCj0Rb"
                  extraOptionPrice={350}
                  extraOptionLabel="Associé supplémentaire"
                  buttonLabel="Commander la Standard"
                  className="w-full bg-[color:var(--color-accent)] hover:bg-amber-300 text-slate-900 font-bold py-3 rounded-xl transition-colors text-sm"
                />
              <p className="text-[10px] text-slate-400 mt-2 text-center">
                + 350 € par associé supplémentaire
              </p>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-6 flex flex-col shadow-sm">
            <h3 className="text-lg font-semibold mb-2 text-slate-900">Formule Plus (recommandée)</h3>
            <p className="text-sm text-slate-600 mb-4">
              Pour les entrepreneurs qui veulent aller plus loin avec une vision
              claire de la fiscalité et de la structuration future.
            </p>
            <ul className="text-sm space-y-2 mb-4 text-slate-700 flex-1">
              <li>• Tout ce qui est inclus dans la Formule Standard</li>
              <li>• <strong className="text-slate-900">Obtention du numéro NIP (incluse)</strong></li>
              <li>• Pack digital Pologne offert</li>
              <li>• Support étendu 60 jours</li>
            </ul>
            <div className="mt-4">
              <ConfigurableBuyButton
                  mainPriceId="price_1SZVQ3RPyuf04COPAt7wWulO"
                  mainPriceLabel="Formule Plus"
                  basePrice={1490}
                  extraOptionPriceId="price_1SZVRrRPyuf04COPkLcCj0Rb"
                  extraOptionPrice={350}
                  extraOptionLabel="Associé supplémentaire"
                  buttonLabel="Commander la Formule Plus"
                  className="w-full btn-primary py-3 rounded-xl text-sm justify-center"
                />
              <p className="text-[10px] text-slate-500 mt-2 text-center">
                + 350 € par associé supplémentaire
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mb-10">
            <p className="text-xs text-slate-500 italic">
                * Les frais de greffe, de domiciliation (à déterminer) et du tribunal de commerce (350 PLN) seront à payer séparément.
            </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/contact" className="btn-secondary">
            Une question avant de commander ?
          </Link>
          <Link href="/pologne-business-pack" className="text-sm font-semibold text-slate-600 hover:text-slate-900 underline flex items-center">
            Voir le Pack digital Pologne uniquement
          </Link>
        </div>
      </div>
    </div>
  );
}


