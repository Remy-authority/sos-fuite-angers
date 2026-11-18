import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getZones } from '@/lib/content'
import { buildMetadata } from '@/lib/seo'
import { siteConfig } from '@/config/site.config'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import CarteSecteur from '@/components/sections/CarteSecteur'
import Faq from '@/components/ui/Faq'
import CtaBanner from '@/components/ui/CtaBanner'
import { LIBELLE_DEVIS } from '@/lib/cta'

export const metadata: Metadata = buildMetadata({
  title: `Zones d'intervention, recherche de fuite près d'${siteConfig.city}`,
  description: `Recherche de fuite d'eau à ${siteConfig.city} et dans les communes à 40 km autour, en Maine-et-Loire : la carte du secteur et la page de chaque commune.`,
  path: '/zones',
})

/**
 * Hub des zones (refonte du 18/11/2026) : en-tête court, carte du secteur de 40 km tout en vert
 * (#R60), cartes des communes avec photo de LA PRESTATION, FAQ sans promesse de délai ni de
 * gratuité, formulaire de fin.
 */
export default function ZonesHub() {
  const zones = getZones()
  const names = zones.map((z) => z.name)

  const hubFaq = [
    {
      q: `Quelles communes couvrez-vous autour d'${siteConfig.city} ?`,
      a: `Nous intervenons à ${siteConfig.city} et dans toutes les communes à 40 km autour. Huit d'entre elles ont leur page : ${names.join(', ')}.`,
    },
    {
      q: 'Pas de page pour ma ville : la recherche de fuite y est-elle possible ?',
      a: `Tout le cercle tracé sur la carte est couvert, page dédiée ou non. Votre code postal, demandé à la dernière étape du formulaire, nous dit aussitôt si votre adresse tombe dans le cercle.`,
    },
    {
      q: 'Quand pouvez-vous passer chez moi ?',
      a: 'La date dépend de notre planning et de la commune. Nous vous la proposons quand nous revenons vers vous après votre demande.',
    },
    {
      q: 'Le prix change-t-il d’une commune à l’autre ?',
      a: 'Non : c’est la technique de détection et l’accès au tuyau qui comptent, quelle que soit la ville. Les ordres de prix par méthode figurent en page Tarifs, et l’estimation ne vous coûte rien.',
    },
  ]

  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Accueil', path: '/' },
          { name: 'Zones', path: '/zones' },
        ]}
      />

      <section className="container-site pb-4 pt-6 text-center">
        <p className="surtitre justify-center">Secteur de 40 km</p>
        <h1 className="mx-auto max-w-3xl font-display text-[1.75rem] font-bold leading-tight text-nuit sm:text-4xl md:text-[2.5rem]">
          Recherche de fuite à {siteConfig.city} et dans les communes autour
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-[1.05rem] leading-relaxed text-slate-700">
          Nous localisons les fuites d’eau sans casse à {siteConfig.city} et dans tout le Maine-et-Loire à 40 km autour. Chaque commune
          du cercle est couverte, avec ou sans page dédiée.
        </p>
        <a href="#devis" className="btn-accent mt-7">
          {LIBELLE_DEVIS}
        </a>
      </section>

      <CarteSecteur />

      <section className="section bg-neige" aria-labelledby="communes-titre">
        <div className="container-site">
          <h2 id="communes-titre" className="text-center font-display text-2xl font-bold text-nuit md:text-[1.9rem]">
            Les communes qui ont leur page
          </h2>
          <ul className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4" role="list">
            {zones.map((z) => (
              <li key={z.slug}>
                <Link
                  href={`/zones/${z.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-panel border border-slate-200 bg-white shadow-sm transition hover:border-primary/50"
                >
                  {z.image && (
                    <span className="relative block aspect-[16/10] w-full overflow-hidden">
                      <Image
                        src={z.image}
                        alt={z.imageAlt || `Recherche de fuite à ${z.name}`}
                        fill
                        sizes="(min-width: 1024px) 25vw, 50vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </span>
                  )}
                  <span className="flex flex-1 flex-col items-center p-3 text-center sm:items-start sm:p-4 sm:text-left">
                    <span className="font-display text-[15px] font-bold leading-snug text-nuit group-hover:text-primary sm:text-lg">{z.name}</span>
                    <span className="mt-1 text-xs text-slate-500 sm:text-sm">
                      {z.postalCode}
                      {z.distanceKm ? ` · ${z.distanceKm.toLocaleString('fr-FR', { maximumFractionDigits: 1 })} km d’Angers` : ''}
                    </span>
                    <span className="mt-3 hidden text-sm font-semibold text-primary sm:block">Recherche de fuite à {z.name} →</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Faq items={hubFaq} title="Questions sur notre secteur" />
      <CtaBanner
        fond="bg-white"
        title="Votre commune est dans le cercle ? Demandez votre devis"
        subtitle="Trois questions, puis nous revenons vers vous avec la méthode prévue et son prix."
      />
    </>
  )
}
