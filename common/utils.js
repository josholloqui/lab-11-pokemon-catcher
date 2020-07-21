import { POKESTATS } from './constants.js';

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

export function getCart() {
    const stringyCart = localStorage.getItem(POKESTATS);
    let cart = JSON.parse(stringyCart);
    
    return cart;
}

export function addEncounters(id, someArray) {
    const pokeResults = JSON.parse(localStorage.getItem(POKESTATS));
    const find = findById(someArray, id);

    if (find) {
        find.encountered++;
    }
    const stringyCart = JSON.stringify(pokeResults);
    localStorage.setItem(POKESTATS, stringyCart);
}
