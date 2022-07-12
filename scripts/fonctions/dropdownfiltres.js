// Modern

// datas
import {recipies} from "/data/recettes.js"

// bare de recherche
// import {searchInput, recettesFiltered} from "/scripts/fonctions/searchbar.js";


export function dropdownFilters()
{
    // je selectionne les dropdown
    let dropIngredients = document.querySelector("#ingredients")
    let dropAppareils = document.querySelector("#appareils")
    let dropUstensiles =  document.querySelector("#ustensiles")

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
        // console.log("ingredients : " + tabIngredients)

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
        // console.log("appareils : "+ appareils)

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


    function sortUstensiles()
    {
        // USTENSILES
        // j'initialise un tableau vide qui contiendra les ustensiles
        let tabUstensiles = []
        // je boucle sur chaque recette
        recipies.forEach(recette => {

            let ustensiles = recette.ustensils

            // console.log(ustensiles)

            // ustensiles.foreach(ustensile => {
            //     console.log(ustensile)
            // })
            // j'uniformise tout en minuscule
            // ustensile = ustensile.toLowerCase()
                        
            // je remet seulement la 1ere lettre en majuscule
            // ustensile = ustensile[0].toUpperCase() + ustensile.slice(1)

            // je concatene les ustensiles de toutes les recettes
            // tabUstensiles = tabUstensiles.concat(ustensile)

            // je supprime les doublons
            // tabUstensiles = [...new Set(tabUstensiles)]

        })
        // console.log("ustensiles : "+ ustensiles)
        
        // je boucle sur chaque ustensile
        tabUstensiles.forEach(ustensile => {

            const ustensileDOM = `<div class="col-4">${ ustensile }</div>`

            dropUstensiles.insertAdjacentHTML('beforeEnd', ustensileDOM)
        })
    }
    sortUstensiles()
}