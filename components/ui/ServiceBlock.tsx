import Image from 'next/image'
import { BlockIcon } from './ServiceIcon'
import Apparition from './Apparition'
import { extractNumberedSteps, decoupeParagraphes } from '@/lib/text'
import type { ContentBlock } from '@/lib/content'

/**
 * ServiceBlock, un bloc H2 de page service (refonte du 18/11/2026).
 *  - Bloc avec visuel : texte et photo côte à côte sur ordinateur (côté alterné par `inverse`),
 *    empilés et centrés au téléphone.
 *  - Bloc sans visuel : colonne centrée, icône dessinée qui se trace à l'apparition.
 *  - Corps découpé en paragraphes de 45 mots au plus (#R67), sans changer un mot ; une liste
 *    « 1. … 2. … 3. … » déjà rédigée devient des étapes numérotées.
 */
export default function ServiceBlock({
  block,
  eager = false,
  inverse = false,
}: {
  block: ContentBlock
  eager?: boolean
  inverse?: boolean
}) {
  const etapes = extractNumberedSteps(block.body)
  const avecImage = Boolean(block.image)

  const titre = (
    <h2 className={`flex flex-col items-center gap-3 font-display text-2xl font-bold leading-tight text-nuit md:text-[1.9rem] ${avecImage ? 'lg:flex-row lg:items-center' : 'md:flex-row md:justify-center'}`}>
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-card bg-primary/10 text-primary" aria-hidden="true">
        <BlockIcon heading={block.heading} className="h-6 w-6" anime />
      </span>
      <span>{block.heading}</span>
    </h2>
  )

  const corps = etapes ? (
    <>
      {etapes.lead && <p className="mt-4 leading-relaxed text-slate-700">{etapes.lead}</p>}
      <ol className={`mt-5 grid gap-3 text-left sm:grid-cols-2${avecImage ? ' lg:grid-cols-1' : ''}`} role="list">
        {etapes.steps.map((step, i) => {
          const seule = i === etapes.steps.length - 1 && etapes.steps.length % 2 === 1
          return (
            <li
              key={i}
              className={`flex gap-3 rounded-card border border-slate-200 bg-white p-4 shadow-sm${seule ? ` sm:col-span-2${avecImage ? ' lg:col-span-1' : ''}` : ''}`}
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-sm bg-accent text-sm font-bold text-white" aria-hidden="true">
                {i + 1}
              </span>
              <span className="text-[15px] leading-relaxed text-slate-700">{step}</span>
            </li>
          )
        })}
      </ol>
    </>
  ) : (
    decoupeParagraphes(block.body).map((p, i) => (
      <p key={i} className="mt-4 leading-relaxed text-slate-700">
        {p}
      </p>
    ))
  )

  if (!avecImage) {
    return (
      <Apparition className="glisse mx-auto max-w-3xl text-center md:text-left">
        {titre}
        <div className="md:text-left">{corps}</div>
      </Apparition>
    )
  }

  return (
    <Apparition className="glisse grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
      <div className={`text-center lg:text-left ${inverse ? 'lg:order-2' : ''}`}>
        {titre}
        {corps}
      </div>
      <figure className={inverse ? 'lg:order-1' : ''}>
        <div className="relative aspect-[3/2] w-full overflow-hidden rounded-panel shadow-panel">
          <Image
            src={block.image!}
            alt={block.imageAlt || block.heading}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
            loading={eager ? 'eager' : 'lazy'}
          />
        </div>
        {block.imageCaption && <figcaption className="mt-2 text-center text-sm text-slate-500 lg:text-left">{block.imageCaption}</figcaption>}
      </figure>
    </Apparition>
  )
}
