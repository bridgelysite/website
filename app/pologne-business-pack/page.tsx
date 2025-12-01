import { BuyButton } from "@/components/BuyButton";

export default function PolognePackPage() {
  return (
    <div className="section">
      <div className="container-bridgely max-w-4xl">
        <h1 className="section-title">Pack digital “Pologne Business”</h1>
        <p className="section-subtitle mb-8">
          Le pack complet pour comprendre et préparer la création de votre
          structure en Pologne, même si vous n’êtes pas encore prêt à passer par
          un accompagnement premium.
        </p>

        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">
            Contenu du pack
          </h2>
          <ul className="space-y-3 text-sm text-slate-700 mb-6">
            <li>• Guide PDF (35 pages) : fiscalité, formes sociales, ZUS, TVA</li>
            <li>• Checklist administrative avant création</li>
            <li>• Modèle de statuts commenté (sp. z o.o.)</li>
            <li>• Modèles simples de facture & contrat de prestation</li>
            <li>• E-mails types pour la banque, l’administration, la comptabilité</li>
          </ul>

          <div className="flex flex-wrap items-baseline gap-4 mb-2">
            <p className="text-3xl font-semibold text-slate-900">79 €</p>
            <p className="text-sm text-slate-500 line-through">129 €</p>
            <p className="text-xs text-[color:var(--color-accent)] font-semibold uppercase">
              Tarif de lancement
            </p>
          </div>
          <p className="text-xs text-slate-500 mb-6">
            Pack au format numérique, accessible immédiatement après paiement.
          </p>

          <BuyButton priceId="price_1SZU3FRPyuf04COPmYuydh24" className="btn-primary w-full justify-center text-center">
            Acheter le pack • 79 €
          </BuyButton>
        </div>
      </div>
    </div>
  );
}

