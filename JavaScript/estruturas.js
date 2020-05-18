//Para fazer uma estrutura de repetição que conte do 1 ao 9, criamos uma primeira variável com o 
//numero 1, e separado pelo ";" colocamos essa variável para repetir até 9 vezes usando o comando <=
//para dizer que o numero tem que parar sendo igual ou menor que 9 vezes. Após isso para indicar que
// o numero vai rodar 9 vezes, colocamos ";" e o nome da variavel com o comando "++" para indicar que 
// toda repetição será a variável somado á ele mesmo até repetir 9 vezes.

var numero;
for ( var contador = 1 ; contador <=9 ; contador++) {
    console.log(numero * contador);
}

//agora qualquer numero inserido na variavel numero será multiplicado por ele mesmo 9 vezes.
//console.log servindo como a impressão do resultado no console.
//se quiser abrir a distancia entre resultados basta adicionar um console.log com implemento vazio
// acima do console.log atual.

var listaDeNomes = ["Joana","Maria","Lucas"];

for(var i = 0; i < listaDeNomes.length; i++) {
    var mensagem = "Boas vindas, " + listaDeNomes[i] + "!";
    console.log(mensagem)
}

//No exemplo acima vemos que o index = 0 pois diferente de numeros, arrays sempre contam a partir do 0
// ao contrario do primeiro exemplo, array sempre usa "<" durante a repetição pois arrays contam do zero
// e a ultima variavel do array sempre será -1 do total


//variavel.length = Ler todo o array e fazer a repetição para cada index dentro dele.
