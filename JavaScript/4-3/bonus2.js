let prime = 113; 
let factor = [];

for (i=0; i<prime; i++){
    if (prime % i == 0 && prime != i && i != 1){
        factor.push(i);
    }
}
if (factor.length == 0){
    console.log("Número Primo")
}
else {
    console.log("Não é Primo")
}
//Verificar se é primo, fazendo a divisão da variavel por todos os números até ele mesmo, sendo o 
//resto igual a zero.

//verificar se o tamanho (length) desse array é exatamente 2 (1 e ele mesmo). Se for, imprime que 
//é primo, see length for >2, então o número não é primo.