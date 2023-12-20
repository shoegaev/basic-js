const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let i = 0;
  
  while (i < names.length) {
    let y = 1;
    let count = 0
    while (i + y < names.length) {
      if (names[i] === names[i + y]) {
        count += 1;
        names[i + y] = names[i + y] + '(' + count + ')'
      }
      y += 1;

    }

    i += 1;
  }

  return names;
}

module.exports = {
  renameFiles
};
