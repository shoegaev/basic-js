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
function deleteDigit(n) {
  const numberToString = String(n)
  let arr = [];
  let i = 0;
  while (i < numberToString.length) {
    arr.push(Number(numberToString.slice(0, i) + numberToString.slice(i+1, numberToString.length)));
    i += 1;
  }

  return Math.max(...arr)
}

module.exports = {
  deleteDigit
};
