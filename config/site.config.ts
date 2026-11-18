/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  site.config.ts, LE fichier unique qui pilote l'identité du site.
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
  businessName: "SOS Fuite Angers",
  trade: 'Recherche de fuite d’eau',
  city: 'Angers',
  region: 'Maine-et-Loire',
  department: '49',

  /* ── Contact (variables, remplaçables sans toucher au SEO) ── */
  // Aucun numéro tant que le 09 Twilio du site n'est pas acheté (#R12, Rémy 21/08/2026).
  // L'ancien 02 61 91 00 41 était FICTIF (commentaire « numéro réel » faux, corrigé le 18/11/2026).
  // Vide = aucun lien tel:, chaque bouton d'appel devient le bouton de devis.
  phone: '',
  phoneDisplay: '',
  email: 'contact@sos-fuite-angers.fr',

  /* ── Branding : ces 3 hex re-thèment tout le site via CSS vars ── */
  logo: '/logo.svg',
  colors: {
    // Famille « eau » validée en preview (Gate B). Bleu eau + accent orange urgence.
    primary: '#0B4F8A', // bleu eau (CTA secondaires, liens, titres)
    primaryDark: '#0A3E6E',
    accent: '#F97316', // orange urgence (CTA principal, téléphone/devis)
    dark: '#0F172A', // fond sombre (hero / footer, cf. template de référence)
    light: '#F6F9FC',
  },

  /* ── Réassurance / preuve (hero, badges, footer) ── */
  usps: ['Devis gratuit', 'Sans casse', 'Rapport pour l’assurance'],
  methods: ['Gaz traceur', 'Caméra thermique', 'Détection acoustique'],

  /* ── Zone d'intervention (schema areaServed + bloc zones) ── */
  serviceArea: {
    base: 'Angers',
    radiusKm: 40,
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

  /* ── SEO global (défauts, surchargés par page, textes fournis par le SEO ST-2) ── */
  seo: {
    // NB: basculer sur le domaine final au Gate C. Preview = URL vercel.
    canonicalBase: 'https://www.sos-fuite-angers.fr',
    defaultOgImage: '/og.png',
    locale: 'fr_FR',
    lang: 'fr',
  },

  /* ── Feature flags ── */
  features: {
    reviews: false, // ⛔ aucun avis affiché tant que la fiche Google n'existe pas
    gallery: false, // aucune galerie tant qu'il n'y a pas de vraies photos de chantier
    blog: true, // section /conseils (autoblog)
  },

  /* ── FAQ accueil (réécrite le 18/11/2026, sans promesse ni chiffre inventé) ── */
  homeFaq: [
    {
      q: "Quel budget prévoir pour localiser une fuite à Angers ?",
      a: "En général de 200 à 500 € selon la méthode et l'accès, d'après les prix relevés en France. Le devis est gratuit : vous connaissez le prix avant notre venue.",
    },
    {
      q: "Va-t-on devoir ouvrir un mur ou soulever du carrelage ?",
      a: "Non. Caméra thermique, gaz traceur, écoute et humidimètre localisent la fuite sans rien ouvrir. Nous marquons le point exact : seule cette petite zone sera ouverte pour la réparation.",
    },
    {
      q: "Mon assurance prend-elle en charge la recherche de fuite ?",
      a: "Souvent, quand la fuite a causé un dégât des eaux : la convention IRSI encadre cette prise en charge entre assureurs. Notre rapport, avec méthode et photos, accompagne votre déclaration. Vérifiez votre contrat.",
    },
    {
      q: 'Qui répare la fuite une fois trouvée ?',
      a: 'Une fois la fuite marquée, nous vous expliquons la réparation à prévoir et pouvons la chiffrer. Vous restez libre de la confier à qui vous voulez.',
    },
    {
      q: "Que faire en attendant votre passage ?",
      a: "Fermez le robinet d'arrivée d'eau, souvent près du compteur, et coupez l'électricité de la pièce touchée. Photographiez les dégâts et prévenez le voisin du dessous si vous êtes en appartement.",
    },
    {
      q: "Dans quelles communes autour d'Angers intervenez-vous ?",
      a: "Angers et toutes les communes à 40 km ou moins : Avrillé, Trélazé, Beaucouzé, Les Ponts-de-Cé, Bouchemaine, Saint-Barthélemy-d'Anjou, Sainte-Gemmes-sur-Loire, Verrières-en-Anjou et les bourgs alentour.",
    },
  ],

  /* ── Légal (GABARIT, à compléter par Rémy avant prod, cf. content/legal.json) ── */
  legal: {
    // Ces champs restent le gabarit paramétrable. NE PAS inventer de valeurs.
    showAddress: false, // false => schema Plumber SANS address (défaut NOU-33)
    // address n'est utilisée QUE si showAddress=true.
    address: { street: '', postalCode: '49000', city: 'Angers' },
  },
} as const
