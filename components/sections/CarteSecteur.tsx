import Link from 'next/link'
import Apparition from '@/components/ui/Apparition'
import CarteAgrandir from '@/components/ui/CarteAgrandir'
import { CARTE, NOMS, PAGES } from './carte-secteur-data'

/**
 * Carte du secteur (règle Rémy #R60) : toutes les communes à 40 km d'Angers ou moins en vert,
 * aucune commune grise dans le cercle. Contours officiels dans deux images statiques
 * (scripts/carte-secteur.py) ; par-dessus, en code : l'anneau pointillé de 40 km, les noms (gras
 * et cliquables pour les communes qui ont leur page) et le repère d'Angers. Le vert s'étend depuis
 * Angers à l'apparition.
 *
 * `commune` (page de zone) : la commune de la page est colorée et son nom souligné, la carte
 * s'ouvre sur elle au téléphone quand on l'agrandit.
 * `compacte` (page de zone) : carte seule et une phrase, sans la liste, pour garder la page courte.
 */
const PRIMAIRE = 'rgb(var(--color-primary-rgb) / .5)'
const PRIMAIRE_FONCE = 'rgb(var(--color-primary-dark-rgb))'

export default function CarteSecteur({ commune, titre, compacte }: { commune?: string; titre?: string; compacte?: boolean }) {
  const liste = [...PAGES].sort((a, b) => a.nom.localeCompare(b.nom, 'fr'))
  const ici = commune ? PAGES.find((p) => p.slug === commune) : undefined
  const { w, h, cx, cy, rayon, cadre, angle40, yNomCentre } = CARTE
  const ouvrir = ici ? { x: ici.x, y: ici.y } : { x: cx, y: cy }
  const etiquettes = [
    ...NOMS.map((n) => ({ nom: n.nom, etiquette: n.etiquette, gras: false })),
    ...PAGES.filter((p) => p.etiquette).map((p) => ({ nom: p.nom, etiquette: p.etiquette!, gras: true })),
  ]

  return (
    <Apparition
      as={compacte ? 'aside' : 'section'}
      className={compacte ? 'carte-secteur' : 'carte-secteur section bg-white'}
      aria-labelledby="carte-titre"
    >
      <div className={compacte ? 'mx-auto max-w-md' : 'container-site'}>
        {compacte ? (
          <h2 id="carte-titre" className="glisse text-center font-display text-xl font-bold leading-tight text-nuit lg:text-left">
            {titre}
          </h2>
        ) : (
          <div className="glisse text-center">
            <p className="surtitre justify-center">Notre secteur</p>
            <h2 id="carte-titre" className="mx-auto max-w-2xl font-display text-[1.7rem] font-bold leading-tight text-nuit [text-wrap:balance] md:text-[2.1rem]">
              {titre ?? `${CARTE.km} km autour d’Angers, du Segréen au Saumurois`}
            </h2>
          </div>
        )}

        <div className={`mx-auto grid items-stretch ${compacte ? 'mt-4 gap-3' : 'mt-8 gap-8 md:mt-12 lg:grid-cols-[1.45fr_1fr] lg:gap-12'}`}>
          <figure className={compacte ? 'mx-auto m-0 flex w-full max-w-[290px] flex-col justify-center lg:max-w-none' : 'm-0 flex flex-col justify-center'}>
            <CarteAgrandir cx={ouvrir.x / w} cy={ouvrir.y / h}>
              <div className="relative aspect-square" style={{ ['--cx' as string]: `${(cx / w) * 100}%`, ['--cy' as string]: `${(cy / h) * 100}%` }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/carte/secteur-fond.svg" alt="" width={w} height={h} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/carte/secteur-vert.svg" alt="" width={w} height={h} loading="lazy" decoding="async" className="carte-vert absolute inset-0 h-full w-full" />
                <svg viewBox={`0 0 ${w} ${h}`} className="absolute inset-0 h-full w-full" role="img" aria-labelledby="carte-legende">
                  <title id="carte-legende">
                    Carte d’Angers et des {CARTE.servies} communes où nous recherchons les fuites, en vert, dans un rayon de {CARTE.km} km
                    {ici ? `, ${ici.nom} en couleur` : ''}
                  </title>
                  {PAGES.map((p) => (
                    <Link key={p.slug} href={`/zones/${p.slug}`} aria-label={`Recherche de fuite à ${p.nom}`} className="group">
                      <path
                        d={p.d}
                        className={
                          p.slug === ici?.slug
                            ? 'fill-accent/70'
                            : 'fill-transparent transition-[fill] duration-200 group-hover:fill-primary/30 group-focus-visible:fill-primary/30'
                        }
                        stroke={PRIMAIRE}
                        strokeWidth="1.6"
                      />
                    </Link>
                  ))}
                  <g aria-hidden="true" pointerEvents="none">
                    <circle cx={cx} cy={cy} r={rayon} fill="none" className="carte-rayon" stroke={PRIMAIRE_FONCE} strokeWidth="2.6" strokeDasharray="11 9" />
                    <circle cx={cx} cy={cy} r={cadre - 1.5} fill="none" stroke="#D9D4CC" strokeWidth="3" />
                    <text
                      x={cx + rayon * Math.cos(angle40)}
                      y={cy + rayon * Math.sin(angle40)}
                      className="carte-rayon"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fontSize="26"
                      fontWeight="700"
                      fill={PRIMAIRE_FONCE}
                      stroke="#fff"
                      strokeWidth="8"
                      strokeLinejoin="round"
                      paintOrder="stroke"
                    >
                      {CARTE.km} km
                    </text>
                  </g>
                  <g aria-hidden="true" pointerEvents="none" stroke="rgb(255 255 255 / .9)" strokeLinejoin="round" paintOrder="stroke">
                    {etiquettes.map(({ nom, etiquette: e, gras }) => {
                      const marque = ici && nom === ici.nom
                      return (
                        <text
                          key={nom}
                          x={e.x}
                          y={e.y}
                          fontSize={marque ? e.taille * 1.15 : e.taille}
                          strokeWidth={e.taille * 0.26}
                          fontWeight={gras ? 700 : 500}
                          fill={marque ? 'rgb(var(--color-dark-rgb))' : gras ? '#0F1A2E' : '#3A4250'}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          {e.lignes.length === 2 ? (
                            <>
                              <tspan x={e.x} dy="-0.56em">{e.lignes[0]}</tspan>
                              <tspan x={e.x} dy="1.12em">{e.lignes[1]}</tspan>
                            </>
                          ) : (
                            e.lignes[0]
                          )}
                        </text>
                      )
                    })}
                    <circle cx={cx} cy={cy} r="8" fill="#fff" stroke={PRIMAIRE_FONCE} strokeWidth="5" />
                    <circle cx={cx} cy={cy} r="8" fill="none" stroke={PRIMAIRE_FONCE} strokeWidth="3" className="carte-onde" />
                    <text x={cx} y={yNomCentre} fontSize="30" fontWeight="800" strokeWidth="8" fill="#0F1A2E" textAnchor="middle" dominantBaseline="middle">
                      Angers
                    </text>
                  </g>
                </svg>
              </div>
            </CarteAgrandir>
            <figcaption className="mt-3 flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-[13px] text-slate-600">
              <span className="inline-flex items-center gap-2">
                <span className="inline-block h-3 w-3 rounded-[2px] border border-primary/40 bg-[#C4DFB9]" aria-hidden="true" />
                Les {CARTE.servies} communes du secteur
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="font-bold text-slate-900" aria-hidden="true">Aa</span>
                En gras, celles qui ont leur page
              </span>
            </figcaption>
          </figure>

          <div className="flex flex-col justify-center text-center lg:text-left">
            <p className={`glisse mx-auto max-w-md leading-relaxed text-slate-600 lg:mx-0 ${compacte ? 'text-sm' : 'text-[15px] lg:text-base'}`}>
              {ici
                ? `${ici.nom} est en vert sur la carte, avec les ${CARTE.servies - 1} autres communes du secteur où nous recherchons les fuites.`
                : 'Chaque commune verte est dans notre secteur : Angers, sa première couronne, puis les bourgs du Maine-et-Loire jusqu’à 40 km.'}
            </p>
            {!compacte && (
              <ul className="mx-auto mt-5 grid max-w-md grid-cols-2 gap-x-4 gap-y-0.5 text-left text-[15px] lg:mx-0">
                {liste.map((c, i) => (
                  <li key={c.slug} className="glisse" style={{ ['--retard' as string]: `${30 * i}ms` }}>
                    <Link
                      href={`/zones/${c.slug}`}
                      aria-current={c.slug === ici?.slug ? 'page' : undefined}
                      className="group flex min-h-[40px] items-center gap-2 py-1 font-medium text-slate-800 hover:text-primary aria-[current=page]:font-bold aria-[current=page]:text-accent"
                    >
                      <span className="h-2.5 w-2.5 shrink-0 rounded-[2px] bg-[#9CCB8C] group-hover:bg-primary" aria-hidden="true" />
                      {c.nom}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </Apparition>
  )
}
