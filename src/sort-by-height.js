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
function sortByHeight(arr) {

  let i = 0;
  let arrChanged = []
  let removedElementIndexes = []

  while (i < arr.length) {
    if (arr[i] === -1) {
      removedElementIndexes.push(i);
      i += 1;
    } else {
      arrChanged.push(arr[i])
      i += 1;
    }
  }

  console.log('1:массив индексов')
  console.log(removedElementIndexes)

  console.log('2:Массив без -1')
  console.log(arrChanged)

  arrChanged.sort((a, b) => a - b)

  console.log('3:Отсортированный массив без -1')
  console.log(arrChanged)

  i = 0;


  while (i < removedElementIndexes.length) {
    console.log('i=' + i)
    if (removedElementIndexes[i] === 0) {
      arrChanged.unshift(-1);
    } else if (removedElementIndexes[i] === arr.length - 1) {
      arrChanged.push(-1);
    } else {
      arrChanged.splice(removedElementIndexes[i], 0, -1);
    }
    i += 1;
  }

  return arrChanged
}

module.exports = {
  sortByHeight
};
