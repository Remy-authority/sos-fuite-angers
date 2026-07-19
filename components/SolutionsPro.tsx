import { SITE } from '@/lib/config'

const SOLUTIONS = [
  {
    title: 'Fuite sur canalisation enterrée',
    description: 'Détection sous dalle, sous jardin ou sous voirie. Gaz traceur ou acoustique selon configuration. Rapport géolocalisé précis.',
    icon: '🌍',
    badge: 'Gaz traceur',
  },
  {
    title: 'Fuite toiture & infiltration',
    description: "Caméra thermique de précision pour localiser les points d'entrée d'eau dans la toiture, terrasse ou façade.",
    icon: '🏠',
    badge: 'Thermique',
  },
  {
    title: 'Fuite réseau gaz',
    description: "Détection de fuite sur réseaux gaz domestique. Intervention rapide, sécurisation du réseau, rapport obligatoire.",
    icon: '🔥',
    badge: 'Prioritaire',
  },
  {
    title: 'Sinistre dégât des eaux',
    description: "Assèchement complet après inondation ou dégât des eaux. Rapport d'hygrométrie certifié pour votre assurance habitation.",
    icon: '💦',
    badge: 'Assurance',
  },
]

export default function SolutionsPro() {
  return (
    <section className="py-20 bg-ch-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="badge-red inline-flex">Solutions professionnelles</span>
            <h2 className="section-title mt-2">Chaque type de fuite a sa solution</h2>
            <div className="red-line" />
            <p className="text-gray-400 leading-relaxed">
              Nos experts maîtrisent toutes les configurations : canalisations enterrées,
              infiltrations de toiture, fuites sous dalle, sinistres dégâts des eaux.
              Nous intervenons à {SITE.commune} et dans un rayon de 30 km.
            </p>
            <a href={SITE.phoneHref} className="btn-red inline-flex">
              <span>📞</span><span>Diagnostic gratuit — {SITE.phone}</span>
            </a>
          </div>

          <div className="space-y-4">
            {SOLUTIONS.map((sol) => (
              <div key={sol.title} className="dark-card-hover p-5 flex items-start gap-4 group">
                <div className="w-12 h-12 bg-rouge-600/15 border border-rouge-600/20 rounded-xl flex items-center justify-center text-2xl shrink-0 group-hover:bg-rouge-600/25 transition-colors">
                  {sol.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-white font-bold text-base group-hover:text-rouge-400 transition-colors">{sol.title}</h3>
                    <span className="badge-red text-xs shrink-0">{sol.badge}</span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{sol.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
