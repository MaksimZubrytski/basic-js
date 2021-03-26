const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (typeof str !== 'string') {
    str = String(str);
  }
  if (!options.separator) {
    options.separator = "+"
  }
  
  let finishedValue = '';
  let middleWareString = ''

  if (options.hasOwnProperty("addition")) {
    if (typeof options.addition !== 'string') {
      options.addition = String(options.addition);
    }
    if (!options.additionSeparator) {
      options.additionSeparator = "|"
    }
    middleWareString += str;
    middleWareString += options.addition;
    for (let i = 0; i < options.additionRepeatTimes - 1; i ++) {
      middleWareString += options.additionSeparator;
      middleWareString += options.addition;
    }
    str = middleWareString;
  }

  for (let i = 0; i < options.repeatTimes - 1; i++) {
    finishedValue += str;
    finishedValue += options.separator;
  }

  return finishedValue +=str
}
