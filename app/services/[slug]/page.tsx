import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getService, getServices, getRelatedArticles } from '@/lib/content'
import { buildMetadata, serviceJsonLd, jsonLdScript } from '@/lib/seo'
import { siteConfig } from '@/config/site.config'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import Faq from '@/components/ui/Faq'
import CtaBanner from '@/components/ui/CtaBanner'
import ServiceBlock from '@/components/ui/ServiceBlock'
import Apparition from '@/components/ui/Apparition'
import { BlockIcon } from '@/components/ui/ServiceIcon'
import { LIBELLE_DEVIS } from '@/lib/cta'

/**
 * Page d'une prestation (refonte du 18/11/2026) : en-tête texte + photo de la prestation,
 * trois repères à icônes dessinées, blocs alternés photo / texte, renvoi vers les tarifs,
 * prestations liées, conseils, FAQ et formulaire de fin. Aucun numéro, aucune promesse de délai.
 */
export const dynamicParams = false

export function generateStaticParams() {
  return getServices().map((s) => ({ slug: s.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = getService(params.slug)
  if (!s) return {}
  return buildMetadata({
    title: s.metaTitle,
    description: s.metaDescription,
    path: `/services/${s.slug}`,
    ogImage: s.image,
  })
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getService(params.slug)
  if (!service) notFound()

  const related = getServices().filter((s) => service.relatedServices.includes(s.slug))
  const articles = getRelatedArticles(service.slug).slice(0, 6)
  const firstBlockImageIndex = service.blocks.findIndex((b) => b.image)
  let rangImage = 0

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdScript(serviceJsonLd(service)) }} />
      <Breadcrumbs
        items={[
          { name: 'Accueil', path: '/' },
          { name: 'Prestations', path: '/services' },
          { name: service.navTitle, path: `/services/${service.slug}` },
        ]}
      />

      {/* En-tête : texte à gauche, photo de la prestation à droite ; centré au téléphone */}
      <section className="container-site pb-10 pt-6 md:pb-14">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="text-center lg:col-span-6 lg:text-left">
            <p className="surtitre justify-center lg:justify-start">Prestation</p>
            <h1 className="font-display text-[1.75rem] font-bold leading-tight text-nuit sm:text-4xl md:text-[2.5rem]">{service.h1}</h1>
            <p className="mt-5 text-[1.05rem] leading-relaxed text-slate-700">{service.intro}</p>
            <a
              href="#devis"
              className="btn-accent mt-7"
            >
              {LIBELLE_DEVIS}
            </a>
          </div>
          {service.image && (
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-panel shadow-panel lg:col-span-6">
              <Image src={service.image} alt={service.h1} fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
          )}
        </div>

        {/* Trois repères, icônes qui se dessinent */}
        <ul className="mt-10 grid gap-4 sm:grid-cols-3" role="list">
          {service.bullets.map((b, i) => (
            <Apparition
              as="li"
              key={b}
              className="glisse flex h-full items-center justify-center gap-3 rounded-card border border-slate-200 bg-white px-5 py-4 shadow-sm sm:justify-start"
              style={{ ['--retard' as string]: `${i * 90}ms` }}
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-card bg-primary/10 text-primary">
                <BlockIcon heading={b} className="h-5 w-5" anime />
              </span>
              <span className="font-semibold text-slate-800">{b}</span>
            </Apparition>
          ))}
        </ul>
      </section>

      {/* Blocs : fonds alternés, photo d'un côté puis de l'autre */}
      {service.blocks.map((b, i) => {
        const inverse = b.image ? rangImage++ % 2 === 1 : false
        return (
          <section key={b.heading} className={`section ${i % 2 === 0 ? 'bg-neige' : 'bg-white'}`}>
            <div className="container-site">
              <ServiceBlock block={b} eager={i === firstBlockImageIndex} inverse={inverse} />
            </div>
          </section>
        )
      })}

      {/* Prix, prestations liées et conseils */}
      <section className="section bg-nuit text-white" aria-labelledby="suite-titre">
        <div className="container-site">
          <div className="mx-auto max-w-2xl text-center">
            <h2 id="suite-titre" className="font-display text-2xl font-bold text-white md:text-3xl">
              Prix et prestations liées
            </h2>
            <p className="mt-3 leading-relaxed text-white/80">
              Le prix dépend de la méthode employée et de l’accès à la canalisation. Les fourchettes publiées en France sont
              sur{' '}
              <Link href="/tarifs" className="font-semibold text-accent-clair underline underline-offset-2 hover:text-white">
                notre page Tarifs
              </Link>
              , le devis est gratuit.
            </p>
          </div>

          {related.length > 0 && (
            <ul className="mx-auto mt-9 grid max-w-4xl gap-5 sm:grid-cols-2" role="list">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/services/${r.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-panel border border-white/10 bg-white/[0.04] transition hover:border-accent-clair/60"
                  >
                    {r.image && (
                      <span className="relative block aspect-[16/9] w-full overflow-hidden">
                        <Image src={r.image} alt={`${r.navTitle} à ${siteConfig.city}`} fill sizes="(min-width: 640px) 45vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                      </span>
                    )}
                    <span className="flex flex-1 items-center justify-center gap-2 p-5 text-center font-display text-lg font-bold text-white sm:justify-start sm:text-left">
                      {r.navTitle}
                      <span aria-hidden="true" className="text-accent-clair">→</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}

          {articles.length > 0 && (
            <nav aria-label="Conseils liés" className="mx-auto mt-10 max-w-4xl">
              <h3 className="text-center font-display text-lg font-bold text-white sm:text-left">À lire aussi</h3>
              <ul className="mt-4 grid gap-x-8 gap-y-2.5 text-center text-[15px] sm:grid-cols-2 sm:text-left">
                {articles.map((a) => (
                  <li key={a.slug}>
                    <Link href={`/conseils/${a.slug}`} className="lien-nuit">
                      {a.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </section>

      <Faq items={service.faq} />
      <CtaBanner
        fond="bg-white"
        title={`${service.navTitle} à ${siteConfig.city} : votre devis gratuit`}
        subtitle="Trois questions, puis nous revenons vers vous avec la méthode prévue et son prix."
      />
    </>
  )
}
