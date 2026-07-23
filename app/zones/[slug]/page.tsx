import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getZone, getZones, getServices } from '@/lib/content'
import { buildMetadata, zoneJsonLd, jsonLdScript } from '@/lib/seo'
import { siteConfig } from '@/config/site.config'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import Faq from '@/components/ui/Faq'
import CtaBanner from '@/components/ui/CtaBanner'

export const dynamicParams = false

export function generateStaticParams() {
  return getZones().map((z) => ({ slug: z.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const z = getZone(params.slug)
  if (!z) return {}
  return buildMetadata({ title: z.metaTitle, description: z.metaDescription, path: `/zones/${z.slug}` })
}

export default function ZonePage({ params }: { params: { slug: string } }) {
  const zone = getZone(params.slug)
  if (!zone) notFound()

  // Maillage : service principal = détection non destructive + urgence.
  const mainServices = getServices().filter((s) =>
    ['detection-fuite-non-destructive', 'urgence-fuite-eau'].includes(s.slug),
  )

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(zoneJsonLd(zone)) }}
      />
      <Breadcrumbs
        items={[
          { name: 'Accueil', path: '/' },
          { name: 'Zones', path: '/zones' },
          { name: zone.name, path: `/zones/${zone.slug}` },
        ]}
      />

      <article className="container-site section">
        <h1 className="text-3xl md:text-4xl">{zone.h1}</h1>
        <p className="mt-2 text-sm text-slate-500">{zone.name} ({zone.postalCode}) · {siteConfig.department}</p>
        <p className="mt-4 rounded-card bg-light p-4 text-slate-700">{zone.intro}</p>

        <div className="prose-content mt-8">
          {zone.blocks.map((b) => (
            <section key={b.heading}>
              <h2>{b.heading}</h2>
              <p>{b.body}</p>
            </section>
          ))}
        </div>

        <nav aria-label="Prestations" className="mt-8">
          <h2 className="text-xl">Nos prestations à {zone.name}</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {mainServices.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="rounded-full border border-slate-300 px-3 py-1.5 text-sm hover:border-primary">
                  {s.navTitle}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {zone.neighbours.length > 0 && (
          <p className="mt-6 text-sm text-slate-500">
            Communes limitrophes desservies : {zone.neighbours.join(', ')}.
          </p>
        )}
      </article>

      <Faq items={zone.faq} />
      <CtaBanner title={`Recherche de fuite à ${zone.name} ?`} />
    </>
  )
}
