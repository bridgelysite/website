import Link from "next/link";
import { BuyButton } from "@/components/BuyButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consulting Expert | Bridgely",
  description: "45 minutes avec un expert pour une recommandation nette sur votre projet Pologne ou LLC USA. Pas de théorie, un plan d'action concret.",
  alternates: {
    canonical: "https://www.bridgely.fr/consulting-international",
  },
};

export default function ConsultingPage() {
  return (
    <div className="section pb-20">
      <div className="container-bridgely max-w-3xl">
        {/* HERO SECTION */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-blue-600 bg-blue-50 rounded-full mb-4">
            Consulting Expert
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Une réponse claire. Maintenant. <br />
            <span className="text-[color:var(--color-primary)]">Sans approximation.</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Vous avez une question précise sur la <strong>Pologne</strong>, la{" "}
            <strong>création d’entreprise</strong>, les <strong>LLC USA</strong>
            , votre <strong>fiscalité</strong> ou un doute sur un montage ?
          </p>
        </div>

        {/* PROMESSE */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 sm:p-10 mb-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[color:var(--color-primary)] to-blue-400"></div>
          
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
               <h2 className="text-2xl font-bold text-slate-900 mb-4">
                En 45 minutes, vous repartez avec une recommandation nette.
              </h2>
              <p className="text-slate-600 mb-6">
                Pas de jargon. Pas de théorie. Juste ce que vous devez faire.
                Argumenté et immédiatement exploitable.
              </p>
              
              <div className="flex items-center gap-4">
                 <div className="flex flex-col">
                    <span className="text-3xl font-bold text-slate-900">149 €</span>
                    <span className="text-xs text-slate-500">Session de 45 min + Récap écrit</span>
                 </div>
                 <BuyButton 
                    priceId="price_1QjIkliRPyuf04COMX7O0M42" // ID TEMPORAIRE - À REMPLACER
                    className="btn-primary px-6 py-3 text-sm shadow-lg shadow-blue-500/20"
                 >
                    🔵 Prendre rendez-vous
                 </BuyButton>
              </div>
            </div>
            
            {/* IMAGE ou VISUEL ABSTRAIT */}
            <div className="w-full md:w-1/3 bg-slate-50 rounded-2xl p-6 border border-slate-100 text-center">
                <div className="text-4xl mb-2">🎯</div>
                <p className="text-sm font-semibold text-slate-900">Objectif</p>
                <p className="text-xs text-slate-500 mt-1">
                  Vous aider à décider en confiance, sans perdre des semaines.
                </p>
            </div>
          </div>
        </div>

        {/* DÉTAILS : Ce que vous obtenez */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="text-amber-400">⭐</span> Ce que vous obtenez
            </h3>
            <ul className="space-y-4">
              {[
                "45 minutes avec un expert qui connaît la pratique",
                "Analyse immédiate de votre situation (Pologne / USA / Europe)",
                "Réponse claire + recommandation unique (pas 3 scénarios flous)",
                "Points d’attention légaux & fiscaux",
                "Plan d’action concret en 3 étapes",
                "Récap écrit après la session (inclus)",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700 text-sm">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="text-blue-500">🤝</span> Pour qui c’est fait ?
            </h3>
             <ul className="space-y-4">
              {[
                "Entrepreneurs qui s’installent en Pologne",
                "Freelances, consultants, créateurs",
                "E-commerce, agences et SaaS",
                "Personnes qui envisagent une LLC USA",
                "Nomades fiscaux / relocations",
                "Toute personne qui veut éviter les erreurs coûteuses",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700 text-sm">
                  <span className="text-[color:var(--color-primary)] mt-0.5">➜</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* POURQUOI ÇA MARCHE */}
        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 text-center max-w-2xl mx-auto">
          <h3 className="text-xl font-bold text-slate-900 mb-4">💬 Pourquoi ça marche si bien ?</h3>
          <p className="text-slate-600 mb-6">
            Parce que vous ne payez pas pour une conversation. <br/>
            Vous payez pour une <strong>décision claire</strong>, basée sur :
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <span className="bg-white px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 shadow-sm">15 ans d’expérience</span>
            <span className="bg-white px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 shadow-sm">Le terrain réel</span>
            <span className="bg-white px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 shadow-sm">Légal & Faisable</span>
          </div>
          <p className="text-sm font-medium text-slate-800 mb-8">
            C’est net. Serein. Professionnel. <br/>
            <span className="text-slate-500 font-normal">Pas de promesses magiques. Pas de bullshit.</span>
          </p>
          
          <BuyButton 
            priceId="price_1QjIkliRPyuf04COMX7O0M42" // ID TEMPORAIRE
            className="btn-primary w-full sm:w-auto"
          >
            Prendre rendez-vous — 149 €
          </BuyButton>
        </div>

      </div>
    </div>
  );
}
