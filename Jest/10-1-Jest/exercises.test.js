// sum.test.js
const sum = require('./sum');

describe('sum', () => {
  test('4 plus 5 equals 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  test('throws an error when a string is passed', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow();
  });

  test('0 plus 0 equals 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  test('error message is "parameters must be numbers"', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow(/parameters must be numbers/);
  });
});

// myIndexOf.test.js
const myIndexOf = require('./myIndexOf');

describe('myIndefOf', () => {
  const a = [1, 2, 3, 4];

  test('returns the item index when the array contains the item', () => {
    expect(myIndexOf(a, 3)).toBe(2);
  });

  test('return -1 if the array does not contain the item', () => {
    expect(myIndexOf(a, 5)).toBe(-1);
  });
});

// mySum.test.js
const mySum = require('./mySum');

describe('mySum', () => {
  test('the sum of the array [1, 2, 3, 4] is 10', () => {
    expect(mySum([1, 2, 3, 4])).toBe(10);
  });

  test('the sum of the array [1, -2, -3, 4] is 0', () => {
    expect(mySum([1, -2, -3, 4])).toBe(0);
  });
});

// myRemove.test.js
const myRemove = require('./myRemove');

describe('myRemove', () => {
  test('returns a new array without the item if the item belongs to it', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  test('returns the correct array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  test('does not change the passed array', () => {
    const arr = [1, 2, 3, 4];
    myRemove(arr, 1);
    expect(arr).toEqual([1, 2, 3, 4]);
  });

  test('returns an identical array if the item does not belong to it', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

// myRemoveWithoutCopy.test.js
const myRemoveWithoutCopy = require('./myRemoveWithoutCopy');

describe('myRemoveWithoutCopy', () => {
  test('returns the same array without the item if the item belongs to it', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  test('returns the correct array', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  test('changes the passed array', () => {
    const arr = [1, 2, 3, 4];
    myRemoveWithoutCopy(arr, 1);
    expect(arr).toEqual([2, 3, 4]);
  });

  test('returns an identical array if the item does not belong to it', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

// myFizzBuzz.test.js
const myFizzBuzz = require('./myFizzBuzz');

describe('myFizzBuzz', () => {
  test('returns `fizzbuzz` if the argument is divisible by 3 and 5', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  test('return `fizz` if the argument is divisible only by 3', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });

  test('return `fizz` if the argument is divisible only by 5', () => {
    expect(myFizzBuzz(25)).toBe('buzz');
  });

  test('returns the own argument if it is not disisible by 3 or 5', () => {
    expect(myFizzBuzz(17)).toBe(17);
  });

  test('returns `false` if the argument is not a number', () => {
    expect(myFizzBuzz('this_is_not_a_number')).toBeFalsy();
  });
});

// variableTest.test.js
const thereIs = '';

test('type of a defined variable is not `undefined`', () => {
  expect(typeof thereIs).not.toBe('undefined');
});

test('type of a variable not defined is undefined', () => {
  expect(typeof thereIsnt).toBe('undefined');
});

// functionTest.test.js
const thereIs = () => {};

test('type of a defined function is not `function`', () => {
  expect(typeof thereIs).toBe('function');
});

test('type of a function not defined is undefined', () => {
  expect(typeof thereIsnt).toBe('undefined');
});

// isAbove.test.js
const isAbove = require('./isAbove');

describe('isAbove', () => {
  test('7 is above 5', () => {
    expect(isAbove(7, 5)).toBeTruthy();
  });

  test('7 is nor above 7', () => {
    expect(isAbove(7, 7)).toBeFalsy();
  });

  test('7 is not above 8', () => {
    expect(isAbove(7, 8)).toBeFalsy();
  });
});

// getChange.test.js
const getChange = require('./getChange');

describe('getChange', () => {
  let result, expected;

  test('returns an empty array when there is no change', () => {
    result = getChange(1, 1); //no change/coins just an empty array
    expected = [];
    expect(result).toEqual(expected);
  });

  test('returns the correct change when there is change', () => {
    result = getChange(215, 300); // expect an array containing [50, 20, 10, 5]
    expected = [50, 20, 10, 5];
    expect(result).toEqual(expected);

    result = getChange(486, 600); // expect an array containing [100, 10, 2, 2]
    expected = [100, 10, 2, 2];
    expect(result).toEqual(expected);

    result = getChange(12, 400); // expect an array containing [200, 100, 50, 20, 10, 5, 2, 1]
    expected = [200, 100, 50, 20, 10, 5, 2, 1];
    expect(result).toEqual(expected);
  });

  test('throws an error when paid value is not enougth', () => {
    expect(() => {
      getChange(100, 10);
    }).toThrow(/paid value is not enough/);
  });
});
