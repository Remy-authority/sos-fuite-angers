# CLAUDE.md — SOS Fuite d'Eau Angers

> Fichier de règles du projet. Toute session (CEO, Builder, SEO) le lit AVANT de toucher au repo.
> Les règles ici priment sur tout comportement par défaut.

---

## 1. CONTEXTE DU PROJET

- **Modèle économique : rank & rent.** On construit un site local, on le classe en SEO
  (référencement naturel + citations par les IA), on capte des demandes de clients, puis on
  **loue** le site à un artisan de la zone. On ne vend pas de prestation nous-mêmes.
- **Site pilote : recherche de fuite d'eau à Angers.** Domaine `sos-fuite-angers.fr` (acheté),
  déployé sur Vercel (`sos-fuite-angers.vercel.app`).
- **Ce repo est un TEMPLATE.** Il servira de base aux prochains sites (autre métier / ville /
  locataire). Objectif : déployer un site N+1 en changeant surtout la **config** + le **contenu**,
  sans réécrire le code. Tout ce qu'on décide ici doit rester générique et réutilisable.

---

## 2. STANDARD DE DESIGN — NON NÉGOCIABLE

- **Référence unique et obligatoire : https://sniperpestcontrol3dservices.fr**
  (site créé par Rémy, réussi). C'est LE mètre-étalon. Tout écran produit se compare à lui.
- Exigences : **direction artistique forte, rendu premium, ancrage local.** Le visiteur doit
  sentir un artisan sérieux et haut de gamme, pas un template acheté.
- **Interdits absolus :**
  - Design générique / « template » reconnaissable.
  - Pages 100 % texte, sans visuel, sans rythme, sans hiérarchie.
  - Sections plates copiées-collées d'une page à l'autre sans intention.
- Chaque page doit avoir : visuels de qualité, respiration, hiérarchie claire, CTA visibles,
  cohérence de la charte (couleurs eau + accent urgence).

---

## 3. DOCTRINE SEO

- **Pas de fiche Google Business, pas d'avis clients.** Tout repose sur le **SEO organique**
  et le **GEO** (être cité par les IA : ChatGPT, Perplexity, AI Overviews).
- **Structure du site :**
  - 1 page d'accueil
  - 1 page par **service**
  - 1 page par **commune voisine**
  - 1 **blog conseils**
  - **mentions légales** conformes (droit français)
- **FAQ sur chaque page** (utile utilisateur + données structurées + citabilité IA).
- **Interdits absolus :**
  - Bourrage de mots-clés.
  - Chiffres inventés (nombre d'interventions, années d'expérience…) non validés par Rémy.
  - Fausses certifications / faux labels.
  - Phrases creuses de remplissage.
- Contenu vrai, précis, local. Si une donnée n'est pas confirmée → on ne l'affiche pas.

---

## 4. RÈGLE DE MÉMOIRE & DÉPLOIEMENT

- **À chaque session : lire `docs/ETAT.md` en arrivant**, et **le mettre à jour avant de finir.**
  C'est le journal de bord unique du projet.
- **Rien ne se déploie (merge sur `main` / mise en prod) sans la validation explicite de Rémy.**
- Marquer les valeurs non confirmées comme `DEMO` tant que Rémy n'a pas tranché.

---

## 5. FONCTIONNEMENT DES RÔLES

- **CEO (coordinateur)** : ne code pas. Pilote, audite, et prépare des messages prêts à coller
  entre balises `=== MESSAGE POUR [AGENT] ===` pour le Builder / SEO. Traduit tout en langage
  simple pour Rémy (pas de jargon).
- **Builder** : code (design + intégration). Reçoit des consignes précises du CEO.
- **SEO** (plus tard) : contenu et optimisation, dans le respect de la doctrine SEO ci-dessus.
