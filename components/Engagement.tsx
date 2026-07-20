const ENGAGEMENTS = [
  {
    icon: '♻️',
    title: 'Non destructif par defaut',
    description: 'Nos techniques preservent vos murs, sols et plafonds. Nous localisons la fuite avant toute intervention physique.',
  },
  {
    icon: '🌿',
    title: 'Gaz traceur inerte',
    description: 'Le melange azote-hydrogene que nous utilisons est totalement inoffensif pour votre environnement et votre famille.',
  },
  {
    icon: '🔋',
    title: 'Equipements haute performance',
    description: 'Nos deshumidificateurs et souffleries sont certifies a haute efficacite energetique.',
  },
  {
    icon: '💧',
    title: 'Economie d\'eau',
    description: 'Une fuite non detectee peut gaspiller 200 L/jour. Notre intervention rapide preserve vos ressources.',
  },
]

export default function Engagement() {
  return (
    <section className="py-20 section-light">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="section-label mb-4 inline-flex">Engagement responsable</span>
          <h2 className="section-title mt-3">Une intervention respectueuse de votre habitat</h2>
          <p className="section-subtitle">
            Non destructif, professionnel, et soucieux de l'environnement — notre standard.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ENGAGEMENTS.map((e) => (
            <div key={e.title} className="card-hover p-6 text-center space-y-4 group">
              <div className="w-16 h-16 bg-teal-50 border border-teal-200/50 rounded-2xl flex items-center justify-center text-3xl mx-auto group-hover:scale-105 transition-transform duration-300">
                {e.icon}
              </div>
              <h3 className="text-ink-900 font-bold">{e.title}</h3>
              <p className="text-ink-500 text-sm leading-relaxed">{e.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 card border-teal-200/50 p-8 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
          <div className="text-5xl">🌿</div>
          <div className="flex-1">
            <h3 className="text-ink-900 font-bold text-xl mb-2">Intervention respectueuse de l'environnement</h3>
            <p className="text-ink-500">
              Nos pratiques garantissent des interventions respectueuses de l'environnement
              et de votre habitat, avec des equipements haute efficacite energetique.
            </p>
          </div>
          <span className="badge-teal text-sm px-5 py-2.5 shrink-0">✓ Eco-responsable</span>
        </div>
      </div>
    </section>
  )
}
