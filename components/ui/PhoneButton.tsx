import { siteConfig } from '@/config/site.config'

/**
 * PhoneButton — levier de conversion n°1, réutilisé partout (header, hero, CtaBanner,
 * footer, articles). `tel:` depuis la config (E.164). Restylable par ST-3 via `className`.
 */
export default function PhoneButton({
  className = 'btn-accent',
  label,
}: {
  className?: string
  label?: string
}) {
  return (
    <a
      href={`tel:${siteConfig.phone}`}
      className={className}
      aria-label={`Appeler le ${siteConfig.phoneDisplay}`}
      data-cta="phone"
    >
      <span aria-hidden="true">📞</span>
      {label || siteConfig.phoneDisplay}
    </a>
  )
}
