import type { Metadata } from 'next'
import { Bricolage_Grotesque, Sora } from 'next/font/google'
import './globals.css'
import { siteConfig } from '@/config/site.config'
import { themeCssVars } from '@/lib/theme'
import { absUrl, buildMetadata, jsonLdScript, plumberJsonLd } from '@/lib/seo'
import Header from '@/components/sections/Header'
import Footer from '@/components/sections/Footer'
import MobileStickyBar from '@/components/ui/MobileStickyBar'
import SuiviVisite from '@/components/ui/SuiviVisite'

// next/font = polices self-hostées au build (pas de requête Google runtime, pas de FOUT).
const sora = Sora({ subsets: ['latin'], variable: '--font-sora', display: 'swap' })
// Titres : une police à caractère, pour sortir du rendu « gabarit » (mise à jour 18/11/2026).
const display = Bricolage_Grotesque({ subsets: ['latin'], variable: '--font-display', display: 'swap', weight: ['600', '700'] })

const homeTitle = `${siteConfig.trade} à ${siteConfig.city}, ${siteConfig.businessName}`
const homeDesc = `${siteConfig.trade} à ${siteConfig.city} et environs. Méthode non destructive, rapport pour l’assurance.`

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.seo.canonicalBase),
  ...buildMetadata({ title: homeTitle, description: homeDesc, path: '/' }),
  // Après le spread (18/11/2026) : avant, le titre simple de buildMetadata écrasait le gabarit,
  // et le suffixe « , SOS Fuite Angers » n'était servi sur aucune page.
  title: {
    default: homeTitle,
    template: `%s, ${siteConfig.businessName}`,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={siteConfig.seo.lang} className={`${sora.variable} ${display.variable}`} style={themeCssVars()}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdScript(plumberJsonLd()) }}
        />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:rounded focus:bg-white focus:px-3 focus:py-2"
        >
          Aller au contenu
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MobileStickyBar />
        <SuiviVisite />
      </body>
    </html>
  )
}
