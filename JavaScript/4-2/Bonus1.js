let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 1; i < numbers.length; i++) {
    for (let j = 0; j < i; j++) {
      if (numbers[i] < numbers[j]) {
        let position = numbers[i];
    
        numbers[i] = numbers[j];
        numbers[j] = position;
      }
    }
  }

  console.log(numbers);

  //O primeiro for percorre o array a partir do index[1].
  //O segundo for dentro do primeiro cria uma segunda variável j que ao
  //invés de percorrer o array,