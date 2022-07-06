export function searchInput()
{
    const searchinput = document.querySelector("#searchinput")

    searchinput.addEventListener('keyup', function(){
        const input = searchinput.value
        console.log(input)

        const result = recipies.name.filter(item => item.name.includes(input))
        console.log(result)
    })
}
searchInput()