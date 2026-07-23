import type { Metadata } from 'next'
import Logo from '@/components/ui/Logo'

export const metadata: Metadata = {
  title: 'Logo validé — SOS Fuite d\'Eau Angers',
  robots: { index: false, follow: false },
}

function FaviconPreview() {
  return (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="64" height="64">
      <rect width="32" height="32" rx="7" fill="#0B4F8A" />
      <path d="M16 6c4 5 6.5 8 6.5 11.2A6.5 6.5 0 0 1 16 24a6.5 6.5 0 0 1-6.5-6.8C9.5 14 12 11 16 6z" fill="white" />
      <circle cx="13" cy="13" r="2" fill="white" fillOpacity="0.3" />
    </svg>
  )
}

export default function LogoChoixPage() {
  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', background: '#F6F9FC', minHeight: '100vh', padding: '40px 24px' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <p style={{ fontSize: 12, color: '#94a3b8', marginBottom: 4, textTransform: 'uppercase', letterSpacing: 1 }}>
          NOU-38 — Logo validé par Rémy
        </p>
        <h1 style={{ fontSize: 26, fontWeight: 800, color: '#0F172A', marginBottom: 8 }}>
          Option C — SOS FUITE D&apos;EAU ANGERS
        </h1>
        <p style={{ fontSize: 15, color: '#64748B', marginBottom: 36 }}>
          Nom complet en majuscules · Texte noir sur fond blanc · Texte blanc sur fond noir · Accent ANGERS orange.
        </p>

        {/* Version fond clair */}
        <div style={{ background: 'white', borderRadius: 16, padding: '28px 32px', border: '1px solid #E2E8F0', marginBottom: 20 }}>
          <p style={{ fontSize: 11, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 20 }}>
            Version fond clair — Header du site
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: 10, color: '#94a3b8', marginBottom: 8 }}>Favicon</p>
              <FaviconPreview />
            </div>
            <div style={{ width: 1, background: '#F1F5F9', height: 80 }} />
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: 10, color: '#94a3b8', marginBottom: 8 }}>Logo header</p>
              <Logo textColor="#0F172A" iconColor="#0B4F8A" />
            </div>
          </div>
        </div>

        {/* Version fond sombre */}
        <div style={{ background: '#0F172A', borderRadius: 16, padding: '28px 32px', border: '1px solid #1e293b', marginBottom: 32 }}>
          <p style={{ fontSize: 11, color: '#475569', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 20 }}>
            Version fond sombre — Hero / Footer / Emails / Socials
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: 10, color: '#475569', marginBottom: 8 }}>Favicon</p>
              <FaviconPreview />
            </div>
            <div style={{ width: 1, background: '#1e293b', height: 80 }} />
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: 10, color: '#475569', marginBottom: 8 }}>Logo header</p>
              <Logo textColor="#FFFFFF" iconColor="#60A5FA" />
            </div>
          </div>
        </div>

        {/* Note de mise en oeuvre */}
        <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 12, padding: '20px 24px' }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: '#0F172A', marginBottom: 8 }}>Mise en œuvre</p>
          <ul style={{ fontSize: 13, color: '#64748B', lineHeight: 1.8, margin: 0, paddingLeft: 18 }}>
            <li>Le logo est un composant SVG React (<code>Logo.tsx</code>) — les couleurs sont des props, pas du CSS inline.</li>
            <li>Header (fond blanc) : texte <strong style={{ color: '#0F172A' }}>noir #0F172A</strong> + icône bleue <strong style={{ color: '#0B4F8A' }}>#0B4F8A</strong></li>
            <li>Footer / Hero / Emails (fond sombre) : texte <strong style={{ color: '#E2E8F0' }}>blanc #FFFFFF</strong> + icône bleue claire <strong style={{ color: '#60A5FA' }}>#60A5FA</strong></li>
            <li>Favicon : carré bleu navy arrondi + gouttelette blanche — visible à 16px dans l&apos;onglet.</li>
          </ul>
        </div>

        <div style={{ marginTop: 28, textAlign: 'center', color: '#94a3b8', fontSize: 12 }}>
          Réponds sur NOU-38 pour confirmer, ou donne tes retouches finales.
        </div>
      </div>
    </main>
  )
}
