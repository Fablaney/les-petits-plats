// old

// datas
import {recipies} from "/data/recettes.js"

// creation des articles
import {recipeCardsFactorie} from "/scripts/fonctions/recipecardsfactorie.js";

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

        // Je boucle sur 
        let recettesFiltered = recipies.filter(item =>
        {   
            // si dans name description ou ingredient je trouve ce qui à été tapé je retourne item
            if(
                item.name.toLowerCase().includes(inputcontent) ||
                item.description.toLowerCase().includes(inputcontent) ||
                // methode 2 avec un for sans le find
                item.ingredients.find(element => {
                    return element.ingredient.toLowerCase().includes(inputcontent)
                }) != undefined
            )
            {
                return item
            }
        })

        // let recettesFiltered = []
      
        // for (const recipie of recipies)
        // {
        //     if ( recipie.name.toLowerCase().includes(inputcontent) // ||
        //     // recipie.description.toLowerCase().includes(inputcontent) ||
        //     // recipie.ingredients.find(element => {return element.ingredient.toLowerCase().includes(inputcontent)}) != undefined
        //     )
        //     {
        //         return recettesFiltered
        //     }
        // }

        console.log(recettesFiltered)

        // je boucle sur les recettes filtrées et je rappelle la factory pour afficher les recettes filtrées
        for (let i = 0; i < recettesFiltered.length; i++)
        {
            // Affichage de toutes les recettes au chargement de la page et lors des réinitialisations
            recipeCardsFactorie(recettesFiltered[i])
        }
    })
}