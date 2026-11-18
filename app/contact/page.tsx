import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { siteConfig } from '@/config/site.config'
import { buildMetadata } from '@/lib/seo'
import { getServices } from '@/lib/content'
import LeadForm from '@/components/ui/LeadForm'
import Faq from '@/components/ui/Faq'

export const metadata: Metadata = buildMetadata({
  title: `Contact et devis, recherche de fuite`,
  description: `Demandez votre devis gratuit pour une recherche de fuite d'eau à ${siteConfig.city} et 40 km autour : trois questions en 30 secondes, puis nous revenons vers vous.`,
  path: '/contact',
})

/** Questions propres à la page contact (celles de l'accueil ne sont pas reprises). Aucun délai promis. */
const FAQ_CONTACT = [
  {
    q: 'Que se passe-t-il après l’envoi du formulaire ?',
    a: 'Chaque demande est lue par nos soins ; nous vous recontactons ensuite pour savoir où l’eau se montre, depuis quand, et dans quel type de logement. Nous proposons ensuite la méthode adaptée et son prix.',
  },
  {
    q: 'Que préparer avant notre échange ?',
    a: 'Le relevé du compteur d’eau sur une nuit sans usage, quelques photos des traces d’humidité et, en copropriété, les coordonnées du syndic. Rien n’est obligatoire : nous complétons sur place.',
  },
  {
    q: 'Quelles communes couvrez-vous ?',
    a: `Nous intervenons à ${siteConfig.city} et dans les communes à 40 km autour, en Maine-et-Loire. La carte du secteur est sur notre page des zones.`,
  },
  {
    q: 'Le devis est-il vraiment gratuit ?',
    a: 'Oui. Le devis ne vous engage à rien : vous connaissez la méthode prévue et son prix avant toute intervention, et vous restez libre de donner suite.',
  },
]

/**
 * Page contact (#R84, #R33) : le formulaire d'abord, sans décor ; puis les prestations en
 * vignettes photo et une FAQ propre à la page. Aucun numéro, aucune promesse de délai.
 */
export default function ContactPage() {
  const services = getServices()

  return (
    <>
      <section className="container-site section">
        <div className="mx-auto grid max-w-5xl items-stretch gap-8 lg:grid-cols-[1fr_minmax(0,440px)] lg:gap-14">
          <div className="flex flex-col justify-center text-center lg:order-1 lg:text-left">
            <h1 className="font-display text-3xl font-bold md:text-4xl">Contact et devis gratuit</h1>
            <p className="mx-auto mt-4 max-w-md text-slate-600 lg:mx-0">
              Une fuite d&apos;eau à {siteConfig.city} ou autour ? Trois questions, puis nous revenons vers vous.
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

      <section className="section border-t border-slate-200 bg-white" aria-labelledby="contact-prestations">
        <div className="container-site">
          <h2 id="contact-prestations" className="text-center font-display text-[1.7rem] font-bold leading-tight text-nuit md:text-[2.1rem]">
            Nos prestations de recherche de fuite
          </h2>
          <ul className="mx-auto mt-8 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-3" role="list">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex h-full items-center gap-3 rounded-card border border-slate-200 bg-white p-2.5 pr-4 shadow-sm transition hover:border-primary/50"
                >
                  {s.image && (
                    <span className="relative h-14 w-16 shrink-0 overflow-hidden rounded-sm">
                      <Image src={s.image} alt="" fill sizes="64px" className="object-cover" />
                    </span>
                  )}
                  <span className="font-semibold leading-snug text-slate-800 group-hover:text-primary">{s.navTitle}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Faq items={FAQ_CONTACT} title="Avant de nous écrire" />
    </>
  )
}
