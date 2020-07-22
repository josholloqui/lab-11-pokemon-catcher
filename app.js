import { getRandomPokemon, addEncounters, getCart, addCaptured } from './common/utils.js';
import { POKEMON } from './common/constants.js';
import pokemonData from './data/pokemon.js';
// initialize state
let capturedPokemon = 0;

let wildPokemon = JSON.parse(localStorage.getItem(POKEMON));

if (!wildPokemon) {
    localStorage.setItem(POKEMON, JSON.stringify(pokemonData));

    wildPokemon = JSON.parse(localStorage.getItem(POKEMON));
}

const pokeBackpack = getCart();
pokeBackpack;
const collectWildPokemon = wildPokemon.slice();
const notEncountered = wildPokemon.slice();

// set event listeners to update state and DOM
function setPage() {
    if (capturedPokemon === 10) {
        alert('You have caught 10 Pokemon! Lets take a look!');
        window.location.replace('./results/index.html');
    }
    let wildEncounter1 = getRandomPokemon(collectWildPokemon);
    let wildEncounter2 = getRandomPokemon(collectWildPokemon);
    let wildEncounter3 = getRandomPokemon(collectWildPokemon);
    // Add to the encounter counter for the pokemon that appeared
    let trio = [wildEncounter1, wildEncounter2, wildEncounter3];
    for (const encounterCounter of trio) {
        addEncounters(encounterCounter);
    }
    
    while (wildEncounter1.id === wildEncounter2.id || wildEncounter1.id === wildEncounter3.id || wildEncounter2.id === wildEncounter3.id) {
        wildEncounter2 = getRandomPokemon(collectWildPokemon);
        wildEncounter3 = getRandomPokemon(collectWildPokemon);
    }
    
    for (let i = 0; i < notEncountered.length; i++) {
        if (trio[0] === notEncountered[i].id || trio[1] === notEncountered[i].id || trio[2] === notEncountered[i].id) {
            notEncountered.splice([i], 1);
        }
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

    inputs[1].value = wildEncounter2.id;
    images[1].src = wildEncounter2.url_image;
    names[1].textContent = wildEncounter2.pokemon;
    inputs[1].addEventListener('click', choosePokemonEvent);

    inputs[2].value = wildEncounter3.id;
    images[2].src = wildEncounter3.url_image;
    names[2].textContent = wildEncounter3.pokemon;
    inputs[2].addEventListener('click', choosePokemonEvent);
}

function choosePokemonEvent(e) {
    const chosenPokemon = e.target.value;

    addCaptured(Number(chosenPokemon));

    capturedPokemon++;

    setPage();
}

setPage();