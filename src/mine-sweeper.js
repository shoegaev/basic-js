const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let i = 0;
  let result = []
  while (i < matrix.length) {
    result[i] = []
    let y = 0;
    while (y < matrix[i].length) {
      result[i][y] = 0
      if (matrix[i][y - 1] === true) {
        result[i][y] += 1;
      }
      if (matrix[i][y + 1] === true) {
        result[i][y] += 1;
      }
      if (matrix[i - 1]?.[y] === true) {
        result[i][y] += 1;
      }
      if (matrix[i - 1]?.[y - 1] === true) {
        result[i][y] += 1;
      }
      if (matrix[i - 1]?.[y + 1] === true) {
        result[i][y] += 1;
      }
      if (matrix[i + 1]?.[y] === true) {
        result[i][y] += 1;
      }
      if (matrix[i + 1]?.[y - 1] === true) {
        result[i][y] += 1;
      }
      if (matrix[i + 1]?.[y + 1] === true) {
        result[i][y] += 1;
      }
      y += 1;
    }
    i += 1;
  }

  return result;
}

module.exports = {
  minesweeper
};
