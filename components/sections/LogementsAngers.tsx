import Image from 'next/image'
import Apparition from '@/components/ui/Apparition'
import { siteConfig } from '@/config/site.config'

/**
 * Bloc 6 de l'accueil (18/11/2026) : la recherche de fuite selon le logement, à Angers et autour.
 * Photo de LA PRESTATION (caméra thermique sur un mur), quatre cas concrets, puis les quartiers
 * d'Angers couverts (liste de la config). Aucun chiffre, aucune promesse de délai.
 */
const CAS = [
  {
    titre: 'Centre-ville et Doutre',
    texte:
      'Immeubles anciens en tuffeau, canalisations reprises au fil des travaux et encastrées dans les murs : la caméra thermique et l’écoute évitent d’ouvrir à l’aveugle.',
  },
  {
    titre: 'Copropriétés des quartiers',
    texte:
      'La fuite part souvent d’une colonne commune ou de l’appartement du dessus. Notre rapport aide le syndic et les assureurs à trancher.',
  },
  {
    titre: 'Salle de bain et cuisine',
    texte:
      'Joint de douche, siphon, flexible du lave-vaisselle : beaucoup de fuites naissent dans les pièces d’eau. Nous testons chaque point avant de conclure.',
  },
  {
    titre: 'Maisons avec jardin',
    texte:
      'Entre le compteur et la maison, la canalisation enterrée peut fuir sans trace visible. Le gaz traceur la suit sous la pelouse ou l’allée.',
  },
]

export default function LogementsAngers() {
  const quartiers = siteConfig.serviceArea.districts
  const liste = `${quartiers.slice(0, -1).join(', ')} et ${quartiers[quartiers.length - 1].toLowerCase()}`

  return (
    <Apparition as="section" className="section bg-neige" aria-labelledby="logements-titre">
      <div className="container-site">
        <h2 id="logements-titre" className="glisse mx-auto max-w-2xl text-center font-display text-[1.7rem] font-bold leading-tight text-nuit [text-wrap:balance] md:text-[2.1rem]">
          À {siteConfig.city}, chaque logement cache ses fuites
        </h2>
        <p className="glisse mx-auto mt-4 max-w-2xl text-center leading-relaxed text-slate-700">
          La façon de chercher dépend du bâti. Voici ce que nous rencontrons le plus souvent à {siteConfig.city} et dans les communes autour.
        </p>

        <div className="mt-8 grid items-stretch gap-6 md:mt-10 lg:grid-cols-12 lg:gap-8">
          <figure className="glisse relative aspect-[3/2] w-full overflow-hidden rounded-panel shadow-panel lg:col-span-5 lg:aspect-auto lg:min-h-full">
            <Image
              src="/services/recherche-fuite-encastree-mur.jpg"
              alt="Caméra thermique pointée sur un mur : la trace froide d’une canalisation qui fuit apparaît à l’écran"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </figure>
          <ul className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:col-span-7" role="list">
            {CAS.map((c, i) => (
              <li
                key={c.titre}
                className="glisse flex h-full flex-col rounded-card border border-slate-200 bg-white p-5 text-center shadow-sm sm:text-left"
                style={{ ['--retard' as string]: `${i * 110}ms` }}
              >
                <h3 className="font-display text-lg font-bold text-nuit">{c.titre}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{c.texte}</p>
              </li>
            ))}
          </ul>
        </div>

        <p className="glisse mx-auto mt-8 max-w-3xl text-center text-[15px] leading-relaxed text-slate-700">
          Nous intervenons dans tous les quartiers d’{siteConfig.city} : {liste}.
        </p>
      </div>
    </Apparition>
  )
}
