import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Consulting Fiscalité Internationale (Pologne, USA) | Bridgely",
  description:
    "Session de consulting 45 min pour entrepreneurs. Clarifiez votre situation fiscale et choisissez la meilleure structure (LLC USA, Société Pologne).",
  alternates: {
    canonical: "https://bridgely.fr/consulting-international",
  },
};

export default function ConsultingPage() {
  return (
    <div className="section">
      <div className="container-bridgely max-w-4xl">
        <h1 className="section-title">Consulting international</h1>
        <p className="section-subtitle mb-8">
          Un échange direct, concret et sans jargon pour clarifier votre
          situation (France, Pologne, USA, mobilité) et éviter les erreurs de
          structuration qui coûtent cher.
        </p>

        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 mb-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">
            À qui s’adresse ce consulting ?
          </h2>
          <ul className="space-y-3 text-sm text-slate-700">
            <li>• Entrepreneurs français ou francophones installés en Europe</li>
            <li>• Freelances & consultants avec clients internationaux</li>
            <li>• E-commerçants et créateurs de contenu</li>
            <li>• Dirigeants de petites structures voulant optimiser légalement</li>
          </ul>
        </div>

        <div className="bg-slate-900 text-slate-50 rounded-3xl p-6 sm:p-8 mb-8">
          <h2 className="text-xl font-semibold mb-4">
            Format & honoraires
          </h2>
          <p className="text-sm text-slate-200 mb-4">
            Session de consulting à distance (audio/visio ou écrite), centrée
            sur votre cas, avec un suivi synthétique écrit.
          </p>
          <ul className="text-sm space-y-2 mb-4">
            <li>• Durée : 45 minutes</li>
            <li>• Support : e-mail + recap écrit</li>
            <li>• Thèmes possibles : Pologne, LLC USA, combinaison des deux, fiscalité de base, risques à éviter</li>
          </ul>
          <p className="text-sm font-semibold">
            Honoraires :{" "}
            <span className="text-[color:var(--color-accent)]">
              149 € TTC
            </span>
          </p>
        </div>

        <Link href="/contact" className="btn-primary">
          Réserver une session
        </Link>
      </div>
    </div>
  );
}
