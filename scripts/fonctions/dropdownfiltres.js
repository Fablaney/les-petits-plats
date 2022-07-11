// Modern

// datas
import {recipies} from "/data/recettes.js"

// bare de recherche
import {searchInput} from "/scripts/fonctions/searchbar.js";


export function dropdownFilters()
{
    // je selectionne les dropdown
    let dropIngredients = document.querySelector("#ingredients")
    let dropAppareils = document.querySelector("#appareils")
    let dropUstensiles =  document.querySelector("#ustensiles")

    // console.log(recettesFiltered)

    // si on à déja uen recherche préalable
    // if(recettesFiltered.lenght > 0)
    // {
        
    // }


    // INGREDIENTS
    // j'initialise un tableau vide qui contiendra les ingrédients
    let tabIngredients = []
    // je boucle sur chaque recette
    recipies.forEach(recette => {

        // Je re-boucle sur les tableaux d'ingrédients pour les concatener 
        recette.ingredients.forEach((ingredient) => {

            // je concatene les ingrédients de chaque tableau
            tabIngredients = tabIngredients.concat(ingredient.ingredient)
        })
        
        // je supprime les doublons
        tabIngredients = [...new Set(tabIngredients)]
    })
    // console.log("ingredients : " + tabIngredients)

    // je boucle sur chaque ingrédient
    tabIngredients.forEach(ingre => {

       const ingredientDOM = `<div class="col-4">${ ingre }</div>`

        dropIngredients.insertAdjacentHTML('beforeEnd', ingredientDOM)
    })


    // APPAREILS
    // j'initialise un tableau vide qui contiendra les appareils
    let tabAppareils = []
    // je boucle sur chaque recette
    recipies.forEach(recette => {

        // je concatene les appareils de toutes les recettes
        tabAppareils = tabAppareils.concat(recette.appliance)

        // je supprime les doublons
        tabAppareils = [...new Set(tabAppareils)]
    })
    // console.log("appareils : "+ appareils)

    // je boucle sur chaque appareil
    tabAppareils.forEach(appareil => {

        const appareilDOM = `<div class="col-4">${ appareil }</div>`

        dropAppareils.insertAdjacentHTML('beforeEnd', appareilDOM)
    })


    // USTENSILES
    // j'initialise un tableau vide qui contiendra les ustensiles
    let tabUstensiles = []
    // je boucle sur chaque recette
    recipies.forEach(recette => {

        // je concatene les ustensiles de toutes les recettes
        tabUstensiles = tabUstensiles.concat(recette.ustensils)

        // je supprime les doublons
        tabUstensiles = [...new Set(tabUstensiles)]

    })
    // console.log("ustensiles : "+ ustensiles)
    
    // je boucle sur chaque ustensile
    tabUstensiles.forEach(ustensile => {

        const ustensileDOM = `<div class="col-4">${ ustensile }</div>`

        dropUstensiles.insertAdjacentHTML('beforeEnd', ustensileDOM)
    })
}