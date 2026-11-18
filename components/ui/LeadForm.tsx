'use client'

import { useEffect, useRef, useState } from 'react'
import { siteConfig } from '@/config/site.config'
import { LIBELLE_DEVIS } from '@/lib/cta'

/**
 *  LE FORMULAIRE DE DEVIS, formulaire court (Rémy 13/11 et 18/11/2026, #R84).
 *
 *  INTOUCHABLE : les noms de champs et l'ordre des clés du corps envoyé
 *  (`probleme, ville, urgence, nom, telephone, email, message`), les `id` des
 *  projets (valeurs historiques de `probleme`, lues par la route et Rank OS),
 *  le piège `company` toujours vide, l'URL et le corps du POST
 *  (`{ ...champs, company: '' }`). Les anciennes tuiles retirées (Fuite urgente,
 *  Dégât des eaux / assèchement, Autre) restent acceptées : la route ne filtre
 *  aucune valeur.
 *
 *  Trois étapes :
 *   1. « Quel est votre projet ? » : 4 vraies prestations en 2 x 2, un clic avance.
 *   2. « Qu'est-ce qui vous alerte ? » : 4 tuiles, un clic avance.
 *      La réponse part en tête de `message` (« Signe : … »).
 *   3. Nom | Prénom, Téléphone | Code postal (qui trouve la commune), une case
 *      « Précisions (facultatif) ». `urgence` et `email` partent vides,
 *      `nom` porte « Prénom Nom », `ville` la commune trouvée ou le code tapé.
 *
 *  UN seul dessin sur tout le site : carte nuit. `ecran1` = carte posée sur la
 *  photo du bloc 1, translucide puis pleine au premier choix. Aucun fondu ni
 *  glissement au défilement (Rémy 17/11/2026).
 */

type Etape = 1 | 2 | 3

interface Champs {
  probleme: string
  ville: string
  urgence: string
  nom: string
  telephone: string
  email: string
  message: string
}

/** Ordre des clés = ordre du corps JSON envoyé. Ne pas le changer. */
const VIDE: Champs = {
  probleme: '',
  ville: '',
  urgence: '',
  nom: '',
  telephone: '',
  email: '',
  message: '',
}

const PROJETS = [
  {
    id: 'Recherche de fuite',
    label: 'Fuite cachée',
    picto: (
      <>
        <path d="M10 3S4.5 9.2 4.5 13a5.5 5.5 0 0 0 7.6 5.1" />
        <circle cx="16" cy="13.5" r="3.5" />
        <path d="m18.6 16.1 2.9 2.9" />
      </>
    ),
  },
  {
    id: 'Fuite encastrée (mur/sol)',
    label: 'Mur ou sol',
    picto: (
      <>
        <path d="M3 4h18v16H3z" />
        <path d="M3 9.3h18M3 14.6h9M8 4v5.3M14 4v5.3M6 9.3v5.3M12 9.3v10.7" />
        <path d="M17 13.5s-2.2 2.6-2.2 4a2.2 2.2 0 0 0 4.4 0c0-1.4-2.2-4-2.2-4Z" />
      </>
    ),
  },
  {
    id: 'Canalisation enterrée',
    label: 'Canalisation',
    picto: (
      <>
        <path d="M2.5 8h19" />
        <path d="M5 5.5 6.5 8M10 5l1 3M16 5.5 15 8" />
        <path d="M2.5 13.5h7.5a2 2 0 0 1 2 2v0a2 2 0 0 0 2 2h7.5" />
        <path d="M2.5 16.5h6" />
        <path d="M17 11s-1.4 1.6-1.4 2.5a1.4 1.4 0 0 0 2.8 0c0-.9-1.4-2.5-1.4-2.5Z" />
      </>
    ),
  },
  {
    id: 'Fuite de piscine',
    label: 'Piscine',
    picto: (
      <>
        <path d="M8 15V5a2 2 0 0 1 4 0M16 15V5a2 2 0 0 0-4 0" />
        <path d="M8 8.5h8M8 12h8" />
        <path d="M2.5 17c1.6 0 1.6 1.2 3.2 1.2S7.3 17 8.9 17s1.6 1.2 3.1 1.2S13.6 17 15.2 17s1.6 1.2 3.1 1.2 1.6-1.2 3.2-1.2" />
      </>
    ),
  },
] as const

type Projet = (typeof PROJETS)[number]

/** Le signe qui a alerté le client : la première donnée qui oriente la méthode. Envoyé dans `message`. */
const SIGNES = [
  {
    valeur: 'Facture d’eau élevée',
    libelle: 'Facture élevée',
    picto: (
      <>
        <path d="M6 3h9l3 3v15H6z" />
        <path d="M15 3v3h3" />
        <path d="M13.8 11.2a3 3 0 1 0 0 4.6M9 12.6h4M9 14.4h4" />
      </>
    ),
  },
  {
    valeur: 'Tache ou humidité',
    libelle: 'Tache, humidité',
    picto: (
      <>
        <path d="M3 3h18v18H3z" />
        <path d="M9 8.5c1.8-1.4 4.6-.8 5.4 1 1.2.3 2 1.6 1.4 2.9.6 1.5-.6 3-2.2 2.8-1 1.3-3.2 1.3-4 0-1.6.1-2.6-1.6-1.8-3-.6-1.4.1-3 1.2-3.7Z" />
      </>
    ),
  },
  {
    valeur: 'Compteur qui tourne',
    libelle: 'Compteur qui tourne',
    picto: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 12 15.8 8.2" />
        <path d="M12 5.5v1.5M5.5 12H7M17 12h1.5M7.4 7.4l1 1" />
        <path d="M9.5 16.5h5" />
      </>
    ),
  },
  {
    valeur: 'Eau qui coule',
    libelle: 'Eau qui coule',
    picto: (
      <>
        <path d="M3 6h9a3 3 0 0 1 3 3v2" />
        <path d="M3 9.5h7.5a1.5 1.5 0 0 1 1.5 1.5v0" />
        <path d="M6 4v2M10.5 11h7" />
        <path d="M13.5 14.5s-1.5 1.7-1.5 2.7a1.5 1.5 0 0 0 3 0c0-1-1.5-2.7-1.5-2.7ZM18 17s-1.2 1.3-1.2 2.1a1.2 1.2 0 0 0 2.4 0c0-.8-1.2-2.1-1.2-2.1Z" />
      </>
    ),
  },
] as const

const TITRES: Record<Etape, { titre: string; aide: string }> = {
  1: { titre: 'Quel est votre projet ?', aide: 'Devis gratuit en 30 secondes.' },
  2: { titre: 'Qu’est-ce qui vous alerte ?', aide: 'Le premier signe suffit.' },
  3: { titre: 'Où vous rappeler ?', aide: 'Nous vous rappelons pour votre devis.' },
}

type Manque = 'nom' | 'telephone' | 'lieu'
const NOM_DU_MANQUE: Record<Manque, string> = {
  nom: 'votre nom',
  telephone: 'un téléphone valide',
  lieu: 'votre code postal',
}

// Communes par code postal, rangées dans le site (public/cp/<2 chiffres>.json,
// tirées de geo.api.gouv.fr) : réponse immédiate, aucun service extérieur.
const COMMUNES_DU_DEPARTEMENT = new Map<string, Promise<Record<string, string[]>>>()
function communesDuDepartement(deux: string): Promise<Record<string, string[]>> {
  let lu = COMMUNES_DU_DEPARTEMENT.get(deux)
  if (!lu) {
    lu = fetch(`/cp/${deux}.json`)
      .then((r) => (r.ok ? (r.json() as Promise<Record<string, string[]>>) : {}))
      .catch(() => ({}))
    COMMUNES_DU_DEPARTEMENT.set(deux, lu)
  }
  return lu
}

// La saisie survit au remontage d'une carte (même page, même visite).
const MEMOIRE: { etape?: Etape; projet?: string; signe?: string } = {}

export default function LeadForm({
  idPrefix = '',
  ecran1 = false,
}: {
  idPrefix?: string
  ecran1?: boolean
}) {
  const [etape, setEtape] = useState<Etape>(1)
  const [projet, setProjet] = useState<Projet | undefined>(undefined)
  const [signe, setSigne] = useState('')
  const [nom, setNom] = useState('')
  const [prenom, setPrenom] = useState('')
  const [telephone, setTelephone] = useState('')
  const [lieu, setLieu] = useState('')
  const [precision, setPrecision] = useState('')
  const [commune, setCommune] = useState('')
  const [propositions, setPropositions] = useState<string[]>([])
  const [manques, setManques] = useState<Manque[]>([])
  const [statut, setStatut] = useState<'repos' | 'envoi' | 'erreur'>('repos')

  const racineRef = useRef<HTMLDivElement>(null)
  const titreRef = useRef<HTMLHeadingElement>(null)
  const aBouge = useRef(false)

  useEffect(() => {
    if (!aBouge.current) return
    titreRef.current?.focus({ preventScroll: true })
    // Étape atteinte, comptée par `SuiviVisite` (Rémy 13/11/2026 : savoir à quelle étape on abandonne).
    if (etape > 1) window.dispatchEvent(new CustomEvent('rr-etape', { detail: etape }))
  }, [etape])

  // La carte revient entière à l'écran si un changement de taille en a fait sortir une partie.
  useEffect(() => {
    if (!aBouge.current) return
    const carte = racineRef.current
    if (!carte) return
    const r = carte.getBoundingClientRect()
    const barreDuBas = window.innerWidth < 1024 ? 72 : 12
    if (r.top < 72 || r.bottom > window.innerHeight - barreDuBas) {
      carte.scrollIntoView({ behavior: 'instant' as ScrollBehavior, block: 'nearest' })
    }
  }, [etape, manques.length, propositions.length, commune])

  useEffect(() => {
    if (lieu.length < 2) return
    let annule = false
    communesDuDepartement(lieu.slice(0, 2)).then((codes) => {
      if (annule || lieu.length !== 5 || commune) return
      const noms = codes[lieu] ?? []
      if (noms.length === 1) setCommune(`${lieu} ${noms[0]}`)
      else setPropositions(noms)
    })
    return () => {
      annule = true
    }
  }, [lieu, commune])

  function allerA(n: Etape) {
    aBouge.current = true
    setEtape(n)
  }

  function choisirProjet(choisi: Projet) {
    setProjet(choisi)
    allerA(2)
  }

  function choisirSigne(valeur: string) {
    setSigne(valeur)
    allerA(3)
  }

  function saisirLieu(valeur: string) {
    setLieu(valeur.replace(/\D/g, '').slice(0, 5))
    setCommune('')
    setPropositions([])
    retirerManque('lieu')
  }

  function retenirCommune(nomCommune: string) {
    setCommune(`${lieu} ${nomCommune}`)
    setPropositions([])
  }

  function retirerManque(cle: Manque) {
    setManques((prev) => (prev.includes(cle) ? prev.filter((m) => m !== cle) : prev))
  }

  const id = (cle: string) => `${idPrefix}${cle}`

  async function envoyer() {
    const saisie = lieu.trim()
    const oublis: Manque[] = []
    if (!nom.trim()) oublis.push('nom')
    if (telephone.replace(/\D/g, '').length < 10) oublis.push('telephone')
    if (saisie.length !== 5) oublis.push('lieu')
    setManques(oublis)
    if (oublis.length > 0) {
      document.getElementById(id(oublis[0]))?.focus()
      return
    }

    const champs: Champs = {
      ...VIDE,
      probleme: projet?.id ?? '',
      ville: commune || saisie,
      nom: [prenom.trim(), nom.trim()].filter(Boolean).join(' '),
      telephone: telephone.trim(),
      message: [signe ? `Signe : ${signe}` : '', precision.trim()].filter(Boolean).join('. '),
    }

    setStatut('envoi')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...champs, company: '' }),
      })
      if (!res.ok) throw new Error()
      window.location.href = '/merci'
    } catch {
      setStatut('erreur')
    }
  }

  // ── Habillage : un seul dessin ─────────────────────────────────────────────
  const fond = ecran1
    ? `transition-colors duration-300 ${projet ? 'border-white/10 bg-nuit' : 'border-white/25 bg-nuit/55 backdrop-blur-[3px]'}`
    : 'border-white/10 bg-nuit'

  const champClasse = (cle?: Manque) =>
    `w-full rounded-[3px] border bg-white/[0.08] px-3 py-2.5 text-[16px] text-white outline-none transition focus:border-accent-clair focus:ring-2 focus:ring-accent-clair/25 ${
      cle && manques.includes(cle) ? 'border-red-400 ring-1 ring-red-400' : 'border-white/25'
    }`
  const labelClasse = 'mb-1.5 block text-[13px] font-semibold text-white/90'
  const tuile = (choisi: boolean) =>
    `flex min-h-[68px] flex-col items-center justify-center gap-1.5 rounded-[3px] border px-1.5 py-2.5 transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-clair sm:min-h-[86px] sm:gap-2.5 sm:px-2 sm:py-4 lg:items-start lg:px-4 ${
      choisi
        ? 'border-accent-clair bg-accent text-white'
        : 'border-accent-clair/35 bg-[#12304F] text-white [@media(hover:hover)]:hover:border-accent-clair [@media(hover:hover)]:hover:bg-[#183D63]'
    }`
  const libelleClasse = 'whitespace-nowrap font-semibold leading-tight text-[clamp(12px,3.7vw,14.5px)]'
  const picto = (dessin: React.ReactNode) => (
    <svg
      className="h-[22px] w-[22px] shrink-0 text-accent-clair sm:h-6 sm:w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {dessin}
    </svg>
  )

  return (
    <div
      ref={racineRef}
      data-clic-formulaire
      data-lead-form=""
      className={`scroll-mb-20 scroll-mt-24 rounded-[4px] border p-5 text-center shadow-[0_30px_70px_-30px_rgb(0_0_0/0.8)] sm:p-7 lg:text-left ${fond}`}
      role="region"
      aria-label="Formulaire de devis gratuit"
    >
      {/* Piège à robots, toujours vide */}
      <div className="hidden" aria-hidden="true">
        <input type="text" name="company" tabIndex={-1} autoComplete="off" readOnly />
      </div>

      {/* Progression, avec « Retour » dès l'étape 2 */}
      <div className="flex items-center gap-3">
        {etape > 1 && (
          <button
            type="button"
            onClick={() => allerA((etape - 1) as Etape)}
            className="-my-2 -ml-1 inline-flex shrink-0 items-center gap-1 rounded-[3px] py-2 pl-1 pr-1.5 text-[13px] font-semibold text-white/80 transition-colors hover:text-white"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" aria-hidden="true">
              <path d="m15 18-6-6 6-6" />
            </svg>
            Retour
          </button>
        )}
        <div className="flex flex-1 gap-1.5" aria-hidden="true">
          {([1, 2, 3] as Etape[]).map((n) => (
            <span
              key={n}
              className={`h-1 flex-1 rounded-[2px] transition-colors duration-300 ${
                n < etape ? 'bg-accent-clair/50' : n === etape ? 'bg-accent-clair' : 'bg-white/15'
              }`}
            />
          ))}
        </div>
        <span className="shrink-0 text-[11.5px] font-bold uppercase tracking-[0.14em] text-white/65">
          Étape {etape}/3
        </span>
      </div>

      <h3
        ref={titreRef}
        tabIndex={-1}
        className="mt-4 font-display text-[1.35rem] font-bold leading-tight text-white outline-none sm:mt-5 sm:text-[1.6rem]"
      >
        {TITRES[etape].titre}
      </h3>
      <p className="mt-1 text-[13.5px] text-white/75">{TITRES[etape].aide}</p>

      {etape === 1 && (
        <div className="mt-4 grid grid-cols-2 gap-2 sm:mt-5 sm:gap-2.5">
          {PROJETS.map((p) => (
            <button
              data-clic-formulaire
              key={p.id}
              type="button"
              onClick={() => choisirProjet(p)}
              aria-pressed={projet?.id === p.id}
              className={tuile(projet?.id === p.id)}
            >
              {picto(p.picto)}
              <span className={libelleClasse}>{p.label}</span>
            </button>
          ))}
        </div>
      )}

      {etape === 2 && (
        <div className="mt-4 grid grid-cols-2 gap-2 sm:mt-5 sm:gap-2.5">
          {SIGNES.map((h) => (
            <button
              data-clic-formulaire
              key={h.valeur}
              type="button"
              onClick={() => choisirSigne(h.valeur)}
              aria-pressed={signe === h.valeur}
              className={tuile(signe === h.valeur)}
            >
              {picto(h.picto)}
              <span className={libelleClasse}>{h.libelle}</span>
            </button>
          ))}
        </div>
      )}

      {etape === 3 && (
        <div className="mt-4 sm:mt-5">
          <div className="grid grid-cols-2 gap-x-2.5 gap-y-3 text-left">
            <div>
              <label htmlFor={id('nom')} className={labelClasse}>
                Nom
              </label>
              <input
                id={id('nom')}
                name="nom"
                type="text"
                autoComplete="family-name"
                autoCapitalize="words"
                aria-invalid={manques.includes('nom')}
                value={nom}
                onChange={(e) => {
                  setNom(e.target.value)
                  retirerManque('nom')
                }}
                className={champClasse('nom')}
              />
            </div>
            <div>
              <label htmlFor={id('prenom')} className={labelClasse}>
                Prénom
              </label>
              <input
                id={id('prenom')}
                name="prenom"
                type="text"
                autoComplete="given-name"
                autoCapitalize="words"
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
                className={champClasse()}
              />
            </div>
            <div>
              <label htmlFor={id('telephone')} className={labelClasse}>
                Téléphone
              </label>
              <input
                id={id('telephone')}
                name="telephone"
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                aria-invalid={manques.includes('telephone')}
                value={telephone}
                onChange={(e) => {
                  setTelephone(e.target.value)
                  retirerManque('telephone')
                }}
                className={champClasse('telephone')}
              />
            </div>
            <div>
              <label htmlFor={id('lieu')} className={labelClasse}>
                Code postal
              </label>
              <input
                id={id('lieu')}
                name="ville"
                type="text"
                autoComplete="postal-code"
                inputMode="numeric"
                maxLength={5}
                aria-invalid={manques.includes('lieu')}
                value={lieu}
                onChange={(e) => saisirLieu(e.target.value)}
                className={champClasse('lieu')}
              />
            </div>
          </div>

          {commune && (
            <p className="mt-2 flex items-center justify-center gap-1.5 text-[13px] font-semibold text-accent-clair lg:justify-end">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m5 12.5 4.5 4.5L19 7.5" />
              </svg>
              {commune}
            </p>
          )}
          {!commune && propositions.length > 0 && (
            <div className="mt-2 flex w-0 min-w-full gap-1.5 overflow-x-auto pb-1" role="group" aria-label="Votre commune">
              {propositions.map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => retenirCommune(p)}
                  className="shrink-0 whitespace-nowrap rounded-[3px] border border-white/20 bg-white/[0.06] px-2.5 py-1.5 text-[13px] font-semibold text-white hover:border-accent-clair"
                >
                  {p}
                </button>
              ))}
            </div>
          )}

          <div className="mt-3 text-left">
            <label htmlFor={id('precision')} className={labelClasse}>
              Précisions <span className="font-normal text-white/60">(facultatif)</span>
            </label>
            <input
              id={id('precision')}
              name="message"
              type="text"
              maxLength={300}
              value={precision}
              onChange={(e) => setPrecision(e.target.value)}
              className={champClasse()}
            />
          </div>

          {manques.length > 0 && (
            <p role="alert" className="mt-3 text-[13px] font-semibold text-red-300">
              Complétez les cases en rouge.
              <span className="sr-only"> Il nous manque {manques.map((m) => NOM_DU_MANQUE[m]).join(' et ')}.</span>
            </p>
          )}
          {statut === 'erreur' && (
            <p role="alert" className="mt-3 rounded-[3px] bg-red-500/15 px-4 py-3 text-[14px] font-medium text-red-200">
              L’envoi a échoué.{' '}
              {siteConfig.phone
                ? `Appelez-nous directement au ${siteConfig.phoneDisplay}.`
                : `Écrivez-nous directement à ${siteConfig.email}.`}
            </p>
          )}

          <button
            type="button"
            onClick={envoyer}
            disabled={statut === 'envoi'}
            className="btn-accent mt-4 w-full whitespace-nowrap !rounded-[3px]"
            data-cta="devis-envoi"
          >
            {statut === 'envoi' ? 'Envoi en cours…' : LIBELLE_DEVIS}
          </button>
          <p className="mt-2.5 text-[12px] text-white/60">
            Uniquement pour vous rappeler.{' '}
            <a href="/politique-confidentialite" className="text-white/70 underline underline-offset-2 hover:text-white">
              Confidentialité
            </a>
          </p>
        </div>
      )}
    </div>
  )
}
