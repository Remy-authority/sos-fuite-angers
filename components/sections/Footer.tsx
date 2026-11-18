import Link from 'next/link'
import { siteConfig } from '@/config/site.config'
import { getServices, getZones } from '@/lib/content'
import Logo from '@/components/ui/Logo'

export default function Footer() {
  const services = getServices()
  const zones = getZones()
  const year = 2026

  return (
    <footer className="mb-14 bg-dark text-slate-300 md:mb-0" role="contentinfo">
      {/* Grille nav */}
      <div className="container-site grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
        {/* Identité */}
        <div>
          <Link href="/" className="inline-flex items-center" aria-label={`${siteConfig.businessName}, accueil`}>
            <Logo textColor="white" iconColor="white" accentColor="#F97316" className="h-8 w-auto" />
          </Link>
          <p className="mt-3 text-sm">{siteConfig.city} · {siteConfig.region}</p>
          <p className="mt-1 text-sm">
            <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">
              {siteConfig.email}
            </a>
          </p>
          <ul className="mt-4 flex flex-wrap gap-1" role="list" aria-label="Engagements">
            {siteConfig.usps.map((u) => (
              <li key={u} className="rounded-full bg-white/5 px-2 py-0.5 text-xs">{u}</li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <nav aria-label="Services">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-300">Nos services</p>
          <ul className="space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="transition-colors hover:text-white">{s.navTitle}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Zones */}
        <nav aria-label="Zones d'intervention">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-300">Zones</p>
          <ul className="space-y-2 text-sm">
            {zones.map((z) => (
              <li key={z.slug}>
                <Link href={`/zones/${z.slug}`} className="transition-colors hover:text-white">{z.name}</Link>
              </li>
            ))}
            <li>
              <Link href="/zones" className="font-medium text-accent hover:text-white transition-colors">Toutes les zones →</Link>
            </li>
          </ul>
        </nav>

        {/* Info */}
        <nav aria-label="Informations légales">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-300">Informations</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/contact" className="transition-colors hover:text-white">Contact & devis</Link></li>
            {siteConfig.features.blog && (
              <li><Link href="/conseils" className="transition-colors hover:text-white">Conseils</Link></li>
            )}
            <li><Link href="/mentions-legales" className="transition-colors hover:text-white">Mentions légales</Link></li>
            <li><Link href="/politique-confidentialite" className="transition-colors hover:text-white">Confidentialité</Link></li>
            <li><Link href="/cgu" className="transition-colors hover:text-white">CGU</Link></li>
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
