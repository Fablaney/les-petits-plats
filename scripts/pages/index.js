// Import qui marche pas
// import { recettes } from "./data/recettes.js"

// affichage de. toutes les recettes
// console.log("recettes pas triées")
let recettesAll = recettes
// console.log(recettesAll)

// Renvoie les données et les fait apparaitre dans le dom dans "#wrapper-recettes"
async function displayRecettes(recettesAll)
{
    const recettesSection = document.querySelector("#wrapper-recettes");

    // Je boucle sur recettes pour afficher les cards de chaque photographe
    console.log("on boucle pour sortir les recettes")
    recettesAll.forEach((recette) => {
        // je viens de sortir toutes les recettes individuellement
        // console.log("je viens de sortir toutes les recettes individuellement")
        console.log(recette)

        // je prend la fonction pour afficher les cards et je lui passe les données des photographes
        const recettesToutes = getRecettes(recette);

        const recettesCardDOM = recettesToutes.getRecettesDOM();

        console.log(recettesToutes)

        // j'insere le bloc dans la page html dans le bloc .medias-wrapper
        recettesSection.insertAdjacentHTML('beforeEnd', recettesCardDOM);

    });
}

async function init()
{
    displayRecettes(recettesAll)

}
init();