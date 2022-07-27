// Modern

function searchInput()
{
    // je récupere le champ de recherche
    let searchinput = document.querySelector("#searchinput")

    searchinput.addEventListener('input', function()
    {
        // je récupere sa valeur après avoir tapé 1 lettre et je réduit tout en miniscule
        const inputcontent = searchinput.value.toLowerCase().trim()

        // console.log(inputcontent)

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
            generateCards(currentRecipies)

            afficheDropdownItems( currentRecipies, "ingredients")

            afficheDropdownItems( currentRecipies, "appareils")

            afficheDropdownItems( currentRecipies, "ustensiles")

            console.log("if")
            console.log(currentRecipies)
        }
        else
        {
            // je parcours les recettes filtrées
            generateCards(currentRecipies)

            afficheDropdownItems( currentRecipies, "ingredients")

            afficheDropdownItems( currentRecipies, "appareils")

            afficheDropdownItems( currentRecipies, "ustensiles")

            console.log("else")
            console.log(currentRecipies)
        }
    })
}