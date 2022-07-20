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

    // tri des items
    afficheDropdownItems( currentRecipies, "ingredients")

    afficheDropdownItems( currentRecipies, "appareils")

    afficheDropdownItems( currentRecipies, "ustensiles")

    // tri par appareils
    // dropdownAppareils()

    // tri par ustensiles
    // dropdownUstensilles()
}
init()

function stopSearch(param)
{
    console.log(param)

}

function normalizeString(string)
{
    const diacriticRegex = new RegExp(/\p{Diacritic}/, "gu");
    const spaceRegex = new RegExp(/\s/, "g");
    return string
      .normalize("NFD") // returns the string in normalized Unicode form with decomposition of diacritics (accents, umlauts, cedillas, etc.)
      .replace(diacriticRegex, "") // remove diacritics
      .toLowerCase()
      .replace(spaceRegex, ""); // remove all spaces
}