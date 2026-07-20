import { SITE } from '@/lib/config'

export default function Hero() {
  return (
    <section className="relative overflow-hidden section-cream">
      {/* Cercles décoratifs animés */}
      <div className="deco-ring w-[520px] h-[520px] -top-40 -right-40 animate-spin-slow">
        <span className="absolute -top-1 left-1/2 w-2.5 h-2.5 rounded-full bg-teal-400" />
      </div>
      <div className="deco-ring w-[340px] h-[340px] top-56 -right-16 animate-spin-slower">
        <span className="absolute -top-1 left-1/2 w-2 h-2 rounded-full bg-teal-200" />
      </div>
      <div className="deco-ring w-64 h-64 -bottom-24 -left-24" />
      {/* Blobs flous */}
      <div className="absolute top-1/3 right-0 w-[480px] h-[480px] rounded-full bg-teal-200/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 left-1/4 w-96 h-96 rounded-full bg-peach-200/30 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-16 pb-20 lg:pt-24 lg:pb-28 grid lg:grid-cols-2 gap-14 lg:gap-16 items-center w-full">
        {/* Colonne gauche */}
        <div className="space-y-7 animate-fade-slide-in">
          <span className="badge-teal">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
            Expert certifié · Intervention rapide
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-bold leading-[1.08] tracking-tight text-ink-900">
            Recherche de <span className="accent-underline">fuite d&apos;eau</span>
            <br />
            &amp; assèchement à {SITE.commune}
          </h1>

          <p className="text-ink-500 text-lg leading-relaxed max-w-lg">
            Détection précise <strong className="text-ink-900 font-semibold">sans casse inutile</strong>.
            Caméra thermique, gaz traceur, acoustique. Prix transparents — souvent
            pris en charge par votre assurance habitation.
          </p>

          {/* Badges de confiance */}
          <div className="flex flex-wrap gap-2.5">
            <span className="badge">✓ Sans engagement</span>
            <span className="badge">✓ Pris en charge assurance</span>
            <span className="badge">✓ Intervention 24h/7j</span>
            <span className="badge">✓ Sans casse</span>
          </div>

          {/* Double CTA */}
          <div className="flex flex-col sm:flex-row gap-4 pt-1">
            <a href={SITE.phoneHref} className="btn-cta text-lg">
              <span>📞</span><span>{SITE.phone}</span>
            </a>
            <a href="#contact" className="btn-secondary text-lg">
              <span>✉️</span><span>Demander un devis</span>
            </a>
          </div>

          {/* Preuves */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-1 text-sm text-ink-500">
            <span className="font-semibold text-ink-700">Qualibat</span>
            <span className="w-px h-4 bg-line-200" />
            <span className="font-semibold text-ink-700">RGE</span>
            <span className="w-px h-4 bg-line-200" />
            <span className="font-semibold text-ink-700">Garantie décennale</span>
            <span className="w-px h-4 bg-line-200" />
            <span>Rapport assurance inclus</span>
          </div>
        </div>

        {/* Colonne droite — carte tarifs */}
        <div className="relative hidden lg:block">
          <div className="card p-8 space-y-6">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-ink-900 font-bold text-xl tracking-tight">Nos tarifs — sans surprise</h2>
              <span className="badge-teal shrink-0">Transparents</span>
            </div>

            <div className="space-y-4">
              <div className="card-tinted p-5">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <p className="text-ink-900 font-semibold">Recherche de fuite</p>
                    <p className="text-ink-500 text-sm mt-1">Caméra / gaz traceur / acoustique</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-bold text-2xl text-teal-500 tracking-tight">{SITE.prixRechercheMin}€–{SITE.prixRechercheMax}€</p>
                    <p className="text-ink-500 text-xs">Souvent remboursé assurance</p>
                  </div>
                </div>
              </div>

              <div className="card-tinted p-5">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <p className="text-ink-900 font-semibold">Assèchement professionnel</p>
                    <p className="text-ink-500 text-sm mt-1">Séchage sinistre certifié</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-bold text-2xl text-teal-500 tracking-tight">{SITE.prixAssechementMin}€–{SITE.prixAssechementMax}€</p>
                    <p className="text-ink-500 text-xs">Pris en charge assurance</p>
                  </div>
                </div>
              </div>
            </div>

            <a href={SITE.phoneHref} className="btn-primary w-full text-lg">
              <span>📞</span><span>Appeler maintenant</span>
            </a>

            <p className="text-ink-400 text-xs text-center">
              Devis précis après diagnostic. Urgences 7j/7.
            </p>
          </div>

          {/* Pastille flottante */}
          <div className="absolute -top-6 -left-8 animate-float">
            <span className="badge-peach shadow-[0_12px_30px_-12px_rgba(36,42,79,0.25)] text-sm px-4 py-2">
              🛡️ Compatible assurance habitation
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
