import type { Metadata } from 'next'
import { Sora } from 'next/font/google'
import './globals.css'
import { SITE } from '@/lib/config'

const sora = Sora({ subsets: ['latin'], variable: '--font-sora', display: 'swap' })

export const metadata: Metadata = {
  title: {
    default: `Recherche de fuite d'eau ${SITE.commune} (${SITE.communeCode}) — ${SITE.name}`,
    template: `%s — ${SITE.name}`,
  },
  description: `Expert recherche de fuite d'eau et assechement a ${SITE.commune} (${SITE.communeCode}). Intervention rapide, devis gratuit. Camera thermique, gaz traceur, acoustique. Souvent pris en charge par votre assurance habitation.`,
  keywords: `recherche fuite eau ${SITE.commune}, detection fuite ${SITE.commune} ${SITE.communeCode}, assechement ${SITE.commune}, expert fuite eau Angers`,
  openGraph: {
    title: `Recherche de fuite d'eau ${SITE.commune} — ${SITE.name}`,
    description: `Expert detection fuite et assechement a ${SITE.commune}. Devis gratuit, intervention rapide.`,
    type: 'website',
    locale: 'fr_FR',
  },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE.name,
  description: `Expert recherche de fuite d'eau et assechement a ${SITE.commune}`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: SITE.commune,
    postalCode: SITE.postalCode,
    addressCountry: 'FR',
  },
  areaServed: [SITE.commune, ...SITE.communesVoisines],
  serviceType: ["Recherche de fuite d'eau", 'Assechement', 'Detection thermique', 'Gaz traceur'],
  priceRange: '€€',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={sora.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}
