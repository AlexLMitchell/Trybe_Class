// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
let isPalindrome = (string) => {
  let verifier = '';
  for (let i = string.length - 1; i >= 0; i--) {
    verifier += string.substr(i, 1);
  }
  if (verifier === string) {
    return true;
  }
  return false;
};
console.log(isPalindrome('arara'));

// 2-Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
let HighNumber = (array) => {
  if (array.length == 0) return -1;
  let highest = 0;
  for (index in array) {
    if (typeof array[index] != 'number') return -1;
    if (array[index] > Number(array[highest])) {
      highest = index;
    }
  }
  return highest;
};
console.log(HighNumber([2, 3, 6, 7, 10, 1]));

// 3-Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

let lowNumber = (array) => {
  if (array.length == 0) return -1;
  let lowest = 0;
  for (index in array) {
    if (typeof array[index] != 'number') return -1;
    if (array[index] < Number(array[lowest])) {
      lowest = index;
    }
  }
  return lowest;
};
console.log(lowNumber([2, 4, 6, 7, 10, 0, -3]));

//4-Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

let names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
let longestName = () => {
  let longest = '';
  for (let name of names) {
    if (name.length > longest.length) longest = name;
  }
  return longest;
};
console.log(longestName());

//5-Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
let inteiros = [2, 3, 2, 5, 8, 2, 3];
function findDuplicate(array) {
  let repetitions = 0;
  let moreRepetitions = 0;
  let repeatedNumber = 0;
  for (let i in array) {
    for (let n in array) {
      if (array[i] == array[n]) {
        repetitions += 1;
      }
      if (repetitions > moreRepetitions) {
        repetitions = moreRepetitions;
        repeatedNumber = array[i];
      }
    }
    return repeatedNumber;
  }
}
console.log(findDuplicate(inteiros));

/* 6- Crie uma função que receba um número inteiro N e retorne o somatório de todos os números
    de 1 até N. */
function sumNumbers(n) {
  let num = 0;
  for (let i = 1; i <= n; i++) {
    num += i;
  }
  return num;
}
console.log(sumNumbers(5));

/*  7- Crie uma função que receba uma string word e outra string ending. Verifique se a string
    ending é o final da string word. Considere que a string ending sempre será menor que a string
    word. */

function wordEnding(word, ending) {
  let sameEnd = true;
  for (i = 1; i <= ending.length; i += 1) {
    if (word[word.length - i] !== ending[ending.length - i]) {
      sameEnd = false;
    }
  }
  return sameEnd;
}
console.log(wordEnding('trybe', 'be'));
console.log(wordEnding('joaofernando', 'fernan'));