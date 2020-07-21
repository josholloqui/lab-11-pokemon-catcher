import { getRandomPokemon, findById, addEncounters } from './common/utils.js';
import { POKEMON, POKESTATS } from './common/constants.js';
import pokemonData from './data/pokemon.js'
import pokeDex from './data/poke.dex.js';
// initialize state
let capturedPokemon = 0;

let wildPokemon = JSON.parse(localStorage.getItem(POKEMON));

if (!wildPokemon) {
    localStorage.setItem(POKEMON, JSON.stringify(pokemonData));

    wildPokemon = JSON.parse(localStorage.getItem(POKEMON));
}

let localResults = JSON.parse(localStorage.getItem(POKESTATS));

if (!localResults) {
    localStorage.setItem(POKESTATS, JSON.stringify(pokeDex));

    localResults = JSON.parse(localStorage.getItem(POKESTATS));
}

const collectWildPokemon = wildPokemon.slice();
const resultsWildPokemon = localResults.slice();
// set event listeners to update state and DOM
function setPage() {
    if (capturedPokemon === 10) {
        alert('You have caught 10 Pokemon! Lets take a look!');
    }
const pokeResults = resultsWildPokemon
    let wildEncounter1 = getRandomPokemon(collectWildPokemon);
    let wildEncounter2 = getRandomPokemon(collectWildPokemon);
    let wildEncounter3 = getRandomPokemon(collectWildPokemon);
    // Add to the encounter counter for the pokemon that appeared
    let trio = [wildEncounter1.id, wildEncounter2.id, wildEncounter3.id]
    for (const encounterCounter of trio) {
        addEncounters(encounterCounter, pokeResults);
    }
    
     while (wildEncounter1.id === wildEncounter2.id || wildEncounter1.id === wildEncounter3.id || wildEncounter2.id === wildEncounter3.id) {
        wildEncounter2 = getRandomPokemon(collectWildPokemon);
        wildEncounter3 = getRandomPokemon(collectWildPokemon);
    }

    const pokeLabels = document.querySelectorAll('label');
    let inputs = [];
    let names = [];
    let images = [];
    for (let i = 0; i <= 2; i++) {
        names[i] = pokeLabels[i].children[0];
        inputs[i] = pokeLabels[i].children[1];
        images[i] = pokeLabels[i].children[2];
    }
 
    inputs[0].value = wildEncounter1.id;
    images[0].src = wildEncounter1.url_image;
    names[0].textContent = wildEncounter1.pokemon;
    inputs[0].addEventListener('click', choosePokemonEvent);

    inputs[1].value = wildEncounter2.id
    images[1].src = wildEncounter2.url_image;
    names[1].textContent = wildEncounter2.pokemon;
    inputs[1].addEventListener('click', choosePokemonEvent);

    inputs[2].value = wildEncounter3.id
    images[2].src = wildEncounter3.url_image;
    names[2].textContent = wildEncounter3.pokemon;
    inputs[2].addEventListener('click', choosePokemonEvent);

    inputs[0].disabled = false;
    inputs[1].disabled = false;
    inputs[2].disabled = false;
}

function choosePokemonEvent(e) {
    capturedPokemon++;
    const pokeResults = resultsWildPokemon;
    const chosenPokemon = e.target.value;
    const pokeInResults = findById(pokeResults, Number(chosenPokemon));
    console.log(pokeInResults);
    
    if (pokeInResults) {
        pokeInResults.captured++;
    }
    const stringyCart = JSON.stringify(pokeResults);
    localStorage.setItem(POKESTATS, stringyCart);

    const pokeLabels = document.querySelectorAll('label');
    let inputs = [];

    for (let i = 0; i <= 2; i++) {
        inputs[i] = pokeLabels[i].children[1];
    }

    inputs[0].disabled = true;
    inputs[1].disabled = true;
    inputs[2].disabled = true;
}



// function setPage() {
setPage();