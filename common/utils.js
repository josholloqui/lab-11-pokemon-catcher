import { POKESTATS } from './constants.js';

export function pokemonStats() {
    const stringyCart = localStorage.getItem(POKESTATS);
    let cart = JSON.parse(stringyCart) || [];
    
    return cart;
}

export function getRandomPokemon(pokemonArray) {
    const randomIndex = Math.floor(Math.random() * pokemonArray.length);

    return pokemonArray[randomIndex];
}