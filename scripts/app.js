// old

// datas
import {recipies} from "/data/recettes.js"
// creation des articles
import {recipeCardsFactorie} from "/scripts/fonctions/recipecardsfactorie.js";
// bare de recherche
import {searchInput} from "/scripts/fonctions/searchbar.js";


// Boucle sur les données
async function init()
{
    // boucle sur les recettes
    // for (let i = 0; i < recipies.length; i++)
    for (let recipie in recipies)
    {
        // Affichage de toutes les recettes au chargement de la page
        // recipeCardsFactorie(recipies[i]);
        recipeCardsFactorie(recipies[recipie]);
    }
}
init()