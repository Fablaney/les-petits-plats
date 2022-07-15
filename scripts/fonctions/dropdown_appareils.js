// Modern

// datas
import {recipies} from "/data/recettes.js"

// creation des articles
import {recipeCardsFactorie} from "/scripts/fonctions/recipecardsfactorie.js"

let recettesFilteredByAppareil

// Boutons dropdown
function dropdownAppareils()
{
    // je selectionne les dropdown qui afficherons les elements filtrables
    let dropAppareils   = document.querySelector("#appareils")

    // je récupere le champ de recherche ingredient
    let inputAppareils = document.querySelector("#input-appareils")

    function sortAppareils()
    {
        function recettesFilteredByAppareils()
        {
            // par défaut recettesFilteredByAppareil = recipies
            recettesFilteredByAppareil = recipies

            // En cherchant un appareil j'afficher les recettes qui contiennent cet appareil
            inputAppareils.addEventListener('input', function()
            {
                // je récupere sa valeur après avoir tapé 1 lettre et je réduit tout en miniscule
                let searchAppareils = inputAppareils.value.toLowerCase()

                // je supprime les articles affichés avant de reboucler dessus et refaire un affrichage filtré 
                document.querySelectorAll(".article-recette").forEach( (elt)=>{ elt.remove() } )

                // je filtre sur recipies
                recettesFilteredByAppareil = recipies.filter(item =>
                {   
                    // si dans ingredient je trouve ce qui à été tapé je retourne item
                    if( item.appliance.toLowerCase().includes(searchAppareils) )
                    {
                        return item
                    }
                })

                // je parcours les recettes filtrées par appareil
                recettesFilteredByAppareil.forEach(recette => {
                    recipeCardsFactorie(recette)
                })
            })
        }
       

        function afficheAppareil()
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

            // à l'input dans le dropdown appareils
            inputAppareils.addEventListener('input', function()
            {
                // je récupere la valeur de l'input et je passe en minuscule
                let searchAppareils = inputAppareils.value.toLowerCase()

                // je supprime les appareils affichés avant de reboucler dessus et refaire un affrichage filtré 
                document.querySelectorAll("#appareils div").forEach( (elt)=>{ elt.remove() } )
                
                // je filtre sur tabAppareils
                let AppareilsFiltered = tabAppareils.filter(item =>
                {   
                    if ( item.toLowerCase().includes(searchAppareils) )
                    {
                        return item
                    }     
                })

                // je boucle sur chaque appareil et je reaffiche les appareils triés par nom
                AppareilsFiltered.forEach(ingre => {

                const appareilsDOM = `<div class="col-4">${ ingre }</div>`
    
                    dropAppareils.insertAdjacentHTML('beforeEnd', appareilsDOM)
                })
            })

            // je boucle sur chaque appareil
            tabAppareils.forEach(appareil => {

                const appareilsDOM = `<div class="col-4">${ appareil }</div>`

                dropAppareils.insertAdjacentHTML('beforeEnd', appareilsDOM)
            })
        }
        afficheAppareil()
    }
    sortAppareils()
}

export {recettesFilteredByAppareil, dropdownAppareils}