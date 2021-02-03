const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options = {repeatTimes, separator, addition, additionRepeatTimes, additionSeparator}) {
  if(typeof options.separator === "undefined") {
    options.separator = "+"
  }
  if(typeof options.additionSeparator === "undefined") {
    options.additionSeparator = "|"
  }
  if(typeof str !== 'string' || typeof options.addition !== 'string') {
    str = String(str);
    options.addition = String(options.addition)
  }
  let newStr = "";
  if(options.repeatTimes) {
    for(let i = 0; i < options.repeatTimes; i++) {
      newStr += str;
      for(let j = 0; j < options.additionRepeatTimes; j++) {
        if(j === (options.additionRepeatTimes - 1)) {
          newStr += options.addition;
        } else {
          newStr += options.addition + options.additionSeparator;
        }
      }
      if(i === (options.repeatTimes - 1)) {
        continue
      }
      else {
        newStr += options.separator
      }
    }
    return newStr
  } else {
    if(options.additionRepeatTimes) {
      for(let j = 0; j < options.additionRepeatTimes; j++) {
        if(j === (options.additionRepeatTimes - 1)) {
          newStr += options.addition;
        } else {
          newStr += options.addition + options.additionSeparator;
        }
      }
      return newStr;
    }
    else {
      return str + options.addition
    }
  }
}