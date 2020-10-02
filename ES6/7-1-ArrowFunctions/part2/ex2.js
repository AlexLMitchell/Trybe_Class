/* Crie uma função que receba uma frase e retorne qual a maior palavra.
Exemplo:

longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu' */
const string = 'Antônio foi no banheiro e não sabemos o que aconteceu';

const LongestWord = (str) => {
  let longestWord = str.split(' ').reduce((longest, currentWord) => {
    return currentWord.length > longest.length ? currentWord : longest;
  }, '');
  return longestWord;
};
console.log(LongestWord(string));
/* Reduce é a melhor HOF de todas, ele recebe na ordem: accumulador, valor atual, 
indice atual(opcional) e valor inicial(opcional). ele faz o loop no array criado por split e compara
o valor do acumulador com o atual e substitui/adiciona conforme necessidade */
