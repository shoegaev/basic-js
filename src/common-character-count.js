const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let str1 = s1;
  let str2 = s2;
  let i = 0;
  let result = 0;
  while (i < str1.length) {
    let y = 0;
    while (y < str2.length){
      if (str1[i] === str2[y]) {
        result += 1;
        str2 = str2.slice(0, y) + str2.slice(y + 1, str2.length)
        break;
      }
      y += 1;
    }
    i += 1;
  }
  return result;
}

module.exports = {
  getCommonCharacterCount
};
