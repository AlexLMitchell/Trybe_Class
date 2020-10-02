let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let value = numbers[0];

for(i in numbers){
   if(numbers[i] < value) value = numbers[i];
}

console.log(value);

//identico ao ex5 porém com "<"