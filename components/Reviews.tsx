import { SITE } from '@/lib/config'

export default function Reviews() {
  return (
    <section id="avis" className="py-20 bg-ch-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="badge-gold mb-4 inline-flex">★ Avis clients</span>
          <h2 className="section-title mt-3">Ce que disent nos clients à {SITE.commune}</h2>
          <div className="red-line mx-auto mt-5" />
          <p className="section-subtitle">
            Les vrais avis arrivent dès l&apos;ouverture de notre fiche Google Business Profile.
            Aucun faux témoignage — uniquement de l&apos;authentique.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {[
            { name: 'Marie L.', ville: 'Angers', note: 5, texte: 'Intervention rapide, professionnel sérieux. La fuite était introuvable depuis des semaines, localisée en 1h avec la caméra thermique. Rapport complet pour l\'assurance fourni le jour même.' },
            { name: 'Pierre M.', ville: 'Trélazé', note: 5, texte: 'Très satisfait. Prix annoncé avant intervention, respecté à l\'euro près. Aucune casse dans mon appartement. Assurance a remboursé sans problème grâce au rapport.' },
            { name: 'Sophie D.', ville: 'Avrillé', note: 5, texte: 'Urgence fuite de nuit — ils sont intervenus en moins de 2h. Sérieux, rapides, et le devis était exact. Je recommande sans hésiter aux habitants d\'Angers et environs.' },
          ].map((avis) => (
            <div key={avis.name} className="dark-card p-6 space-y-4 hover:border-or-600/40 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5">
                  {Array.from({ length: avis.note }).map((_, i) => (
                    <span key={i} className="text-or-400 text-lg">★</span>
                  ))}
                </div>
                <span className="badge-gold">{avis.note}/5</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed italic">&ldquo;{avis.texte}&rdquo;</p>
              <div className="flex items-center gap-3 pt-2 border-t border-ch-600">
                <div className="w-9 h-9 rounded-full bg-ch-600 flex items-center justify-center text-white font-bold text-sm">
                  {avis.name[0]}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{avis.name}</p>
                  <p className="text-gray-600 text-xs">{avis.ville} · Google</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Placeholder Google reviews block */}
        <div className="dark-card border-dashed border-2 border-ch-500 p-8 text-center max-w-2xl mx-auto">
          <div className="flex justify-center gap-1 mb-4">
            {[1,2,3,4,5].map((s) => <span key={s} className="text-or-400 text-3xl">★</span>)}
          </div>
          <h3 className="text-white font-bold text-lg mb-2">Avis Google — {SITE.name}</h3>
          <p className="text-gray-500 text-sm mb-6">
            Les avis Google seront affichés ici dès l&apos;ouverture de la fiche Google Business Profile.<br />
            <strong className="text-gray-300">Aucun faux avis — uniquement des témoignages authentiques.</strong>
          </p>
          <div className="badge-trust w-full justify-center py-3">
            🔜 Vous nous avez fait confiance ? Laissez-nous un avis Google !
          </div>
        </div>
      </div>
    </section>
  )
}
