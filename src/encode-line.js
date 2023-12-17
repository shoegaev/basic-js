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
function encodeLine(str) {
  let result = ''
  let i = 0;
  while (i < str.length) {
    let count = 1;
    let y = 0;
    while (y + i < str.length) {
      if (str[i + y] === str[i + y + 1]) {
        count += 1;
        y += 1;
      } else {
        break
      }
    }
    if (count === 1) {
      result += str[i]
    } else {
      result = result + String(count) + str[i]
    }
    i += count;
  }

  return result
}

module.exports = {
  encodeLine
};
