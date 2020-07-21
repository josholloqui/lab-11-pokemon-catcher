import { POKESTATS } from './constants.js'

let resultsWildPokemon = JSON.parse(localStorage.getItem(POKESTATS));

export function getRandomPokemon(pokemonArray) {
    const randomIndex = Math.floor(Math.random() * pokemonArray.length);

    return pokemonArray[randomIndex];
}

export function findById(someArray, someId) {
    let match = null;

    for (let i = 0; i < someArray.length; i++) {
        if (someId === someArray[i].id) {
            match = someArray[i];
        }
    } 
      
    return match;
}

export function addEncounters(id, someArray) {
    const pokeResults = resultsWildPokemon;
    const find = findById(someArray, id);

    if (find) {
        find.encountered++;
    }
    const stringyCart = JSON.stringify(pokeResults);
    localStorage.setItem(POKESTATS, stringyCart);
}
