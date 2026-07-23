import Link from 'next/link'
import { siteConfig } from '@/config/site.config'
import { getServices, getZones } from '@/lib/content'

/**
 * Footer — nav + services + zones + contact + liens légaux. Config/content-driven.
 * SIREN affiché seulement s'il est renseigné (gabarit légal, pas de valeur factice).
 */
export default function Footer() {
  const services = getServices()
  const zones = getZones()
  const year = 2026 // build-time constant (SSG) ; à figer par le build annuel

  return (
    <footer className="mt-8 bg-dark text-slate-300">
      <div className="container-site grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-lg font-bold text-white">{siteConfig.businessName}</p>
          <p className="mt-2 text-sm">{siteConfig.trade} à {siteConfig.city} · {siteConfig.availability}</p>
          <a href={`tel:${siteConfig.phone}`} className="mt-3 inline-block font-semibold text-white">
            {siteConfig.phoneDisplay}
          </a>
        </div>

        <nav aria-label="Services">
          <p className="font-semibold text-white">Nos services</p>
          <ul className="mt-3 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-white">{s.navTitle}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Zones d'intervention">
          <p className="font-semibold text-white">Zones d'intervention</p>
          <ul className="mt-3 space-y-2 text-sm">
            {zones.map((z) => (
              <li key={z.slug}>
                <Link href={`/zones/${z.slug}`} className="hover:text-white">{z.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Informations">
          <p className="font-semibold text-white">Informations</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            {siteConfig.features.blog && <li><Link href="/conseils" className="hover:text-white">Conseils</Link></li>}
            <li><Link href="/mentions-legales" className="hover:text-white">Mentions légales</Link></li>
            <li><Link href="/politique-confidentialite" className="hover:text-white">Confidentialité</Link></li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site py-4 text-xs text-slate-400">
          © {year} {siteConfig.businessName}. Tous droits réservés.
        </div>
      </div>
    </footer>
  )
}
