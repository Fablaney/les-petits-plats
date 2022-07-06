import {recipies} from "/data/recettes.js"
import {recipeCardsFactorie} from "/scripts/fonctions/recipecardsfactorie.js";

import {searchInput} from "/scripts/fonctions/searchbar.js";

// affichage de toutes les recettes

let recettesAll = recipies

// Boucle sur les données
async function init()
{
    recettesAll.forEach((recette) => {
        recipeCardsFactorie(recette); // Affichage de toutes les recettes au chargement de la page et lors des réinitialisations
    });
}
init();