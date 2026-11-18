import Link from 'next/link'
import { siteConfig } from '@/config/site.config'
import { LIBELLE_DEVIS } from '@/lib/cta'

/**
 * PhoneButton, levier de conversion n°1, réutilisé partout (header, hero, CtaBanner,
 * footer, articles). `tel:` depuis la config (E.164). Restylable par ST-3 via `className`.
 *
 * FORMULAIRE SEUL (décision Rémy 21/08/2026) : quand `siteConfig.phone` est vide, ce
 * composant n'émet plus AUCUN lien `tel:` et devient automatiquement le CTA formulaire,
 * quel que soit l'endroit où il est appelé. `label` n'est utilisé qu'en mode appel :
 * l'appliquer aussi en mode formulaire produirait un libellé incohérent (un « Appeler
 * le » suivi de rien, puisque `phoneDisplay` est vide dans ce même état).
 */
export default function PhoneButton({
  className = 'btn-accent',
  label,
}: {
  className?: string
  label?: string
}) {
  if (!siteConfig.phone) {
    return (
      <Link href="/contact" className={className} data-cta="devis-form">
        <FormIcon />
        {LIBELLE_DEVIS}
      </Link>
    )
  }
  return (
    <a
      href={`tel:${siteConfig.phone}`}
      className={className}
      aria-label={`Appeler le ${siteConfig.phoneDisplay}`}
      data-cta="phone"
    >
      <PhoneIcon />
      {label || siteConfig.phoneDisplay}
    </a>
  )
}

function PhoneIcon() {
  return (
    <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
    </svg>
  )
}

/* Icône « devis » (bulle de document), déjà utilisée ailleurs sur le site pour le CTA
   formulaire (MobileStickyBar) : même figure reprise ici pour rester cohérent. */
function FormIcon() {
  return (
    <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}
