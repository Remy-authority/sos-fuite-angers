import Link from 'next/link'
import PhoneButton from '@/components/ui/PhoneButton'
import { siteConfig } from '@/config/site.config'
import { getServices } from '@/lib/content'

/**
 * Header — sticky, logo/nom + nav + téléphone proéminent (CTA permanent).
 * Nav construite depuis le contenu (services) + config. Restyle/menu mobile = ST-3.
 */
export default function Header() {
  const services = getServices()
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="container-site flex items-center justify-between gap-4 py-3">
        <Link href="/" className="flex items-center gap-2 font-bold text-slate-900" aria-label={`${siteConfig.businessName} — accueil`}>
          <span aria-hidden="true">💧</span>
          <span>{siteConfig.businessName}</span>
        </Link>

        <nav aria-label="Navigation principale" className="hidden items-center gap-5 text-sm font-medium text-slate-700 lg:flex">
          <Link href="/" className="hover:text-primary">Accueil</Link>
          <div className="group relative">
            <span className="cursor-default hover:text-primary">Services</span>
            <div className="invisible absolute left-0 top-full z-10 w-64 rounded-card border border-slate-200 bg-white p-2 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100">
              {services.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="block rounded px-3 py-2 hover:bg-primary/5">
                  {s.navTitle}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/zones" className="hover:text-primary">Zones</Link>
          {siteConfig.features.blog && <Link href="/conseils" className="hover:text-primary">Conseils</Link>}
          <Link href="/contact" className="hover:text-primary">Contact</Link>
        </nav>

        <div className="flex items-center gap-2">
          <span className="hidden text-right text-xs text-slate-500 sm:block">
            {siteConfig.availability}
          </span>
          <PhoneButton className="btn-accent !px-4 !py-2 text-sm" />
        </div>
      </div>
    </header>
  )
}
