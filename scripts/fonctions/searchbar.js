// Modern

// datas
import {recipies} from "/data/recettes.js"

// creation des articles
import {recipeCardsFactorie} from "/scripts/fonctions/recipecardsfactorie.js"

export function searchInput()
{
    // console.table(recipies)

    // je récupere le champ de recherche
    let searchinput = document.querySelector("#searchinput")

    searchinput.addEventListener('input', function()
    {
        // je prends le champ de recherche et si il est vide je n'affiche pas la div de filtre texte actif
        if (document.querySelector("#searchinput").value == "")
        {
            document.querySelector("#filtre-input").classList.add("d-none")
        }
        // sinon j'affiche la div
        else
        {
            document.querySelector("#filtre-input").classList.remove("d-none")
        }

        // // je récupere sa valeur après avoir tapé 1 lettre et je réduit tout en miniscule
        const inputcontent = searchinput.value.toLowerCase()

        // Je crée le texte recherché
        const filterInputDOM = `${inputcontent} &nbsp; <i class="bi bi-x-circle" onclick="stopSearch()"></i>`

        // J'insere le texte dans sa div dans la zone HTML qui affiche les filtres actifs
        document.querySelector("#filtre-input").innerHTML = filterInputDOM

        function stopSearch()
        {
            searchinput.innerHTML = ""
        }

        
        // je supprime les articles affichés avant de reboucler dessus et refaire un affrichage filtré 
        document.querySelectorAll(".article-recette").forEach( (elt)=>{ elt.remove() } )

        console.clear()

        // je filtre sur recipies
        let recettesFiltered = recipies.filter(item =>
        {   
            // si dans name description ou ingredient je trouve ce qui à été tapé je retourne item
            if(
                item.name.toLowerCase().includes(inputcontent) ||
                item.description.toLowerCase().includes(inputcontent) ||
                item.ingredients.find(element => {
                    return element.ingredient.toLowerCase().includes(inputcontent)
                }) != undefined
            )
            {
                return item
            }
        })

        console.log(recettesFiltered)

        // je parcours les recettes filtrées
        recettesFiltered.forEach(recette => {
            recipeCardsFactorie(recette)
        })

    })
}



export function dropdownFilters()
{
    // je selectionne les dropdown
    let dropIngredients = document.querySelector("#ingredients")
    let dropAppareils = document.querySelector("#appareils")
    let dropUstensiles =  document.querySelector("#ustensiles")

    console.log("recete filtrée" + recettesFiltered)

    // si on à déja uen recherche préalable
    // if(recettesFiltered.lenght > 0)
    // {
        
    // }


    // INGREDIENTS
    // j'initialise un tableau vide qui contiendra les ingrédients
    let tabIngredients = []
    // je boucle sur chaque recette
    recipies.forEach(recette => {

        // Je re-boucle sur les tableaux d'ingrédients pour les concatener 
        recette.ingredients.forEach((ingredient) => {

            // je concatene les ingrédients de chaque tableau
            tabIngredients = tabIngredients.concat(ingredient.ingredient)
        })
        
        // je supprime les doublons
        tabIngredients = [...new Set(tabIngredients)]
    })
    // console.log("ingredients : " + tabIngredients)

    // je boucle sur chaque ingrédient
    tabIngredients.forEach(ingre => {

       const ingredientDOM = `<div class="col-4">${ ingre }</div>`

        dropIngredients.insertAdjacentHTML('beforeEnd', ingredientDOM)
    })


    // APPAREILS
    // j'initialise un tableau vide qui contiendra les appareils
    let tabAppareils = []
    // je boucle sur chaque recette
    recipies.forEach(recette => {

        // je concatene les appareils de toutes les recettes
        tabAppareils = tabAppareils.concat(recette.appliance)

        // je supprime les doublons
        tabAppareils = [...new Set(tabAppareils)]
    })
    // console.log("appareils : "+ appareils)

    // je boucle sur chaque appareil
    tabAppareils.forEach(appareil => {

        const appareilDOM = `<div class="col-4">${ appareil }</div>`

        dropAppareils.insertAdjacentHTML('beforeEnd', appareilDOM)
    })


    // USTENSILES
    // j'initialise un tableau vide qui contiendra les ustensiles
    let tabUstensiles = []
    // je boucle sur chaque recette
    recipies.forEach(recette => {

        // je concatene les ustensiles de toutes les recettes
        tabUstensiles = tabUstensiles.concat(recette.ustensils)

        // je supprime les doublons
        tabUstensiles = [...new Set(tabUstensiles)]

    })
    // console.log("ustensiles : "+ ustensiles)
    
    // je boucle sur chaque ustensile
    tabUstensiles.forEach(ustensile => {

        const ustensileDOM = `<div class="col-4">${ ustensile }</div>`

        dropUstensiles.insertAdjacentHTML('beforeEnd', ustensileDOM)
    })
}