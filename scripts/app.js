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

    // initialisation du tri des items
    afficheDropdownItems( currentRecipies, "ingredients")

    afficheDropdownItems( currentRecipies, "appareils")

    afficheDropdownItems( currentRecipies, "ustensiles")
}
init()


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


// Gestion des annimations sur les dropdown
window.addEventListener('load', function()
{
    // wait until the page loads before working with HTML elements
    document.addEventListener('click', function(event)
    {
        // l'enleve col-md-7 à ceux qui ne sont pas cliqués
        document.querySelectorAll('.dropdowns').forEach(function(el)
        {
            // close any showing dropdown that isn't the one just clicked
            if (el !== event.target)
            {
                el.classList.remove('col-lg-7')
                el.classList.add('col-lg-3')
                el.classList.add('col-xl-2')

                el.classList.add('rounded-bottom')
                el.classList.add('rounded-bottom')
            }
        })
        // je montre le dropdown à ceux qui ne sont pas cliqués
        document.querySelectorAll('.dropdown-content').forEach(function(el)
        {
            // close any showing dropdown that isn't the one just clicked
            if (el !== event.target)
            {
                el.classList.remove('show')
            }     
        })
        // je cache la fleche haut
        document.querySelectorAll('.dropbtn .bi-caret-up').forEach(function(el)
        {
            // close any showing dropdown that isn't the one just clicked
            if (el !== event.target)
            {
                el.classList.add('d-none')
            }     
        })
        // je cache montre
        document.querySelectorAll('.dropbtn .bi-caret-down').forEach(function(el)
        {
            // close any showing dropdown that isn't the one just clicked
            if (el !== event.target)
            {
                el.classList.remove('d-none')
            }     
        })
   
        // si je suis bien sur le dropdown cliqué
        if (event.target.matches('.dropbtn'))
        {
            // je display le dropdown
            event.target.closest('.dropdowns').querySelector('.dropdown-content').classList.toggle('show')

            // j'ajoute col-lg-7
            event.target.closest('.dropdowns').classList.add('col-lg-7')

            // je supprime col xl 2 et lg 3 et la bordure en dessous 
            event.target.closest('.dropdowns').classList.remove('col-xl-2')
            event.target.closest('.dropdowns').classList.remove('col-lg-3')
            event.target.closest('.dropdowns').classList.remove('rounded-bottom')

            // je change la fleche
            event.target.closest('.dropdowns').querySelector('.dropbtn .bi-caret-up').classList.remove('d-none')
            event.target.closest('.dropdowns').querySelector('.dropbtn .bi-caret-down').classList.add('d-none')
        }
    })
})


// GESTION DES TAGS
let tagFiltered = []

function tagFilter()
{
    let recipiesFiltered = []

    tagFiltered.forEach(tag => {
        recipiesFiltered = currentRecipies.filter(recette =>{
            if ( tag.type == "ingredients" )
            {
                let ingredientfounded = false

                for (let i = 0 ; i < recette.ingredients.length ; i++)
                {
                    if ( recette.ingredients[i].ingredient == tag.value )
                    {
                        ingredientfounded = true
                        break
                    }
                }
                if ( ingredientfounded == true )
                {
                    return recette   
                }
            }
        })
    })

    // console.log(recipiesFiltered)

    // je supprime les articles affichés avant de reboucler dessus et refaire un affrichage filtré 
    document.querySelectorAll(".article-recette").forEach( (elt)=>{ elt.remove() } )

    // je parcours les recettes
    recipiesFiltered.forEach(recette => {
        recipeCardsFactorie(recette)
    })

    console.log(recipiesFiltered)

    // currentRecipies = recipiesFiltered

    // afficheDropdownItems( currentRecipies, "ingredients")

    // afficheDropdownItems( currentRecipies, "appareils")

    // afficheDropdownItems( currentRecipies, "ustensiles")

    if (recipiesFiltered.length == 0)
    {
        document.querySelector(".no-recipies").classList.remove("d-none")
    }
    else
    {
        document.querySelector(".no-recipies").classList.add("d-none")
    }
}

// AJOUT DU TAG
// au click sur un item
// je récupere l'item cliqué
function addTag(itemTag, type)
{
    // console.log("je recupere la valeur du champ")
    // console.log(itemTag)
    // console.log(type)

    // Je crée le texte recherché
    const tagItemDOM = `<div class="rounded p-2 tag-${type}" data-type="${type}" data-value="${itemTag}">${itemTag} &nbsp;<i class="bi bi-x-circle" onclick="removeTag('${type}', '${itemTag}')"></i></div>`

    let currentTag = document.querySelector(".filtres-actifs")

    currentTag.insertAdjacentHTML('beforeEnd', tagItemDOM )

    tagFiltered.push({
        type: type,
        value: itemTag
    })

    console.log("currentRecipies")
    console.log(currentRecipies)
    console.log(itemTag)
    console.log(type)
    tagFilter()
}

function removeTag(type, value)
{
    // console.log(type)
    // console.log(value)

    // let tagToErase = document.querySelectorAll(".tag-" + type)
    // console.log(tagToErase.dataset)
}
