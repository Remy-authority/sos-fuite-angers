import { SITE } from '@/lib/config'

const CHIFFRES = [
  { num: '24h', label: 'Delai d\'intervention', sub: `Sur ${SITE.commune} et environs` },
  { num: '100 %', label: 'Non destructif', sub: 'Technologies de pointe' },
  { num: '7j/7', label: 'Disponibilite', sub: 'Urgences incluses' },
  { num: '30 km', label: 'Rayon d\'intervention', sub: 'Maine-et-Loire' },
]

export default function About() {
  return (
    <section className="section-cream py-20 relative overflow-hidden">
      <div className="deco-ring w-80 h-80 -left-32 top-10" />
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-16 items-center">
          <div className="space-y-6">
            <span className="section-label">Qui sommes-nous</span>
            <h2 className="section-title">
              L'expert fuite d'eau de <span className="accent-underline">reference</span> a {SITE.commune}
            </h2>
            <p className="text-ink-700 leading-relaxed text-lg">
              {SITE.name} est le specialiste local de la detection de fuite et de l'assechement
              dans le Maine-et-Loire. Nous utilisons des equipements de pointe pour localiser vos
              fuites <strong className="text-ink-900 font-semibold">sans casse inutile</strong>, avec
              un rapport complet pour votre assurance.
            </p>
            <p className="text-ink-500 leading-relaxed">
              Notre approche : diagnostic precis, devis gratuit avant intervention,
              et accompagnement complet dans vos demarches avec votre assurance habitation.
            </p>
            <div className="flex flex-wrap gap-2.5">
              <span className="badge-teal">✓ Devis gratuit</span>
              <span className="badge-teal">✓ Rapport assurance inclus</span>
              <span className="badge-teal">✓ Diagnostic precis</span>
            </div>
            <a href={SITE.phoneHref} className="btn-primary mt-2">
              <span>📞</span><span>{SITE.phone}</span>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            {CHIFFRES.map((stat) => (
              <div key={stat.label} className="card-hover p-6 space-y-1.5">
                <p className="text-3xl font-bold text-teal-500 tracking-tight">{stat.num}</p>
                <p className="text-ink-900 font-semibold text-sm">{stat.label}</p>
                <p className="text-ink-500 text-xs">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
