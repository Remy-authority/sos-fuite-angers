import { SITE } from '@/lib/config'

export default function EmergencyBar() {
  return (
    <div className="relative z-50 bg-rouge-700 text-white text-sm font-bold text-center py-2.5 px-4">
      <span className="inline-flex items-center gap-3 flex-wrap justify-center">
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/70" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
        </span>
        <span className="font-extrabold tracking-wide">URGENCE 24h/7j</span>
        <span className="opacity-80">—</span>
        <span>Fuite d&apos;eau à {SITE.commune} ?</span>
        <a
          href={SITE.phoneHref}
          className="underline underline-offset-2 font-extrabold hover:text-rouge-200 transition-colors"
        >
          Appelez maintenant : {SITE.phone}
        </a>
      </span>
    </div>
  )
}
