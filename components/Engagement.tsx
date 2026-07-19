const ENGAGEMENTS = [
  {
    icon: '♻️',
    title: 'Non destructif par défaut',
    description: 'Nos techniques préservent vos murs, sols et plafonds. Nous localisons la fuite avant toute intervention physique.',
  },
  {
    icon: '🌿',
    title: 'Gaz traceur inerte',
    description: 'Le mélange azote-hydrogène que nous utilisons est totalement inoffensif pour l\'environnement et votre famille.',
  },
  {
    icon: '🔋',
    title: 'Équipements éco-certifiés',
    description: 'Nos déshumidificateurs et souffleries sont certifiés RGE, à haute efficacité énergétique.',
  },
  {
    icon: '💧',
    title: 'Économie d\'eau',
    description: 'Une fuite non détectée peut gaspiller 200 L/jour. Notre intervention rapide préserve vos ressources.',
  },
]

export default function Engagement() {
  return (
    <section className="py-20 bg-ch-950">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="badge-trust mb-4 inline-flex">Engagement responsable</span>
          <h2 className="section-title mt-3">Une intervention respectueuse de votre habitat</h2>
          <div className="red-line mx-auto mt-5" />
          <p className="section-subtitle">
            Non destructif, certifié, et soucieux de l&apos;environnement — notre standard.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ENGAGEMENTS.map((e) => (
            <div key={e.title} className="dark-card p-6 text-center space-y-4 hover:border-verdant-700/60 transition-colors group">
              <div className="w-16 h-16 bg-verdant-900/60 border border-verdant-800/50 rounded-2xl flex items-center justify-center text-3xl mx-auto group-hover:bg-verdant-900 transition-colors">
                {e.icon}
              </div>
              <h3 className="text-white font-bold">{e.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{e.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 dark-card border-verdant-800/40 p-8 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
          <div className="text-5xl">🌿</div>
          <div className="flex-1">
            <h3 className="text-white font-bold text-xl mb-2">Certifiés RGE — Reconnu Garant de l&apos;Environnement</h3>
            <p className="text-gray-400">
              Notre certification RGE garantit des pratiques respectueuses de l&apos;environnement
              et peut vous donner accès à des aides financières pour certains travaux.
            </p>
          </div>
          <span className="badge-trust text-sm px-5 py-2.5 shrink-0">✓ RGE Certifié</span>
        </div>
      </div>
    </section>
  )
}
