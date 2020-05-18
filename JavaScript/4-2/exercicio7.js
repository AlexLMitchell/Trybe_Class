let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let valor = numbers[0];

for(i in numbers){
   if(numbers[i] < valor) valor = numbers[i];
}

console.log(valor);

//identico ao ex5 porém com "<"