let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let valor = numbers[0];

for(i in numbers){
   if(numbers[i] > valor) valor = numbers[i];
}

console.log(valor);

//No inico "valor" = o indice 0 do array. 
// if(numbers[i] > valor) valor = numbers[i]; faz com q a medida que vai passando, o maior numero
//substitui o anterior como "valor" que começa no "indice 0" que é 5, e vai até o final do array.