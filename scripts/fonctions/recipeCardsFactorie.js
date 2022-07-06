export function recipeCardsFactorie(recette)
{
    console.log(recette)

    function getRecipeCardDOM()
    {
        // Je prends la div qui va contenir mes cards
        const recipeList = document.querySelector("#wrapper-recettes");

        const cardRecipie = `
            <div class="card col-lg-4 col-md-6">

                <img class="image" src="./assets/images/illustation-recette.jpg" alt="illustration" role="Image"/>
                
                <div class="row descriptif p-3">

                    <h5 class="col-md-7 titre mb-3 d-flex align-items-center">${recette.name}</h5>

                    <div class="col-md-5 time mb-3 d-flex align-items-center justify-content-end">
                        <i class="bi bi-clock"></i> &nbsp;
                        ${recette.time} min
                    </div>

                    <ul class="col-md-6 liste mb-3" id="ingredients-${recette.id}">

                    </ul>

                    <p class="col-md-6 texte">${recette.description}</p>

                </div>

            </div>`

        recipeList.insertAdjacentHTML('beforeEnd', cardRecipie)
    }
    getRecipeCardDOM();


    // Création de la liste ingrédients
    recette.ingredients.forEach((ingredient) => {
        console.log(ingredient)

        let listeIngrédients = document.querySelector("#ingredients-" + recette.id)

        let varIngredient = ingredient.ingredient
        let varQuantity = ingredient.quantity
        let varUnit = ingredient.unit
        // console.log(varIngredient)
        // console.log(varQuantity)
        // console.log(varUnit)

        if (varQuantity == undefined)
        {
            varQuantity = ""
        }

        if (varUnit === undefined)
        {
            varUnit = ""
        }

        const listeItem = `
                <li><strong>${ varIngredient } :</strong> ${ varQuantity } ${ varUnit }</li>
            `

        listeIngrédients.insertAdjacentHTML('beforeEnd', listeItem)
    });
}