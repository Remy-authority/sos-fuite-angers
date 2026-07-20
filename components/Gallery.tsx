const PHOTOS = [
  {
    label: 'Detection thermique',
    sublabel: 'Fuite mur porteur',
    gradient: 'from-orange-900 to-red-950',
    icon: '🌡️',
  },
  {
    label: 'Gaz traceur',
    sublabel: 'Canalisation enterree',
    gradient: 'from-blue-900 to-slate-950',
    icon: '💨',
  },
  {
    label: 'Rapport assurance',
    sublabel: 'Dossier complet',
    gradient: 'from-emerald-900 to-slate-950',
    icon: '📋',
  },
  {
    label: 'Assechement',
    sublabel: 'Sinistre degat des eaux',
    gradient: 'from-cyan-900 to-slate-950',
    icon: '🌬️',
  },
  {
    label: 'Detection acoustique',
    sublabel: 'Reseau sous pression',
    gradient: 'from-purple-900 to-slate-950',
    icon: '🎧',
  },
  {
    label: 'Reparation post-diagnostic',
    sublabel: 'Reparation precise',
    gradient: 'from-amber-900 to-slate-950',
    icon: '🔧',
  },
]

export default function Gallery() {
  return (
    <section className="py-20 section-cream">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="section-label mb-4 inline-flex">Galerie</span>
          <h2 className="section-title mt-3">Nos interventions en images</h2>
          <p className="section-subtitle">
            Photos illustrant nos techniques de detection et d'assechement.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PHOTOS.map((photo) => (
            <div
              key={photo.label}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer h-52 bg-gradient-to-br ${photo.gradient} border border-line-200 hover:border-teal-300 transition-all duration-300`}
            >
              {/* Photo placeholder content */}
              <div className="absolute inset-0 flex items-center justify-center text-7xl opacity-20 group-hover:opacity-30 transition-opacity">
                {photo.icon}
              </div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-4xl block mb-2">{photo.icon}</span>
                <p className="text-white font-bold text-sm">{photo.label}</p>
                <p className="text-gray-300 text-xs mt-0.5">{photo.sublabel}</p>
              </div>

              {/* Top-right badge */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="badge text-xs">Voir →</span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-ink-400 text-sm mt-6">
          Photos de reference — visuels de nos interventions disponibles apres premieres missions locales.
        </p>
      </div>
    </section>
  )
}
