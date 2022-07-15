// Modern

// datas
import {recipies} from "/data/recettes.js"

// creation des articles
import {recipeCardsFactorie} from "/scripts/fonctions/recipecardsfactorie.js"

// Boutons dropdown
export function dropdownIngredients()
{
    // je récupere le champ de recherche ingredient
    let inputIngredient = document.querySelector("#input-ingredient")

    // je selectionne les dropdown qui afficherons les elements filtrables
    let dropIngredients = document.querySelector("#ingredients")

    function sortIngredients()
    {
        // par défaut recettesFilteredByIngredient = recipies
        let recettesFilteredByIngredient = recipies

        // En cherchant un ingredient j'afficher les recettes qui contiennent cet ingrédient
        inputIngredient.addEventListener('input', function()
        {
            // je récupere la valeur de l'input et je pass en minuscule
            let searchIngredient = inputIngredient.value.toLowerCase()

            // je supprime les articles affichés avant de reboucler dessus et refaire un affrichage filtré 
            document.querySelectorAll(".article-recette").forEach( (elt)=>{ elt.remove() } )

            console.clear()

            // je filtre sur recipies
            recettesFilteredByIngredient = recipies.filter(recette =>
            {   
                // si dans ingredient je trouve ce qui à été cherché je retourne "recette"
                if( recette.ingredients.find(element => {return element.ingredient.toLowerCase().includes(searchIngredient)}) != undefined )
                {
                    return recette
                }
            })

            console.log(recettesFilteredByIngredient)

            // je parcours et re-affiche les recettes filtrées par ingrédient
            recettesFilteredByIngredient.forEach(recette => {
                recipeCardsFactorie(recette)
            })
        })

        function afficheIngredients()
        {
            // j'initialise un tableau vide qui contiendra la liste des ingrédients
            let tabIngredients = recipies

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
            })

            // je supprime les doublons
            tabIngredients = [...new Set(tabIngredients)]

            // je classe par ordre alphabétique
            tabIngredients = tabIngredients.sort()

            // console.log(tabIngredients)

            // à l'input dans le dropdown
            inputIngredient.addEventListener('input', function()
            {
                console.log(tabIngredients)
                //  let tabIngredientsSorted
                // je récupere la valeur de l'input et je pass en minuscule
                let searchIngredient = inputIngredient.value.toLowerCase()

                // je supprime les ingrédients affichés avant de reboucler dessus et refaire un affrichage filtré 
                document.querySelectorAll("#ingredients div").forEach( (elt)=>{ elt.remove() } )

                // console.clear()
                
                // je filtre sur recipies
                let ingredientsFiltered = tabIngredients.filter(item =>
                {   
                    console.log(item)
                    // si dans name description ou ingredient je trouve ce qui à été tapé je retourne item
                    // if( item.ingrédient.find( element => { return element.toLowerCase().includes(searchIngredient) } ) != undefined
                    // )
                    // {
                    //     return item
                    // }
                })

                console.log(ingredientsFiltered)

            })

            // je boucle sur chaque ingrédient
            tabIngredients.forEach(ingre => {

            const ingredientsDOM = `<div class="col-4">${ ingre }</div>`

                dropIngredients.insertAdjacentHTML('beforeEnd', ingredientsDOM)
            })
        }
        afficheIngredients()
    }
    sortIngredients()
}