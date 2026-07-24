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
- **Zones** (`app/zones/*`, `content/zones/*`) → non assigné (vague suivante). Interdit aux agents actuels.

Règle : un fichier = un seul propriétaire à la fois. Le CEO arbitre avant toute réaffectation.

## 4ter. ÉTAT LIVRAISON (2026-07-25, soir)

- **Branche `feat/NOU-29-services-images-aeration`** = Builder (images + aération services,
  commit 52c516f, puis correction en profondeur ci-dessous) + Autoblog (articles conseils +
  covers, consolidé par le CEO) + SEO/GEO auditeur (`docs/SEO-GEO-PLAN.md`).
- **Retour Rémy sur la 1ère version : rendu jugé < 3/10.** Corrections appliquées (voir §5,
  session Builder du soir) : sidebar sticky supprimée, 13 images explicatives ajoutées dans le
  corps des 6 pages, 6 images hero régénérées (zéro marque/logo, zéro visage flou).
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

## 6. ARTICLES DE CONSEILS PUBLIÉS

| Slug | Titre | Services liés |
|---|---|---|
| `fuite-invisible-signes` | Fuite d'eau invisible : 7 signes qui doivent vous alerter | detection-fuite-non-destructive, urgence-fuite-eau |
| `cout-recherche-fuite-eau-assurance` | Combien coûte une recherche de fuite d'eau et qui paie la facture ? | detection-fuite-non-destructive, urgence-fuite-eau |
| `degat-des-eaux-demarches-assurance` | Dégât des eaux : les démarches assurance étape par étape | assechement-degat-des-eaux, detection-fuite-non-destructive |
| `fuite-canalisation-enterree-detection` | Fuite sur canalisation enterrée : comment on la détecte sans tout casser | recherche-fuite-canalisation-enterree, detection-fuite-non-destructive |
| `fuite-eau-copropriete-responsabilite` | Fuite d'eau en copropriété : qui est responsable et qui paie ? | detection-fuite-non-destructive, assechement-degat-des-eaux |
| `detection-gaz-traceur-fonctionnement` | Comment fonctionne la détection par gaz traceur (et quand on l'utilise) | detection-fuite-non-destructive, recherche-fuite-canalisation-enterree |
| `fuite-avant-apres-compteur` | Fuite après compteur / avant compteur : comment savoir et qui contacter | detection-fuite-non-destructive, recherche-fuite-canalisation-enterree |

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
