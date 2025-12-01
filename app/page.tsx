import Link from "next/link";
import { BuyButton } from "@/components/BuyButton";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="section pb-4">
        <div className="relative">
          {/* halo de fond  */}
          <div className="pointer-events-none absolute inset-x-0 -top-40 -z-10 h-72 bg-gradient-to-b from-[rgba(35,78,158,0.18)] via-transparent to-transparent blur-2xl" />

          <div className="container-bridgely grid gap-10 lg:grid-cols-[1.1fr_minmax(0,0.9fr)] lg:items-center">
            {/* gauche */}
            <div>
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-[11px] font-medium text-slate-600 shadow-sm border border-slate-200/50">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  <span>Structures optimisées • Europe & USA</span>
                </div>
                
                {/* PREUVE SOCIALE : 500+ CLIENTS */}
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="h-6 w-6 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                         {/* Placeholder avatars générés par CSS/SVG pour éviter les images externes */}
                         <svg className="h-full w-full text-slate-400 bg-slate-100" fill="currentColor" viewBox="0 0 24 24">
                           <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                         </svg>
                      </div>
                    ))}
                  </div>
                  <div className="text-xs font-medium text-slate-600">
                    <span className="font-bold text-slate-900">500+</span> entrepreneurs accompagnés
                  </div>
                </div>
              </div>

              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--color-primary)] mb-3">
                Europe • Pologne • États-Unis
              </p>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-slate-900 mb-4">
                Créez une{" "}
                <span className="bg-gradient-to-r from-[color:var(--color-primary)] to-[color:var(--color-accent)] bg-clip-text text-transparent">
                  société en Pologne
                </span>{" "}
                ou une{" "}
                <span className="bg-gradient-to-r from-[color:var(--color-primary)] to-[color:var(--color-accent)] bg-clip-text text-transparent">
                  LLC aux États-Unis
                </span>{" "}
                sans perdre de temps.
              </h1>

              <p className="text-base text-slate-600 mb-6 max-w-xl">
                Bridgely aide les entrepreneurs à structurer leur activité en
                Pologne et aux USA, avec des process clairs, un langage simple
                et zéro vente de rêve fiscal.
              </p>

              <div className="flex flex-wrap items-center gap-3 mb-3">
                <Link href="/creation-societe-pologne" className="btn-primary">
                  Créer ma société en Pologne
                </Link>
                <Link href="/llc-usa" className="btn-secondary">
                  Créer ma LLC aux USA
                </Link>
              </div>
              
              {/* BANDEAU DÉFILANT (MARQUEE) */}
              <div className="relative mt-8 mb-4 overflow-hidden max-w-lg border-l-4 border-[color:var(--color-accent)] bg-slate-50/50 py-2">
                {/* Ligne 1 */}
                <div className="animate-marquee whitespace-nowrap mb-1">
                  <span className="text-sm font-bold text-slate-800 mr-8">
                    ⚡ OPTIMISEZ LÉGALEMENT VOTRE SITUATION
                  </span>
                  <span className="text-sm font-bold text-slate-800 mr-8">
                    ⚡ OPTIMISEZ LÉGALEMENT VOTRE SITUATION
                  </span>
                  <span className="text-sm font-bold text-slate-800 mr-8">
                    ⚡ OPTIMISEZ LÉGALEMENT VOTRE SITUATION
                  </span>
                </div>
                {/* Ligne 2 (décalée ou différente) */}
                <div className="animate-marquee whitespace-nowrap" style={{ animationDirection: 'reverse' }}>
                   <span className="text-sm font-medium text-[color:var(--color-primary)] mr-8">
                    COMME LE FONT LES ULTRA-RICHES 💎
                  </span>
                  <span className="text-sm font-medium text-[color:var(--color-primary)] mr-8">
                    COMME LE FONT LES ULTRA-RICHES 💎
                  </span>
                  <span className="text-sm font-medium text-[color:var(--color-primary)] mr-8">
                    COMME LE FONT LES ULTRA-RICHES 💎
                  </span>
                </div>
              </div>

            </div>

            {/* droite : carte “double pays” */}
            <div className="rounded-3xl bg-white/90 shadow-xl p-5 sm:p-6 lg:p-7 flex flex-col gap-5">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">
                    Vue express
                  </p>
                  <p className="text-sm text-slate-700">
                    Deux juridictions, un seul interlocuteur.
                  </p>
                </div>
                <span className="rounded-full bg-slate-900 text-[10px] font-semibold text-slate-50 px-3 py-1">
                  Bridgely
                </span>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-50/80 p-4">
                  <p className="text-xs font-semibold text-slate-500 mb-1">
                    Pologne
                  </p>
                  <p className="text-sm font-semibold text-slate-900 mb-2">
                    9 % d’IS • cadre pro-business
                  </p>
                  <ul className="text-xs text-slate-600 space-y-1.5">
                    <li>• sp. z o.o. ou activité individuelle</li>
                    <li>• Administration pragmatique</li>
                    <li>• Idéal pour activité européenne</li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-slate-50/80 p-4">
                  <p className="text-xs font-semibold text-slate-500 mb-1">
                    LLC USA
                  </p>
                  <p className="text-sm font-semibold text-slate-900 mb-2">
                    Flexibilité + image internationale
                  </p>
                  <ul className="text-xs text-slate-600 space-y-1.5">
                    <li>• Delaware, Wyoming, New Mexico…</li>
                    <li>• EIN et agent enregistré gérés</li>
                    <li>• Compréhension claire des obligations</li>
                  </ul>
                </div>
              </div>

              <div className="rounded-2xl border-dashed border-slate-200 px-4 py-3 text-xs text-slate-600 bg-slate-50/60">
                <p className="font-semibold text-slate-800 mb-1">
                  Vous hésitez entre les deux ?
                </p>
                <p className="mb-2">
                  Une session de consulting permet d’arbitrer sereinement entre
                  Pologne, LLC USA ou une combinaison des deux.
                </p>
                <Link
                  href="/consulting-international"
                  className="inline-flex text-[11px] font-semibold text-[color:var(--color-primary)] hover:underline"
                >
                  Voir le consulting international →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NOUVELLE SECTION : Packs Digitaux */}
      <section className="section bg-slate-50/50 border-t border-slate-100">
        <div className="container-bridgely">
           <div className="flex items-center justify-between mb-8">
             <div>
               <h2 className="section-title text-2xl mb-2">Packs & Guides Digitaux</h2>
               <p className="section-subtitle max-w-lg">
                 Comprendre avant de payer des milliers d'euros. Des guides clairs à petit prix.
               </p>
             </div>
             <Link href="/packs-digitaux" className="text-sm font-semibold text-[color:var(--color-primary)] hover:underline hidden sm:block">
               Voir tous les packs →
             </Link>
           </div>

           <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Pack 1 - Guide Pologne */}
              <div className="bg-white rounded-2xl shadow-sm p-5 border border-slate-100 transition hover:shadow-md flex flex-col">
                 <div className="flex justify-between items-start mb-3">
                   <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-[10px] font-bold uppercase">Pologne</span>
                   <span className="text-lg font-bold text-slate-900">29 €</span>
                 </div>
                 <h3 className="font-semibold text-slate-900 mb-2">Avantages Société Pologne</h3>
                 <p className="text-xs text-slate-500 mb-4 line-clamp-2 flex-1">Pourquoi et comment entreprendre en Pologne ? Fiscalité, charges, vie quotidienne.</p>
                 <BuyButton priceId="price_1QjIkliRPyuf04COMX7O0M37" className="btn-secondary w-full text-xs py-2 mt-auto">Acheter le guide</BuyButton>
              </div>

              {/* Pack 2 - Guide Delaware */}
              <div className="bg-white rounded-2xl shadow-sm p-5 border border-slate-100 transition hover:shadow-md flex flex-col">
                 <div className="flex justify-between items-start mb-3">
                   <span className="bg-indigo-50 text-indigo-700 px-2 py-1 rounded text-[10px] font-bold uppercase">USA</span>
                   <span className="text-lg font-bold text-slate-900">29 €</span>
                 </div>
                 <h3 className="font-semibold text-slate-900 mb-2">Avantages LLC Delaware</h3>
                 <p className="text-xs text-slate-500 mb-4 line-clamp-2 flex-1">Tout savoir sur la LLC au Delaware : anonymat, protection, zéro impôt US (sous conditions).</p>
                 <BuyButton priceId="price_1QjIkliRPyuf04COMX7O0M38" className="btn-secondary w-full text-xs py-2 mt-auto">Acheter le guide</BuyButton>
              </div>

              {/* Pack 3 - Complet Pologne */}
              <div className="bg-white rounded-2xl shadow-sm p-5 border border-slate-100 transition hover:shadow-md relative overflow-hidden flex flex-col">
                 <div className="absolute top-0 right-0 bg-yellow-400 text-[9px] font-bold px-2 py-1 rounded-bl-lg">POPULAIRE</div>
                 <div className="flex justify-between items-start mb-3">
                   <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-[10px] font-bold uppercase">Business</span>
                   <span className="text-lg font-bold text-slate-900">79 €</span>
                 </div>
                 <h3 className="font-semibold text-slate-900 mb-2">Pack Complet Pologne</h3>
                 <p className="text-xs text-slate-500 mb-4 line-clamp-2 flex-1">Statuts commentés, checklist, modèles de contrats, guide fiscal complet.</p>
                 <Link href="/pologne-business-pack" className="btn-primary w-full text-xs py-2 text-center mt-auto">Découvrir</Link>
              </div>

              {/* Pack 4 - Complet LLC Delaware */}
              <div className="bg-white rounded-2xl shadow-sm p-5 border border-slate-100 transition hover:shadow-md relative overflow-hidden flex flex-col">
                 <div className="absolute top-0 right-0 bg-slate-800 text-white text-[9px] font-bold px-2 py-1 rounded-bl-lg">NOUVEAU</div>
                 <div className="flex justify-between items-start mb-3">
                   <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-[10px] font-bold uppercase">Business</span>
                   <span className="text-lg font-bold text-slate-900">89 €</span>
                 </div>
                 <h3 className="font-semibold text-slate-900 mb-2">Pack Complet LLC Delaware</h3>
                 <p className="text-xs text-slate-500 mb-4 line-clamp-2 flex-1">Operating Agreement modèle, résolutions annuelles, guide compliance & banking.</p>
                 <BuyButton priceId="price_1QjIkliRPyuf04COMX7O0M39" className="btn-secondary w-full text-xs py-2 mt-auto">Voir le détail</BuyButton>
              </div>

              {/* Pack 5 - Freelance Nomad */}
              <div className="bg-white rounded-2xl shadow-sm p-5 border border-slate-100 transition hover:shadow-md flex flex-col">
                 <div className="flex justify-between items-start mb-3">
                   <span className="bg-emerald-50 text-emerald-700 px-2 py-1 rounded text-[10px] font-bold uppercase">Lifestyle</span>
                   <span className="text-lg font-bold text-slate-900">49 €</span>
                 </div>
                 <h3 className="font-semibold text-slate-900 mb-2">Kit "Freelance Nomad"</h3>
                 <p className="text-xs text-slate-500 mb-4 line-clamp-2 flex-1">Checklist départ, assurance santé, résidence fiscale : ne rien oublier avant de partir.</p>
                 <BuyButton priceId="price_1QjIkliRPyuf04COMX7O0M40" className="btn-secondary w-full text-xs py-2 mt-auto">Acheter</BuyButton>
              </div>

              {/* Pack 6 - Contrats Express */}
              <div className="bg-white rounded-2xl shadow-sm p-5 border border-slate-100 transition hover:shadow-md flex flex-col">
                 <div className="flex justify-between items-start mb-3">
                   <span className="bg-purple-50 text-purple-700 px-2 py-1 rounded text-[10px] font-bold uppercase">Outils</span>
                   <span className="text-lg font-bold text-slate-900">49 €</span>
                 </div>
                 <h3 className="font-semibold text-slate-900 mb-2">Pack Contrats Express</h3>
                 <p className="text-xs text-slate-500 mb-4 line-clamp-2 flex-1">Modèles de contrats de prestation bilingues (FR/EN) solides pour vos clients internationaux.</p>
                 <BuyButton priceId="price_1QjIkliRPyuf04COMX7O0M41" className="btn-secondary w-full text-xs py-2 mt-auto">Acheter</BuyButton>
              </div>
           </div>
            <div className="mt-6 text-center sm:hidden">
             <Link href="/packs-digitaux" className="text-sm font-semibold text-[color:var(--color-primary)] hover:underline">
               Voir tous les packs →
             </Link>
           </div>
        </div>
      </section>

      {/* 3 “pilliers” */}
      <section className="section pt-2 pb-10 bg-white">
        <div className="container-bridgely grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-slate-50/80 p-5">
            <p className="text-xs font-semibold text-slate-500 mb-1">
              01 • Structurer
            </p>
            <h3 className="text-sm font-semibold text-slate-900 mb-1">
              Pologne : 9 % d’IS, ZUS maîtrisable
            </h3>
            <p className="text-xs text-slate-600">
              Un pays pro-business, adapté aux freelances, e-commerçants et
              petites structures qui veulent une base européenne solide.
            </p>
          </div>
          <div className="rounded-2xl bg-slate-50/80 p-5">
            <p className="text-xs font-semibold text-slate-500 mb-1">
              02 • Étendre
            </p>
            <h3 className="text-sm font-semibold text-slate-900 mb-1">
              LLC USA : vitrine internationale
            </h3>
            <p className="text-xs text-slate-600">
              Image américaine, contrats en dollars, flexibilité de la LLC :
              utile quand c’est cohérent, pas systématique.
            </p>
          </div>
          <div className="rounded-2xl bg-slate-50/80 p-5">
            <p className="text-xs font-semibold text-slate-500 mb-1">
              03 • Clarifier
            </p>
            <h3 className="text-sm font-semibold text-slate-900 mb-1">
              Une vue globale sur votre situation
            </h3>
            <p className="text-xs text-slate-600">
              On part de vos revenus, de vos pays, de vos projets. Pas de
              montage exotique, pas de promesse illégale.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS dynamique */}
      <section className="section">
        <div className="container-bridgely">
          <h2 className="section-title">Un process très simple, mais précis</h2>
          <p className="section-subtitle mb-8">
            Vous n’avez pas besoin de devenir expert en droit polonais ou
            américain. Vous avez besoin de décisions claires, documentées.
          </p>

          <div className="grid gap-6 md:grid-cols-4 text-sm text-slate-700">
            {[
              {
                step: "Étape 1",
                title: "Diagnostic rapide",
                body: "Mail ou message : activité, CA, pays de résidence, ce que vous envisagez.",
              },
              {
                step: "Étape 2",
                title: "Scénario recommandé",
                body: "On vous propose 1 ou 2 options réalistes, avec avantages / limites.",
              },
              {
                step: "Étape 3",
                title: "Création & numéros",
                body: "Formalités, numéros fiscaux, coordination avec les prestataires locaux.",
              },
              {
                step: "Étape 4",
                title: "Mise en route & suivi",
                body: "Compta, TVA, obligations minimales : vous savez exactement quoi faire.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="relative rounded-2xl bg-white shadow-sm p-4"
              >
                <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500 mb-1">
                  {item.step}
                </p>
                <p className="text-sm font-semibold text-slate-900 mb-1">
                  {item.title}
                </p>
                <p className="text-xs text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="section pt-4 pb-14">
        <div className="container-bridgely max-w-3xl text-center">
          <h2 className="section-title">
            Vous hésitez encore entre Pologne, LLC USA ou les deux ?
          </h2>
          <p className="section-subtitle mb-6 mx-auto">
            On peut faire un point structuré en 45 minutes, avec un récap écrit
            pour que vous puissiez décider calmement, chiffres et risques en
            main.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/consulting-international" className="btn-primary">
              Réserver un consulting
            </Link>
            <Link href="/contact" className="btn-secondary">
              Poser une première question rapide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
