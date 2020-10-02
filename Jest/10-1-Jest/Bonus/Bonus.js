// lookup.js
const users = [
  {
    login: 'knuth',
    firstName: 'Donald',
    lastName: 'Knuth',
    likes: ['C', 'Unix'],
  },
  {
    login: 'norvig',
    firstName: 'Peter',
    lastName: 'Norvig',
    likes: ['AI', 'Search', 'NASA', 'Mars'],
  },
  {
    login: 'mfowler',
    firstName: 'Martin',
    lastName: 'Fowler',
    likes: ['Design Patterns', 'Refactoring'],
  },
  {
    login: 'kent',
    firstName: 'Kent',
    lastName: 'Beck',
    likes: ['TDD', 'wikis', 'Design Patterns'],
  },
];

const lookup = (login, property) => {
  const user = users.find((user) => user.login === login);

  if (!user) throw new Error('Could not find user');
  if (!user[property]) throw new Error('Could not find property');

  return user[property];
};

module.exports = lookup;

// setPrice.js

// setPrice(item: Object, price: Number) => item: Object
const setPrice = (item, price) => {
  return { ...item, price };
};

module.exports = setPrice;

// addToCard.js

// addToCart(cart: Array, item: Object) => cart: Array
const addToCart = (cart, item) => {
  return [...cart, item];
};

module.exports = addToCart;
