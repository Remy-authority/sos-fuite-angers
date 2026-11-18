import Link from 'next/link'
import Logo from '@/components/ui/Logo'
import PhoneButton from '@/components/ui/PhoneButton'
import { siteConfig } from '@/config/site.config'
import { getServices, getZones } from '@/lib/content'
import HeaderNavMobile from './HeaderNavMobile'

export default function Header() {
  const services = getServices()
  const zones = getZones()
  // Sous-menus de 3 liens + « voir tout » (règle 14 de la checklist, #R33).
  const SERVICES_MENU = ['detection-fuite-non-destructive', 'recherche-fuite-encastree', 'recherche-fuite-canalisation-enterree']
  const PRINCIPALES = ['avrille', 'trelaze', 'les-ponts-de-ce']
  const servicesMenu = SERVICES_MENU.map((slug) => services.find((s) => s.slug === slug)).filter((s): s is NonNullable<typeof s> => Boolean(s))
  const zonesMenu = PRINCIPALES.map((slug) => zones.find((z) => z.slug === slug)).filter((z): z is NonNullable<typeof z> => Boolean(z))
  const menus = [
    {
      titre: 'Services',
      liens: servicesMenu.map((s) => ({ href: `/services/${s.slug}`, label: s.navTitle })),
      tout: { href: '/services', label: `Nos ${services.length} prestations` },
    },
    {
      titre: 'Zones',
      liens: zonesMenu.map((z) => ({ href: `/zones/${z.slug}`, label: z.name })),
      tout: { href: '/zones', label: 'Toutes les communes' },
    },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <div className="container-site relative flex items-center justify-between gap-4 py-3">
        {/* Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
          aria-label={`${siteConfig.businessName}, accueil`}
        >
          {/* Variante claire : goutte bleu eau dans le viseur orange. */}
          <Logo variant="clair" />
        </Link>

        {/* Nav desktop */}
        <nav aria-label="Navigation principale" className="hidden items-center gap-0.5 text-sm font-medium text-slate-700 lg:flex">
          <Link href="/" className="rounded-card px-3 py-2 transition-colors hover:bg-slate-100 hover:text-primary">Accueil</Link>

          {menus.map((m) => (
            <div key={m.titre} className="group relative">
              <button
                type="button"
                aria-haspopup="true"
                className="flex items-center gap-1 rounded-card px-3 py-2 transition-colors hover:bg-slate-100 hover:text-primary group-focus-within:text-primary"
              >
                {m.titre}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <div className="invisible absolute left-0 top-full z-10 mt-1 w-64 rounded-card border border-slate-200 bg-white p-1.5 opacity-0 shadow-xl transition-all duration-150 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                {m.liens.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="block rounded-card px-3 py-2 text-sm text-slate-700 hover:bg-primary/5 hover:text-primary"
                  >
                    {l.label}
                  </Link>
                ))}
                <Link
                  href={m.tout.href}
                  className="mt-1 block rounded-card border-t border-slate-100 px-3 py-2 text-sm font-semibold text-primary hover:bg-primary/5"
                >
                  {m.tout.label} →
                </Link>
              </div>
            </div>
          ))}
          {siteConfig.features.blog && (
            <Link href="/conseils" className="rounded-card px-3 py-2 transition-colors hover:bg-slate-100 hover:text-primary">Conseils</Link>
          )}
          <Link href="/contact" className="rounded-card px-3 py-2 transition-colors hover:bg-slate-100 hover:text-primary">Contact</Link>
        </nav>

        {/* CTA droite + menu mobile : logo, navigation, un bouton, rien d'autre. */}
        <div className="flex items-center gap-2">
          <PhoneButton className="btn-accent hidden !min-h-[42px] !px-4 !py-2 text-sm sm:inline-flex" />
          <HeaderNavMobile
            services={servicesMenu.map((s) => ({ slug: s.slug, navTitle: s.navTitle }))}
            zones={zonesMenu.map((z) => ({ slug: z.slug, navTitle: z.name }))}
            nbZones={zones.length}
            blogEnabled={siteConfig.features.blog}
          />
        </div>
      </div>
    </header>
  )
}
