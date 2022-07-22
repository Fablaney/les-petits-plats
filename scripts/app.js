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



window.addEventListener('load', function()
{
    // wait until the page loads before working with HTML elements
    document.addEventListener('click', function(event)
    {
        // l'enleve col-md-7 à ceux qui ne sont pas cliqués
        document.querySelectorAll('.dropdowns').forEach(function(el)
        {
            if (el !== event.target)
            {
                el.classList.remove('col-lg-7')
                el.classList.add('col-lg-3')
                el.classList.add('col-xl-2')

                el.classList.add('rounded-bottom')
            }
            // close any showing dropdown that isn't the one just clicked
        })
        // je montre le dropdown à ceux qui ne sont pas cliqués
        document.querySelectorAll('.dropdown-content').forEach(function(el)
        {
            if (el !== event.target)
            {
                el.classList.remove('show')
            }     
        })
  
        if (event.target.matches('.dropbtn'))
        {
            // je display le dropdown
            event.target.closest('.dropdowns').querySelector('.dropdown-content').classList.toggle('show')

            //Je rajoute la class expand au dropdown pour l'agrandir  

            event.target.closest('.dropdowns').classList.add('col-lg-7')
            event.target.closest('.dropdowns').classList.remove('col-xl-2')
            event.target.closest('.dropdowns').classList.remove('col-lg-3')
            event.target.closest('.dropdowns').classList.remove('rounded-bottom')
        }
    })
})