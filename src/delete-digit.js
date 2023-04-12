const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */

let digit = 152;

function deleteDigit( n ) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const digits = n.toString().split('');
  let max = 0;
  for (let i = 0; i < digits.length; i++) {
    let tmp = [...digits];
    tmp.splice(i, 1);
    const num = parseInt(tmp.join(''));
    if(num > max) max = num
  }
  return max
}


module.exports = {
  deleteDigit
};
