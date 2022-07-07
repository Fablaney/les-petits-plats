// datas
import {recipies} from "/data/recettes.js"

export function searchInput()
{
    // console.log(recipies)

    const searchinput = document.querySelector("#searchinput")

    searchinput.addEventListener('keyup', function()
    {
        // const input = searchinput.value.toLowerCase()
        const inputcontent = searchinput.value

        // console.log(inputcontent)

        // Je crée un bloc contennat le texte recherché
        const filterInputDOM = `<div class="btn btn-primary filtre-input">${inputcontent}</div>`

        // J'insere ce bloc dans la zone HTML qui affiche els filtres actifs
        document.querySelector(".filtres-actifs").innerHTML = filterInputDOM
    })
}
searchInput()