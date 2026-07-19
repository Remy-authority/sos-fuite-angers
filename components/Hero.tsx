import { SITE } from '@/lib/config'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-ch-950">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-ch-950 via-ch-900 to-ch-850" />
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none" style={{ background: 'rgba(220,38,38,0.06)' }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none" style={{ background: 'rgba(220,38,38,0.04)' }} />

      {/* Decorative grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left column */}
        <div className="space-y-7">
          <div className="flex items-center gap-2">
            <span className="badge-red">
              <span className="w-1.5 h-1.5 rounded-full bg-rouge-500 animate-pulse" />
              Expert certifié · Intervention rapide
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight text-white">
            Recherche de{' '}
            <span className="text-rouge-500">fuite d&apos;eau</span>
            <br />
            &amp; assèchement
            <br />
            <span className="text-gray-400 text-3xl md:text-4xl font-extrabold">à {SITE.commune}</span>
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
            Détection précise <strong className="text-white">sans casse inutile</strong>.
            Caméra thermique, gaz traceur, acoustique.
            Prix transparents — souvent pris en charge par votre assurance.
          </p>

          {/* Trust badges row */}
          <div className="flex flex-wrap gap-3">
            <span className="badge-trust">✓ Sans engagement</span>
            <span className="badge-trust">✓ Pris en charge assurance</span>
            <span className="badge-trust">✓ Intervention 24h/7j</span>
            <span className="badge-trust">✓ Sans casse</span>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href={SITE.phoneHref}
              className="btn-red text-xl py-5 px-8 animate-pulse-red justify-center sm:justify-start"
            >
              <span>📞</span><span>{SITE.phone}</span>
            </a>
            <a
              href="#contact"
              className="btn-outline-red text-lg py-4 px-8 justify-center sm:justify-start"
            >
              <span>✉️</span><span>Demander un devis</span>
            </a>
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-4 pt-2 text-sm text-gray-500">
            <div className="flex items-center gap-1.5">
              <span className="text-or-400 text-base">★★★★★</span>
              <span className="text-gray-400">5/5 Google</span>
            </div>
            <span className="w-px h-4 bg-ch-500" />
            <span>Qualibat certifié</span>
            <span className="w-px h-4 bg-ch-500" />
            <span>RGE</span>
          </div>
        </div>

        {/* Right column — pricing card */}
        <div className="hidden lg:block">
          <div className="dark-card p-8 space-y-6 shadow-2xl shadow-black/50 border-rouge-600/20">
            <div className="flex items-center justify-between">
              <h2 className="text-white font-bold text-xl">Nos tarifs — sans surprise</h2>
              <span className="badge-red text-xs">Transparents</span>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-xl border border-ch-500 bg-ch-800/50">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-white font-semibold">Recherche de fuite</p>
                    <p className="text-gray-500 text-sm mt-1">Caméra / gaz traceur / acoustique</p>
                  </div>
                  <div className="text-right shrink-0 ml-4">
                    <p className="font-black text-2xl text-rouge-500">{SITE.prixRechercheMin}€–{SITE.prixRechercheMax}€</p>
                    <p className="text-gray-500 text-xs">Remboursé assurance</p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-rouge-600/30 bg-rouge-600/5">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-white font-semibold">Assèchement professionnel</p>
                    <p className="text-gray-500 text-sm mt-1">Séchage sinistre certifié</p>
                  </div>
                  <div className="text-right shrink-0 ml-4">
                    <p className="font-black text-2xl text-rouge-500">{SITE.prixAssechementMin}€–{SITE.prixAssechementMax}€</p>
                    <p className="text-gray-500 text-xs">Pris en charge assurance</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="badge-trust w-full justify-center py-3">
              🛡️ Nous travaillons avec votre assurance habitation
            </div>

            <a href={SITE.phoneHref} className="btn-red w-full justify-center py-4 text-lg">
              <span>📞</span><span>Appeler maintenant</span>
            </a>

            <p className="text-gray-600 text-xs text-center">
              Devis précis après diagnostic. Urgences 7j/7.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-ch-900 to-transparent pointer-events-none" />
    </section>
  )
}
