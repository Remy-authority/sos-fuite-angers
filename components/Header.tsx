import Link from 'next/link'
import { SITE } from '@/lib/config'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-ch-950/95 backdrop-blur-md border-b border-ch-600">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 bg-rouge-600 rounded-xl flex items-center justify-center text-xl shadow-lg shadow-rouge-600/30">
            💧
          </div>
          <div className="leading-tight">
            <span className="font-black text-white text-lg block tracking-tight">SOS Fuite</span>
            <span className="text-rouge-500 font-bold text-xs uppercase tracking-widest block">{SITE.commune}</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-gray-400">
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#process" className="hover:text-white transition-colors">Process</a>
          <a href="#avis" className="hover:text-white transition-colors">Avis</a>
          <a href="#zone" className="hover:text-white transition-colors">Zone</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>

        <a
          href={SITE.phoneHref}
          className="flex items-center gap-2 bg-rouge-600 hover:bg-rouge-500 text-white font-bold text-sm md:text-base px-4 py-2.5 md:px-5 md:py-3 rounded-xl transition-all duration-200 shadow-lg shadow-rouge-600/30 hover:scale-[1.02] active:scale-95"
        >
          <span>📞</span>
          <span className="hidden sm:inline">{SITE.phone}</span>
          <span className="sm:hidden font-bold">Appeler</span>
        </a>
      </div>
    </header>
  )
}
