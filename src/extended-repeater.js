const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * str is a string to repeat;
options is an object of options, that contains properties:
repeatTimes sets the number of repetitions of the str;
separator is a string separating repetitions of the str;
addition is an additional string that will be added to each repetition of the str;
additionRepeatTimes sets the number of repetitions of the addition;
additionSeparator is a string separating repetitions of the addition.
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {

  let {separator = '+', additionSeparator = '|', additionRepeatTimes = 1,
   addition = '', repeatTimes = 1} = options;

  let additionElement = '';
  let i = 1; 
  while (i <= additionRepeatTimes) {
    if (i === 1) {
      additionElement += addition
    } else {
      additionElement += additionSeparator + addition
    }
    i += 1;
  };

  let result = '';
  i = 1;
  while (i <= repeatTimes) {
    if (i === 1) {
      result += str + additionElement
    } else {
      result += separator + str + additionElement
    }
    i += 1;
  }
  
  return result;
}

module.exports = {
  repeater
};
