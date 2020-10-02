/* 
    Agora, um passo para trás: vamos fazer, passo a passo, uma Promise. Primeiramente, instancie uma Promise. Dentro dela, você deve produzir um array com dez números aleatórios de 1 a 50 e elevá-los todos ao quadrado. Se a soma de todos esses elementos for inferior a 8000, a promise deve ser resolvida. Caso contrário, ela deve ser rejeitada. Acresça um then e um catch à Promise com qualquer coisa dentro só para que o código funcione.
        Tente usar Higher Order Functions! Lembre-se de que tanto uma quanto a outra recebem, como parâmetro, funções!

    Quando a promise for resolvida com sucesso, retorne o resultado da divisão desse número por 2, 3, 5 e 10 em um array.

    Quando a Promise for rejeitada, imprima, via console.log, a frase "É mais de oito mil! Essa promise deve estar quebrada!"

    Quando a Promise for bem-sucedida, encadeie nela uma segunda Promise que some os elementos do array.
 */

const fetchPromise = () => {
  const myPromise = new Promise((resolve, reject) => {
    const myArray = Array.from(
      { length: 10 },
      () => Math.floor(Math.random() * 50) + 1
    );
    const sum = myArray
      .map((number) => number * number)
      .reduce((number, acc) => number + acc, 0);

    sum < 8000 ? resolve() : reject();
  });

  myPromise
    .then(() => console.log('Deu bom'))
    .catch(() => console.log('Deu ruim'));
};

fetchPromise();

// Quando a promise for resolvida com sucesso, retorne o resultado da divisão desse número por 2, 3, 5 e 10 em um array.
const fetchPromise = () => {
  const myPromise = new Promise((resolve, reject) => {
    const myArray = Array.from(
      { length: 10 },
      () => Math.floor(Math.random() * 50) + 1
    );
    const sum = myArray
      .map((number) => number * number)
      .reduce((number, acc) => number + acc, 0);

    sum < 8000 ? resolve(sum) : reject();
  });

  myPromise
    .then((sum) => [2, 3, 5, 10].map((number) => sum / number))
    .catch(() => console.log('Deu ruim!'));
};

fetchPromise();

// Quando a Promise for rejeitada, imprima, via console.log, a frase "É mais de oito mil! Essa promise deve estar quebrada!"

const fetchPromise = () => {
  const myPromise = new Promise((resolve, reject) => {
    const myArray = Array.from(
      { length: 10 },
      () => Math.floor(Math.random() * 50) + 1
    );
    const sum = myArray
      .map((number) => number * number)
      .reduce((number, acc) => number + acc, 0);

    sum < 8000 ? resolve(sum) : reject();
  });

  myPromise
    .then((sum) => [2, 3, 5, 10].map((number) => sum / number))
    .catch(() =>
      console.log('É mais de oito mil! Essa promise deve estar quebrada!')
    );
};

fetchPromise();

// Quando a Promise for bem-sucedida, encadeie nela uma segunda Promise que some os elementos do array.

const fetchPromise = () => {
  const myPromise = new Promise((resolve, reject) => {
    const myArray = Array.from(
      { length: 10 },
      () => Math.floor(Math.random() * 50) + 1
    );
    const sum = myArray
      .map((number) => number * number)
      .reduce((number, acc) => number + acc, 0);

    sum < 8000 ? resolve(sum) : reject();
  });

  myPromise
    .then((sum) => [2, 3, 5, 10].map((number) => sum / number))
    .then((array) => array.reduce((number, acc) => number + acc, 0))
    .catch(() =>
      console.log('É mais de oito mil! Essa promise deve estar quebrada!')
    );
};

fetchPromise();

/* 
    Utilize somente Higher Order Functions para fazer as operações com o array;

Todas as soluções acima realizaram esse bonus.

    Refatore a Promise para utilizar somente async e await.
 */

const sumRandomNumbers = () => {
  const myArray = Array.from(
    { length: 10 },
    () => Math.floor(Math.random() * 50) + 1
  );
  const sum = myArray
    .map((number) => number * number)
    .reduce((number, acc) => number + acc, 0);

  if (sum > 8000) throw new Error();

  return sum;
};

const generateArrayFromSum = (sum) =>
  [2, 3, 5, 10].map((number) => sum / number);

const fetchPromise = async () => {
  try {
    const sum = await sumRandomNumbers();
    const array = await generateArrayFromSum(sum);

    console.log(array);
  } catch (error) {
    console.log('É mais de oito mil! Essa promise deve estar quebrada!');
  }
};

fetchPromise();
