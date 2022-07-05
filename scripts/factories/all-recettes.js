// Fonction pour afficher les cards de tous les photographes
function getRecettes(recette)
{
    let name = recette.name
    // console.log(name)

    // Fonction de la création des cartes des recettes
    const getRecettesDOM = () => {
            `<div class="card col-lg-4 col-md-6">

                <div class="image"></div>

                <div class="row descriptif p-3">

                    <h5 class="col-md-7 titre mb-3 d-flex align-items-center">${name}</h5>

                    <div class="col-md-5 time mb-3 d-flex align-items-center justify-content-end">
                        <i class="bi bi-clock"></i>
                        10 min
                    </div>

                    <ul class="col-md-6 liste mb-3">
                        <li>ingrédient 1</li>
                        <li>ingrédient 2</li>
                        <li>ingrédient 3</li>
                        <li>ingrédient 4</li>
                    </ul>

                    <p class="col-md-6 texte">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum temporibus alias maiores officiis quas itaque distinctio consequatur, cumque blanditiis. Corporis minus rerum rem animi consectetur magni unde architecto natus similique!</p>

                </div>

            </div>`
    }

    return { getRecettesDOM };
}