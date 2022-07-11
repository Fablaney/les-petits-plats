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

    // je boucle sur chaque ingré
    tabIngredients.forEach(ingre => {

       const listeIngredients = `<div class="col-4">${ ingre }</div>`

        dropIngredients.insertAdjacentHTML('beforeEnd', listeIngredients)
    })

    
    


    // j'initialise un tableau vide qui contiendra les appareil
    let appareils = []
    // je boucle sur chaque recette
    recipies.forEach(recette => {

        // je concatene les appareils de toutes les recettes
        appareils = appareils.concat(recette.appliance)

        // je supprime les doublons
        appareils = [...new Set(appareils)]
        
        // console.log("appareils : "+ appareils)
    })
    // console.log("appareils : "+ appareils)
    const listeAppareils = `<div class="col-4">${ appareils }</div>`

    dropAppareils.insertAdjacentHTML('beforeEnd', listeAppareils)

  
    // j'initialise un tableau vide qui contiendra les ustensiles
    let ustensiles = []
    // je boucle sur chaque recette
    recipies.forEach(recette => {

        // je concatene les ustensiles de toutes les recettes
        ustensiles = ustensiles.concat(recette.ustensils)

        // je supprime les doublons
        ustensiles = [...new Set(ustensiles)]

        // console.log("ustensiles : "+ ustensiles)
    })
    // console.log("ustensiles : "+ ustensiles)
    const listeUstensiles = `<div class="col-4">${ ustensiles }</div>`

    dropUstensiles.insertAdjacentHTML('beforeEnd', listeUstensiles)
}