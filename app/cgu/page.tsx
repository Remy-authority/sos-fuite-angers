import Link from 'next/link'
import { SITE } from '@/lib/config'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: "Conditions générales d'utilisation", robots: { index: false } }

export default function CGU() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16 section-cream min-h-screen">
      <Link href="/" className="font-medium mb-8 inline-block text-teal-500 hover:text-teal-400 transition-colors">← Retour à l'accueil</Link>
      <h1 className="text-3xl font-black text-ink-900 mb-8">Conditions générales d'utilisation</h1>
      <div className="space-y-8 text-ink-700">
        <section><h2 className="text-xl font-bold text-ink-900 mb-3">1. Acceptation</h2><p>En naviguant sur {SITE.name}, vous acceptez les présentes conditions.</p></section>
        <section><h2 className="text-xl font-bold text-ink-900 mb-3">2. Services</h2><p>Ce site présente nos services de recherche de fuite d'eau et d'assèchement à {SITE.commune} ({SITE.communeCode}). Devis gratuit avant toute intervention.</p></section>
        <section><h2 className="text-xl font-bold text-ink-900 mb-3">3. Responsabilité</h2><p>Les informations publiées ici sont générales : elles ne remplacent pas le diagnostic fait sur place, et nous ne répondons pas des conséquences d'un usage du site hors de ce cadre.</p></section>
        <section><h2 className="text-xl font-bold text-ink-900 mb-3">4. Droit applicable</h2><p>Le droit français s'applique à ces conditions ; un désaccord qui ne se règle pas à l'amiable sera porté devant la juridiction française compétente.</p></section>
      </div>
    </main>
  )
}
