import Apparition from '@/components/ui/Apparition'
import { LIBELLE_DEVIS } from '@/lib/cta'

/**
 * Bloc 5 de l'accueil (18/11/2026) : les quatre signes d'une fuite cachée, chacun avec une icône
 * DESSINÉE qui se trace puis bouge (#R71) : l'aiguille du compteur tourne, la goutte perle sous
 * l'auréole, la courbe de la facture monte, l'humidité remonte dans le parquet. Le test du
 * compteur en bas, puis le bouton du devis. Bloc sans photo : titres centrés.
 */
const MIEL_DOUX = 'rgb(253 186 116 / 0.6)'

const SIGNES = [
  {
    titre: 'Le compteur tourne sans usage',
    texte: 'Tout est fermé, pourtant les chiffres avancent : l’eau s’échappe quelque part sur le réseau.',
    icone: (
      <>
        <circle className="trace" pathLength={1} cx="24" cy="26" r="15" />
        <path className="trace" pathLength={1} d="M18 4h12M24 4v7" style={{ ['--retard' as string]: '150ms' }} />
        <rect className="trace" pathLength={1} x="17" y="31" width="14" height="5" rx="1" style={{ ['--retard' as string]: '300ms' }} />
        <g className="tourne">
          <path className="trace" pathLength={1} d="M24 26V16" style={{ ['--retard' as string]: '500ms' }} />
        </g>
        <circle className="surgit" cx="24" cy="26" r="2.4" fill={MIEL_DOUX} stroke="none" style={{ ['--retard' as string]: '650ms' }} />
      </>
    ),
  },
  {
    titre: 'Une auréole au plafond ou au mur',
    texte: 'Tache jaunie, peinture qui cloque, joint noirci : l’eau traverse depuis une canalisation proche.',
    icone: (
      <>
        <path className="trace" pathLength={1} d="M4 8h40" />
        <path className="trace" pathLength={1} d="M13 8c0 6 5 9 11 9s11-3 11-9" style={{ ['--retard' as string]: '200ms' }} />
        <path className="trace" pathLength={1} d="M18 8c0 3 3 5 6 5s6-2 6-5" style={{ ['--retard' as string]: '400ms' }} />
        <path className="perle" fill={MIEL_DOUX} stroke="none" d="M24 21c-2.2 3-3.3 4.8-3.3 6.6a3.3 3.3 0 0 0 6.6 0c0-1.8-1.1-3.6-3.3-6.6Z" />
        <path className="trace" pathLength={1} d="M14 43h20" style={{ ['--retard' as string]: '550ms' }} />
      </>
    ),
  },
  {
    titre: 'Une facture d’eau qui grimpe',
    texte: 'Votre consommation augmente sans changement d’habitudes : une fuite peut couler jour et nuit.',
    icone: (
      <>
        <path className="trace" pathLength={1} d="M10 4h20l8 8v32H10z" />
        <path className="trace" pathLength={1} d="M30 4v8h8" style={{ ['--retard' as string]: '200ms' }} />
        <path className="trace" pathLength={1} d="M15 36l6-6 5 4 8-11" style={{ ['--retard' as string]: '450ms' }} />
        <path className="trace souffle" pathLength={1} d="M29 23h5v5" style={{ ['--retard' as string]: '700ms' }} />
      </>
    ),
  },
  {
    titre: 'Une odeur de moisi, un sol humide',
    texte: 'Humidité persistante, parquet qui gonfle, jardin détrempé sans pluie : la fuite est souvent dessous.',
    icone: (
      <>
        <path className="trace" pathLength={1} d="M4 30h40M4 38h40" />
        <path className="trace" pathLength={1} d="M14 30v8m12-8v8m10-8v8" style={{ ['--retard' as string]: '200ms' }} />
        <g className="balaie">
          <path className="trace" pathLength={1} d="M12 22c2-3 4-3 6 0s4 3 6 0 4-3 6 0 4 3 6 0" style={{ ['--retard' as string]: '450ms' }} />
          <path className="trace" pathLength={1} d="M16 14c2-3 4-3 6 0s4 3 6 0 4-3 6 0" style={{ ['--retard' as string]: '650ms' }} />
        </g>
      </>
    ),
  },
]

export default function SignesFuite() {
  return (
    <Apparition as="section" className="section bg-white" aria-labelledby="signes-titre">
      <div className="container-site">
        <h2 id="signes-titre" className="glisse mx-auto max-w-2xl text-center font-display text-[1.7rem] font-bold leading-tight text-nuit [text-wrap:balance] md:text-[2.1rem]">
          Fuite cachée : les signes qui doivent alerter
        </h2>
        <p className="glisse mx-auto mt-4 max-w-2xl text-center leading-relaxed text-slate-700">
          Une fuite encastrée ou enterrée ne se voit pas toujours. Ces quatre signes, seuls ou ensemble, justifient une recherche avant que
          les dégâts s’étendent.
        </p>
        <ul className="mx-auto mt-8 grid gap-3 sm:grid-cols-2 sm:gap-4 md:mt-10 lg:grid-cols-4 lg:gap-6" role="list">
          {SIGNES.map((s, i) => (
            <li
              key={s.titre}
              className="glisse flex h-full flex-col items-center rounded-card border border-slate-200 bg-neige px-5 py-4 text-center md:p-6"
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
                {s.icone}
              </svg>
              <h3 className="mt-2 font-display text-lg font-bold text-nuit md:mt-4">{s.titre}</h3>
              <p className="mt-1 text-[15px] leading-relaxed text-slate-600 md:mt-2">{s.texte}</p>
            </li>
          ))}
        </ul>
        <div className="glisse mx-auto mt-8 flex max-w-3xl flex-col items-center gap-5 rounded-card border border-primary/20 bg-primary/[0.05] px-5 py-5 text-center md:mt-10 md:flex-row md:px-7 md:text-left">
          <p className="leading-relaxed text-slate-800">
            <strong className="text-nuit">Le test du compteur :</strong> relevez-le le soir, n’utilisez pas d’eau, relevez-le au matin. S’il a
            bougé, demandez une recherche.
          </p>
          <a href="#devis" className="btn-accent shrink-0">
            {LIBELLE_DEVIS}
          </a>
        </div>
      </div>
    </Apparition>
  )
}
