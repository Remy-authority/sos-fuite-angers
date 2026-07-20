import Link from 'next/link'
import { SITE } from '@/lib/config'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Mentions legales', robots: { index: false } }

export default function MentionsLegales() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16 section-cream min-h-screen">
      <Link href="/" className="font-medium mb-8 inline-block text-teal-500 hover:text-teal-400 transition-colors">← Retour a l'accueil</Link>
      <h1 className="text-3xl font-black text-ink-900 mb-8">Mentions legales</h1>
      <div className="space-y-8 text-ink-700">
        <section>
          <h2 className="text-xl font-bold text-ink-900 mb-3">Editeur du site</h2>
          <p><strong>Denomination :</strong> {SITE.name}</p>
          <p><strong>Commune :</strong> {SITE.commune} ({SITE.postalCode}), France</p>
          <p><strong>Contact :</strong> {SITE.phone}</p>
          <p className="mt-2 text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
            ⚠️ Site en cours de creation — informations completes apres signature du contrat artisan.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-ink-900 mb-3">Hebergement</h2>
          <p>Heberge par <strong>Vercel Inc.</strong>, 340 Pine Street, Suite 701, San Francisco, CA 94104, USA.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-ink-900 mb-3">Propriete intellectuelle</h2>
          <p>L'ensemble du contenu de ce site est protege par le droit de la propriete intellectuelle. Toute reproduction interdite sans autorisation prealable.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-ink-900 mb-3">Donnees personnelles (RGPD)</h2>
          <p>Les donnees collectees (nom, telephone, message) sont utilisees uniquement pour repondre a votre demande. Droit d'acces, modification et suppression : {SITE.email}</p>
        </section>
      </div>
    </main>
  )
}
