import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Choix logo — SOS Fuite d\'Eau Angers',
  robots: { index: false, follow: false },
}

/* ─── Favicon icons (32×32) ─────────────────────────────────────────────── */

function FaviconA() {
  return (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="64" height="64">
      <rect width="32" height="32" rx="7" fill="#0B4F8A" />
      <path d="M16 6c4 5 6.5 8 6.5 11.2A6.5 6.5 0 0 1 16 24a6.5 6.5 0 0 1-6.5-6.8C9.5 14 12 11 16 6z" fill="white" />
      <path d="M11 18 C12.5 16, 14 18.5, 16 17 C18 15.5, 19.5 18, 21 16.5" fill="none" stroke="#0B4F8A" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

function FaviconB() {
  return (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="64" height="64">
      <circle cx="16" cy="16" r="15" fill="#0B4F8A" />
      <circle cx="16" cy="16" r="12" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
      <text x="16" y="14" textAnchor="middle" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="900" fontSize="7" fill="white" letterSpacing="0.5">SOS</text>
      <path d="M10 19 C11.5 17, 13 19.5, 16 18 C19 16.5, 20.5 19, 22 17.5" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}

function FaviconC() {
  return (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="64" height="64">
      <rect width="32" height="32" rx="7" fill="#0B4F8A" />
      <path d="M16 6c4 5 6.5 8 6.5 11.2A6.5 6.5 0 0 1 16 24a6.5 6.5 0 0 1-6.5-6.8C9.5 14 12 11 16 6z" fill="white" />
      <circle cx="13" cy="13" r="2" fill="rgba(255,255,255,0.35)" />
    </svg>
  )
}

function FaviconD() {
  return (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="64" height="64">
      <path d="M16 2 L28 8 L28 18 C28 24 22.5 29 16 30 C9.5 29 4 24 4 18 L4 8 Z" fill="#F97316" />
      <path d="M10 17 C12 15, 14 18, 16 16.5 C18 15, 20 17.5, 22 16" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <text x="16" y="13" textAnchor="middle" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="900" fontSize="6.5" fill="white" letterSpacing="0.3">SOS</text>
    </svg>
  )
}

/* ─── Header logos (220×48) ─────────────────────────────────────────────── */

function LogoA() {
  return (
    <svg viewBox="0 0 230 48" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Option A logo SOS Fuite d'Eau Angers">
      {/* Droplet */}
      <path d="M24 4C24 4 10 18 10 28c0 9.4 6.3 16 14 16s14-6.6 14-16C38 18 24 4 24 4Z" fill="#0B4F8A" />
      <path d="M14 28C17 24 20 31 24 27C28 23 31 30 34 26" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="19" cy="20" r="3" fill="white" fillOpacity="0.2" />
      {/* SOS pill */}
      <rect x="44" y="12" width="36" height="15" rx="7.5" fill="#F97316" />
      <text x="62" y="23.5" textAnchor="middle" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="900" fontSize="9.5" fill="white" letterSpacing="0.8">SOS</text>
      {/* Name */}
      <text x="87" y="22" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="700" fontSize="14" fill="#0F172A" letterSpacing="-0.3">Fuite d&apos;Eau</text>
      <text x="88" y="37" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="600" fontSize="10" fill="#64748B" letterSpacing="2">ANGERS · 49</text>
    </svg>
  )
}

function LogoB() {
  return (
    <svg viewBox="0 0 220 48" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Option B logo SOS Fuite d'Eau Angers">
      {/* Circle badge */}
      <circle cx="24" cy="24" r="21" fill="#0B4F8A" />
      <circle cx="24" cy="24" r="18" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
      <text x="24" y="20.5" textAnchor="middle" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="900" fontSize="9" fill="white" letterSpacing="1">SOS</text>
      <path d="M14 27C16.5 25 19 28 24 26.5C29 25 31.5 27.5 34 26" fill="none" stroke="rgba(255,255,255,0.75)" strokeWidth="1.5" strokeLinecap="round" />
      {/* Name */}
      <text x="53" y="22" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="800" fontSize="15" fill="#0B4F8A" letterSpacing="-0.4">Fuite d&apos;Eau</text>
      <text x="54" y="38" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="700" fontSize="11" fill="#F97316" letterSpacing="2.2">ANGERS</text>
    </svg>
  )
}

function LogoC() {
  return (
    <svg viewBox="0 0 240 48" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Option C logo SOS Fuite d'Eau Angers">
      {/* Droplet */}
      <path d="M24 4C24 4 10 18 10 28c0 9.4 6.3 16 14 16s14-6.6 14-16C38 18 24 4 24 4Z" fill="#0B4F8A" />
      <path d="M14 28C17 24 20 31 24 27C28 23 31 30 34 26" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="19" cy="20" r="3" fill="white" fillOpacity="0.25" />
      {/* Full name with SOS */}
      <text x="48" y="22" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="900" fontSize="15" fill="#0B4F8A" letterSpacing="-0.5">SOS Fuite d&apos;Eau</text>
      <text x="48" y="38" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="700" fontSize="11" fill="#F97316" letterSpacing="2.5">ANGERS</text>
    </svg>
  )
}

function LogoD() {
  return (
    <svg viewBox="0 0 225 48" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Option D logo SOS Fuite d'Eau Angers">
      {/* Shield shape */}
      <path d="M24 3L40 10V22C40 31 32.5 39 24 42C15.5 39 8 31 8 22V10Z" fill="#F97316" />
      <path d="M24 3L40 10V22C40 31 32.5 39 24 42C15.5 39 8 31 8 22V10Z" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
      {/* SOS text in shield */}
      <text x="24" y="19" textAnchor="middle" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="900" fontSize="8.5" fill="white" letterSpacing="0.5">SOS</text>
      {/* Wave in shield */}
      <path d="M13 26C15.5 24 18 26.5 24 25C30 23.5 32.5 26 35 24.5" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.3" strokeLinecap="round" />
      {/* Name */}
      <text x="50" y="21" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="800" fontSize="14.5" fill="#0F172A" letterSpacing="-0.4">Fuite d&apos;Eau</text>
      <text x="50" y="37" fontFamily="system-ui,-apple-system,sans-serif" fontWeight="600" fontSize="11" fill="#64748B" letterSpacing="1.8">ANGERS · URGENCE 24h</text>
    </svg>
  )
}

/* ─── Preview page ───────────────────────────────────────────────────────── */

const OPTIONS = [
  {
    id: 'A',
    favicon: <FaviconA />,
    logo: <LogoA />,
    titre: 'Option A — Pill « SOS » + Fuite d\'Eau Angers',
    desc: 'Le « SOS » est mis en valeur comme un badge orange urgent, séparé du nom. Pictogramme goutte bleue. Lecture naturelle : SOS → Fuite d\'Eau → Angers.',
    recommande: true,
  },
  {
    id: 'B',
    favicon: <FaviconB />,
    logo: <LogoB />,
    titre: 'Option B — Badge circulaire SOS navy',
    desc: 'Sceau professionnel rond avec « SOS » en blanc + vague d\'eau. Nom « Fuite d\'Eau / ANGERS » à côté. Style artisan / service agréé. Favicon distinctif même à 16px.',
    recommande: false,
  },
  {
    id: 'C',
    favicon: <FaviconC />,
    logo: <LogoC />,
    titre: 'Option C — Nom complet « SOS Fuite d\'Eau Angers »',
    desc: 'Le plus proche de l\'original — nom complet conservé avec SOS intégré au texte. Pictogramme goutte, typographie resserrée premium. Option la plus lisible sur fond blanc.',
    recommande: false,
  },
  {
    id: 'D',
    favicon: <FaviconD />,
    logo: <LogoD />,
    titre: 'Option D — Écusson urgence orange',
    desc: 'Écusson / shield orange (couleur urgence) avec SOS blanc. Tranche sur tous les secteurs, rappelle les services d\'urgence. Plus accrocheur mais moins « artisan local ».',
    recommande: false,
  },
]

export default function LogoChoixPage() {
  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', background: '#F6F9FC', minHeight: '100vh', padding: '40px 24px' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <p style={{ fontSize: 12, color: '#94a3b8', marginBottom: 4, textTransform: 'uppercase', letterSpacing: 1 }}>
          Prévisualisation design — NOU-38
        </p>
        <h1 style={{ fontSize: 28, fontWeight: 800, color: '#0F172A', marginBottom: 8 }}>
          Choix du logo
        </h1>
        <p style={{ fontSize: 15, color: '#64748B', marginBottom: 40 }}>
          4 propositions pour « SOS Fuite d&apos;Eau Angers ». Chaque option montre l&apos;icône
          favicon (onglet navigateur) à gauche et le logo header à droite.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {OPTIONS.map((opt) => (
            <div
              key={opt.id}
              style={{
                background: 'white',
                borderRadius: 16,
                padding: '24px 28px',
                border: opt.recommande ? '2px solid #F97316' : '1px solid #E2E8F0',
                boxShadow: opt.recommande ? '0 4px 20px rgba(249,115,22,0.15)' : '0 1px 4px rgba(0,0,0,0.06)',
              }}
            >
              {opt.recommande && (
                <span style={{ fontSize: 11, fontWeight: 700, color: '#F97316', background: '#FFF7ED', padding: '3px 10px', borderRadius: 20, border: '1px solid #FED7AA', display: 'inline-block', marginBottom: 12 }}>
                  ★ Recommandée par le Web Designer
                </span>
              )}
              <h2 style={{ fontSize: 16, fontWeight: 700, color: '#0F172A', marginBottom: 16 }}>
                {opt.titre}
              </h2>

              {/* Logo display */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 20, background: '#F8FAFC', borderRadius: 12, padding: '20px 24px', marginBottom: 16 }}>
                {/* Favicon preview */}
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 10, color: '#94a3b8', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.5 }}>Favicon</div>
                  {opt.favicon}
                </div>
                <div style={{ width: 1, background: '#E2E8F0', height: 80, flexShrink: 0 }} />
                {/* Header logo preview */}
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 10, color: '#94a3b8', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.5 }}>Logo header</div>
                  {opt.logo}
                </div>
              </div>

              {/* Dark background preview */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 20, background: '#0F172A', borderRadius: 12, padding: '20px 24px', marginBottom: 16 }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 10, color: '#475569', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.5 }}>Sur fond sombre</div>
                  {opt.favicon}
                </div>
                <div style={{ width: 1, background: '#1e293b', height: 80, flexShrink: 0 }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 10, color: '#475569', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.5 }}>Logo header</div>
                  {opt.logo}
                </div>
              </div>

              <p style={{ fontSize: 14, color: '#64748B', lineHeight: 1.6, margin: 0 }}>
                {opt.desc}
              </p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 40, padding: '20px 24px', background: '#0F172A', borderRadius: 16, color: 'white' }}>
          <p style={{ fontSize: 14, marginBottom: 4, opacity: 0.7 }}>Pour valider :</p>
          <p style={{ fontSize: 15 }}>
            Réponds <strong>A, B, C ou D</strong> sur l&apos;issue NOU-38 dans Paperclip — ou donne tes retouches directement.
            L&apos;option choisie sera appliquée sur la branche et déployée.
          </p>
        </div>
      </div>
    </main>
  )
}
