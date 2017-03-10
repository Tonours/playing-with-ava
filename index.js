const players = [
  {name: 'joe', age: 19},
  {name: 'bob', age: 20},
  {name: 'tom', age: 21},
  {name: 'sam', age: 22},
  {name: 'tim', age: 23}
];

/**
 * displayPlayersName - Get players name
 *
 * @param  {Array}  [players=[]] - Array of Object which represent player
 * @return {Array}  Array of String equal to player name
 */
const displayPlayersName = (players = []) => {
  return players.map(player => player.name);
};

/**
 * getPlayersAverageAge - Get players average age
 *
 * @param  {Array}  [players=[]] - Array of Object which represent player
 * @return {[type]} Return a Number which is the age of players
 */
const getPlayersAverageAge = (players = []) => {
  return players
    .map(player => player.age)
    .reduce((acc, age) => {
      return acc + age;
    }, 0) / players.length;
};

module.exports = {displayPlayersName, getPlayersAverageAge, players};
