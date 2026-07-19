import { SITE } from '@/lib/config'

export default function About() {
  return (
    <section className="bg-ch-900 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div>
              <span className="badge-red mb-4 inline-flex">Qui sommes-nous</span>
              <h2 className="section-title mt-3">L&apos;expert fuite d&apos;eau de référence à {SITE.commune}</h2>
              <div className="red-line mt-5" />
            </div>
            <p className="text-gray-400 leading-relaxed text-lg">
              {SITE.name} est le spécialiste local de la détection de fuite et de l&apos;assèchement
              dans le Maine-et-Loire. Nous utilisons des équipements de pointe pour
              localiser vos fuites <strong className="text-white">sans casse inutile</strong>, avec un
              rapport complet pour votre assurance.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Notre approche : diagnostic précis, prix transparents affichés avant intervention,
              et accompagnement complet dans vos démarches avec votre assurance habitation.
              Là où la concurrence cache ses tarifs — nous les affichons.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="badge-trust">✓ Prix affichés en clair</span>
              <span className="badge-trust">✓ Avis Google authentiques</span>
              <span className="badge-trust">✓ Rapport assurance inclus</span>
            </div>
            <a href={SITE.phoneHref} className="btn-red inline-flex mt-2">
              <span>📞</span><span>{SITE.phone}</span>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { num: '150€', label: 'Tarif minimum', sub: 'Recherche de fuite', color: 'text-rouge-500' },
              { num: '24h', label: 'Délai intervention', sub: 'Sur Angers & environs', color: 'text-verdant-400' },
              { num: '100%', label: 'Non destructif', sub: 'Technologie de pointe', color: 'text-or-400' },
              { num: '7j/7', label: 'Disponibilité', sub: 'Urgences incluses', color: 'text-rouge-500' },
            ].map((stat) => (
              <div key={stat.label} className="dark-card p-6 space-y-2">
                <p className={`text-3xl font-black ${stat.color}`}>{stat.num}</p>
                <p className="text-white font-bold text-sm">{stat.label}</p>
                <p className="text-gray-500 text-xs">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
