import type { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '@/config/site.config'
import { getServices } from '@/lib/content'
import { buildMetadata } from '@/lib/seo'
import CtaBanner from '@/components/ui/CtaBanner'
import Faq from '@/components/ui/Faq'
import Hero from '@/components/sections/Hero'
import TrustBadges from '@/components/sections/TrustBadges'
import About from '@/components/sections/About'
import Process from '@/components/sections/Process'
import Stats from '@/components/sections/Stats'
import WhyUs from '@/components/sections/WhyUs'
import ServiceAreaMap from '@/components/sections/ServiceAreaMap'

const TITLE = "Recherche de fuite d'eau à Angers — Détection non destructive"
const DESC =
  "Recherche et détection de fuite d'eau à Angers et environs. Méthode non destructive, intervention rapide. Devis et prise de contact en ligne."

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESC, path: '/' })

export default function HomePage() {
  const services = getServices()
  // DEMO – contenu imaginé persona Thomas Mercier, à affiner par ST-5
  const homeFaq = siteConfig.homeFaq as unknown as { q: string; a: string }[]

  return (
    <>
      <Hero />
      <TrustBadges />

      {/* Services */}
      <section className="section" aria-labelledby="services-title">
        <div className="container-site">
          <div className="mb-8">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">Ce que nous faisons</p>
            <h2 id="services-title" className="text-2xl font-bold text-slate-900 md:text-3xl">Nos prestations</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group card block transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-md"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <ServiceIcon icon={s.icon} />
                </div>
                <h3 className="font-bold text-slate-900 group-hover:text-primary">{s.navTitle}</h3>
                <ul className="mt-3 space-y-1 text-sm text-slate-600">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <span className="h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      {b}
                    </li>
                  ))}
                </ul>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  En savoir plus
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Stats />
      <About />
      <Process />
      <WhyUs />

      <CtaBanner />

      <ServiceAreaMap />

      <Faq items={homeFaq} />
    </>
  )
}

const SERVICE_ICONS: Record<string, string> = {
  alert: 'M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z',
  search: 'M21 21l-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0z',
  droplet: 'M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z',
  tools: 'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z',
  pool: 'M2 12h20M2 18h20M2 6h20',
  water: 'M4.5 12.5c3.5 0 3.5-3 7-3s3.5 3 7 3M4.5 18.5c3.5 0 3.5-3 7-3s3.5 3 7 3',
}

function ServiceIcon({ icon }: { icon: string }) {
  const d = SERVICE_ICONS[icon] ?? SERVICE_ICONS.search
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d={d} />
    </svg>
  )
}
