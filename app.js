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

game.party.push(grassPokemon[1], grassPokemon[2], grassPokemon[3]);

console.log(game.party);


//Execise 6

for (let i = 0; i < game.gyms.length; i++) {
  if (game.gyms[i].difficulty < 3) {
    game.gyms[i].completed = true;
  }
}

console.log(game.gyms);

//Exercise 7 

game.party.splice(0, 1, pokemon[1]);

console.log(game.party);

//Exercise 8
for (let i = 0; i < game.party.length; i++) {
  console.log(game.party[i].name);
}

//Exercise 9
for (let i=0; i < pokemon.length; i++) {
  if (pokemon[i].starter === true) {
    console.log(pokemon[i].name);
  }
}


//Exercise 10
game.catchPokemon = function (pokemonObj) {
  game.party.push(pokemonObj);
};
game.catchPokemon(pokemon[24]);

console.log(game.party);

//Exercise 11
game.catchPokemon = function (pokemonObj) {
  game.party.push(pokemonObj);

  for (let i = 0; i < game.items.length; i++) {
    if (game.items[i].name === "pokeball") {
      game.items[i].quantity -= 1;
    }
  }
};

game.catchPokemon(pokemon[53]);

console.log(game.items);

//Exercise 12
for (let i = 0; i < game.gyms.length; i++) {
  if (game.gyms[i].difficulty < 6) {
    game.gyms[i].completed = true;
  }
}

console.log(game.gyms);


//Exercise 13
game.gymStatus = function () {
  const gymTally = {
    completed: 0,
    incomplete: 0,
  };

  for (let i = 0; i < game.gyms.length; i++) {
    if (game.gyms[i].completed === true) {
      gymTally.completed += 1;
    } else {
      gymTally.incomplete += 1;
    }
  }

  console.log(gymTally);
};

game.gymStatus();

//Exercise 14

game.partyCount = function () {
  return game.party.length;
};

console.log(game.partyCount());

//Exercise 15
for (let i = 0; i < game.gyms.length; i++) {
  if (game.gyms[i].difficulty < 8) {
    game.gyms[i].completed = true;
  }
}

console.log(game);

 