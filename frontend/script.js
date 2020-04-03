const API_URL = 'http://localhost:3001/';
const pokemonsDiv = document.querySelector('.pokemons');
let page = 0
const getPokemons = (page) => {
    fetch(API_URL + page)
        .then(res => res.json())
        .then(pokemons => {
            pokemonsDiv.innerHTML = '';
            pokemons.forEach(pokemon => {
                pokemonsDiv.innerHTML += `
                <div class="card  mb-3 col-lg-3 col-xs-12 col-md-6">
                <div class="pokemon">
                <div class="card-body" >
                <h3 class="card-header text-primary" >${pokemon.name}</h3>
                <h5 class="card-title"  >${pokemon.number}</h5>
                <img style="height: 200px; width: 100%; display: block;" src="${pokemon.image_path}" alt="Card image">
                </div>
                </div>
                </div>
                 `

            });

        })
}
getPokemons(page)
document.querySelector('.previousPage').addEventListener('click', event => {
    if (page > 0) {
        getPokemons(--page)
    }
})
document.querySelector('.nextPage').addEventListener('click', event => {
    if (page < 51) {
        getPokemons(++page)
    }
})