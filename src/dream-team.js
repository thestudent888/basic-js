const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam( members ) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if(!Array.isArray(members) || !members.length) return false;
  let heroes = members.filter(hero => typeof hero === 'string');
  if(!heroes.length) return false;
  return heroes.map(hero => hero.trim()[0].toUpperCase()).sort((a,b) => a > b ? 1:-1).join('');


}

module.exports = {
  createDreamTeam
};
