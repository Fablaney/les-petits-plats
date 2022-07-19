// Modern

let recettesFilteredByText

function searchInput()
{
    // je récupere le champ de recherche
    let searchinput = document.querySelector("#searchinput")

    searchinput.addEventListener('change', function()
    {
        // je récupere sa valeur après avoir tapé 1 lettre et je réduit tout en miniscule
        const inputcontent = searchinput.value.toLowerCase()

        // Je crée le tag texte recherché
        const filterInputDOM = `<div class="btn btn-secondary tag-texte">${inputcontent} &nbsp;<i class="bi bi-x-circle" onclick="stopSearch('${inputcontent}')"></i></div>`

        // je supprime les ingrédients affichés avant de reboucler dessus et refaire un affrichage filtré 
        document.querySelectorAll(".filtres-actifs .tag-texte").forEach( (elt)=>{ elt.remove() } )

        // J'insere le texte dans sa div dans la zone HTML qui affiche les filtres actifs
        document.querySelector(".filtres-actifs").insertAdjacentHTML('afterbegin', filterInputDOM)
        
        // je supprime les articles affichés avant de reboucler dessus et refaire un affrichage filtré 
        document.querySelectorAll(".article-recette").forEach( (elt)=>{ elt.remove() } )

        // je filtre sur recipies
        recettesFilteredByText = recipies.filter(item =>
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
        recettesFilteredByText.forEach(recette => {
            recipeCardsFactorie(recette)
        })
    })
}