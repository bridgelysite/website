import type { Metadata } from "next";
import Link from "next/link";
import { BuyButton } from "@/components/BuyButton";

export const metadata: Metadata = {
  title: "Création LLC USA (Delaware, Wyoming) | Bridgely",
  description:
    "Créez votre LLC aux États-Unis (Delaware, Wyoming, New Mexico) avec Bridgely. Service complet : enregistrement, agent, EIN, Operating Agreement.",
  alternates: {
    canonical: "https://bridgely.fr/llc-usa",
  },
  openGraph: {
    title: "Création LLC USA (Delaware, Wyoming) | Bridgely",
    description: "Votre structure américaine clé en main, sans vous déplacer.",
    url: "https://bridgely.fr/llc-usa",
  },
};

export default function LlcUsaPage() {
  return (
    <div className="section">
      <div className="container-bridgely max-w-4xl">
        <h1 className="section-title">Création de LLC aux États-Unis</h1>
        <p className="section-subtitle mb-8">
          Une structure flexible et reconnue mondialement pour vos activités
          digitales, e-commerce ou de consulting international.
        </p>

        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 mb-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">
            États recommandés
          </h2>
          <div className="grid gap-6 md:grid-cols-2 text-sm text-slate-700">
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Delaware</h3>
              <p className="mb-2">
                La référence absolue pour les startups et les levées de fonds.
                Tribunaux spécialisés, image de marque forte.
              </p>
              <ul className="list-disc list-inside text-slate-600">
                <li>Frais d’État annuels (Franchise Tax) : 300 $</li>
                <li>Anonymat possible (selon agent)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Wyoming</h3>
              <p className="mb-2">
                Idéal pour les petites structures, freelances et holding
                personnelle. Moins cher et très protecteur.
              </p>
              <ul className="list-disc list-inside text-slate-600">
                <li>Frais d’État annuels : ≈ 62 $</li>
                <li>Anonymat garanti</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 mb-6">
          <div className="bg-slate-900 text-slate-50 rounded-3xl p-6 flex flex-col">
            <h3 className="text-lg font-semibold mb-2">LLC Standard</h3>
            <p className="text-sm text-slate-200 mb-4">
              Création de LLC pour activité en ligne, consulting, e-commerce, SaaS,
              etc.
            </p>
            <ul className="text-sm space-y-2 mb-4 flex-1">
              <li>• Création de la LLC dans l’État choisi</li>
              <li>• Coordination avec l’agent enregistré</li>
              {/* EIN supprimé ici */}
              <li>• Pack de documents LLC (Articles of Org.)</li>
            </ul>
            <div className="mt-4">
                <p className="text-sm font-semibold mb-1">
                Honoraires Bridgely (hors frais d’État) :
                </p>
                <p className="text-2xl font-bold text-[color:var(--color-accent)] mb-4">890 € <span className="text-sm font-normal text-slate-400">HT</span></p>
                
                <BuyButton priceId="price_1SZVSqRPyuf04COPQmrC6lJk" className="w-full bg-[color:var(--color-accent)] hover:bg-amber-300 text-slate-900 font-bold py-3 rounded-xl transition-colors text-sm">
                  Commander LLC Standard
                </BuyButton>
                <p className="text-[10px] text-slate-400 mt-2 text-center">
                   Compte en banque en ligne en option : + 350 €
                </p>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-6 flex flex-col shadow-sm">
            <h3 className="text-lg font-semibold mb-2 text-slate-900">LLC Formule Plus</h3>
            <p className="text-sm text-slate-600 mb-4">
              Pour les entrepreneurs qui combinent activité européenne et
              américaine et veulent une vision claire des impacts.
            </p>
            <ul className="text-sm space-y-2 mb-4 text-slate-700 flex-1">
              <li>• Tout ce qui est inclus dans LLC Standard</li>
              <li>• <strong className="text-slate-900">Obtention de l'EIN (incluse)</strong></li>
              <li>• 1 session de consulting structuration (Europe + USA)</li>
              <li>• Guide digital "LLC & fiscalité internationale"</li>
            </ul>
             <div className="mt-4">
                <p className="text-sm font-semibold text-slate-700 mb-1">
                Honoraires Bridgely (hors frais d’État) :
                </p>
                <p className="text-2xl font-bold text-slate-900 mb-4">1 290 € <span className="text-sm font-normal text-slate-500">HT</span></p>
                
                <BuyButton priceId="price_1SZVtVRPyuf04COPUiX3tdow" className="w-full btn-primary py-3 rounded-xl text-sm justify-center">
                  Commander LLC Plus
                </BuyButton>
                 <p className="text-[10px] text-slate-500 mt-2 text-center">
                   Compte en banque en ligne en option : + 350 €
                </p>
            </div>
          </div>
        </div>
        
        <div className="text-center mb-10">
            <p className="text-xs text-slate-500 italic">
                * Les frais d'État (State Fees) et l'option compte bancaire (+350€) seront facturés séparément selon l'État choisi.
            </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/contact" className="btn-secondary">
            Une question avant de lancer la LLC ?
          </Link>
        </div>
      </div>
    </div>
  );
}
