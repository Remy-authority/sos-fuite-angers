import Link from 'next/link'
import { SITE } from '@/lib/config'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Mentions légales', robots: { index: false } }

export default function MentionsLegales() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <Link href="/" className="font-medium mb-8 inline-block" style={{ color: '#0EA5E9' }}>← Retour à l&apos;accueil</Link>
      <h1 className="text-3xl font-black text-navy-900 mb-8">Mentions légales</h1>
      <div className="space-y-8 text-slate-700">
        <section>
          <h2 className="text-xl font-bold text-navy-900 mb-3">Éditeur du site</h2>
          <p><strong>Dénomination :</strong> {SITE.name}</p>
          <p><strong>Commune :</strong> {SITE.commune} ({SITE.postalCode}), France</p>
          <p><strong>Contact :</strong> {SITE.phone}</p>
          <p className="mt-2 text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
            ⚠️ Site en cours de création — informations complètes après signature du contrat artisan.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-navy-900 mb-3">Hébergement</h2>
          <p>Hébergé par <strong>Vercel Inc.</strong>, 340 Pine Street, Suite 701, San Francisco, CA 94104, USA.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-navy-900 mb-3">Propriété intellectuelle</h2>
          <p>L&apos;ensemble du contenu de ce site est protégé par le droit de la propriété intellectuelle. Toute reproduction interdite sans autorisation préalable.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-navy-900 mb-3">Données personnelles (RGPD)</h2>
          <p>Les données collectées (nom, téléphone, message) sont utilisées uniquement pour répondre à votre demande. Droit d&apos;accès, modification et suppression : {SITE.email}</p>
        </section>
      </div>
    </main>
  )
}
