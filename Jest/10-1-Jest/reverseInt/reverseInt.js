// reverseInt.js
const reverseInt = num => {
    const invertedString = Math.abs(num).toString().split('')
      .map((_, index, arr) => arr[arr.length - index - 1]).join('');
  
    const invertedAbsNum = parseInt(invertedString);
    return num >= 0 ? invertedAbsNum : -invertedAbsNum
  }
  
  module.exports = reverseInt;