import { SITE } from '@/lib/config'

export default function Zone() {
  return (
    <section id="zone" className="py-20 section-light">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="section-label mb-4 inline-flex">Zone d'intervention</span>
          <h2 className="section-title mt-3">Angers et tout le Maine-et-Loire</h2>
          <p className="section-subtitle">
            Intervient sur {SITE.commune}, nous intervenons rapidement sur {SITE.commune} et toutes les communes voisines
            dans un rayon de 30 km.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            {/* Communes grid */}
            <div>
              <p className="text-ink-500 text-sm font-semibold uppercase tracking-wider mb-4">Communes couvertes</p>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-teal-500 text-white px-4 py-2 rounded-xl font-bold text-sm shadow-lg shadow-teal-500/20">
                  📍 {SITE.commune}
                  <span className="text-teal-100 text-xs font-normal">Base</span>
                </div>
                {SITE.communesVoisines.map((commune) => (
                  <div key={commune} className="card px-4 py-2 rounded-xl text-ink-700 text-sm font-medium hover:border-teal-300 hover:text-ink-900 transition-colors">
                    {commune}
                  </div>
                ))}
                <div className="px-4 py-2 rounded-xl text-ink-400 text-sm border border-line-200 border-dashed">
                  + environs 30 km
                </div>
              </div>
            </div>

            {/* Guarantees */}
            <div className="space-y-3">
              {[
                { icon: '⚡', title: `Intervention < 2h sur ${SITE.commune}`, sub: 'En urgence, week-end et jours feries' },
                { icon: '🗺️', title: 'Rayon 30 km autour d\'Angers', sub: 'Tout le Maine-et-Loire couvert' },
                { icon: '📞', title: '7j/7 — Urgences incluses', sub: 'Meme les nuits et week-ends' },
                { icon: '💶', title: 'Pas de forfait deplacement cache', sub: 'Inclus dans le devis annonce' },
              ].map((item) => (
                <div key={item.title} className="card-hover p-4 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200/50 flex items-center justify-center text-xl shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-ink-900 font-semibold text-sm">{item.title}</p>
                    <p className="text-ink-500 text-xs">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map placeholder + CTA */}
          <div className="card overflow-hidden">
            {/* Map placeholder with stylized look */}
            <div className="h-48 bg-cream-100 relative flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl mb-2">🗺️</div>
                <p className="text-ink-500 text-sm">{SITE.commune} ({SITE.communeCode})</p>
                <div className="w-3 h-3 bg-teal-500 rounded-full mx-auto mt-2 shadow-lg shadow-teal-500/50 animate-pulse" />
              </div>
            </div>

            <div className="p-6 space-y-4">
              <h3 className="text-ink-900 font-bold text-xl">Une fuite a {SITE.commune} ?</h3>
              <p className="text-ink-500 text-sm">
                Notre equipe intervient rapidement. Appelez directement pour une reponse immediate.
              </p>
              <a href={SITE.phoneHref} className="btn-primary w-full justify-center py-4 text-lg">
                <span>📞</span><span>{SITE.phone}</span>
              </a>
              <p className="text-ink-400 text-xs text-center">Disponible 24h/7j — Urgences prises en charge</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
