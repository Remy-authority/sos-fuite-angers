/**
 * Secteur servi : toutes les communes dont le centre est à 40 km d'Angers ou moins, plus celles
 * qui ont leur page, sans aucune commune grise (Rémy, #R60). Contours : public/carte/secteur-*.svg.
 * Sources : geo.api.gouv.fr (IGN Admin Express, départements 49, 53, 72, 44) ;
 * projection équirectangulaire centrée sur Angers, carte ronde de 46 km de rayon, simplifiée.
 * Généré par scripts/carte-secteur.py : ne pas éditer à la main.
 */
export const CARTE = { w: 1000, h: 1000, cx: 500, cy: 500, rayon: 435, cadre: 500, km: 40, servies: 125, angle40: 2.4504, yNomCentre: 526 }

type Etiquette = { x: number; y: number; taille: number; lignes: string[] }

/** Communes qui ont leur page : cliquables vers /zones/<slug>. */
export const PAGES: { slug: string; nom: string; km: number; x: number; y: number; etiquette: Etiquette | null; d: string }[] = [
  { slug: 'sainte-gemmes-sur-loire', nom: "Sainte-Gemmes-sur-Loire", km: 4.7, x: 486, y: 550, etiquette: { x: 483, y: 570, taille: 17, lignes: ["Sainte-Gemmes-", "sur-Loire"] }, d: 'M507 564l-19 6l-13-3l-14 1l-12 7l2-8l7-9l1-15l10-18l4 1l17 14l4 0l2-6l6-2l-2 11l5 2l3 8l-1 4l7-2l9 5z' },
  { slug: 'avrille', nom: "Avrillé", km: 5.0, x: 461, y: 462, etiquette: { x: 454, y: 462, taille: 17, lignes: ["Avrillé"] }, d: 'M454 479l-4-3l-2-5l-9-2l4-4l-8-4l2-2l0-12l-5-2l4-6l-3 0l8-2l6 3l3-3l3 3l14-4l3 4l10 2l4 5l3-1l3 12l-7 3l-1 5l2 2l-4 4l1 3l-5 7l1 6l-15-3l0-3z' },
  { slug: 'saint-barthelemy-danjou', nom: "Saint-Barthélemy-d'Anjou", km: 5.4, x: 558, y: 496, etiquette: { x: 560, y: 462, taille: 17, lignes: ["Saint-Barthélemy-", "d'Anjou"] }, d: 'M537 478l26 3l8-2l8-5l-2 10l7 3l-1 7l5-1l1 6l-3 5l-5-3l-3 5l-4 0l1 1l-23 12l-2-4l-8-1l-1 3l-10-2l1-4l-4-2l0-7l3-5l2-12z' },
  { slug: 'les-ponts-de-ce', nom: "Les Ponts-de-Cé", km: 5.8, x: 535, y: 553, etiquette: { x: 535, y: 614, taille: 17, lignes: ["Les Ponts-", "de-Cé"] }, d: 'M536 528l5 4l0 3l4 1l2 3l5-1l0-3l3 0l13 8l1 1l-2 5l-5 3l0 4l7 1l1 3l-1 5l-29-2l5 5l0 5l-4 3l-5-1l-2 0l1 4l-1 3l-4 0l-7-3l0-2l-9 3l-7-16l16-4l-9-5l-7 2l1-4l-3-8l-5-2l1-7l9 0l7-3l5-3l2-5l3-1z' },
  { slug: 'trelaze', nom: "Trélazé", km: 6.1, x: 562, y: 523, etiquette: { x: 563, y: 495, taille: 17, lignes: ["Trélazé"] }, d: 'M586 504l3 7l-1 6l3 0l3 7l-8 8l0 2l-11 3l-6 7l-14-9l-3 0l0 3l-5 1l-10-8l-1-1l0-6l-7-3l4-6l8 2l1-3l8 1l2 4l13-6l3-4l2 1l0-2l5-1l-1-1l4 0l1-4l4-1z' },
  { slug: 'beaucouze', nom: "Beaucouzé", km: 6.2, x: 433, y: 496, etiquette: { x: 438, y: 496, taille: 17, lignes: ["Beaucouzé"] }, d: 'M440 467l-1 2l9 2l2 5l4 2l1 16l6 3l-10 3l4 6l2 1l-3 4l-3-2l-2 1l-1 3l3 6l-5 5l-3 0l-6 5l-9-2l-8-7l1-3l-8-10l2-6l-1-4l2-2l1 2l0-6l-1-1l0 4l-3 1l-8-5l5-7l2 3l1-3l14 1l-4-5l-4 0l-2-7l-3 0l2-3l-2-2l3-1l8 3l3-6z' },
  { slug: 'bouchemaine', nom: "Bouchemaine", km: 7.1, x: 442, y: 551, etiquette: { x: 426, y: 605, taille: 17, lignes: ["Bouchemaine"] }, d: 'M449 575l-7 13l-6 0l0-3l-3 1l-11-11l-4-11l-2-1l2-2l-2-3l6-5l-10-13l9-15l0-5l7 7l9 2l18-12l1 2l2-3l5 3l2-1l0-4l5 1l0 4l2 1l-2 2l3 1l-5 4l-8 14l-2 17l-7 9z' },
  { slug: 'verrieres-en-anjou', nom: "Verrières-en-Anjou", km: 7.9, x: 565, y: 443, etiquette: { x: 565, y: 416, taille: 17, lignes: ["Verrières-", "en-Anjou"] }, d: 'M538 477l11-10l0-3l-8-3l1-4l-10-5l3-13l5 1l3-4l-4-3l1-2l8-5l5-8l9 7l5 0l6-7l-1-10l4-2l4 3l4 3l2 13l11 0l-1 22l-2 0l-2 5l4 4l-8 11l-2-2l-4 2l-4 7l-7 5l-17 2z' },
]

/** Noms des autres communes servies (les plus peuplées, tant qu'il y a la place). */
export const NOMS: { nom: string; etiquette: Etiquette }[] = [
  { nom: "Chemillé-en-Anjou", etiquette: { x: 403, y: 800, taille: 13, lignes: ["Chemillé-", "en-Anjou"] } },
  { nom: "Mauges-sur-Loire", etiquette: { x: 179, y: 653, taille: 13, lignes: ["Mauges-", "sur-Loire"] } },
  { nom: "Segré-en-Anjou Bleu", etiquette: { x: 266, y: 212, taille: 13, lignes: ["Segré-en-", "Anjou Bleu"] } },
  { nom: "Loire-Authion", etiquette: { x: 640, y: 502, taille: 13, lignes: ["Loire-", "Authion"] } },
  { nom: "Baugé-en-Anjou", etiquette: { x: 865, y: 393, taille: 13, lignes: ["Baugé-en-", "Anjou"] } },
  { nom: "Doué-en-Anjou", etiquette: { x: 698, y: 827, taille: 13, lignes: ["Doué-en-", "Anjou"] } },
  { nom: "Brissac Loire Aubance", etiquette: { x: 591, y: 658, taille: 13, lignes: ["Brissac Loire", "Aubance"] } },
  { nom: "Les Hauts-d'Anjou", etiquette: { x: 508, y: 228, taille: 13, lignes: ["Les Hauts-", "d'Anjou"] } },
  { nom: "Gennes-Val-de-Loire", etiquette: { x: 734, y: 655, taille: 13, lignes: ["Gennes-Val-", "de-Loire"] } },
  { nom: "Montreuil-Juigné", etiquette: { x: 445, y: 411, taille: 13, lignes: ["Montreuil-", "Juigné"] } },
  { nom: "Lys-Haut-Layon", etiquette: { x: 606, y: 885, taille: 13, lignes: ["Lys-Haut-", "Layon"] } },
  { nom: "Loireauxence", etiquette: { x: 115, y: 543, taille: 13, lignes: ["Loireauxence"] } },
  { nom: "Beaufort-en-Anjou", etiquette: { x: 776, y: 540, taille: 13, lignes: ["Beaufort-", "en-Anjou"] } },
  { nom: "Chalonnes-sur-Loire", etiquette: { x: 330, y: 646, taille: 13, lignes: ["Chalonnes-", "sur-Loire"] } },
  { nom: "Longuenée-en-Anjou", etiquette: { x: 406, y: 376, taille: 13, lignes: ["Longuenée-", "en-Anjou"] } },
  { nom: "Longué-Jumelles", etiquette: { x: 845, y: 590, taille: 13, lignes: ["Longué-", "Jumelles"] } },
  { nom: "Bellevigne-en-Layon", etiquette: { x: 514, y: 739, taille: 13, lignes: ["Bellevigne-", "en-Layon"] } },
  { nom: "Erdre-en-Anjou", etiquette: { x: 286, y: 358, taille: 13, lignes: ["Erdre-en-", "Anjou"] } },
  { nom: "Mazé-Milon", etiquette: { x: 723, y: 499, taille: 13, lignes: ["Mazé-Milon"] } },
  { nom: "Rives-du-Loir-en-Anjou", etiquette: { x: 584, y: 376, taille: 13, lignes: ["Rives-du-Loir-", "en-Anjou"] } },
  { nom: "Le Lion-d'Angers", etiquette: { x: 350, y: 304, taille: 13, lignes: ["Le Lion-", "d'Angers"] } },
  { nom: "Val d'Erdre-Auxence", etiquette: { x: 182, y: 459, taille: 13, lignes: ["Val d'Erdre-", "Auxence"] } },
  { nom: "Les Garennes sur Loire", etiquette: { x: 598, y: 577, taille: 13, lignes: ["Les Garennes", "sur Loire"] } },
  { nom: "Tiercé", etiquette: { x: 591, y: 314, taille: 13, lignes: ["Tiercé"] } },
  { nom: "Terranjou", etiquette: { x: 596, y: 743, taille: 13, lignes: ["Terranjou"] } },
  { nom: "Saint-Léger-de-Linières", etiquette: { x: 373, y: 528, taille: 13, lignes: ["Saint-Léger-", "de-Linières"] } },
  { nom: "Saint-Georges-sur-Loire", etiquette: { x: 339, y: 576, taille: 13, lignes: ["Saint-Georges-", "sur-Loire"] } },
  { nom: "Morannes sur Sarthe-Daumeray", etiquette: { x: 624, y: 203, taille: 13, lignes: ["Morannes sur", "Sarthe-Daumeray"] } },
  { nom: "Val-du-Layon", etiquette: { x: 416, y: 689, taille: 13, lignes: ["Val-du-", "Layon"] } },
  { nom: "Durtal", etiquette: { x: 741, y: 266, taille: 13, lignes: ["Durtal"] } },
  { nom: "Briollay", etiquette: { x: 548, y: 348, taille: 13, lignes: ["Briollay"] } },
  { nom: "Ingrandes-le-Fresne-sur-Loire", etiquette: { x: 187, y: 568, taille: 13, lignes: ["Ingrandes-le-", "Fresne-sur-Loire"] } },
  { nom: "Saint-Lambert-la-Potherie", etiquette: { x: 377, y: 465, taille: 13, lignes: ["Saint-Lambert-", "la-Potherie"] } },
  { nom: "Précigné", etiquette: { x: 696, y: 149, taille: 13, lignes: ["Précigné"] } },
  { nom: "Seiches-sur-le-Loir", etiquette: { x: 668, y: 349, taille: 13, lignes: ["Seiches-sur-", "le-Loir"] } },
  { nom: "Bécon-les-Granits", etiquette: { x: 294, y: 460, taille: 13, lignes: ["Bécon-les-", "Granits"] } },
  { nom: "Candé", etiquette: { x: 108, y: 393, taille: 13, lignes: ["Candé"] } },
  { nom: "Jarzé Villages", etiquette: { x: 750, y: 392, taille: 13, lignes: ["Jarzé", "Villages"] } },
  { nom: "Vivy", etiquette: { x: 893, y: 680, taille: 13, lignes: ["Vivy"] } },
  { nom: "Les Bois d'Anjou", etiquette: { x: 841, y: 521, taille: 13, lignes: ["Les Bois", "d'Anjou"] } },
  { nom: "La Possonnière", etiquette: { x: 404, y: 634, taille: 13, lignes: ["La", "Possonnière"] } },
  { nom: "Feneu", etiquette: { x: 464, y: 365, taille: 13, lignes: ["Feneu"] } },
  { nom: "Saint-Clément-de-la-Place", etiquette: { x: 341, y: 428, taille: 13, lignes: ["Saint-Clément-", "de-la-Place"] } },
  { nom: "La Ménitré", etiquette: { x: 745, y: 573, taille: 13, lignes: ["La Ménitré"] } },
  { nom: "Mozé-sur-Louet", etiquette: { x: 496, y: 655, taille: 13, lignes: ["Mozé-sur-", "Louet"] } },
  { nom: "Corzé", etiquette: { x: 657, y: 414, taille: 13, lignes: ["Corzé"] } },
  { nom: "Bazouges Cré sur Loir", etiquette: { x: 814, y: 254, taille: 13, lignes: ["Bazouges Cré", "sur Loir"] } },
  { nom: "Champtocé-sur-Loire", etiquette: { x: 238, y: 536, taille: 13, lignes: ["Champtocé-", "sur-Loire"] } },
  { nom: "Tuffalun", etiquette: { x: 677, y: 741, taille: 13, lignes: ["Tuffalun"] } },
  { nom: "La Chapelle-d'Aligné", etiquette: { x: 760, y: 181, taille: 13, lignes: ["La Chapelle-", "d'Aligné"] } },
  { nom: "Coron", etiquette: { x: 430, y: 922, taille: 13, lignes: ["Coron"] } },
  { nom: "Étriché", etiquette: { x: 576, y: 274, taille: 13, lignes: ["Étriché"] } },
]
