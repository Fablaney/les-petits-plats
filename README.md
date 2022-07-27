# Base de code du projet P6 - Parcours Front-end

## Démarrer le projet

Rien à installer ici, il suffit d'ouvrir le fichier `index.html`.

Scénario alternatif A1
A1. Aucune recette correspondante à la recherche
L'enchaînement A1 commence au point 3 du scénario nominal
3. L’interface affiche « Aucune recette ne correspond à votre critère… vous pouvez
chercher « tarte aux pommes », « poisson », etc.

Scénario alternatif A2
A2. L’utilisateur commence sa recherche par un tag
L'enchaînement A2 commence au point 1 du scénario nominal et reprend au point 9
du scénario nominal.
1. L’utilisateur commence la recherche par un tag.
2. Les résultats de recherche sont actualisés, ainsi que les éléments disponibles dans les
champs de recherche avancée (9 du cas principal)
Scénario alternatif A3
A3. L’utilisateur ajoute d’autres tags pour la recherche avancée
L'enchaînement A3 commence au point 9 du scénario nominal. Cet enchaînement peut
se répéter autant que nécessaire
10. L’utilisateur précise sa recherche grâce à l’un des champs : ingrédients, ustensiles,
appareil.
11. Au fur et à mesure du remplissage les mots clés ne correspondant pas à la frappe dans
le champ disparaissent
12. L’utilisateur choisit un mot clé dans le champ
13. Le mot clé apparaît sous forme de tag sous la recherche principale
14. Les résultats de recherche sont actualisés, ainsi que les éléments disponibles dans les
champs de recherche avancée
