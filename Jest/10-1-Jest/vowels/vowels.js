// vowels.js
const vowels = str => (str.match(/[aeiou]/gi) || []).length;

module.exports = vowels;