// Modern

let recettesFilteredByIngredient


// je selectionne les dropdown qui afficherons les elements filtrables
let dropIngredients = document.querySelector("#ingredients")
// je récupere le champ de recherche ingredient
let inputIngredient = document.querySelector("#input-ingredient")


// je selectionne les dropdown qui afficherons les elements filtrables
let dropAppareils   = document.querySelector("#appareils")
// je récupere le champ de recherche ingredient
let inputAppareils = document.querySelector("#input-appareils")


// je selectionne les dropdown qui afficherons les elements filtrables
let dropUstensiles  = document.querySelector("#ustensiles")
// je récupere le champ de recherche ingredient
let inputUstensiles = document.querySelector("#input-ustensiles")


// j'initialise un tableau vide qui contiendra la liste des ingrédients
let tabIngredients = []
// j'initialise un tableau vide qui contiendra les appareils

let tabAppareils = []

// j'initialise un tableau vide qui contiendra les ustensiles
let tabUstensiles = []


// affichage les ingrédients dans leur dropdown
function afficheDropdownItems(currentRecipies, types)
{
    switch(types)
    {
        case "ingredients":
            // console.log("depuis le drop down ingredient :")
            console.log(currentRecipies)

            // je boucle sur chaque recette
            currentRecipies.forEach(recette => {
            
                // Je re-boucle sur les tableaux d'ingrédients pour les concatener 
                recette.ingredients.forEach((ingredient) => {

                    // j'uniformise tout en minuscule
                    ingredient = ingredient.ingredient.toLowerCase()
            
                    // je remet seulement la 1ere lettre en majuscule
                    ingredient = ingredient[0].toUpperCase() + ingredient.slice(1)

                    // Je remplis le tableau et ça supprime les doublons
                    if ( tabIngredients.includes(ingredient) == false )
                    {
                        tabIngredients.push(ingredient)
                    }
                })
            })

            // je supprime les doublons
            // tabIngredients = [...new Set(tabIngredients)]

            // je classe par ordre alphabétique
            tabIngredients = tabIngredients.sort()

            console.log("tabIngredients")
            console.log(tabIngredients)

            // je boucle sur chaque ingrédient et je reaffiche les ingrédients triés par nom
            tabIngredients.forEach(ingre => {

                const ingredientsDOM = `<div class="col-3 item-ingre" onclick="addTagingredient('${ingre}')">${ ingre }</div>`

                dropIngredients.insertAdjacentHTML('beforeEnd', ingredientsDOM)
            })
        break

        case "appareils":

            // je boucle sur chaque recette
            currentRecipies.forEach(recette => {

                let appareil = recette.appliance

                // j'uniformise tout en minuscule
                appareil = appareil.toLowerCase()
                
                // je remet seulement la 1ere lettre en majuscule
                appareil = appareil[0].toUpperCase() + appareil.slice(1)

                // je concatene les appareils de toutes les recettes
                tabAppareils = tabAppareils.concat(appareil)
            })

            // je supprime les doublons
            tabAppareils = [...new Set(tabAppareils)]

            // je classe par ordre alphabétique
            tabAppareils = tabAppareils.sort()

            // à l'input dans le dropdown appareils
            inputAppareils.addEventListener('input', function()
            {
                // je récupere la valeur de l'input et je passe en minuscule
                let searchAppareils = inputAppareils.value.toLowerCase()

                // je supprime les appareils affichés avant de reboucler dessus et refaire un affrichage filtré 
                document.querySelectorAll("#appareils div").forEach( (elt)=>{ elt.remove() } )
                
                // je filtre sur tabAppareils
                let AppareilsFiltered = tabAppareils.filter(item =>
                {   
                    if ( item.toLowerCase().includes(searchAppareils) )
                    {
                        return item
                    }     
                })

                // je boucle sur chaque appareil et je reaffiche les appareils triés par nom
                AppareilsFiltered.forEach(ingre => {

                const appareilsDOM = `<div class="col-4">${ ingre }</div>`
    
                    dropAppareils.insertAdjacentHTML('beforeEnd', appareilsDOM)
                })
            })

            // je boucle sur chaque appareil
            tabAppareils.forEach(appareil => {

                const appareilsDOM = `<div class="col-4">${ appareil }</div>`

                dropAppareils.insertAdjacentHTML('beforeEnd', appareilsDOM)
            })
        break

        case "ustensiles":
            

            // je boucle sur chaque recette
            recipies.forEach(recette => {

                let ustensiles = recette.ustensils.map(name => name.toLowerCase())

                // je capitalise la 1ere lettre 
                ustensiles.forEach( ustensile => {
                            
                    let ustensilesCap = ustensile[0].toUpperCase() + ustensile.slice(1) 

                    tabUstensiles = tabUstensiles.concat(ustensilesCap)
                })
            })

            // je supprime les doublons
            tabUstensiles = [...new Set(tabUstensiles)]

            // je classe par ordre alphabétique
            tabUstensiles = tabUstensiles.sort()

            // à l'input dans le dropdown ustensiles
            inputUstensiles.addEventListener('input', function()
            {
                // je récupere la valeur de l'input et je passe en minuscule
                let searchUstensile = inputUstensiles.value.toLowerCase()

                // je supprime les ustensiles affichés avant de reboucler dessus et refaire un affrichage filtré 
                document.querySelectorAll("#ustensiles div").forEach( (elt)=>{ elt.remove() } )

                // je filtre sur tabUstensiles
                let ustensilesFiltered = tabUstensiles.filter(item =>
                {   
                    if ( item.toLowerCase().includes(searchUstensile) )
                    {
                        return item
                    }
                    console.log(item)
                })

                // je boucle sur chaque ustensile et je reaffiche les ustensiles triés par nom
                ustensilesFiltered.forEach(ustensil => {

                const ustensilesDOM = `<div class="col-4">${ ustensil }</div>`

                    dropUstensiles.insertAdjacentHTML('beforeEnd', ustensilesDOM)
                })
            })

            // je boucle sur chaque ustensile
            tabUstensiles.forEach(ustensile => {

                const ustensileDOM = `<div class="col-4">${ ustensile }</div>`

                dropUstensiles.insertAdjacentHTML('beforeEnd', ustensileDOM)
            })
        break
    }
}
afficheDropdownItems(currentRecipies)


// rafraichi les ingredients en entonoir en chechant par mot clé dans le dropdown 
function inputSearchIngredient()
{
    // à l'input dans le dropdown ingrédients
    inputIngredient.addEventListener('input', function()
    {
        // je récupere la valeur de l'input et je passe en minuscule
        let searchIngredient = inputIngredient.value.toLowerCase()

        // je supprime les ingrédients affichés avant de reboucler dessus et refaire un affrichage filtré 
        document.querySelectorAll("#ingredients div").forEach( (elt)=>{ elt.remove() } )

        // je filtre sur tabingredients
        let ingredientsFiltered = tabIngredients.filter(item =>
        {
            if ( item.toLowerCase().includes(searchIngredient) )
            {
                return item
            }
        })

        // je boucle sur chaque ingrédient
        ingredientsFiltered.forEach(ingre => {

            const ingredientsDOM = `<div class="col-3 item-ingre" onclick="addTagingredient('${ingre}')">${ ingre }</div>`

            dropIngredients.insertAdjacentHTML('beforeEnd', ingredientsDOM)
        })
    })
    
}
inputSearchIngredient()


// recherche en validant le mot clé dans le dropdown
function sortIngredients()
{
    // par défaut on boucle sur tous les ingrédients de recipies
    recettesFilteredByIngredient = recipies

    // dans le champ du dropdown
    // En cherchant un ingredient j'afficher les recettes qui contiennent cet ingrédient
    inputIngredient.addEventListener('change', function()
    {
        // // je récupere la valeur de l'input et je pass en minuscule
        let searchIngredient = inputIngredient.value.toLowerCase()

        addTagingredient(searchIngredient)

        // // je supprime les articles affichés avant de reboucler dessus et refaire un affrichage filtré 
        document.querySelectorAll(".article-recette").forEach( (elt)=>{ elt.remove() } )

        // je filtre sur recipies
        recettesFilteredByIngredient = recipies.filter(recette =>
        {   
            // si dans ingredient je trouve ce qui à été cherché je retourne "recette"
            if( recette.ingredients.find(element => {return element.ingredient.toLowerCase().includes(searchIngredient)}) != undefined )
            {
                return recette
            }
        })

        // je parcours et re-affiche les recettes filtrées par ingrédient
        recettesFilteredByIngredient.forEach(recette => {
            recipeCardsFactorie(recette)
        })
    })
}
sortIngredients()


// au click sur un ingredient
// je récupere l'item cliqué
function addTagingredient(itemTag)
{
    console.log("je recupere la valeur du champ")
    console.log(itemTag)

    // Je crée le texte recherché
    const tagIngredientDOM = `<div class="btn btn-primary tag-ingredient">${itemTag} &nbsp;<i class="bi bi-x-circle" onclick="stopSearch('${itemTag}')"></i></div>`

    let tagsFilter = document.querySelector(".filtres-actifs")

    tagsFilter.insertAdjacentHTML('beforeEnd', tagIngredientDOM )
}