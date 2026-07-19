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
    description: 'Séchage professionnel après dégât des eaux',
    details: ['Matériel pro de séchage', 'Hygrométrie certifiée', 'Rapport pour assurance', "Suivi jusqu'à séchage complet"],
    assurance: "Pris en charge par l'assurance habitation",
    highlight: true,
  },
  {
    icon: '🔧',
    service: 'Réparation & dégât des eaux',
    priceRange: 'Sur devis',
    description: 'Réparation après localisation et rapport expertise',
    details: ['Devis gratuit après diagnostic', 'Travaux garantis', 'Coordination assurance', 'Finitions comprises'],
    assurance: 'Devis transmis à votre assurance',
    highlight: false,
  },
]

export default function Pricing() {
  return (
    <section id="prix" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-orange-100 text-orange-700 font-bold text-sm px-4 py-2 rounded-full mb-4">
            💡 Ce que la concurrence cache, nous l&apos;affichons
          </div>
          <h2 className="section-title">Nos tarifs, en clair</h2>
          <p className="section-subtitle">Pas de mauvaise surprise. Fourchettes honnêtes, toujours affichées avant l&apos;intervention.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {PRICING.map((item) => (
            <div key={item.service} className={`card p-6 relative ${item.highlight ? 'border-2 border-blue-400 shadow-lg' : ''}`}>
              {item.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                  Le plus demandé
                </div>
              )}
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-navy-900 mb-2">{item.service}</h3>
              <p className="text-slate-500 text-sm mb-4">{item.description}</p>
              <div className="text-3xl font-black mb-2" style={{ color: '#F97316' }}>{item.priceRange}</div>
              <div className="bg-green-50 border border-green-200 rounded-lg px-3 py-2 mb-4">
                <p className="text-green-700 text-xs font-medium">🛡️ {item.assurance}</p>
              </div>
              <ul className="space-y-2 mb-6">
                {item.details.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="text-blue-500 mt-0.5 shrink-0">✓</span><span>{d}</span>
                  </li>
                ))}
              </ul>
              <a href={SITE.phoneHref} className="block w-full text-center bg-navy-900 hover:bg-navy-700 text-white font-semibold py-3 rounded-xl transition-colors">
                Demander ce service
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-400 text-sm mt-8">
          * Fourchettes indicatives. Devis précis établi après diagnostic sur place.
          Les interventions dégât des eaux sont généralement prises en charge par l&apos;assurance habitation.
        </p>
      </div>
    </section>
  )
}
