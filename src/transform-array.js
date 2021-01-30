const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!(arr instanceof Array)) {
    throw new Error('Array is not found')
  }
  let newArr = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === '--discard-next') {
      i++;
      continue;
    }
    else if(arr[i] === '--discard-prev') {
      if(arr[i - 2] === '--discard-next') {
        continue;
      }
      else {
      newArr.pop();
      continue;
      }
    }
    else if(arr[i] === '--double-next') {
      if(typeof(arr[i + 1]) === 'undefined') {
        continue;
      }
      else {
        newArr.push(arr[i + 1]);
        continue;
      }
    }
    else if(arr[i] === '--double-prev') {
      if(typeof(arr[i - 1]) === 'undefined' || arr[i - 2] === '--discard-next') {
        continue;
      }
      else {
        newArr.push(arr[i - 1])
        continue;
      }
    }
    newArr.push(arr[i])
  }
  return newArr;
};