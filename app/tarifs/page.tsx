import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { buildMetadata } from '@/lib/seo'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import Faq from '@/components/ui/Faq'
import CtaBanner from '@/components/ui/CtaBanner'
import Apparition from '@/components/ui/Apparition'

/**
 * Page Tarifs (règles #R46 et #R50, 18/11/2026) : reliée depuis le pied de page, la page des
 * prestations et un paragraphe seulement, jamais au menu ni au bloc 1. Chaque fourchette cite sa
 * source publique ; aucun prix maison inventé, le prix exact vient du devis.
 */
export const metadata: Metadata = buildMetadata({
  title: 'Prix d’une recherche de fuite à Angers',
  description:
    'Combien coûte une recherche de fuite d’eau à Angers ? Fourchettes sourcées par méthode, ce qui fait varier le prix, assurance et facture d’eau plafonnée.',
  path: '/tarifs',
  ogImage: '/services/detection-fuite-non-destructive.jpg',
})

/** Échelle commune des barres, en euros. */
const ECHELLE = 600

type Ligne = {
  methode: string
  detail: string
  min: number
  max: number
  libelle: string
  source: { nom: string; url: string }
  lien?: string
}

const LIGNES: Ligne[] = [
  {
    methode: 'Recherche de fuite, cas courant',
    detail: 'Contrôle du compteur, test de pression, écoute et inspection des points sensibles.',
    min: 200,
    max: 400,
    libelle: '200 à 400 €',
    source: { nom: 'travaux.com', url: 'https://www.travaux.com/plomberie/guide-des-prix/prix-dune-recherche-de-fuite' },
    lien: '/services/detection-fuite-non-destructive',
  },
  {
    methode: 'Caméra thermique',
    detail: 'Repère une conduite d’eau chaude ou une zone humide dans un mur, un sol ou un plafond.',
    min: 100,
    max: 500,
    libelle: '100 à 500 €, autour de 250 €',
    source: { nom: 'habitatpresto.com', url: 'https://www.habitatpresto.com/mag/plomberie/fuite-eau-prix-detection' },
    lien: '/services/recherche-fuite-encastree',
  },
  {
    methode: 'Gaz traceur',
    detail: 'Un gaz neutre injecté dans le réseau ressort par la fissure, même sous une dalle ou un jardin.',
    min: 400,
    max: 500,
    libelle: '400 à 500 €',
    source: { nom: 'abctravaux.org', url: 'https://abctravaux.org/recherche-dune-fuite-deau-combien-ca-coute/' },
    lien: '/services/recherche-fuite-canalisation-enterree',
  },
  {
    methode: 'Inspection par caméra dans la canalisation',
    detail: 'Une caméra descend dans l’évacuation pour voir une cassure, un joint ouvert ou une racine.',
    min: 280,
    max: 320,
    libelle: 'environ 300 €',
    source: { nom: 'abctravaux.org', url: 'https://abctravaux.org/recherche-dune-fuite-deau-combien-ca-coute/' },
  },
  {
    methode: 'Recherche non destructive, toutes méthodes',
    detail: 'Fourchette large observée en France, de la fuite visible au réseau difficile d’accès.',
    min: 150,
    max: 540,
    libelle: '150 à 540 €',
    source: { nom: 'mesdepanneurs.fr', url: 'https://www.mesdepanneurs.fr/blog/prix-recherche-fuite-eau' },
  },
]

/** Ce qui fait varier le prix : une phrase par carte, une icône dessinée qui s'anime. */
const FACTEURS = [
  {
    titre: 'La méthode',
    texte: 'Une écoute simple coûte moins qu’un gaz traceur sur tout un réseau enterré.',
    icone: (
      <>
        <circle className="trace" pathLength={1} cx="21" cy="21" r="11" />
        <path className="trace" pathLength={1} d="m29.5 29.5 9 9" style={{ ['--retard' as string]: '300ms' }} />
        <path className="surgit balaie" d="M21 15c2.6 3.2 4 5.2 4 7.2a4 4 0 0 1-8 0c0-2 1.4-4 4-7.2Z" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    titre: 'L’accès',
    texte: 'Conduite sous dalle, plancher chauffant ou faux plafond : plus de temps pour situer la fuite.',
    icone: (
      <>
        <path className="trace" pathLength={1} d="M6 30h36M6 38h36" />
        <path className="trace" pathLength={1} d="M10 34h28" strokeDasharray="0.04 0.03" style={{ ['--retard' as string]: '250ms' }} />
        <path className="trace" pathLength={1} d="M24 8v14m-5-5 5 5 5-5" style={{ ['--retard' as string]: '450ms' }} />
      </>
    ),
  },
  {
    titre: 'La longueur du réseau',
    texte: 'Une maison avec jardin et piscine compte plus de mètres de tuyau qu’un appartement.',
    icone: (
      <>
        <path className="trace" pathLength={1} d="M6 12h12v12h12v12h12" />
        <circle className="surgit" cx="18" cy="24" r="2.6" fill="currentColor" stroke="none" style={{ ['--retard' as string]: '700ms' }} />
        <circle className="surgit" cx="30" cy="36" r="2.6" fill="currentColor" stroke="none" style={{ ['--retard' as string]: '850ms' }} />
      </>
    ),
  },
  {
    titre: 'Le rapport',
    texte: 'Un rapport écrit pour l’assurance demande des photos, des mesures et le point exact.',
    icone: (
      <>
        <path className="trace" pathLength={1} d="M13 6h16l7 7v29H13Z" />
        <path className="trace" pathLength={1} d="M18 20h13M18 26h13M18 32h8" style={{ ['--retard' as string]: '350ms' }} />
        <path className="trace souffle" pathLength={1} d="m27 34 3 3 6-7" style={{ ['--retard' as string]: '700ms' }} />
      </>
    ),
  },
]

const FAQ = [
  {
    q: 'Le devis est-il gratuit ?',
    a: 'Oui. Vous décrivez la situation dans le formulaire, nous revenons vers vous avec la méthode prévue et son prix avant tout passage.',
  },
  {
    q: 'Mon assurance paie-t-elle la recherche de fuite ?',
    a: 'Souvent, quand la fuite a causé un dégât des eaux. La convention IRSI, en vigueur depuis le 1er juin 2018, organise cette prise en charge entre assureurs. Votre contrat habitation le précise.',
  },
  {
    q: 'Ma facture d’eau peut-elle être plafonnée ?',
    a: 'Pour une fuite après compteur sur une canalisation de votre logement, la loi du 17 mai 2011 plafonne la facture au double de votre consommation moyenne, si vous faites réparer dans le mois et transmettez l’attestation du plombier.',
  },
  {
    q: 'Pourquoi ne pas afficher un prix unique ?',
    a: 'Parce qu’une fuite de lave-vaisselle et une conduite enterrée sous un jardin ne demandent ni le même temps ni le même matériel. Le devis part de votre cas.',
  },
]

export default function Tarifs() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Accueil', path: '/' },
          { name: 'Tarifs', path: '/tarifs' },
        ]}
      />

      <section className="container-site pb-10 pt-6 md:pb-14">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="text-center lg:col-span-7 lg:text-left">
            <p className="surtitre justify-center lg:justify-start">Tarifs</p>
            <h1 className="font-display text-[1.75rem] font-bold leading-tight text-nuit sm:text-4xl md:text-[2.6rem]">
              Prix d’une recherche de fuite à Angers
            </h1>
            <p className="mt-5 text-[1.05rem] leading-relaxed text-slate-700">
              Une recherche de fuite d’eau coûte le plus souvent entre 200 et 400 € en France. Voici les fourchettes publiées par
              méthode, avec leur source, pour comparer avant de demander votre devis gratuit.
            </p>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-panel shadow-panel lg:col-span-5">
            <Image
              src="/services/detection-fuite-non-destructive.jpg"
              alt="Technicien qui localise une fuite d’eau dans un mur avec une caméra thermique"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section bg-neige" aria-labelledby="fourchettes-titre">
        <div className="container-site">
          <div className="mx-auto max-w-2xl text-center">
            <h2 id="fourchettes-titre" className="font-display text-2xl font-bold text-nuit md:text-3xl">
              Les fourchettes par méthode
            </h2>
            <p className="mt-3 leading-relaxed text-slate-600">Prix publics observés en France, toutes taxes comprises, déplacement souvent inclus.</p>
          </div>

          <ul className="mx-auto mt-9 max-w-4xl space-y-4" role="list">
            {LIGNES.map((l, i) => (
              <Apparition
                as="li"
                key={l.methode}
                className="glisse rounded-panel border border-slate-200 bg-white p-5 shadow-panel md:p-6"
                style={{ ['--retard' as string]: `${i * 80}ms` }}
              >
                <div className="flex flex-col items-center gap-1 text-center md:flex-row md:items-baseline md:justify-between md:gap-6 md:text-left">
                  <h3 className="font-display text-lg font-bold text-nuit">
                    {l.lien ? (
                      <Link href={l.lien} className="hover:text-primary">
                        {l.methode}
                      </Link>
                    ) : (
                      l.methode
                    )}
                  </h3>
                  <p className="font-display text-lg font-bold text-primary md:whitespace-nowrap">{l.libelle}</p>
                </div>
                <p className="mt-2 text-center text-[15px] leading-relaxed text-slate-600 md:text-left">{l.detail}</p>
                <div className="relative mt-4 h-2.5 rounded-sm bg-slate-100" aria-hidden="true">
                  <span
                    className="etire absolute inset-y-0 rounded-sm bg-gradient-to-r from-primary to-accent"
                    style={{
                      left: `${(l.min / ECHELLE) * 100}%`,
                      width: `${((l.max - l.min) / ECHELLE) * 100}%`,
                      minWidth: '10px',
                      ['--retard' as string]: `${i * 80}ms`,
                    }}
                  />
                </div>
                <div className="mt-1.5 flex justify-between text-xs text-slate-400" aria-hidden="true">
                  <span>0 €</span>
                  <span>300 €</span>
                  <span>600 €</span>
                </div>
                <p className="mt-2 text-center text-xs text-slate-500 md:text-left">
                  Source :{' '}
                  <a href={l.source.url} target="_blank" rel="noopener nofollow" className="underline underline-offset-2 hover:text-primary">
                    {l.source.nom}
                  </a>
                </p>
              </Apparition>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-white" aria-labelledby="facteurs-titre">
        <div className="container-site">
          <div className="mx-auto max-w-2xl text-center">
            <h2 id="facteurs-titre" className="font-display text-2xl font-bold text-nuit md:text-3xl">
              Ce qui fait varier le prix
            </h2>
            <p className="mt-3 leading-relaxed text-slate-600">
              Quatre points décident du temps passé chez vous. Le détail de chaque méthode est sur{' '}
              <Link href="/services" className="font-semibold text-primary underline underline-offset-2">
                nos prestations
              </Link>
              .
            </p>
          </div>
          <ul className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" role="list">
            {FACTEURS.map((f, i) => (
              <Apparition
                as="li"
                key={f.titre}
                className="glisse flex h-full flex-col items-center rounded-panel border border-slate-200 bg-white p-6 text-center shadow-panel"
                style={{ ['--retard' as string]: `${i * 90}ms` }}
              >
                <svg
                  viewBox="0 0 48 48"
                  className="h-14 w-14 text-primary"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {f.icone}
                </svg>
                <h3 className="mt-4 font-display text-lg font-bold text-nuit">{f.titre}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{f.texte}</p>
              </Apparition>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-nuit text-white" aria-labelledby="aides-titre">
        <div className="container-site grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="relative aspect-[3/2] w-full overflow-hidden rounded-panel lg:col-span-5">
            <Image
              src="/services/urgence-fuite-eau-robinet.jpg"
              alt="Fermeture du robinet d’arrêt général sous un évier avec une clé"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="text-center lg:col-span-7 lg:text-left">
            <h2 id="aides-titre" className="font-display text-2xl font-bold text-white md:text-3xl">
              Assurance et facture d’eau
            </h2>
            <p className="mt-4 leading-relaxed text-white/80">
              Après un dégât des eaux, la recherche de fuite est souvent prise en charge par l’assurance habitation, selon la
              convention IRSI du 1er juin 2018. Notre rapport indique le point exact et la cause.
            </p>
            <p className="mt-3 leading-relaxed text-white/80">
              Fuite après compteur dans votre logement : la loi du 17 mai 2011 plafonne la facture d’eau au double de la
              consommation moyenne, réparation faite dans le mois.
            </p>
          </div>
        </div>
      </section>

      <Faq items={FAQ} title="Questions sur le prix" />
      <CtaBanner
        fond="bg-white"
        title="Le prix exact de votre recherche de fuite"
        subtitle="Trois questions, puis nous revenons vers vous avec la méthode prévue et son prix."
      />
    </>
  )
}
