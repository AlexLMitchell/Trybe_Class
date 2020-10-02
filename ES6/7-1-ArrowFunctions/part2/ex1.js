/* Crie uma função que receba um número e retorne seu fatorial.

    Na matemática, o fatorial de um número não negativo N, com a notação N!, é o produto de todos os inteiros menores ou iguais a N. Exemplo: 4! = 4 3 2 * 1 = 24.

    Bônus (opcional): tente fazer o mesmo exercício de forma recursiva. Spoiler: É possível resolver com uma linha.

 */
const fatorial = (n) => (n <= 1 ? 1 : n * fatorial(n - 1));

console.log(fatorial(4));
// se o num é igual 1 retorna 1 caso contrário retorna n*(n-1) até n ser igual 1 e retornar o valor final.
