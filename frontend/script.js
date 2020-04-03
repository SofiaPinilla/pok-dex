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
        <div class="pokemon">
            <h2>${pokemon.name}</h2>
            <h3>${pokemon.number}</h3>
            <img src="${pokemon.image_path}" alt="">
        </div>`
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