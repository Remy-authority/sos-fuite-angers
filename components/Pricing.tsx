import { SITE } from '@/lib/config'

const ASSURANCES = [
  {
    icon: '🔍',
    service: "Recherche de fuite d'eau",
    description: 'Localisation precise de la fuite sans travaux inutiles',
    details: ['Diagnostic initial inclus', 'Rapport de localisation fourni', 'Techniques non destructives', 'Delai : 24h–48h'],
    note: "Souvent rembourse par l'assurance habitation",
    highlight: false,
  },
  {
    icon: '🌬️',
    service: 'Assechement professionnel',
    description: 'Sechage professionnel certifie apres degat des eaux',
    details: ['Materiel pro de sechage', 'Hygrometrie certifiee', 'Rapport pour assurance', "Suivi jusqu'a sechage complet"],
    note: "Pris en charge par l'assurance habitation",
    highlight: true,
  },
  {
    icon: '🔧',
    service: 'Reparation & degat des eaux',
    description: 'Reparation apres localisation et rapport expertise',
    details: ['Devis gratuit apres diagnostic', 'Travaux garantis', 'Coordination assurance', 'Finitions comprises'],
    note: 'Devis transmis a votre assurance',
    highlight: false,
  },
]

export default function Pricing() {
  return (
    <section id="assurance" className="py-20 section-cream">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="section-label mb-4 inline-flex">Assurance & garanties</span>
          <h2 className="section-title mt-3">Souvent pris en charge par votre assurance</h2>
          <p className="section-subtitle">
            Recherche de fuite et assechement sont frequemment couverts par votre assurance habitation.
            Devis gratuit avant toute intervention — rapport technique transmis a votre assureur.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {ASSURANCES.map((item) => (
            <div
              key={item.service}
              className={`card-hover p-6 relative ${
                item.highlight ? 'border-teal-200/70 shadow-lg shadow-teal-500/5' : ''
              }`}
            >
              {item.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal-500 text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap shadow-lg shadow-teal-500/20">
                  Le plus demande
                </div>
              )}

              <div className="w-14 h-14 rounded-xl bg-teal-50 border border-teal-200/50 flex items-center justify-center text-3xl mb-5">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-ink-900 mb-2">{item.service}</h3>
              <p className="text-ink-500 text-sm mb-4">{item.description}</p>

              <div className="badge-teal w-full justify-center py-2.5 mb-5">
                🛡️ {item.note}
              </div>

              <ul className="space-y-2 mb-6">
                {item.details.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm text-ink-500">
                    <span className="text-teal-500 mt-0.5 shrink-0">✓</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>

              <a
                href={SITE.phoneHref}
                className={`block w-full text-center font-bold py-3 rounded-full transition-colors ${
                  item.highlight
                    ? 'btn-cta'
                    : 'btn-secondary'
                }`}
              >
                Demander ce service
              </a>
            </div>
          ))}
        </div>

        <div className="text-center text-ink-400 text-sm mt-8">
          * Devis gratuit et precis etabli apres diagnostic sur place.
          Les interventions degat des eaux sont generalement prises en charge par l'assurance habitation.
        </div>
      </div>
    </section>
  )
}
