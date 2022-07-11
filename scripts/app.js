// Modern
// datas
import {recipies} from "/data/recettes.js"
// creation des articles
import {recipeCardsFactorie} from "/scripts/fonctions/recipecardsfactorie.js";
// bare de recherche
import {searchInput} from "/scripts/fonctions/searchbar.js";
// dropdown filtres
import {dropdownFilters} from "/scripts/fonctions/dropdownfiltres.js";


// Boucle sur les données
async function init()
{
    recipies.forEach((recette) => {
        recipeCardsFactorie(recette); // Affichage de toutes les recettes au chargement de la page et lors des réinitialisations
    });
}
init();