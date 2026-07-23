import Link from 'next/link'
import { siteConfig } from '@/config/site.config'
import PhoneButton from '@/components/ui/PhoneButton'
import LeadForm from '@/components/ui/LeadForm'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-dark" aria-labelledby="hero-title">
      {/* Motif de fond subtil */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        aria-hidden="true"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />
      {/* Halo bleu gauche */}
      <div
        className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-site relative grid gap-10 py-14 md:grid-cols-2 md:items-start md:py-20 lg:gap-16">
        {/* Colonne texte */}
        <div>
          {/* Badge urgence */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent ring-1 ring-accent/20">
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent" aria-hidden="true" />
            {siteConfig.availability}
          </div>

          <h1
            id="hero-title"
            className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Recherche de fuite d'eau à{' '}
            <span className="text-accent">{siteConfig.city}</span>
          </h1>

          <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
            {siteConfig.responseTime}. Détection non destructive par {siteConfig.methods.join(', ')}.
            Devis gratuit, sans engagement.
          </p>

          {/* USPs */}
          <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-slate-300" role="list">
            {siteConfig.usps.map((u) => (
              <li key={u} className="flex items-center gap-2">
                <svg className="h-4 w-4 shrink-0 text-accent" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0z" clipRule="evenodd" />
                </svg>
                {u}
              </li>
            ))}
          </ul>

          {/* CTAs desktop */}
          <div className="mt-7 flex flex-col gap-3 sm:flex-row md:hidden">
            <PhoneButton
              label={`Appeler — ${siteConfig.phoneDisplay}`}
              className="btn-accent justify-center text-base"
            />
            <Link
              href="/contact"
              className="btn-outline !border-white/30 !bg-transparent !text-white hover:!bg-white/10"
            >
              Devis gratuit en ligne
            </Link>
          </div>

          {/* Numéro proéminent (desktop) */}
          <div className="mt-8 hidden md:flex md:items-center md:gap-4">
            <a
              href={`tel:${siteConfig.phone}`}
              className="group flex items-center gap-3 rounded-xl bg-accent px-6 py-4 text-white shadow-lg shadow-accent/30 transition hover:bg-accent/90"
              aria-label={`Appeler le ${siteConfig.phoneDisplay}`}
            >
              <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
              </svg>
              <div>
                <p className="text-xs font-medium text-white/80">Appelez maintenant</p>
                <p className="text-xl font-bold tracking-wide">{siteConfig.phoneDisplay}</p>
              </div>
            </a>
            <Link
              href="/contact"
              className="rounded-xl border border-white/20 bg-white/5 px-5 py-4 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
            >
              Devis en ligne →
            </Link>
          </div>
        </div>

        {/* Colonne formulaire */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-accent">Devis gratuit</p>
          <h2 className="mb-4 text-lg font-bold text-white">Décrivez votre problème</h2>
          <LeadForm />
        </div>
      </div>
    </section>
  )
}
