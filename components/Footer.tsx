import Link from 'next/link'
import { SITE } from '@/lib/config'

export default function Footer() {
  return (
    <footer style={{ background: '#070D1A' }} className="text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center text-xl" style={{ background: 'linear-gradient(135deg, #0EA5E9, #1D4ED8)' }}>💧</div>
              <span className="font-extrabold text-white text-lg">{SITE.name}</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Expert en recherche de fuite d&apos;eau et assèchement à {SITE.commune} ({SITE.communeCode}). Prix transparents, intervention rapide.
            </p>
            <a href={SITE.phoneHref} className="inline-flex items-center gap-2 mt-4 font-bold transition-colors" style={{ color: '#FB923C' }}>
              📞 {SITE.phone}
            </a>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              {["Recherche de fuite", "Caméra thermique", "Gaz traceur", "Détection acoustique", "Assèchement", "Dégât des eaux"].map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Légal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/mentions-legales" className="text-slate-400 hover:text-white transition-colors">Mentions légales</Link></li>
              <li><Link href="/cgu" className="text-slate-400 hover:text-white transition-colors">CGU</Link></li>
              <li><Link href="/politique-cookies" className="text-slate-400 hover:text-white transition-colors">Politique cookies</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm" style={{ borderColor: 'rgba(255,255,255,0.1)', color: '#64748b' }}>
          <p>© 2026 {SITE.name} — {SITE.commune} ({SITE.communeCode})</p>
          <p className="text-xs" style={{ color: '#475569' }}>Preview Vercel — Non mis en ligne sur domaine réel</p>
        </div>
      </div>
    </footer>
  )
}
