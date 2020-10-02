// Crie uma página que contenha:
// Um botão ao qual será associado um event listener;
// Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
// Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.

const ClickMe = document.querySelector('.clickMe');
const Counter = document.querySelector('.clickCounter');
let counter = 0;

const addCounter = () => {
  counter += 1;
  Counter.innerText = counter;
};

ClickMe.addEventListener('click', addCounter);
