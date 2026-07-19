import Link from 'next/link'
import { SITE } from '@/lib/config'

export default function Footer() {
  return (
    <footer className="bg-ch-950 border-t border-ch-600 text-white">
      <div className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          {/* Col 1 — Brand */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-rouge-600 rounded-xl flex items-center justify-center text-xl shadow-lg shadow-rouge-600/30">
                💧
              </div>
              <div className="leading-tight">
                <span className="font-black text-white text-lg block">{SITE.name}</span>
                <span className="text-rouge-500 text-xs font-bold uppercase tracking-wider block">Expert fuite eau</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Spécialiste détection de fuite et assèchement à {SITE.commune} ({SITE.communeCode}).
              Prix transparents, intervention rapide.
            </p>
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center gap-2 text-rouge-500 hover:text-rouge-400 font-bold transition-colors"
            >
              📞 {SITE.phone}
            </a>
          </div>

          {/* Col 2 — Services */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2.5 text-gray-500 text-sm">
              {["Recherche de fuite", "Caméra thermique", "Gaz traceur", "Détection acoustique", "Assèchement professionnel", "Rapport dégât des eaux"].map((s) => (
                <li key={s} className="hover:text-gray-300 transition-colors cursor-default">{s}</li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Zone */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Zone d&apos;intervention</h4>
            <ul className="space-y-2.5 text-gray-500 text-sm">
              <li className="text-rouge-500 font-semibold">{SITE.commune} (base)</li>
              {SITE.communesVoisines.slice(0, 5).map((c) => (
                <li key={c} className="hover:text-gray-300 transition-colors cursor-default">{c}</li>
              ))}
              <li className="text-gray-600 italic">+ environs 30 km</li>
            </ul>
          </div>

          {/* Col 4 — Légal + Contact */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Informations</h4>
            <ul className="space-y-2.5 text-sm mb-6">
              <li><Link href="/mentions-legales" className="text-gray-500 hover:text-white transition-colors">Mentions légales</Link></li>
              <li><Link href="/cgu" className="text-gray-500 hover:text-white transition-colors">CGU</Link></li>
              <li><Link href="/politique-cookies" className="text-gray-500 hover:text-white transition-colors">Politique cookies</Link></li>
            </ul>
            <div className="space-y-2 text-sm">
              <p className="badge-trust text-xs w-full justify-center py-2">✓ Qualibat · RGE · Décennale</p>
              <p className="badge-trust text-xs w-full justify-center py-2">✓ Disponible 24h/7j</p>
            </div>
          </div>
        </div>

        <div className="border-t border-ch-600 pt-8 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-600">
          <p>© 2026 {SITE.name} — {SITE.commune} ({SITE.communeCode}) · Tous droits réservés</p>
          <div className="flex items-center gap-4">
            <span className="badge-red text-xs">Preview Vercel</span>
            <p className="text-xs text-gray-700">Non mis en ligne sur domaine réel</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
