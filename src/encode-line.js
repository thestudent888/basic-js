const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine( str ) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let result = '';
  let count = 1;

  for(let i=0; i < str.length; i++) {
    if(str[ i + 1 ] === str[ i ]) {
      count++;
    } else {
      result += count > 1 ? count + str[i] : str[i];
      count = 1;
    }
  }

  return result;
}



module.exports = {
  encodeLine
};
