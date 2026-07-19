const CERTS = [
  { icon: '🏆', label: 'Qualibat', sub: 'Qualifié plomberie' },
  { icon: '🌿', label: 'RGE', sub: 'Reconnu Garant Env.' },
  { icon: '🛡️', label: 'Décennale', sub: 'Assurance garantie 10 ans' },
  { icon: '✅', label: 'MRH Compatible', sub: 'Rapport assurance fourni' },
  { icon: '🔬', label: 'ISO Certifié', sub: 'Équipements calibrés' },
  { icon: '📋', label: 'HACCP', sub: 'Procédures rigoureuses' },
]

export default function Certifications() {
  return (
    <section className="bg-ch-800 border-y border-ch-600 py-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {CERTS.map((c) => (
            <div key={c.label} className="flex items-center gap-3 text-sm group">
              <span className="text-2xl">{c.icon}</span>
              <div className="leading-tight">
                <p className="font-bold text-white group-hover:text-rouge-400 transition-colors">{c.label}</p>
                <p className="text-gray-500 text-xs">{c.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
