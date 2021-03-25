const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(!sampleActivity || typeof sampleActivity !== 'string' || MODERN_ACTIVITY < sampleActivity || sampleActivity < 0) {
    return false;
  }
  sampleActivity = parseFloat(sampleActivity);
  if(!sampleActivity) {
    return false;
  }
  let k = 0.693 / HALF_LIFE_PERIOD;
  let t = Math.log(MODERN_ACTIVITY / sampleActivity) / k;
  return Math.ceil(t)
};
