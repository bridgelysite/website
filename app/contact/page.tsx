import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contactez Bridgely | Création Société Pologne & LLC USA",
  description:
    "Contactez-nous pour votre projet de création d'entreprise. Réponse rapide par e-mail. Diagnostic de votre situation (résidence, activité, objectifs).",
  alternates: {
    canonical: "https://bridgely.fr/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="section">
      <div className="container-bridgely max-w-xl">
        <h1 className="section-title">Contact</h1>
        <p className="section-subtitle mb-6">
          Expliquez-nous votre situation en quelques lignes. Nous revenons vers
          vous rapidement avec les options possibles.
        </p>

        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8">
          <p className="text-sm text-slate-700 mb-4">
            Pour l’instant, nous fonctionnons volontairement de manière simple :
            pas de formulaire lourd, mais un échange direct par e-mail ou
            messagerie chiffrée.
          </p>

          <div className="space-y-3 text-sm text-slate-800">
            <p>
              📧 E-mail :{" "}
              <span className="font-semibold">contact@bridgely.fr</span>
            </p>
            <p>
              💬 WhatsApp / Signal (sur demande) : indiqué dans nos échanges.
            </p>
            <p className="text-xs text-slate-500 mt-4">
              Dans votre premier message, précisez simplement : votre pays de
              résidence, votre activité, votre chiffre d’affaires approximatif
              et si vous visez la Pologne, les USA ou les deux.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
