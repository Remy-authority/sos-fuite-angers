import { BlockIcon } from './ServiceIcon'
import { extractNumberedSteps } from '@/lib/text'
import type { ContentBlock } from '@/lib/content'

/**
 * ServiceBlock — un bloc H2 de page service (content/services/*.json).
 *
 * Aère le mur de texte sans jamais changer le texte lui-même (SEO/GEO déjà bon,
 * on ne touche qu'au visuel) :
 *  - icône badge à côté du H2, déduite du titre (voir `matchBlockIcon`)
 *  - si le corps contient une liste "1. … 2. … 3. …" déjà rédigée, elle est
 *    détectée et rendue en checklist numérotée au lieu d'un paragraphe brut.
 */
export default function ServiceBlock({ block }: { block: ContentBlock }) {
  const parsed = extractNumberedSteps(block.body)

  return (
    <section>
      <h2 className="flex items-center gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary" aria-hidden="true">
          <BlockIcon heading={block.heading} className="h-5 w-5" />
        </span>
        {block.heading}
      </h2>

      {parsed ? (
        <>
          {parsed.lead && <p>{parsed.lead}</p>}
          <ol className="mt-4 grid gap-3 sm:grid-cols-2">
            {parsed.steps.map((step, i) => (
              <li key={i} className="flex gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white" aria-hidden="true">
                  {i + 1}
                </span>
                <span className="text-sm leading-relaxed text-slate-700">{step}</span>
              </li>
            ))}
          </ol>
        </>
      ) : (
        <p>{block.body}</p>
      )}
    </section>
  )
}
