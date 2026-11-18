import LeadForm from './LeadForm'
import { siteConfig } from '@/config/site.config'

/**
 * CtaBanner, bloc de fin de page : le formulaire court (même dessin que partout, carte nuit)
 * posé sur un bloc clair, titre à gauche sur ordinateur, centré au téléphone.
 * Règle Rémy 13/10 et 17/11/2026 : formulaire à la fin de l'accueil en plus du bloc 1,
 * carte noire sur bloc clair, aucun badge-pilule, un seul mot pour le bouton.
 */
export default function CtaBanner({
  title = `Une fuite à ${siteConfig.city} ? Nous la localisons sans casser`,
  subtitle = 'Trois questions, puis nous vous rappelons pour fixer le passage du technicien.',
  id = 'devis',
  fond = 'bg-neige',
}: {
  title?: string
  subtitle?: string
  id?: string
  /** Fond du bloc, pour ne jamais coller deux blocs de même couleur. */
  fond?: string
}) {
  return (
    <section id={id} className={`section scroll-mt-20 ${fond}`} aria-labelledby={`${id}-titre`}>
      <div className="container-site grid items-center gap-8 lg:grid-cols-[1fr_minmax(0,440px)] lg:gap-14">
        <div className="text-center lg:text-left">
          <p className="surtitre justify-center lg:justify-start">Devis gratuit</p>
          <h2 id={`${id}-titre`} className="mt-3 font-display text-[1.75rem] font-bold leading-tight text-nuit md:text-[2.2rem]">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-slate-600 lg:mx-0">{subtitle}</p>
        </div>
        <div className="mx-auto w-full max-w-[440px]">
          <LeadForm idPrefix={`${id}-`} />
        </div>
      </div>
    </section>
  )
}
