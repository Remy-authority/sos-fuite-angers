'use client'

import { useState } from 'react'
import { siteConfig } from '@/config/site.config'

/**
 * LeadForm — formulaire de capture simple (1 écran, friction minimale).
 * Champs : nom, téléphone, ville/CP, type de problème, message (optionnel).
 * - Honeypot anti-spam (`company`, masqué).
 * - Soumission JS → POST /api/contact (JSON) → redirection /merci.
 * - Fallback sans JS : POST natif vers /api/contact (redirection serveur /merci).
 * Aucun texte métier en dur non paramétrable ; libellés = UI.
 */
const PROBLEMES = [
  'Recherche de fuite',
  'Fuite urgente',
  'Canalisation enterrée',
  'Fuite encastrée (mur/sol)',
  'Fuite de piscine',
  'Dégât des eaux / assèchement',
  'Autre',
]

export default function LeadForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'error'>('idle')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('bad status')
      window.location.href = '/merci'
    } catch {
      setStatus('error')
    }
  }

  return (
    <form
      action="/api/contact"
      method="POST"
      onSubmit={onSubmit}
      className="card grid gap-4"
      aria-label="Formulaire de contact"
    >
      {/* Honeypot : rempli seulement par les bots → rejeté côté serveur */}
      <div className="hidden" aria-hidden="true">
        <label>
          Ne pas remplir
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="nom" className="mb-1 block text-sm font-medium text-slate-700">
            Nom <span className="text-accent">*</span>
          </label>
          <input id="nom" name="nom" required autoComplete="name" className="field" />
        </div>
        <div>
          <label htmlFor="telephone" className="mb-1 block text-sm font-medium text-slate-700">
            Téléphone <span className="text-accent">*</span>
          </label>
          <input
            id="telephone"
            name="telephone"
            type="tel"
            required
            autoComplete="tel"
            inputMode="tel"
            className="field"
          />
        </div>
      </div>

      <div>
        <label htmlFor="ville" className="mb-1 block text-sm font-medium text-slate-700">
          Ville / code postal
        </label>
        <input id="ville" name="ville" autoComplete="postal-code" className="field" />
      </div>

      <div>
        <label htmlFor="probleme" className="mb-1 block text-sm font-medium text-slate-700">
          Type de problème
        </label>
        <select id="probleme" name="probleme" className="field" defaultValue="">
          <option value="" disabled>
            Choisir…
          </option>
          {PROBLEMES.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-slate-700">
          Message (optionnel)
        </label>
        <textarea id="message" name="message" rows={4} className="field" />
      </div>

      <p className="text-xs text-slate-500">
        En envoyant ce formulaire, vous acceptez d'être recontacté au sujet de votre
        demande. Vos données ne sont pas revendues (voir notre{' '}
        <a href="/politique-confidentialite" className="underline">
          politique de confidentialité
        </a>
        ).
      </p>

      {status === 'error' && (
        <p role="alert" className="text-sm font-medium text-red-600">
          L'envoi a échoué. Appelez-nous directement au {siteConfig.phoneDisplay}.
        </p>
      )}

      <button type="submit" className="btn-accent w-full" disabled={status === 'sending'}>
        {status === 'sending' ? 'Envoi…' : 'Être rappelé rapidement'}
      </button>
    </form>
  )
}
