import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white mt-12">
      <div className="container-bridgely py-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-900">Bridgely</p>
          <p className="text-xs text-slate-500 mt-1">
            Création de sociétés en Pologne, LLC aux États-Unis et consulting
            international.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-xs text-slate-500">
          <span>© {new Date().getFullYear()} Bridgely. Tous droits réservés.</span>
          <Link href="/mentions-legales" className="hover:text-slate-800" title="Consulter les mentions légales">
            Mentions légales
          </Link>
          <Link href="/cgv" className="hover:text-slate-800" title="Consulter les conditions générales de vente">
            CGV
          </Link>
        </div>
      </div>
    </footer>
  );
};
