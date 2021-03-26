const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(isNotReverse = true) {
    this._isNotReverse = isNotReverse;
  }
  encrypt(word, key) {
    if (!word || !key) {
      throw new Error('error')
    }
    let wordInUpperCase = word.toUpperCase();
    let keyInUpperCase = key.toUpperCase().repeat(Math.ceil(word.length / key.length));

    let arrayLetters = wordInUpperCase.split('');
    let arrayLettersKey = keyInUpperCase.split('');
    let newArray = [];

    for (let i = 0; i < arrayLetters.length; i++) {
      arrayLetters[i] = arrayLetters[i].codePointAt()
      arrayLettersKey[i] = arrayLettersKey[i].codePointAt()
    }

    for (let i = 0, j = 0; i < arrayLetters.length; i++, j++) {
      if (arrayLetters[i] > 90 || arrayLetters[i] < 65) {
        newArray[i] = arrayLetters[i]
        j--;
        continue;
      }
      newArray[i] = arrayLetters[i] + arrayLettersKey[j];
      if (newArray[i] > 155) {
        newArray[i] = newArray[i] - 91;
      } else {
        newArray[i] = newArray[i] - 65;
      }
    }

    for (let i = 0; i < newArray.length; i++) {
      newArray[i] = String.fromCodePoint(newArray[i])
    }
    if (!this._isNotReverse) {
      return newArray.reverse().join('')
    }
    return newArray.join('')
  }

  decrypt(word, key) {
    if (!word || !key) {
      throw new Error('error')
    }

    let wordInUpperCase = word.toUpperCase();
    let keyInUpperCase = key.toUpperCase().repeat(Math.ceil(word.length / key.length));

    let arrayLetters = wordInUpperCase.split('');
    let arrayLettersKey = keyInUpperCase.split('');
    let newArray = [];

    for (let i = 0; i < arrayLetters.length; i++) {
      arrayLetters[i] = arrayLetters[i].codePointAt()
      arrayLettersKey[i] = arrayLettersKey[i].codePointAt()
    }

    for (let i = 0, j = 0; i < arrayLetters.length; i++, j++) {
      if (arrayLetters[i] > 90 || arrayLetters[i] < 65) {
        newArray[i] = arrayLetters[i]
        j--;
        continue;
      }
      newArray[i] = arrayLetters[i] - arrayLettersKey[j];
      if (newArray[i] >= 0) {
        newArray[i] = newArray[i] + 65;
      } else {
        newArray[i] = newArray[i] + 91;
      }
    }

    for (let i = 0; i < newArray.length; i++) {
      newArray[i] = String.fromCodePoint(newArray[i])
    }

    if (!this._isNotReverse) {
      return newArray.reverse().join('')
    }

    return newArray.join('')
  }
}

module.exports = VigenereCipheringMachine;


