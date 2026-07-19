const SERVICES = [
  {
    icon: '🌡️',
    title: 'Caméra thermique',
    tag: 'Non destructif',
    description: 'Détection par différentiel de température. Localise les fuites cachées dans murs, planchers ou plafonds sans aucune casse.',
    feature: 'Zéro démolition',
    tagColor: 'badge-trust',
  },
  {
    icon: '💨',
    title: 'Gaz traceur',
    tag: 'Très précis',
    description: "Injection de gaz inerte (azote + hydrogène) dans la canalisation. Technique de référence pour fuites enterrées ou sous dalle.",
    feature: 'Précision millimétrique',
    tagColor: 'badge-gold',
  },
  {
    icon: '🎧',
    title: 'Détection acoustique',
    tag: 'Zéro travaux',
    description: 'Écoute des bruits caractéristiques via capteurs ultra-sensibles. Idéal pour canalisations sous pression.',
    feature: 'Sans intervention',
    tagColor: 'badge-trust',
  },
  {
    icon: '🌬️',
    title: 'Assèchement professionnel',
    tag: 'Couvert assurance',
    description: "Déshumidificateurs et souffleries pros après sinistre. Rapport d'hygrométrie certifié pour votre déclaration.",
    feature: 'Rapport certifié',
    tagColor: 'badge-trust',
  },
  {
    icon: '📄',
    title: 'Rapport dégât des eaux',
    tag: "Pour l'assurance",
    description: "Rapport technique complet transmis directement à votre assurance. Facilite et accélère votre indemnisation.",
    feature: 'Indemnisation facilitée',
    tagColor: 'badge-gold',
  },
  {
    icon: '🔧',
    title: 'Réparation après diagnostic',
    tag: 'Sur devis',
    description: 'Intervention directe ou coordination avec votre artisan de confiance après localisation précise de la fuite.',
    feature: 'Devis transparent',
    tagColor: 'badge-red',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-ch-950">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="badge-red mb-4 inline-flex">Nos techniques</span>
          <h2 className="section-title mt-3">Technologies de détection de pointe</h2>
          <div className="red-line mx-auto mt-5" />
          <p className="section-subtitle">
            Localisation précise sans casse inutile — rapport complet pour votre assurance.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <div key={s.title} className="dark-card-hover p-6 group">
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 bg-rouge-600/15 border border-rouge-600/20 rounded-xl flex items-center justify-center text-3xl group-hover:bg-rouge-600/25 transition-colors">
                  {s.icon}
                </div>
                <span className={s.tagColor}>{s.tag}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-rouge-400 transition-colors">
                {s.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.description}</p>
              <div className="flex items-center gap-2 text-rouge-500 text-sm font-semibold">
                <span className="w-4 h-px bg-rouge-600 inline-block" />
                {s.feature}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
