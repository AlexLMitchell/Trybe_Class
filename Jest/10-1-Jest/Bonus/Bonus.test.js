// lookup.test.js
const lookup = require('./lookup');

describe('lookup()', () => {
  it(`lookup(<login>, 'likes') should return likes for the specified user.`, () => {
    const actual = lookup('norvig', 'likes');
    const expected = ['AI', 'Search', 'NASA', 'Mars'];

    expect(actual).toEqual(expected);
  });

  it(`lookup(<login>, 'lastName') should return the last name for the specified user`, () => {
    const actual = lookup('knuth', 'lastName');
    const expected = 'Knuth';

    expect(actual).toEqual(expected);
  });

  it('with unknown user should throw an error with the correct message', () => {
    expect(() => {
      lookup('nobody', 'likes');
    }).toThrow(/Could not find user/);
  });

  it('with unknown property should throw an error the correct message', () => {
    expect(() => {
      lookup('mfowler', 'noprop');
    }).toThrow(/Could not find property/);
  });
});

// setPrice.test.js
const setPrice = require('./setPrice');

describe('setPrice()', () => {
  it('should set the price in the given item object, immutably.', () => {
    const item = {
      name: 'test',
      price: 30,
    };
    const copy = Object.assign({}, item);

    const actual = setPrice(item, 50);
    const expected = {
      name: 'test',
      price: 50,
    };

    expect(actual).toEqual(expected);
    expect(item).toEqual(copy);
  });
});

// addToCart.test.js
const addToCart = require('./addToCart');

describe('addToCart()', () => {
  it('should add item to cart, immutably', () => {
    const originalCart = [];
    const item = {
      name: 'Violator',
      price: 30,
    };
    const copy = originalCart.slice();

    const actual = addToCart(originalCart, item);
    const expected = [item];

    expect(actual).toEqual(expected);
    expect(originalCart).toEqual(copy);
  });
});
