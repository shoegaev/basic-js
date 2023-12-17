const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  // let i = 0;
  // let result = 0;
  // while (i < matrix.length) {
  //   let y = 0;
  //   while (y < matrix[i].length) {
  //     if (matrix[i][y] === '^^') {
  //       result += 1;
  //     }
  //     y+= 1;
  //   }
  //   i+= 1;
  // }
  // return result;
  let result = 0;
  for (array of matrix) {
    for (variable of array) {
      if (variable === '^^') {
        result += 1;
      }
    }
  }
  return result;
}

module.exports = {
  countCats
};
