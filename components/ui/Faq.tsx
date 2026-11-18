import { faqJsonLd, jsonLdScript } from '@/lib/seo'
import type { FaqItem } from '@/lib/content'

/**
 * Faq, section accordéon accessible (<details>) + JSON-LD FAQPage.
 * Rendu uniquement si des Q/R existent (aucune FAQ factice). Les Q/R viennent
 * du SEO (ST-2) / Rédacteur (ST-5) via content/*.json.
 */
export default function Faq({ items, title = 'Questions fréquentes' }: { items: FaqItem[]; title?: string }) {
  if (!items?.length) return null
  return (
    <section className="section bg-light" aria-labelledby="faq-title">
      <div className="container-site max-w-3xl">
        <div className="text-center">
          <p className="surtitre justify-center">FAQ</p>
          <h2 id="faq-title" className="font-display text-[1.7rem] font-bold leading-tight text-nuit md:text-[2.1rem]">{title}</h2>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdScript(faqJsonLd(items)) }}
        />
        <div className="mt-7 space-y-3">
          {items.map((item, i) => (
            <details
              key={i}
              className="group rounded-card border border-slate-200 bg-white shadow-sm open:shadow-md"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 text-center font-semibold text-slate-900 md:text-left marker:hidden [&::-webkit-details-marker]:hidden">
                {item.q.replace(/ ([?!:;])/g, '\u00a0$1')}
                <svg
                  className="ml-4 h-5 w-5 shrink-0 text-slate-400 transition-transform group-open:rotate-180"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </summary>
              <div className="border-t border-slate-100 px-5 pb-4 pt-3">
                <p className="text-center leading-relaxed text-slate-600 md:text-left">{item.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
