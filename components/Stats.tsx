import { SITE } from '@/lib/config'

const STATS = [
  { value: '200+', label: 'Interventions réalisées', sub: 'à Angers et environs' },
  { value: '98%', label: 'Clients satisfaits', sub: 'Avis vérifiés Google' },
  { value: '<2h', label: 'Délai moyen', sub: `Sur ${SITE.commune}` },
  { value: '0€', label: 'Frais cachés', sub: 'Prix affichés avant intervention' },
  { value: '3', label: 'Techniques de détection', sub: 'Thermique · Gaz · Acoustique' },
  { value: '10 ans', label: 'Garantie décennale', sub: 'Assurance professionnelle' },
]

export default function Stats() {
  return (
    <section className="bg-rouge-700 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center text-white">
          {STATS.map((s) => (
            <div key={s.label} className="space-y-1">
              <p className="text-3xl md:text-4xl font-black tracking-tight">{s.value}</p>
              <p className="font-bold text-sm text-white/90">{s.label}</p>
              <p className="text-xs text-white/60">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
