import Link from 'next/link'
import { siteConfig } from '@/config/site.config'
import { getServices, getZones } from '@/lib/content'
import Logo from '@/components/ui/Logo'

/**
 * Pied de page (refonte du 18/11/2026, règles #R53 et #R69).
 *  - Téléphone et tablette : identité centrée (logo empilé, centré au pixel), puis un volet
 *    fermé par colonne, liens centrés.
 *  - Ordinateur : grille de 12, titres de colonnes sur une même ligne de hauteur fixe (le lien
 *    « voir tout » monte à côté du titre sans la grandir), premier lien de chaque colonne sur
 *    une même ligne.
 *  - Aucun numéro de téléphone (#R12) : email et ville seulement. Aucun badge-pilule.
 */
type Lien = { href: string; label: string }
type Colonne = { titre: string; aria: string; liens: Lien[]; plus?: Lien; span: string }

export default function Footer() {
  const services = getServices()
  const zones = getZones()
  const year = 2026

  const colonnes: Colonne[] = [
    {
      titre: 'Prestations',
      aria: 'Nos prestations',
      liens: services.map((s) => ({ href: `/services/${s.slug}`, label: s.navTitle })),
      plus: { href: '/services', label: 'Tout voir' },
      span: 'lg:col-span-3',
    },
    {
      titre: 'Communes',
      aria: 'Communes desservies',
      liens: zones.map((z) => ({ href: `/zones/${z.slug}`, label: z.name })),
      plus: { href: '/zones', label: 'Tout voir' },
      span: 'lg:col-span-3',
    },
    {
      titre: 'Informations',
      aria: 'Informations',
      liens: [
        { href: '/contact', label: 'Contact et devis' },
        { href: '/tarifs', label: 'Tarifs' },
        ...(siteConfig.features.blog ? [{ href: '/conseils', label: 'Conseils' }] : []),
        { href: '/mentions-legales', label: 'Mentions légales' },
        { href: '/politique-confidentialite', label: 'Confidentialité' },
        { href: '/cgu', label: 'CGU' },
      ],
      span: 'lg:col-span-3',
    },
  ]

  return (
    <footer className="mb-14 bg-nuit text-slate-300 lg:mb-0" role="contentinfo">
      <div className="container-site py-10 lg:grid lg:grid-cols-12 lg:gap-8 lg:py-14">
        {/* Identité : centrée au téléphone, à gauche sur ordinateur */}
        <div className="text-center lg:col-span-3 lg:text-left">
          <Link href="/" className="inline-block lg:hidden" aria-label={`${siteConfig.businessName}, accueil`}>
            <Logo variant="sombre" empile className="mx-auto block h-[5.25rem] w-auto" />
          </Link>
          <Link href="/" className="hidden lg:inline-block" aria-label={`${siteConfig.businessName}, accueil`}>
            <Logo variant="sombre" className="block h-9 w-auto" />
          </Link>
          <p className="mt-4 text-sm text-slate-300">Angers et 40 km autour, en Maine‑et‑Loire</p>
          <p className="mt-1 text-sm">
            <a href={`mailto:${siteConfig.email}`} className="lien-nuit">
              {siteConfig.email.split('@')[0]}@<wbr />
              {siteConfig.email.split('@')[1]}
            </a>
          </p>
        </div>

        {/* Téléphone et tablette : volets fermés */}
        <div className="mx-auto mt-8 max-w-md space-y-2 lg:hidden">
          {colonnes.map((col) => (
            <details key={col.titre} className="group rounded-card border border-white/10 bg-white/[0.03]">
              <summary className="flex cursor-pointer list-none items-center justify-center gap-2 px-4 py-3.5 text-sm font-semibold uppercase tracking-wider text-white [&::-webkit-details-marker]:hidden">
                {col.titre}
                <svg className="h-4 w-4 transition-transform group-open:rotate-180" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M5 8l5 5 5-5" />
                </svg>
              </summary>
              <nav aria-label={col.aria} className="border-t border-white/10 px-4 pb-4 pt-3">
                <ul className="space-y-2.5 text-center text-sm">
                  {col.liens.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="lien-nuit">{l.label}</Link>
                    </li>
                  ))}
                  {col.plus && (
                    <li>
                      <Link href={col.plus.href} className="font-medium text-accent-clair transition-colors hover:text-white">
                        {col.plus.label} →
                      </Link>
                    </li>
                  )}
                </ul>
              </nav>
            </details>
          ))}
        </div>

        {/* Ordinateur : colonnes alignées au pixel */}
        {colonnes.map((col) => {
          const deux = col.liens.length > 8
          return (
            <nav key={col.titre} aria-label={col.aria} className={`hidden lg:block ${col.span}`}>
              <div className="flex h-5 items-center justify-between gap-3">
                <p className="text-xs font-semibold uppercase leading-5 tracking-wider text-white">{col.titre}</p>
                {col.plus && (
                  <Link href={col.plus.href} className="text-xs font-medium leading-5 text-accent-clair transition-colors hover:text-white">
                    {col.plus.label} →
                  </Link>
                )}
              </div>
              <ul className={`mt-4 text-sm ${deux ? 'columns-2 gap-x-6' : ''}`}>
                {col.liens.map((l) => (
                  <li key={l.href} className="mb-2 break-inside-avoid leading-5">
                    <Link href={l.href} className="lien-nuit">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          )
        })}
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col items-center gap-1 py-4 text-center text-xs text-slate-400 sm:flex-row sm:justify-between sm:text-left">
          <p>© {year} {siteConfig.businessName}. Tous droits réservés.</p>
          <p>Recherche de fuite d’eau à Angers</p>
        </div>
      </div>
    </footer>
  )
}
