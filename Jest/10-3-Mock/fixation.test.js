//JEST.FN()

function randomRgbColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
module.exports = { randomRgbColor };

test('#randomRgbColor', () => {
  // testando se a função foi chamada e qual seu retorno
  randomRgbColor = jest.fn().mockReturnValue('rgb(255, 255, 255)');

  randomRgbColor();
  expect(randomRgbColor).toHaveBeenCalled();
  expect(randomRgbColor()).toBe('rgb(255, 255, 255)');
});

//MOCK()

const somar = async (a, b) => {
  await sleep(10000);
  return a + b;
}; // Função de somar mais lenta do mundo
const subtrair = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;

module.exports = { somar, subtrair, multiplicar, dividir };

const math = require('./math');
jest.mock('./math');

test('#somar', () => {
  // Aqui testamos se função foi chamada, quantas vezes foi chamada, quais parâmetros foram usados e qual seu retorno

  math.somar.mockImplementation((a, b) => a + b);
  math.somar(1, 2);

  expect(math.somar).toHaveBeenCalled();
  expect(math.somar).toHaveBeenCalledTimes(1);
  expect(math.somar).toHaveBeenCalledWith(1, 2);
  expect(math.somar(1, 2)).toBe(3);
});

// SPYON()

const math = require('./math');

test('#somar', () => {
  // testando a implementação original, o mock e a restauração da função original

  // implementação original
  expect(math.somar(1, 2)).toBe(3);

  // criando o mock e substituindo a implementação para uma subtração
  const mockSomar = jest
    .spyOn(math, 'somar')
    .mockImplementation((a, b) => a - b);

  math.somar(5, 1);
  expect(mockSomar).toHaveBeenCalledTimes(1);
  expect(mockSomar(5, 1)).toBe(4);
  expect(mockSomar).toHaveBeenCalledTimes(2);
  expect(mockSomar).toHaveBeenLastCalledWith(5, 1);

  // restaurando a implementação original
  math.somar.mockRestore();
  expect(math.somar(1, 2)).toBe(3);
});

// MOCK RESET WITH API

const api = require('./api');

describe('testando a requisição', () => {
  const apiURL = jest.spyOn(api, 'fetchURL');
  afterEach(apiURL.mockReset);

  test('testando requisição caso a promise resolva', async () => {
    apiURL.mockResolvedValue('requisição realizada com sucesso');

    apiURL();
    expect(apiURL).toHaveBeenCalled();
    expect(apiURL).toHaveBeenCalledTimes(1);
    expect(apiURL()).resolves.toBe('requisição realizada com sucesso');
    expect(apiURL).toHaveBeenCalledTimes(2);
  });

  test('testando requisição caso a promise seja rejeitada', async () => {
    apiURL.mockRejectedValue('a requisição falhou');

    expect(apiURL).toHaveBeenCalledTimes(0);
    expect(apiURL()).rejects.toMatch('a requisição falhou');
    expect(apiURL).toHaveBeenCalledTimes(1);
  });
});
