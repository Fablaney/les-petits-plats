// modern

// datas
import {recipies} from "/data/recettes.js"

export function dropdownFilters()
{
    // je selectionne les dropdown
    let dropIngredients = document.querySelector("#ingredients")
    let dropAppareils = document.querySelector("#appareils")
    let dropUstensiles =  document.querySelector("#ustensiles")

    // console.log(recipies)
    
    // INGREDIENTS
    // j'initialise un tableau vide qui contiendra les ingrédients
    let tabIngredients = []
    // je boucle sur chaque recette
    recipies.forEach(recette => {

        // console.log(recette.ingredients)
        // Je boucle sur les tableaux d'ingrédients pour les concatener 
        recette.ingredients.forEach((ingredient) => {

            tabIngredients = tabIngredients.concat(ingredient.ingredient)
            // console.log(tabIngredients)
        })
        
        // je supprime les doublons du tableau qui contient tous les ingrédients mais en double ou plus
        tabIngredients = [...new Set(tabIngredients)]

    })
    // console.log("ingredients : " + tabIngredients)
    // je sort un tableau qui contient tous les ingrédients présentas dans toutes els recettes sans doublon
    console.log(tabIngredients)

    // je boucle sur chaque ingrédient
    tabIngredients.forEach(ingre => {

       const ingredientDOM = `<div class="col-4">${ ingre }</div>`

        dropIngredients.insertAdjacentHTML('beforeEnd', ingredientDOM)
    })


    // APPAREILS
    // j'initialise un tableau vide qui contiendra les appareil
    let tabAppareils = []
    // je boucle sur chaque recette
    recipies.forEach(recette => {

        // je concatene les appareils de toutes les recettes
        tabAppareils = tabAppareils.concat(recette.appliance)

        // je supprime les doublons
        tabAppareils = [...new Set(tabAppareils)]
        
        // console.log("appareils : "+ appareils)
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

        // console.log("ustensiles : "+ ustensiles)
    })
    // console.log("ustensiles : "+ ustensiles)
    
    // je boucle sur chaque ustensile
    tabUstensiles.forEach(ustensile => {

        const ustensileDOM = `<div class="col-4">${ ustensile }</div>`

        dropUstensiles.insertAdjacentHTML('beforeEnd', ustensileDOM)
    })
}