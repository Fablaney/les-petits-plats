// Modern

// let recettesFilteredByText

function searchInput()
{
    // je récupere le champ de recherche
    let searchinput = document.querySelector("#searchinput")

    searchinput.addEventListener('input', function()
    {
        // je récupere sa valeur après avoir tapé 1 lettre et je réduit tout en miniscule
        const inputcontent = searchinput.value.toLowerCase().trim()

        // console.log(inputcontent)

        // Je crée le tag texte recherché
        const filterInputDOM = `<div class="btn btn-secondary tag-texte">${inputcontent} &nbsp;<i class="bi bi-x-circle" onclick="stopSearch('${inputcontent}')"></i></div>`

        // je supprime le tag affiché avant le reafficher
        document.querySelectorAll(".filtres-actifs .tag-texte").forEach( (elt)=>{ elt.remove() } )

        // J'insere le texte dans sa div dans la zone HTML qui affiche les filtres actifs
        document.querySelector(".filtres-actifs").insertAdjacentHTML('afterbegin', filterInputDOM)
        

        // je filtre sur recipies
        currentRecipies = recipies.filter(item =>
        {   
            // si dans name description ou ingredient je trouve ce qui à été tapé je retourne item
            if(
                item.name.toLowerCase().trim().includes(inputcontent) ||
                item.description.toLowerCase().trim().includes(inputcontent) ||
                item.ingredients.find(element => {
                    return element.ingredient.toLowerCase().trim().includes(inputcontent)
                }) != undefined
            )
            {
                return item
            }
            
        })

        if( inputcontent.length > 2 )
        {
            // je supprime les articles affichés avant de reboucler dessus et refaire un affrichage filtré 
            document.querySelectorAll(".article-recette").forEach( (elt)=>{ elt.remove() } )

            // je parcours les recettes filtrées
            currentRecipies.forEach(recette => {
                recipeCardsFactorie(recette)
            }) 

            afficheDropdownItems( currentRecipies, "ingredients")

            afficheDropdownItems( currentRecipies, "appareils")

            afficheDropdownItems( currentRecipies, "ustensiles")
        }
        else
        {
            // je parcours les recettes filtrées
            currentRecipies.forEach(recette => {
                recipeCardsFactorie(recette)
            }) 
        }

        // return {currentRecipies, searchInput}
    })
}