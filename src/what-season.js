const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    if(!date) {
        return 'Unable to determine the time of year!'
    }
    if(date instanceof Date === false || !date.getTimezoneOffset()) {
        throw new Error('error')
    }
  let numberMonth = date.getMonth();
  if(numberMonth === 0 || numberMonth === 1 || numberMonth === 11) {
      return "winter"
  }
  else if (numberMonth === 2 || numberMonth === 3 || numberMonth === 4) {
      return "spring"
  }
  else if (numberMonth === 5 || numberMonth === 6 || numberMonth === 7) {
      return "summer"
  }
  else if (numberMonth === 8 || numberMonth === 9 || numberMonth === 10) {
      return "autumn"
  }
    
};
