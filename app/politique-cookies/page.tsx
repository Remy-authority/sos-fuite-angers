import Link from 'next/link'
import { SITE } from '@/lib/config'
import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: "Politique de cookies",
  description: "Politique de cookies du site SOS Fuite Angers : quelles données votre navigateur conserve pendant la visite, à quoi elles servent et comment les refuser.",
  path: '/politique-cookies',
  noindex: true,
})

export default function PolitiqueCookies() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 section-cream min-h-screen">
      <Link href="/" className="font-medium mb-8 inline-block text-teal-500 hover:text-teal-400 transition-colors">← Retour à l'accueil</Link>
      <h1 className="text-3xl font-black text-ink-900 mb-8">Politique de cookies</h1>
      <div className="space-y-8 text-ink-700">
        <section><h2 className="text-xl font-bold text-ink-900 mb-3">Qu'est-ce qu'un cookie ?</h2><p>Lors de votre passage sur nos pages consacrées aux fuites d'eau, votre navigateur peut conserver quelques octets de données : c'est ce qu'on appelle un cookie.</p></section>
        <section><h2 className="text-xl font-bold text-ink-900 mb-3">Cookies utilisés</h2><p>Seuls les cookies techniques indispensables au site sont déposés. <strong>Aucun cookie publicitaire ni de suivi par un tiers.</strong></p></section>
        <section><h2 className="text-xl font-bold text-ink-900 mb-3">Gestion</h2><p>Vous pouvez refuser les cookies dans les réglages de votre navigateur : le site reste consultable.</p></section>
        <section><h2 className="text-xl font-bold text-ink-900 mb-3">Contact</h2><p>{SITE.email}</p></section>
      </div>
    </div>
  )
}
