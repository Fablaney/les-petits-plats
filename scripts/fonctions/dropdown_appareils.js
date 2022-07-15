// Modern

// datas
import {recipies} from "/data/recettes.js"

// creation des articles
import {recipeCardsFactorie} from "/scripts/fonctions/recipecardsfactorie.js"


// Boutons dropdown
export function dropdownAppareils()
{
    // je selectionne les dropdown qui afficherons les elements filtrables
    let dropAppareils   = document.querySelector("#appareils")

    function sortAppareils()
    {
        // j'initialise un tableau vide qui contiendra les appareils
        let tabAppareils = []

        // je récupere le champ de recherche ingredient
        let inputAppareils = document.querySelector("#input-appareils")

        inputAppareils.addEventListener('input', function()
        {
            // je récupere sa valeur après avoir tapé 1 lettre et je réduit tout en miniscule
            let searchAppareils = inputAppareils.value.toLowerCase()

            // je supprime les ingrédients affichés avant de reboucler dessus et refaire un affrichage filtré 
            document.querySelectorAll("#appareils div").forEach( (elt)=>{ elt.remove() } )
            
            // je supprime les articles affichés avant de reboucler dessus et refaire un affrichage filtré 
            document.querySelectorAll(".article-recette").forEach( (elt)=>{ elt.remove() } )
            console.clear()

            // je filtre sur recipies
            let recettesFiltered = recipies.filter(item =>
            {   
                // si dans ingredient je trouve ce qui à été tapé je retourne item
                if( item.appliance.toLowerCase().includes(searchAppareils) )
                {
                    // console.log(item)

                    return item
                }
            })
            // console.log(recettesFiltered)

            // je parcours les recettes filtrées par appareil
            recettesFiltered.forEach(recette => {
                recipeCardsFactorie(recette)
            })
        })

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
}