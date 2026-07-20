import Link from 'next/link'
import { SITE } from '@/lib/config'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Demande recue', robots: { index: false } }

export default function MerciPage() {
  return (
    <main className="min-h-screen flex items-center justify-center section-cream px-4">
      <div className="max-w-md text-center">
        <div className="text-6xl mb-6">✅</div>
        <h1 className="text-3xl font-black text-ink-900 mb-4">Demande recue !</h1>
        <p className="text-ink-500 mb-8">
          Merci pour votre message. Nous vous recontactons rapidement. Pour une urgence, appelez directement.
        </p>
        <div className="flex flex-col gap-3">
          <a href={SITE.phoneHref} className="btn-cta py-4 text-lg justify-center">📞 {SITE.phone}</a>
          <Link href="/" className="font-medium text-teal-500 hover:text-teal-400 transition-colors">← Retour a l'accueil</Link>
        </div>
      </div>
    </main>
  )
}
