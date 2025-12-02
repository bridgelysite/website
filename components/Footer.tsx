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
        <div className="flex flex-wrap gap-4 text-xs text-slate-500 items-center">
          <span>© {new Date().getFullYear()} Bridgely. Tous droits réservés.</span>
          <a
            href="https://www.linkedin.com/company/110341130"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0077b5] transition-colors"
            title="Suivre Bridgely sur LinkedIn"
          >
            <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
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
