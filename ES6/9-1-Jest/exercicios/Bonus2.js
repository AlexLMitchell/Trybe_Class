// setPrice.js

// setPrice(item: Object, price: Number) => item: Object
const setPrice = (item, price) => {
  return { ...item, price };
};
// addToCard.js

// addToCart(cart: Array, item: Object) => cart: Array
const addToCart = (cart, item) => {
  return [...cart, item];
};

module.exports = { setPrice, addToCart };
