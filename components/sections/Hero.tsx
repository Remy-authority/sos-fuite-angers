import { getImageProps } from 'next/image'
import LeadForm from '@/components/ui/LeadForm'

/**
 * Bloc 1 de l'accueil, FIXE (décision Rémy 18/11/2026 : aucun scrollytelling ici).
 *
 * - Photo de la prestation ENTIÈRE en plein cadre : un technicien qui ausculte une salle de bain
 *   à la caméra thermique, l'écran montre la tache froide de la fuite. Deux cadrages (art
 *   direction) : paysage à partir de 1024 px, vertical au téléphone et à la tablette.
 *   Sur ordinateur, photo calée à droite et texte limité à 600 px : la caméra tombe dans
 *   l'espace entre le texte et le formulaire, jamais cachée derrière. Au téléphone, la photo
 *   verticale est agrandie (162 %) et remontée (-60 %) : l'écran de la caméra apparaît AU-DESSUS
 *   du titre au lieu de tomber derrière le formulaire.
 * - Téléphone et tablette : titre court, description de deux lignes, formulaire juste dessous,
 *   le tout centré en largeur ET en hauteur dans l'écran visible sous l'en-tête (#R70).
 * - Ordinateur : titre et description à gauche, formulaire à droite, centrés en hauteur, visibles
 *   sans défiler (#R66).
 * - Le formulaire n'apparaît JAMAIS en fondu ni en glissement (#R84) : aucune animation ici.
 */
const PAYSAGE = '/accueil/hero-recherche-fuite-angers.jpg'
const PORTRAIT = '/accueil/hero-recherche-fuite-angers-portrait.jpg'

export default function Hero() {
  const commun = { alt: '', priority: true, quality: 72 }
  const {
    props: { srcSet: srcPaysage },
  } = getImageProps({ ...commun, src: PAYSAGE, width: 3136, height: 1344, sizes: '100vw' })
  const {
    props: { srcSet: srcPortrait, ...img },
  } = getImageProps({ ...commun, src: PORTRAIT, width: 1536, height: 2752, sizes: '180vw' })

  return (
    <section className="relative isolate overflow-hidden bg-nuit" aria-labelledby="titre-hero">
      <picture>
        <source media="(min-width: 1024px)" srcSet={srcPaysage} sizes="100vw" />
        <source srcSet={srcPortrait} sizes="180vw" />
        {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
        <img {...img} className="absolute inset-x-0 top-[-60%] -z-10 h-[162%] w-full object-cover object-[10%_50%] lg:top-0 lg:h-full lg:object-right" />
      </picture>
      <div
        className="absolute inset-0 -z-10 bg-neutral-950/50 lg:bg-transparent lg:bg-[linear-gradient(90deg,rgb(6_20_38/0.66)_0%,rgb(6_20_38/0.45)_48%,rgb(6_20_38/0.12)_100%)]"
        aria-hidden="true"
      />

      <div className="container-site grid lg:max-w-7xl min-h-[calc(100svh-4.25rem)] content-center items-stretch gap-6 py-7 sm:gap-8 lg:grid-cols-[minmax(0,600px)_minmax(0,450px)] lg:justify-between lg:gap-14 lg:py-12">
        <div className="flex flex-col justify-center text-center lg:text-left">
          <h1
            id="titre-hero"
            className="font-display text-[clamp(1.75rem,7.6vw,3.6rem)] font-bold leading-[1.08] text-white [text-shadow:0_2px_18px_rgb(0_0_0/0.35)] lg:text-[clamp(2.5rem,4.5vw,3.6rem)]"
          >
            Recherche de fuite d&apos;eau <span className="whitespace-nowrap text-accent-clair">à Angers</span>
          </h1>
          <p className="mx-auto mt-3 max-w-[34rem] text-[clamp(0.9rem,3.9vw,1.2rem)] leading-snug text-white/90 [text-shadow:0_1px_10px_rgb(0_0_0/0.4)] sm:mt-4 lg:mx-0">
            Nous trouvons la fuite sans casser&nbsp;: caméra thermique, gaz traceur, écoute.
          </p>
        </div>
        <div className="mx-auto flex w-full max-w-[450px] flex-col justify-center">
          <LeadForm ecran1 idPrefix="h1-" />
        </div>
      </div>
    </section>
  )
}
