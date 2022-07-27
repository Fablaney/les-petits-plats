// Modern


// je selectionne les dropdown qui afficherons les elements filtrables
let dropIngredients = document.querySelector("#ingredients")
let dropUstensiles  = document.querySelector("#ustensiles")
let dropAppareils   = document.querySelector("#appareils")


// je récupere le champ de recherche ingredient
let inputIngredient = document.querySelector("#input-ingredients")

// je récupere le champ de recherche appareil
let inputAppareils = document.querySelector("#input-appareils")

// je récupere le champ de recherche ustensile
let inputUstensiles = document.querySelector("#input-ustensiles")


// j'initialise un tableau vide qui contiendra la liste des ingrédients
let tabIngredients = []

// j'initialise un tableau vide qui contiendra les appareils
let tabAppareils = []

// j'initialise un tableau vide qui contiendra les ustensiles
let tabUstensiles = []


// AFFICHAGE INITIAL
// affichage des items dans leurs dropdown respectifs
function afficheDropdownItems(currentRecipies, types)
{
    switch(types)
    {
        // affichage des ingredients
        case "ingredients":

            tabIngredients = []

            // je boucle sur chaque recette
            currentRecipies.forEach(recette => {

                // Je re-boucle sur les tableaux d'ingrédients pour les concatener 
                recette.ingredients.forEach((ingredient) => {

                    // j'uniformise tout en minuscule
                    ingredient = ingredient.ingredient.toLowerCase()
            
                    // je remet seulement la 1ere lettre en majuscule
                    ingredient = ingredient[0].toUpperCase() + ingredient.slice(1)

                    // Je remplis le tableau et evite les doublons
                    if ( tabIngredients.includes(ingredient) == false )
                    {
                        tabIngredients.push(ingredient)
                    }
                })
            })

            // je classe par ordre alphabétique
            tabIngredients = tabIngredients.sort()

            // je supprime les items affichés avant de reboucler dessus et refaire un affrichage filtré 
            document.querySelectorAll("#ingredients div").forEach( (elt)=>{ elt.remove() } )

            // je boucle sur chaque ingrédient et je reaffiche les ingrédients triés par nom
            tabIngredients.forEach(ingre => {

                const ingredientsDOM = `<div class="col-3 item-${ingre.toLowerCase()}" onclick="addTag('${ingre}', 'ingredients')">${ ingre }</div>`

                dropIngredients.insertAdjacentHTML('beforeEnd', ingredientsDOM)
            })
        break

        // affichage des appareils
        case "appareils":

            tabAppareils = []

            // je boucle sur chaque recette
            currentRecipies.forEach(recette => {

                let appareil = recette.appliance

                // j'uniformise tout en minuscule
                appareil = appareil.toLowerCase()
                
                // je remet seulement la 1ere lettre en majuscule
                appareil = appareil[0].toUpperCase() + appareil.slice(1)

                // Je remplis le tableau et evite les doublons
                if ( tabAppareils.includes(appareil) == false )
                {
                    tabAppareils.push(appareil)
                }
            })

            // je classe par ordre alphabétique
            tabAppareils = tabAppareils.sort()

            // je supprime les items affichés avant de reboucler dessus et refaire un affrichage filtré 
            document.querySelectorAll("#appareils div").forEach( (elt)=>{ elt.remove() } )

            // je boucle sur chaque appareil
            tabAppareils.forEach(appareil => {

                const appareilsDOM = `<div class="col-3" item-${appareil.toLowerCase()}" onclick="addTag('${appareil}', 'appareils')">${ appareil }</div>`

                dropAppareils.insertAdjacentHTML('beforeEnd', appareilsDOM)
            })
        break

        // affichage des ustensiles
        case "ustensiles":

            tabUstensiles = []

            // je boucle sur chaque recette
            currentRecipies.forEach(recette => {

                let ustensiles = recette.ustensils.map(name => name.toLowerCase())

                // je capitalise la 1ere lettre 
                ustensiles.forEach( ustensile => {
                            
                    ustensile = ustensile[0].toUpperCase() + ustensile.slice(1) 

                    // Je remplis le tableau et evite les doublons
                    if ( tabUstensiles.includes(ustensile) == false )
                    {
                        tabUstensiles.push(ustensile)
                    }
                })
            })

            // je classe par ordre alphabétique
            tabUstensiles = tabUstensiles.sort()

            // je supprime les items affichés avant de reboucler dessus et refaire un affrichage filtré 
            document.querySelectorAll("#ustensiles div").forEach( (elt)=>{ elt.remove() } )

            // je boucle sur chaque ustensile
            tabUstensiles.forEach(ustensile => {

                const ustensileDOM = `<div class="col-3" item-${ustensile.toLowerCase()}" onclick="addTag('${ustensile}', 'ustensils')">${ ustensile }</div>`

                dropUstensiles.insertAdjacentHTML('beforeEnd', ustensileDOM)
            })
        break
    }
}

// ENTONOIR DE RECHERCHE INGREDIENT APPAREIL USTENSILES DANS LE DROPDOWN
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

            const ingredientsDOM = `<div class="col-3" item-${ingre.toLowerCase()}" onclick="addTag('${ingre}', 'ingredients')">${ ingre }</div>`

            dropIngredients.insertAdjacentHTML('beforeEnd', ingredientsDOM)
        })
    })
}
inputSearchIngredient()


// rafraichi les appareils en entonoir en chechant par mot clé dans le dropdown 
function inputSearchAppareils()
{
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
        AppareilsFiltered.forEach(appareil => {

        const appareilsDOM = `<div class="col-3" item-${appareil.toLowerCase()}" onclick="addTag('${appareil}', 'appareils')">${ appareil }</div>`
            dropAppareils.insertAdjacentHTML('beforeEnd', appareilsDOM)
        })
    })
}
inputSearchAppareils()


// rafraichi les ustensiles en entonoir en chechant par mot clé dans le dropdown 
function inputSearchUstensiles()
{
    //  à l'input dans le dropdown ustensiles
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

        const ustensilesDOM = `<div class="col-3" item-${ustensil.toLowerCase()}" onclick="addTag('${ustensil}', 'ustensils')">${ ustensil }</div>`

            dropUstensiles.insertAdjacentHTML('beforeEnd', ustensilesDOM)
        })
    })
}
inputSearchUstensiles()


// EN CHERCHANT ET EN VALIDANT UN MOT DANS LE DROPDOWN
// INGREDIENTS
function sortIngredients()
{
    // En cherchant un ingredient j'afficher les recettes qui contiennent cet ingrédient
    inputIngredient.addEventListener('change', function()
    {
        // // je récupere la valeur de l'input et je pass en minuscule
        let searchIngredient = inputIngredient.value.toLowerCase()

        addTag(searchIngredient, "ingredients")

        // // je supprime les articles affichés avant de reboucler dessus et refaire un affrichage filtré 
        document.querySelectorAll(".article-recette").forEach( (elt)=>{ elt.remove() } )

        // je filtre sur recipies
        let recettesFilteredByIngredients = recipies.filter(recette =>
        {   
            // si dans ingredient je trouve ce qui à été cherché je retourne "recette"
            if( recette.ingredients.find(element => {return element.ingredient.toLowerCase().includes(searchIngredient)}) != undefined )
            {
                return recette
            }
        })

        recettesFilteredByIngredients
        // je parcours et re-affiche les recettes filtrées par ingrédient
        recettesFilteredByIngredients.forEach(recette => {
            recipeCardsFactorie(recette)
        })
        // generateCards(recettesFilteredByIngredients)
    })
}
sortIngredients()

// APPAREILS
function sortAppareils()
{
    // En cherchant un appareil j'afficher les recettes qui contiennent cet appareil
    inputAppareils.addEventListener('change', function()
    {
        // je récupere sa valeur après avoir tapé 1 lettre et je réduit tout en miniscule
        let searchAppareils = inputAppareils.value.toLowerCase()

        addTag(searchAppareils, "appareils")

        // je supprime les articles affichés avant de reboucler dessus et refaire un affrichage filtré 
        document.querySelectorAll(".article-recette").forEach( (elt)=>{ elt.remove() } )

        // je filtre sur recipies
        let recettesFilteredByAppareil = recipies.filter(item =>
        {   
            // si dans ingredient je trouve ce qui à été tapé je retourne item
            if( item.appliance.toLowerCase().includes(searchAppareils) )
            {
                return item
            }
        })

        // je parcours les recettes filtrées par appareil
        recettesFilteredByAppareil.forEach(recette => {
            recipeCardsFactorie(recette)
        })
        // generateCards(recettesFilteredByAppareil)
    })
}
sortAppareils()

// USTENSILES
function sortUstensiles()
{
    // En cherchant un ustensile j'afficher les recettes qui contiennent cet ustensile
    inputUstensiles.addEventListener('change', function()
    {
        // je récupere sa valeur après avoir tapé 1 lettre et je réduit tout en miniscule
        let searchUstensiles = inputUstensiles.value.toLowerCase()

        addTag(searchUstensiles, "ustensils")

        // je supprime les articles affichés avant de reboucler dessus et refaire un affrichage filtré 
        document.querySelectorAll(".article-recette").forEach( (elt)=>{ elt.remove() } )

        // je filtre sur recipies
        let recettesFilteredByUstensile = recipies.filter(item =>
        {   
            // si dans recette.ustensiles je trouve ce qui à été tapé je retourne item
            if( item.ustensils.find(ustensils => ustensils.toLowerCase().includes(searchUstensiles)) )
            {
                return item
            }
        })

        // je parcours les recettes filtrées par ustensiles
        recettesFilteredByUstensile.forEach(recette => {
            recipeCardsFactorie(recette)
        })
        // generateCards(recettesFilteredByUstensile)
    })
}
sortUstensiles()