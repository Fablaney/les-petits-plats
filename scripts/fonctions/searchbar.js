// Modern

// datas
import {recipies} from "/data/recettes.js"

// creation des articles
import {recipeCardsFactorie} from "/scripts/fonctions/recipecardsfactorie.js"

export function searchInput()
{
    // je récupere le champ de recherche
    let searchinput = document.querySelector("#searchinput")

    searchinput.addEventListener('input', function()
    {
        // je prends le champ de recherche et si il est vide je n'affiche pas la div de filtre texte actif
        if (document.querySelector("#searchinput").value == "")
        {
            document.querySelector("#tag-texte").classList.add("d-none")
        }
        // sinon j'affiche la div
        else
        {
            document.querySelector("#tag-texte").classList.remove("d-none")
        }

        // je récupere sa valeur après avoir tapé 1 lettre et je réduit tout en miniscule
        const inputcontent = searchinput.value.toLowerCase()

        // Je crée le texte recherché
        const filterInputDOM = `${inputcontent} &nbsp; <i class="bi bi-x-circle" onclick="stopSearch(text)"></i>`

        // J'insere le texte dans sa div dans la zone HTML qui affiche les filtres actifs
        document.querySelector("#tag-texte").innerHTML = filterInputDOM

        // je supprime les articles affichés avant de reboucler dessus et refaire un affrichage filtré 
        document.querySelectorAll(".article-recette").forEach( (elt)=>{ elt.remove() } )

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

        // je parcours les recettes filtrées
        recettesFiltered.forEach(recette => {
            recipeCardsFactorie(recette)
        })
    })
}