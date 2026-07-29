const { populateParams } = require('expo-router/build/fork/getStateFromPath-forks');
const pokemon = require('./data.js');


const game = {
  party: [],
  gyms: [
    { location: "Pewter City", completed: false, difficulty: 1 },
    { location: "Cerulean City", completed: false, difficulty: 2 },
    { location: "Vermilion City", completed: false, difficulty: 3 },
    { location: "Celadon City", completed: false, difficulty: 4 },
    { location: "Fuchsia City", completed: false, difficulty: 5 },
    { location: "Saffron City", completed: false, difficulty: 6 },
    { location: "Cinnabar Island", completed: false, difficulty: 7 },
    { location: "Viridian City", completed: false, difficulty: 8 },
  ],
  items: [
    { name: "potion", quantity: 4 },
    { name: "pokeball", quantity: 8 },
    { name: "rare candy", quantity: 99 },
  ],
};


// Exercise 3
game.difficulty = "Easy";

//Exercise 4

const starter = pokemon.find(function(pokemon){
  return pokemon.starter === true;
});
game.party.push(starter);

console.log(game);


// Exercise 5

const grassPokemon = pokemon.filter(function (pokemon) {
  return pokemon.type === "grass";
});

game.party.push(grassPokemon[0], grassPokemon[1], grassPokemon[2]);

console.log(game.party);


//Execise 6

for (let i = 0; i < game.gyms.length; i++) {
  if (game.gyms[i].difficulty < 3) {
    game.gyms[i].completed = true;
  }
}

console.log(game.gyms);