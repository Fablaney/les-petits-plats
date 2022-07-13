// Modern

// datas
import {recipies} from "/data/recettes.js"

// creation des articles
import {recipeCardsFactorie} from "/scripts/fonctions/recipecardsfactorie.js"

// Boutons dropdown
export function dropdownUstensilles()
{
    // je selectionne les dropdown qui afficherons les elements filtrables
    let dropUstensiles  = document.querySelector("#ustensiles")

    function sortUstensiles()
    {
        // j'initialise un tableau vide qui contiendra les ingrédients
        let tabUstensiles = []

        // je récupere le champ de recherche ingredient
        let inputUstensiles = document.querySelector("#input-ustensiles")

        inputUstensiles.addEventListener('input', function()
        {
            // je récupere sa valeur après avoir tapé 1 lettre et je réduit tout en miniscule
            let searchUstensiles = inputUstensiles.value.toLowerCase()

            // je supprime les ingrédients affichés avant de reboucler dessus et refaire un affrichage filtré 
            document.querySelectorAll("#ustensiles div").forEach( (elt)=>{ elt.remove() } )
            
            // je supprime les articles affichés avant de reboucler dessus et refaire un affrichage filtré 
            document.querySelectorAll(".article-recette").forEach( (elt)=>{ elt.remove() } )
            // console.clear()

            // je filtre sur recipies
            let recettesFiltered = recipies.filter(item =>
            {   
                // si dans recette.ustensiles je trouve ce qui à été tapé je retourne item
                // console.log(item.ustensils)
                if( item.ustensils.map(name => name.toLowerCase().includes(searchUstensiles)) != undefined )
                {
                    console.log(item)

                    return item
                }
            })
            // console.log(recettesFiltered)

            // je parcours les recettes filtrées par ustensiles
            recettesFiltered.forEach(recette => {
                recipeCardsFactorie(recette)
            })
        })

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