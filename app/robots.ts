import type { MetadataRoute } from 'next'
import { absUrl, IS_NOINDEX } from '@/lib/seo'

/**
 * robots.txt généré au build.
 * - Preview / non-prod (IS_NOINDEX) → tout bloqué (jamais indexer un site non validé).
 * - Prod (Gate C) → Allow /, avec exclusion des routes utilitaires + référence sitemap.
 */
export default function robots(): MetadataRoute.Robots {
  if (IS_NOINDEX) {
    return { rules: [{ userAgent: '*', disallow: '/' }] }
  }
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/merci', '/politique-confidentialite', '/cgu', '/politique-cookies'],
      },
    ],
    sitemap: absUrl('/sitemap.xml'),
    host: absUrl('/'),
  }
}
