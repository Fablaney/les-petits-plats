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


function generateCards(recettes)
{
    // je parcours les recettes
    recettes.forEach(recette => {
        recipeCardsFactorie(recette)
    })
}



function generateItems(tab, domBlock, type)
{
    tab.forEach(item => {

        itemNormalized = normalizeString(item)

        const itemsDOM = `<div class="col-3 item-${itemNormalized}" onclick="addTag('${item}', '${type}')">${ item }</div>`

        domBlock.insertAdjacentHTML('beforeEnd', itemsDOM)
    })
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
let recipiesFiltered = []

function tagFilter(tagFiltered, currentRecipies)
{
    console.log("tagFiltered")
    console.log(tagFiltered)

    tagFiltered.forEach(tag => {

        console.log("tag")
        console.log(tag)

        console.log("currentRecipies")
        console.log(currentRecipies)

        console.log("recipiesFiltered")
        console.log(recipiesFiltered)

        recipiesFiltered = currentRecipies.filter(recette =>{
            
            // console.log("recette")
            // console.log(recette)

            // je fais un lowercase sur tag.value pour bien comparer ensuite
            tag.value = tag.value.toLowerCase()

            // INGREDIENTS
            if ( tag.type == "ingredients" )
            {
                let ingredientfounded = false

                for (let i = 0 ; i < recette.ingredients.length ; i++)
                {
                    if ( recette.ingredients[i].ingredient.toLowerCase() == tag.value )
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
            // APPAREILS
            if ( tag.type == "appareils" )
            {
                let apapreilfounded = false

                if ( recette.appliance.toLowerCase() == tag.value )
                {
                    apapreilfounded = true
                }
                if ( apapreilfounded == true )
                {
                    return recette   
                }
            }
            // USTENSILES
            if ( tag.type == "ustensiles" )
            {
                let ustensilsfounded = false

                for (let i = 0 ; i < recette.ustensils.length ; i++)
                {
                    if ( recette.ustensils[i].toLowerCase() == tag.value )
                    {
                        ustensilsfounded = true
                        break
                    }
                }
                if ( ustensilsfounded == true )
                {
                    return recette   
                } 
            }
        })
    })

    // je supprime les articles affichés avant de reboucler dessus et refaire un affrichage filtré 
    document.querySelectorAll(".article-recette").forEach( (elt)=>{ elt.remove() } )

    console.log("recipiesFiltered")
    console.log(recipiesFiltered)

    // je réaffiche les recetts filtrées par tags
    generateCards(recipiesFiltered)

    // je rafraichis l'affichage des items dans les dropdowns
    afficheDropdownItems( recipiesFiltered, "ingredients")

    afficheDropdownItems( recipiesFiltered, "appareils")

    afficheDropdownItems( recipiesFiltered, "ustensiles")
    
    // si il n'y à aucune recette trouvée j'affiche un message d'erreur
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
    // console.log(itemTag.toLowerCase())
    // console.log(itemTag)
    // console.log(type)

    // console.log(tagFiltered.length)
    
    // Si je n'ai aucun tag 
    if (tagFiltered.length == 0)
    {
        // console.log(tagFiltered.length)
        // console.log("je n'ai aucun tag dans le tableau")
        // console.log("je l'ajoute")

        createTag()
    }
    else
    {
        // console.log(tagFiltered)

        for( let i = 0; i < tagFiltered.length; i++)
        {
            // console.clear()
            // console.log(tagFiltered)
            // console.log(tagFiltered[i].value.toLowerCase())
            // console.log(itemTag.toLowerCase())

            // console.log("test")
            if (tagFiltered[i].value.toLowerCase() != itemTag.toLowerCase())
            {
                // je n'ai pas encore ce tag dans le tableau
                // console.log("je n'ai pas encore ce tag dans le tableau")
                // console.log("je l'ajoute")

                createTag()
                break
            }
            // si ce tag existe déja dans le tableau
            else
            {
                // console.log("si ce tag existe déja dans le tableau")
                // console.log("je ne fais rien")

                break
            }
        }
    }
   

    // ajout du tag dans le dom et le push dans le tableau
    function createTag()
    {
        itemTagNormalized= normalizeString(itemTag)

        // Je crée le texte recherché
        const tagItemDOM = `<div class="rounded p-2 mb-3 tag-${type} tag-${itemTagNormalized}" data-type="${type}" data-value="${itemTag}">${itemTag} &nbsp;<i class="bi bi-x-circle" onclick="removeTag('${type}', '${itemTagNormalized}')"></i></div>`

        // je prends la div qui contiendra les tags
        let currentTag = document.querySelector(".filtres-actifs")

        // j'insere les nouveaux tags
        currentTag.insertAdjacentHTML('beforeEnd', tagItemDOM )

        // je push chaque nouveau tag en objet dans le tableau tagFiltered
        tagFiltered.push({
            type: type,
            value: itemTag
        })

        tagFilter(tagFiltered, currentRecipies)
    }   
}


function removeTag(type, value)
{
    value = value.toLowerCase()
    
    console.log(document.querySelector(".filtres-actifs .tag-" + value))

    document.querySelector(".filtres-actifs .tag-" + value).remove()

    tagFiltered = tagFiltered.filter(tag => tag.value !== value)

    tagFilter(tagFiltered)
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