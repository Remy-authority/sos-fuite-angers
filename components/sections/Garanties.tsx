import Apparition from '@/components/ui/Apparition'

/**
 * Bloc 2 de l'accueil : quatre engagements de recherche de fuite, chacun avec une icône DESSINÉE
 * pour le métier qui se trace à l'apparition puis bouge doucement (#R67, #R71) : la caméra
 * thermique balaie le mur, les lignes du rapport s'écrivent, la goutte tombe sur le point
 * marqué, le crayon du devis reste posé. Énoncés vérifiables, aucune certification, aucun délai
 * chiffré, aucune personne. Bloc sans visuel : titres centrés.
 */
const MIEL_DOUX = 'rgb(253 186 116 / 0.6)'

const GARANTIES = [
  {
    titre: 'Rien de cassé pour chercher',
    texte: 'Caméra thermique, gaz traceur et écoute trouvent la fuite avant d’ouvrir le moindre carreau.',
    icone: (
      <>
        <path className="trace" pathLength={1} d="M6 6v36M6 42h36" />
        <path className="trace" pathLength={1} d="M6 30h8m-8-12h8" style={{ ['--retard' as string]: '150ms' }} />
        <g className="balaie">
          <rect className="trace" pathLength={1} x="20" y="12" width="20" height="15" rx="2" style={{ ['--retard' as string]: '300ms' }} />
          <path className="trace" pathLength={1} d="M26 27v8h8v-8" style={{ ['--retard' as string]: '500ms' }} />
          <circle className="surgit" cx="30" cy="19.5" r="3.4" fill={MIEL_DOUX} stroke="none" style={{ ['--retard' as string]: '700ms' }} />
        </g>
      </>
    ),
  },
  {
    titre: 'Le point de fuite marqué',
    texte: 'Nous repérons l’endroit exact et vous montrons ce qu’il faut ouvrir, ni plus ni moins.',
    icone: (
      <>
        <path className="trace" pathLength={1} d="M4 40h40" />
        <circle className="trace" pathLength={1} cx="24" cy="34" r="6" style={{ ['--retard' as string]: '200ms' }} />
        <path className="trace" pathLength={1} d="M20 30l8 8m0-8-8 8" style={{ ['--retard' as string]: '400ms' }} />
        <path className="tombe" fill={MIEL_DOUX} d="M24 6c-3 4-4.5 6.5-4.5 9a4.5 4.5 0 0 0 9 0c0-2.5-1.5-5-4.5-9Z" style={{ ['--retard' as string]: '650ms' }} />
      </>
    ),
  },
  {
    titre: 'Un rapport pour l’assureur',
    texte: 'Méthode, mesures et photos du point de fuite, à joindre à votre déclaration de sinistre.',
    icone: (
      <>
        <path className="trace" pathLength={1} d="M12 4h18l8 8v32H12z" />
        <path className="trace" pathLength={1} d="M30 4v8h8" style={{ ['--retard' as string]: '250ms' }} />
        {[20, 27, 34].map((y, i) => (
          <path key={y} className="trace souffle" pathLength={1} d={`M18 ${y}h${i === 2 ? 10 : 14}`} style={{ ['--retard' as string]: `${450 + i * 200}ms` }} />
        ))}
      </>
    ),
  },
  {
    titre: 'Devis gratuit, sans engagement',
    texte: 'Vous connaissez le prix de la recherche avant notre venue, puis vous décidez librement.',
    icone: (
      <>
        <path className="trace" pathLength={1} d="M8 40h32" />
        <path className="trace" pathLength={1} d="M12 34c4-8 8 4 12-4s7 2 10-2" style={{ ['--retard' as string]: '250ms' }} />
        <g className="tremble">
          <path className="trace" pathLength={1} d="M30 6l8 8-14 14h-8v-8z" style={{ ['--retard' as string]: '500ms' }} />
          <path className="trace" pathLength={1} d="m27 9 8 8" style={{ ['--retard' as string]: '700ms' }} />
        </g>
      </>
    ),
  },
]

export default function Garanties() {
  return (
    <Apparition as="section" className="section bg-neige" aria-labelledby="garanties-titre">
      <div className="container-site">
        <h2 id="garanties-titre" className="glisse mx-auto max-w-2xl text-center font-display text-[1.7rem] font-bold leading-tight text-nuit [text-wrap:balance] md:text-[2.1rem]">
          Trouver la fuite, pas casser la maison
        </h2>
        <ul className="mx-auto mt-8 grid gap-3 sm:grid-cols-2 sm:gap-4 md:mt-12 lg:grid-cols-4 lg:gap-6" role="list">
          {GARANTIES.map((g, i) => (
            <li
              key={g.titre}
              className="glisse flex h-full flex-col items-center rounded-card border border-slate-200 bg-white px-5 py-4 text-center shadow-panel md:p-6"
              style={{ ['--retard' as string]: `${i * 120}ms` }}
            >
              <svg
                className="h-11 w-11 text-primary md:h-14 md:w-14"
                viewBox="0 0 48 48"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {g.icone}
              </svg>
              <h3 className="mt-2 font-display text-lg font-bold text-nuit md:mt-4">{g.titre}</h3>
              <p className="mt-1 text-[15px] leading-relaxed text-slate-600 md:mt-2">{g.texte}</p>
            </li>
          ))}
        </ul>
      </div>
    </Apparition>
  )
}
