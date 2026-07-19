import { SITE } from '@/lib/config'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="section-title mb-4">Contactez-nous</h2>
            <p className="text-slate-500 text-lg mb-8">Une urgence ? Appelez directement. Une question ? Remplissez le formulaire.</p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl border" style={{ background: 'rgba(249,115,22,0.05)', borderColor: 'rgba(249,115,22,0.2)' }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-2xl shrink-0" style={{ background: '#F97316' }}>📞</div>
                <div>
                  <p className="font-bold text-navy-900 text-lg">{SITE.phone}</p>
                  <p className="text-slate-500 text-sm">Disponible 7j/7 — Réponse immédiate</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl border" style={{ background: 'rgba(14,165,233,0.05)', borderColor: 'rgba(14,165,233,0.2)' }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-2xl shrink-0" style={{ background: '#0EA5E9' }}>📍</div>
                <div>
                  <p className="font-bold text-navy-900">{SITE.commune} ({SITE.communeCode})</p>
                  <p className="text-slate-500 text-sm">{SITE.commune} + communes voisines (~30 km)</p>
                </div>
              </div>
            </div>
            <div className="mt-8 p-6 bg-amber-50 border border-amber-200 rounded-xl">
              <h3 className="font-bold text-navy-900 mb-2">💡 En cas de fuite active</h3>
              <p className="text-slate-600 text-sm">
                Coupez l&apos;arrivée d&apos;eau générale (robinet sous évier ou au compteur), puis appelez-nous.
              </p>
            </div>
          </div>

          <div className="card p-8">
            <h3 className="font-bold text-navy-900 text-xl mb-6">Demande de rappel ou devis</h3>
            <form action="/api/contact" method="POST" className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-navy-900 mb-2">Votre nom *</label>
                <input type="text" name="nom" required placeholder="Jean Dupont"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-shadow" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-navy-900 mb-2">Téléphone *</label>
                <input type="tel" name="telephone" required placeholder="06 XX XX XX XX"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-shadow" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-navy-900 mb-2">Adresse (facultatif)</label>
                <input type="text" name="adresse" placeholder={`Rue, ${SITE.commune}`}
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-shadow" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-navy-900 mb-2">Décrivez votre problème *</label>
                <textarea name="message" required rows={4}
                  placeholder="Ex : Tache d'humidité sur le plafond depuis 2 semaines..."
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-shadow resize-none" />
              </div>
              <button type="submit" className="w-full btn-urgent py-4 text-lg justify-center">
                <span>📨</span><span>Envoyer ma demande</span>
              </button>
              <p className="text-slate-400 text-xs text-center">
                Réponse sous 24h. Urgence : appelez directement le {SITE.phone}.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
