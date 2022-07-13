// Modern

// datas
import {recipies} from "/data/recettes.js"

// bare de recherche

export function dropdownFilters()
{
    // // je selectionne les inputs des dropdown
    // let inputIngredients =  document.querySelector("#input-ingredient")
    // let inputAppareils   =  document.querySelector("#input-appareils")
    // let inputUstensiles  =  document.querySelector("#input-ustensiles")

    // je selectionne les dropdown qui afficherons les elements filtrables
    let dropIngredients = document.querySelector("#ingredients")
    let dropAppareils   = document.querySelector("#appareils")
    let dropUstensiles  = document.querySelector("#ustensiles")

    // console.log("recete filtrée" + recettesFiltered)

    // si on à déja uen recherche préalable
    // if(recettesFiltered.lenght > 0)
    // {
        
    // }
        
    // INGREDIENTS
    function sortIngredients()
    {
        // j'initialise un tableau vide qui contiendra les ingrédients
        let tabIngredients = []

        // je boucle sur chaque recette
        recipies.forEach(recette => {

            // Je re-boucle sur les tableaux d'ingrédients pour les concatener 
            recette.ingredients.forEach((ingredient) => {

                // j'uniformise tout en minuscule
                ingredient = ingredient.ingredient.toLowerCase()
        
                // je remet seulement la 1ere lettre en majuscule
                ingredient = ingredient[0].toUpperCase() + ingredient.slice(1)

                // Je concatene dans le tableau
                tabIngredients = tabIngredients.concat(ingredient)
            })
            // console.log(tabIngredients)
        })

        // je supprime les doublons
        tabIngredients = [...new Set(tabIngredients)]

        // je classe par ordre alphabétique
        tabIngredients = tabIngredients.sort()

        // je boucle sur chaque ingrédient
        tabIngredients.forEach(ingre => {

        const ingredientDOM = `<div class="col-4">${ ingre }</div>`

            dropIngredients.insertAdjacentHTML('beforeEnd', ingredientDOM)
        })
    }
    sortIngredients()

    // APPAREILS
    function sortAppareils()
    {
        // j'initialise un tableau vide qui contiendra les appareils
        let tabAppareils = []

        // je boucle sur chaque recette
        recipies.forEach(recette => {

            let appareil = recette.appliance

            // j'uniformise tout en minuscule
            appareil = appareil.toLowerCase()
            
            // je remet seulement la 1ere lettre en majuscule
            appareil = appareil[0].toUpperCase() + appareil.slice(1)

            // je concatene les appareils de toutes les recettes
            tabAppareils = tabAppareils.concat(appareil)
        })

        // je supprime les doublons
        tabAppareils = [...new Set(tabAppareils)]

        // je classe par ordre alphabétique
        tabAppareils = tabAppareils.sort()

        // je boucle sur chaque appareil
        tabAppareils.forEach(appareil => {

            const appareilDOM = `<div class="col-4">${ appareil }</div>`

            dropAppareils.insertAdjacentHTML('beforeEnd', appareilDOM)
        })
    }
    sortAppareils()

    // USTENSILES
    function sortUstensiles()
    {
        // j'initialise un tableau vide qui contiendra les ustensiles
        let tabUstensiles = []

        // je boucle sur chaque recette
        recipies.forEach(recette => {

            let ustensiles = recette.ustensils.map(name => name.toLowerCase())

            // je capitalise la 1ere lettre 
            ustensiles.forEach( ustensile => {
                            
                let ustensilesCap = ustensile[0].toUpperCase() + ustensile.slice(1) 

                tabUstensiles = tabUstensiles.concat(ustensilesCap)
            })
        })

        // je supprime les doublons
        tabUstensiles = [...new Set(tabUstensiles)]

        // je classe par ordre alphabétique
        tabUstensiles = tabUstensiles.sort()

        // console.log(tabUstensiles)

        // je boucle sur chaque ustensile
        tabUstensiles.forEach(ustensile => {

            const ustensileDOM = `<div class="col-4">${ ustensile }</div>`

            dropUstensiles.insertAdjacentHTML('beforeEnd', ustensileDOM)
        })
    }
    sortUstensiles()
}