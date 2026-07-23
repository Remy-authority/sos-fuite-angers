import Link from 'next/link'
import PhoneButton from './PhoneButton'
import { siteConfig } from '@/config/site.config'

/**
 * CtaBanner — bandeau de conversion (dual CTA : téléphone + devis). Réutilisé en
 * milieu/bas de pages et d'articles. Contenu paramétrable, aucun texte en dur métier.
 */
export default function CtaBanner({
  title = `Une fuite d'eau à ${siteConfig.city} ? On intervient vite.`,
  subtitle = siteConfig.responseTime,
}: {
  title?: string
  subtitle?: string
}) {
  return (
    <section className="section" aria-label="Nous contacter">
      <div className="container-site">
        <div className="rounded-card bg-dark px-6 py-10 text-center text-white md:px-12">
          <h2 className="text-2xl text-white md:text-3xl">{title}</h2>
          <p className="mt-3 text-slate-200">{subtitle}</p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <PhoneButton />
            <Link href="/contact" className="btn-outline !border-white/40 !bg-transparent !text-white hover:!bg-white/10">
              Demander un devis gratuit
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
