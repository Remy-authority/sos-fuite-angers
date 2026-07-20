import { SITE } from '@/lib/config'

export default function Reviews() {
  return (
    <section id="avis" className="py-20 section-light">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="section-label mb-4 inline-flex">Avis clients</span>
          <h2 className="section-title mt-3">Ce que disent nos clients a {SITE.commune}</h2>
          <p className="section-subtitle">
            Les vrais avis arrivent des l'ouverture de notre fiche Google Business Profile.
            Aucun faux temoignage — uniquement de l'authentique.
          </p>
        </div>

        {/* Placeholder Google reviews block */}
        <div className="card border-dashed border-2 border-line-200 p-8 text-center max-w-2xl mx-auto">
          <div className="flex justify-center gap-1 mb-4">
            {[1,2,3,4,5].map((s) => <span key={s} className="text-teal-500 text-3xl">★</span>)}
          </div>
          <h3 className="text-ink-900 font-bold text-lg mb-2">Avis Google — {SITE.name}</h3>
          <p className="text-ink-500 text-sm mb-6">
            Les avis Google seront affiches ici des l'ouverture de la fiche Google Business Profile.<br />
            <strong className="text-ink-700">Aucun faux avis — uniquement des temoignages authentiques.</strong>
          </p>
          <div className="badge-teal w-full justify-center py-3">
            En attente de collecte d'avis
          </div>
        </div>
      </div>
    </section>
  )
}
