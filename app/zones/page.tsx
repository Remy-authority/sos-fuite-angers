import type { Metadata } from 'next'
import Link from 'next/link'
import { getZones } from '@/lib/content'
import { buildMetadata } from '@/lib/seo'
import { siteConfig } from '@/config/site.config'
import CtaBanner from '@/components/ui/CtaBanner'

export const metadata: Metadata = buildMetadata({
  title: `Zones d'intervention — Recherche de fuite près d'${siteConfig.city}`,
  description: `Communes desservies autour d'${siteConfig.city} pour la recherche de fuite d'eau : rayon d'environ ${siteConfig.serviceArea.radiusKm} km.`,
  path: '/zones',
})

export default function ZonesHub() {
  const zones = getZones()
  return (
    <>
      <section className="container-site section">
        <h1 className="text-3xl md:text-4xl">Zones d'intervention</h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          Nous intervenons à {siteConfig.city} et dans les communes proches (rayon d'environ{' '}
          {siteConfig.serviceArea.radiusKm} km).
        </p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {zones.map((z) => (
            <li key={z.slug}>
              <Link href={`/zones/${z.slug}`} className="card block transition hover:-translate-y-0.5">
                <span className="text-lg font-semibold text-slate-900">{z.name}</span>
                <span className="mt-1 block text-sm text-slate-500">{z.postalCode}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <CtaBanner />
    </>
  )
}
