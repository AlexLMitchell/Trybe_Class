// sum.js
const sum = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }
  return a + b;
};

module.exports = sum;

// myIndexOf.js
const myIndexOf = (arr, item) => arr.findIndex((element) => element === item);

module.exports = myIndexOf;

// mySum.js
const mySum = (arr) => arr.reduce((total, current) => total + current);

module.exports = mySum;

// myRemove.js
const myRemove = (arr, item) => arr.filter((element) => element !== item);

module.exports = myRemove;

// myRemoveWithoutCopy.js
const myRemoveWithoutCopy = (arr, item) =>
  arr.forEach((element, index, array) =>
    element === item ? array.splice(index, 1) : undefined
  );

module.exports = myRemoveWithoutCopy;

// myFizzBuzz.js
const myFizzBuzz = (num) => {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
};
module.exports = myFizzBuzz;

// isAbove.js
const isAbove = (num1, num2) => num1 > num2;
module.exports = isAbove;

// getChange.js
const getChange = (payable, paid) => {
  let coins = [200, 100, 50, 20, 10, 5, 2, 1];
  let change = [];
  let length = coins.length;
  let remaining = paid - payable; // we reduce this below

  if (paid < payable) throw new Error('paid value is not enough');

  for (let i = 0; i < length; i++) {
    // loop through array of notes & coins:
    let coin = coins[i];

    let timesCoinFits = Math.floor(remaining / coin); // no partial coins
    if (timesCoinFits >= 1) {
      // check coin fits into the remaining amount

      for (let j = 0; j < timesCoinFits; j++) {
        // add coin to change x times
        change.push(coin);
        remaining = remaining - coin; // subtract coin from remaining
      }
    }
  }
  return change;
};
