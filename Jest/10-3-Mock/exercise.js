/* 1- Crie uma função que gere um número aleatório entre 0 e 100. Você irá criar também os testes para essa
função. Utilizando o mock, defina o retorno padrão como 10. Teste se a função foi chamada, qual seu
retorno e quantas vezes foi chamada. */

const randomNumber = () => Math.floor(Math.random() * 101);
module.exports = { randomNumber };

/* 
 4-Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string e retorná-la em caixa 
alta. A segunda deve também receber uma string e retornar só a primeira letra. A terceira deve receber duas 
strings e concatená-las. Faça o mock do arquivo. Faça uma nova implementação para a primeira função, 
mas agora ela deve retornar a string em caixa baixa. Para a segunda função, uma nova implementação deve 
retornar a útlima letra de uma string. A terceira deve receber três strings e concatená-las. 
*/

const firstFunction = (str) => str.toUpperCase();
const secondFunction = (str) => str.charAt(0);
const thirdFunction = (str1, str2) => str1.concat(str2);

module.exports = {
  firstFunction,
  secondFunction,
  thirdFunction,
};

/* 
6-Crie uma função que faça requisição para a api dog pictures. Mocke a requisição e crie dois testes. O 
primeiro deve interpretar que a requisição se resolveu e teve como valor "request sucess". O segundo deve 
interpretar que a requisição falhou e ter como valor "request failed". Crie todos os testes que achar
 necessário.
*/