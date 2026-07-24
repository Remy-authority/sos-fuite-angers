import Link from 'next/link'
import PhoneButton from './PhoneButton'
import { siteConfig } from '@/config/site.config'

/**
 * StickyCallCard — CTA téléphone en colonne latérale, visible pendant la
 * lecture d'une page service (desktop uniquement, `lg:`). Reste "sticky" sous
 * la barre de navigation pendant le scroll du contenu principal.
 * Sur mobile, la MobileStickyBar (barre fixe en bas) joue déjà ce rôle.
 */
export default function StickyCallCard() {
  return (
    <div className="hidden lg:block">
      <div className="sticky top-24 overflow-hidden rounded-card bg-dark p-6 text-white">
        <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/30 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-accent/20 blur-3xl" aria-hidden="true" />
        <div className="relative">
          <p className="inline-block rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-accent">
            {siteConfig.availability}
          </p>
          <p className="mt-4 text-lg font-bold leading-snug">
            Une question sur votre fuite ?
          </p>
          <p className="mt-1 text-sm text-slate-300">{siteConfig.responseTime}</p>

          <PhoneButton className="btn-accent mt-5 w-full" />
          <Link href="/contact" className="btn-outline !border-white/25 !bg-transparent !text-white mt-3 w-full hover:!bg-white/10">
            Devis gratuit
          </Link>

          <ul className="mt-6 space-y-2 border-t border-white/10 pt-5 text-sm text-slate-300">
            {siteConfig.usps.slice(0, 3).map((usp) => (
              <li key={usp} className="flex items-center gap-2">
                <svg className="h-4 w-4 shrink-0 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                {usp}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
