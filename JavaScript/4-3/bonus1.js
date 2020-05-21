let n = 7;
let numberOfLines = (n + 1) / 2;
let controlLeft = numberOfLines;
let controlRight = numberOfLines;
let lineInput = "";

for (let i = 0; i < numberOfLines; i+=1) { 
  for (let lineColumn = 1; lineColumn <= n; lineColumn+=1) {
    if (i === (numberOfLines - 1)) {
      lineInput = lineInput + "*"; 
    } else if (lineColumn === controlLeft || lineColumn === controlRight) {
      lineInput = lineInput + "*";
    } else {
      lineInput = lineInput + " ";
    }
  }
  console.log(lineInput);
  lineInput = "";
  controlRight -= 1; // 5 - 4 - 3 - 2 - 1
  controlLeft += 1; // 5 - 6 - 7 - 8 - 9 
}
//primeiro for executa n de linhas e segundo o conteudo de cada linha
//primeiro if preenche a base com todos * e o restante é para preencher os espaços.