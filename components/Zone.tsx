import { SITE } from '@/lib/config'

export default function Zone() {
  return (
    <section id="zone" className="py-20 bg-ch-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="badge-red mb-4 inline-flex">Zone d&apos;intervention</span>
          <h2 className="section-title mt-3">Angers et tout le Maine-et-Loire</h2>
          <div className="red-line mx-auto mt-5" />
          <p className="section-subtitle">
            Basés à {SITE.commune}, nous intervenons rapidement sur {SITE.commune} et toutes les communes voisines
            dans un rayon de 30 km.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            {/* Communes grid */}
            <div>
              <p className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-4">Communes couvertes</p>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-rouge-600 text-white px-4 py-2 rounded-xl font-bold text-sm shadow-lg shadow-rouge-600/30">
                  📍 {SITE.commune}
                  <span className="text-rouge-300 text-xs font-normal">Base</span>
                </div>
                {SITE.communesVoisines.map((commune) => (
                  <div key={commune} className="dark-card px-4 py-2 rounded-xl text-gray-300 text-sm font-medium hover:border-rouge-600/40 hover:text-white transition-colors">
                    {commune}
                  </div>
                ))}
                <div className="px-4 py-2 rounded-xl text-gray-600 text-sm border border-ch-500 border-dashed">
                  + environs 30 km
                </div>
              </div>
            </div>

            {/* Guarantees */}
            <div className="space-y-3">
              {[
                { icon: '⚡', title: `Intervention < 2h sur ${SITE.commune}`, sub: 'En urgence, week-end et jours fériés' },
                { icon: '🗺️', title: 'Rayon 30 km autour d\'Angers', sub: 'Tout le Maine-et-Loire couvert' },
                { icon: '📞', title: '7j/7 — Urgences incluses', sub: 'Même les nuits et week-ends' },
                { icon: '💶', title: 'Pas de forfait déplacement caché', sub: 'Inclus dans le tarif annoncé' },
              ].map((item) => (
                <div key={item.title} className="dark-card p-4 flex items-center gap-4 hover:border-rouge-600/30 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-rouge-600/15 border border-rouge-600/20 flex items-center justify-center text-xl shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{item.title}</p>
                    <p className="text-gray-500 text-xs">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map placeholder + CTA */}
          <div className="dark-card overflow-hidden">
            {/* Map placeholder with stylized look */}
            <div className="h-48 bg-ch-800 relative flex items-center justify-center" style={{
              backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(220,38,38,0.08) 0%, transparent 70%), linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
              backgroundSize: 'cover, 30px 30px, 30px 30px',
            }}>
              <div className="text-center">
                <div className="text-5xl mb-2">🗺️</div>
                <p className="text-gray-500 text-sm">{SITE.commune} ({SITE.communeCode})</p>
                <div className="w-3 h-3 bg-rouge-600 rounded-full mx-auto mt-2 shadow-lg shadow-rouge-600/50 animate-pulse" />
              </div>
            </div>

            <div className="p-6 space-y-4">
              <h3 className="text-white font-bold text-xl">Une fuite à {SITE.commune} ?</h3>
              <p className="text-gray-400 text-sm">
                Notre équipe intervient rapidement. Appelez directement pour une réponse immédiate.
              </p>
              <a href={SITE.phoneHref} className="btn-red w-full justify-center py-4 text-lg">
                <span>📞</span><span>{SITE.phone}</span>
              </a>
              <p className="text-gray-600 text-xs text-center">Disponible 24h/7j — Urgences prises en charge</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
