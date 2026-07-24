# SEO-GEO-PLAN.md — Feuille de route SEO & GEO — SOS Fuite Angers

> Audit LECTURE SEULE (agent SEO/GEO). Aucun fichier de code/contenu modifié.
> Date : 2026-07-25. Périmètre : accueil, `app/services/[slug]`, `app/zones/[slug]`,
> `app/conseils`, pages légales, technique (`lib/seo.ts`, `sitemap.ts`, `robots.ts`, JSON-LD,
> `config/site.config.ts`).

---

## 0. Verdict en une phrase

L'architecture SEO technique est **solide et bien pensée** (canonical, sitemap, JSON-LD
Plumber/Service/FAQPage/BreadcrumbList, maillage interne systématique). Les vrais manques sont :
**un bug d'image OG cassée**, **un canonical encore sur Vercel**, **le FAQ des articles de blog
non exploité en données structurées**, et **deux services sans aucun article de blog dédié**
(piscine, encastrée). Rien ici ne remet en cause le design ni le contenu déjà validés par Rémy.

---

## 1. CARTE DE MOTS-CLÉS PAR PAGE

### Accueil (`/`)
- **Principal** : recherche de fuite d'eau Angers
- **Secondaires** : détection de fuite d'eau Angers, fuite d'eau Angers, recherche de fuite non
  destructive Angers, urgence fuite d'eau Angers

### Services (`app/services/[slug]`)

| Slug | Mot-clé principal | Mots-clés secondaires |
|---|---|---|
| `urgence-fuite-eau` | urgence fuite d'eau Angers | fuite d'eau urgente Angers, intervention fuite eau 24h/24, que faire en cas de fuite d'eau |
| `detection-fuite-non-destructive` | détection de fuite d'eau non destructive Angers | recherche de fuite sans casse, gaz traceur fuite d'eau, caméra thermique fuite d'eau, détection acoustique fuite |
| `recherche-fuite-canalisation-enterree` | recherche de fuite canalisation enterrée Angers | fuite canalisation enterrée jardin, corrélation acoustique fuite, fuite eau souterraine, compteur qui tourne sans raison |
| `recherche-fuite-encastree` | recherche de fuite encastrée Angers | fuite dans un mur, fuite plancher chauffant, détection fuite sol sans casser |
| `recherche-fuite-piscine` | recherche de fuite piscine Angers | piscine qui perd de l'eau, fuite liner piscine, détection fuite piscine sans vidange |
| `assechement-degat-des-eaux` | assèchement dégât des eaux Angers | recherche de fuite dégât des eaux assurance, rapport IRSI fuite, séchage après dégât des eaux |

### Zones (`app/zones/[slug]`)
Motif identique pour les 6 communes — **principal** : « recherche de fuite d'eau à [Commune] » ;
**secondaires** : « détection fuite eau [Commune] ([CP]) », « fuite d'eau urgence [Commune] ».
Couvre : Avrillé, Beaucouzé, Bouchemaine, Les Ponts-de-Cé, Saint-Barthélemy-d'Anjou, Trélazé.

### Conseils (`/conseils`, 7 articles publiés)
Chaque article cible déjà une requête longue traîne claire et un service lié (détail au §2 —
tableau de couverture). Bonne dispersion sur assurance / copropriété / méthodes de détection.

---

## 2. BACKLOG DE CONTENU PRIORISÉ (feuille de route Autoblog)

**Constat clé** : sur 7 articles publiés, **aucun ne relie en service principal**
`recherche-fuite-piscine` ni `recherche-fuite-encastree` — ce sont les deux pages de service les
moins soutenues par le maillage blog. Priorité 1 et 2 ci-dessous comblent ce trou.

| # | Titre proposé | Requête cible | Intention | `relatedServices` | Impact |
|---|---|---|---|---|---|
| 1 | Piscine qui perd de l'eau : évaporation normale ou vraie fuite ? | piscine perd de l'eau évaporation ou fuite | Informationnelle, pré-achat | `recherche-fuite-piscine` | **Fort** — comble le seul service sans article ; requête très googlée en saison |
| 2 | Fuite dans un mur : les signes qui ne trompent pas (et comment la localiser sans tout casser) | fuite d'eau dans un mur signes | Informationnelle, anxiété/urgence | `recherche-fuite-encastree` | **Fort** — comble le 2ᵉ service sans article |
| 3 | Facture d'eau anormalement élevée : les causes possibles et comment réagir | facture eau qui explose sans raison | Informationnelle à forte recherche | `detection-fuite-non-destructive`, `urgence-fuite-eau` | **Fort** — requête très volumique, symptôme n°1 qui amène un client à chercher un pro |
| 4 | Locataire ou propriétaire : qui doit payer la recherche de fuite d'eau ? | qui paie recherche de fuite locataire propriétaire | Informationnelle/légale | `urgence-fuite-eau`, `detection-fuite-non-destructive` | **Fort** — question juridique très recherchée, distincte de l'article copropriété déjà publié |
| 5 | Plancher chauffant qui ne chauffe plus : et si c'était une fuite ? | plancher chauffant fuite d'eau | Informationnelle, symptôme précis | `recherche-fuite-encastree` | Moyen |
| 6 | Caméra thermique pour trouver une fuite : dans quels cas ça marche (et quand ça ne suffit pas) | caméra thermique détection fuite eau | Informationnelle, complète l'article gaz traceur existant | `detection-fuite-non-destructive` | Moyen |
| 7 | Corrélation acoustique : comment on localise une fuite au bruit | corrélation acoustique fuite d'eau | Informationnelle technique | `recherche-fuite-canalisation-enterree` | Moyen |
| 8 | Fuite d'eau la nuit ou le week-end : qui appeler à Angers ? | fuite d'eau urgence week-end Angers | Transactionnelle locale | `urgence-fuite-eau` | Moyen — bon pour le maillage local + GEO (réponse factuelle citable) |
| 9 | Assurance habitation et dégât des eaux : ce qui est pris en charge (et ce qui ne l'est pas) | dégât des eaux assurance prise en charge | Informationnelle/légale, complète l'article démarches déjà publié | `assechement-degat-des-eaux` | Faible-Moyen |
| 10 | Combien de temps dure une recherche de fuite d'eau ? Déroulé heure par heure | durée recherche de fuite d'eau | Informationnelle pré-achat | `detection-fuite-non-destructive` | Faible |

Règle CLAUDE.md rappelée à l'Autoblog : pas de chiffres inventés (durées, tarifs, statistiques),
contenu vrai et vérifiable uniquement.

---

## 3. PAGES MANQUANTES

### Zones — communes voisines citées mais sans page dédiée
Plusieurs communes apparaissent déjà comme `neighbours` dans les zones existantes mais n'ont pas
leur propre page (donc pas de citation possible, pas de maillage entrant) :

| Commune | Citée comme voisine de | Priorité | Pourquoi |
|---|---|---|---|
| Verrières-en-Anjou | Saint-Barthélemy-d'Anjou | **Forte** | Commune fusionnée, population importante (~11-12k hab.), pas encore couverte |
| Sainte-Gemmes-sur-Loire | Bouchemaine, Les Ponts-de-Cé | **Forte** | ~7 500 hab., citée deux fois comme voisine sans jamais avoir sa page |
| Montreuil-Juigné | Avrillé | Moyenne | ~7 000 hab. |
| Écouflant | (aucune zone actuelle, mais limitrophe nord Angers) | Moyenne | Petite commune mais zone nord non couverte |
| Cantenay-Épinard, Saint-Léger-de-Linières, Saint-Jean-de-Linières | Avrillé, Beaucouzé | Faible | Communes plus petites/rurales, volume de recherche probablement faible |

### Services
Aucun manque évident dans le cœur de métier (détection non destructive). Piste faible priorité,
à ne considérer qu'après la vague zones : une page dédiée « recherche de fuite en copropriété /
réseau collectif » si ce cas revient souvent en lead — pas assez de signal aujourd'hui pour la
prioriser.

---

## 4. GEO / CITABILITÉ IA

### Ce qui est déjà bien fait
- **Réponse courte factuelle** : chaque page service et zone a un bloc `intro` mis en avant
  (« En bref ») juste après le H1 — exactement le format que les IA aiment extraire. ✅
- **FAQ + FAQPage JSON-LD** : présent et correctement câblé sur home, services, zones (le
  composant `Faq.tsx` génère lui-même le schema — bonne architecture, pas de duplication). ✅
- **Schema Plumber, Service, BreadcrumbList, Article** : tous présents et cohérents avec la
  doctrine CLAUDE.md (pas d'`AggregateRating`/`Review` inventés, pas d'`address` tant que Rémy
  n'a pas tranché). ✅
- **Accès crawlers IA** : `robots.ts` n'a qu'une règle `userAgent: '*'` qui `allow: '/'` — cela
  autorise **déjà** GPTBot, ClaudeBot, PerplexityBot par défaut (aucune règle ne les bloque).
  Techniquement non bloquant, mais **pas explicite**.

### Ce qui manque
- **⚠️ FAQ des articles de blog non exploitée en données structurées.** 6 des 7 articles
  `content/conseils/*.mdx` contiennent une section `## FAQ` rédigée en Markdown (H3 = question,
  paragraphe = réponse) — exactement le contenu qu'il faudrait pour un `FAQPage` JSON-LD. Mais
  `app/conseils/[slug]/page.tsx` ne rend que `articleJsonLd()`, jamais `faqJsonLd()` : ce contenu
  FAQ est invisible pour Google/IA en tant que données structurées, alors que le texte existe déjà.
  **Fix simple** : extraire les Q/R du Markdown (ou les dupliquer en frontmatter `faq: [...]`
  comme pour les services/zones) et rendre `<Faq items={...} />` en bas de chaque article.
- **Règles explicites GPTBot / ClaudeBot / PerplexityBot dans `robots.ts`** : ajouter des blocs
  `{ userAgent: 'GPTBot', allow: '/' }` etc. par clarté et pour se prémunir d'un futur changement
  de règle générale qui bloquerait ces bots par accident.
- **`llms.txt`** : absent. Opportunité simple (fichier statique `public/llms.txt`) résumant
  l'activité, la zone couverte, les services et un lien vers le sitemap — aide les IA génératives
  à comprendre le site sans re-parser tout le HTML. Faible effort, bénéfice progressif.
- **Réponse courte sur l'accueil** : les pages service/zone ont un bloc `intro` GEO dédié ; la
  home n'a qu'un Hero marketing, sans paragraphe factuel équivalent (« Qui sommes-nous, quelle
  zone, quelles méthodes » en 2-3 phrases citables). À considérer si l'accueil doit aussi être
  citée telle quelle par une IA.

---

## 5. CHECKLIST TECHNIQUE

| Point | État | Détail |
|---|---|---|
| Canonical | ⚠️ **À corriger avant prod** | `siteConfig.seo.canonicalBase` = `https://sos-fuite-angers.vercel.app` (déjà identifié dans ETAT.md). Bascule vers `https://sos-fuite-angers.fr` dès le domaine branché. |
| Image Open Graph | 🔴 **Cassée** | `defaultOgImage: '/og.png'` référencé partout (`buildMetadata`) mais **le fichier `public/og.png` n'existe pas**. Toute page partagée sur les réseaux/messageries affiche un aperçu sans image. À générer (1200×630, avec logo + accroche) et déposer en `public/og.png`. |
| Icônes manifest PWA | 🟡 Mineur | `app/manifest.ts` référence `/icon-192.png` et `/icon-512.png` — **absents de `public/`**. Le favicon lui-même est OK (`app/icon.svg` via convention Next), seul l'aspect « ajouter à l'écran d'accueil » est cassé. |
| Sitemap | ✅ | `app/sitemap.ts` génère bien home, zones hub, contact, mentions légales, tous les services, toutes les zones, tous les articles ; exclut correctement les pages noindex. |
| Robots.txt | ✅ (avec opportunité GEO §4) | Noindex total en preview (`IS_NOINDEX`), sinon `allow: '/'` avec exclusions utilitaires cohérentes. |
| Meta (title/description) | ✅ | Chaque page a un `metaTitle`/`metaDescription` unique et distinct du H1, longueurs raisonnables. |
| Maillage interne | ✅ | Home ↔ Services ↔ Zones ↔ Conseils tous interconnectés (header, footer, blocs « Prestations liées », « À lire aussi », `ServiceAreaMap`). Aucune page orpheline détectée. |
| Alt images | 🟡 Correct mais générique | Hero de service : `alt={service.h1}` (identique pour toutes les images d'un même bloc). Cover d'article : `alt={article.title}`. Fonctionnel, mais un alt spécifique par image (surtout pour les nouvelles images de blocs `ServiceBlock`) serait plus riche pour l'image search. À vérifier une fois les nouvelles images du Builder (Axe A/B) intégrées. |
| JSON-LD FAQ/Breadcrumb | ✅ | Bien wired via les composants `Faq.tsx` / `Breadcrumbs.tsx` — pas de duplication, pas d'oubli sur services/zones/home. Seul trou : les articles (§4). |
| Schema Plumber | ✅ | Pas d'`AggregateRating`, pas d'`address` par défaut — conforme à la doctrine CLAUDE.md (pas de faux signaux). |

---

## 6. RÉSUMÉ — LES 5 ACTIONS À PLUS FORT IMPACT

1. **Générer et déposer `public/og.png`** (1200×630) — actuellement 404 sur *toutes* les pages :
   aucun aperçu correct en partage/réseaux, un des rares vrais bugs techniques trouvés dans
   l'audit.
2. **Basculer `seo.canonicalBase` sur `sos-fuite-angers.fr`** dès le domaine branché (déjà
   identifié en ETAT.md — le confirmer ici comme priorité SEO n°1 avant toute indexation Gate C).
3. **Écrire les 2 articles combler-trou** (piscine, encastrée — items #1 et #2 du backlog §2) :
   ce sont les deux seuls services sans aucun maillage blog entrant aujourd'hui.
4. **Câbler le FAQ des articles de blog en `FAQPage` JSON-LD** — le contenu existe déjà dans
   6 articles sur 7, il suffit de le rendre via `<Faq>` au lieu de le laisser en Markdown brut :
   gain GEO immédiat, effort minime.
5. **Créer les pages Verrières-en-Anjou et Sainte-Gemmes-sur-Loire** — les deux communes
   voisines les plus peuplées citées dans le maillage actuel mais sans page propre : premier lot
   de la « vague zones » à venir.

Rémy, confirme quand tu veux que le Builder attaque ces points — `docs/SEO-GEO-PLAN.md` est
prêt et n'a touché aucun fichier de code/contenu.
