import { SITE } from '@/lib/config'

const PRICING = [
  {
    icon: '🔍',
    service: "Recherche de fuite d'eau",
    priceRange: `${SITE.prixRechercheMin}€ – ${SITE.prixRechercheMax}€`,
    description: 'Localisation précise de la fuite sans travaux inutiles',
    details: ['Diagnostic initial inclus', 'Rapport de localisation fourni', 'Techniques non destructives', 'Délai : 24h–48h'],
    assurance: "Souvent remboursé par l'assurance habitation",
    highlight: false,
  },
  {
    icon: '🌬️',
    service: 'Assèchement professionnel',
    priceRange: `${SITE.prixAssechementMin}€ – ${SITE.prixAssechementMax}€`,
    description: 'Séchage professionnel certifié après dégât des eaux',
    details: ['Matériel pro de séchage', 'Hygrométrie certifiée', 'Rapport pour assurance', "Suivi jusqu'à séchage complet"],
    assurance: "Pris en charge par l'assurance habitation",
    highlight: true,
  },
  {
    icon: '🔧',
    service: 'Réparation & dégât des eaux',
    priceRange: 'Sur devis',
    description: 'Réparation après localisation et rapport expertise',
    details: ['Devis gratuit après diagnostic', 'Travaux garantis 10 ans', 'Coordination assurance', 'Finitions comprises'],
    assurance: 'Devis transmis à votre assurance',
    highlight: false,
  },
]

export default function Pricing() {
  return (
    <section id="prix" className="py-20 bg-ch-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="badge-red mb-4 inline-flex">💡 Transparence totale</span>
          <h2 className="section-title mt-3">Nos tarifs, en clair</h2>
          <div className="red-line mx-auto mt-5" />
          <p className="section-subtitle">
            Pas de mauvaise surprise. Fourchettes honnêtes, toujours affichées avant l&apos;intervention.
            La concurrence cache ses prix — pas nous.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {PRICING.map((item) => (
            <div
              key={item.service}
              className={`dark-card p-6 relative hover:-translate-y-1 transition-all duration-300 ${
                item.highlight ? 'border-rouge-600/50 shadow-lg shadow-rouge-600/10' : 'hover:border-ch-400'
              }`}
            >
              {item.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-rouge-600 text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap shadow-lg shadow-rouge-600/40">
                  Le plus demandé
                </div>
              )}

              <div className="w-14 h-14 rounded-xl bg-rouge-600/15 border border-rouge-600/20 flex items-center justify-center text-3xl mb-5">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{item.service}</h3>
              <p className="text-gray-500 text-sm mb-4">{item.description}</p>

              <div className="text-3xl font-black text-rouge-500 mb-4">{item.priceRange}</div>

              <div className="badge-trust w-full justify-center py-2.5 mb-5">
                🛡️ {item.assurance}
              </div>

              <ul className="space-y-2 mb-6">
                {item.details.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm text-gray-500">
                    <span className="text-verdant-500 mt-0.5 shrink-0">✓</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>

              <a
                href={SITE.phoneHref}
                className={`block w-full text-center font-bold py-3 rounded-xl transition-colors ${
                  item.highlight
                    ? 'bg-rouge-600 hover:bg-rouge-500 text-white'
                    : 'bg-ch-700 hover:bg-ch-600 text-white border border-ch-500'
                }`}
              >
                Demander ce service
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 text-sm mt-8">
          * Fourchettes indicatives. Devis précis établi après diagnostic sur place.
          Les interventions dégât des eaux sont généralement prises en charge par l&apos;assurance habitation.
        </p>
      </div>
    </section>
  )
}
