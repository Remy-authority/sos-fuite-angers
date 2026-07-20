import Link from 'next/link'
import { SITE } from '@/lib/config'

export default function Footer() {
  return (
    <footer className="section-navy border-t border-white/10 text-white">
      <div className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          {/* Col 1 — Brand */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-teal-500 rounded-xl flex items-center justify-center text-xl shadow-lg shadow-teal-500/20">
                💧
              </div>
              <div className="leading-tight">
                <span className="font-black text-white text-lg block">{SITE.name}</span>
                <span className="text-teal-200 text-xs font-bold uppercase tracking-wider block">Expert fuite eau</span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Specialiste detection de fuite et assechement a {SITE.commune} ({SITE.communeCode}).
              Devis gratuit, intervention rapide.
            </p>
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center gap-2 text-teal-200 hover:text-teal-100 font-bold transition-colors"
            >
              📞 {SITE.phone}
            </a>
          </div>

          {/* Col 2 — Services */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2.5 text-white/50 text-sm">
              {["Recherche de fuite", "Camera thermique", "Gaz traceur", "Detection acoustique", "Assechement professionnel", "Rapport degat des eaux"].map((s) => (
                <li key={s} className="hover:text-white/70 transition-colors cursor-default">{s}</li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Zone */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Zone d'intervention</h4>
            <ul className="space-y-2.5 text-white/50 text-sm">
              <li className="text-teal-200 font-semibold">{SITE.commune} (base)</li>
              {SITE.communesVoisines.slice(0, 5).map((c) => (
                <li key={c} className="hover:text-white/70 transition-colors cursor-default">{c}</li>
              ))}
              <li className="text-white/30 italic">+ environs 30 km</li>
            </ul>
          </div>

          {/* Col 4 — Legal + Contact */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Informations</h4>
            <ul className="space-y-2.5 text-sm mb-6">
              <li><Link href="/mentions-legales" className="text-white/50 hover:text-white transition-colors">Mentions legales</Link></li>
              <li><Link href="/cgu" className="text-white/50 hover:text-white transition-colors">CGU</Link></li>
              <li><Link href="/politique-cookies" className="text-white/50 hover:text-white transition-colors">Politique cookies</Link></li>
            </ul>
            <div className="space-y-2 text-sm">
              <p className="badge bg-white/10 border-white/20 text-white/80 text-xs w-full justify-center py-2">✓ Disponible 24h/7j</p>
              <p className="badge bg-white/10 border-white/20 text-white/80 text-xs w-full justify-center py-2">✓ Devis gratuit</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-white/40">
          <p>© 2026 {SITE.name} — {SITE.commune} ({SITE.communeCode}) · Tous droits reserves</p>
          <div className="flex items-center gap-4">
            <span className="badge bg-teal-500/20 border-teal-400/30 text-teal-200 text-xs">Preview Vercel</span>
            <p className="text-xs text-white/30">Non mis en ligne sur domaine reel</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
