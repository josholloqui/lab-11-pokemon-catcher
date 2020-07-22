import pokemonArray from '../data/pokemon.js';
import { findById, mungeCaptured, mungeEncountered, mungeNames } from '../common/utils.js';
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

const pokeData = [
    {
        name: 'pikachu',
        captured: 4,
        encountered: 8
    }, {
        name: 'snorlax',
        captured: 1,
        encountered: 1
    }, {
        name: 'slowbro',
        captured: 99,
        encountered: 99
    }, {
        name: 'meowth',
        captured: 1,
        encountered: 11
    }
];

test('should take in an array and return their names only', assert => {
    //Arrange
    // Set up your arguments and expectations
    const expected = ['pikachu', 'snorlax', 'slowbro', 'meowth'];

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = mungeNames(pokeData);
    //Expect
    // Make assertions about what is expected versus the actual result
    assert.deepEqual(expected, actual);
});

test('should take in an array and return their captured numbers only', assert => {
    //Arrange
    // Set up your arguments and expectations
    const expected = [4, 1, 99, 1];

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = mungeCaptured(pokeData);
    //Expect
    // Make assertions about what is expected versus the actual result
    assert.deepEqual(expected, actual);
});

test('should take in an array and return their encountered numbers only', assert => {
    //Arrange
    // Set up your arguments and expectations
    const expected = [8, 1, 99, 11];

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = mungeEncountered(pokeData);
    //Expect
    // Make assertions about what is expected versus the actual result
    assert.deepEqual(expected, actual);
});
