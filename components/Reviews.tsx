import { SITE } from '@/lib/config'

export default function Reviews() {
  return (
    <section id="avis" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Avis de nos clients</h2>
          <p className="section-subtitle">
            Les vrais avis arrivent bientôt — nous collectons les témoignages de nos premiers clients à {SITE.commune}.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="card p-8 text-center border-2 border-dashed border-slate-200 bg-slate-50">
            <div className="text-5xl mb-4">⭐</div>
            <div className="flex justify-center gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((s) => <span key={s} className="text-yellow-400 text-3xl">★</span>)}
            </div>
            <h3 className="text-navy-900 font-bold text-xl mb-2">Avis Google — {SITE.name}</h3>
            <p className="text-slate-500 mb-6">
              Les avis seront affichés ici dès l&apos;ouverture de notre fiche Google Business Profile.<br />
              <strong className="text-navy-700">Aucun faux avis — uniquement des témoignages authentiques.</strong>
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <p className="text-blue-700 text-sm">
                🔜 Vous nous avez fait confiance ? Laissez-nous un avis Google pour aider d&apos;autres habitants de {SITE.commune} !
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
