const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!members || !members.length) {
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
