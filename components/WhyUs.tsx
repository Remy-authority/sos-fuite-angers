const WHY = [
  {
    icon: '💰',
    title: 'Devis gratuit',
    description: 'Devis gratuit et transparent avant intervention. Pas de surprise, pas de frais caches.',
    highlight: true,
  },
  {
    icon: '⚡',
    title: 'Intervention rapide',
    description: 'Moins de 2h sur Angers en urgence. Disponible 7j/7 week-ends et jours feries inclus.',
    highlight: false,
  },
  {
    icon: '🔬',
    title: 'Technologie avancee',
    description: '3 techniques complementaires (thermique, gaz traceur, acoustique) pour toutes configurations.',
    highlight: false,
  },
  {
    icon: '📋',
    title: 'Rapport assurance',
    description: 'Rapport technique professionnel fourni apres chaque intervention. Indemnisation facilitee.',
    highlight: true,
  },
  {
    icon: '⭐',
    title: 'Avis clients verifiees',
    description: 'Aucun faux avis. Uniquement des temoignages authentiques de clients a Angers.',
    highlight: false,
  },
  {
    icon: '🏆',
    title: 'Materiel professionnel',
    description: 'Equipements de pointe et techniques certifiees. Intervention garantie qualite.',
    highlight: false,
  },
]

export default function WhyUs() {
  return (
    <section className="py-20 section-light">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="section-label mb-4 inline-flex">Pourquoi nous choisir</span>
          <h2 className="section-title mt-3">Ce qui nous differencie</h2>
          <p className="section-subtitle">
            La ou les concurrents cachent leurs prix et n&apos;ont pas d&apos;avis Google,
            nous faisons le contraire.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY.map((item) => {
            const baseClass = 'card-hover p-6 space-y-4 group transition-all duration-300 hover:-translate-y-1'
            const highlightClass = item.highlight ? ' border-teal-200/70 bg-teal-50/40 hover:border-teal-400' : ''
            const cardClass = baseClass + highlightClass

            const iconBase = 'w-14 h-14 rounded-xl flex items-center justify-center text-3xl '
            const iconClass = item.highlight
              ? iconBase + 'bg-teal-100 border border-teal-200/50'
              : iconBase + 'bg-cream-100 border border-line-200'

            const titleClass = item.highlight
              ? 'font-bold text-lg text-teal-600 group-hover:text-teal-500 transition-colors'
              : 'font-bold text-lg text-ink-900 group-hover:text-teal-500 transition-colors'

            return (
              <div key={item.title} className={cardClass}>
                <div className={iconClass}>{item.icon}</div>
                <h3 className={titleClass}>{item.title}</h3>
                <p className="text-ink-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
