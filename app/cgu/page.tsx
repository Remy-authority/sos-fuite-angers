import Link from 'next/link'
import { SITE } from '@/lib/config'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: "Conditions Générales d'Utilisation", robots: { index: false } }

export default function CGU() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <Link href="/" className="font-medium mb-8 inline-block" style={{ color: '#0EA5E9' }}>← Retour à l&apos;accueil</Link>
      <h1 className="text-3xl font-black text-navy-900 mb-8">Conditions Générales d&apos;Utilisation</h1>
      <div className="space-y-8 text-slate-700">
        <section><h2 className="text-xl font-bold text-navy-900 mb-3">1. Acceptation</h2><p>En naviguant sur {SITE.name}, vous acceptez les présentes CGU.</p></section>
        <section><h2 className="text-xl font-bold text-navy-900 mb-3">2. Services</h2><p>Ce site présente les services de recherche de fuite d&apos;eau et d&apos;assèchement à {SITE.commune} ({SITE.communeCode}). Les tarifs affichés sont indicatifs.</p></section>
        <section><h2 className="text-xl font-bold text-navy-900 mb-3">3. Responsabilité</h2><p>L&apos;éditeur ne peut être tenu responsable des dommages indirects résultant de l&apos;utilisation du site.</p></section>
        <section><h2 className="text-xl font-bold text-navy-900 mb-3">4. Droit applicable</h2><p>CGU régies par le droit français. Tout litige relève des tribunaux français.</p></section>
      </div>
    </main>
  )
}
