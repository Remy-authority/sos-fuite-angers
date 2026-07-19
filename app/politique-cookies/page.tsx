import Link from 'next/link'
import { SITE } from '@/lib/config'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Politique de cookies', robots: { index: false } }

export default function PolitiqueCookies() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <Link href="/" className="font-medium mb-8 inline-block" style={{ color: '#0EA5E9' }}>← Retour à l&apos;accueil</Link>
      <h1 className="text-3xl font-black text-navy-900 mb-8">Politique de cookies</h1>
      <div className="space-y-8 text-slate-700">
        <section><h2 className="text-xl font-bold text-navy-900 mb-3">Qu&apos;est-ce qu&apos;un cookie ?</h2><p>Un petit fichier texte déposé sur votre appareil lors de la visite d&apos;un site web.</p></section>
        <section><h2 className="text-xl font-bold text-navy-900 mb-3">Cookies utilisés</h2><p>Uniquement des cookies techniques strictement nécessaires. <strong>Aucun cookie publicitaire ou tracking tiers.</strong></p></section>
        <section><h2 className="text-xl font-bold text-navy-900 mb-3">Gestion</h2><p>Configurez votre navigateur pour refuser les cookies. La navigation reste possible.</p></section>
        <section><h2 className="text-xl font-bold text-navy-900 mb-3">Contact</h2><p>{SITE.email}</p></section>
      </div>
    </main>
  )
}
