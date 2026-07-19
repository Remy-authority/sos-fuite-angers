import { SITE } from '@/lib/config'

export default function CTABanner() {
  return (
    <section className="bg-rouge-700 py-16 relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
        backgroundSize: '32px 32px',
      }} />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ background: 'rgba(239,68,68,0.3)' }} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white space-y-6">
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm font-semibold">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/70" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
          </span>
          Disponible maintenant — 7j/7
        </div>

        <h2 className="text-3xl md:text-5xl font-black leading-tight">
          Une fuite détectée rapidement
          <br />
          <span className="text-white/80">c&apos;est des centaines d&apos;euros économisés</span>
        </h2>

        <p className="text-white/80 text-lg max-w-xl mx-auto">
          Chaque heure compte. Une fuite non détectée peut gaspiller 200 litres d&apos;eau par jour
          et aggraver les dégâts sur votre structure.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center justify-center gap-3 bg-white text-rouge-700 font-black text-xl px-8 py-5 rounded-xl hover:bg-gray-100 transition-colors shadow-2xl"
          >
            <span>📞</span><span>{SITE.phone}</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-3 border-2 border-white/40 text-white font-bold text-lg px-8 py-5 rounded-xl hover:bg-white/10 transition-colors"
          >
            <span>✉️</span><span>Formulaire de contact</span>
          </a>
        </div>

        <p className="text-white/50 text-sm">
          Dès {SITE.prixRechercheMin}€ · Souvent pris en charge par votre assurance habitation
        </p>
      </div>
    </section>
  )
}
