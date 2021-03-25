const CustomError = require("../extensions/custom-error");

const chainMaker = {
  valueLink: [],
  getLength() {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  addLink(value = '') {
    this.valueLink.push(`( ${value} )~~`)
    return this;
  },
  removeLink(position) {
    if(!this.valueLink[position - 1]) {
      this.valueLink = []
      throw new Error("This position doesn't exist")
    }
    else {
      this.valueLink.splice(position - 1, 1);
      return this
    }
    // remove line with error and write your code here
  },
  reverseChain() {
    this.valueLink.reverse();
    return this
  },
  finishChain() {
    let newString = this.valueLink.join('');
    this.valueLink = [];
    return newString.slice(0, newString.length - 2)
  }
};

module.exports = chainMaker;
