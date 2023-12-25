const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

const chainMaker = {
  getLength() {
    return this.hasOwnProperty(chain) ? this.chain.length : 0;
  },
  addLink(value = '') {
    if (this.hasOwnProperty('chain')) {
      this.chain.push(String(value))
    } else {
      this.chain = [String(value)]
    }
    return this
  },
  removeLink(position) {
    if (!(typeof position === 'number') || position > this.chain.length ||
      position < 1) {
      delete chainMaker.chain
      throw new Error('You can\'t remove incorrect link!');
    }
    this.chain.splice(position - 1, 1)
    return this
  },
  reverseChain() {
    if (this.hasOwnProperty('chain')) {
      this.chain = this.chain.reverse()
    }
    return this
  },
  finishChain() {
    let resultChain = '( ' + this.chain.join(' )~~( ') + ' )'
    delete chainMaker.chain
    return resultChain
  }
};

module.exports = {
  chainMaker
};
