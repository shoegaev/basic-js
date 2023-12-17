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
function getDNSStats(domains) {
  let result = {};

  domains.forEach((element, index) => {
    domains[index] = element.split('.')
  })

  let i = 0;
  while (i < domains.length) {

    let y = 0;
    let currentDNS = '';
    while (y < domains[i].length) {
      if (y === 0) {
        currentDNS = '.' + domains[i][domains[i].length - 1 - y];
      } else {
        currentDNS = currentDNS + '.' + domains[i][domains[i].length - 1 - y];
      }
      if (result[currentDNS] === undefined) {
        result[currentDNS] = 1;
      } else (result[currentDNS] += 1)
      y += 1;
    }

    i += 1;
  }
  return result;
}

module.exports = {
  getDNSStats
};
