import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getServices } from '@/lib/content'
import { buildMetadata } from '@/lib/seo'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import Faq from '@/components/ui/Faq'
import CtaBanner from '@/components/ui/CtaBanner'
import Apparition from '@/components/ui/Apparition'

/**
 * Page des prestations (créée le 18/11/2026 : le pied de page et les menus mènent à /services,
 * qui répondait 404). Six cartes de même hauteur, une phrase par carte, puis « quel signe,
 * quelle recherche », la FAQ et le formulaire.
 */
export const metadata: Metadata = buildMetadata({
  title: 'Nos prestations de recherche de fuite',
  description:
    'Recherche de fuite d’eau à Angers : détection non destructive, fuite encastrée, canalisation enterrée, piscine, urgence et assèchement après dégât des eaux.',
  path: '/services',
  ogImage: '/services/detection-fuite-non-destructive.jpg',
})

/** Une phrase par carte, écrite pour cette page. */
const ACCROCHE: Record<string, string> = {
  'detection-fuite-non-destructive': 'Thermographie, gaz traceur et écoute combinés pour situer la fuite au mur près.',
  'urgence-fuite-eau': 'L’eau coule et ne s’arrête pas : on coupe, on protège, puis on cherche.',
  'recherche-fuite-canalisation-enterree': 'Compteur qui tourne sans raison, pelouse spongieuse : la conduite du jardin suivie pas à pas.',
  'recherche-fuite-encastree': 'Tuyau dans la cloison, sous la chape ou dans le plancher chauffant, trouvé sans démolir.',
  'recherche-fuite-piscine': 'Liner, skimmer, refoulements et réseau enterré testés un à un, bassin plein.',
  'assechement-degat-des-eaux': 'La cause d’abord, puis le séchage des murs et des sols mesuré jusqu’au bout.',
}

/** Quel signe, quelle recherche : repères pour se situer avant le devis. */
const SIGNES = [
  { signe: 'Tache qui grandit au plafond ou au mur', piste: 'Fuite encastrée', lien: '/services/recherche-fuite-encastree' },
  { signe: 'Compteur qui tourne, tous robinets coupés', piste: 'Canalisation enterrée', lien: '/services/recherche-fuite-canalisation-enterree' },
  { signe: 'Niveau du bassin qui baisse vite', piste: 'Piscine', lien: '/services/recherche-fuite-piscine' },
  { signe: 'Eau qui coule en ce moment', piste: 'Urgence', lien: '/services/urgence-fuite-eau' },
]

const FAQ = [
  {
    q: 'Quelle méthode utilisez-vous pour trouver une fuite ?',
    a: 'Cela dépend du réseau et des signes. La caméra thermique repère une conduite chaude ou humide, le gaz traceur sort par la fissure, l’écoute suit le bruit de l’eau. Souvent, deux méthodes se recoupent.',
  },
  {
    q: 'Réparez-vous la fuite une fois trouvée ?',
    a: 'Nous marquons le point exact et vous remettons un rapport. La réparation se fait ensuite au bon endroit, avec une ouverture limitée, par nous ou par le plombier de votre choix.',
  },
  {
    q: 'Combien coûte une recherche de fuite ?',
    a: 'Le prix dépend de la méthode et de l’accès. Les fourchettes observées en France et nos repères sont sur la page Tarifs ; le devis est gratuit.',
  },
]

export default function ServicesHub() {
  const services = getServices()
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Accueil', path: '/' },
          { name: 'Prestations', path: '/services' },
        ]}
      />

      <section className="container-site pb-10 pt-6 md:pb-14">
        <div className="mx-auto max-w-3xl text-center md:mx-0 md:text-left">
          <p className="surtitre">Prestations</p>
          <h1 className="font-display text-[1.75rem] font-bold leading-tight text-nuit sm:text-4xl md:text-[2.6rem]">
            Nos prestations de recherche de fuite à Angers
          </h1>
          <p className="mt-5 text-[1.05rem] leading-relaxed text-slate-700">
            Nous localisons les fuites d’eau à Angers et dans les communes à 40 km autour, sans casser pour chercher. Chaque
            recherche se termine par un point marqué et un rapport.
          </p>
        </div>

        <ul className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" role="list">
          {services.map((s, i) => (
            <Apparition as="li" key={s.slug} className="glisse" style={{ ['--retard' as string]: `${(i % 3) * 90}ms` }}>
              <Link
                href={`/services/${s.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-panel border border-slate-200 bg-white shadow-panel transition hover:-translate-y-0.5 hover:border-primary/40"
              >
                {s.image && (
                  <span className="relative block aspect-[16/10] w-full overflow-hidden bg-slate-100">
                    <Image
                      src={s.image}
                      alt={`${s.navTitle} à Angers`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </span>
                )}
                <span className="flex flex-1 flex-col items-center p-5 text-center sm:items-start sm:text-left">
                  <span className="font-display text-lg font-bold leading-snug text-nuit group-hover:text-primary">{s.navTitle}</span>
                  <span className="mt-2 block text-[15px] leading-relaxed text-slate-600">{ACCROCHE[s.slug] ?? s.intro}</span>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-bold text-primary">
                    Voir la prestation
                    <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </span>
                </span>
              </Link>
            </Apparition>
          ))}
        </ul>
      </section>

      <section className="section bg-nuit text-white" aria-labelledby="signes-titre">
        <div className="container-site grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="text-center lg:col-span-5 lg:text-left">
            <h2 id="signes-titre" className="font-display text-2xl font-bold text-white md:text-3xl">Quel signe, quelle recherche ?</h2>
            <p className="mt-3 leading-relaxed text-white/80">
              Quatre repères pour vous situer avant notre venue. Les fourchettes de prix sont sur{' '}
              <Link href="/tarifs" className="font-semibold text-accent-clair underline underline-offset-2 hover:text-white">
                notre page Tarifs
              </Link>
              .
            </p>
          </div>
          <Apparition className="glisse lg:col-span-7">
            <ul className="divide-y divide-white/10 rounded-panel border border-white/10 bg-white/[0.04]">
              {SIGNES.map((c) => (
                <li key={c.signe} className="flex flex-col items-center gap-1 px-5 py-4 text-center sm:flex-row sm:justify-between sm:gap-6 sm:text-left">
                  <span className="text-white/85">{c.signe}</span>
                  <Link href={c.lien} className="font-semibold sm:whitespace-nowrap" style={{ color: '#FCD680' }}>
                    {c.piste} →
                  </Link>
                </li>
              ))}
            </ul>
          </Apparition>
        </div>
      </section>

      <Faq items={FAQ} title="Questions sur nos prestations" />
      <CtaBanner fond="bg-white" />
    </>
  )
}
