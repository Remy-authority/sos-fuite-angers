import Link from 'next/link'
import { SITE } from '@/lib/config'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Demande reçue', robots: { index: false } }

export default function MerciPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="max-w-md text-center">
        <div className="text-6xl mb-6">✅</div>
        <h1 className="text-3xl font-black text-navy-900 mb-4">Demande reçue !</h1>
        <p className="text-slate-600 mb-8">
          Merci pour votre message. Nous vous recontactons rapidement. Pour une urgence, appelez directement.
        </p>
        <div className="flex flex-col gap-3">
          <a href={SITE.phoneHref} className="btn-urgent py-4 text-lg justify-center">📞 {SITE.phone}</a>
          <Link href="/" className="font-medium" style={{ color: '#0EA5E9' }}>← Retour à l&apos;accueil</Link>
        </div>
      </div>
    </main>
  )
}
