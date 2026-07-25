# ETAT.md — Journal de bord SOS Fuite d'Eau Angers

> Mémoire du projet. Chaque session lit ce fichier en arrivant et le met à jour avant de finir.
> Dernière mise à jour : 2026-07-25 (Autoblog — session 6, lot T2 TERMINÉ, drafts 064-077).

---

## 🔖 POINT DE REPRISE (26/07/2026 — RÉGIME DE CROISIÈRE ATTEINT 🎯)

**Site EN PROD sur `https://www.sos-fuite-angers.fr`** (refonte + centrage mobile mergés, canonical ok,
GSC validée, sitemap soumis). **RÉSERVE COMPLÈTE : 76 drafts (002-077), T1+T2 = 6 mois** de
publications auto lun/mer/ven 05:00 UTC. Plus AUCUNE action quotidienne requise.

**Prochains rendez-vous :**
1. **~48 h après le 25/07** : vérifier dans GSC que le sitemap passe en « Réussite ».
2. **Fin octobre 2026** : point data 15 min (indexation, positions, backlinks) + vague 2 zones
   éventuelle + lancement du lot T3 (#78-114, sessions de ~12, messages à préparer par le CEO).
3. **1er artisan loueur** : remplacer persona DEMO dans `config/site.config.ts`.

**⚠️ Process autoblog (leçon session 6)** : l'Autoblog ne commite/pushe JAMAIS — il laisse ses
fichiers non commités pour le QC CEO, qui commite ensuite. À écrire dans chaque brief T3+.

**Portefeuille** : benchmark 5 nouveaux sites en cours dans `RENT & RANK/` (CEO-Portefeuille).
La shortlist doit repasser ici pour contre-check avant tout achat de domaine.

---

## ⭐ MILESTONE 2026-07-25 : REFONTE MERGÉE EN PROD

Branche `feat/NOU-29-services-images-aeration` mergée sur `main` (commit `c515365`, fast-forward)
→ déploiement Vercel prod **réussi et vérifié** (`sos-fuite-angers.vercel.app` : `/llms.txt` 200,
`/zones/verrieres-en-anjou` 200). Chaque étape a été **contrôlée visuellement par le CEO** (captures).

Livré et en ligne : 6 pages services (images hero + corps pleine largeur, aérées, centrées),
11 articles blog (page premium : FAQ→FAQPage JSON-LD, date lisible, temps de lecture, « à lire aussi »),
hub /zones + 8 communes (2 nouvelles : Verrières, Sainte-Gemmes), GEO (llms.txt + crawlers IA autorisés).
Décision modèles : Builder passé sur **Opus** pour le design (Sonnet insuffisant sur le goût visuel).

### RESTE À FAIRE (post-prod)
1. **Domaine** : ✅ EN LIGNE. `https://www.sos-fuite-angers.fr` répond 200, apex → 308 vers www.
2. **Canonical** : ✅ MERGÉ EN PROD (c4b7e0a) et vérifié par le CEO : sitemap public sur
   `https://www.sos-fuite-angers.fr`, 0 occurrence vercel.app.
3. **Google Search Console** : ✅ propriété « Domaine » validée + sitemap soumis (25/07). GSC affiche
   « Impossible de récupérer » = normal juste après soumission (et soumis avant la bascule canonical) ;
   attendre 24-48 h, resoumettre si besoin.
4. **Micro-fix** : ✅ MERGÉ. Clé dupliquée `Breadcrumbs` corrigée (`key={i}`), 0 warning console.
5. **Rank & rent continu** : cadence récurrente de l'autoblog ; monitoring indexation (~3 mois) ;
   remplacer persona DEMO (Thomas Mercier + chiffres) le jour où un artisan loueur est trouvé.

## ✅ AUTOBLOG : CIRCUIT VALIDÉ DE BOUT EN BOUT (25/07/2026)

Test réel effectué par le CEO : déclenchement manuel de l'Action → draft 001 publié automatiquement
(commit `f7ef801`) → article en ligne sur `https://www.sos-fuite-angers.fr/conseils/fuite-eau-cuisine-endroits-verifier`
(HTTP 200 vérifié). **76 drafts en réserve** (002-077), prochaine publication auto : lun/mer/ven
05:00 UTC. Calendrier éditorial 12 mois : `docs/CALENDRIER-EDITORIAL.md` (149 titres).
**T1 (37 titres) et T2 (40 titres) intégralement rédigés.** Reste à produire : T3 (37 titres,
#78-114), T4 (35 titres, #115-149), par lots lors de prochaines sessions Autoblog.

## ⚙️ AUTOBLOG SCHEDULER (publication automatique, branche `feat/autoblog-scheduler`)

- **Ajouter des drafts** : déposer les articles dans `content/drafts/` nommés `NNN-slug.mdx`
  (`001-…`, `002-…`) ; images du draft dans `public/conseils/` (ou dossier `NNN-slug.assets/`
  déplacé auto). Ces fichiers sont **invisibles du site** (aucun loader ne lit `content/drafts/`).
- **Ce que fait l'action** (`.github/workflows/publish-article.yml`, lun/mer/ven 05:00 UTC) :
  prend le draft au plus petit numéro, le déplace vers `content/conseils/` sans le préfixe, met
  `date:` à la date du jour (Europe/Paris), commit + push sur `main` → Vercel déploie. Drafts vide = fin sans erreur.
- **Vérifier qu'elle a tourné** : GitHub → onglet **Actions** → workflow « Publier un article (autoblog) »
  (voir le run + ses logs) ; ou le nouveau commit `content(autoblog): publication de <slug>` sur `main`,
  puis l'article en ligne sur `https://www.sos-fuite-angers.fr/conseils/<slug>`.
- **Tester sans attendre lundi** : Actions → ce workflow → bouton **« Run workflow »** (`workflow_dispatch`).

## 1. CE QU'ON SAIT (acquis)

- **Modèle** : rank & rent (on classe le site, on le loue à un artisan). Site pilote =
  recherche de fuite d'eau à Angers. Repo = template pour les prochains sites.
- **Domaine** : `sos-fuite-angers.fr` — **acheté**, DNS géré chez **OVHcloud** (zone DNS OVH).
  (« Hermès » / code `WR7dydp13600` = un autre service, sans rapport avec le DNS du domaine.)
- **Hébergement** : Vercel, projet `sos-fuite-angers`. Le site répond en ligne :
  `https://sos-fuite-angers.vercel.app`. Redéploiement auto à chaque push sur `main`.
- **Code source** : GitHub `Remy-authority/sos-fuite-angers` (branche `main`).
- **Historique** : projet démarré avec un ancien CEO + agents sur Paperclip. Rémy reprend en
  direct via Claude Code (Paperclip = trop long / trop coûteux, tâches bloquées « in review »).
- **Décision produit** : **le design actuel est à refaire entièrement.** L'architecture, elle,
  est jugée saine et conservée.

---

## 2. AUDIT DU REPO (session 2026-07-25)

### Stack & structure
- **Next.js 14** (App Router), **100 % SSG**, **Tailwind CSS**, TypeScript. Dépendances légères
  et à jour (next 14.2, mdx-remote, gray-matter). Pas de dette technique visible.
- **Piloté par config** : `config/site.config.ts` centralise identité, téléphone, couleurs
  (3 hex re-thèment tout le site via CSS variables), USPs, zone, FAQ, persona, légal.
  → Le concept « template N+1 » demandé est déjà en place et bien fait.

### Contenu présent
- **6 services** (`content/services/*.json`) : urgence, détection non destructive, canalisation
  enterrée, encastrée, piscine, assèchement dégât des eaux.
- **6 communes** (`content/zones/*.json`) : Avrillé, Beaucouzé, Bouchemaine, Les Ponts-de-Cé,
  Saint-Barthélemy-d'Anjou, Trélazé.
- **1 article de blog** (`content/conseils/fuite-invisible-signes.mdx`) — début de blog.
- **Légal** : `content/legal.json` + pages mentions-légales, CGU, confidentialité, cookies.
  Éditeur réel renseigné : DYONISOS LTD (droit UK).

### Design & SEO en place
- **Visuels réels** (générés IA) : 6 images services, 4 réalisations, 1 blog, portrait persona.
  → On n'est PAS sur des pages 100 % texte : bonne base visuelle.
- **SEO technique** : `sitemap.ts`, `robots.ts`, `manifest.ts`, `buildMetadata`, schema Plumber,
  FAQ par page, breadcrumbs. Solide.
- **Design actuel** : hero sombre avec halos/animations « façon référence », carte garantie,
  sections (Stats, About, Process, Réalisations, WhyUs, CTA, Map, FAQ). Correct mais encore
  **trop proche d'un template générique** → c'est ce que Rémy veut refaire pour atteindre le
  niveau premium de sniperpestcontrol3dservices.fr.

### Points de vigilance (à valider avec Rémy)
- **Persona `Thomas Mercier` = DEMO** (nom + photo IA + chiffres inventés : « +500 fuites »,
  « 10 ans »). ⚠️ Doctrine SEO : chiffres non validés à retirer ou confirmer.
- **Stat « 30 min » / « Réponse garantie »** dans le hero : à confirmer, sinon non conforme.
- `features.reviews = false` (bon — aucun faux avis). ✅
- Téléphone présent : `07 56 85 31 25`. Email : `contact@sosfuite-angers.fr` (à vérifier :
  domaine `sosfuite-angers` vs `sos-fuite-angers`).
- `canonicalBase` encore sur l'URL Vercel → à basculer sur le domaine final avant prod.
- Plusieurs branches de travail ouvertes sur GitHub (NOU-38 hero-redesign, etc.).

---

## 3. VERDICT

- **Ce qui est bon (à garder)** : toute l'architecture technique, le système de config/template,
  la structure SEO, les visuels, les pages légales. Le **design est jugé publiable** (décision
  Rémy 2026-07-25) — pas de refonte complète, seulement un affinage.
- **Stratégie confirmée** : site complet (pas landing page) = bon pour le SEO. Formulaire home
  + page /contact = conservé. La « vraie » template premium sera faite sur les prochains sites.

## 3bis. DÉCISIONS RÉMY (2026-07-25)

- **Persona « Thomas Mercier » + chiffres DEMO : on GARDE tel quel.** Pas encore de loueur, site
  pas publié. On changera avec le vrai artisan le jour de la location (horizon ~3 mois).
- **Objectif prioritaire : PUBLIER VITE.** Pas de refonte design lourde.
- **Déploiement Vercel OK** : Rémy confirme voir les images services en ligne (prod à jour).
- **Images services à REFAIRE** : qualité insuffisante (ex. « urgence » = homme de dos sans
  rapport clair ; « piscine » floue). Objectif : premium, compréhensibles, nettes.
- **Aération pages services** : ajouter 1 à 3 visuels/schémas explicatifs dans le corps de
  chaque page selon le nombre de mots (aujourd'hui = mur de texte, interdit par CLAUDE.md).
- **SEO/GEO pages services : jugé BON** (metaTitle, metaDescription, intro-réponse courte,
  blocs h2, FAQ, maillage interne, schema JSON-LD). Le manque = visuel, pas SEO.
- **À corriger avant prod** : `seo.canonicalBase` pointe encore sur l'URL Vercel → domaine final.

---

## 4. PROCHAINES ÉTAPES

1. **Vérifier le déploiement Vercel** : confirmer que la prod affiche bien la dernière version
   de `main` (avec images services). Si non, redéployer.
2. Confier au **Builder** un **affinage léger des pages de services** (pas de refonte).
3. Vérifier build vert + rendu, puis publier après validation Rémy.
4. Brancher le domaine `sos-fuite-angers.fr` sur Vercel + bascule `canonicalBase`.

---

## 4bis. RÉPARTITION DES AGENTS (règle anti-collision — chaque agent = propriétaire de SES fichiers)

- **Builder** → `app/services/*`, `content/services/*.json`, `public/services/*`
  (refonte visuelle + images des pages services). EN COURS.
- **Autoblog** → `content/conseils/*.mdx`, `public/conseils/*` UNIQUEMENT (nouveaux articles).
  Aucun fichier partagé à éditer (liens via frontmatter `relatedServices`). Parallèle-safe.
- **SEO/GEO auditeur** → LECTURE SEULE + écrit `docs/SEO-GEO-PLAN.md`. N'édite aucun code.
- **Zones** (`app/zones/*`, `content/zones/*`, `public/zones/*`) → **réassigné au Builder** par le
  CEO (message du 2026-07-25). Refonte hub + pages commune + 2 nouvelles communes + GEO. FAIT.

Règle : un fichier = un seul propriétaire à la fois. Le CEO arbitre avant toute réaffectation.

## 4ter. ÉTAT LIVRAISON (2026-07-25, soir)

- **Branche `feat/NOU-29-services-images-aeration`** = Builder (images + aération services,
  commit 52c516f, puis correction en profondeur ci-dessous) + Autoblog (articles conseils +
  covers, consolidé par le CEO) + SEO/GEO auditeur (`docs/SEO-GEO-PLAN.md`).
- **Retour Rémy sur la 1ère version : rendu jugé < 3/10.** Corrections appliquées (voir §5,
  session Builder du soir) : sidebar sticky supprimée, 13 images explicatives ajoutées dans le
  corps des 6 pages, 6 images hero régénérées (zéro marque/logo, zéro visage flou).
- **Retour CEO (2 points) : corrigés** (voir §5) : trou blanc asymétrique à droite des pages
  services (contenu non centré) + suppression des ~65 tirets cadratins « — » du texte visible
  (règle ajoutée dans CLAUDE.md : interdit, virgule ou point à la place).
- **Retour CEO (2 points, 2e passe) : corrigés** (voir §5) : carte d'étape orpheline sur grille
  impaire (dernière carte en pleine largeur) + 2 images hero refaites (encastrée = technicien
  entier crédible, canalisation enterrée = pavillon français).
- **En attente : nouvelle validation visuelle de Rémy** avant merge sur `main` (= prod).
- **À faire après validation** : merge main, bascule `seo.canonicalBase` → domaine final, GSC.

### Domaine (OVH → Vercel), état 2026-07-25
- OVH : `@ A` basculé sur `76.76.21.21` ✅. `www` : CNAME `cname.vercel-dns.com.` en cours
  d'ajout (Rémy doit cliquer « Ajouter »). Vercel : apex Valid (redir 308 → www), www Invalid
  tant que le CNAME OVH n'est pas enregistré + propagé.

## 5. HISTORIQUE DES SESSIONS

- **2026-07-25 (Builder — centrage mobile des cartes et têtes de section)** : branche
  `fix/mobile-centrage` (jamais mergée sans validation). Problème (mobile ~390px uniquement) :
  conteneurs bien centrés (16/16) mais contenu interne des cartes et titres de section alignés
  à gauche → gros vide à droite. Corrigé **uniquement en mobile** via `text-center sm:text-left`
  (et équivalents `mx-auto sm:mx-0`, `flex-col items-center … sm:flex-row`, `w-fit mx-auto`),
  **tout gated par `sm:` → desktop (≥640px) inchangé par construction, revérifié à 1440px**.
  Fichiers touchés :
  - `app/page.tsx` : head « Nos prestations » centré ; cartes services = icône + titre + lien
    centrés, puces **centrées en bloc mais texte aligné à gauche** (`w-fit mx-auto`).
  - `components/sections/WhyUs.tsx` : head + cartes (icône empilée au-dessus, texte centré).
  - `components/sections/Realisations.tsx` : bloc texte des cartes centré.
  - `components/sections/ServiceAreaMap.tsx` : cartes réassurance centrées (head déjà centré).
  - `components/ui/Faq.tsx` : head « FAQ / Questions fréquentes » centré (partagé, toutes pages).
  - `app/conseils/page.tsx` : head + bloc texte des cartes article centrés.
  - `app/zones/page.tsx` : head centré ; cartes commune centrées (`items-center sm:items-stretch`
    pour recentrer le lien sans casser le `justify-between` nom/CP en desktop).
  - Déjà conformes, non touchés : `Stats`, `TrustBadges` (déjà `items-center text-center`),
    `Process`, `CtaBanner`, section Devis (déjà `text-center`). Corps de lecture des pages
    services/zones/articles laissé aligné à gauche (prose qui remplit la largeur = équilibré).
  - Vérif visuelle Playwright : 390px (home, service, zone hub, conseils hub, article) = équilibré ;
    1440px (mêmes sections) = aligné à gauche, aucune régression. Build vert, 43 pages SSG.
  - **À valider par Rémy avant merge sur `main`**.

- **2026-07-25 (Builder — bascule canonical domaine + micro-fix Breadcrumbs)** : branche
  `fix/canonical-domaine` (partie de `main`, jamais mergée sans validation). Domaine live
  (`https://www.sos-fuite-angers.fr` 200, apex → 308 www).
  1. **`seo.canonicalBase`** dans `config/site.config.ts` : `https://sos-fuite-angers.vercel.app`
     → `https://www.sos-fuite-angers.fr` (version www, celle servie en direct par Vercel).
     Toute la SEO passe par l'unique constante `BASE` (`lib/seo.ts`) via `absUrl`/`buildMetadata` :
     sitemap, robots, llms.txt, `<link rel=canonical>`, Open Graph et tous les JSON-LD (dont
     `ORG_ID`) reprennent donc la nouvelle base automatiquement. **Vérifié** : sitemap généré
     (`/.next/server/app/sitemap.xml.body`) = toutes les `<loc>` en `https://www.sos-fuite-angers.fr/`,
     0 occurrence `vercel.app`. Aucune base résiduelle dans `config/`, `lib/`, `app/`.
  2. **Indexabilité prod confirmée** : `IS_NOINDEX` (`lib/seo.ts`) = vrai uniquement si
     `SEO_NOINDEX=1` OU `VERCEL_ENV !== 'production'`. Sur le domaine final (env prod Vercel),
     `VERCEL_ENV = production` → `IS_NOINDEX = false` → site **indexable** (canonical/robots en
     `index,follow`). Le changement de base n'affecte pas cette logique. (Seule condition externe :
     ne pas poser `SEO_NOINDEX=1` dans les env vars du projet prod Vercel.)
  3. **Micro-fix `Breadcrumbs.tsx`** : le warning React « two children with the same key » venait
     de `key={item.path}` alors que les items `Accueil` et `Services` pointent tous deux vers `/`
     sur les pages services. Corrigé en `key={i}` (index de liste). Rendu et JSON-LD `BreadcrumbList`
     inchangés (paths non touchés). **Vérifié** : 0 warning/erreur console (Playwright dev) sur
     `urgence-fuite-eau`, `detection-fuite-non-destructive`, `avrille`, `fuite-invisible-signes`.
  - Build (`npm run build`) vert, 42 pages SSG.
  - **À valider par Rémy avant merge sur `main`** (déploiement prod).

- **2026-07-25 (CEO)** : reprise du projet depuis Paperclip. Clone du repo GitHub, audit complet,
  création de `CLAUDE.md` et `docs/ETAT.md`. Diagnostic : archi saine, design à refaire.

- **2026-07-25 (Builder)** : branche `feat/NOU-29-services-images-aeration` (jamais mergée sur
  `main`, en attente de validation visuelle de Rémy). Deux axes traités sur les 6 pages services :
  - **Axe A — images** : les 6 images hero (`public/services/*.jpg`) régénérées (Nano Banana 2,
    2K, 21:9, direction artistique commune : reportage photo réaliste, éclairage froid/chaud
    cohérent), converties en JPG optimisé (136–268 Ko). Chaque image montre clairement le geste +
    le matériel du service (robinet d'arrêt, caméra thermique, corrélateur acoustique, détecteur
    gaz traceur, piscine nette, déshumidificateur).
  - **Axe B — aération du corps de page** : nouveaux composants `components/ui/ServiceQuickFacts`
    (puces iconographiées depuis `service.bullets`, déjà existantes), `ServiceBlock` (icône par
    bloc H2 déduite du titre + détection automatique des listes numérotées déjà rédigées dans le
    texte pour un rendu en checklist visuelle, sans réécrire le texte SEO), `StickyCallCard`
    (bloc CTA téléphone sticky en colonne latérale desktop, `app/services/[slug]/page.tsx` passé
    en grille 2 colonnes `lg:`). Nouveau set d'icônes partagé `components/ui/ServiceIcon.tsx` —
    corrige au passage un bug pré-existant sur la home (`app/page.tsx`) : les services
    "Canalisation enterrée" / "Fuite encastrée" / "Assèchement" affichaient tous l'icône loupe
    par défaut faute de clés `pipe`/`wall`/`dry` dans la table d'icônes.
  - Build (`npm run build`) vert, 0 erreur TS/lint, 32 pages SSG. FAQ, schema JSON-LD, maillage
    interne, breadcrumbs inchangés.
  - **À valider par Rémy avant merge** : rendu visuel des 6 pages (voir capture ou preview
    locale), et le fait qu'aucun style de bloc n'ait été ajouté pour ~3 blocs narratifs par page
    (icône seule, pas de checklist) — jugé suffisant car le texte SEO ne contient pas de liste
    numérotée à ces endroits.

- **2026-07-25 (Builder, soir — correction post-retour Rémy < 3/10)** : même branche. Trois
  correctifs demandés, tous traités :
  1. **Sidebar sticky supprimée.** `StickyCallCard.tsx` retiré (fichier supprimé), la grille
     `lg:grid-cols-[1fr_320px]` de `app/services/[slug]/page.tsx` repassée en colonne unique
     pleine largeur (`max-w-3xl`). Le `CtaBanner` sous la FAQ (déjà présent) est renforcé avec un
     titre/sous-titre spécifique au service (`${service.navTitle} à Angers : on vous rappelle
     vite`) au lieu du texte générique.
  2. **13 images explicatives ajoutées dans le corps des 6 pages** (2 à 3 par page, aucune à
     zéro) : `ContentBlock` (`lib/content.ts`) a gagné 3 champs optionnels `image` / `imageAlt`
     / `imageCaption`, rendus par `ServiceBlock.tsx` via `next/image` (1ère image de la page en
     `eager`, les suivantes en `lazy` — comportement par défaut de next/image). Renseignées dans
     `content/services/*.json` (liste complète §6bis ci-dessous).
  3. **Les 19 images (6 hero + 13 corps) régénérées** avec des règles strictes pour corriger les
     défauts pointés par Rémy : aucun texte/logo nulle part (vêtements et matériel neutres),
     aucun visage flou (soit pas de visage dans le cadre — la quasi-totalité des visuels, soit
     visage net comme sur canalisation-enterrée et piscine), écrans d'appareils toujours face
     caméra et tenus de façon crédible.
  - Build (`npm run build`) vert, 0 erreur TS/lint, 35 pages SSG (32 + 3 conseils Autoblog).
    FAQ, schema JSON-LD, maillage interne, breadcrumbs inchangés (aucun fichier hors périmètre
    Builder touché).
  - **À valider par Rémy** : nouveau rendu des 6 pages.
- **2026-07-25 (Autoblog)** : 3 nouveaux articles de conseils créés dans `content/conseils/*.mdx`
  (format frontmatter identique à l'article existant) + 3 images de couverture générées
  (photoréalistes, sans texte/chiffres inventés dans l'image) dans `public/conseils/*.jpg`.
  Aucun fichier hors périmètre touché. Détail des articles au §6 ci-dessous.
- **2026-07-25 (Autoblog, 2e série)** : 3 articles supplémentaires (7 au total désormais),
  slugs vérifiés sans collision avec l'existant. Build (`npm run build`) revérifié vert avec
  les 7 pages `/conseils/[slug]` générées. Détail au §6.
- **2026-07-25 (Autoblog, 3e série — pilotée par `docs/SEO-GEO-PLAN.md` §2, items #1 à #4 du
  backlog)** : 4 derniers articles (11 au total). Priorité donnée aux deux services qui
  n'avaient encore aucun article lié (`recherche-fuite-piscine`, `recherche-fuite-encastree`),
  comme demandé par le CEO/SEO. L'article locataire/propriétaire a été rédigé avec un angle
  volontairement distinct de `fuite-eau-copropriete-responsabilite` (bail location individuelle
  — vétusté/faute, réparations locatives, assurance PNO vs locataire — plutôt que
  parties privatives/communes + IRSI) et renvoie vers cet article pour le cas copropriété au
  lieu de dupliquer le sujet ; recoupement jugé faible, donc pas de bascule vers l'item #8 du
  backlog. Slugs vérifiés sans collision. Build revérifié vert, 11 pages `/conseils/[slug]`.
  **Le CEO indique que le blog Autoblog est mis en pause après cette série.** Détail au §6.

- **2026-07-25 (Builder, soir — 2 corrections CEO)** : même branche. Fichiers touchés dans le
  périmètre Builder uniquement (`app/`, `components/`, `config/`, `content/legal.json`, `lib/`,
  `tailwind.config.ts`) :
  1. **Trou blanc asymétrique corrigé.** Cause confirmée : dans
     `app/services/[slug]/page.tsx`, le bloc de contenu (`max-w-3xl`) était limité en largeur
     mais pas centré dans le `container-site` (`max-w-6xl`) alors que hero/intro/quick-facts
     prenaient toute la largeur. Fix : blocs + « Prestations liées » + « À lire aussi » regroupés
     dans un seul `<div className="mx-auto max-w-3xl">` — colonne de lecture centrée, marges
     symétriques. Hero/intro/quick-facts inchangés (déjà symétriques en pleine largeur).
     Vérifié visuellement sur les 6 pages (plus de blanc à droite).
  2. **Tous les tirets cadratins « — » supprimés** (règle CLAUDE.md ajoutée par le CEO). 65
     occurrences trouvées dans le repo (`content/`, `config/`, `components/`, `app/`, `lib/` +
     1 dans `tailwind.config.ts`) — **aucune** dans `content/services/*.json`,
     `content/zones/*.json` ou `content/conseils/*.mdx` (déjà propres). Répartition : 15 dans du
     texte visible (title/metadata de page, aria-label, alt, sujet d'email de lead, subtitle
     CtaBanner) remplacées au cas par cas par une virgule ou un point selon le sens ; les ~50
     restantes étaient dans des commentaires de code (JSDoc, `{/* */}`, `_comment` JSON) —
     nettoyées aussi par cohérence bien que non prioritaires. **0 occurrence restante dans tout
     le repo** (vérifié par grep).
  - Build (`npm run build`) vert, 0 erreur TS/lint, 39 pages SSG (35 + 4 conseils de la 3e série
    Autoblog, en parallèle). FAQ, schema JSON-LD, maillage interne, breadcrumbs inchangés.
  - **À valider par Rémy** : nouveau rendu des 6 pages (colonne centrée).

- **2026-07-25 (Builder, soir — 2 corrections CEO, 2e passe)** : même branche. Fichiers touchés :
  `components/ui/ServiceBlock.tsx`, `public/services/recherche-fuite-encastree.jpg`,
  `public/services/recherche-fuite-canalisation-enterree.jpg` (périmètre Builder strict).
  1. **Carte d'étape orpheline corrigée.** La grille des checklists numérotées
     (`ServiceBlock.tsx`, `sm:grid-cols-2`) laissait la dernière carte seule à gauche quand le
     nombre d'étapes est impair (cas `recherche-fuite-encastree` : 5 étapes → carte 5 orpheline
     avec un grand vide à droite). Fix : sur un nombre d'étapes impair, la dernière carte reçoit
     `sm:col-span-2` (pleine largeur sur la dernière ligne). Les grilles paires (urgence,
     détection : 4 étapes) sont inchangées. Vérifié visuellement.
  2. **2 images hero refaites** (mêmes règles : aucun logo/marque, aucun visage flou, matériel
     crédible, DA premium cohérente avec les 4 autres non touchées) :
     - `recherche-fuite-encastree` : l'ancienne montrait un bras/torse sans tête en position
       contorsionnée (effet stock). Nouvelle : technicien **entier**, à genou, tête dans le
       cadre, caméra thermique pointée le long de la plinthe, posture naturelle.
     - `recherche-fuite-canalisation-enterree` : l'ancienne avait une bâtisse anglaise en pierre
       en fond (incohérent avec Angers). Nouvelle : **pavillon français** (crépi beige, tuiles
       terre cuite, volets blancs, haie, allée gravillonnée), technicien à genou avec corrélateur
       acoustique + géophone.
  - Build (`npm run build`) vert, 0 erreur, 39 pages SSG.
  - **À valider par Rémy** : 6 pages sans carte orpheline + les 2 nouveaux hero.

- **2026-07-25 (Autoblog, passe de finition sur les 11 articles)** : demande CEO pilotée par
  `docs/SEO-GEO-PLAN.md` §4 (FAQ des articles non exploitée en données structurées). Deux
  chantiers sur les 11 `.mdx` existants, périmètre inchangé (`content/conseils/*.mdx` +
  `public/conseils/*`) :
  1. **FAQ déplacée en frontmatter** (`faq: [{q, a}]`, même schéma que les services/zones) sur
     les 11 articles, section `## FAQ` retirée du corps pour éviter le doublon. Le seul article
     qui n'avait pas encore de FAQ (`fuite-invisible-signes`, écrit avant la convention) en a
     reçu une nouvelle, cohérente avec son contenu. **Le rendu visuel du bloc FAQ n'est pas
     câblé** : c'est au Builder de brancher `<Faq items={article.faq}>` dans
     `app/conseils/[slug]/page.tsx` (actuellement seul `articleJsonLd()` est rendu, pas de
     `faqJsonLd()` ni d'affichage du tableau `faq`).
  2. **25 images de corps ajoutées** (2 à 3 par article, 1600×893 JPEG, ~200-460 Ko), insérées en
     markdown (`![alt](/conseils/slug-xx.jpg)` + légende en italique) aux endroits pertinents du
     texte. Génération Nano Banana 2 (2K, 16:9) puis contrôle visuel systématique : **6 images
     régénérées après premier contrôle** pour cause de texte/marque lisible (un pack de piscine
     affichait la marque « STA-RITE », un dossier affichait « RENTAL LEASE AGREEMENT » en
     anglais, 4 autres avaient des marquages de fonderie lisibles sur des raccords/compteurs).
     Aucun chiffre inventé, aucun visage flou.
  - Build (`npm run build`) revérifié vert, 39 pages SSG, aucun fichier hors périmètre touché.
  - Détail des 11 articles + nombre d'images par article au §6.

- **2026-07-25 (Builder, soir — refonte premium page article)** : demande CEO. S'inspire de la
  STRUCTURE d'un article de blog de la réf `sniperpestcontrol3dservices.fr` (mise en page/qualité),
  en gardant NOTRE identité (bleu eau + orange, pas le vert de la réf). Fichiers touchés (périmètre
  Builder strict, **aucun `content/conseils/*` touché**) : `app/conseils/[slug]/page.tsx`,
  `lib/content.ts` (type + loader), `app/globals.css` (styles `article-prose` scoped).
  1. **`lib/content.ts`** : `Article` gagne le champ `faq: FaqItem[]` (parsé depuis le frontmatter
     `faq:` posé par l'Autoblog). Nouveaux helpers : `readingTimeMinutes(text)` (~200 mots/min,
     min 1) et `getRelatedConseils(current, limit)` (score = services liés communs ×2 + même
     catégorie ; complété par les plus récents ; exclut l'article courant).
  2. **En-tête premium** : eyebrow catégorie (accent orange), H1, ligne méta lisible = **date en
     clair** (« 24 juillet 2026 » via un format déterministe sans fuseau) + **temps de lecture**
     calculé + catégorie. Cover en grande image `max-w-4xl` coins arrondis + ombre.
  3. **Corps aéré** (`article-prose`, scoped, n'affecte pas les pages services) : images markdown
     du MDX affichées à la largeur de la colonne, coins arrondis + cadre léger ; légendes
     (`*italique*` sous l'image) rendues centrées/gris/petit ; H2 « bien détachés » (filet haut +
     respiration) ; interlignage et liens soignés.
  4. **Bloc FAQ** : `<Faq items={article.faq}>` (composant partagé, même style que les pages
     services) → **émet le FAQPage JSON-LD** via `faqJsonLd()` (gain GEO, auparavant absent des
     articles). Vérifié : `fuite-invisible-signes` émet bien 1 `FAQPage` + 4 `Question`/`Answer`.
  5. **« À lire aussi »** en fin d'article : 3 cartes (vignette + catégorie + titre) via
     `getRelatedConseils`. Le bloc « Nos services liés » existant est conservé.
  - Build (`npm run build`) vert, 0 erreur/warn, 39 pages SSG. Rendu vérifié desktop + mobile.
  - **À valider par Rémy** : URL de contrôle `/conseils/fuite-invisible-signes`.

- **2026-07-25 (Builder, soir — refonte /zones + 2 communes + GEO)** : demande CEO. Périmètre
  zones **réassigné au Builder** (cf. §4bis). Fichiers : `app/zones/page.tsx`,
  `app/zones/[slug]/page.tsx`, `app/robots.ts`, `app/llms.txt/route.ts` (nouveau), `lib/content.ts`
  (type `Zone` + champ `context?`), `content/zones/*.json` (2 créés + 6 enrichis), `public/zones/*`
  (6 images). **Aucun fichier hors périmètre touché.**
  1. **Hub `/zones` refondu** : eyebrow + H1, **réponse courte citable** (« SOS Fuite Angers couvre
     Angers et 8 communes … dans un rayon de 25 km : … »), **cartes enrichies** (nom + code postal +
     une phrase de contexte par commune via le nouveau champ `context`), intégration du composant
     **`ServiceAreaMap`** (carte de couverture), **FAQ** de zone (4 Q/R) + **FAQPage JSON-LD**.
  2. **Pages commune aérées** : **image d'en-tête** + **1 image de corps** (après le 1er bloc, avec
     légende), servies depuis un **pool partagé** `public/zones/` (3 hero + 3 corps, cadre résidentiel
     français crédible, zéro texte/marque/visage flou) **assigné de façon déterministe par le
     template** (index dans la liste triée) → une nouvelle commune récupère automatiquement des
     visuels sans génération (logique template N+1). Contenu, FAQ et schema existants conservés.
     Petit nettoyage : titre du bloc de liens services rendu distinct (« Nos services de recherche
     de fuite ») et suppression d'une ligne « communes limitrophes » en doublon avec le bloc 3.
  3. **2 nouvelles communes** (plan SEO) : `content/zones/verrieres-en-anjou.json` (49480, commune
     nouvelle à l'est d'Angers = Saint-Sylvain-d'Anjou + Pellouailles-les-Vignes) et
     `content/zones/sainte-gemmes-sur-loire.json` (49130, sud d'Angers, bords de Loire, maraîchage).
     Structure identique à `avrille.json`. Contenu vrai et local, **aucun chiffre/statistique
     inventé** (pas de population). Ajoutées automatiquement au hub, à `ServiceAreaMap`, au footer,
     au sitemap et à `llms.txt` via `getZones()`.
  4. **GEO** : `/llms.txt` (route statique générée depuis la config + le contenu : activité, ville +
     8 communes, 6 services, méthodes, téléphone, URLs) servie en `text/plain` (HTTP 200 vérifié).
     `robots.ts` : en plus du `*` (qui autorisait déjà tout), **allow explicite** des crawlers IA
     (GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-Web, PerplexityBot, Google-Extended,
     Applebot-Extended) — la preview reste entièrement bloquée (IS_NOINDEX). Réponse courte
     « citable » en tête de chaque page zone = l'intro (vérifiée, factuelle).
  - Build vert, 42 pages SSG (39 + 2 communes + `/llms.txt`). JSON-LD vérifié : hub et pages zone
    émettent `FAQPage` (4 Q/R) ; pages zone émettent aussi `Service` + `BreadcrumbList`.
  - **À valider par Rémy** : `/zones`, `/zones/sainte-gemmes-sur-loire`, `/zones/verrieres-en-anjou`,
    `/zones/avrille` ; `/llms.txt` accessible ; `/robots.txt` (crawlers IA).

- **2026-07-25 (Builder, soir — uniformisation largeur images de corps)** : demande CEO. Les
  images dans le texte des pages services et commune étaient bridées à `max-w-xl` (576px) alors
  que la colonne de lecture fait 768px et que les images d'articles (`.article-prose img`)
  prennent toute la largeur, elles paraissaient petites. Fichiers touchés (périmètre Builder) :
  `components/ui/ServiceBlock.tsx` et `app/zones/[slug]/page.tsx`.
  - Conteneur image passé de `w-full max-w-xl overflow-hidden rounded-card` à
    `w-full overflow-hidden rounded-card border border-slate-200 shadow-sm` (exactement le style
    de `.article-prose img` : pleine largeur + cadre léger). `sizes` ajusté de 576px à 768px.
  - Vérif visuelle Playwright (viewport 1280) : largeur rendue des images de corps désormais
    identique sur les 3 types de pages, services **766px**, communes **766px**, articles
    **768px** (écart de 2px dû au cadre mesuré à l'intérieur du conteneur vs sur l'`img`,
    imperceptible). Contrôlé sur `detection-fuite-non-destructive`, `urgence-fuite-eau`,
    `/zones/avrille`, `/zones/verrieres-en-anjou`, `/conseils/fuite-invisible-signes`.
  - Build (`npm run build`) vert, 42 pages SSG, aucun fichier hors périmètre touché.
  - **À valider par Rémy** : images de corps services + communes à la même taille que les articles.

- **2026-07-25 (Builder, soir — centrage colonne pages commune)** : demande CEO. Le corps des
  pages commune (`.prose-content max-w-3xl` + la nav services) était en `max-w-3xl` sans
  `mx-auto`, donc collé à gauche du `container-site` avec un vide à droite (le trou signalé au
  message précédent). Fix : ajout de `mx-auto` aux deux blocs de `app/zones/[slug]/page.tsx`,
  même traitement que les pages services. Hero/intro restent en pleine largeur (déjà symétriques).
  - Vérif Playwright (viewport 1280) : marges de la colonne de lecture désormais **symétriques**,
    gauche = droite = 192px sur `/zones/avrille` et `/zones/verrieres-en-anjou` (avant : collée à
    gauche). Contrôle visuel confirmé, plus de trou à droite.
  - Build (`npm run build`) vert, 42 pages SSG, aucun fichier hors périmètre touché.
  - **À valider par Rémy** : pages commune centrées, marges gauche = droite.

- **2026-07-25 (Autoblog, drafts T1 pour le scheduler)** : demande CEO. 12 premiers articles du
  calendrier `docs/CALENDRIER-EDITORIAL.md` (T1, items #1 à #12) rédigés comme **drafts**, pas
  publiés directement : `content/drafts/001-*.mdx` à `012-*.mdx`, format frontmatter identique
  aux articles publiés (`faq: [...]` inclus), 700-1000 mots chacun, 2 images de corps + 1 cover
  par article (36 images générées, préfixées par slug pour zéro collision avec les 11 articles
  déjà publiés). **8 images régénérées après contrôle visuel** : bouteilles à l'aspect de marque
  (cuisine, évier, buanderie), étiquettes anglaises "HOT/COLD" lisibles sur un flexible, chiffres
  de compteur d'eau lisibles + reflet sur écran de téléphone, texte embossé façon marque sur un
  compteur, et une image en triptyque au lieu d'un cadre photo unique. Aucun chiffre inventé,
  zéro tiret cadratin. Anti-cannibalisation du calendrier §3 respectée à la rédaction (notamment
  #6 = protocole dédié sans reprendre la liste de signes de P1/P10 ; #9/#10/#11 = trois angles
  distincts sur l'assurance, voir tableau §3 du calendrier).
  Les drafts sont **invisibles du site** (aucun loader ne lit `content/drafts/`, confirmé par le
  build : toujours 11 pages `/conseils/[slug]`, inchangé). Le scheduler `feat/autoblog-scheduler`
  publiera ces 12 drafts un par un (lun/mer/ven) une fois cette branche mergée.
  - Build (`npm run build`) vert, aucun fichier hors périmètre touché.
  - Détail des 12 drafts au §6bis.

- **2026-07-25 (Autoblog, session 2 du lot T1 — drafts 013 à 024)** : suite directe de la session
  précédente, mêmes règles. Items #13 à #24 du calendrier (`docs/CALENDRIER-EDITORIAL.md` §2, T1)
  rédigés comme drafts : `content/drafts/013-*.mdx` à `024-*.mdx` (la numérotation continue,
  001 publié, 002-012 en attente). 700-1000 mots chacun, réponse citable en intro, FAQ 4 questions
  en frontmatter, 2 images de corps + 1 cover par article (36 images générées, préfixées par slug).
  **3 images régénérées après contrôle visuel** : un logo de marque « FLIR » lisible sur l'écran
  d'une caméra thermique, et un texte gravé/embossé façon marque sur deux outils de plomberie dans
  deux covers. Aucun chiffre inventé, zéro tiret cadratin. Anti-cannibalisation du calendrier §3
  respectée : #17 traité en angle « absence courte estivale » générique (sans référencer #49/#59,
  pas encore écrits) ; #18 centré sur le réflexe rentrée sans reprendre le protocole détaillé de
  l'article #6 (draft 006, déjà écrit) ; #13/#14/#15 différenciés (comparatif méthodes / caméra
  thermique en profondeur / argument coût) sans recouper `detection-gaz-traceur-fonctionnement`
  (P6, déjà publié) ; #19/#22 différenciés (mécanisme sécheresse-argile générique vs angle
  géographique confluent Maine-Loire, #22 renvoie vers #19 pour le mécanisme).
  Les drafts restent **invisibles du site** (build vérifié : toujours 12 pages `/conseils/[slug]`,
  inchangé par rapport à avant cette session).
  - Build (`npm run build`) vert, 43 pages générées, aucun fichier hors périmètre touché.
  - Détail des 12 drafts au §6bis.

- **2026-07-25 (Autoblog, session 3 du lot T1 — drafts 025 à 037, T1 COMPLET)** : dernière session
  du lot T1. Items #25 à #37 du calendrier (`docs/CALENDRIER-EDITORIAL.md` §2, T1) rédigés comme
  drafts : `content/drafts/025-*.mdx` à `037-*.mdx`, terminant les 37 titres T1. 700-1000 mots
  chacun, réponse citable en intro, FAQ 4 questions en frontmatter, 2 images de corps + 1 cover
  par article (39 images générées). **1 image régénérée après contrôle visuel** : une image en
  collage à deux panneaux (au lieu d'une photo unique) affichant en plus le titre lisible d'un
  vrai journal (« Le Monde ») en arrière-plan, remplacée par une photo unique sans texte.
  Aucun chiffre inventé, zéro tiret cadratin. Anti-cannibalisation du calendrier §3 respectée :
  #34 traité en angle « premier appel, avant devis chiffré » distinct de #12 (déjà écrit,
  angle « questions à poser une fois le devis reçu ») ; #30 approfondit la sécurité électricité
  sans reprendre le réflexe déjà mentionné dans #29 ; #36 mythbuste la croyance elle-même
  (évolution des méthodes) sans reprendre l'argument économique de #15 (déjà écrit), les deux
  se renvoyant l'un à l'autre ; #28 différencié de #19 (déjà écrit, mécanisme sécheresse-argile)
  en couvrant les autres causes d'affaissement et en renvoyant vers #19 pour ce mécanisme
  spécifique ; #37 (lexique) conçu comme une page de définitions courtes qui renvoie vers les
  articles dédiés plutôt que de redévelopper chaque méthode.
  Les drafts restent **invisibles du site** (build vérifié : toujours 12 pages `/conseils/[slug]`,
  inchangé par rapport à avant cette session).
  - Build (`npm run build`) vert, 43 pages générées, aucun fichier hors périmètre touché.
  - **Les 37 titres du T1 (août à octobre 2026) sont désormais tous rédigés** : 001 publié,
    002 à 037 en réserve dans `content/drafts/` (36 drafts). Détail complet au §6bis.
  - Prochaine étape éditoriale : T2 (novembre 2026 à janvier 2027, 40 titres #38 à #77 du
    calendrier), à traiter en lots lors de prochaines sessions Autoblog.

- **2026-07-25 (Autoblog, session 4 — début du lot T2, drafts 038 à 050)** : premiers 13 titres
  du T2 (`docs/CALENDRIER-EDITORIAL.md` §2, items #38 à #50, bloc symptômes/diagnostic électroménager
  et chauffage + début assurance/juridique). Fichiers `content/drafts/038-*.mdx` à `050-*.mdx`.
  700-1000 mots chacun, réponse citable en intro, FAQ 4 questions en frontmatter, 2 images de
  corps + 1 cover par article (39 images générées). **0 image régénérée** après contrôle visuel
  (premier lot sans défaut détecté depuis le début de l'autoblog, prompts renforcés dès la
  génération suite aux leçons des sessions précédentes : interdiction explicite de logos/texte
  sur les écrans d'appareils, interdiction explicite des compositions en collage/diptyque).
  Aucun chiffre inventé (la convention IRSI, article #50, est expliquée sans aucun seuil ou
  montant chiffré, volontairement qualitatif faute de valeur vérifiée), zéro tiret cadratin.
  Anti-cannibalisation du calendrier §3 respectée : #47 (eau qui stagne, point de départ
  générique) renvoie vers #44 et #45 (fiches dédiées lave-linge / lave-vaisselle, écrites juste
  avant dans le même lot) sans redévelopper leur contenu ; #49 (résidence secondaire, absence
  longue durée, toute saison) différencié de #17 déjà publié (absence courte estivale), qui est
  cité en renvoi plutôt que répété ; #50 conçu comme l'article pilier IRSI (mentionné en FAQ par
  P3 et P5 déjà publiés, mais non détaillé ailleurs, conformément à la note du calendrier).
  Les drafts restent **invisibles du site** (build vérifié : toujours 12 pages `/conseils/[slug]`,
  inchangé par rapport à avant cette session).
  - Build (`npm run build`) vert, 43 pages générées, aucun fichier hors périmètre touché.
  - **49 drafts en réserve** (002 à 050). Détail complet au §6bis.
  - Prochaine étape éditoriale : suite du T2 (items #51 à #77 du calendrier, 27 titres restants),
    dont les sujets saisonniers gel/hiver (#56 à #61) à traiter en respectant l'angle prévu au
    calendrier.

- **2026-07-25 (Autoblog, session 5 — suite du lot T2, drafts 051 à 063)** : 13 titres suivants du
  T2 (`docs/CALENDRIER-EDITORIAL.md` §2, items #51 à #63, bloc assurance/juridique + méthodes
  techniques + saisonnier gel/hiver + local Angers). Fichiers `content/drafts/051-*.mdx` à
  `063-*.mdx`. 700-1000 mots chacun (recompte final : tous ≥ 694, la plupart 700-770), réponse
  citable en intro, FAQ 4 questions en frontmatter, 2 images de corps + 1 cover par article
  (39 images générées). **1 image régénérée après contrôle visuel** : la cover de #51 (meublé de
  tourisme) affichait un panneau inséré façon collage (plafond taché dans un cadre distinct du
  reste de la pièce) au lieu d'une photo unique continue, remplacée par une scène simple et
  cohérente. Aucun chiffre inventé (climat d'Angers en #61 traité qualitativement, sans date ni
  statistique précise ; réseaux anciens en #62/#63 sans année inventée). Zéro tiret cadratin.
  Anti-cannibalisation du calendrier §3 respectée : #54 (condensation) élargi à toutes les pièces
  (fenêtre, cave, salle de bain) pour ne pas dupliquer la FAQ mur de P9 déjà publiée ; #56
  (canalisations extérieures) et #60 (compteur extérieur) traités comme articles compagnons
  distincts avec renvoi croisé plutôt que fusionnés ; #62 et #63 différenciés (vue d'ensemble par
  quartier vs cas précis des colonnes montantes en copropriété centre-ville).
  Les drafts restent **invisibles du site** (build vérifié : toujours 12 pages `/conseils/[slug]`,
  inchangé par rapport à avant cette session).
  - Build (`npm run build`) vert, 43 pages générées, aucun fichier hors périmètre touché.
  - **62 drafts en réserve** (002 à 063). Détail complet au §6bis.
  - Prochaine étape éditoriale : fin du T2 (items #64 à #77 du calendrier, 14 titres restants),
    puis T3 (37 titres, #78-114).

- **2026-07-25 (Autoblog, session 6 — fin du lot T2, drafts 064 à 077, T2 COMPLET)** : derniers
  14 titres du T2 (`docs/CALENDRIER-EDITORIAL.md` §2, items #64 à #77, bloc local Angers/tuffeau,
  assèchement, piscine hiver, urgence/nuit/gaz, comparatif/pilier). Fichiers `content/drafts/064-*.mdx`
  à `077-*.mdx`, terminant les 40 titres T2. 700-1000 mots chacun (recompte final : tous ≥ 703),
  réponse citable en intro, FAQ 4 questions en frontmatter, 2 images de corps + 1 cover par article
  (42 images générées). **6 images régénérées après contrôle visuel**, toutes pour un vrai logo ou
  une vraie marque échappés au prompt malgré les consignes anti-marque : logo Renault sur la calandre
  d'une camionnette (#72 cover et #75 cover, corrigées en recadrant la prise de vue à l'arrière du
  véhicule, angle qui ne montre plus la calandre), marque « Vaillant » lisible sur une chaudière en
  arrière-plan (#69-01), marque « CASIO » lisible sur une calculatrice (#76-01), texte de marque sur
  un déshumidificateur (#66 cover), cadran de compteur d'eau avec chiffres nets et lisibles de face
  (#74-02, recadré avec le cadran incliné hors axe). Aucun chiffre inventé (climat océanique en #64
  traité qualitativement sans date ni statistique précise ; canalisation en plomb en #70 sans année
  inventée ; numéros d'urgence 18/112 en #73 = information publique réelle, pas un chiffre inventé).
  Zéro tiret cadratin. Anti-cannibalisation du calendrier §3 respectée : #64 (climat océanique,
  mécanisme et rareté du gel) explicitement différencié de #61 déjà publié (période précise à
  surveiller), avec renvoi croisé en prose plutôt que redite ; #65 (tuffeau, porosité de la pierre)
  différencié de #62/#63 déjà publiés (âge des réseaux, colonnes montantes) par un angle matériau
  plutôt que réseau ; #74 (critères de décision urgence/programmée) et #75 (pourquoi la dispo 24h/24
  compte une fois l'urgence identifiée) différenciés comme deux étapes distinctes d'un même parcours ;
  #77 conçu comme une page hub qui reformule brièvement 8 questions et renvoie vers l'article dédié
  de chacune, sans jamais redévelopper le contenu déjà publié ailleurs.
  Les drafts restent **invisibles du site** (build vérifié : toujours 12 pages `/conseils/[slug]`,
  inchangé par rapport à avant cette session).
  - Build (`npm run build`) vert, 43 pages générées, aucun fichier hors périmètre touché.
  - **76 drafts en réserve** (002 à 077). **T1 (37/37) et T2 (40/40) intégralement rédigés**,
    réserve ≈ 6 mois de publication atteinte comme prévu. Détail complet au §6bis.
  - Prochaine étape éditoriale : T3 (février à avril 2027, 37 titres, #78 à #114 du calendrier).

## 6. ARTICLES DE CONSEILS PUBLIÉS

| Slug | Titre | Services liés | Images corps |
|---|---|---|---|
| `fuite-invisible-signes` | Fuite d'eau invisible : 7 signes qui doivent vous alerter | detection-fuite-non-destructive, urgence-fuite-eau | 2 |
| `cout-recherche-fuite-eau-assurance` | Combien coûte une recherche de fuite d'eau et qui paie la facture ? | detection-fuite-non-destructive, urgence-fuite-eau | 2 |
| `degat-des-eaux-demarches-assurance` | Dégât des eaux : les démarches assurance étape par étape | assechement-degat-des-eaux, detection-fuite-non-destructive | 3 |
| `fuite-canalisation-enterree-detection` | Fuite sur canalisation enterrée : comment on la détecte sans tout casser | recherche-fuite-canalisation-enterree, detection-fuite-non-destructive | 2 |
| `fuite-eau-copropriete-responsabilite` | Fuite d'eau en copropriété : qui est responsable et qui paie ? | detection-fuite-non-destructive, assechement-degat-des-eaux | 2 |
| `detection-gaz-traceur-fonctionnement` | Comment fonctionne la détection par gaz traceur (et quand on l'utilise) | detection-fuite-non-destructive, recherche-fuite-canalisation-enterree | 2 |
| `fuite-avant-apres-compteur` | Fuite après compteur / avant compteur : comment savoir et qui contacter | detection-fuite-non-destructive, recherche-fuite-canalisation-enterree | 2 |
| `piscine-perd-eau-evaporation-ou-fuite` | Piscine qui perd de l'eau : évaporation normale ou vraie fuite ? | recherche-fuite-piscine | 3 |
| `fuite-dans-un-mur-signes-detection` | Fuite dans un mur : les signes qui ne trompent pas (et comment la localiser sans tout casser) | recherche-fuite-encastree | 2 |
| `facture-eau-anormalement-elevee-causes` | Facture d'eau anormalement élevée : causes et comment réagir | detection-fuite-non-destructive, urgence-fuite-eau | 3 |
| `locataire-proprietaire-qui-paie-fuite` | Locataire ou propriétaire : qui paie la recherche de fuite d'eau ? | urgence-fuite-eau, detection-fuite-non-destructive | 2 |

Toutes les FAQ sont désormais en frontmatter (`faq: [...]`), plus en Markdown dans le corps.

## 6bis. DRAFTS T1 EN ATTENTE DE PUBLICATION (`content/drafts/`, scheduler autoblog)

Ces 12 fichiers ne sont pas encore en ligne. Numéro = ordre du calendrier `docs/CALENDRIER-EDITORIAL.md` §2 (items #1 à #12). Le scheduler les publiera un par un dans cet ordre.

| N° | Slug (fichier `content/drafts/`) | Titre | Services liés | Images |
|---|---|---|---|---|
| 001 | `fuite-eau-cuisine-endroits-verifier` | Fuite d'eau dans la cuisine : les endroits à vérifier avant d'appeler un pro | detection-fuite-non-destructive | 3 |
| 002 | `fuite-eau-salle-de-bain-causes` | Fuite d'eau dans la salle de bain : douche, baignoire, WC, les causes possibles | detection-fuite-non-destructive | 3 |
| 003 | `tache-plafond-degat-eaux-voisin-dessus` | Tache au plafond : dégât des eaux du voisin du dessus, les bons réflexes immédiats | assechement-degat-des-eaux | 3 |
| 004 | `bruit-eau-continu-que-verifier` | Bruit d'eau qui coule en continu alors que rien n'est ouvert : que vérifier | detection-fuite-non-destructive | 3 |
| 005 | `fuite-sous-evier-joint-siphon-canalisation` | Fuite sous l'évier : joint, siphon ou canalisation, comment distinguer | detection-fuite-non-destructive | 3 |
| 006 | `compteur-eau-tourne-nuit-protocole` | Compteur d'eau qui tourne la nuit : le protocole pour en être sûr | detection-fuite-non-destructive | 3 |
| 007 | `wc-fuit-permanence-joint-ou-canalisation` | WC qui fuit en permanence : joint de chasse d'eau ou canalisation sous la cuvette | detection-fuite-non-destructive | 3 |
| 008 | `buanderie-inondee-sans-cause-visible` | Buanderie inondée sans cause visible : les points de contrôle avant d'appeler | detection-fuite-non-destructive | 3 |
| 009 | `garantie-degat-eaux-ou-recherche-fuite-difference` | Garantie dégât des eaux ou garantie recherche de fuite : quelle différence dans votre contrat | detection-fuite-non-destructive, assechement-degat-des-eaux | 3 |
| 010 | `obligations-syndic-fuite-parties-communes` | Obligations du syndic de copropriété face à une fuite dans les parties communes | assechement-degat-des-eaux | 3 |
| 011 | `franchise-plafond-exclusions-assurance-fuite` | Franchise, plafond, exclusions : ce que votre assurance habitation couvre vraiment en cas de fuite | detection-fuite-non-destructive, assechement-degat-des-eaux | 3 |
| 012 | `devis-recherche-fuite-questions-avant-signer` | Devis de recherche de fuite : les questions à poser avant de signer | detection-fuite-non-destructive | 3 |
| 013 | `quelle-methode-detection-fuite-choisir` | Gaz traceur, caméra thermique ou corrélation acoustique : quelle méthode pour quelle situation | detection-fuite-non-destructive | 2 |
| 014 | `camera-thermique-detection-fuite-fonctionnement` | Comment fonctionne la caméra thermique pour détecter une fuite (et ses limites) | detection-fuite-non-destructive | 2 |
| 015 | `recherche-fuite-non-destructive-moins-chere` | Pourquoi une recherche de fuite non destructive coûte moins cher que casser à l'aveugle | detection-fuite-non-destructive | 2 |
| 016 | `hivernage-piscine-eviter-fuites-printemps` | Hivernage de piscine : les gestes qui évitent les fuites au printemps | recherche-fuite-piscine | 2 |
| 017 | `securiser-logement-fuite-avant-vacances` | Partir en vacances l'esprit tranquille : sécuriser son logement contre le risque de fuite | urgence-fuite-eau | 2 |
| 018 | `controler-compteur-eau-apres-vacances` | Rentrée : pourquoi contrôler son compteur d'eau après une absence prolongée | detection-fuite-non-destructive | 2 |
| 019 | `secheresse-argile-fuite-canalisation-enterree` | Sécheresse et argile : le lien entre mouvement de terrain et fuite de canalisation enterrée | recherche-fuite-canalisation-enterree | 2 |
| 020 | `piscine-fin-ete-verifier-avant-hivernage-angers` | Dernières piscines encore ouvertes fin d'été à Angers : bien vérifier avant l'hivernage | recherche-fuite-piscine | 2 |
| 021 | `trelaze-sol-ardoisier-canalisation-enterree` | Trélazé et son ancien bassin ardoisier : un sol particulier pour les canalisations enterrées | recherche-fuite-canalisation-enterree | 2 |
| 022 | `bouchemaine-sol-argileux-canalisation-fuite` | Bouchemaine et les sols argileux du confluent Maine-Loire : un facteur de risque pour vos canalisations | recherche-fuite-canalisation-enterree | 2 |
| 023 | `avrille-plancher-chauffant-fuite-vigilance` | Avrillé et ses pavillons avec plancher chauffant : un point de vigilance fuite spécifique | recherche-fuite-encastree | 2 |
| 024 | `duree-sechage-degat-des-eaux` | Combien de temps faut-il pour assécher un logement après un dégât des eaux ? | assechement-degat-des-eaux | 2 |
| 025 | `parquet-gondole-degat-eaux-remplacer-ou-secher` | Parquet gondolé après un dégât des eaux : faut-il le remplacer ou peut-il sécher ? | assechement-degat-des-eaux | 2 |
| 026 | `fuite-sous-carrelage-salle-de-bain-localiser` | Fuite sous carrelage de salle de bain : comment la localiser sans tout retirer | recherche-fuite-encastree | 2 |
| 027 | `fissure-plafond-fuite-ou-structurel` | Fissure au plafond qui s'agrandit : fuite encastrée ou problème structurel | recherche-fuite-encastree | 2 |
| 028 | `affaissement-terrain-jardin-quand-suspecter-fuite` | Affaissement de terrain dans le jardin : quand suspecter une fuite enterrée | recherche-fuite-canalisation-enterree | 2 |
| 029 | `fuite-eau-qui-gicle-reflexes-urgence` | Fuite d'eau qui gicle : les bons réflexes en attendant le professionnel | urgence-fuite-eau | 2 |
| 030 | `fuite-eau-electricite-securite-precautions` | Fuite d'eau et électricité : les précautions de sécurité à prendre immédiatement | urgence-fuite-eau | 2 |
| 031 | `vanne-arret-eau-introuvable-bloquee-urgence` | Vanne d'arrêt général introuvable ou bloquée : que faire en urgence | urgence-fuite-eau | 2 |
| 032 | `duree-recherche-fuite-eau-deroulement` | Combien de temps dure une recherche de fuite d'eau ? Déroulé étape par étape | detection-fuite-non-destructive | 2 |
| 033 | `artisan-independant-ou-enseigne-recherche-fuite` | Artisan indépendant ou grande enseigne pour une recherche de fuite : ce qui change concrètement | detection-fuite-non-destructive | 2 |
| 034 | `devis-gratuit-recherche-fuite-angers-premier-appel` | Devis gratuit pour une recherche de fuite à Angers : à quoi s'attendre lors du premier appel | detection-fuite-non-destructive | 2 |
| 035 | `mythe-fuite-invisible-pas-grave` | « Une fuite invisible n'est pas grave si on ne voit pas d'eau » : le mythe qui coûte cher | detection-fuite-non-destructive | 2 |
| 036 | `faut-il-casser-pour-trouver-une-fuite` | « Il faut casser pour trouver une fuite » : pourquoi ce n'est plus vrai | detection-fuite-non-destructive | 2 |
| 037 | `lexique-recherche-fuite-eau` | Lexique de la recherche de fuite d'eau : tous les termes expliqués simplement | detection-fuite-non-destructive | 2 |

**T1 complet (37/37 titres rédigés).**

| N° | Slug (fichier `content/drafts/`) | Titre | Services liés | Images |
|---|---|---|---|---|
| 038 | `chasse-eau-fuit-continu-pourquoi-inquieter` | Chasse d'eau qui fuit en continu : pourquoi et quand s'inquiéter | detection-fuite-non-destructive | 2 |
| 039 | `odeur-moisi-persistante-fuite-cachee` | Odeur de moisi persistante sans humidité visible : et si c'était une fuite cachée ? | detection-fuite-non-destructive | 2 |
| 040 | `chauffe-eau-qui-fuit-ballon-ou-reseau` | Chauffe-eau qui fuit : fuite du ballon ou fuite sur le réseau ? | detection-fuite-non-destructive | 2 |
| 041 | `radiateur-qui-fuit-canalisation-chauffage` | Radiateur qui fuit : fuite du radiateur ou fuite sur la canalisation de chauffage ? | recherche-fuite-encastree | 2 |
| 042 | `odeur-chlore-piscine-hors-saison-fuite` | Odeur de chlore forte près d'une piscine hors saison : signe d'une fuite ? | recherche-fuite-piscine | 2 |
| 043 | `bruit-goutte-a-goutte-derriere-cloison` | Bruit de goutte à goutte derrière une cloison : comment le localiser sans casser | recherche-fuite-encastree | 2 |
| 044 | `lave-linge-qui-fuit-machine-ou-arrivee-eau` | Lave-linge qui fuit : comment savoir si le problème vient de la machine ou de l'arrivée d'eau | detection-fuite-non-destructive | 2 |
| 045 | `lave-vaisselle-qui-fuit-machine-ou-canalisation` | Lave-vaisselle qui fuit : machine, joint ou canalisation, comment distinguer | detection-fuite-non-destructive | 2 |
| 046 | `chaudiere-qui-fuit-vase-expansion-ou-canalisation` | Chaudière qui fuit : vase d'expansion, joint ou canalisation de chauffage | recherche-fuite-encastree | 2 |
| 047 | `eau-qui-stagne-sous-electromenager` | Eau qui stagne sous un lave-vaisselle ou une machine à laver : vérifier avant de s'inquiéter | detection-fuite-non-destructive | 2 |
| 048 | `degat-des-eaux-qui-se-repete-casser-cycle` | Dégât des eaux qui se répète : comment casser le cycle | assechement-degat-des-eaux, detection-fuite-non-destructive | 2 |
| 049 | `fuite-eau-residence-secondaire-absence` | Résidence secondaire : comment se protéger d'une fuite pendant votre absence | urgence-fuite-eau | 2 |
| 050 | `convention-irsi-expliquee-simplement` | Convention IRSI expliquée simplement : ce qu'elle change pour votre dossier | assechement-degat-des-eaux | 2 |
| 051 | `fuite-eau-meuble-tourisme-responsabilite` | Fuite d'eau dans un bien loué en meublé de tourisme : qui est responsable ? | urgence-fuite-eau | 2 |
| 052 | `correlation-acoustique-localiser-fuite` | Corrélation acoustique : comment on localise une fuite au bruit | recherche-fuite-canalisation-enterree | 2 |
| 053 | `test-pression-reseau-eau-fuite` | Test de pression sur un réseau d'eau : à quoi ça sert et comment ça se déroule | detection-fuite-non-destructive | 2 |
| 054 | `condensation-ou-fuite-eau-difference` | Pourquoi une simple humidité ne veut pas dire fuite : le piège de la condensation | detection-fuite-non-destructive | 2 |
| 055 | `pression-eau-trop-elevee-cause-fuite` | Pression réseau trop élevée : un facteur qui favorise l'apparition de fuites | detection-fuite-non-destructive | 2 |
| 056 | `proteger-canalisations-exterieures-avant-hiver` | Protéger ses canalisations extérieures avant l'hiver : purge et isolation | urgence-fuite-eau | 2 |
| 057 | `canalisation-gelee-signes-reflexes` | Canalisation gelée : les signes et les bons réflexes avant qu'elle n'éclate | urgence-fuite-eau | 2 |
| 058 | `purger-radiateurs-avant-hiver-fuite` | Purger ses radiateurs avant l'hiver : un geste utile aussi pour repérer une fuite | recherche-fuite-encastree | 2 |
| 059 | `degat-eaux-logement-vide-vacances-hiver` | Vacances de fin d'année : le risque de dégât des eaux en logement inoccupé et comment l'éviter | urgence-fuite-eau | 2 |
| 060 | `proteger-compteur-eau-exterieur-gel` | Protéger son compteur d'eau extérieur du gel : ce qui le rend vulnérable | urgence-fuite-eau | 2 |
| 061 | `premieres-gelees-angers-canalisations` | Premières gelées à Angers : la période à surveiller pour les canalisations extérieures | urgence-fuite-eau | 2 |
| 062 | `canalisations-anciennes-quartiers-angers` | Pourquoi les canalisations sont plus anciennes dans certains quartiers d'Angers | detection-fuite-non-destructive | 2 |
| 063 | `colonnes-montantes-angers-copropriete` | Habitat ancien du centre-ville d'Angers : colonnes montantes et risques de fuite en copropriété | assechement-degat-des-eaux, detection-fuite-non-destructive | 2 |
| 064 | `gel-canalisations-angers-climat-oceanique` | Angers et le climat océanique : pourquoi le gel des canalisations reste rare mais pas impossible | urgence-fuite-eau | 2 |
| 065 | `tuffeau-angers-bati-ancien-fuite-eau` | Angers et le tuffeau : ce bâti ancien face aux fuites d'eau, ce qu'il faut savoir | detection-fuite-non-destructive, recherche-fuite-encastree | 2 |
| 066 | `deshumidificateur-ou-ventilation-apres-fuite` | Déshumidificateur ou ventilation naturelle : quelle solution après une fuite | assechement-degat-des-eaux | 2 |
| 067 | `degat-eaux-parking-souterrain-cave-commune` | Dégât des eaux dans un parking souterrain ou une cave commune : particularités de l'assèchement | assechement-degat-des-eaux | 2 |
| 068 | `fuite-piscine-hiver-intervenir-ou-attendre` | Fuite de piscine en hiver : faut-il intervenir avant le printemps ou attendre | recherche-fuite-piscine | 2 |
| 069 | `plancher-chauffant-ne-chauffe-plus-fuite` | Plancher chauffant qui ne chauffe plus : et si c'était une fuite ? | recherche-fuite-encastree | 2 |
| 070 | `canalisation-plomb-ancienne-risque-fuite` | Canalisation en plomb ancienne : un risque accru de fuite à surveiller | recherche-fuite-canalisation-enterree | 2 |
| 071 | `coupure-eau-immeuble-fuite` | Coupure d'eau générale de l'immeuble : comment savoir si c'est lié à une fuite | urgence-fuite-eau | 2 |
| 072 | `fuite-eau-nuit-angers-qui-appeler` | Fuite d'eau la nuit à Angers : qui appeler et dans quel ordre | urgence-fuite-eau | 2 |
| 073 | `fuite-eau-odeur-gaz-simultanee` | Fuite d'eau et odeur de gaz en même temps : la priorité absolue | urgence-fuite-eau | 2 |
| 074 | `recherche-fuite-urgence-ou-programmee` | Recherche de fuite en urgence ou intervention programmée : comment savoir | detection-fuite-non-destructive, urgence-fuite-eau | 2 |
| 075 | `recherche-fuite-disponibilite-24h-urgence` | Recherche de fuite d'eau : pourquoi la disponibilité 24h/24 change tout en cas d'urgence | urgence-fuite-eau | 2 |
| 076 | `facture-eau-stable-pas-de-fuite-mythe` | « Ma facture d'eau est stable, donc je n'ai pas de fuite » : pourquoi ce n'est pas toujours vrai | detection-fuite-non-destructive | 2 |
| 077 | `questions-frequentes-recherche-fuite-eau` | Recherche de fuite d'eau : les questions les plus posées avant une intervention | detection-fuite-non-destructive | 2 |

**T2 complet (40/40 titres rédigés, #38 à #77).** Restant à écrire : T3 (37 titres, #78 à #114),
T4 (35 titres, #115 à #149).

## 7. IMAGES DES PAGES SERVICES (état après correction du 2026-07-25 soir)

Hero (1 par page, `public/services/{slug}.jpg`) + images de corps de bloc (`public/services/{slug}-{suffixe}.jpg`, référencées dans `content/services/*.json`). Toutes régénérées sans texte/logo, sans visage flou.

| Service | Hero | Images de corps (2-3) |
|---|---|---|
| `urgence-fuite-eau` | Technicien fermant le robinet d'arrêt sous un évier | 1. `-robinet` : gros plan mains + clé sur le robinet d'arrêt (bloc "Que faire en attendant") · 2. `-materiel` : mallette ouverte avec gaz traceur, caméra thermique, géophones, corrélateur (bloc "Notre intervention") |
| `detection-fuite-non-destructive` | Mains tenant une caméra thermique, écran net, aucun visage | 1. `-gaz-traceur` : détecteur + sonde sur un raccord de cuivre (bloc "Le gaz traceur") · 2. `-camera-thermique` : écran caméra thermique avec zone froide (bloc "La caméra thermique") · 3. `-acoustique` : corrélateur + géophone, graphique de corrélation à l'écran (bloc "La détection acoustique") |
| `recherche-fuite-canalisation-enterree` | Technicien agenouillé au jardin, casque + corrélateur, visage net | 1. `-signe` : pelouse avec zone anormalement verte/détrempée (bloc "Signes") · 2. `-correlation` : corrélateur au sol relié à un géophone dans l'herbe (bloc "Nos méthodes de localisation") |
| `recherche-fuite-encastree` | Gros plan mains + détecteur gaz traceur près d'une plinthe | 1. `-mur` : écran caméra thermique contre un mur, trace froide verticale (bloc "Fuite dans un mur") · 2. `-sol` : détecteur gaz traceur près d'un plancher bois (bloc "Fuite au sol / plancher chauffant") |
| `recherche-fuite-piscine` | Piscine nette, technicien au bord avec kit de test, visage net | 1. `-pieces-sceller` : injection de colorant traceur près d'une buse immergée (bloc "Où se situent les fuites") · 2. `-pression` : manomètres bleu/rouge connectés au circuit hydraulique (bloc "Nos méthodes de détection") |
| `assechement-degat-des-eaux` | Déshumidificateur + turbine, technicien en arrière-plan | 1. `-recherche` : caméra thermique sur un angle de plafond taché (bloc "Recherche de fuite") · 2. `-sechage` : panneau de contrôle d'un déshumidificateur (bloc "Assèchement des structures") |
