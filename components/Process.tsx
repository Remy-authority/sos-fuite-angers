import { SITE } from '@/lib/config'

const STEPS = [
  {
    num: '01',
    icon: '📞',
    title: 'Appel & Diagnostic',
    description: `Vous nous appelez au ${SITE.phone}. En 5 minutes, nous evaluons votre situation et planifions l'intervention au plus vite.`,
    duration: '5 min',
  },
  {
    num: '02',
    icon: '📋',
    title: 'Devis gratuit',
    description: 'Devis gratuit communique avant toute intervention. Pas de mauvaise surprise. Accord ecrit si besoin.',
    duration: 'Avant intervention',
  },
  {
    num: '03',
    icon: '🔬',
    title: 'Detection precise',
    description: 'Intervention avec nos equipements professionnels (thermique, gaz traceur, acoustique). Localisation centimetrique de la fuite.',
    duration: '1h a 3h',
  },
  {
    num: '04',
    icon: '📄',
    title: 'Rapport & Assurance',
    description: "Rapport technique complet remis en fin d'intervention. Transmis directement a votre assureur pour faciliter l'indemnisation.",
    duration: ' immediat',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-20 section-cream">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="section-label mb-4 inline-flex">Notre process</span>
          <h2 className="section-title mt-3">Intervention en 4 etapes claires</h2>
          <p className="section-subtitle">
            De votre appel au rapport assurance — un process rode et transparent.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line — desktop */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-line-200 to-transparent" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((step, i) => (
              <div key={step.num} className="card-hover p-6 text-center space-y-4 relative group">
                {/* Step number badge */}
                <div className="relative inline-flex">
                  <div className="w-14 h-14 rounded-full bg-teal-50 border-2 border-teal-200/50 flex items-center justify-center mx-auto group-hover:bg-teal-50 group-hover:border-teal-400 transition-colors">
                    <span className="text-2xl">{step.icon}</span>
                  </div>
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-teal-500 rounded-full flex items-center justify-center text-white text-xs font-black">
                    {i + 1}
                  </span>
                </div>

                <div>
                  <p className="text-teal-500 text-xs font-bold uppercase tracking-widest mb-1">{step.num}</p>
                  <h3 className="text-ink-900 font-bold text-lg group-hover:text-teal-500 transition-colors">{step.title}</h3>
                </div>

                <p className="text-ink-500 text-sm leading-relaxed">{step.description}</p>

                <div className="inline-flex items-center gap-2 text-xs text-ink-400 border border-line-200 rounded-full px-3 py-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                  {step.duration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
