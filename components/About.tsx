import { SITE } from '@/lib/config'

const CHIFFRES = [
  { num: `${SITE.prixRechercheMin}€`, label: 'Tarif minimum', sub: 'Recherche de fuite' },
  { num: '24h', label: 'Délai d’intervention', sub: `Sur ${SITE.commune} et environs` },
  { num: '100 %', label: 'Non destructif', sub: 'Technologies de pointe' },
  { num: '7j/7', label: 'Disponibilité', sub: 'Urgences incluses' },
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
              L&apos;expert fuite d&apos;eau de <span className="accent-underline">référence</span> à {SITE.commune}
            </h2>
            <p className="text-ink-700 leading-relaxed text-lg">
              {SITE.name} est le spécialiste local de la détection de fuite et de l&apos;assèchement
              dans le Maine-et-Loire. Nous utilisons des équipements de pointe pour localiser vos
              fuites <strong className="text-ink-900 font-semibold">sans casse inutile</strong>, avec
              un rapport complet pour votre assurance.
            </p>
            <p className="text-ink-500 leading-relaxed">
              Notre approche : diagnostic précis, prix transparents affichés avant intervention,
              et accompagnement complet dans vos démarches avec votre assurance habitation.
              Là où la concurrence cache ses tarifs — nous les affichons.
            </p>
            <div className="flex flex-wrap gap-2.5">
              <span className="badge-teal">✓ Prix affichés en clair</span>
              <span className="badge-teal">✓ Rapport assurance inclus</span>
              <span className="badge-teal">✓ Diagnostic précis</span>
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
