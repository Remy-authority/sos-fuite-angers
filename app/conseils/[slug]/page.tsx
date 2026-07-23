import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getArticle, getArticles, getServices } from '@/lib/content'
import { buildMetadata, articleJsonLd, jsonLdScript } from '@/lib/seo'
import { siteConfig } from '@/config/site.config'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import CtaBanner from '@/components/ui/CtaBanner'

export const dynamicParams = false

export function generateStaticParams() {
  if (!siteConfig.features.blog) return []
  return getArticles().map((a) => ({ slug: a.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const a = getArticle(params.slug)
  if (!a) return {}
  return buildMetadata({
    title: a.title,
    description: a.description,
    path: `/conseils/${a.slug}`,
    ogImage: a.cover,
  })
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticle(params.slug)
  if (!article) notFound()

  // Maillage interne automatique via front-matter relatedServices.
  const linked = getServices().filter((s) => article.relatedServices.includes(s.slug))

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(articleJsonLd(article)) }}
      />
      <Breadcrumbs
        items={[
          { name: 'Accueil', path: '/' },
          { name: 'Conseils', path: '/conseils' },
          { name: article.title, path: `/conseils/${article.slug}` },
        ]}
      />

      <article className="container-site section">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">{article.category}</p>
        <h1 className="mt-1 text-3xl md:text-4xl">{article.title}</h1>
        <time className="mt-2 block text-sm text-slate-400" dateTime={article.date}>{article.date}</time>

        <div className="prose-content mt-8">
          <MDXRemote source={article.content} />
        </div>

        {linked.length > 0 && (
          <nav aria-label="Nos services liés" className="mt-10 rounded-card bg-light p-5">
            <h2 className="text-lg">Nos services liés</h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {linked.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="rounded-full border border-slate-300 bg-white px-3 py-1.5 text-sm hover:border-primary">
                    {s.navTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </article>

      <CtaBanner />
    </>
  )
}
