// Modern

// datas
// import {recipies} from "/data/recettes.js"

// creation des articles
// import {recipeCardsFactorie} from "/scripts/fonctions/recipecardsfactorie.js";

// bare de recherche
// import {searchInput} from "/scripts/fonctions/searchbar.js";

// dropdown ingredients
// import {recettesFilteredByIngredient, dropdownIngredients } from "/scripts/fonctions/dropdown_ingredients.js";
// import {recettesFilteredByIngredients } from "/scripts/fonctions/dropdown_ingredients.js";

// dropdown buttons
// import {dropdownAppareils} from "/scripts/fonctions/dropdown_appareils.js";

// dropdown buttons
// import {dropdownUstensilles} from "/scripts/fonctions/dropdown_ustensiles.js";

// j'importe les variables des tableaux triés
// import {recettesFilteredByText} from "/scripts/fonctions/searchbar.js";

// import {recettesFilteredByAppareil} from "/scripts/fonctions/dropdown_appareils.js";
// import {recettesFilteredByUstensile} from "/scripts/fonctions/dropdown_ustensiles.js";



// Boucle sur les données
async function init()
{
    // Affichage par défaut de toutes les recettes au chargement de la page
    recipies.forEach((recette) => {
        recipeCardsFactorie(recette)
    })

    // tri par mot clé
    searchInput()

    // tri par ingredients
    dropdownIngredients()

    // tri par appareils
    dropdownAppareils()

    // tri par ustensiles
    dropdownUstensilles()

    stopSearch()
}
init()


function stopSearch()
{
    let stopSearchByText = document.querySelector("#erase-text")

    stopSearchByText.addEventListener('click', function()
    {
        document.querySelector("#searchinput").value = ""
        document.querySelector("#display-tag-text").remove()
        document.querySelector("#tag-texte").classList.add("d-none")
        // Affichage par défaut de toutes les recettes
        recipies.forEach((recette) => {
            recipeCardsFactorie(recette)
        })
    })

    let stopSearchByIngredient = document.querySelector("#erase-ingredient")

    stopSearchByIngredient.addEventListener('click', function()
    {
        document.querySelector("#input-ingredient").value = ""
        document.querySelector("#display-tag-ingredient").remove()
        document.querySelector("#tag-ingredient").classList.add("d-none")
        // Affichage par défaut de toutes les recettes
        recipies.forEach((recette) => {
            recipeCardsFactorie(recette)
        })
    })
}