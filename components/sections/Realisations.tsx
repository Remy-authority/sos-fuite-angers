/**
 * Section « Nos réalisations » — grille de 4 cartes d'intervention.
 * ⚠️ Photos placeholders — remplacer par photos réelles ou Midjourney.
 * Voir prompts dans le commentaire NOU-29.
 */

const REALISATIONS = [
  {
    id: 'thermique',
    category: 'Thermographie',
    categoryColor: 'bg-blue-600',
    title: 'Détection par caméra thermique',
    desc: "Fuite derrière carrelage localisée en 20 min sans casse, appartement Angers centre.",
    icon: (
      <svg viewBox="0 0 80 80" className="h-full w-full" aria-hidden="true">
        <defs>
          <radialGradient id="heat1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F97316" stopOpacity="0.9" />
            <stop offset="40%" stopColor="#3B82F6" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#0B4F8A" stopOpacity="0.4" />
          </radialGradient>
        </defs>
        <rect width="80" height="80" fill="#0F172A" />
        <rect x="8" y="8" width="64" height="64" rx="4" fill="url(#heat1)" opacity="0.8" />
        {/* Grille thermique */}
        {[0,1,2,3].map(row => [0,1,2,3].map(col => (
          <rect
            key={`${row}-${col}`}
            x={8 + col * 16 + 1}
            y={8 + row * 16 + 1}
            width={14}
            height={14}
            rx="1"
            fill={row === 1 && col === 2 ? '#F97316' : row === 2 && col === 2 ? '#FB923C' : '#1E3A5F'}
            opacity={row === 1 && col === 2 ? 1 : row === 2 && col === 2 ? 0.9 : 0.5}
          />
        )))}
        {/* Caméra icon */}
        <rect x="24" y="52" width="32" height="20" rx="3" fill="#0B4F8A" opacity="0.9" />
        <circle cx="40" cy="62" r="6" fill="#1E40AF" />
        <circle cx="40" cy="62" r="3" fill="#60A5FA" />
        <rect x="48" y="55" width="6" height="4" rx="1" fill="#1E40AF" />
      </svg>
    ),
  },
  {
    id: 'acoustique',
    category: 'Détection acoustique',
    categoryColor: 'bg-violet-600',
    title: 'Fuite sous dalle par acoustique',
    desc: "Localisation à 3 cm près sous chape béton, maison individuelle Saint-Barthélemy.",
    icon: (
      <svg viewBox="0 0 80 80" className="h-full w-full" aria-hidden="true">
        <rect width="80" height="80" fill="#0F172A" />
        {/* Ondes acoustiques */}
        {[6, 12, 18, 24].map((r, i) => (
          <circle
            key={r}
            cx="40" cy="40" r={r}
            fill="none"
            stroke="#3B82F6"
            strokeWidth="1.5"
            opacity={1 - i * 0.2}
          />
        ))}
        {/* Point source */}
        <circle cx="40" cy="40" r="4" fill="#F97316" />
        {/* Sol */}
        <rect x="4" y="58" width="72" height="6" rx="2" fill="#1E3A5F" />
        <rect x="4" y="64" width="72" height="12" rx="0" fill="#0B3460" />
        {/* Capteur */}
        <rect x="35" y="52" width="10" height="8" rx="2" fill="#0B4F8A" />
        <rect x="38" y="48" width="4" height="6" rx="1" fill="#60A5FA" />
      </svg>
    ),
  },
  {
    id: 'gaz-traceur',
    category: 'Gaz traceur',
    categoryColor: 'bg-emerald-600',
    title: 'Injection gaz traceur sur réseau',
    desc: "Détection fuite chauffage en cave, résidence Avrillé, sans destruction.",
    icon: (
      <svg viewBox="0 0 80 80" className="h-full w-full" aria-hidden="true">
        <rect width="80" height="80" fill="#0F172A" />
        {/* Canalisation horizontale */}
        <rect x="4" y="36" width="72" height="8" rx="4" fill="#1E3A5F" />
        <rect x="4" y="38" width="72" height="4" rx="2" fill="#0B4F8A" />
        {/* Fuite avec gaz */}
        {[0, 1, 2].map(i => (
          <ellipse
            key={i}
            cx={40 + i * 4 - 4}
            cy={30 - i * 5}
            rx={3 - i * 0.5}
            ry={5 + i}
            fill="#10B981"
            opacity={0.6 - i * 0.15}
          />
        ))}
        <circle cx="40" cy="40" r="3" fill="#F97316" />
        {/* Bouteille gaz */}
        <rect x="56" y="20" width="12" height="28" rx="4" fill="#1E3A5F" />
        <rect x="59" y="16" width="6" height="6" rx="2" fill="#374151" />
        <rect x="60" y="44" width="4" height="6" rx="1" fill="#0B4F8A" />
        <text x="62" y="38" textAnchor="middle" fontSize="6" fill="#60A5FA" fontWeight="bold">H₂</text>
      </svg>
    ),
  },
  {
    id: 'rapport',
    category: 'Bilan hydrique',
    categoryColor: 'bg-amber-600',
    title: 'Bilan complet + rapport officiel',
    desc: "Rapport de localisation remis pour prise en charge assurance, copropriété Les Ponts-de-Cé.",
    icon: (
      <svg viewBox="0 0 80 80" className="h-full w-full" aria-hidden="true">
        <rect width="80" height="80" fill="#0F172A" />
        {/* Document */}
        <rect x="16" y="10" width="48" height="60" rx="4" fill="#1E3A5F" />
        <rect x="16" y="10" width="48" height="60" rx="4" fill="none" stroke="#0B4F8A" strokeWidth="1.5" />
        {/* Lignes texte */}
        <rect x="24" y="22" width="32" height="3" rx="1.5" fill="#3B82F6" opacity="0.8" />
        <rect x="24" y="30" width="28" height="2" rx="1" fill="#475569" />
        <rect x="24" y="36" width="30" height="2" rx="1" fill="#475569" />
        <rect x="24" y="42" width="24" height="2" rx="1" fill="#475569" />
        {/* Checkmark */}
        <circle cx="52" cy="55" r="10" fill="#0B4F8A" />
        <path d="M47 55 L51 59 L57 50" stroke="#F97316" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        {/* En-tête */}
        <rect x="20" y="14" width="40" height="4" rx="1" fill="#0B4F8A" opacity="0.6" />
      </svg>
    ),
  },
]

export default function Realisations() {
  return (
    <section className="section bg-light" aria-labelledby="realisations-title">
      <div className="container-site">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">Notre travail</p>
          <h2 id="realisations-title" className="text-2xl font-bold text-slate-900 md:text-3xl">
            Nos réalisations
          </h2>
          <p className="mt-3 text-slate-500 text-sm max-w-xl mx-auto">
            Quelques interventions récentes sur Angers et le Maine-et-Loire.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {REALISATIONS.map((real) => (
            <article key={real.id} className="card overflow-hidden p-0">
              {/* Visuel placeholder */}
              <div className="relative aspect-square w-full bg-slate-800">
                {real.icon}
                {/* Badge photo à venir */}
                <span className="absolute bottom-2 right-2 rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-medium text-white/60 backdrop-blur-sm">
                  Photo · Midjourney
                </span>
              </div>

              <div className="p-4">
                {/* Badge catégorie */}
                <span className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold text-white ${real.categoryColor} mb-2`}>
                  {real.category}
                </span>
                <h3 className="font-bold text-slate-900 text-sm leading-snug">{real.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-500">{real.desc}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Note visible en preview — à retirer avant Gate C */}
        <p className="mt-6 text-center text-xs text-slate-400">
          ⚠️ Photos de démonstration — à remplacer par photos réelles (prompts Midjourney fournis dans NOU-29).
        </p>
      </div>
    </section>
  )
}
