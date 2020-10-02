let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newNumbers = [];

for (let number = 0; number < numbers.length; number+=1) {
    if (number < (numbers.length -1)) {
        newNumbers.push(numbers[number] * (numbers[number+1]));
    } else {
        newNumbers.push(numbers[number] * 2);
    }
}
console.log(numbers);
console.log(newNumbers);