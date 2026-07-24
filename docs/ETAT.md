# ETAT.md — Journal de bord SOS Fuite d'Eau Angers

> Mémoire du projet. Chaque session lit ce fichier en arrivant et le met à jour avant de finir.
> Dernière mise à jour : 2026-07-25 (session CEO — reprise du projet, audit initial).

---

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
