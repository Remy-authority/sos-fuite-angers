import { SITE } from '@/lib/config'

const SOLUTIONS = [
  {
    title: 'Fuite sur canalisation enterrée',
    description: 'Détection sous dalle, sous jardin ou sous voirie. Gaz traceur ou acoustique selon la configuration. Rapport géolocalisé précis.',
    icon: '🌍',
    badge: 'Gaz traceur',
  },
  {
    title: 'Fuite toiture & infiltration',
    description: 'Caméra thermique de précision pour localiser les points d’entrée d’eau dans la toiture, la terrasse ou la façade.',
    icon: '🏠',
    badge: 'Thermique',
  },
  {
    title: 'Fuite réseau gaz',
    description: 'Détection de fuite sur réseau gaz domestique. Intervention rapide, sécurisation du réseau, rapport obligatoire.',
    icon: '🔥',
    badge: 'Prioritaire',
  },
  {
    title: 'Sinistre dégât des eaux',
    description: 'Assèchement complet après inondation ou dégât des eaux. Rapport d’hygrométrie certifié pour votre assurance habitation.',
    icon: '💦',
    badge: 'Assurance',
  },
]

export default function SolutionsPro() {
  return (
    <section className="section-cream py-20 relative overflow-hidden">
      <div className="deco-ring w-72 h-72 -right-24 bottom-0" />
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-16 items-center">
          <div className="space-y-6">
            <span className="section-label">Solutions professionnelles</span>
            <h2 className="section-title">
              Chaque type de fuite a sa <span className="accent-underline">solution</span>
            </h2>
            <p className="text-ink-700 leading-relaxed text-lg">
              Nos experts maîtrisent toutes les configurations : canalisations enterrées,
              infiltrations de toiture, fuites sous dalle, sinistres dégâts des eaux.
              Nous intervenons à {SITE.commune} et dans un rayon de 30 km.
            </p>
            <a href={SITE.phoneHref} className="btn-cta">
              <span>📞</span><span>Diagnostic — {SITE.phone}</span>
            </a>
          </div>

          <div className="space-y-4">
            {SOLUTIONS.map((sol) => (
              <div key={sol.title} className="card-hover p-5 flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-200/50 flex items-center justify-center text-2xl shrink-0">
                  {sol.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center flex-wrap gap-2 mb-1">
                    <h3 className="text-ink-900 font-bold text-base tracking-tight">{sol.title}</h3>
                    <span className="badge-peach shrink-0">{sol.badge}</span>
                  </div>
                  <p className="text-ink-500 text-sm leading-relaxed">{sol.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
