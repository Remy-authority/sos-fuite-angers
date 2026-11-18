'use client'

import { useEffect, useId, useLayoutEffect, useRef, useState } from 'react'

/**
 * Bloc 3 de l'accueil en scrollytelling (décision Rémy 18/11/2026), placé après les prestations :
 * la coupe en couleur d'une maison angevine, cadre fixe, traits jaune miel, et la fuite cachée sous
 * la dalle de la salle de bain trouvée étape par étape quand on fait défiler la page.
 * UNE seule scène continue : rien ne disparaît vers une autre image.
 *
 * Mécanique (moteur du site modèle mur-soutenement-haute-savoie.fr) : la scène est épinglée dans
 * une piste ; l'avancée t va de 0 à 5. Chaque pièce porte data-etape="k" : elle apparaît entre
 * t = k-1 et k-0,5 (fondu, ou tracé si data-trait). data-tourne="deg" : l'aiguille tourne au lieu
 * d'apparaître (data-depart = angle de départ, data-cx / data-cy = axe).
 * data-ephemere : la pièce s'efface pendant l'étape suivante.
 * data-etiquette="k" : visible seulement quand l'étape k est l'étape courante.
 * « Réduire les animations » : dessin final fixe et liste des cinq étapes.
 * Tous les textes sont dans le HTML servi.
 */

const ETAPES = [
  { titre: 'Un indice, rien de plus', texte: 'Une tache au sol, une facture qui grimpe : la fuite existe, mais reste invisible.' },
  { titre: 'Le réseau sous pression', texte: 'Nous fermons les vannes et lisons le manomètre : sa chute désigne la portion fautive.' },
  { titre: 'La caméra thermique', texte: 'L’eau qui s’échappe change la température de la dalle : la caméra dessine sa trace.' },
  { titre: 'Gaz traceur et écoute', texte: 'Un gaz inoffensif ressort par la fuite, notre détecteur le capte à travers le carrelage.' },
  { titre: 'Un point marqué, pas un sol éventré', texte: 'Nous marquons l’endroit exact à ouvrir et vous remettons un rapport écrit avec photos.' },
]
const N = ETAPES.length
const COURSE = 0.34
const MIEL = '#FCD680'
const EAU = '#7CC8F5'

const useIsoLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect
const borne = (v: number) => Math.min(1, Math.max(0, v))
const pad2 = (n: number) => String(n).padStart(2, '0')

/* Le tuyau d'arrivée : du compteur, sous le jardin, à travers la fondation, sous la dalle, puis
   dans le mur jusqu'au lavabo. La fuite est sous la dalle, en x = 246. */
const TUYAU = 'M59 224H340V146'
const FUITE = { x: 246, y: 224 }

function appliquer(pieces: SVGElement[], t: number, actif: number) {
  for (const el of pieces) {
    const d = el.dataset
    if (d.etiquette) {
      const k = Number(d.etiquette)
      el.style.opacity = actif === k ? '1' : '0'
      continue
    }
    const k = Number(d.etape)
    let loc = borne((t - (k - 1) - Number(d.debut ?? 0)) / 0.5)
    if (d.tourne !== undefined) {
      const angle = Number(d.depart ?? 0) + Number(d.tourne) * loc
      el.setAttribute('transform', `rotate(${angle} ${d.cx} ${d.cy})`)
      continue
    }
    if (d.ephemere !== undefined) loc *= 1 - borne((t - k) / 0.4)
    if (d.trait !== undefined) {
      el.style.strokeDashoffset = String(1 - loc)
      el.style.opacity = loc > 0 ? '1' : '0'
    } else {
      el.style.opacity = String(loc)
    }
  }
}

function Dessin({ svgRef, className }: { svgRef?: React.Ref<SVGSVGElement>; className?: string }) {
  const id = useId().replace(/:/g, '')
  const ref = (nom: string) => `url(#${id}-${nom})`
  const trait = { pathLength: 1, strokeDasharray: 1, 'data-trait': '', style: { opacity: 0 } } as const
  const cache = { style: { opacity: 0 } } as const
  const texte = {
    fontSize: 14,
    fontWeight: 700,
    fill: MIEL,
    stroke: '#06182C',
    strokeWidth: 4,
    paintOrder: 'stroke',
    strokeLinejoin: 'round',
    textAnchor: 'middle',
  } as const

  return (
    <svg ref={svgRef} viewBox="0 0 400 296" className={className} role="img" aria-labelledby={`${id}-titre`}>
      <title id={`${id}-titre`}>
        Coupe d’une maison : une fuite cachée sous la dalle de la salle de bain, trouvée par le test de pression, la caméra
        thermique et le gaz traceur, puis marquée au sol à l’endroit exact
      </title>
      <defs>
        <linearGradient id={`${id}-ciel`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#123C66" />
          <stop offset="1" stopColor="#0A2440" />
        </linearGradient>
        <pattern id={`${id}-terre`} width="20" height="16" patternUnits="userSpaceOnUse">
          <circle cx="4" cy="4" r="1.5" fill="#4E3823" />
          <circle cx="14" cy="11" r="2.2" fill="#4E3823" />
          <circle cx="11" cy="3" r="0.9" fill="#A07B52" />
        </pattern>
        <pattern id={`${id}-herisson`} width="9" height="9" patternUnits="userSpaceOnUse">
          <circle cx="2.5" cy="2.5" r="2" fill="#8D959C" />
          <circle cx="7" cy="7" r="1.6" fill="#5F6870" />
        </pattern>
        <pattern id={`${id}-faience`} width="13" height="13" patternUnits="userSpaceOnUse">
          <rect width="13" height="13" fill="#2F628F" />
          <path d="M0 .5H13M.5 0V13" stroke="#4B7FAD" strokeWidth="1" />
        </pattern>
        <radialGradient id={`${id}-chaleur`}>
          <stop offset="0" stopColor="#FFF3A3" />
          <stop offset="0.3" stopColor="#FFB13B" />
          <stop offset="0.62" stopColor="#E0457B" />
          <stop offset="0.85" stopColor="#6A3FC4" stopOpacity="0.75" />
          <stop offset="1" stopColor="#3B2E9E" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${id}-ecran`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3B2E9E" />
          <stop offset="0.5" stopColor="#E0457B" />
          <stop offset="1" stopColor="#FFB13B" />
        </linearGradient>
      </defs>

      {/* Ciel, toit, jardin et sol en place */}
      <rect width="400" height="296" rx="8" fill={ref('ciel')} />
      <path d="M138 52 268 8l132 44z" fill="#334A63" />
      <path d="M138 52 268 8l132 44" fill="none" stroke="#4E6782" strokeWidth="2" />
      <path d="M0 198h400v90a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8z" fill="#6B4E33" />
      <path d="M0 198h400v90a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8z" fill={ref('terre')} />
      <rect x="0" y="195" width="150" height="5" fill="#5E9E4C" />
      <g fill="#5E9E4C">
        <circle cx="112" cy="180" r="14" />
        <circle cx="124" cy="186" r="10" fill="#4C8A3D" />
      </g>

      {/* Regard du compteur, dans le jardin */}
      <rect x="26" y="201" width="50" height="38" fill="#2E261E" />
      <rect x="22" y="197" width="58" height="5" fill="#8C9096" />
      <circle cx="50" cy="222" r="9.5" fill="#F1F5F9" stroke="#9AA4AE" strokeWidth="1.5" />
      <line x1="50" y1="222" x2="50" y2="215" stroke="#0B4F8A" strokeWidth="1.8" strokeLinecap="round" data-etape="1" data-tourne="720" data-cx="50" data-cy="222" />

      {/* Maison : murs, plafond, pièce, faïence, dalle, hérisson sous la dalle */}
      <rect x="162" y="56" width="216" height="140" fill="#1E4166" />
      <rect x="300" y="104" width="78" height="92" fill={ref('faience')} />
      <rect x="150" y="48" width="12" height="190" fill="#D9D2C5" />
      <rect x="378" y="48" width="12" height="190" fill="#D9D2C5" />
      <rect x="150" y="48" width="240" height="8" fill="#CFC8BA" />
      <rect x="162" y="212" width="216" height="26" fill="#757D84" />
      <rect x="162" y="212" width="216" height="26" fill={ref('herisson')} />
      <rect x="162" y="200" width="216" height="12" fill="#A4A39D" />
      <rect x="162" y="196" width="216" height="4" fill="#E8E2D6" />
      <path d="M190 196v4M218 196v4M274 196v4M302 196v4M330 196v4M358 196v4" stroke="#B9B2A4" strokeWidth="1" />

      {/* Lavabo, robinet, miroir */}
      <rect x="326" y="68" width="34" height="30" rx="2" fill="#5B88B2" opacity="0.7" />
      <path d="M318 128h46v4q-2 10-23 10t-23-10z" fill="#F1F5F9" />
      <path d="M346 128v-9h8" fill="none" stroke="#B8C4CF" strokeWidth="3" strokeLinecap="round" />

      {/* Le tuyau caché (gris), et la tache au sol : ce que voit le client */}
      <path d={TUYAU} fill="none" stroke="#8A97A4" strokeWidth="4" strokeLinejoin="round" />
      <ellipse cx={FUITE.x} cy="197.5" rx="24" ry="2.6" fill="#35668F" />

      {/* 1. L'indice : la tache entourée, le compteur qui tourne robinets fermés */}
      <ellipse cx={FUITE.x} cy="197" rx="34" ry="9" fill="none" stroke={MIEL} strokeWidth="2" data-etape="1" data-ephemere="" {...trait} />
      <g data-etiquette="1" {...cache}>
        <text x={FUITE.x} y="178" {...texte}>Tache au sol</text>
        <text x="84" y="264" {...texte}>Compteur qui tourne</text>
      </g>

      {/* 2. Vanne fermée, manomètre, réseau tracé en miel */}
      <path d={TUYAU} fill="none" stroke={MIEL} strokeWidth="2.4" strokeLinejoin="round" data-etape="2" {...trait} />
      <g data-etape="2" {...cache}>
        <path d="M112 216v16l16-16v16z" fill={MIEL} />
        <path d="M120 224v-10m-5 0h10" stroke={MIEL} strokeWidth="2" strokeLinecap="round" />
        <path d="M92 224v-8" stroke="#B8C4CF" strokeWidth="3" />
        <circle cx="92" cy="207" r="9.5" fill="#F1F5F9" stroke={MIEL} strokeWidth="1.8" />
        <line
          x1="92"
          y1="207"
          x2="92"
          y2="200"
          stroke="#C2410C"
          strokeWidth="1.8"
          strokeLinecap="round"
          transform="rotate(55 92 207)"
          data-etape="2"
          data-debut="0.3"
          data-tourne="-115"
          data-depart="55"
          data-cx="92"
          data-cy="207"
        />
      </g>
      <text x="96" y="264" {...texte} data-etiquette="2" {...cache}>
        Pression qui chute
      </text>

      {/* 3. La caméra thermique et la trace de l'eau sous la dalle (s'effacent quand le gaz arrive) */}
      <ellipse cx={FUITE.x} cy="214" rx="46" ry="22" fill={ref('chaleur')} data-etape="3" data-debut="0.25" data-ephemere="" {...cache} />
      <g data-etape="3" data-ephemere="" {...cache}>
        <path d="M201 146 222 196h48z" fill={MIEL} opacity="0.13" />
        <path d="M201 146 222 196M205 146 270 196" stroke={MIEL} strokeWidth="1.3" strokeDasharray="3 4" />
        <rect x="188" y="110" width="28" height="38" rx="4" fill="#2A2F36" stroke="#4A525C" strokeWidth="1.2" />
        <rect x="192" y="114" width="20" height="16" rx="1.5" fill={ref('ecran')} />
        <path d="M196 148v14h8v-14" fill="#2A2F36" />
      </g>
      <text x={FUITE.x} y="272" {...texte} data-etiquette="3" {...cache}>
        Trace thermique
      </text>

      {/* 4. Gaz traceur qui remonte, détecteur posé sur le carrelage, ondes captées */}
      <g fill="#DDF1FF" data-etape="4" data-ephemere="" {...cache}>
        <circle cx="241" cy="217" r="2.2" />
        <circle cx="251" cy="211" r="1.8" />
        <circle cx="244" cy="205" r="1.6" />
        <circle cx="250" cy="202" r="1.3" />
        <circle cx="238" cy="209" r="1.4" />
      </g>
      <g data-etape="4" data-ephemere="" data-debut="0.15" {...cache}>
        <path d="M268 152 252 186" stroke="#B8C4CF" strokeWidth="3" strokeLinecap="round" />
        <rect x="262" y="140" width="22" height="14" rx="3" fill="#2A2F36" />
        <path d="M232 196q14-14 28 0z" fill="#E5E7EB" />
      </g>
      <g fill="none" stroke={MIEL} strokeWidth="1.8" strokeLinecap="round">
        <path d="M226 180q20-12 40 0" data-etape="4" data-ephemere="" data-debut="0.3" {...trait} />
        <path d="M218 170q28-18 56 0" data-etape="4" data-ephemere="" data-debut="0.4" {...trait} />
      </g>
      <text x={FUITE.x} y="272" {...texte} data-etiquette="4" {...cache}>
        Gaz traceur capté
      </text>

      {/* 5. La fuite révélée, le point marqué au sol, le rapport remis */}
      <g fill={EAU} data-etape="5" {...cache}>
        <circle cx={FUITE.x} cy={FUITE.y} r="3.4" />
        <circle cx={FUITE.x - 7} cy={FUITE.y + 6} r="2" />
        <circle cx={FUITE.x + 7} cy={FUITE.y + 7} r="2.2" />
        <circle cx={FUITE.x + 2} cy={FUITE.y + 12} r="1.6" />
      </g>
      <g fill="none" stroke={MIEL} strokeWidth="2.4" strokeLinecap="round">
        <path d={`M${FUITE.x - 9} 188l18 16M${FUITE.x + 9} 188l-18 16`} data-etape="5" data-debut="0.1" {...trait} />
        <circle cx={FUITE.x} cy="196" r="15" data-etape="5" data-debut="0.25" {...trait} />
      </g>
      <g data-etape="5" data-debut="0.3" {...cache}>
        <rect x="30" y="74" width="48" height="62" rx="3" fill="#F8FAFC" />
        <path d="M38 88h32M38 97h32M38 106h20" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
        <path d="M44 120l7 7 13-14" fill="none" stroke="#16A34A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <g data-etiquette="5" {...cache}>
        <text x={FUITE.x} y="272" {...texte}>
          Fuite localisée
        </text>
        <text x="54" y="156" {...texte}>
          Rapport écrit
        </text>
      </g>
    </svg>
  )
}

export default function CoupeRecherche() {
  const piste = useRef<HTMLDivElement>(null)
  const scene = useRef<HTMLDivElement>(null)
  const dessin = useRef<SVGSVGElement>(null)
  const barre = useRef<HTMLDivElement>(null)
  const [mode, setMode] = useState<'anime' | 'fixe'>('anime')
  const [actif, setActif] = useState(1)

  useIsoLayoutEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const suivre = () => setMode(mq.matches ? 'fixe' : 'anime')
    suivre()
    mq.addEventListener('change', suivre)
    return () => mq.removeEventListener('change', suivre)
  }, [])

  useIsoLayoutEffect(() => {
    const svg = dessin.current
    if (!svg) return
    const pieces = Array.from(svg.querySelectorAll<SVGElement>('[data-etape],[data-etiquette]'))
    if (mode === 'fixe') {
      appliquer(
        pieces.filter((p) => !p.dataset.etiquette),
        N,
        N,
      )
      for (const p of pieces) if (p.dataset.etiquette) p.style.opacity = p.dataset.etiquette === String(N) ? '1' : '0'
      return
    }

    let image = 0
    let visible = true
    let dernier = -1
    const calculer = () => {
      image = 0
      const p = piste.current
      const s = scene.current
      if (!p || !s) return
      const haut = parseFloat(getComputedStyle(s).top) || 0
      const r = p.getBoundingClientRect()
      const brut = (haut - r.top) / Math.max(1, r.height - s.offsetHeight)
      const t = brut < 0 ? Math.max(0, 0.6 + brut * 2.4) : 0.6 + borne(brut / 0.88) * (N - 0.6)
      const a = t < 1.25 ? 1 : Math.min(N, Math.floor(t - 0.25) + 1)
      appliquer(pieces, t, a)
      if (barre.current) barre.current.style.transform = `scaleX(${borne(brut / 0.88)})`
      if (a !== dernier) {
        dernier = a
        setActif(a)
      }
    }
    const demander = () => {
      if (visible && !image) image = requestAnimationFrame(calculer)
    }
    const io = new IntersectionObserver(
      ([e]) => {
        visible = e.isIntersecting
        if (visible) demander()
      },
      { rootMargin: '25% 0px' },
    )
    if (piste.current) io.observe(piste.current)
    calculer()
    window.addEventListener('scroll', demander, { passive: true })
    window.addEventListener('resize', demander)
    return () => {
      io.disconnect()
      window.removeEventListener('scroll', demander)
      window.removeEventListener('resize', demander)
      if (image) cancelAnimationFrame(image)
    }
  }, [mode])

  const entete = (
    <div className="container-site text-center">
      <p className="surtitre justify-center text-accent-clair">La recherche chez vous</p>
      <h2 className="mx-auto max-w-2xl font-display text-[1.7rem] font-bold leading-tight text-white [text-wrap:balance] md:text-[2.1rem]">
        Votre fuite trouvée en cinq étapes, sans casser
      </h2>
    </div>
  )

  if (mode === 'fixe') {
    return (
      <section className="section bg-nuit" aria-label="La recherche de fuite en cinq étapes">
        {entete}
        <div className="container-site mt-8 grid items-stretch gap-8 lg:grid-cols-[1fr_1.4fr]">
          <ol className="flex flex-col justify-center space-y-4 text-left">
            {ETAPES.map((e, i) => (
              <li key={e.titre} className="flex gap-4">
                <span className="font-mono text-sm font-bold" style={{ color: MIEL }}>
                  {pad2(i + 1)}
                </span>
                <p className="text-[15px] leading-relaxed text-white/85">
                  <strong className="text-white">{e.titre}.</strong> {e.texte}
                </p>
              </li>
            ))}
          </ol>
          <Dessin svgRef={dessin} className="mx-auto block h-auto w-full max-w-[640px]" />
        </div>
      </section>
    )
  }

  return (
    <section className="bg-nuit pt-12 md:pt-16 lg:pt-20" aria-label="La recherche de fuite en cinq étapes">
      {entete}
      <div ref={piste} data-piste className="relative mt-6 md:mt-10">
        <div
          ref={scene}
          className="sticky top-[4.25rem] flex h-[calc(100svh-4.25rem-3.5rem)] items-center lg:h-[calc(100svh-4.25rem)]"
        >
          <div className="container-site grid w-full items-stretch gap-4 lg:grid-cols-[0.72fr_1.6fr] lg:gap-12">
            <div className="order-2 flex flex-col justify-center text-center lg:order-1 lg:text-left">
              <p className="font-mono text-sm font-bold tracking-widest" aria-hidden="true">
                <span style={{ color: MIEL }}>{pad2(actif)}</span>
                <span className="text-white/45"> / {pad2(N)}</span>
              </p>
              <div className="mt-2 grid">
                {ETAPES.map((e, i) => (
                  <div
                    key={e.titre}
                    className="transition-opacity duration-300 [grid-area:1/1]"
                    style={{ opacity: actif === i + 1 ? 1 : 0 }}
                    aria-hidden={actif === i + 1 ? undefined : true}
                  >
                    <h3 className="font-display text-xl font-bold text-white lg:text-2xl">{e.titre}</h3>
                    <p className="mx-auto mt-1 max-w-sm text-[15px] leading-snug text-white/80 lg:mx-0 lg:mt-2 lg:text-base">{e.texte}</p>
                  </div>
                ))}
              </div>
              <div className="mx-auto mt-4 h-[3px] max-w-[220px] overflow-hidden bg-white/15 lg:mx-0" aria-hidden="true">
                <div ref={barre} className="h-full origin-left" style={{ background: MIEL, transform: 'scaleX(0)' }} />
              </div>
              <ol className="mt-8 hidden space-y-2 lg:block" aria-hidden="true">
                {ETAPES.map((e, i) => (
                  <li
                    key={e.titre}
                    className={`flex items-center gap-3 text-sm transition-colors duration-300 ${actif === i + 1 ? 'font-bold text-white' : 'text-white/45'}`}
                  >
                    <span className="font-mono" style={actif === i + 1 ? { color: MIEL } : undefined}>
                      {pad2(i + 1)}
                    </span>
                    {e.titre}
                  </li>
                ))}
              </ol>
            </div>
            <div className="order-1 flex flex-col justify-center lg:order-2">
              <Dessin svgRef={dessin} className="mx-auto block h-auto max-h-[min(54svh,520px)] w-full lg:max-h-[calc(100svh-9rem)]" />
            </div>
          </div>
        </div>
        <div aria-hidden="true" style={{ height: `${N * COURSE * 100}vh` }} />
      </div>
    </section>
  )
}
