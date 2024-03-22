const pokemonData = [
    { name: 'Pikachu', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png' },
    { name: 'Bulbasaur', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png' },
    { name: 'Charmander', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png' },
    // Añadir más Pokémon aquí
];

let currentIndex = 0;
const pokemonImage = document.getElementById('pokemon-image');
const pokemonName = document.getElementById('pokemon-name');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');

// Función para mostrar el Pokémon actual
function displayPokemon(index) {
    const pokemon = pokemonData[index];
    pokemonImage.src = pokemon.image;
    pokemonName.textContent = pokemon.name;
}

// Mostrar el primer Pokémon al cargar la página
displayPokemon(currentIndex);

// Evento para el botón "Anterior"
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + pokemonData.length) % pokemonData.length;
    displayPokemon(currentIndex);
});

// Evento para el botón "Siguiente"
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % pokemonData.length;
    displayPokemon(currentIndex);
});
