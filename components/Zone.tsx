import { SITE } from '@/lib/config'

export default function Zone() {
  return (
    <section id="zone" className="py-20 bg-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 to-navy-800" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl" style={{ background: 'rgba(14,165,233,0.05)' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Zone d&apos;intervention</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Basés à {SITE.commune}, nous intervenons rapidement sur {SITE.commune} et toutes les communes voisines.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex flex-wrap gap-3">
              {[SITE.commune, ...SITE.communesVoisines].map((commune, i) => (
                <div
                  key={commune}
                  className={`px-4 py-2 rounded-xl font-semibold text-sm ${i === 0 ? 'text-white shadow-lg' : 'bg-white/10 text-white border border-white/20'}`}
                  style={i === 0 ? { background: '#F97316' } : {}}
                >
                  {commune}{i === 0 && <span className="ml-2 text-xs opacity-75">← base</span>}
                </div>
              ))}
              <div className="px-4 py-2 rounded-xl text-sm text-slate-500 border border-white/10">+ environs</div>
            </div>

            <div className="space-y-4 pt-2">
              {[
                { icon: '⚡', text: 'Intervention en moins de 2h sur Trélazé' },
                { icon: '🗺️', text: "Rayon d'intervention : ~30 km autour de Trélazé" },
                { icon: '📞', text: 'Disponible 7j/7 pour les urgences' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3 text-slate-300">
                  <span className="text-2xl">{item.icon}</span><span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-8 text-center">
            <div className="text-6xl mb-4">🗺️</div>
            <h3 className="text-white font-bold text-xl mb-4">Une fuite à {SITE.commune} ?</h3>
            <p className="text-slate-300 mb-6">
              Notre équipe intervient rapidement sur {SITE.commune} et toute la région d&apos;Angers.
            </p>
            <a href={SITE.phoneHref} className="btn-urgent px-8 py-4 text-lg w-full justify-center">
              <span>📞</span><span>{SITE.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
