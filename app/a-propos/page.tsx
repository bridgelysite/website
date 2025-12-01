import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À Propos de Bridgely | Expert Structuration Internationale",
  description:
    "Bridgely accompagne les entrepreneurs francophones dans la création de sociétés en Pologne et aux USA. Une approche transparente et sans montages exotiques.",
  alternates: {
    canonical: "https://bridgely.fr/a-propos",
  },
};

export default function AProposPage() {
  return (
    <div className="section">
      <div className="container-bridgely max-w-3xl">
        <h1 className="section-title">À propos de Bridgely</h1>
        <p className="section-subtitle mb-8">
          Bridgely est un cabinet digital indépendant, spécialisé dans la
          structuration d’activité en Pologne et aux États-Unis pour les
          entrepreneurs francophones.
        </p>

        <div className="space-y-5 text-sm text-slate-700">
          <p>
            Nous avons une approche simple : partir de votre réalité (revenus,
            clients, pays de résidence, projets) pour proposer une structure
            cohérente et réaliste, sans promesse abusive ni montage exotique.
          </p>
          <p>
            Notre travail ne consiste pas à “vendre des sociétés clés en main”
            sans explication, mais à vous donner un cadre clair, compréhensible
            et durable, que ce soit en Pologne, aux États-Unis ou à cheval sur
            plusieurs juridictions.
          </p>
          <p>
            Bridgely collabore avec des comptables, avocats et prestataires
            locaux de confiance, tout en restant votre interlocuteur principal
            pour garder une vue globale et cohérente.
          </p>
        </div>
      </div>
    </div>
  );
}
