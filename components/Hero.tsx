import { SITE } from '@/lib/config'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-navy-900">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800" />
      <div className="absolute top-20 right-10 w-80 h-80 bg-water-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-28 right-16 text-8xl select-none pointer-events-none hidden lg:block animate-float-slow" style={{ color: 'rgba(56,189,248,0.12)' }}>💧</div>
      <div className="absolute bottom-28 left-16 text-6xl select-none pointer-events-none hidden lg:block animate-float-slow" style={{ animationDelay: '4s', color: 'rgba(56,189,248,0.08)' }}>💧</div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center w-full">
        <div className="text-white space-y-6 animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-200 text-sm font-semibold px-4 py-2 rounded-full">
            <span className="w-2 h-2 rounded-full bg-blue-300 animate-pulse" />
            Expert certifié — Intervention rapide à {SITE.commune}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
            <span>Recherche de </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
              fuite d&apos;eau
            </span>
            <br />
            <span>&amp; assèchement</span>
            <br />
            <span style={{ color: '#FB923C' }}>à {SITE.commune}</span>
          </h1>

          <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-lg">
            Détection précise sans casse inutile.{' '}
            <strong className="text-white">Caméra thermique, gaz traceur, acoustique.</strong>{' '}
            Prix transparents, souvent pris en charge par votre assurance.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-slate-300">
            <span>✅ Sans engagement</span>
            <span>🏠 Pris en charge assurance</span>
            <span>⚡ Intervention rapide</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a href={SITE.phoneHref} className="btn-urgent px-8 py-5 text-xl animate-pulse-cta">
              <span>📞</span><span>{SITE.phone}</span>
            </a>
            <a href="#contact" className="btn-outline">
              <span>✉️</span><span>Demander un devis</span>
            </a>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="glass-card p-8 space-y-5">
            <h2 className="text-white font-bold text-xl">Nos tarifs — sans surprise</h2>
            <div className="py-4 border-b border-white/10">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-white font-semibold">Recherche de fuite</p>
                  <p className="text-slate-400 text-sm">Caméra / gaz traceur / acoustique</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-2xl" style={{ color: '#FB923C' }}>{SITE.prixRechercheMin}€–{SITE.prixRechercheMax}€</p>
                  <p className="text-slate-400 text-xs">Souvent remboursé assurance</p>
                </div>
              </div>
            </div>
            <div className="py-4 border-b border-white/10">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-white font-semibold">Assèchement</p>
                  <p className="text-slate-400 text-sm">Séchage professionnel sinistre</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-2xl" style={{ color: '#FB923C' }}>{SITE.prixAssechementMin}€–{SITE.prixAssechementMax}€</p>
                  <p className="text-slate-400 text-xs">Pris en charge assurance habitation</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 text-center">
              <p className="text-blue-200 font-semibold text-sm">🛡️ Nous travaillons avec votre assurance</p>
            </div>
            <a href={SITE.phoneHref} className="btn-urgent w-full justify-center py-4 text-lg">
              <span>📞</span><span>Appeler maintenant</span>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg viewBox="0 0 1200 60" xmlns="http://www.w3.org/2000/svg" className="w-full" style={{ fill: '#f8fafc' }}>
          <path d="M0 60L1200 60L1200 20C1100 45 900 5 600 30C300 55 100 15 0 35Z" />
        </svg>
      </div>
    </section>
  )
}
