import Link from "next/link";
import { BuyButton } from "@/components/BuyButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consulting International | Bridgely",
  description:
    "Réservez une session de consulting de 45 min. Une réponse claire, nette et sans jargon sur votre structuration en Pologne ou aux USA.",
  alternates: {
    canonical: "https://www.bridgely.fr/consulting-international",
  },
};

export default function ConsultingPage() {
  return (
    <main className="bg-slate-50 min-h-screen pb-20">
      {/* Header Section */}
      <section className="bg-white pt-32 pb-16 border-b border-slate-200">
        <div className="container-bridgely max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700 mb-6 uppercase tracking-wider">
            🔷 Consulting Expert
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Une réponse claire. Maintenant. <br />
            <span className="text-[color:var(--color-primary)]">
              Sans approximation.
            </span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Vous avez une question précise sur la Pologne, les LLC USA, votre
            fiscalité ou un doute sur un montage ? <br />
            <span className="font-semibold text-slate-900">
              En 45 minutes, vous repartez avec une recommandation nette,
              argumentée, et immédiatement exploitable.
            </span>
          </p>
        </div>
      </section>

      <div className="container-bridgely max-w-3xl -mt-8 relative z-10">
        {/* Main Content Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
          {/* Section: Intro Lists */}
          <div className="p-8 sm:p-12 border-b border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-6">
              Pas de jargon. Pas de théorie. Juste ce que vous devez faire.
            </h3>
            <ul className="grid gap-3 sm:grid-cols-2 mb-8">
              {[
                "La création d’entreprise en Pologne",
                "Les LLC aux USA",
                "Votre fiscalité personnelle",
                "Un doute sur un montage",
                "Une décision à prendre ?",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700">
                  <span className="text-blue-500 mt-1">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section: Ce que vous obtenez */}
          <div className="bg-slate-50/50 p-8 sm:p-12 border-b border-slate-100">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6">
              ⭐ Ce que vous obtenez
            </h2>
            <ul className="space-y-4">
              {[
                "45 minutes avec un expert qui connaît la pratique",
                "Analyse immédiate de votre situation (Pologne / USA / Europe)",
                "Réponse claire + recommandation unique (pas 3 scénarios flous)",
                "Points d’attention légaux & fiscaux",
                "Plan d’action concret en 3 étapes",
                "Récap écrit après la session (inclus)",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-slate-800 font-medium">
                  <div className="h-6 w-6 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0 text-xs font-bold">
                    {i + 1}
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-100">
              <p className="text-sm text-blue-800 font-medium text-center">
                🎯 Objectif : vous aider à prendre une décision en confiance, sans
                perdre des semaines à chercher des infos contradictoires.
              </p>
            </div>
          </div>

          {/* Section: Pour qui + Pourquoi */}
          <div className="p-8 sm:p-12 grid gap-12 sm:grid-cols-2">
            <div>
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                🤝 Pour qui c’est fait ?
              </h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {[
                  "Entrepreneurs qui s’installent en Pologne",
                  "Freelances, consultants, créateurs",
                  "E-commerce, agences et SaaS",
                  "Personnes qui envisagent une LLC USA",
                  "Nomades fiscaux / relocations",
                  "Ceux qui veulent éviter les erreurs coûteuses",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                💬 Pourquoi ça marche ?
              </h3>
              <div className="text-sm text-slate-600 space-y-3">
                <p>
                  Vous ne payez pas pour une conversation. Vous payez pour une{" "}
                  <strong className="text-slate-900">décision claire</strong>, basée
                  sur :
                </p>
                <ul className="list-disc list-inside space-y-1 ml-1">
                  <li>15 ans d’expérience</li>
                  <li>Le terrain réel</li>
                  <li>Ce qui est légal, faisable, et efficace</li>
                </ul>
                <p className="italic text-slate-500 mt-2">
                  "C’est net. Serein. Professionnel. Pas de promesses magiques.
                  Pas de bullshit."
                </p>
              </div>
            </div>
          </div>

          {/* Pricing & CTA Section */}
          <div className="bg-slate-900 p-8 sm:p-12 text-center text-white">
            <h2 className="text-2xl font-bold mb-2">Session Consulting Expert</h2>
            <div className="text-4xl font-extrabold text-white mb-6">
              149 € <span className="text-base font-normal text-slate-400">HT</span>
            </div>
            
            {/* 
              TODO: Insérer le priceId du Consulting (149€) ci-dessous 
              Exemple: priceId="price_1Qj..." 
            */}
            <BuyButton 
              priceId="price_CONSULTING_PLACEHOLDER" 
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-blue-500/25 text-lg"
            >
              🔵 Prendre rendez-vous
            </BuyButton>
            
            <p className="mt-4 text-xs text-slate-400 max-w-md mx-auto">
              Paiement sécurisé via Stripe. Facture éditée automatiquement.
              <br />
              Vous recevrez le lien du calendrier immédiatement après le paiement.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
