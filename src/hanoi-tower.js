const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = 2 ** disksNumber - 1;
  let turnsSpeedInSecond = turnsSpeed / 3600;
  let secondsToSolve = Math.floor(turns / turnsSpeedInSecond);
  return { turns, seconds: secondsToSolve }
};
