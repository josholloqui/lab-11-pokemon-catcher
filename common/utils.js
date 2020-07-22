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
    let cart = JSON.parse(stringyCart) || [];
    
    return cart;
}

export function addEncounters(id) {
    const localPokemon = getCart();
    const find = findById(localPokemon, id.id);

    if (find) {
        find.encountered++;
    } else {
        const newEncounter = {
            id: id.id,
            name: id.pokemon,
            captured: 0,
            encountered:1
        };
        localPokemon.push(newEncounter);
    }
    const stringyCart = JSON.stringify(localPokemon);
    localStorage.setItem(POKESTATS, stringyCart);
}

export function addCaptured(id) {
    const localPokemon = getCart();
    const find = findById(localPokemon, id);

    if (find) {
        find.captured++;
    }
    const stringyCart = JSON.stringify(localPokemon);
    localStorage.setItem(POKESTATS, stringyCart);
}

export function mungeNames(localPokemon) {
    const names = [];

    for (let i = 0; i < localPokemon.length; i++) {
        const pokemon = localPokemon[i];

        names.push(pokemon.name);
    }
    return names;
}

export function mungeCaptured(localPokemon) {
    const captures = [];

    for (let i = 0; i < localPokemon.length; i++) {
        const pokemon = localPokemon[i];

        captures.push(pokemon.captured);
    }
    return captures;
}

export function mungeEncountered(localPokemon) {
    const encounters = [];

    for (let i = 0; i < localPokemon.length; i++) {
        const pokemon = localPokemon[i];

        encounters.push(pokemon.encountered);
    }
    return encounters;
}