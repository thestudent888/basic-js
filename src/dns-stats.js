const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
let domains = [
   'code.yandex.ru',
   'music.yandex.ru',
   'yandex.ru'
   ]

function getDNSStats( domains ) {
  const result = {};

  for (const domain of domains) {
    const parts = domain.split('.').reverse();
    let key = '';
    for (const part of parts) {
      key = `${key}.${part}`;
      console.log(key);
      if (result[key]) result[key]++;
      else result[key] = 1;
    }
  }
  return result
}

console.log(getDNSStats(domains));

module.exports = {
  getDNSStats
};
