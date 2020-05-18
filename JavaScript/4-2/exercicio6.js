let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = 0;

for(i in numbers){
   if(numbers[i]%2 != 0) impar++;
}

if (impar) console.log( impar, "valores impares");
else console.log("Nenhum valor ímpar encontrado");