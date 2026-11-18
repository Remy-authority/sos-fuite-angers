import type { Metadata } from 'next'
import { siteConfig } from '@/config/site.config'
import { buildMetadata } from '@/lib/seo'
import LeadForm from '@/components/ui/LeadForm'

export const metadata: Metadata = buildMetadata({
  title: `Contact et devis, recherche de fuite`,
  description: `Contactez ${siteConfig.businessName} pour une recherche de fuite d'eau à ${siteConfig.city}. Devis gratuit, réponse rapide.`,
  path: '/contact',
})

/** Page contact : le formulaire d'abord, sans décor (#R84). */
export default function ContactPage() {
  return (
    <section className="container-site section">
      <div className="mx-auto grid max-w-5xl items-start gap-8 lg:grid-cols-[1fr_minmax(0,440px)] lg:gap-14">
        <div className="text-center lg:order-1 lg:text-left">
          <h1 className="font-display text-3xl font-bold md:text-4xl">Contact et devis gratuit</h1>
          <p className="mx-auto mt-4 max-w-md text-slate-600 lg:mx-0">
            Une fuite d&apos;eau à {siteConfig.city} ou autour ? Trois questions, puis nous vous rappelons.
          </p>
          <p className="mt-4 text-sm text-slate-500">
            Par écrit : <a className="text-primary underline underline-offset-2" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          </p>
        </div>
        <div id="formulaire" className="mx-auto w-full max-w-[440px] lg:order-2">
          <LeadForm idPrefix="contact-" />
        </div>
      </div>
    </section>
  )
}
