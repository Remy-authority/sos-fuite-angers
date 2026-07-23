import Link from 'next/link'
import { siteConfig } from '@/config/site.config'
import { getZones } from '@/lib/content'

export default function ServiceAreaMap() {
  const zones = getZones()

  return (
    <section className="section bg-light" aria-labelledby="area-title">
      <div className="container-site">
        <div className="grid gap-8 md:grid-cols-2 md:items-center lg:gap-14">
          {/* Texte */}
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">Zone d'intervention</p>
            <h2 id="area-title" className="text-2xl font-bold text-slate-900 md:text-3xl">
              {siteConfig.city} et {siteConfig.serviceArea.radiusKm} km autour
            </h2>
            <p className="mt-3 text-slate-600">
              Artisan local, on se déplace rapidement dans tout le {siteConfig.region} autour d'{siteConfig.city}.
            </p>

            {/* Quartiers */}
            <div className="mt-5">
              <p className="mb-2 text-sm font-medium text-slate-500">Quartiers d'Angers desservis :</p>
              <p className="text-sm text-slate-600">{siteConfig.serviceArea.districts.join(' · ')}</p>
            </div>

            <Link
              href="/zones"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-primary hover:text-primary-dark"
            >
              Voir toutes les zones
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Link>
          </div>

          {/* Grille de communes */}
          <div>
            <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3" role="list" aria-label="Communes desservies">
              {zones.map((z) => (
                <li key={z.slug}>
                  <Link
                    href={`/zones/${z.slug}`}
                    className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
                  >
                    <svg className="h-3.5 w-3.5 shrink-0 text-primary/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {z.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
