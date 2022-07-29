// Modern

function searchInput()
{
    // je récupere le champ de recherche
    let searchinput = document.querySelector("#searchinput")

    searchinput.addEventListener('input', function()
    {
        // je récupere sa valeur après avoir tapé 1 lettre et je réduit tout en miniscule
        const inputcontent = searchinput.value.toLowerCase().trim()

        // Si le champ de recherche contient + de 2 caracteres
        if( inputcontent.length > 2 )
        {
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

            // je supprime les articles affichés avant de reboucler dessus et refaire un affrichage filtré 
            document.querySelectorAll(".article-recette").forEach( (elt)=>{ elt.remove() } )
   
            // je parcours les recettes filtrées
            generateCards(currentRecipies)

            afficheDropdownItems( currentRecipies, "ingredients", tagFiltered)

            afficheDropdownItems( currentRecipies, "appareils", tagFiltered)

            afficheDropdownItems( currentRecipies, "ustensiles", tagFiltered)

            errorMessage(currentRecipies)
        }
        else
        {
            // je supprime les articles affichés avant de reboucler dessus et refaire un affrichage filtré 
            document.querySelectorAll(".article-recette").forEach( (elt)=>{ elt.remove() } )

            // je parcours les recettes filtrées
            generateCards(recipies)

            afficheDropdownItems( recipies, "ingredients", tagFiltered)

            afficheDropdownItems( recipies, "appareils", tagFiltered)

            afficheDropdownItems( recipies, "ustensiles", tagFiltered)
        }
    })
}