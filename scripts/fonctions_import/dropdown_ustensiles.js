// Modern

// datas
import {recipies} from "/data/recettes.js"

// creation des articles
import {recipeCardsFactorie} from "/scripts/fonctions/recipecardsfactorie.js"

let recettesFilteredByUstensile

// Boutons dropdown
function dropdownUstensilles()
{
    // je selectionne les dropdown qui afficherons les elements filtrables
    let dropUstensiles  = document.querySelector("#ustensiles")

    // je récupere le champ de recherche ingredient
    let inputUstensiles = document.querySelector("#input-ustensiles")

    function sortUstensiles()
    {
        function recettesFilteredByUstensiles()
        {
            // par défaut recettesFilteredByAppareil = recipies
            recettesFilteredByUstensile = recipies

            // En cherchant un ustensile j'afficher les recettes qui contiennent cet ustensile
            inputUstensiles.addEventListener('input', function()
            {
                // je récupere sa valeur après avoir tapé 1 lettre et je réduit tout en miniscule
                let searchUstensiles = inputUstensiles.value.toLowerCase()

                // je supprime les articles affichés avant de reboucler dessus et refaire un affrichage filtré 
                document.querySelectorAll(".article-recette").forEach( (elt)=>{ elt.remove() } )

                // je filtre sur recipies
                recettesFilteredByUstensile = recipies.filter(item =>
                {   
                    // si dans recette.ustensiles je trouve ce qui à été tapé je retourne item
                    if( item.ustensils.find(ustensils => ustensils.toLowerCase().includes(searchUstensiles)) )
                    {
                        return item
                    }
                })

                // je parcours les recettes filtrées par ustensiles
                recettesFilteredByUstensile.forEach(recette => {
                    recipeCardsFactorie(recette)
                })
            })
        }
        

        function affichageUstensile()
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

            // à l'input dans le dropdown ustensiles
            inputUstensiles.addEventListener('input', function()
            {
                // je récupere la valeur de l'input et je passe en minuscule
                let searchUstensile = inputUstensiles.value.toLowerCase()

                // je supprime les ustensiles affichés avant de reboucler dessus et refaire un affrichage filtré 
                document.querySelectorAll("#ustensiles div").forEach( (elt)=>{ elt.remove() } )

                // je filtre sur tabUstensiles
                let ustensilesFiltered = tabUstensiles.filter(item =>
                {   
                    if ( item.toLowerCase().includes(searchUstensile) )
                    {
                        return item
                    }
                    console.log(item)
                })

                // je boucle sur chaque ustensile et je reaffiche les ustensiles triés par nom
                ustensilesFiltered.forEach(ustensil => {

                const ustensilesDOM = `<div class="col-4">${ ustensil }</div>`
    
                    dropUstensiles.insertAdjacentHTML('beforeEnd', ustensilesDOM)
                })
            })

            // je boucle sur chaque ustensile
            tabUstensiles.forEach(ustensile => {

                const ustensileDOM = `<div class="col-4">${ ustensile }</div>`

                dropUstensiles.insertAdjacentHTML('beforeEnd', ustensileDOM)
            })
        }
        affichageUstensile() 
    }
    sortUstensiles()
}

export {recettesFilteredByUstensile, dropdownUstensilles}