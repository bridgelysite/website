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
              <span className="font-semibold">hinnovllc@gmail.com</span>
            </p>
            <p>
              💬 WhatsApp :{" "}
              <span className="font-semibold">+48 505 992 845</span>
            </p>
            <p className="pt-2">
              <a
                href="https://www.linkedin.com/company/110341130"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-700 hover:underline font-medium"
                title="Suivre Bridgely sur LinkedIn"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                Suivez-nous sur LinkedIn
              </a>
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
