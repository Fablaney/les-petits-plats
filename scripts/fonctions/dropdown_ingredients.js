// Modern

// datas
import {recipies} from "/data/recettes.js"

// creation des articles
import {recipeCardsFactorie} from "/scripts/fonctions/recipecardsfactorie.js"

let recettesFilteredByIngredient

// Boutons dropdown
function dropdownIngredients()
{
    // je selectionne les dropdown qui afficherons les elements filtrables
    let dropIngredients = document.querySelector("#ingredients")

    // je récupere le champ de recherche ingredient
    let inputIngredient = document.querySelector("#input-ingredient")

    function sortIngredients()
    {
        // par défaut recettesFilteredByIngredient = recipies
        recettesFilteredByIngredient = recipies

        // dans le champ du dropdown
        // En cherchant un ingredient j'afficher les recettes qui contiennent cet ingrédient
        inputIngredient.addEventListener('input', function()
        {
            // je prends le champ de recherche et si il est vide je n'affiche pas la div de filtre texte actif
            if (document.querySelector("#input-ingredient").value == "")
            {
                document.querySelector("#tag-ingredient").classList.add("d-none")
            }
            // sinon j'affiche la div
            else
            {
                document.querySelector("#tag-ingredient").classList.remove("d-none")
            }

            // // je récupere la valeur de l'input et je pass en minuscule
            let searchIngredient = inputIngredient.value.toLowerCase()

            // Je crée le texte recherché
            const filterIngredientsDOM = `<div id="display-tag-ingredient">${searchIngredient}</div>`

            // je supprime les ingrédients affichés avant de reboucler dessus et refaire un affrichage filtré 
            document.querySelectorAll("#tag-ingredient div").forEach( (elt)=>{ elt.remove() } )

            // J'insere le texte dans sa div dans la zone HTML qui affiche les filtres actifs
            document.querySelector("#tag-ingredient").insertAdjacentHTML('afterbegin', filterIngredientsDOM)

            // // je supprime les articles affichés avant de reboucler dessus et refaire un affrichage filtré 
            document.querySelectorAll(".article-recette").forEach( (elt)=>{ elt.remove() } )

            // // je filtre sur recipies
            recettesFilteredByIngredient = recipies.filter(recette =>
            {   
                // si dans ingredient je trouve ce qui à été cherché je retourne "recette"
                if( recette.ingredients.find(element => {return element.ingredient.toLowerCase().includes(searchIngredient)}) != undefined )
                {
                    return recette
                }
            })

            // je parcours et re-affiche les recettes filtrées par ingrédient
            recettesFilteredByIngredient.forEach(recette => {
                recipeCardsFactorie(recette)
            })
        })
            
        function afficheIngredients()
        {
            // j'initialise un tableau vide qui contiendra la liste des ingrédients
            let tabIngredients = []

            // je boucle sur chaque recette
            recipies.forEach(recette => {

                // Je re-boucle sur les tableaux d'ingrédients pour les concatener 
                recette.ingredients.forEach((ingredient) => {

                    // j'uniformise tout en minuscule
                    ingredient = ingredient.ingredient.toLowerCase()
            
                    // je remet seulement la 1ere lettre en majuscule
                    ingredient = ingredient[0].toUpperCase() + ingredient.slice(1)

                    // Je remplis le tableau et ça supprime les doublons
                    if ( tabIngredients.includes(ingredient) == false )
                    {
                        tabIngredients.push(ingredient)
                    }
                })
            })

            // je supprime les doublons
            // tabIngredients = [...new Set(tabIngredients)]

            // je classe par ordre alphabétique
            tabIngredients = tabIngredients.sort()

            // à l'input dans le dropdown ingrédients
            inputIngredient.addEventListener('input', function()
            {
                // je récupere la valeur de l'input et je passe en minuscule
                let searchIngredient = inputIngredient.value.toLowerCase()

                // je supprime les ingrédients affichés avant de reboucler dessus et refaire un affrichage filtré 
                document.querySelectorAll("#ingredients div").forEach( (elt)=>{ elt.remove() } )

                // je filtre sur tabingredients
                let ingredientsFiltered = tabIngredients.filter(item =>
                {
                    if ( item.toLowerCase().includes(searchIngredient) )
                    {
                        return item
                    }
                })

                // je boucle sur chaque ingrédient
                ingredientsFiltered.forEach(ingre => {

                const ingredientsDOM = `<div class="col-4 item-ingre" data-ingre="${ ingre }" onclick="chooseIngredient(${ ingre })">${ ingre }</div>`
    
                    dropIngredients.insertAdjacentHTML('beforeEnd', ingredientsDOM)
                })
            })

            // je boucle sur chaque ingrédient et je reaffiche les ingrédients triés par nom
            tabIngredients.forEach(ingre => {

            const ingredientsDOM = `<div class="col-4 item-ingre" data-ingre="${ ingre }" onclick="chooseIngredient(${ ingre })">${ ingre }</div>`

                dropIngredients.insertAdjacentHTML('beforeEnd', ingredientsDOM)
            })
        }
        afficheIngredients()



        // au click sur un ingredient
        // je récupere l'ingredient cliqué
        function chooseIngredient(ingre)
        {

            console.log(ingre)
        }

        // let clickIngredient = document.querySelectorAll(".item-ingre")

        // console.log(clickIngredient.dataset.value)


        // // En cherchant un ingredient j'afficher les recettes qui contiennent cet ingrédient
        // clickIngredient.addEventListener('click', function()
        // {
        //     // je récupere la valeur de l'input et je pass en minuscule
        //     let searchIngredient = inputIngredient.value.toLowerCase()

        //     // je supprime les articles affichés avant de reboucler dessus et refaire un affrichage filtré 
        //     document.querySelectorAll(".article-recette").forEach( (elt)=>{ elt.remove() } )

        //     // je filtre sur recipies
        //     recettesFilteredByIngredient = recipies.filter(recette =>
        //     {   
        //         // si dans ingredient je trouve ce qui à été cherché je retourne "recette"
        //         if( recette.ingredients.find(element => {return element.ingredient.toLowerCase().includes(searchIngredient)}) != undefined )
        //         {
        //             return recette
        //         }
        //     })

        //     // je parcours et re-affiche les recettes filtrées par ingrédient
        //     recettesFilteredByIngredient.forEach(recette => {
        //         recipeCardsFactorie(recette)
        //     })
        // })
    }
    sortIngredients()
}

export {recettesFilteredByIngredient, dropdownIngredients}