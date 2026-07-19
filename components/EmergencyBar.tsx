import { SITE } from '@/lib/config'

export default function EmergencyBar() {
  return (
    <div className="bg-red-600 text-white text-sm font-semibold text-center py-2 px-4">
      <span className="inline-flex items-center gap-2 flex-wrap justify-center">
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
        </span>
        URGENCE 24h/7j — Fuite d&apos;eau à {SITE.commune} ?{' '}
        <a href={SITE.phoneHref} className="underline hover:no-underline font-bold">
          Appelez : {SITE.phone}
        </a>
      </span>
    </div>
  )
}
