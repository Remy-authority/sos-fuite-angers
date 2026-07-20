import Link from 'next/link'
import { SITE } from '@/lib/config'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/85 backdrop-blur-md border-b border-line-200/70">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 shrink-0 group">
          <div className="w-10 h-10 bg-teal-50 border border-teal-200/60 rounded-2xl flex items-center justify-center text-xl group-hover:-translate-y-0.5 transition-transform duration-300">
            💧
          </div>
          <div className="leading-tight">
            <span className="font-bold text-ink-900 text-lg block tracking-tight">SOS Fuite</span>
            <span className="text-teal-500 font-semibold text-xs uppercase tracking-widest block">{SITE.commune}</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-ink-700">
          <a href="#services" className="hover:text-teal-500 transition-colors">Services</a>
          <a href="#process" className="hover:text-teal-500 transition-colors">Process</a>
          <a href="#prix" className="hover:text-teal-500 transition-colors">Tarifs</a>
          <a href="#zone" className="hover:text-teal-500 transition-colors">Zone</a>
          <a href="#faq" className="hover:text-teal-500 transition-colors">FAQ</a>
          <a href="#contact" className="hover:text-teal-500 transition-colors">Contact</a>
        </nav>

        <a href={SITE.phoneHref} className="btn-cta px-5 py-2.5 text-sm md:text-base">
          <span>📞</span>
          <span className="hidden sm:inline">{SITE.phone}</span>
          <span className="sm:hidden">Appeler</span>
        </a>
      </div>
    </header>
  )
}
