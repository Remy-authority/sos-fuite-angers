import { SITE } from '@/lib/config'

const STEPS = [
  {
    num: '01',
    icon: '📞',
    title: 'Appel & Diagnostic',
    description: `Vous nous appelez au ${SITE.phone}. En 5 minutes, nous évaluons votre situation et planifions l'intervention au plus vite.`,
    duration: '5 min',
  },
  {
    num: '02',
    icon: '📋',
    title: 'Devis transparent',
    description: 'Fourchette de prix communiquée avant toute intervention. Pas de mauvaise surprise. Accord écrit si besoin.',
    duration: 'Avant intervention',
  },
  {
    num: '03',
    icon: '🔬',
    title: 'Détection précise',
    description: 'Intervention avec nos équipements certifiés (thermique, gaz traceur, acoustique). Localisation centimétrique de la fuite.',
    duration: '1h à 3h',
  },
  {
    num: '04',
    icon: '📄',
    title: 'Rapport & Assurance',
    description: "Rapport technique complet remis en fin d'intervention. Transmis directement à votre assureur pour faciliter l'indemnisation.",
    duration: 'Immédiat',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-20 bg-ch-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="badge-red mb-4 inline-flex">Notre process</span>
          <h2 className="section-title mt-3">Intervention en 4 étapes claires</h2>
          <div className="red-line mx-auto mt-5" />
          <p className="section-subtitle">
            De votre appel au rapport assurance — un process rodé et transparent.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line — desktop */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-ch-500 to-transparent" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((step, i) => (
              <div key={step.num} className="dark-card p-6 text-center space-y-4 relative group hover:border-rouge-600/40 transition-colors">
                {/* Step number badge */}
                <div className="relative inline-flex">
                  <div className="w-14 h-14 rounded-full bg-rouge-600/15 border-2 border-rouge-600/40 flex items-center justify-center mx-auto group-hover:bg-rouge-600/25 group-hover:border-rouge-600/70 transition-colors">
                    <span className="text-2xl">{step.icon}</span>
                  </div>
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-rouge-600 rounded-full flex items-center justify-center text-white text-xs font-black">
                    {i + 1}
                  </span>
                </div>

                <div>
                  <p className="text-rouge-500 text-xs font-bold uppercase tracking-widest mb-1">{step.num}</p>
                  <h3 className="text-white font-bold text-lg group-hover:text-rouge-400 transition-colors">{step.title}</h3>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>

                <div className="inline-flex items-center gap-2 text-xs text-gray-600 border border-ch-500 rounded-full px-3 py-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-verdant-500" />
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
