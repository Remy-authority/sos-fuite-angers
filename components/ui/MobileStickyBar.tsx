'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { siteConfig } from '@/config/site.config'
import { LIBELLE_DEVIS } from '@/lib/cta'

/**
 * MobileStickyBar, barre fixe en bas d'écran (téléphone et tablette).
 * FORMULAIRE SEUL (décision Rémy 21/08/2026) : un seul bouton pleine largeur, même mot que
 * partout ailleurs (`LIBELLE_DEVIS`). Si la page porte un formulaire, le bouton y amène au lieu
 * d'ouvrir /contact ; la barre s'efface tant qu'un formulaire est à l'écran (elle ne couvre
 * jamais les cases et ne double pas le bouton d'envoi).
 */
export default function MobileStickyBar() {
  const [masquee, setMasquee] = useState(false)

  useEffect(() => {
    const formulaires = Array.from(document.querySelectorAll('[data-lead-form]'))
    if (!formulaires.length || !('IntersectionObserver' in window)) return
    const visibles = new Set<Element>()
    const obs = new IntersectionObserver(
      (entrees) => {
        entrees.forEach((e) => (e.isIntersecting ? visibles.add(e.target) : visibles.delete(e.target)))
        setMasquee(visibles.size > 0)
      },
      { threshold: 0.25 },
    )
    formulaires.forEach((f) => obs.observe(f))
    return () => obs.disconnect()
  }, [])

  function versFormulaire(e: React.MouseEvent<HTMLAnchorElement>) {
    const cible = document.querySelector<HTMLElement>('[data-lead-form]')
    if (!cible) return
    e.preventDefault()
    const reduit = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    cible.scrollIntoView({ behavior: reduit ? 'auto' : 'smooth', block: 'center' })
  }

  const icone = (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8z" />
      <path d="M14 3v5h5M8.5 13h7M8.5 17h4.5" />
    </svg>
  )

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 flex border-t border-slate-200 bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.12)] transition-transform duration-200 lg:hidden ${masquee ? 'translate-y-full' : ''}`}
      role="complementary"
      aria-label="Actions rapides"
      aria-hidden={masquee || undefined}
    >
      {siteConfig.phone ? (
        <a
          href={`tel:${siteConfig.phone}`}
          className="flex flex-1 items-center justify-center gap-2 bg-primary py-4 text-sm font-bold text-white"
          aria-label={`Appeler le ${siteConfig.phoneDisplay}`}
          data-cta="phone-sticky"
          tabIndex={masquee ? -1 : undefined}
        >
          Appeler
        </a>
      ) : null}
      <Link
        href="/contact"
        onClick={versFormulaire}
        className="flex flex-1 items-center justify-center gap-2 bg-accent py-4 text-[15px] font-bold text-white active:bg-accent/90"
        data-cta="devis-sticky"
        tabIndex={masquee ? -1 : undefined}
      >
        {icone}
        {LIBELLE_DEVIS}
      </Link>
    </div>
  )
}
