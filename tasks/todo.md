# TODO sos-fuite-angers.fr : mise à jour complète (kickoff Rémy 18/11/2026)
Branche `maj-complete-18-11`, jamais main. Règles : ../tasks/regle-mise-a-jour-site.md, ../tasks/regle-formulaire.md.

## Notes AVANT (18/11)
- Site (grille §8) : 1/10 : 1 ✅ 2 ❌ 3 ❌ 4 ❌ 5 ❌ 6 ❌ 7 ❌ 8 ❌ 9 ❌ 10 ❌
- Formulaire (grille §7) : 2/10 : 1 ✅ 2 ❌ 3 ❌ 4 ❌ 5 ✅ 6 ❌ 7 ❌ 8 ❌ 9 ❌ 10 ❌
- Vitesse mobile production : 97 / 97 / 97 (médiane 97, LCP 2,0 s). Plancher aperçu : 94.
- Search Console 28 j : 14 clics, 755 vues, position 21,4 ; 90 j : 25 clics, 2 751 vues.
- Requête d'argent « recherche de fuite angers » : Bing ne la mesure pas ; Search Console 125 vues en 90 j à la 55e place.

## Plan
- [ ] Bloc 1 fixe (photo plein cadre, titre court, 2 lignes, formulaire dessous, centré) + formulaire court 3 étapes + garde APERCU (POST bloqué, GET {"envoi":false}) → lien
- [ ] Bloc 3 scrollytelling (maison en coupe, 5 étapes, traits #FCD680, compteur) après les prestations → lien
- [ ] Nettoyage config (personne fictive, chiffres, certifications, 25 km, faux commentaire téléphone, galerie)
- [ ] Un seul libellé de bouton ; bouton d'appel flottant retiré ; « Appeler » seul
- [ ] Logo dessiné + favicon du métier ; pied de page en volets, aligné 1440
- [ ] Carte 40 km tout en vert (bloc 7-8) ; formulaire de fin ; FAQ 5-7 fermée
- [ ] /tarifs sourcée ; page pilier urgence (H2 = requêtes) ; 8 pages zones (titre, carte, raccourcies)
- [ ] Titles 30-60 / descriptions 120-160 servis partout ; script de publication qui refuse un brouillon hors limites
- [ ] Maillage : article → prestation + /tarifs ; aucune orpheline
- [ ] Page contact = formulaire d'abord
- [ ] Contrôles 2 passes, relecture critique (1 sous-agent), compte rendu, GO
- [ ] Après GO : travaux, merge, curl 200, check-fin-de-site CODE 0, Rank OS, tâches cochées, indexation (accueil + /tarifs)

## Recherches à protéger (Search Console 90 j, 5 vues ou 1 clic) : page | requête | vues | clics | position
| / | recherche de fuite angers | 125 | 0 | 55.4 |
| /services/recherche-fuite-piscine | recherche de fuite angers | 121 | 0 | 55.8 |
| /zones/beaucouze | recherche de fuite cholet | 121 | 0 | 78.3 |
| /conseils | recherche de fuite angers | 114 | 0 | 56.7 |
| /services/assechement-degat-des-eaux | recherche de fuite angers | 106 | 0 | 75.0 |
| /services/urgence-fuite-eau | recherche de fuite angers | 100 | 0 | 83.3 |
| /services/detection-fuite-non-destructive | recherche de fuite angers | 98 | 0 | 85.8 |
| /services/recherche-fuite-encastree | recherche de fuite angers | 97 | 0 | 81.8 |
| /zones/beaucouze | recherche de fuite angers | 96 | 0 | 85.5 |
| /zones/verrieres-en-anjou | recherche de fuite angers | 90 | 0 | 88.5 |
| /zones/saint-barthelemy-danjou | recherche de fuite cholet | 87 | 0 | 82.4 |
| / | recherche de fuite saumur | 86 | 0 | 78.4 |
| /services/recherche-fuite-canalisation-enterree | recherche de fuite angers | 80 | 0 | 80.3 |
| /services/recherche-fuite-encastree | recherche de fuite saumur | 70 | 0 | 86.1 |
| /zones/saint-barthelemy-danjou | recherche de fuite angers | 68 | 0 | 90.4 |
| /zones/trelaze | recherche de fuite cholet | 62 | 0 | 78.1 |
| /zones | recherche de fuite angers | 55 | 0 | 65.8 |
| /services/detection-fuite-non-destructive | recherche de fuite saumur | 53 | 0 | 86.2 |
| /zones | recherche de fuite saumur | 50 | 0 | 75.9 |
| /zones/verrieres-en-anjou | recherche de fuite saumur | 49 | 0 | 87.8 |
| /zones/avrille | recherche de fuite saumur | 47 | 0 | 83.4 |
| /services/urgence-fuite-eau | recherche de fuite saumur | 42 | 0 | 91.2 |
| /zones | recherche de fuite cholet | 41 | 0 | 83.0 |
| /zones/beaucouze | dépannage plomberie à beaucouzé | 40 | 0 | 80.1 |
| / | recherche de fuite cholet | 28 | 0 | 79.7 |
| /conseils/lave-vaisselle-qui-fuit-machine-ou-canalisation | fuite lave vaisselle | 26 | 0 | 74.3 |
| /zones | recherche fuite | 25 | 0 | 26.8 |
| /zones/bouchemaine | recherche de fuite angers | 24 | 0 | 87.3 |
| /conseils/vanne-arret-eau-introuvable-bloquee-urgence | vanne bloquée | 23 | 0 | 11.9 |
| /conseils/fuite-eau-salle-de-bain-causes | détection fuite salle de bain | 22 | 0 | 79.8 |
| /conseils/camera-thermique-detection-fuite-fonctionnement | camera thermique fuite d eau | 21 | 0 | 80.3 |
| /conseils/fuite-eau-salle-de-bain-causes | fuite salle de bain humidité | 20 | 0 | 74.7 |
| /conseils/vanne-arret-eau-introuvable-bloquee-urgence | vanne bloqué | 20 | 0 | 45 |
| / | détection de fuite angers | 19 | 0 | 30.4 |
| /zones | recherche de fuite | 19 | 0 | 27.5 |
| /zones/avrille | recherche de fuite angers | 19 | 0 | 88.2 |
| /zones/trelaze | recherche de fuite angers | 19 | 0 | 88.8 |
| /conseils | recherche de fuite saumur | 17 | 0 | 72.5 |
| /conseils | recherche de fuite cholet | 15 | 0 | 73.9 |
| /conseils/affaissement-terrain-jardin-quand-suspecter-fuite | affaissement de terrain dans jardin | 14 | 0 | 6.4 |
| /zones/bouchemaine | recherche de fuite saumur | 14 | 0 | 88.4 |
| /conseils/camera-thermique-detection-fuite-fonctionnement | recherche de fuite d eau par camera | 13 | 0 | 81.1 |
| /conseils/radiateur-qui-fuit-canalisation-chauffage | fuite tuyau chauffage | 13 | 0 | 18.3 |
| /zones/trelaze | recherche de fuite lilas | 12 | 0 | 95.2 |
| /conseils/fuite-sous-carrelage-salle-de-bain-localiser | fuite circuit de chauffage sous carrelage | 11 | 0 | 74.7 |
| /services/recherche-fuite-encastree | recherche de fuite cholet | 11 | 0 | 89.5 |
| /zones/avrille | dépannage plomberie à avrillé | 11 | 0 | 90.7 |
| /zones/trelaze | intervention fuite plessé | 11 | 0 | 49.5 |
| /conseils/camera-thermique-detection-fuite-fonctionnement | recherche fuite caméra thermique | 10 | 0 | 83.6 |
| /conseils/devis-recherche-fuite-questions-avant-signer | devis recherche de fuite | 8 | 0 | 69.1 |
| /conseils/fuite-sous-carrelage-salle-de-bain-localiser | fuite d'eau sous carrelage sol | 8 | 0 | 91.1 |
| /conseils/fuite-avant-apres-compteur | détection fuite avant compteur | 7 | 0 | 31.4 |
| /conseils | détection de fuite maine et loire | 6 | 0 | 48.7 |
| /conseils/camera-thermique-detection-fuite-fonctionnement | détection fuite caméra thermique | 6 | 0 | 81.2 |
| /conseils/devis-recherche-fuite-questions-avant-signer | exemple devis recherche de fuite d eau | 6 | 0 | 80.5 |
| /conseils/fuite-sous-carrelage-salle-de-bain-localiser | comment détecter une fuite d eau sous carrelage | 6 | 0 | 91.3 |
| /conseils/radiateur-qui-fuit-canalisation-chauffage | fuite canalisation chauffage | 6 | 0 | 18.5 |
| /conseils/camera-thermique-detection-fuite-fonctionnement | caméra thermique fuite | 5 | 0 | 75.4 |
| /conseils/fuite-sous-carrelage-salle-de-bain-localiser | comment detecter une fuite d eau sous un carrelage | 5 | 0 | 90.4 |
| /conseils/radiateur-qui-fuit-canalisation-chauffage | fuite chauffage | 5 | 0 | 30.2 |
| /services/detection-fuite-non-destructive | détection de réseaux angers | 5 | 0 | 59.2 |
| /zones | recherche de fuite rosny-sous-bois | 5 | 0 | 85.8 |