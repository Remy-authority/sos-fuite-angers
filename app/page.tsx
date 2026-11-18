import type { Metadata } from 'next'
import { siteConfig } from '@/config/site.config'
import { getServices } from '@/lib/content'
import { buildMetadata } from '@/lib/seo'
import CtaBanner from '@/components/ui/CtaBanner'
import Faq from '@/components/ui/Faq'
import Hero from '@/components/sections/Hero'
import Garanties from '@/components/sections/Garanties'
import Prestations from '@/components/sections/Prestations'
import CoupeRecherche from '@/components/sections/CoupeRecherche'
import SignesFuite from '@/components/sections/SignesFuite'
import LogementsAngers from '@/components/sections/LogementsAngers'
import CarteSecteur from '@/components/sections/CarteSecteur'

const TITLE = "Recherche de fuite d'eau à Angers, détection non destructive"
const DESC =
  "Recherche de fuite d'eau à Angers et 40 km autour : caméra thermique, gaz traceur, écoute. Point de fuite marqué, rapport pour l'assureur, devis gratuit."

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESC, path: '/' })

/** Accueil, ordre du site modèle (mur-soutenement-haute-savoie.fr) : bloc 1 fixe, garanties,
 * prestations, bloc 3 au défilement, signes d'une fuite cachée, logements d'Angers, carte des 40 km
 * en bloc 7 (#R46), FAQ, formulaire de fin sur bloc clair. */
export default function HomePage() {
  const services = getServices()
  const homeFaq = siteConfig.homeFaq as unknown as { q: string; a: string }[]

  return (
    <>
      <Hero />
      <Garanties />
      <Prestations services={services} />
      <CoupeRecherche />
      <SignesFuite />
      <LogementsAngers />
      <CarteSecteur />
      <Faq items={homeFaq} />
      <CtaBanner fond="bg-white" />
    </>
  )
}
