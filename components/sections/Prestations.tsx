import Image from 'next/image'
import Link from 'next/link'
import Apparition from '@/components/ui/Apparition'
import { ServiceIcon } from '@/components/ui/ServiceIcon'
import type { Service } from '@/lib/content'

/**
 * Prestations de l'accueil, présentées UNE PAR UNE (#R71) : jamais de carrousel ni de slides.
 * Six cartes photo de même hauteur (trois par ligne sur ordinateur, deux sur tablette, empilées
 * au téléphone). Chaque photo montre la prestation ENTIÈRE, une phrase de 15 mots au plus, une
 * icône du métier qui se trace à l'apparition. Le prix n'est donné qu'en un paragraphe, relié à
 * /tarifs (#R46).
 */
const PHRASES: Record<string, string> = {
  'detection-fuite-non-destructive': 'Caméra thermique, gaz traceur, écoute : la fuite localisée sans ouvrir murs ni sols.',
  'urgence-fuite-eau': 'Une fuite active : nous vous aidons à couper l’eau, puis nous la localisons.',
  'recherche-fuite-canalisation-enterree': 'Jardin détrempé, terrain qui s’affaisse : la conduite enterrée localisée sans tranchée inutile.',
  'recherche-fuite-encastree': 'Tache au mur, parquet qui gonfle, plancher chauffant tiède : la fuite cachée trouvée.',
  'recherche-fuite-piscine': 'Un bassin qui baisse plus que l’évaporation : liner, buses et tuyaux contrôlés.',
  'assechement-degat-des-eaux': 'Après un dégât des eaux : l’origine trouvée, un rapport pour l’assureur, puis l’assèchement.',
}

export default function Prestations({ services }: { services: Service[] }) {
  return (
    <Apparition as="section" className="section bg-white" aria-labelledby="prestations-titre">
      <div className="container-site">
        <div className="glisse text-center">
          <p className="surtitre justify-center">Nos prestations</p>
          <h2 id="prestations-titre" className="mx-auto max-w-2xl font-display text-[1.7rem] font-bold leading-tight text-nuit [text-wrap:balance] md:text-[2.1rem]">
            Chaque fuite a sa méthode de recherche
          </h2>
        </div>

        <ul className="mx-auto mt-8 grid gap-5 md:mt-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-6" role="list">
          {services.map((s, i) => (
            <li key={s.slug} className="glisse" style={{ ['--retard' as string]: `${(i % 3) * 120}ms` }}>
              <Link
                href={`/services/${s.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-panel border border-slate-200 bg-white shadow-panel transition hover:-translate-y-0.5 hover:border-primary/40"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                  {s.image && (
                    <Image
                      src={s.image}
                      alt={`${s.navTitle} à Angers`}
                      fill
                      sizes="(min-width: 1152px) 360px, (min-width: 768px) 46vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  )}
                </div>
                <div className="flex flex-1 flex-col items-center p-5 text-center md:items-start md:text-left">
                  <span className="flex items-center gap-2.5">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-card bg-primary/10 text-primary">
                      <ServiceIcon icon={s.icon} anime className="h-5 w-5" />
                    </span>
                    <h3 className="font-display text-lg font-bold leading-snug text-nuit">{s.navTitle}</h3>
                  </span>
                  <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-slate-600">{PHRASES[s.slug] ?? s.intro}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-primary">
                    Voir la prestation
                    <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14m-6-6 6 6-6 6" />
                    </svg>
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <p className="glisse mx-auto mt-8 max-w-2xl text-center text-[15px] leading-relaxed text-slate-600">
          Une recherche de fuite non destructive coûte en général de 200 à 500 €, selon la méthode et l’accès.{' '}
          <Link href="/tarifs" className="font-semibold text-primary underline underline-offset-2">
            Nos tarifs détaillés
          </Link>
        </p>
      </div>
    </Apparition>
  )
}
