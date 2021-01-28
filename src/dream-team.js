const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(typeof(members) !=="object" || members === null || members.length === 0 || !members[0]) {
    return false
  }
  let newArray = [];
  for(let el of members) {
    if(typeof(el) === "string" && el !== false) {
    newArray.push(el.trim().toLowerCase())
    }
  }
  let sortArrayMembers = newArray.sort();
  let nameTeam = ""
  for(let el of sortArrayMembers) {
    nameTeam += el[0];
  }
  if(!nameTeam) {
    return false
  }
  return nameTeam.toUpperCase();
};
