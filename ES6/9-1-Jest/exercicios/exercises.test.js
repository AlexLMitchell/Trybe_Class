const tests = require('./exercises');

/*  Teste se a função sum lança um erro quando os parametros são 4 e "5"(string 5)
Teste se a mensagem de erro é “parameters must be numbers” quando realizar a chamada sum(4, "5") */

describe('sum', () => {
  it('should add two numbers', () => {
    expect(tests.sum(4, 5)).toBe(9);
    expect(tests.sum(0, 0)).toBe(0);
  });
  it('should not add strings', () => {
    expect(() => tests.sum(4, '5')).toThrow('parameters must be numbers');
  });
});

/* Teste se a chamada myIndexOf([1, 2, 3, 4], 3) retorna o valor esperado
Teste se a chamada myIndexOf([1, 2, 3, 4], 5) retorna o valor esperado */

describe('myIndexOf', () => {
  it('should search index', () => {
    expect(tests.myIndexOf([1, 2, 3, 4], 3)).toBe(2);
  });
  expect(tests.myIndexOf([1, 2, 3, 4], 5)).toBe(-1);
});

/* Teste se a chamada mySum([1, 2, 3, 4]) retorna o valor 10
Teste se a chamada mySum([1, -2, -3, 4]) retorna o valor esperado */

describe('mySum', () => {
  it('should sum array', () => {
    expect(tests.mySum([1, 2, 3, 4])).toBe(10);
    expect(tests.mySum([1, -2, -3, 4])).toBe(0);
  });
});

/*   Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
  Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
  Verifique se o array passado por parâmetro não sofreu alterações
  Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado */

describe('myRemove', () => {
  let numray = [1, 2, 3, 4];
  it('shoud remove item from array', () => {
    expect(tests.myRemove(numray, 3)).toEqual([1, 2, 4]);
    expect(tests.myRemove(numray, 3)).not.toEqual([1, 2, 3, 4]);
    expect(tests.myRemove(numray, 5)).toEqual([1, 2, 3, 4]);
  });
});
it('does not change the passed array', () => {
  const arr = [1, 2, 3, 4];
  tests.myRemove(arr, 1);
  expect(arr).toEqual([1, 2, 3, 4]);
});

/*   Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
  Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
  Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações
  Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado 
   */

describe('myRemoveWithoutCopy', () => {
  it('returns the same array without the item if the item belongs to it', () => {
    expect(tests.myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  it('returns the correct array', () => {
    expect(tests.myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([
      1,
      2,
      3,
      4,
    ]);
  });

  it('changes the passed array', () => {
    const arr = [1, 2, 3, 4];
    tests.myRemoveWithoutCopy(arr, 1);
    expect(arr).toEqual([2, 3, 4]);
  });

  it('returns an identical array if the item does not belong to it', () => {
    expect(tests.myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

/*   
Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado 
*/

describe('myFizzBuzz', () => {
  it('returns `fizzbuzz` if the argument is divisible by 3 and 5', () => {
    expect(tests.myFizzBuzz(15)).toBe('fizzbuzz');
  });

  it('return `fizz` if the argument is divisible only by 3', () => {
    expect(tests.myFizzBuzz(9)).toBe('fizz');
  });

  it('return `fizz` if the argument is divisible only by 5', () => {
    expect(tests.myFizzBuzz(25)).toBe('buzz');
  });

  it('returns the own argument if it is not disisible by 3 or 5', () => {
    expect(tests.myFizzBuzz(17)).toBe(17);
  });

  it('returns `false` if the argument is not a number', () => {
    expect(tests.myFizzBuzz('this_is_not_a_number')).toBeFalsy();
  });
});

// 7 - Teste se uma variável foi definida

describe('variavel foi definida', () => {
  test('thereIs is defined', () => {
    expect(typeof tests.thereIs).not.toBe('undefined');
  });
});

// 8 - Teste se uma função foi definida
describe('thereAre', () => {
  test('thereAre() is defined', () => {
    expect(typeof tests.thereAre).toBe('function');
  });
});
// 9 -  Compare dois objetos (JSON) para verificar se são idênticos ou não
const { obj1, obj2 } = tests;
describe('objectsEqual', () => {
  test('obj1 e obj2 são iguais', () => {
    expect(obj1).toEqual(obj2);
  });
});

/* teste uma função que compara dois números e retorna true se o primeiro for maior 
que o segundo e false caso contrário. */

describe('isAbove', () => {
  it('should return true if a>b else, false', () => {
    expect(tests.isAbove(1, 2)).toBe(false);
    expect(tests.isAbove(2, 1)).toBe(true);
  });
});

// Bonus 1

const lookup = require('./Bonus1');
describe('lookup()', () => {
  it("lookup(<login>, 'likes') should return likes for the specified user.", () => {
    const actual = lookup('norvig', 'likes');
    const expected = ['AI', 'Search', 'NASA', 'Mars'];

    expect(actual).toEqual(expected);
  });
  it("lookup(<login>, 'lastName') should return the last name for the specified user", () => {
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

// Bonus 2

const functions = require('./Bonus2');

describe('setPrice()', () => {
    it('should set the price in the given item object, immutably.', () => {
      const item = {
        name: 'test',
        price: 30,
      };
      const copy = Object.assign({}, item);
  
      const actual = functions.setPrice(item, 50);
      const expected = {
        name: 'test',
        price: 50,
      };
  
      expect(actual).toEqual(expected);
      expect(item).toEqual(copy);
    });
  });
  
  describe('addToCart()', () => {
    it('should add item to cart, immutably', () => {
      const originalCart = [];
      const item = {
        name: 'Violator',
        price: 30,
      };
      const copy = originalCart.slice();
  
      const actual = functions.addToCart(originalCart, item);
      const expected = [item];
  
      expect(actual).toEqual(expected);
      expect(originalCart).toEqual(copy);
    });
  });