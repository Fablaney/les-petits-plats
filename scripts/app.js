import {recipies} from "/data/recettes.js"
// import {getRecettes} from "/scripts/fonctions/all-recettes.js"
import {recipeCardsFactorie} from "/scripts/fonctions/recipecardsfactorie.js";

// affichage de. toutes les recettes
// console.log("recettes pas triées")
let recettesAll = recipies
// console.log(recettesAll)

// Boucle sur les données
async function displayRecettes(recettesAll)
{
    recettesAll.forEach((recette) => {
        recipeCardsFactorie(recette); // Affichage de toutes les recettes au chargement de la page et lors des réinitialisations
    });
}

async function init()
{
    displayRecettes(recettesAll)
}
init();