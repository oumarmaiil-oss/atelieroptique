# L'Atelier Optique — lumière, lentilles, œil, ondes et photons

**Bêta 1** · sciences physiques, collège · lycée · même ergonomie que [L'Atelier des Forces](https://oumarmaiil-oss.github.io/atelierforces/) et [L'Atelier Cosmique](https://oumarmaiil-oss.github.io/ateliercosmique/)

Laboratoire virtuel interactif d'**optique** : comment la lumière change de direction, comment une lentille, un miroir ou l'œil forment une image, comment on corrige la myopie, l'hypermétropie, la presbytie et l'astigmatisme, et pourquoi la lumière est à la fois une onde et un flux de photons.

👉 **Essayer en ligne : [oumarmaiil-oss.github.io/atelieroptique](https://oumarmaiil-oss.github.io/atelieroptique/)**

## Contenu

| Onglet | Ce qu'on y fait |
|---|---|
| **1 · Lumière et milieux** | **Réfraction et réflexion** entre air, eau, plexiglas, verre et diamant (loi de Snell-Descartes, angle limite, part réfléchie de Fresnel). **Prisme** : lumière blanche décomposée en arc-en-ciel (loi de Cauchy), déviation et déviation minimale. **Fibre optique** : réflexions totales, gaine, fuite si la fibre est trop courbée. **Profondeur apparente** : la pièce au fond de la piscine. **Couleurs du ciel** : ciel bleu, soleil rouge au coucher sur l'océan, harmattan (diffusion de Rayleigh, couleurs calculées). |
| **2 · Lentilles et miroirs** | **Banc d'optique** : lentille convergente ou divergente, objet (lettre F) à distance finie ou à l'infini, écran placé à la main ou automatiquement, trois rayons particuliers ou faisceau, image nette ou floue sur l'écran. **Miroirs** plan, concave (miroir grossissant) et convexe (rétroviseur). **Loupe** ×2,5, ×5, ×10. **Appareil photo** : focale, ouverture, mise au point, profondeur de champ. **Lunette astronomique** de Kepler : grossissement, réglage afocal, la Lune à l'œil nu et dans la lunette. |
| **3 · L'œil** | Œil réduit normal, myope, hypermétrope, presbyte ou astigmate, avec l'âge (amplitude d'accommodation). Six objets regardés, de l'infini à 25 cm. Cristallin automatique ou réglé à la main. Correction par pas de 0,25 δ : verre divergent, convergent ou torique (cylindre et axe). **Vue double** : le trajet des rayons et ce que voit la personne, net ou flou. **Ordonnance** et acuité estimée sans correction, avec ta correction et avec l'ordonnance. |
| **4 · Ondes et photons** | **Fentes de Young** (laser ou lumière blanche, interfrange mesuré à la règle) et **photons envoyés un par un** qui construisent les franges. **Diffraction** par une fente ou un cheveu. **Effet photoélectrique** : six métaux, lampe UV à rouge, intensité ; graphique Ec = hν − W. **Frise historique** : 1 000 ans de débat, d'Ibn al-Haytham à Tonomura. |
| **Défis** | 22 défis qui se valident tout seuls quand on les réussit soi-même, et 10 questions « Je prédis, puis j'observe » reliées aux simulations. |

## L'ergonomie (reprise des ateliers précédents)

- **Panneau de gauche** : **📚 Exemples** (72 situations toutes prêtes, rangées par notion, avec une ligne « ce que ça illustre » ; badge « modifié » dès qu'on change un réglage) et **⚙ Réglages** en étapes numérotées, avec des sélecteurs et des valeurs bornées au pas défini (pas d'aberration).
- **Scène** : encart d'explication en haut à gauche (cliquer le titre pour le réduire), légende, encart « ce que l'on voit » (écran, œil, photo, lunette), **barre de commandes** (recommencer, action principale — suivre la lumière, lecture/pause, mettre ou retirer la correction —, valeurs en direct, plein écran).
- **Bas de l'écran** : explication avec « Pourquoi ? », formules du mode expert, **calculs en direct** (relation de conjugaison, grandissement, vergences), ordonnance, graphiques, frise historique.
- **Niveaux d'affichage** : **1 · Observer** (rayons, image, récit), **2 · Comprendre** (+ foyers, angles, distances, « Pourquoi ? »), **3 · Expert** (+ mesures algébriques, formules, valeurs, graduations).
- **Outils** : mode léger, taille des textes (A− A+), raccourcis clavier (Espace, R, ← →, 1 2 3, E, L, P, C, F ; liste avec la touche ?), **image** de la scène (avec l'encart), **lien de partage** (onglet + exemple + niveau), bouton **« Signaler une erreur »** (WhatsApp, message prérempli), sources et simplifications (bouton ⓘ).
- **Téléphone et tablette** : la scène reste en haut ; Exemples, Réglages et les fiches s'ouvrent dans un volet à onglets.

## Utilisation

Un seul fichier : ouvrez `index.html` dans un navigateur. Aucune bibliothèque ni image extérieure : toutes les images (paysage, tableau, échelle d'acuité, notice, Lune, lettre F) sont dessinées par le programme. L'atelier fonctionne **sans connexion** et peut se partager par WhatsApp ou clé USB.

## Pour les développeurs

- `node tests/verifier.mjs` : charge les 4 onglets et les 72 exemples sur 4 tailles d'écran et signale toute erreur JavaScript, toute requête réseau (fonctionnement hors ligne) et tout débordement horizontal — après `npm i --no-save playwright-core` (Chrome ou Chromium installé).
- Le code est organisé par onglet (`MIL`, `IMG`, `OEIL`, `OND`) au-dessus d'un moteur commun : couleurs de la lumière (CIE 1931), traceur de rayons 2D (réfraction, réflexion totale, Fresnel), flou optique (tache de défocalisation en disque ou en ellipse).

## Simplifications

Approximation de Gauss et lentilles minces. Œil réduit : une lentille à 17 mm de la rétine ; verres correcteurs supposés collés à l'œil. Amplitude d'accommodation : formule moyenne de Hofstetter. L'acuité affichée est une estimation pédagogique, pas une mesure médicale. Sur les animations d'ondes, la longueur d'onde est agrandie ; seules les valeurs affichées sont à l'échelle. Détails et sources dans l'atelier (bouton ⓘ).

## Licence

[MIT](LICENSE) — © 2026 Dr Oumar Sow. Réutilisation et contributions bienvenues.
