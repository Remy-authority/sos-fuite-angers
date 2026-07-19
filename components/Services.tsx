const SERVICES = [
  { icon: '🌡️', title: 'Caméra thermique', description: 'Détection par différentiel de température. Localise les fuites cachées dans murs, planchers ou plafonds sans aucune casse.', tag: 'Non destructif', bg: 'bg-orange-50', border: 'border-orange-100' },
  { icon: '💨', title: 'Gaz traceur', description: "Injection de gaz inerte (azote + hydrogène) dans la canalisation. Technique de référence pour fuites enterrées ou sous dalle.", tag: 'Très précis', bg: 'bg-blue-50', border: 'border-blue-100' },
  { icon: '🎧', title: 'Détection acoustique', description: 'Écoute des bruits caractéristiques via capteurs ultra-sensibles. Idéal pour canalisations sous pression.', tag: 'Zéro travaux', bg: 'bg-purple-50', border: 'border-purple-100' },
  { icon: '🌬️', title: 'Assèchement professionnel', description: "Après sinistre : déshumidificateurs et souffleries pros. Rapport d'hygrométrie certifié pour votre assurance.", tag: 'Couvert assurance', bg: 'bg-cyan-50', border: 'border-cyan-100' },
  { icon: '📄', title: 'Rapport dégât des eaux', description: "Rapport technique complet transmis à votre assurance. Facilite et accélère votre indemnisation.", tag: "Pour l'assurance", bg: 'bg-green-50', border: 'border-green-100' },
  { icon: '🔧', title: 'Réparation après diagnostic', description: 'Intervention directe ou coordination avec votre artisan de confiance après localisation précise.', tag: 'Sur devis', bg: 'bg-slate-50', border: 'border-slate-200' },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Nos techniques de détection</h2>
          <p className="section-subtitle">Technologies de pointe pour une localisation précise — sans casse inutile.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <div key={s.title} className={`card p-6 ${s.bg} border ${s.border} hover:-translate-y-1 transition-transform duration-300`}>
              <div className="text-4xl mb-3">{s.icon}</div>
              <div className="inline-block bg-white/80 text-navy-700 text-xs font-bold px-3 py-1 rounded-full mb-3">{s.tag}</div>
              <h3 className="text-xl font-bold text-navy-900 mb-2">{s.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
