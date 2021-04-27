const {Pokemon} = require('./pokemon.js');
const {Move} = require('./move.js');

let moves = {};

moves['Earthquake'] = new Move ('Earthquake', 30, 5, 'Ground');
moves['Fire Blast'] = new Move ('Fire Blast', 30, 5, 'Fire');
moves['Scald'] = new Move ('Scald', 20, 7, 'Water');
moves['Thunderbolt'] = new Move ('Thunderbolt', 10, 10,'Electric');
moves['Fissure'] = new Move ('Fissure', 40, 5, 'Ground');
moves['Ice Beam'] = new Move ('Ice Beam', 20, 7, 'Ice');
moves['Water Gun'] = new Move ('Water Gun', 10, 10, 'Water');
moves['Leaf Storm'] = new Move ('Leaf Storm', 40, 5, 'Ground');
moves['Protect'] = new Move ('Protect', 0, 5);
moves['Charge Up'] = new Move ('Charge Up', 0, 5);

let pokemons = {};

pokemons['Entei'] = new Pokemon('Entei', 'Fire', 150, [moves['Fire Blast'], moves['Earthquake']]);
pokemons['Milotic'] = new Pokemon('Milotic', 'Water', 200, [moves['Scald'], moves['Ice Beam']]);
pokemons['Tarterra'] = new Pokemon('Tarterra', ['Grass', 'Ground'], 220, [moves['Dig'], moves['Leaf Storm']]);
pokemons['Pikachu'] = new Pokemon('Pikachu', 'Electric', 120, [moves['Thunderbolt'], moves['Dig']]);
pokemons['Groudon'] = new Pokemon('Groudon', 'Ground', 150, [moves['Fissure'], moves['Fire Blast']]);
pokemons['Laplas'] = new Pokemon('Laplas', ['Ice', 'Water'], 190, [moves['Ice Beam'], moves['Scald']]);
pokemons['Stunfisk'] = new Pokemon('Stunfisk', ['Ground', 'Electric'], 130, [moves['Water Gun'], moves['Earthquake']]);

