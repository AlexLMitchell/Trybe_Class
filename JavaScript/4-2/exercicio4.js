let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let arithmeticAverage = 0;

for(i in numbers){
    arithmeticAverage += numbers[i];
}
arithmeticAverage /= numbers.length;

console.log(arithmeticAverage);

(arithmeticAverage > 20) ? console.log("Valor maior que 20") : console.log("Valor menor ou igual a 20");

// para atribuir as impressões da comparação SIMPLES de > ou <, basta adicionar um "?" e
//separar as definições de "true" ou "false" por ":" ao invéz de fazer um if,else.