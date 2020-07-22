import pokemonArray from '../data/pokemon.js';
import { findById } from '../common/utils.js';
// import { example } from '../example.js';

const test = QUnit.test;

test('should find pokemon by its id', assert => {
    //Arrange
    // Set up your arguments and expectations
    const pokemonData = pokemonArray;
    const id0 = 1;
    const id1 = 5;
    const id2 = 17;

    const expected0 = 'Bulbasaur';
    const expected1 = 'Charmeleon';
    const expected2 = 'Kakuna';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const findPokemon0 = findById(pokemonData, id0);
    const findPokemon1 = findById(pokemonData, id1);
    const findPokemon2 = findById(pokemonData, id2);

    //Expect
    // Make assertions about what is expected versus the actual result
    assert.equal(findPokemon0.pokemon, expected0);
    assert.equal(findPokemon1.pokemon, expected1);
    assert.equal(findPokemon2.pokemon, expected2);
});

