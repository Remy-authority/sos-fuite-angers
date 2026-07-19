'use client'

import { useState } from 'react'
import { SITE } from '@/lib/config'

const TYPES = [
  { id: 'fuite-eau', label: "Fuite d'eau", icon: '💧' },
  { id: 'degat-eaux', label: 'Dégât des eaux', icon: '🌊' },
  { id: 'fuite-gaz', label: 'Fuite de gaz', icon: '🔥' },
  { id: 'canalisation', label: 'Canalisation bouchée', icon: '🔧' },
  { id: 'asse', label: 'Assèchement', icon: '🌬️' },
  { id: 'autre', label: 'Autre problème', icon: '❓' },
]

type FormData = {
  type: string
  nom: string
  telephone: string
  adresse: string
  message: string
}

export default function Contact() {
  const [step, setStep] = useState(1)
  const [data, setData] = useState<FormData>({ type: '', nom: '', telephone: '', adresse: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  function nextStep() { setStep((s) => Math.min(s + 1, 3)) }
  function prevStep() { setStep((s) => Math.max(s - 1, 1)) }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      setSent(true)
    } catch {
      setSent(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-ch-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — contact info */}
          <div className="space-y-6">
            <div>
              <span className="badge-red inline-flex mb-4">Nous contacter</span>
              <h2 className="section-title mt-2">Appelez ou écrivez-nous</h2>
              <div className="red-line mt-5" />
            </div>
            <p className="text-gray-400 text-lg">
              Une urgence ? Appelez directement. Une question ou un devis ?
              Remplissez le formulaire en 3 étapes — réponse sous 2h.
            </p>

            <div className="space-y-3">
              <a
                href={SITE.phoneHref}
                className="dark-card-hover p-4 flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-rouge-600 flex items-center justify-center text-white text-2xl shrink-0 shadow-lg shadow-rouge-600/30">
                  📞
                </div>
                <div>
                  <p className="font-black text-white text-xl group-hover:text-rouge-400 transition-colors">{SITE.phone}</p>
                  <p className="text-gray-500 text-sm">Disponible 7j/7 — Réponse immédiate</p>
                </div>
              </a>

              <div className="dark-card p-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-ch-600 flex items-center justify-center text-2xl shrink-0">
                  📍
                </div>
                <div>
                  <p className="font-bold text-white">{SITE.commune} ({SITE.communeCode})</p>
                  <p className="text-gray-500 text-sm">{SITE.commune} + communes voisines (~30 km)</p>
                </div>
              </div>

              <div className="dark-card p-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-ch-600 flex items-center justify-center text-2xl shrink-0">
                  ✉️
                </div>
                <div>
                  <p className="font-bold text-white">{SITE.email}</p>
                  <p className="text-gray-500 text-sm">Réponse sous 24h</p>
                </div>
              </div>
            </div>

            <div className="dark-card border-or-700/30 p-5">
              <h3 className="font-bold text-or-400 mb-2">💡 En cas de fuite active</h3>
              <p className="text-gray-500 text-sm">
                Coupez l&apos;arrivée d&apos;eau générale (robinet sous évier ou au compteur),
                puis appelez-nous immédiatement au {SITE.phone}.
              </p>
            </div>
          </div>

          {/* Right — multi-step form */}
          <div className="dark-card p-8">
            {sent ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-20 h-20 rounded-full bg-verdant-900/60 border border-verdant-700 flex items-center justify-center text-4xl mx-auto">
                  ✅
                </div>
                <h3 className="text-white font-bold text-xl">Demande envoyée !</h3>
                <p className="text-gray-400">
                  Nous vous recontacterons sous 2h. Pour toute urgence,
                  appelez directement le {SITE.phone}.
                </p>
                <a href={SITE.phoneHref} className="btn-red inline-flex mt-2">
                  <span>📞</span><span>{SITE.phone}</span>
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Progress */}
                <div className="flex items-center gap-2 mb-6">
                  {[1, 2, 3].map((s) => (
                    <div key={s} className="flex items-center gap-2 flex-1">
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                        step >= s ? 'bg-rouge-600 text-white' : 'bg-ch-600 text-gray-500'
                      }`}>
                        {step > s ? '✓' : s}
                      </div>
                      {s < 3 && (
                        <div className={`h-px flex-1 transition-colors ${step > s ? 'bg-rouge-600' : 'bg-ch-500'}`} />
                      )}
                    </div>
                  ))}
                </div>

                {/* Step 1 — Problem type */}
                {step === 1 && (
                  <div className="space-y-4">
                    <h3 className="text-white font-bold text-lg">
                      <span className="text-rouge-500 mr-2">01.</span>
                      Quel est votre problème ?
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {TYPES.map((t) => (
                        <button
                          key={t.id}
                          type="button"
                          onClick={() => { setData((d) => ({ ...d, type: t.id })) }}
                          className={`p-4 rounded-xl border text-left transition-all duration-200 ${
                            data.type === t.id
                              ? 'border-rouge-600 bg-rouge-600/15 text-white'
                              : 'border-ch-500 bg-ch-700 text-gray-400 hover:border-ch-400 hover:text-gray-300'
                          }`}
                        >
                          <span className="text-2xl block mb-1">{t.icon}</span>
                          <span className="text-sm font-semibold">{t.label}</span>
                        </button>
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={nextStep}
                      disabled={!data.type}
                      className="btn-red w-full justify-center py-4 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      Continuer →
                    </button>
                  </div>
                )}

                {/* Step 2 — Contact info */}
                {step === 2 && (
                  <div className="space-y-4">
                    <h3 className="text-white font-bold text-lg">
                      <span className="text-rouge-500 mr-2">02.</span>
                      Vos coordonnées
                    </h3>
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">Votre nom *</label>
                      <input
                        type="text"
                        value={data.nom}
                        onChange={(e) => setData((d) => ({ ...d, nom: e.target.value }))}
                        required
                        placeholder="Jean Dupont"
                        className="input-dark"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">Téléphone *</label>
                      <input
                        type="tel"
                        value={data.telephone}
                        onChange={(e) => setData((d) => ({ ...d, telephone: e.target.value }))}
                        required
                        placeholder="06 XX XX XX XX"
                        className="input-dark"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">Adresse (facultatif)</label>
                      <input
                        type="text"
                        value={data.adresse}
                        onChange={(e) => setData((d) => ({ ...d, adresse: e.target.value }))}
                        placeholder={`Rue, ${SITE.commune}`}
                        className="input-dark"
                      />
                    </div>
                    <div className="flex gap-3">
                      <button type="button" onClick={prevStep} className="btn-ghost border border-ch-500 px-5 py-3 rounded-xl">
                        ← Retour
                      </button>
                      <button
                        type="button"
                        onClick={nextStep}
                        disabled={!data.nom || !data.telephone}
                        className="btn-red flex-1 justify-center py-3 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
                      >
                        Continuer →
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3 — Message & submit */}
                {step === 3 && (
                  <div className="space-y-4">
                    <h3 className="text-white font-bold text-lg">
                      <span className="text-rouge-500 mr-2">03.</span>
                      Décrivez votre problème
                    </h3>
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">Votre message *</label>
                      <textarea
                        value={data.message}
                        onChange={(e) => setData((d) => ({ ...d, message: e.target.value }))}
                        required
                        rows={5}
                        placeholder="Ex : Tache d'humidité sur le plafond depuis 2 semaines, compteur qui tourne..."
                        className="input-dark resize-none"
                      />
                    </div>
                    <div className="dark-card p-4 text-sm text-gray-500">
                      <p className="font-semibold text-gray-300 mb-1">Récapitulatif :</p>
                      <p>Type : {TYPES.find((t) => t.id === data.type)?.label}</p>
                      <p>Contact : {data.nom} · {data.telephone}</p>
                      {data.adresse && <p>Adresse : {data.adresse}</p>}
                    </div>
                    <div className="flex gap-3">
                      <button type="button" onClick={prevStep} className="btn-ghost border border-ch-500 px-5 py-3 rounded-xl">
                        ← Retour
                      </button>
                      <button
                        type="submit"
                        disabled={!data.message || loading}
                        className="btn-red flex-1 justify-center py-3 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
                      >
                        {loading ? 'Envoi...' : '📨 Envoyer ma demande'}
                      </button>
                    </div>
                    <p className="text-gray-600 text-xs text-center">
                      Réponse sous 2h. Urgence : {SITE.phone}
                    </p>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
