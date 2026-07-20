'use client'

import { useState } from 'react'
import { SITE } from '@/lib/config'

const TYPES = [
  { id: 'fuite-eau', label: "Fuite d'eau", icon: '💧' },
  { id: 'degat-eaux', label: 'Degat des eaux', icon: '🌊' },
  { id: 'fuite-gaz', label: 'Fuite de gaz', icon: '🔥' },
  { id: 'canalisation', label: 'Canalisation bouchee', icon: '🔧' },
  { id: 'asse', label: 'Assechement', icon: '🌬️' },
  { id: 'autre', label: 'Autre probleme', icon: '❓' },
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
    <section id="contact" className="py-20 section-light">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — contact info */}
          <div className="space-y-6">
            <div>
              <span className="section-label inline-flex mb-4">Nous contacter</span>
              <h2 className="section-title mt-2">Appelez ou ecrivez-nous</h2>
            </div>
            <p className="text-ink-500 text-lg">
              Une urgence ? Appelez directement. Une question ou un devis ?
              Remplissez le formulaire en 3 etapes — reponse sous 2h.
            </p>

            <div className="space-y-3">
              <a
                href={SITE.phoneHref}
                className="card-hover p-4 flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-500 flex items-center justify-center text-white text-2xl shrink-0 shadow-lg shadow-teal-500/20">
                  📞
                </div>
                <div>
                  <p className="font-black text-ink-900 text-xl group-hover:text-teal-500 transition-colors">{SITE.phone}</p>
                  <p className="text-ink-500 text-sm">Disponible 7j/7 — Reponse immediate</p>
                </div>
              </a>

              <div className="card p-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-cream-100 border border-line-200 flex items-center justify-center text-2xl shrink-0">
                  📍
                </div>
                <div>
                  <p className="font-bold text-ink-900">{SITE.commune} ({SITE.communeCode})</p>
                  <p className="text-ink-500 text-sm">{SITE.commune} + communes voisines (~30 km)</p>
                </div>
              </div>

              <div className="card p-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-cream-100 border border-line-200 flex items-center justify-center text-2xl shrink-0">
                  ✉️
                </div>
                <div>
                  <p className="font-bold text-ink-900">{SITE.email}</p>
                  <p className="text-ink-500 text-sm">Reponse sous 24h</p>
                </div>
              </div>
            </div>

            <div className="card border-peach-200/50 p-5">
              <h3 className="font-bold text-ink-900 mb-2">💡 En cas de fuite active</h3>
              <p className="text-ink-500 text-sm">
                Coupez l'arrivee d'eau generale (robinet sous evier ou au compteur),
                puis appelez-nous immediatement au {SITE.phone}.
              </p>
            </div>
          </div>

          {/* Right — multi-step form */}
          <div className="card p-8">
            {sent ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-20 h-20 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center text-4xl mx-auto">
                  ✅
                </div>
                <h3 className="text-ink-900 font-bold text-xl">Demande envoyee !</h3>
                <p className="text-ink-500">
                  Nous vous recontacterons sous 2h. Pour toute urgence,
                  appelez directement le {SITE.phone}.
                </p>
                <a href={SITE.phoneHref} className="btn-primary inline-flex mt-2">
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
                        step >= s ? 'bg-teal-500 text-white' : 'bg-cream-100 text-ink-400 border border-line-200'
                      }`}>
                        {step > s ? '✓' : s}
                      </div>
                      {s < 3 && (
                        <div className={`h-px flex-1 transition-colors ${step > s ? 'bg-teal-500' : 'bg-line-200'}`} />
                      )}
                    </div>
                  ))}
                </div>

                {/* Step 1 — Problem type */}
                {step === 1 && (
                  <div className="space-y-4">
                    <h3 className="text-ink-900 font-bold text-lg">
                      <span className="text-teal-500 mr-2">01.</span>
                      Quel est votre probleme ?
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {TYPES.map((t) => (
                        <button
                          key={t.id}
                          type="button"
                          onClick={() => { setData((d) => ({ ...d, type: t.id })) }}
                          className={`p-4 rounded-xl border text-left transition-all duration-200 ${
                            data.type === t.id
                              ? 'border-teal-500 bg-teal-50 text-ink-900 ring-2 ring-teal-200'
                              : 'border-line-200 bg-white text-ink-500 hover:border-teal-300 hover:text-ink-700'
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
                      className="btn-cta w-full justify-center py-4 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                    >
                      Continuer →
                    </button>
                  </div>
                )}

                {/* Step 2 — Contact info */}
                {step === 2 && (
                  <div className="space-y-4">
                    <h3 className="text-ink-900 font-bold text-lg">
                      <span className="text-teal-500 mr-2">02.</span>
                      Vos coordonnees
                    </h3>
                    <div>
                      <label className="block text-sm font-semibold text-ink-700 mb-2">Votre nom *</label>
                      <input
                        type="text"
                        value={data.nom}
                        onChange={(e) => setData((d) => ({ ...d, nom: e.target.value }))}
                        required
                        placeholder="Jean Dupont"
                        className="input"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-ink-700 mb-2">Telephone *</label>
                      <input
                        type="tel"
                        value={data.telephone}
                        onChange={(e) => setData((d) => ({ ...d, telephone: e.target.value }))}
                        required
                        placeholder="06 XX XX XX XX"
                        className="input"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-ink-700 mb-2">Adresse (facultatif)</label>
                      <input
                        type="text"
                        value={data.adresse}
                        onChange={(e) => setData((d) => ({ ...d, adresse: e.target.value }))}
                        placeholder={`Rue, ${SITE.commune}`}
                        className="input"
                      />
                    </div>
                    <div className="flex gap-3">
                      <button type="button" onClick={prevStep} className="btn-secondary px-5 py-3">
                        ← Retour
                      </button>
                      <button
                        type="button"
                        onClick={nextStep}
                        disabled={!data.nom || !data.telephone}
                        className="btn-cta flex-1 justify-center py-3 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                      >
                        Continuer →
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3 — Message & submit */}
                {step === 3 && (
                  <div className="space-y-4">
                    <h3 className="text-ink-900 font-bold text-lg">
                      <span className="text-teal-500 mr-2">03.</span>
                      Decrivez votre probleme
                    </h3>
                    <div>
                      <label className="block text-sm font-semibold text-ink-700 mb-2">Votre message *</label>
                      <textarea
                        value={data.message}
                        onChange={(e) => setData((d) => ({ ...d, message: e.target.value }))}
                        required
                        rows={5}
                        placeholder="Ex : Tache d'humidite sur le plafond depuis 2 semaines, compteur qui tourne..."
                        className="input resize-none"
                      />
                    </div>
                    <div className="card p-4 text-sm text-ink-500">
                      <p className="font-semibold text-ink-700 mb-1">Recapitulatif :</p>
                      <p>Type : {TYPES.find((t) => t.id === data.type)?.label}</p>
                      <p>Contact : {data.nom} · {data.telephone}</p>
                      {data.adresse && <p>Adresse : {data.adresse}</p>}
                    </div>
                    <div className="flex gap-3">
                      <button type="button" onClick={prevStep} className="btn-secondary px-5 py-3">
                        ← Retour
                      </button>
                      <button
                        type="submit"
                        disabled={!data.message || loading}
                        className="btn-cta flex-1 justify-center py-3 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                      >
                        {loading ? 'Envoi...' : '📨 Envoyer ma demande'}
                      </button>
                    </div>
                    <p className="text-ink-400 text-xs text-center">
                      Reponse sous 2h. Urgence : {SITE.phone}
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
