import type { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '@/config/site.config'
import { getServices, getZones } from '@/lib/content'
import { buildMetadata } from '@/lib/seo'
import PhoneButton from '@/components/ui/PhoneButton'
import CtaBanner from '@/components/ui/CtaBanner'
import Faq from '@/components/ui/Faq'

/*
 * ACCUEIL — page pilier « recherche de fuite d'eau Angers » (décision Gate A).
 * ⚠️ SOCLE (Lot 0) : structure + données via config/content. Le VISUEL riche
 * (hero image, sections stylées, animations) est intégré par ST-3 par-dessus.
 * Aucun texte métier en dur : tout vient de siteConfig / content/*.json (placeholders ST-5).
 */

const TITLE = "Recherche de fuite d'eau à Angers — Détection non destructive"
const DESC =
  "Recherche et détection de fuite d'eau à Angers et environs. Méthode non destructive, intervention rapide. Devis et prise de contact en ligne."

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESC, path: '/' })

export default function HomePage() {
  const services = getServices()
  const zones = getZones()
  const homeFaq = [] as { q: string; a: string }[] // rempli par ST-2/ST-5

  return (
    <>
      {/* Hero */}
      <section className="bg-dark text-white">
        <div className="container-site grid gap-8 py-16 md:grid-cols-2 md:items-center md:py-24">
          <div>
            <h1 className="text-3xl font-bold leading-tight text-white md:text-5xl">
              Recherche de fuite d'eau à {siteConfig.city}
            </h1>
            <p className="mt-4 text-lg text-slate-200">
              {siteConfig.availability} · {siteConfig.responseTime}. Détection non
              destructive ({siteConfig.methods.join(', ')}).
            </p>
            <ul className="mt-5 flex flex-wrap gap-2 text-sm">
              {siteConfig.usps.map((u) => (
                <li key={u} className="rounded-full bg-white/10 px-3 py-1">✓ {u}</li>
              ))}
            </ul>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <PhoneButton label={`Appeler — ${siteConfig.phoneDisplay}`} />
              <Link href="/contact" className="btn-outline !border-white/40 !bg-transparent !text-white hover:!bg-white/10">
                Devis gratuit en ligne
              </Link>
            </div>
          </div>
          <div className="rounded-card border border-white/10 bg-white/5 p-6 text-sm text-slate-300">
            {/* Placeholder « En bref » (réponse courte GEO) — rédigé par ST-5 */}
            <p className="font-semibold text-white">En bref</p>
            <p className="mt-2">
              [À rédiger — ST-5] Réponse courte citable : quoi, où (Angers + rayon ~
              {siteConfig.serviceArea.radiusKm} km), méthode non destructive, délai.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section" aria-labelledby="services-title">
        <div className="container-site">
          <h2 id="services-title" className="text-2xl md:text-3xl">Nos prestations</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="card block transition hover:-translate-y-0.5">
                <h3 className="text-lg">{s.navTitle}</h3>
                <ul className="mt-3 space-y-1 text-sm text-slate-600">
                  {s.bullets.map((b) => (
                    <li key={b}>· {b}</li>
                  ))}
                </ul>
                <span className="mt-4 inline-block text-sm font-semibold text-primary">En savoir plus →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Zones */}
      <section className="section bg-light" aria-labelledby="zones-title">
        <div className="container-site">
          <h2 id="zones-title" className="text-2xl md:text-3xl">Zones d'intervention</h2>
          <p className="mt-2 text-slate-600">
            {siteConfig.city} et communes proches (rayon ~{siteConfig.serviceArea.radiusKm} km).
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {zones.map((z) => (
              <li key={z.slug}>
                <Link href={`/zones/${z.slug}`} className="rounded-full border border-slate-300 bg-white px-3 py-1.5 text-sm hover:border-primary">
                  {z.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/zones" className="rounded-full bg-primary px-3 py-1.5 text-sm font-semibold text-white">
                Toutes les zones →
              </Link>
            </li>
          </ul>
          <p className="mt-4 text-sm text-slate-500">
            Quartiers d'Angers desservis : {siteConfig.serviceArea.districts.join(', ')}.
          </p>
        </div>
      </section>

      <CtaBanner />

      {/* FAQ + JSON-LD FAQPage (rendus seulement quand des Q/R réelles existent) */}
      <Faq items={homeFaq} />
    </>
  )
}
