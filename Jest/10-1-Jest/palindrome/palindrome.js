// palindrome.js
const palindrome = str => {
    for (let i = 0, j = str.length - 1; i <= j; i += 1, j -= 1) {
      if (str[i] !== str[j]) return false;
    }
    return true;
  }
  
  module.exports = palindrome;