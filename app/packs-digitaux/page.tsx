import Link from "next/link";
import { BuyButton } from "@/components/BuyButton";

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
          {/* Pack 1 - Pack Pologne Premium */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col relative overflow-hidden">
             <div className="absolute top-0 right-0 bg-yellow-400 text-[9px] font-bold px-2 py-1 rounded-bl-lg">POPULAIRE</div>
             <div className="mb-4">
              <span className="inline-block px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-500 bg-slate-100 rounded-full mb-2">
                🇵🇱 Pologne
              </span>
              <h3 className="text-lg font-semibold text-slate-900">
                Pack Pologne Premium
              </h3>
            </div>
            <p className="text-sm text-slate-600 mb-4 flex-1">
              Créer sa société en Pologne (sans erreur). Statuts commentés, modèles de contrats, guide fiscal clair, checklist complète.
            </p>
            <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
              <div className="flex flex-col leading-none">
                 <span className="text-xl font-bold text-slate-900">79 €</span>
              </div>
              <Link href="/pologne-business-pack" className="btn-primary px-4 py-2 text-xs h-auto border-transparent">
                Découvrir
              </Link>
            </div>
          </div>

          {/* Pack 2 - Guide Pologne */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-500 bg-slate-100 rounded-full mb-2">
                🇵🇱 Guide
              </span>
              <h3 className="text-lg font-semibold text-slate-900">
                Guide Pologne — Avantages & Fiscalité
              </h3>
            </div>
            <p className="text-sm text-slate-600 mb-4 flex-1">
              Société en Pologne : le guide clair et honnête. Comprendre la fiscalité, les charges, le ZUS. Ce que personne n’explique vraiment.
            </p>
            <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xl font-bold text-slate-900">29 €</span>
              {/* TODO: Remplacer par le vrai Price ID du Guide Pologne */}
              <BuyButton priceId="price_PLACEHOLDER_GUIDE_POLOGNE" className="btn-secondary px-4 py-2 text-xs h-auto">
                Acheter
              </BuyButton>
            </div>
          </div>

          {/* Pack 3 - Pack LLC USA Pro */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col relative overflow-hidden">
             <div className="absolute top-0 right-0 bg-slate-800 text-white text-[9px] font-bold px-2 py-1 rounded-bl-lg">POPULAIRE</div>
             <div className="mb-4">
              <span className="inline-block px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-500 bg-slate-100 rounded-full mb-2">
                🇺🇸 USA
              </span>
              <h3 className="text-lg font-semibold text-slate-900">
                Pack LLC USA Pro
              </h3>
            </div>
            <p className="text-sm text-slate-600 mb-4 flex-1">
              LLC Delaware/Wyoming : la structure internationale fiable. Operating Agreement, banking, compliance. Pour créer une LLC propre.
            </p>
            <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xl font-bold text-slate-900">89 €</span>
              <BuyButton priceId="price_1SZU4SRPyuf04COPwcxYwxtO" className="btn-primary px-4 py-2 text-xs h-auto">
                Voir le détail
              </BuyButton>
            </div>
          </div>

          {/* Pack 4 - Guide LLC Delaware */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-500 bg-slate-100 rounded-full mb-2">
                🇺🇸 Guide
              </span>
              <h3 className="text-lg font-semibold text-slate-900">
                Guide LLC Delaware — Confidentialité & Fiscalité
              </h3>
            </div>
            <p className="text-sm text-slate-600 mb-4 flex-1">
              Tout comprendre sans se faire avoir. Confidentialité, fiscalité 0 %, banques, obligations réelles. Le guide qui explique tout.
            </p>
            <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xl font-bold text-slate-900">29 €</span>
              <BuyButton priceId="price_1SZU4sRPyuf04COPckroruE7" className="btn-secondary px-4 py-2 text-xs h-auto">
                Acheter
              </BuyButton>
            </div>
          </div>

          {/* Pack 5 - Kit Freelance Nomad */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-emerald-700 bg-emerald-50 rounded-full mb-2">
                🌍 Nomad
              </span>
              <h3 className="text-lg font-semibold text-slate-900">
                Kit Freelance Nomad
              </h3>
            </div>
            <p className="text-sm text-slate-600 mb-4 flex-1">
              Ne rien oublier avant de partir. Checklist voyage, assurance, fiscalité, résidence, risques. Parfait pour freelances et indépendants.
            </p>
            <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xl font-bold text-slate-900">49 €</span>
              <BuyButton priceId="price_1SZU5HRPyuf04COPwhU1zQMS" className="btn-secondary px-4 py-2 text-xs h-auto">
                Acheter
              </BuyButton>
            </div>
          </div>

           {/* Pack 6 - Contrats Pro */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-purple-700 bg-purple-50 rounded-full mb-2">
                📄 Contrats
              </span>
              <h3 className="text-lg font-semibold text-slate-900">
                Pack Contrats Pro (FR/EN)
              </h3>
            </div>
            <p className="text-sm text-slate-600 mb-4 flex-1">
              Contrats prêts à signer pour freelances & consultants. Modèles solides, bilingues, propres. Pour travailler avec des clients internationaux.
            </p>
            <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xl font-bold text-slate-900">49 €</span>
              <BuyButton priceId="price_1SZU5fRPyuf04COPxtVyrsQ4" className="btn-secondary px-4 py-2 text-xs h-auto">
                Acheter
              </BuyButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
