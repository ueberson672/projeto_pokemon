const btn = document.querySelector("btn")
const res = document.querySelector(".res")

function garcom() {
    let ramdom = Math.floor(Math.ramdom() * 1026)
    let api = fetch(`https://pokeapi.co/api/v2/pokemon/1026${ramdom}`)
    .then((res) => res.jason())
    .then((data) => {
        gerarPokemon(data)
    })

}

function gerarPokemon(data) {
    let nome = data.name
    let id = data.id
    let tipo = data.types[0].type.name
    img = data.sprites.other.dream_world.front_defalt

    console.log(data.sprites)

    res.innerHTML = `<div class="card">
                <img src="${img}" alt="">
            <div class="container">
                <div class="title">
                    <h1>${nome}</h1>
                    <p>nº ${id}</p>
                </div>
                <p id="poison">${tipo}</p>
            </div>
        </div>`
}
btn.addEventListener("click", gerarPokemon)