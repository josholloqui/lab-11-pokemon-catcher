import { pokemonStats, getRandomPokemon } from './common/utils.js';
import { POKEMON } from './common/constants.js';
import pokemonData from './data/pokemon.js'
// initialize state
let pokeDex = pokemonStats();
let capturedPokemon = 0;

let wildPokemon = JSON.parse(localStorage.getItem(POKEMON));

if (!wildPokemon) {
    localStorage.setItem(POKEMON, JSON.stringify(pokemonData));

    wildPokemon = JSON.parse(localStorage.getItem(POKEMON));
}

const collectWildPokemon = wildPokemon.slice();
// set event listeners to update state and DOM
function setPage() {
    if (capturedPokemon === 10) {
        alert('You have caught 10 Pokemon! Lets take a look!');
    }

    let wildEncounter1 = getRandomPokemon(collectWildPokemon);
    let wildEncounter2 = getRandomPokemon(collectWildPokemon);
    let wildEncounter3 = getRandomPokemon(collectWildPokemon);
    
    while (wildEncounter1.id === wildEncounter2.id || wildEncounter1.id === wildEncounter3.id || wildEncounter2.id === wildEncounter3.id) {
        wildEncounter2 = getRandomPokemon(collectWildPokemon);
        wildEncounter3 = getRandomPokemon(collectWildPokemon);
    }

    console.log(wildEncounter1)
    console.log(wildEncounter2)
    console.log(wildEncounter3)
}




// function setPage() {
setPage();