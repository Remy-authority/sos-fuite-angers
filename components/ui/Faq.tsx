import { faqJsonLd, jsonLdScript } from '@/lib/seo'
import type { FaqItem } from '@/lib/content'

/**
 * Faq — section accordéon accessible (<details>) + JSON-LD FAQPage.
 * Rendu uniquement si des Q/R existent (aucune FAQ factice). Les Q/R viennent
 * du SEO (ST-2) / Rédacteur (ST-5) via content/*.json.
 */
export default function Faq({ items, title = 'Questions fréquentes' }: { items: FaqItem[]; title?: string }) {
  if (!items?.length) return null
  return (
    <section className="section" aria-labelledby="faq-title">
      <div className="container-site max-w-3xl">
        <h2 id="faq-title" className="text-2xl md:text-3xl">{title}</h2>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdScript(faqJsonLd(items)) }}
        />
        <div className="mt-6 divide-y divide-slate-200">
          {items.map((item, i) => (
            <details key={i} className="group py-4">
              <summary className="cursor-pointer list-none font-semibold text-slate-900 marker:hidden">
                {item.q}
              </summary>
              <p className="mt-2 text-slate-600">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
