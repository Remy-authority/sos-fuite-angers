import Link from 'next/link'
import { SITE } from '@/lib/config'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="w-9 h-9 bg-gradient-to-br from-water-500 to-navy-600 rounded-xl flex items-center justify-center text-xl">
            💧
          </div>
          <div className="leading-tight">
            <span className="font-extrabold text-navy-900 text-lg block">SOS Fuite</span>
            <span className="text-water-500 font-bold text-xs uppercase tracking-widest block">{SITE.commune}</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <a href="#services" className="hover:text-navy-700 transition-colors">Services</a>
          <a href="#prix" className="hover:text-navy-700 transition-colors">Nos prix</a>
          <a href="#zone" className="hover:text-navy-700 transition-colors">Zone</a>
          <a href="#faq" className="hover:text-navy-700 transition-colors">FAQ</a>
          <a href="#contact" className="hover:text-navy-700 transition-colors">Contact</a>
        </nav>

        <a
          href={SITE.phoneHref}
          className="flex items-center gap-2 bg-urgent-500 hover:bg-urgent-600 text-white font-bold text-sm md:text-base px-4 py-2.5 md:px-5 md:py-3 rounded-xl transition-all hover:shadow-lg active:scale-95"
        >
          <span>📞</span>
          <span className="hidden sm:inline">{SITE.phone}</span>
          <span className="sm:hidden">Appeler</span>
        </a>
      </div>
    </header>
  )
}
