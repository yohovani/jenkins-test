const pokemonData = [
    { name: 'Pikachu', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png', description: 'Electric mouse Pokémon.' },
    { name: 'Bulbasaur', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png', description: 'Seed Pokémon.' },
    { name: 'Charmander', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png', description: 'Lizard Pokémon.' },
    // Añadir más Pokémon aquí
];

let currentIndex = 0;
const pokemonImage = document.getElementById('pokemon-image');
const pokemonName = document.getElementById('pokemon-name');
const pokemonDescription = document.getElementById('pokemon-description');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');

// Función para mostrar el Pokémon actual
function displayPokemon(index) {
    const pokemon = pokemonData[index];
    pokemonImage.src = pokemon.image;
    pokemonName.textContent = pokemon.name;
    pokemonDescription.textContent = pokemon.description;
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
