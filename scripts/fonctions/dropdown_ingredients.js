// Modern

// datas
import {recipies} from "/data/recettes.js"

// creation des articles
import {recipeCardsFactorie} from "/scripts/fonctions/recipecardsfactorie.js"

// Boutons dropdown
export function dropdownIngredients()
{
    // je selectionne les dropdown qui afficherons les elements filtrables
    let dropIngredients = document.querySelector("#ingredients")

    function sortIngredients()
    {
        // je récupere le champ de recherche ingredient
        let inputIngredient = document.querySelector("#input-ingredient")

        let recettesFilteredByIngredient = []

        // j'initialise un tableau vide qui contiendra les ingrédients
        let tabIngredients = recipies

        inputIngredient.addEventListener('input', function()
        {
            // je récupere sa valeur après avoir tapé 1 lettre et je réduit tout en miniscule
            let searchIngredient = inputIngredient.value.toLowerCase()

            // je supprime les ingrédients affichés avant de reboucler dessus et refaire un affrichage filtré 
            document.querySelectorAll("#ingredients div").forEach( (elt)=>{ elt.remove() } )
            
            // je supprime les articles affichés avant de reboucler dessus et refaire un affrichage filtré 
            document.querySelectorAll(".article-recette").forEach( (elt)=>{ elt.remove() } )
            // console.clear()

            // je filtre sur recipies
            recettesFilteredByIngredient = recipies.filter(item =>
            {   
                // si dans ingredient je trouve ce qui à été tapé je retourne item
                if( item.ingredients.find(element => {return element.ingredient.toLowerCase().includes(searchIngredient)}) != undefined )
                {
                    // console.log(item)

                    return item
                }
            })

            // console.log(recettesFilteredByIngredient)
            // console.log(tabIngredients = recettesFilteredByIngredient)

            if (recettesFilteredByIngredient.lenght > 0)
            {
                tabIngredients = recettesFilteredByIngredient
                // console.log("recettes triées par ingrédients")
                // console.log(recettesFilteredByIngredient)
                // console.log(tabIngredients)
                afficheIngredients(tabIngredients)
            }
            else
            {
                afficheIngredients(recettesFilteredByIngredient)
            }

            // je parcours les recettes filtrées par ingrédient
            recettesFilteredByIngredient.forEach(recette => {
                recipeCardsFactorie(recette)
            })
        })

        // console.log(recettesFilteredByIngredient)

        function afficheIngredients(tabIngredients)
        {
            // tabIngredients = recettesFilteredByIngredient
            console.log("tabIngredients")
            console.log(tabIngredients)
            console.log("recettesFilteredByIngredient")
            console.log(recettesFilteredByIngredient)

            // je boucle sur chaque recette
            tabIngredients.forEach(recette => {

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

            const ingredientsDOM = `<div class="col-4">${ ingre }</div>`

                dropIngredients.insertAdjacentHTML('beforeEnd', ingredientsDOM)
            })
        }
        afficheIngredients(tabIngredients)
    }
    sortIngredients()
}