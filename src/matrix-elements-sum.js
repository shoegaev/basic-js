const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let matrix1 = matrix;
  let i = 0;
  let result = 0;
  while (i < matrix1.length) {
    let y = 0;
    while (y < matrix1[i].length) {
      if ((matrix1[i][y] === 0) && (i < matrix.length - 1) ) {
        matrix1[i + 1][y] = 0
      }
      result += matrix1[i][y]
      y += 1
    }
    i += 1
  }
  return result
}

module.exports = {
  getMatrixElementsSum
};
