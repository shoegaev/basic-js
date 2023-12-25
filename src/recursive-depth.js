const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let i = 0;
    let result = [1];
    while (i < arr.length) {
      if (i > 0) {
        result.push(1)
      }
      if (Array.isArray(arr[i])) {
        result[i] = 1 + this.calculateDepth(arr[i])
      }
      i += 1;
    }
    return Math.max(...result)
  }
}

module.exports = {
  DepthCalculator
};
