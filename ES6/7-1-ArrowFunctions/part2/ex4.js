/* Crie um código JavaScript com a seguinte especificação:

Não se esqueça de usar template literals

    Função 1: Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string.
    Exemplo:
        String determinada: "Tryber x aqui!"
        Parâmetro: "Bebeto"
        Retorno: "Tryber Bebeto aqui!"
    Um array com escopo global, que é o escopo do arquivo JS, nesse caso, contendo cinco strings com suas principais skills.
    */
let escopoGlobal = ['CSS', 'React', 'JS', 'GitHub', 'HTML'];
const stringReceiver = (string) => {
  const str = 'Tryber x aqui, VQV!';
  const newString = str.replace('x', string);
  return newString;
};
/*Função 2: Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string.
 */
const skillReceiver = (string) => {
  escopoGlobal = escopoGlobal.sort();
  return `${stringReceiver(string)}
Minhas skills são: 
${escopoGlobal}!`;
};
console.log(skillReceiver('Mitchell'));
