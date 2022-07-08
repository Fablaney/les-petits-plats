// old

// datas
import {recipies} from "/data/recettes.js"
// creation des articles
import {recipeCardsFactorie} from "/scripts/fonctions/recipecardsfactorie.js";
// bare de recherche
import {searchInput} from "/scripts/fonctions/searchbar.js";


// affichage de toutes les recettes

let recettesAll = recipies
let recette = []

// Boucle sur les données
async function init()
{
    for (let i = 0; i < recipies.length; i++)
    {
        // console.log(recipies[i])
        recipeCardsFactorie(recipies[i]); // Affichage de toutes les recettes au chargement de la page et lors des réinitialisations
    }

}
init();