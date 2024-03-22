const pokemonData = [
    { name: 'Bulbasaur', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png', description: 'Seed Pokémon.' },
    { name: 'Ivysaur', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png', description: 'Seed Pokémon.' },
    { name: 'Venusaur', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png', description: 'Seed Pokémon.' },
    { name: 'Charmander', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png', description: 'Lizard Pokémon.' },
    { name: 'Charmeleon', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png', description: 'Flame Pokémon.' },
    { name: 'Charizard', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png', description: 'Flame Pokémon.' },
    { name: 'Squirtle', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png', description: 'Tiny Turtle Pokémon.' },
    { name: 'Wartortle', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png', description: 'Turtle Pokémon.' },
    { name: 'Blastoise', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png', description: 'Shellfish Pokémon.' },
    { name: 'Caterpie', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png', description: 'Worm Pokémon.' },
    { name: 'Metapod', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png', description: 'Cocoon Pokémon.' },
    { name: 'Butterfree', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png', description: 'Butterfly Pokémon.' },
    // Agregar más Pokémon de Kanto aquí
];

let currentIndex = 0;
const pokemonImage = document.getElementById('pokemon-image');
const pokemonName = document.getElementById('pokemon-name');
const pokemonDescription = document.getElementById('pokemon-description');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');

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

// Evento para el botón "Buscar"
searchBtn.addEventListener('click', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const foundIndex = pokemonData.findIndex(pokemon => pokemon.name.toLowerCase() === searchTerm);
    if (foundIndex !== -1) {
        currentIndex = foundIndex;
        displayPokemon(currentIndex);
    } else {
        alert('No se encontró ningún Pokémon con ese nombre.');
    }
});
