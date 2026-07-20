const SERVICES = [
  {
    icon: '🌡️',
    title: 'Caméra thermique',
    tag: 'Non destructif',
    description: 'Détection par différentiel de température. Localise les fuites cachées dans murs, planchers ou plafonds sans aucune casse.',
    feature: 'Zéro démolition',
  },
  {
    icon: '💨',
    title: 'Gaz traceur',
    tag: 'Très précis',
    description: 'Injection de gaz inerte (azote + hydrogène) dans la canalisation. Technique de référence pour les fuites enterrées ou sous dalle.',
    feature: 'Précision millimétrique',
  },
  {
    icon: '🎧',
    title: 'Détection acoustique',
    tag: 'Zéro travaux',
    description: 'Écoute des bruits caractéristiques via capteurs ultra-sensibles. Idéal pour les canalisations sous pression.',
    feature: 'Sans intervention',
  },
  {
    icon: '🌬️',
    title: 'Assèchement professionnel',
    tag: 'Couvert assurance',
    description: 'Déshumidificateurs et souffleries professionnels après sinistre. Rapport d’hygrométrie certifié pour votre déclaration.',
    feature: 'Rapport certifié',
  },
  {
    icon: '📄',
    title: 'Rapport dégât des eaux',
    tag: 'Pour l’assurance',
    description: 'Rapport technique complet transmis directement à votre assurance. Facilite et accélère votre indemnisation.',
    feature: 'Indemnisation facilitée',
  },
  {
    icon: '🔧',
    title: 'Réparation après diagnostic',
    tag: 'Sur devis',
    description: 'Intervention directe ou coordination avec votre artisan de confiance après localisation précise de la fuite.',
    feature: 'Devis transparent',
  },
]

export default function Services() {
  return (
    <section id="services" className="section-light py-20 relative overflow-hidden">
      <div className="absolute -top-24 right-1/4 w-96 h-96 rounded-full bg-teal-200/20 blur-3xl pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-14">
          <span className="section-label">Nos techniques</span>
          <h2 className="section-title mt-3">
            Technologies de <span className="accent-underline">détection</span> de pointe
          </h2>
          <p className="section-subtitle">
            Localisation précise sans casse inutile — rapport complet pour votre assurance.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <div key={s.title} className="card-hover p-7 group">
              <div className="flex items-start justify-between mb-5 gap-3">
                <div className="w-14 h-14 rounded-2xl bg-teal-50 border border-teal-200/50 flex items-center justify-center text-3xl group-hover:scale-105 transition-transform duration-300">
                  {s.icon}
                </div>
                <span className="badge-teal shrink-0">{s.tag}</span>
              </div>
              <h3 className="text-xl font-bold text-ink-900 tracking-tight mb-2">{s.title}</h3>
              <p className="text-ink-500 text-sm leading-relaxed mb-4">{s.description}</p>
              <div className="flex items-center gap-2 text-teal-500 text-sm font-semibold">
                <span className="w-5 h-px bg-teal-400 inline-block" />
                {s.feature}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
