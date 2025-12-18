export default function CgvPage() {
  return (
    <div className="section">
      <div className="container-bridgely max-w-3xl">
        <h1 className="section-title">Conditions Générales de Vente (CGV)</h1>
        <p className="text-sm text-slate-500 mb-8">Dernière mise à jour : {new Date().getFullYear()}</p>

        <div className="space-y-8 text-sm text-slate-700 text-justify leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-2">1. Objet et Champ d'application</h2>
            <p>
              Les présentes Conditions Générales de Vente (ci-après "CGV") régissent les relations contractuelles entre la société <strong>H INNOV LLC</strong>, située au 8 The Green, 19901 Dover, DE, USA (ci-après "le Prestataire") et toute personne physique ou morale (ci-après "le Client") souhaitant bénéficier des services ou produits numériques proposés sur le site <strong>bridgely.fr</strong>.
            </p>
            <p className="mt-2">
              L’achat d’un service ou d’un produit numérique implique l’acceptation sans réserve des présentes CGV.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-2">2. Nature des Services</h2>
            <p>
              Le Prestataire propose des services d'accompagnement administratif à la création d'entreprises (Pologne, États-Unis), de mise en relation avec des partenaires locaux (comptables, agents enregistrés), ainsi que la vente de produits d'information (guides, modèles de documents).
            </p>
            <p className="mt-2 font-semibold text-slate-800">
              Le Prestataire agit en qualité de facilitateur administratif et commercial. Il n'est ni un cabinet d'avocats, ni un cabinet d'experts-comptables, ni un conseiller fiscal agréé.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-2">3. Limitation de Responsabilité</h2>
            <p>
              <strong>3.1. Absence de conseil juridique et fiscal :</strong> Les informations fournies sur le site, dans les guides ou lors des échanges, sont données à titre informatif et éducatif. Elles ne sauraient constituer un conseil juridique ou fiscal personnalisé. Le Client reste seul responsable de la validation de son projet auprès de professionnels du droit et de la fiscalité compétents dans sa juridiction de résidence et d'activité.
            </p>
            <p className="mt-2">
              <strong>3.2. Responsabilité du Client :</strong> Le Client est seul responsable de l'exactitude des informations transmises pour la réalisation des formalités. Il est également seul responsable du respect de ses obligations déclaratives, fiscales, sociales et comptables dans tous les pays où il est résident ou actif.
            </p>
            <p className="mt-2">
              <strong>3.3. Exonération :</strong> Le Prestataire ne saurait être tenu responsable des conséquences fiscales, financières ou juridiques résultant des choix opérés par le Client, notamment en cas de redressement fiscal, de requalification d'activité, de défaut de déclaration ou de non-paiement des impôts et taxes dus. Le Prestataire ne garantit aucun résultat économique ou fiscal spécifique.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-2">4. Produits Numériques</h2>
            <p>
              Les guides et packs numériques sont livrés par voie électronique. Compte tenu de leur nature immatérielle, et conformément aux usages du commerce électronique, ils ne font l'objet d'aucun droit de rétractation ou de remboursement une fois le téléchargement ou l'accès initié.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-slate-900 mb-2">5. Droit Applicable et Juridiction Compétente</h2>
            <p>
              Les présentes CGV sont régies par le droit de l'État du Delaware (États-Unis).
            </p>
            <p className="mt-2 border-l-4 border-[color:var(--color-primary)] pl-4 italic bg-slate-50 py-2">
              Tout litige relatif à l'interprétation, la validité ou l'exécution des présentes CGV sera soumis à la compétence exclusive des tribunaux de l'État du Delaware, nonobstant pluralité de défendeurs ou appel en garantie.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}





