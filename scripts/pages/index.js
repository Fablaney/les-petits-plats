// import "data/recettes.js"

// affichage de. toutes les recettes
console.log("recettes pas triées")
let recettesAll = recettes
console.log(recettesAll)

// Renvoie les données et les fait apparaitre dans le dom dans "#wrapper-recettes"
async function displayRecettes(recettesAll)
{
    const recettesSection = document.querySelector("#wrapper-recettes");

    // Je boucle sur recettes pour afficher les cards de chaque photographe
    recettesAll.forEach((recettesAll) => {
        console.log(recettesAll)
    //     // je prend la fonction pour afficher les cards et je lui passe les données des photographes
    //     const recettesToutes = getRecettes(recette);

    //     const recettesCardDOM = recettesToutes.getRecettesDOM();

    //     // photographersSection.appendChild(userCardDOM);
    //  recettesSection.insertAdjacentHTML('beforeEnd', recettesCardDOM);
    });
};


async function init()
{
    // Récupère les datas des photographes
   
    displayRecettes()
}

init();