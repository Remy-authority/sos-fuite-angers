const WHY = [
  {
    icon: '💰',
    title: 'Prix affichés en clair',
    description: 'Fourchettes transparentes avant intervention. La concurrence cache ses tarifs — pas nous.',
    highlight: true,
  },
  {
    icon: '⚡',
    title: 'Intervention rapide',
    description: 'Moins de 2h sur Angers en urgence. Disponible 7j/7 week-ends et jours fériés inclus.',
    highlight: false,
  },
  {
    icon: '🔬',
    title: 'Technologie avancée',
    description: '3 techniques complémentaires (thermique, gaz traceur, acoustique) pour toutes configurations.',
    highlight: false,
  },
  {
    icon: '📋',
    title: 'Rapport assurance',
    description: 'Rapport technique professionnel fourni après chaque intervention. Indemnisation facilitée.',
    highlight: true,
  },
  {
    icon: '⭐',
    title: 'Avis clients vrais',
    description: 'Aucun faux avis. Uniquement des témoignages authentiques de clients à Angers.',
    highlight: false,
  },
  {
    icon: '🏆',
    title: 'Certifié Qualibat & RGE',
    description: 'Certifications plomberie et environnement. Assurance décennale. Professionnels qualifiés.',
    highlight: false,
  },
]

export default function WhyUs() {
  return (
    <section className="py-20 bg-ch-950">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="badge-red mb-4 inline-flex">Pourquoi nous choisir</span>
          <h2 className="section-title mt-3">Ce qui nous différencie</h2>
          <div className="red-line mx-auto mt-5" />
          <p className="section-subtitle">
            Là où tous les concurrents cachent leurs prix et n&apos;ont pas d&apos;avis Google,
            nous faisons le contraire.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY.map((item) => (
            <div
              key={item.title}
              className={`dark-card p-6 space-y-4 group transition-all duration-300 hover:-translate-y-1 ${
                item.highlight
                  ? 'border-rouge-600/40 bg-rouge-600/5 hover:border-rouge-600/70'
                  : 'hover:border-ch-400'
              }`}
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-3xl ${
                item.highlight
                  ? 'bg-rouge-600/20 border border-rouge-600/30'
                  : 'bg-ch-700 border border-ch-500'
              }`}>
                {item.icon}
              </div>
              <h3 className={`font-bold text-lg ${item.highlight ? 'text-rouge-400' : 'text-white'} group-hover:text-rouge-400 transition-colors`}>
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
