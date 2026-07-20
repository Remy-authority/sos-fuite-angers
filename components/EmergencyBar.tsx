import { SITE } from '@/lib/config'

export default function EmergencyBar() {
  return (
    <div className="relative z-50 bg-ink-900 text-white text-sm font-semibold text-center py-2.5 px-4">
      <span className="inline-flex items-center gap-3 flex-wrap justify-center">
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-200/70" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-200" />
        </span>
        <span className="font-bold tracking-widest uppercase text-teal-200 text-xs">Urgence 24h/7j</span>
        <span className="text-white/40">—</span>
        <span>Fuite d&apos;eau à {SITE.commune} ?</span>
        <a
          href={SITE.phoneHref}
          className="underline underline-offset-4 decoration-teal-400 font-bold hover:text-teal-200 transition-colors"
        >
          Appelez maintenant : {SITE.phone}
        </a>
      </span>
    </div>
  )
}
