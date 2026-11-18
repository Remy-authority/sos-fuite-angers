import Link from 'next/link'
import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'

// Page utilitaire post-soumission → noindex (cf. brief SEO §7).
export const metadata: Metadata = buildMetadata({
  title: 'Demande reçue',
  description: 'Votre demande a bien été reçue.',
  path: '/merci',
  noindex: true,
})

export default function MerciPage() {
  return (
    <section className="container-site section flex min-h-[50vh] items-center justify-center text-center">
      <div className="max-w-md">
        <h1 className="mt-4 text-3xl">Demande reçue</h1>
        <p className="mt-3 text-slate-600">
          Merci, nous vous rappelons au numéro indiqué pour convenir du passage.
        </p>
        <div className="mt-6 flex flex-col items-center gap-3">
          <Link href="/" className="text-primary underline">← Retour à l'accueil</Link>
        </div>
      </div>
    </section>
  )
}
