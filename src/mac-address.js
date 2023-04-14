const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six tmp of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
let n = 'Z1-1B-63-84-45-E6';

function isMAC48Address( n ) {
  let tmp = n.split('-');
  if (tmp.length !== 6) return false;
  for (let i = 0; i < tmp.length; i++) {
    if (tmp[i].length !== 2) return false;
    for (let j = 0; j < tmp[i].length; j++) {
      const charCode = tmp[i].charCodeAt(j);
      if (
        !(charCode >= 48 && charCode <= 57) &&
        !(charCode >= 65 && charCode <= 70)
      )
        return false;
    }
  }
  return true;

}

module.exports = {
  isMAC48Address
};
