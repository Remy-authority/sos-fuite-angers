const CERTS = [
  { icon: '🔬', label: 'Equipements calibres', sub: 'Detection certifiee' },
  { icon: '✅', label: 'Compatible MRH', sub: 'Rapport assurance fourni' },
  { icon: '🛡️', label: 'Decennale', sub: 'Garantie 10 ans' },
  { icon: '⚡', label: 'Urgences 7j/7', sub: 'Week-ends inclus' },
  { icon: '📋', label: 'Devis gratuit', sub: 'Zero engagement' },
  { icon: '♻️', label: '100 % non destructif', sub: 'Aucune casse inutile' },
  { icon: '📄', label: 'Rapport complet', sub: 'Pour votre assurance' },
  { icon: '🎯', label: 'Precision centimetrique', sub: 'Localisation exacte' },
]

export default function Certifications() {
  return (
    <section className="section-light py-10">
      <div className="marquee">
        <div className="marquee-track py-1">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className="flex gap-10 items-center shrink-0"
              aria-hidden={copy === 1 ? true : undefined}
            >
              {CERTS.map((c) => (
                <div key={c.label} className="flex items-center gap-3 shrink-0">
                  <span className="w-11 h-11 rounded-2xl bg-teal-50 border border-teal-200/50 flex items-center justify-center text-xl">
                    {c.icon}
                  </span>
                  <div className="leading-tight whitespace-nowrap">
                    <p className="font-semibold text-ink-900 text-sm">{c.label}</p>
                    <p className="text-ink-500 text-xs">{c.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
