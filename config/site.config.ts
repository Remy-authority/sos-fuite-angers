/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  site.config.ts — LE fichier unique qui pilote l'identité du site.
 * ─────────────────────────────────────────────────────────────────────────────
 *  C'est le cœur du template « site local N+1 ». Pour déployer un nouveau site
 *  (autre métier / ville / locataire) en < 1 jour : on édite CE fichier + le logo
 *  + les fichiers content/*.json, SANS toucher aux composants ni au SEO.
 *
 *  Personnalisation location : nom, logo, téléphone, email, couleurs, SIREN…
 *  tout est ici → un changement de locataire = édition de config, sans impact SEO.
 *
 *  ⚠️ Garde-fous (NOU-33) :
 *   - `colors` alimente les CSS variables (voir app/layout.tsx) → tailwind.config.ts.
 *   - `features.reviews=false` tant qu'il n'y a pas d'avis Google réels (aucun faux avis).
 *   - `legal` = gabarit paramétrable : NE PAS inventer SIREN / éditeur (fourni par Rémy).
 *   - `showAddress=false` par défaut : pas d'`address` dans le schema Plumber tant que
 *     Rémy n'a pas tranché (artisan à domicile vs adresse physique exposée).
 */

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  /* ── Identité commerciale (louable / remplaçable par l'artisan locataire) ── */
  businessName: "SOS Fuite d'Eau Angers",
  trade: 'Recherche de fuite d’eau',
  city: 'Angers',
  region: 'Maine-et-Loire',
  department: '49',

  /* ── Contact (variables — remplaçables sans toucher au SEO) ── */
  // Numéro réel de Rémy (commit 90d70fd). E.164 pour tel:, display pour l'affichage.
  phone: '+33756853125',
  phoneDisplay: '07 56 85 31 25',
  email: 'contact@sosfuite-angers.fr',

  /* ── Branding : ces 3 hex re-thèment tout le site via CSS vars ── */
  logo: '/logo.svg',
  colors: {
    // Famille « eau » validée en preview (Gate B). Bleu eau + accent orange urgence.
    primary: '#0B4F8A', // bleu eau (CTA secondaires, liens, titres)
    primaryDark: '#0A3E6E',
    accent: '#F97316', // orange urgence (CTA principal — téléphone/devis)
    dark: '#0F172A', // fond sombre (hero / footer, cf. template de référence)
    light: '#F6F9FC',
  },

  /* ── Réassurance / preuve (hero, badges, footer) ── */
  availability: '24h/24 · 7j/7',
  responseTime: 'Intervention rapide sur Angers',
  usps: ['Devis gratuit', 'Sans dégâts', 'Artisan local', 'Assurance décennale'],
  methods: ['Gaz traceur', 'Caméra thermique', 'Détection acoustique'],

  /* ── Zone d'intervention (schema areaServed + bloc zones) ── */
  serviceArea: {
    base: 'Angers',
    radiusKm: 25,
    // Quartiers d'Angers cités pour la couverture géo fine (maillage, pas de page dédiée).
    districts: [
      'Doutre', 'Belle-Beille', 'Lac de Maine', 'Monplaisir', 'La Roseraie',
      'Justices', 'Saint-Serge', 'Madeleine', 'Centre-ville',
    ],
  },

  /* ── Leads / formulaire ── */
  // Endpoint de soumission. Vide => l'API interne /api/contact gère le fallback
  // (log + email tier gratuit). Remplaçable par un webhook Formspree, etc.
  // Aucune dépense engagée : défaut = fallback interne sans coût.
  formEndpoint: '',

  /* ── SEO global (défauts, surchargés par page — textes fournis par le SEO ST-2) ── */
  seo: {
    // NB: basculer sur le domaine final au Gate C. Preview = URL vercel.
    canonicalBase: 'https://sos-fuite-angers.vercel.app',
    defaultOgImage: '/og.png',
    locale: 'fr_FR',
    lang: 'fr',
  },

  /* ── Feature flags ── */
  features: {
    reviews: false, // ⛔ aucun avis affiché tant que la fiche Google n'existe pas
    gallery: false, // galerie réalisations masquée tant qu'il n'y a pas de photos réelles
    blog: true, // section /conseils (autoblog)
  },

  /* ── Sections visuelles (ST-3) — textes placeholder en attente ST-5 ── */
  about: {
    title: "Votre spécialiste fuite d'eau à Angers",
    body: "[À rédiger — ST-5] Artisan local indépendant, formé aux dernières techniques de détection non destructive. Nous intervenons sur Angers et un rayon de 25 km pour localiser précisément vos fuites, sans casser ni abîmer vos revêtements.",
    highlight: 'Artisan certifié, entreprise locale',
  },

  process: [
    { icon: 'phone', title: 'Vous nous appelez', desc: "[ST-5] Prise en charge immédiate, diagnostic téléphonique rapide." },
    { icon: 'search', title: 'Diagnostic sur site', desc: "[ST-5] Inspection visuelle et tests de pression pour cibler la zone suspecte." },
    { icon: 'tool', title: 'Détection précise', desc: "[ST-5] Gaz traceur, caméra thermique ou acoustique selon le cas." },
    { icon: 'check', title: 'Rapport & devis', desc: "[ST-5] Rapport de localisation précis + devis travaux de réparation si nécessaire." },
  ],

  stats: [
    { value: '+500', label: 'Fuites détectées' },
    { value: '25 km', label: "Rayon d'intervention" },
    { value: '100%', label: 'Non destructif' },
  ],

  whyUs: [
    { icon: 'shield', title: 'Aucune destruction inutile', desc: 'Nous localisons avant de couper. Votre carrelage, vos murs et vos sols sont préservés.' },
    { icon: 'clock', title: 'Disponible 24h/24', desc: "Fuite urgente ou programmée, nous répondons 7j/7 avec un délai d'intervention rapide." },
    { icon: 'star', title: 'Artisan local certifié', desc: "Pas d'intermédiaire, pas de franchise. Un artisan indépendant que vous pouvez rappeler." },
    { icon: 'doc', title: 'Rapport pour assurance', desc: 'Rapport de localisation officiel pour votre assurance et syndic de copropriété.' },
  ],

  /* ── Légal (GABARIT — à compléter par Rémy avant prod, cf. content/legal.json) ── */
  legal: {
    // Ces champs restent le gabarit paramétrable. NE PAS inventer de valeurs.
    showAddress: false, // false => schema Plumber SANS address (défaut NOU-33)
    // address n'est utilisée QUE si showAddress=true.
    address: { street: '', postalCode: '49000', city: 'Angers' },
  },
} as const
