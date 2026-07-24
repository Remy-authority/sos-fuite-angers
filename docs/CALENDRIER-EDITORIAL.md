# CALENDRIER-EDITORIAL.md : Calendrier éditorial Autoblog (12 mois)

> Audit LECTURE SEULE (agent SEO/GEO). Aucun fichier de code/contenu modifié.
> Date de rédaction : 2026-07-25. Périmètre couvert : 12 mois à venir, cadence 3 articles/semaine
> (environ 150 articles), à partir de `docs/SEO-GEO-PLAN.md` (backlog initial) et de l'état réel
> du contenu déjà publié (`content/conseils/*.mdx`, `content/services/*.json`, `content/zones/*.json`).

---

## 0. RAPPEL DES EXIGENCES SEO/GEO POUR L'AUTOBLOG

À respecter sur **chaque** article, sans exception :

1. **Réponse courte citable en intro** : un paragraphe factuel de 2 à 4 phrases juste après le
   titre, qui répond directement à la requête cible, formaté pour être extractible par une IA
   (façon « En bref » des pages services/zones).
2. **FAQ de 4 questions** en frontmatter (`faq: [{q, a}]`), pas dans le corps Markdown (convention
   déjà en place depuis la passe de finition du 2026-07-25 : câblée sur `<Faq>` qui émet le
   `FAQPage` JSON-LD).
3. **Aucun chiffre inventé** : ni durée, ni tarif, ni statistique, ni certification qui ne soit pas
   vérifiée. En cas de doute sur un chiffre (durée d'intervention, délai légal, taux), formuler en
   ordre de grandeur qualitatif ou renvoyer vers la source officielle plutôt qu'inventer.
4. **Maillage `relatedServices`** : 1 à 2 slugs de service pertinents en frontmatter, cohérents
   avec le sujet réel de l'article (pas de maillage forcé).
5. **Zéro tiret cadratin « — »** dans le texte visible (titre, description, corps, FAQ). Virgule
   ou point à la place (règle CLAUDE.md).
6. Contenu vrai, précis, local. Pas de bourrage de mots-clés, pas de remplissage.

---

## 1. BASE ANTI-DUPLICATION : LES 11 ARTICLES DÉJÀ PUBLIÉS

Aucun titre planifié ci-dessous ne doit viser la même requête principale que l'un de ces 11
articles déjà en ligne. Ce tableau est la référence à vérifier avant toute rédaction.

| # | Slug | Titre publié | Sujet couvert | `relatedServices` |
|---|---|---|---|---|
| P1 | `fuite-invisible-signes` | Fuite d'eau invisible : 7 signes qui doivent vous alerter | Signes généraux d'une fuite cachée (compteur, factures, taches) | detection-fuite-non-destructive, urgence-fuite-eau |
| P2 | `cout-recherche-fuite-eau-assurance` | Combien coûte une recherche de fuite d'eau et qui paie la facture ? | Facteurs de prix, séparation recherche/réparation, garantie assurance | detection-fuite-non-destructive, urgence-fuite-eau |
| P3 | `degat-des-eaux-demarches-assurance` | Dégât des eaux : les démarches assurance étape par étape | Délai de déclaration, ordre des démarches, mention IRSI | assechement-degat-des-eaux, detection-fuite-non-destructive |
| P4 | `fuite-canalisation-enterree-detection` | Fuite sur canalisation enterrée : comment on la détecte sans tout casser | Signes et méthodes de détection sur canalisation enterrée | recherche-fuite-canalisation-enterree, detection-fuite-non-destructive |
| P5 | `fuite-eau-copropriete-responsabilite` | Fuite d'eau en copropriété : qui est responsable et qui paie ? | Répartition parties communes/privatives, syndic, IRSI | detection-fuite-non-destructive, assechement-degat-des-eaux |
| P6 | `detection-gaz-traceur-fonctionnement` | Comment fonctionne la détection par gaz traceur (et quand on l'utilise) | Méthode gaz traceur : fonctionnement, sécurité, cas d'usage | detection-fuite-non-destructive, recherche-fuite-canalisation-enterree |
| P7 | `fuite-avant-apres-compteur` | Fuite après compteur / avant compteur : comment savoir et qui contacter | Responsabilité réseau public/privé selon l'emplacement de la fuite | detection-fuite-non-destructive, recherche-fuite-canalisation-enterree |
| P8 | `piscine-perd-eau-evaporation-ou-fuite` | Piscine qui perd de l'eau : évaporation normale ou vraie fuite ? | Test du seau, distinction évaporation/fuite | recherche-fuite-piscine |
| P9 | `fuite-dans-un-mur-signes-detection` | Fuite dans un mur : les signes qui ne trompent pas (et comment la localiser sans tout casser) | Signes fuite encastrée mur, distinction avec condensation | recherche-fuite-encastree |
| P10 | `facture-eau-anormalement-elevee-causes` | Facture d'eau anormalement élevée : causes et comment réagir | Causes courantes d'une facture élevée, test du compteur | detection-fuite-non-destructive, urgence-fuite-eau |
| P11 | `locataire-proprietaire-qui-paie-fuite` | Locataire ou propriétaire : qui paie la recherche de fuite d'eau ? | Répartition locataire/propriétaire, vétusté, assurances respectives | urgence-fuite-eau, detection-fuite-non-destructive |

**Note** : les 4 premiers items du backlog de `SEO-GEO-PLAN.md` (§2, items #1 à #4 : piscine,
fuite dans un mur, facture d'eau, locataire/propriétaire) sont déjà écrits (P8, P9, P10, P11
ci-dessus). Le calendrier ci-dessous **reprend et recase** les items restants du backlog initial
(#5 à #10) dès le T1, puis développe ~140 titres supplémentaires pour couvrir 12 mois.

---

## 2. CALENDRIER ÉDITORIAL (149 TITRES, T1 À T4)

Découpage retenu (12 mois à partir de la date de rédaction) :

- **T1 : août à octobre 2026** (semaines 1 à 13), fin d'été, rentrée, piscines encore ouvertes.
- **T2 : novembre 2026 à janvier 2027** (semaines 14 à 26), hiver, gel, chauffage, absences.
- **T3 : février à avril 2027** (semaines 27 à 39), sortie d'hiver, printemps, remise en route.
- **T4 : mai à juillet 2027** (semaines 40 à 52), saison piscine, jardin, chaleur.

Numérotation continue #1 à #149 (référencée dans la section 3, anti-cannibalisation).

### T1, août à octobre 2026 (37 titres)

#### Symptômes / diagnostic

| # | Titre | Requête cible | Intention | `relatedServices` |
|---|---|---|---|---|
| 1 | Fuite d'eau dans la cuisine : les endroits à vérifier avant d'appeler un pro | fuite d'eau cuisine que faire | Info | detection-fuite-non-destructive |
| 2 | Fuite d'eau dans la salle de bain : douche, baignoire, WC, les causes possibles | fuite d'eau salle de bain cause | Info | detection-fuite-non-destructive |
| 3 | Tache au plafond : dégât des eaux du voisin du dessus, les bons réflexes immédiats | tache plafond fuite voisin du dessus | Info | assechement-degat-des-eaux |
| 4 | Bruit d'eau qui coule en continu alors que rien n'est ouvert : que vérifier | bruit eau qui coule continu maison | Info | detection-fuite-non-destructive |
| 5 | Fuite sous l'évier : joint, siphon ou canalisation, comment distinguer | fuite sous évier cause | Info | detection-fuite-non-destructive |
| 6 | Compteur d'eau qui tourne la nuit : le protocole pour en être sûr | compteur eau tourne la nuit fuite | Info | detection-fuite-non-destructive |
| 7 | WC qui fuit en permanence : joint de chasse d'eau ou canalisation sous la cuvette | wc fuite permanente cause | Info | detection-fuite-non-destructive |
| 8 | Buanderie inondée sans cause visible : les points de contrôle avant d'appeler | buanderie inondée sans cause fuite | Info | detection-fuite-non-destructive |

#### Assurance / juridique

| # | Titre | Requête cible | Intention | `relatedServices` |
|---|---|---|---|---|
| 9 | Garantie dégât des eaux ou garantie recherche de fuite : quelle différence dans votre contrat | garantie dégât des eaux ou recherche de fuite différence | Info | detection-fuite-non-destructive, assechement-degat-des-eaux |
| 10 | Obligations du syndic de copropriété face à une fuite dans les parties communes | obligations syndic fuite parties communes | Info | assechement-degat-des-eaux |
| 11 | Franchise, plafond, exclusions : ce que votre assurance habitation couvre vraiment en cas de fuite | franchise plafond exclusions assurance fuite eau | Info | detection-fuite-non-destructive, assechement-degat-des-eaux |
| 12 | Devis de recherche de fuite : les questions à poser avant de signer | devis recherche de fuite questions à poser | Transac | detection-fuite-non-destructive |

#### Méthodes techniques

| # | Titre | Requête cible | Intention | `relatedServices` |
|---|---|---|---|---|
| 13 | Gaz traceur, caméra thermique ou corrélation acoustique : quelle méthode pour quelle situation | quelle méthode choisir détection fuite | Info | detection-fuite-non-destructive |
| 14 | Comment fonctionne la caméra thermique pour détecter une fuite (et ses limites) | caméra thermique détection fuite fonctionnement | Info | detection-fuite-non-destructive |
| 15 | Pourquoi une recherche de fuite non destructive coûte moins cher que casser à l'aveugle | recherche de fuite non destructive avantage prix | Transac | detection-fuite-non-destructive |

#### Saisonnier

| # | Titre | Requête cible | Intention | `relatedServices` |
|---|---|---|---|---|
| 16 | Hivernage de piscine : les gestes qui évitent les fuites au printemps | hivernage piscine éviter fuite | Info | recherche-fuite-piscine |
| 17 | Partir en vacances l'esprit tranquille : sécuriser son logement contre le risque de fuite | sécuriser logement fuite avant vacances | Info | urgence-fuite-eau |
| 18 | Rentrée : pourquoi contrôler son compteur d'eau après une absence prolongée | contrôler compteur eau après vacances | Info | detection-fuite-non-destructive |
| 19 | Sécheresse et argile : le lien entre mouvement de terrain et fuite de canalisation enterrée | sécheresse argile fuite canalisation | Info | recherche-fuite-canalisation-enterree |
| 20 | Dernières piscines encore ouvertes fin d'été à Angers : bien vérifier avant l'hivernage | vérifier piscine fin été avant hivernage Angers | Locale | recherche-fuite-piscine |

#### Local Angers / communes

| # | Titre | Requête cible | Intention | `relatedServices` |
|---|---|---|---|---|
| 21 | Trélazé et son ancien bassin ardoisier : un sol particulier pour les canalisations enterrées | sol ardoisier Trélazé canalisation | Locale | recherche-fuite-canalisation-enterree |
| 22 | Bouchemaine et les sols argileux du confluent Maine-Loire : un facteur de risque pour vos canalisations | sol argileux Bouchemaine canalisation fuite | Locale | recherche-fuite-canalisation-enterree |
| 23 | Avrillé et ses pavillons avec plancher chauffant : un point de vigilance fuite spécifique | plancher chauffant pavillon Avrillé fuite | Locale | recherche-fuite-encastree |

#### Assèchement / dégât des eaux

| # | Titre | Requête cible | Intention | `relatedServices` |
|---|---|---|---|---|
| 24 | Combien de temps faut-il pour assécher un logement après un dégât des eaux ? | durée séchage dégât des eaux | Info | assechement-degat-des-eaux |
| 25 | Parquet gondolé après un dégât des eaux : faut-il le remplacer ou peut-il sécher | parquet gondolé après dégât des eaux | Info | assechement-degat-des-eaux |

#### Fuite encastrée / canalisation enterrée

| # | Titre | Requête cible | Intention | `relatedServices` |
|---|---|---|---|---|
| 26 | Fuite sous carrelage de salle de bain : comment la localiser sans tout retirer | fuite sous carrelage salle de bain | Info | recherche-fuite-encastree |
| 27 | Fissure au plafond qui s'agrandit : fuite encastrée ou problème structurel | fissure plafond fuite ou structurel | Info | recherche-fuite-encastree |
| 28 | Affaissement de terrain dans le jardin : quand suspecter une fuite enterrée | affaissement terrain jardin fuite | Info | recherche-fuite-canalisation-enterree |

#### Urgence / pratique

| # | Titre | Requête cible | Intention | `relatedServices` |
|---|---|---|---|---|
| 29 | Fuite d'eau qui gicle : les bons réflexes en attendant le professionnel | fuite d'eau qui gicle que faire | Transac | urgence-fuite-eau |
| 30 | Fuite d'eau et électricité : les précautions de sécurité à prendre immédiatement | fuite eau électricité danger sécurité | Info | urgence-fuite-eau |
| 31 | Vanne d'arrêt général introuvable ou bloquée : que faire en urgence | vanne arrêt eau générale bloquée urgence | Info | urgence-fuite-eau |

#### Comparatif / pilier

| # | Titre | Requête cible | Intention | `relatedServices` |
|---|---|---|---|---|
| 32 | Combien de temps dure une recherche de fuite d'eau ? Déroulé heure par heure | durée recherche de fuite d'eau | Info | detection-fuite-non-destructive |
| 33 | Artisan indépendant ou grande enseigne pour une recherche de fuite : ce qui change concrètement | artisan indépendant ou enseigne recherche de fuite | Info | detection-fuite-non-destructive |
| 34 | Devis gratuit pour une recherche de fuite à Angers : à quoi s'attendre lors du premier appel | devis gratuit recherche de fuite Angers premier appel | Locale | detection-fuite-non-destructive |
| 35 | « Une fuite invisible n'est pas grave si on ne voit pas d'eau » : le mythe qui coûte cher | fuite invisible pas grave mythe | Info | detection-fuite-non-destructive |
| 36 | « Il faut casser pour trouver une fuite » : pourquoi ce n'est plus vrai | faut-il casser pour trouver une fuite | Info | detection-fuite-non-destructive |
| 37 | Lexique de la recherche de fuite d'eau : tous les termes expliqués simplement | lexique recherche de fuite d'eau | Info | detection-fuite-non-destructive |

### T2, novembre 2026 à janvier 2027 (40 titres)

#### Symptômes / diagnostic

| # | Titre | Requête cible | Intention | `relatedServices` |
|---|---|---|---|---|
| 38 | Chasse d'eau qui fuit en continu : pourquoi et quand s'inquiéter | chasse d'eau qui fuit en continu | Info | detection-fuite-non-destructive |
| 39 | Odeur de moisi persistante sans humidité visible : et si c'était une fuite cachée ? | odeur de moisi fuite d'eau cachée | Info | detection-fuite-non-destructive |
| 40 | Chauffe-eau qui fuit : fuite du ballon ou fuite sur le réseau ? | chauffe-eau qui fuit cause | Info | detection-fuite-non-destructive |
| 41 | Radiateur qui fuit : fuite du radiateur ou fuite sur la canalisation de chauffage ? | radiateur qui fuit cause | Info | recherche-fuite-encastree |
| 42 | Odeur de chlore forte près d'une piscine hors saison : signe d'une fuite ? | odeur chlore piscine hors saison fuite | Info | recherche-fuite-piscine |
| 43 | Bruit de goutte à goutte derrière une cloison : comment le localiser sans casser | bruit goutte à goutte derrière cloison | Info | recherche-fuite-encastree |
| 44 | Lave-linge qui fuit : comment savoir si le problème vient de la machine ou de l'arrivée d'eau | lave-linge qui fuit arrivée eau | Info | detection-fuite-non-destructive |
| 45 | Lave-vaisselle qui fuit : machine, joint ou canalisation, comment distinguer | lave-vaisselle qui fuit cause | Info | detection-fuite-non-destructive |
| 46 | Chaudière qui fuit : vase d'expansion, joint ou canalisation de chauffage | chaudière qui fuit cause | Info | recherche-fuite-encastree |
| 47 | Eau qui stagne sous un lave-vaisselle ou une machine à laver : vérifier avant de s'inquiéter | eau qui stagne sous électroménager | Info | detection-fuite-non-destructive |

#### Assurance / juridique

| # | Titre | Requête cible | Intention | `relatedServices` |
|---|---|---|---|---|
| 48 | Dégât des eaux qui se répète : comment casser le cycle | dégât des eaux qui se répète que faire | Info | assechement-degat-des-eaux, detection-fuite-non-destructive |
| 49 | Résidence secondaire : comment se protéger d'une fuite pendant votre absence | fuite eau résidence secondaire absence | Info | urgence-fuite-eau |
| 50 | Convention IRSI expliquée simplement : ce qu'elle change pour votre dossier | convention IRSI expliquée | Info | assechement-degat-des-eaux |
| 51 | Fuite d'eau dans un bien loué en meublé de tourisme : qui est responsable | fuite d'eau meublé de tourisme responsabilité | Locale | urgence-fuite-eau |

#### Méthodes techniques

| # | Titre | Requête cible | Intention | `relatedServices` |
|---|---|---|---|---|
| 52 | Corrélation acoustique : comment on localise une fuite au bruit | corrélation acoustique fuite d'eau | Info | recherche-fuite-canalisation-enterree |
| 53 | Test de pression sur un réseau d'eau : à quoi ça sert et comment ça se déroule | test de pression réseau eau fuite | Info | detection-fuite-non-destructive |
| 54 | Pourquoi une simple humidité ne veut pas dire fuite : le piège de la condensation | condensation ou fuite d'eau différence | Info | detection-fuite-non-destructive |
| 55 | Pression réseau trop élevée : un facteur qui favorise l'apparition de fuites | pression eau trop élevée cause fuite | Info | detection-fuite-non-destructive |

#### Saisonnier

| # | Titre | Requête cible | Intention | `relatedServices` |
|---|---|---|---|---|
| 56 | Protéger ses canalisations extérieures avant l'hiver : purge et isolation | protéger canalisation extérieure hiver gel | Info | urgence-fuite-eau |
| 57 | Canalisation gelée : les signes et les bons réflexes avant qu'elle n'éclate | canalisation gelée que faire | Transac | urgence-fuite-eau |
| 58 | Purger ses radiateurs avant l'hiver : un geste utile aussi pour repérer une fuite | purger radiateur avant hiver fuite | Info | recherche-fuite-encastree |
| 59 | Vacances de fin d'année : le risque de dégât des eaux en logement inoccupé et comment l'éviter | dégât des eaux logement vide vacances hiver | Info | urgence-fuite-eau |
| 60 | Protéger son compteur d'eau extérieur du gel : ce qui le rend vulnérable | protéger compteur eau gel hiver | Info | urgence-fuite-eau |
| 61 | Premières gelées à Angers : la période à surveiller pour les canalisations extérieures | premières gelées Angers canalisation | Locale | urgence-fuite-eau |

#### Local Angers / communes

| # | Titre | Requête cible | Intention | `relatedServices` |
|---|---|---|---|---|
| 62 | Pourquoi les canalisations sont plus anciennes dans certains quartiers d'Angers | canalisations anciennes quartier Angers fuite | Locale | detection-fuite-non-destructive |
| 63 | Habitat ancien du centre-ville d'Angers : colonnes montantes et risques de fuite en copropriété | colonne montante ancienne Angers copropriété fuite | Locale | assechement-degat-des-eaux, detection-fuite-non-destructive |
| 64 | Angers et le climat océanique : pourquoi le gel des canalisations reste rare mais pas impossible | gel canalisation Angers climat | Locale | urgence-fuite-eau |
| 65 | Angers et le tuffeau : ce bâti ancien face aux fuites d'eau, ce qu'il faut savoir | bâti tuffeau Angers fuite eau | Locale | detection-fuite-non-destructive, recherche-fuite-encastree |

#### Assèchement / dégât des eaux

| # | Titre | Requête cible | Intention | `relatedServices` |
|---|---|---|---|---|
| 66 | Déshumidificateur ou ventilation naturelle : quelle solution après une fuite | déshumidificateur après fuite d'eau | Info | assechement-degat-des-eaux |
| 67 | Dégât des eaux dans un parking souterrain ou une cave commune : particularités de l'assèchement | dégât des eaux parking souterrain cave assèchement | Info | assechement-degat-des-eaux |

#### Piscine / encastrée / enterrée

| # | Titre | Requête cible | Intention | `relatedServices` |
|---|---|---|---|---|
| 68 | Fuite de piscine en hiver : faut-il intervenir avant le printemps ou attendre | fuite piscine hiver intervenir ou attendre | Info | recherche-fuite-piscine |
| 69 | Plancher chauffant qui ne chauffe plus : et si c'était une fuite ? | plancher chauffant ne chauffe plus fuite | Info | recherche-fuite-encastree |
| 70 | Canalisation en plomb ancienne : un risque accru de fuite à surveiller | canalisation plomb ancienne fuite risque | Info | recherche-fuite-canalisation-enterree |

#### Urgence / pratique

| # | Titre | Requête cible | Intention | `relatedServices` |
|---|---|---|---|---|
| 71 | Coupure d'eau générale de l'immeuble : comment savoir si c'est lié à une fuite | coupure eau immeuble fuite | Info | urgence-fuite-eau |
| 72 | Fuite d'eau la nuit à Angers : qui appeler et dans quel ordre | fuite d'eau urgence nuit Angers qui appeler | Locale | urgence-fuite-eau |
| 73 | Fuite d'eau et odeur de gaz en même temps : la priorité absolue | fuite eau et odeur de gaz simultanée | Info | urgence-fuite-eau |

#### Comparatif / pilier

| # | Titre | Requête cible | Intention | `relatedServices` |
|---|---|---|---|---|
| 74 | Recherche de fuite en urgence ou intervention programmée : comment savoir | recherche de fuite urgence ou programmée | Info | detection-fuite-non-destructive, urgence-fuite-eau |
| 75 | Recherche de fuite d'eau : pourquoi la disponibilité 24h/24 change tout en cas d'urgence | recherche de fuite disponibilité urgence 24h | Transac | urgence-fuite-eau |
| 76 | « Ma facture d'eau est stable, donc je n'ai pas de fuite » : pourquoi ce n'est pas toujours vrai | facture eau stable pas de fuite mythe | Info | detection-fuite-non-destructive |
| 77 | Recherche de fuite d'eau : les questions les plus posées avant une intervention | questions fréquentes recherche de fuite d'eau | Info | detection-fuite-non-destructive |

### T3, février à avril 2027 (37 titres)

#### Symptômes / diagnostic

| # | Titre | Requête cible | Intention | `relatedServices` |
|---|---|---|---|---|
| 78 | Parquet qui gondole : identifier une fuite d'eau sous le plancher | parquet qui gondole fuite eau | Info | recherche-fuite-encastree |
| 79 | Carrelage qui se soulève : un signe de fuite sous la dalle ? | carrelage se soulève fuite | Info | recherche-fuite-encastree |
| 80 | Terrasse ou dalle béton qui reste humide après la pluie : fuite ou simple infiltration ? | dalle humide fuite ou infiltration | Info | recherche-fuite-canalisation-enterree |
| 81 | Regard d'assainissement plein d'eau claire : signe d'une fuite sur le réseau | regard assainissement eau claire fuite | Info | recherche-fuite-canalisation-enterree |
| 82 | Facade ou mur extérieur qui reste humide sans pluie récente : fuite enterrée contre le mur | mur extérieur humide sans pluie fuite | Info | recherche-fuite-canalisation-enterree |
| 83 | Cave ou sous-sol humide : remontées capillaires, infiltration ou fuite de canalisation | cave humide fuite ou infiltration | Info | recherche-fuite-canalisation-enterree, recherche-fuite-encastree |
| 84 | Odeur d'égout dans la maison sans fuite visible : les causes possibles | odeur égout maison sans fuite | Info | detection-fuite-non-destructive |
| 85 | Peinture qui cloque sur un mur intérieur : humidité, condensation ou fuite | peinture qui cloque mur humidité fuite | Info | recherche-fuite-encastree |
| 86 | Fuite sur un adoucisseur d'eau : un cas particulier à connaître | fuite adoucisseur d'eau | Info | detection-fuite-non-destructive |
| 87 | Fuite sur un osmoseur ou un système de filtration d'eau : ce qu'il faut vérifier | fuite osmoseur filtration eau | Info | detection-fuite-non-destructive |

#### Assurance / juridique

| # | Titre | Requête cible | Intention | `relatedServices` |
|---|---|---|---|---|
| 88 | Expert d'assurance après un dégât des eaux : comment se déroule son passage | expert assurance dégât des eaux déroulement | Info | assechement-degat-des-eaux |
| 89 | Contre-expertise après un refus d'indemnisation : la démarche | contre-expertise assurance dégât des eaux | Info | assechement-degat-des-eaux |
| 90 | Assurance propriétaire non occupant et fuite d'eau : ce qu'il faut savoir | assurance PNO fuite eau | Info | detection-fuite-non-destructive, urgence-fuite-eau |
| 91 | Locataire qui déménage après une fuite : qui règle les travaux restants | locataire déménage fuite travaux restants | Info | urgence-fuite-eau |
| 92 | Fuite d'eau dans un local professionnel ou un bureau : particularités de la prise en charge | fuite eau local professionnel bureau prise en charge | Info | urgence-fuite-eau, assechement-degat-des-eaux |

#### Méthodes techniques

| # | Titre | Requête cible | Intention | `relatedServices` |
|---|---|---|---|---|
| 93 | Endoscopie de canalisation : voir l'intérieur d'un tuyau sans le casser | endoscopie canalisation fuite | Info | recherche-fuite-canalisation-enterree |
| 94 | Débitmètre et compteur divisionnaire : isoler une fuite zone par zone | compteur divisionnaire isoler fuite | Info | detection-fuite-non-destructive |
| 95 | Micro-fuite goutte à goutte : est-elle détectable avec les mêmes méthodes qu'une grosse fuite | détecter micro fuite goutte à goutte | Info | detection-fuite-non-destructive |

#### Saisonnier

| # | Titre | Requête cible | Intention | `relatedServices` |
|---|---|---|---|---|
| 96 | Dégât des eaux après une vague de gel : pourquoi les fuites apparaissent en sortie d'hiver | dégât des eaux après gel fuite | Info | assechement-degat-des-eaux, recherche-fuite-canalisation-enterree |
| 97 | Remise en route de la piscine au printemps : contrôler les fuites avant la saison | remise en route piscine printemps fuite | Info | recherche-fuite-piscine |
| 98 | Entretien de printemps du réseau d'eau : les vérifications simples à faire chaque année | entretien printemps réseau eau maison | Info | detection-fuite-non-destructive |
| 99 | Après un orage violent : comment différencier une infiltration de toiture d'une fuite de canalisation | infiltration toiture ou fuite canalisation après orage | Info | recherche-fuite-canalisation-enterree, recherche-fuite-encastree |
| 100 | Réseau d'arrosage de jardin : la checklist à faire avant l'arrivée de l'été | checklist réseau arrosage avant été fuite | Info | recherche-fuite-canalisation-enterree |
| 101 | Après les vacances de printemps : pourquoi c'est le bon moment pour un contrôle du réseau | contrôle réseau eau après vacances printemps | Info | detection-fuite-non-destructive |

#### Local Angers / communes

| # | Titre | Requête cible | Intention | `relatedServices` |
|---|---|---|---|---|
| 102 | Pavillons récents à Beaucouzé : pourquoi le PER a changé les points de vigilance sur les fuites | tuyau PER fuite pavillon récent | Locale | recherche-fuite-encastree, detection-fuite-non-destructive |
| 103 | Bord de Loire aux Ponts-de-Cé et à Sainte-Gemmes-sur-Loire : humidité ambiante et vraies fuites, comment les distinguer | humidité bord de Loire fuite ou infiltration | Locale | recherche-fuite-canalisation-enterree, detection-fuite-non-destructive |
| 104 | Verrières-en-Anjou, commune nouvelle : des bâtis d'époques différentes face aux fuites | fuite eau Verrières-en-Anjou bâti | Locale | detection-fuite-non-destructive |

#### Assèchement / dégât des eaux

| # | Titre | Requête cible | Intention | `relatedServices` |
|---|---|---|---|---|
| 105 | Moisissures après un dégât des eaux : les prévenir et les traiter | moisissure après dégât des eaux | Info | assechement-degat-des-eaux |
| 106 | Faut-il refaire la peinture ou le papier peint après un séchage : quand attendre | repeindre après dégât des eaux quand | Info | assechement-degat-des-eaux |
| 107 | Reconstruction après un dégât des eaux : dans quel ordre relancer les travaux | ordre travaux reconstruction après dégât des eaux | Info | assechement-degat-des-eaux |

#### Fuite encastrée / enterrée

| # | Titre | Requête cible | Intention | `relatedServices` |
|---|---|---|---|---|
| 108 | Fuite dans une gaine technique d'immeuble : un cas particulier de fuite encastrée | fuite gaine technique immeuble | Info | recherche-fuite-encastree, assechement-degat-des-eaux |
| 109 | Racines d'arbres et canalisations enterrées : un facteur de fuite souvent sous-estimé | racines arbres canalisation fuite | Info | recherche-fuite-canalisation-enterree |

#### Urgence / pratique

| # | Titre | Requête cible | Intention | `relatedServices` |
|---|---|---|---|---|
| 110 | Fuite d'eau un dimanche ou un jour férié à Angers : à quoi s'attendre côté délai | fuite eau dimanche jour férié Angers | Locale | urgence-fuite-eau |

#### Comparatif / pilier

| # | Titre | Requête cible | Intention | `relatedServices` |
|---|---|---|---|---|
| 111 | Recherche de fuite en appartement : les spécificités par rapport à une maison | recherche de fuite appartement | Info | detection-fuite-non-destructive |
| 112 | Recherche de fuite en maison ancienne ou en maison récente : ce qui change | recherche de fuite maison ancienne | Info | detection-fuite-non-destructive |
| 113 | Panorama des dispositifs existants en cas de sinistre eau en France | dispositifs sinistre dégât des eaux France | Info | assechement-degat-des-eaux |
| 114 | Check-list complète avant l'arrivée du technicien de recherche de fuite : ce qu'il faut préparer | checklist avant intervention recherche de fuite | Transac | detection-fuite-non-destructive |

### T4, mai à juillet 2027 (35 titres)

#### Symptômes / diagnostic

| # | Titre | Requête cible | Intention | `relatedServices` |
|---|---|---|---|---|
| 115 | Gazon anormalement vert ou détrempé en pleine sécheresse : un signal fort de fuite enterrée | gazon vert sécheresse fuite canalisation | Info | recherche-fuite-canalisation-enterree |
| 116 | Robinet extérieur qui goutte en permanence : faut-il s'inquiéter | robinet extérieur qui goutte permanent | Info | detection-fuite-non-destructive |
| 117 | Robinetterie qui goutte : simple joint ou signe d'un problème de pression sur le réseau | robinet qui goutte cause pression | Info | detection-fuite-non-destructive |
| 118 | Fourmis ou insectes près d'un mur ou d'une dalle : un signe indirect de fuite | fourmis mur humidité fuite eau | Info | recherche-fuite-canalisation-enterree, recherche-fuite-encastree |
| 119 | Baisse de pression d'eau soudaine dans le logement : fuite ou problème de réseau | baisse de pression eau maison fuite | Info | detection-fuite-non-destructive |
| 120 | Fuite sur une pompe de relevage ou un puisard : signes et vérifications | fuite pompe de relevage puisard | Info | detection-fuite-non-destructive |
| 121 | Fuite sur une piscine à débordement : une configuration particulière | fuite piscine à débordement | Info | recherche-fuite-piscine |
| 122 | Fuite sur un chauffe-eau solaire ou une pompe à chaleur : cas spécifique à connaître | fuite chauffe-eau solaire pompe à chaleur | Info | detection-fuite-non-destructive |

#### Assurance / juridique

| # | Titre | Requête cible | Intention | `relatedServices` |
|---|---|---|---|---|
| 123 | Vendre un logement après un dégât des eaux : ce qu'il faut déclarer à l'acheteur | vendre maison après dégât des eaux obligation | Info | assechement-degat-des-eaux |
| 124 | Bail commercial et fuite d'eau : qui est responsable entre bailleur et locataire professionnel | fuite eau bail commercial responsabilité | Info | urgence-fuite-eau, detection-fuite-non-destructive |
| 125 | Diagnostic fuite d'eau obligatoire avant une vente immobilière : existe-t-il vraiment ? | diagnostic fuite eau obligatoire vente immobilière | Info | detection-fuite-non-destructive |

#### Méthodes techniques

| # | Titre | Requête cible | Intention | `relatedServices` |
|---|---|---|---|---|
| 126 | Colorant traceur pour piscine : comment ça fonctionne concrètement | colorant traceur fuite piscine | Info | recherche-fuite-piscine |
| 127 | Rapport de localisation de fuite : ce qu'il contient et à quoi il sert | rapport de localisation de fuite contenu | Info | detection-fuite-non-destructive |
| 128 | Détection de fuite sans compteur individuel en immeuble collectif : comment ça se passe | détection fuite sans compteur individuel immeuble | Info | detection-fuite-non-destructive, assechement-degat-des-eaux |

#### Saisonnier

| # | Titre | Requête cible | Intention | `relatedServices` |
|---|---|---|---|---|
| 129 | Canicule et piscine : pourquoi l'évaporation augmente (et comment ne pas la confondre avec une fuite) | évaporation piscine canicule | Info | recherche-fuite-piscine |
| 130 | Arrosage automatique de jardin : une source fréquente de fuite invisible en été | fuite arrosage automatique jardin | Info | recherche-fuite-canalisation-enterree |

#### Local Angers / communes

| # | Titre | Requête cible | Intention | `relatedServices` |
|---|---|---|---|---|
| 131 | Nappe phréatique et niveau d'eau en Anjou : un facteur qui complique parfois la détection | nappe phréatique détection fuite Anjou | Locale | detection-fuite-non-destructive |
| 132 | Saint-Barthélemy-d'Anjou : pourquoi les réseaux des années 1970-1980 méritent une vigilance particulière | réseau eau ancien Saint-Barthélemy-d'Anjou fuite | Locale | recherche-fuite-canalisation-enterree, detection-fuite-non-destructive |
| 133 | Zone inondable ou fuite d'eau en Anjou : deux problèmes à ne pas confondre | zone inondable ou fuite eau Anjou différence | Locale | detection-fuite-non-destructive, recherche-fuite-canalisation-enterree |

#### Assèchement / dégât des eaux

| # | Titre | Requête cible | Intention | `relatedServices` |
|---|---|---|---|---|
| 134 | Odeur d'humidité qui persiste après un séchage : signe d'un problème mal traité | odeur humidité après séchage dégât des eaux | Info | assechement-degat-des-eaux |
| 135 | Indemnisation d'un dégât des eaux : les délais réels entre déclaration et versement | délai indemnisation dégât des eaux assurance | Info | assechement-degat-des-eaux |

#### Piscine

| # | Titre | Requête cible | Intention | `relatedServices` |
|---|---|---|---|---|
| 136 | Fuite au niveau du skimmer : un point faible fréquent des piscines | fuite skimmer piscine | Info | recherche-fuite-piscine |
| 137 | Fuite sur une piscine hors-sol : les particularités à connaître | fuite piscine hors sol | Info | recherche-fuite-piscine |
| 138 | Fuite sur un liner : comment savoir si une réparation ponctuelle suffit | fuite liner piscine réparation | Info | recherche-fuite-piscine |
| 139 | Piscine enterrée en béton : où se situent le plus souvent les fuites | fuite piscine béton enterrée | Info | recherche-fuite-piscine |
| 140 | Pompe à chaleur ou circuit de filtration piscine : une fuite peut aussi faire baisser le niveau | fuite circuit filtration piscine | Info | recherche-fuite-piscine |
| 141 | Différence entre une fuite et une bonde de fond mal réglée | bonde de fond piscine fuite ou réglage | Info | recherche-fuite-piscine |

#### Fuite encastrée / enterrée

| # | Titre | Requête cible | Intention | `relatedServices` |
|---|---|---|---|---|
| 142 | Fuite derrière une baignoire ou un receveur de douche encastré : accès difficile, méthode adaptée | fuite derrière baignoire douche encastrée | Info | recherche-fuite-encastree |
| 143 | Fuite sur le réseau d'arrosage enterré : comment la distinguer d'une fuite sur l'alimentation principale | fuite réseau arrosage enterré | Info | recherche-fuite-canalisation-enterree |
| 144 | Fuite sur le raccordement d'un récupérateur d'eau de pluie enterré : un cas à part | fuite récupérateur eau de pluie enterré | Info | recherche-fuite-canalisation-enterree |

#### Comparatif / pilier

| # | Titre | Requête cible | Intention | `relatedServices` |
|---|---|---|---|---|
| 145 | Recherche de fuite dans un immeuble entier : comment s'organise l'intervention | recherche de fuite immeuble organisation | Info | detection-fuite-non-destructive, assechement-degat-des-eaux |
| 146 | Rapport de recherche de fuite refusé par l'assurance : les erreurs à éviter en amont | rapport recherche de fuite refusé assurance erreurs | Info | detection-fuite-non-destructive, assechement-degat-des-eaux |
| 147 | Une seule visite suffit-elle pour localiser une fuite d'eau complexe ? | une seule visite suffit détecter fuite complexe | Info | detection-fuite-non-destructive |
| 148 | Vidanger sa piscine systématiquement en cas de fuite : le réflexe à éviter | vidange piscine systématique fuite | Info | recherche-fuite-piscine |
| 149 | Les méthodes reconnues en recherche de fuite d'eau : ce qu'il faut savoir avant de choisir un prestataire | méthodes reconnues recherche de fuite eau | Info | detection-fuite-non-destructive |

---

## 3. RÈGLES ANTI-CANNIBALISATION ET ZONES À RISQUE

### Règle générale

Avant rédaction, l'Autoblog vérifie systématiquement : (1) le tableau de la section 1 (articles
publiés), (2) les titres déjà publiés du calendrier au moment de la rédaction. Si deux titres
visent une requête trop proche, soit on fusionne les deux en un seul article plus complet, soit on
différencie explicitement l'angle (étape du parcours client, objet précis, saison, échelle
individuelle/collective) et on le mentionne dans l'intro de l'article le plus tardif (« pour la
question X, voir aussi [lien] »).

### Zones à risque identifiées dans ce calendrier

| Titres concernés | Nature du risque | Différenciation retenue |
|---|---|---|
| #9, #11 vs `cout-recherche-fuite-eau-assurance` (P2) et `degat-des-eaux-demarches-assurance` (P3) | Les 4 touchent tous à l'assurance | P2 = facteurs de prix et qui paie la facture. P3 = étapes chronologiques après sinistre. #9 = définitions de clauses de contrat (garantie recherche de fuite vs garantie DDE). #11 = mécanique du contrat (franchise, plafond, exclusions). Quatre angles distincts à respecter strictement à la rédaction. |
| #10 vs `fuite-eau-copropriete-responsabilite` (P5) | Les deux touchent la copropriété | P5 = qui paie entre parties communes et privatives. #10 = les obligations légales du syndic (process, pas argent). À garder distinct. |
| #50 vs P3 et P5 (mention IRSI dans leurs FAQ) | IRSI déjà évoqué dans 2 FAQ publiées | #50 doit être le seul article pilier qui explique IRSI en détail ; P3 et P5 doivent, à terme, être édités pour renvoyer vers #50 plutôt que ré-expliquer (action pour une prochaine passe Autoblog, hors périmètre lecture seule de cet agent). |
| #17 (départ vacances été), #49 (résidence secondaire, absence longue durée), #59 (vacances de fin d'année, gel) | Trois angles « absence du logement » | Différenciés par durée et saison : #17 = courte absence estivale, checklist générale. #49 = absence longue durée, résidence secondaire, toute saison. #59 = absence hivernale, risque de gel spécifique. À rédiger dans cet ordre pour que chacun renvoie aux deux autres sans répéter le contenu. |
| #56 (canalisations extérieures) vs #60 (compteur extérieur) | Même thème gel hiver, objet différent | #56 = tuyauterie extérieure (purge, isolation). #60 = compteur uniquement (protection spécifique, coffret). Articles compagnons à publier proches dans le temps, avec maillage croisé plutôt que fusion. |
| #18 (rentrée, contrôle compteur) vs #101 (après vacances de printemps, contrôle réseau) | Paire saisonnière volontaire, même structure | Différenciés par la saison (rentrée de septembre vs sortie de vacances de printemps) : format similaire assumé, contenu et exemples doivent rester spécifiques à la saison concernée. |
| #100 (checklist arrosage avant l'été, préventif) vs #130 (fuite arrosage pendant l'été, diagnostic) vs #143 (arrosage enterré vs alimentation principale, distinction technique) | Trio sur l'arrosage de jardin | #100 = avant la saison, action préventive. #130 = pendant la saison, symptôme et diagnostic. #143 = distinction technique fine (quel réseau est concerné). Ordre de publication respecté (#100 avant #130 dans le calendrier T3/T4) pour que #130 puisse renvoyer vers #100. |
| #72 (qui appeler la nuit à Angers) vs #110 (délai/tarif dimanche et jours fériés à Angers) | Même thème urgence + horaires atypiques + local | #72 = à qui s'adresser et dans quel ordre (annuaire de décision). #110 = à quoi s'attendre en délai et en tarif (attentes, pas de chiffre inventé, formulation qualitative). Si la rédaction fait apparaître un recoupement trop fort au moment d'écrire, fusionner les deux en un seul article plutôt que publier les deux. |
| #10 (obligations syndic), #128 (détection sans compteur individuel en immeuble), #145 (organisation d'une intervention en immeuble entier) | Trio « immeuble collectif » | #10 = angle juridique (obligations du syndic). #128 = angle technique (contrainte de comptage). #145 = angle logistique (organisation du jour J). Si la rédaction des trois fait ressortir trop de contenu commun, fusionner #128 et #145 en un seul article technique + logistique. |
| #12 (devis, questions à poser avant de signer) vs #34 (devis gratuit, premier appel à Angers) | Même sujet devis, étapes différentes du parcours | #34 = ce qui se passe lors du tout premier appel, avant tout devis chiffré. #12 = questions à poser une fois un devis déjà reçu. Ordre du parcours client à respecter strictement dans la rédaction (#34 = découverte, #12 = décision). |
| #6 (compteur qui tourne la nuit, protocole dédié) vs `fuite-invisible-signes` (P1) et `facture-eau-anormalement-elevee-causes` (P10) | Le test du compteur est déjà mentionné comme un signe parmi d'autres dans P1 et P10 | #6 doit être un guide pratique dédié, pas de la liste : uniquement le protocole du test (quand le faire, combien de temps, comment lire le résultat), sans reprendre la liste de signes de P1 ni les causes de facture de P10. |
| #115 (gazon vert en pleine sécheresse) vs `fuite-canalisation-enterree-detection` (P4, bloc « Signes ») | P4 mentionne déjà un sol détrempé comme signe général | #115 doit se concentrer strictement sur le contraste saisonnier (zone verte en pleine sécheresse estivale), un signal plus spécifique et plus fort que la liste générale de P4, pas une redite. |
| #54 (condensation ou fuite, guide général) vs FAQ de `fuite-dans-un-mur-signes-detection` (P9) | P9 a déjà une question FAQ sur ce sujet, limitée au mur | #54 doit élargir le sujet à toutes les pièces et surfaces (fenêtres, cave, salle de bain), pas seulement le mur, pour ne pas dupliquer la FAQ de P9. |
| #47 (eau qui stagne sous électroménager) vs #44, #45 (lave-linge, lave-vaisselle qui fuient) | Sujet appareils électroménagers | #47 = point de départ générique (on trouve de l'eau, par où commencer). #44 et #45 = fiches dédiées par appareil. #47 doit renvoyer vers #44/#45 plutôt que redévelopper leur contenu. |
| #77 (« questions les plus posées », format pilier compilateur) | Risque structurel : tout article de compilation FAQ recoupe par nature les FAQ déjà publiées sur chaque article | #77 doit être conçu comme une page hub qui reformule brièvement chaque question puis renvoie vers l'article dédié pour la réponse complète, jamais comme une redite intégrale. À traiter comme du maillage, pas comme du contenu concurrent. |

### Règle de vigilance continue

À chaque nouvelle série d'articles, l'Autoblog doit relire ce tableau et l'enrichir : tout titre
futur qui recoupe un thème déjà listé ici (ou publié) doit être explicitement différencié avant
rédaction, avec la même logique (étape du parcours, objet précis, saison, échelle individuelle ou
collective).

---

## 4. MIX THÉMATIQUE (VÉRIFICATION DE L'ÉQUILIBRE)

Répartition des 149 titres planifiés par grande famille, tous trimestres confondus :

| Famille | Nombre de titres | Part |
|---|---|---|
| Symptômes / diagnostic | 36 | 24 % |
| Assurance / juridique | 16 | 11 % |
| Méthodes techniques | 13 | 9 % |
| Saisonnier | 19 | 13 % |
| Local Angers / communes | 13 | 9 % |
| Assèchement / dégât des eaux | 9 | 6 % |
| Piscine | 12 (5 hors saisonnier + 7 dans les clusters piscine/mythe) | 8 % |
| Fuite encastrée | 6 | 4 % |
| Canalisation enterrée | 6 | 4 % |
| Urgence / pratique | 7 | 5 % |
| Comparatif / devis / pilier | 15 | 10 % |
| Mythes | 4 | 3 % |

Chaque trimestre mélange systématiquement symptômes, assurance/juridique, méthodes, saisonnier et
local (voir sous-titres dans les tableaux de la section 2) : aucun trimestre n'est mono-thématique.
Les sujets saisonniers sont calés au bon trimestre (gel et absence hivernale en T2, sortie d'hiver
et remise en route au printemps en T3, piscine et jardin en T4, fin de saison et rentrée en T1).

---

## 5. RÉSUMÉ

- **Fichier livré** : `docs/CALENDRIER-EDITORIAL.md` (ce fichier). Aucun autre fichier modifié.
- **Base anti-duplication** : 11 articles déjà publiés recensés en section 1.
- **Nombre de titres planifiés par trimestre** :
  - T1 (août à octobre 2026) : **37 titres**
  - T2 (novembre 2026 à janvier 2027) : **40 titres**
  - T3 (février à avril 2027) : **37 titres**
  - T4 (mai à juillet 2027) : **35 titres**
  - **Total : 149 titres planifiés** (+ 11 déjà publiés = 160 sur les 12 mois, cadence 3/semaine
    tenue).
- **16 zones de risque de cannibalisation** signalées explicitement en section 3, avec la
  différenciation d'angle à respecter pour chacune (ou la fusion recommandée si le recoupement
  s'avère trop fort à la rédaction).

Rémy, le calendrier est prêt à être remis à l'Autoblog trimestre par trimestre. Aucune écriture
hors `docs/CALENDRIER-EDITORIAL.md`.
