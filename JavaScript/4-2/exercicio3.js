let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let arithmeticAverage = 0;

for(i in numbers){
    arithmeticAverage += numbers[i];
}
arithmeticAverage /= numbers.length;

console.log(arithmeticAverage);

//Para calcular a média aritmetica basta dividir a soma de todo o array por ele mesmo.
//Assim como foi feito no anterior porém com divisão.