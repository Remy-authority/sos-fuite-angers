import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getZone, getZones, getServices } from '@/lib/content'
import { buildMetadata, zoneJsonLd, jsonLdScript } from '@/lib/seo'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import Faq from '@/components/ui/Faq'
import CtaBanner from '@/components/ui/CtaBanner'
import ServiceBlock from '@/components/ui/ServiceBlock'
import Apparition from '@/components/ui/Apparition'
import { BlockIcon } from '@/components/ui/ServiceIcon'
import CarteSecteur from '@/components/sections/CarteSecteur'
import { LIBELLE_DEVIS } from '@/lib/cta'

/**
 * Page d'une commune (refonte du 18/11/2026) : en-tête texte + photo de LA PRESTATION (#R60,
 * jamais une maison ni un paysage), un fait sourcé (geo.api.gouv.fr), blocs alternés photo /
 * texte, carte compacte du secteur de 40 km, prestations en cartes, autres communes, FAQ et
 * formulaire de fin. Aucun numéro, aucune promesse de délai.
 */
export const dynamicParams = false

export function generateStaticParams() {
  return getZones().map((z) => ({ slug: z.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const z = getZone(params.slug)
  if (!z) return {}
  return buildMetadata({ title: z.metaTitle, description: z.metaDescription, path: `/zones/${z.slug}`, ogImage: z.image })
}

const nombre = (n: number) => n.toLocaleString('fr-FR').replace(/ /g, ' ')
const kilometres = (n: number) => n.toLocaleString('fr-FR', { maximumFractionDigits: 1 })

export default function ZonePage({ params }: { params: { slug: string } }) {
  const zone = getZone(params.slug)
  if (!zone) notFound()

  const autres = getZones().filter((z) => z.slug !== zone.slug)
  const services = getServices()
  const firstBlockImageIndex = zone.blocks.findIndex((b) => b.image)
  let rangImage = 0

  const reperes = [
    {
      icone: 'zone couverte',
      texte:
        zone.population && zone.distanceKm
          ? `${nombre(zone.population)} habitants, à ${kilometres(zone.distanceKm)} km d’Angers`
          : `Dans notre secteur de 40 km`,
    },
    { icone: 'localisation', texte: 'Fuite localisée sans casse' },
    { icone: 'rapport', texte: 'Rapport pour l’assurance' },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdScript(zoneJsonLd(zone)) }} />
      <Breadcrumbs
        items={[
          { name: 'Accueil', path: '/' },
          { name: 'Zones', path: '/zones' },
          { name: zone.name, path: `/zones/${zone.slug}` },
        ]}
      />

      {/* En-tête : texte à gauche, photo de la prestation à droite ; centré au téléphone */}
      <section className="container-site pb-10 pt-6 md:pb-14">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="text-center lg:col-span-6 lg:text-left">
            <p className="surtitre justify-center lg:justify-start">
              Commune · {zone.postalCode}
            </p>
            <h1 className="font-display text-[1.75rem] font-bold leading-tight text-nuit sm:text-4xl md:text-[2.5rem]">{zone.h1}</h1>
            <p className="mt-5 text-[1.05rem] leading-relaxed text-slate-700">{zone.intro}</p>
            <a href="#devis" className="btn-accent mt-7">
              {LIBELLE_DEVIS}
            </a>
          </div>
          {zone.image && (
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-panel shadow-panel lg:col-span-6">
              <Image
                src={zone.image}
                alt={zone.imageAlt || zone.h1}
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          )}
        </div>

        {/* Trois repères, dont le fait sourcé de la commune */}
        <ul className="mt-10 grid gap-4 sm:grid-cols-3" role="list">
          {reperes.map((r, i) => (
            <Apparition
              as="li"
              key={r.texte}
              className="glisse flex h-full items-center justify-center gap-3 rounded-card border border-slate-200 bg-white px-5 py-4 shadow-sm sm:justify-start"
              style={{ ['--retard' as string]: `${i * 90}ms` }}
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-card bg-primary/10 text-primary">
                <BlockIcon heading={r.icone} className="h-5 w-5" anime />
              </span>
              <span className="font-semibold text-slate-800">{r.texte}</span>
            </Apparition>
          ))}
        </ul>
        {zone.population && (
          <p className="mt-3 text-center text-xs text-slate-500 sm:text-left">
            Population légale et position de la commune : geo.api.gouv.fr (Insee), code commune {zone.codeInsee}.
          </p>
        )}
      </section>

      {/* Blocs : fonds alternés, photo d'un côté puis de l'autre */}
      {zone.blocks.map((b, i) => {
        const inverse = b.image ? rangImage++ % 2 === 1 : false
        return (
          <section key={b.heading} className={`section ${i % 2 === 0 ? 'bg-neige' : 'bg-white'}`}>
            <div className="container-site">
              <ServiceBlock block={b} eager={i === firstBlockImageIndex} inverse={inverse} />
            </div>
          </section>
        )
      })}

      {/* Secteur et prestations : carte compacte à gauche, prestations en cartes à droite */}
      <section className={`section ${zone.blocks.length % 2 === 0 ? 'bg-neige' : 'bg-white'}`} aria-labelledby="prestations-titre">
        <div className="container-site grid items-start gap-10 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-14">
          <CarteSecteur compacte commune={zone.slug} titre={`${zone.name} dans notre secteur de 40 km`} />

          <div>
            <h2 id="prestations-titre" className="text-center font-display text-xl font-bold leading-tight text-nuit lg:text-left">
              Nos prestations à {zone.name}
            </h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2" role="list">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="group flex h-full items-center gap-3 rounded-card border border-slate-200 bg-white p-2.5 pr-4 shadow-sm transition hover:border-primary/50"
                  >
                    {s.image && (
                      <span className="relative h-14 w-16 shrink-0 overflow-hidden rounded-sm">
                        <Image src={s.image} alt="" fill sizes="64px" className="object-cover" />
                      </span>
                    )}
                    <span className="font-semibold leading-snug text-slate-800 group-hover:text-primary">{s.navTitle}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="mt-8 text-center font-display text-lg font-bold text-nuit lg:text-left">Autres communes</h3>
            <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2 text-center text-[15px] sm:grid-cols-3 lg:text-left" role="list">
              {autres.map((z) => (
                <li key={z.slug}>
                  <Link href={`/zones/${z.slug}`} className="font-medium text-primary underline-offset-2 hover:underline">
                    {z.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Faq items={zone.faq} />
      <CtaBanner
        fond="bg-white"
        title={`Recherche de fuite à ${zone.name} : votre devis gratuit`}
        subtitle="Trois questions, puis nous revenons vers vous avec la méthode prévue et son prix."
      />
    </>
  )
}
