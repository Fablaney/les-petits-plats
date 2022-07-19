// Modern

// Boucle sur les données
async function init()
{
    // Affichage par défaut de toutes les recettes au chargement de la page
    recipies.forEach((recette) => {
        recipeCardsFactorie(recette)
    })

    // tri par mot clé
    searchInput()

    // tri par ingredients
    // dropdownIngredients()

    // tri par appareils
    dropdownAppareils()

    // tri par ustensiles
    dropdownUstensilles()

}
init()



function stopSearch(param)
{
    console.log(param)

    
   
}