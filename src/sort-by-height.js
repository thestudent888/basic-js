const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
let arr = [-1, 150, 190, 170, -1, -1, 160, 180];

function sortByHeight( arr ) {
  const sortedArr = arr.filter(item => item !== -1).sort((a,b) => a - b);
  let index = 0;
  return arr.map((el) => (el === -1 ? -1 : sortedArr[index++]));
}

console.log(sortByHeight(arr))

module.exports = {
  sortByHeight
};
