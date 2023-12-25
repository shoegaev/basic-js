const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    if (isDirect) {
      this.isDirect = true
    } else {
      this.isDirect = false
    }
  }
  
  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!')
    }
    let i = 0;
    let y = 0;
    let result = '';
    while (i < message.length) {
      if (message[i].match(/[a-zA-Z]/i) !== null) {
        // console.log('прошло проверку ' + message[i])
        result += String.fromCharCode((message.toUpperCase().charCodeAt(i)
          + key.toUpperCase().charCodeAt(y) - 2 * 65) % 26 + 65)
      } else {
        // console.log('НЕ прошло проверку ' + message[i])
        result += message[i];
        i += 1;
        continue
      }

      i += 1;
      y = ++y % key.length
    }
    if (this.isDirect) {
      return result;
    }
    return result.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) {
      throw new Error('Incorrect arguments!')
    }
    let i = 0;
    let y = 0;
    let result = '';
    while (i < encryptedMessage.length) {
      if (encryptedMessage[i].match(/[a-zA-Z]/i) !== null) {
        // console.log('прошло проверку ' + encryptedMessage[i])
        result += String.fromCharCode(90 - (25 - (encryptedMessage.toUpperCase().charCodeAt(i) - key.toUpperCase().charCodeAt(y))) % 26)
      } else {
        // console.log('НЕ прошло проверку ' + encryptedMessage[i])
        result += encryptedMessage[i];
        i += 1;
        continue
      }
      i += 1;
      y = ++y % key.length
    }
    if (this.isDirect) {
      return result;
    }
    return result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
