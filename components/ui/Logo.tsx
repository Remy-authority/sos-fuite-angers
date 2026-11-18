/**
 * Logo inline SVG, « SOS Fuite Angers » (refonte du 18/11/2026, kickoff Rémy).
 *
 * La marque dit le métier sans légende : une GOUTTE prise dans un VISEUR, la fuite trouvée et
 * marquée. Anneau et quatre repères en orange (le point visé), goutte pleine en bleu eau.
 * Masses pleines et traits épais : la silhouette survit à 16 px. Lisible dans les deux sens
 * de contraste (goutte bleue sur blanc, goutte blanche sur nuit). Le favicon (app/icon.svg)
 * reprend exactement la même marque.
 */
import { siteConfig } from '@/config/site.config'

type Variant = 'clair' | 'sombre'

const c = siteConfig.colors
const PALETTE: Record<Variant, { goutte: string; viseur: string; texte: string; ville: string }> = {
  clair: { goutte: c.primary, viseur: c.accent, texte: '#0F1A2E', ville: c.accent },
  sombre: { goutte: '#FFFFFF', viseur: '#FDBA74', texte: '#FFFFFF', ville: '#FDBA74' },
}

/* Géométrie de la marque dans un carré 48 x 48, centre (24, 24). */
export const MARQUE_VISEUR = { cx: 24, cy: 24, r: 18.4 }
export const MARQUE_REPERES = 'M24 1.5v8M24 38.5v8M1.5 24h8M38.5 24h8'
export const MARQUE_GOUTTE = 'M24 11.5c5.2 6.6 8.4 10.8 8.4 15.3a8.4 8.4 0 0 1-16.8 0c0-4.5 3.2-8.7 8.4-15.3Z'

function Marque({ goutte, viseur }: { goutte: string; viseur: string }) {
  return (
    <>
      <circle {...MARQUE_VISEUR} fill="none" stroke={viseur} strokeWidth="3.4" />
      <path d={MARQUE_REPERES} stroke={viseur} strokeWidth="3.4" strokeLinecap="round" />
      <path d={MARQUE_GOUTTE} fill={goutte} />
    </>
  )
}

export default function Logo({
  variant = 'clair',
  empile = false,
  className,
}: {
  variant?: Variant
  /** Version empilée (marque au-dessus, lettrage centré dessous) : pied de page, centrée au pixel. */
  empile?: boolean
  className?: string
}) {
  const p = PALETTE[variant]
  const display = "var(--font-display), var(--font-sora), ui-sans-serif, system-ui, sans-serif"
  const sans = 'var(--font-sora), ui-sans-serif, system-ui, sans-serif'

  if (empile) {
    /* Tout est centré sur l'axe x = 80 : la marque (48 de large, de 56 à 104) et les deux
       lignes de texte en text-anchor middle. Le dessin est centré au pixel, pas seulement sa boîte. */
    return (
      <svg viewBox="0 0 160 92" className={className ?? 'h-[5.5rem] w-auto'} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
        <g transform="translate(56 0)">
          <Marque goutte={p.goutte} viseur={p.viseur} />
        </g>
        <text x="80" y="71" textAnchor="middle" fontFamily={display} fontWeight="700" fontSize="17" fill={p.texte} letterSpacing="0.2">
          SOS FUITE
        </text>
        <text x="80" y="88" textAnchor="middle" fontFamily={sans} fontWeight="600" fontSize="10" fill={p.ville} letterSpacing="3.4">
          ANGERS
        </text>
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 150 48" className={className ?? 'h-9 w-auto'} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
      <g transform="translate(0 3.6) scale(0.85)">
        <Marque goutte={p.goutte} viseur={p.viseur} />
      </g>
      <text x="52" y="23" fontFamily={display} fontWeight="700" fontSize="17" fill={p.texte} letterSpacing="0.2">
        SOS FUITE
      </text>
      <text x="53" y="39" fontFamily={sans} fontWeight="600" fontSize="10" fill={p.ville} letterSpacing="3.4">
        ANGERS
      </text>
    </svg>
  )
}
