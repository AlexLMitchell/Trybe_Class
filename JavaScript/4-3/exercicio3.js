let n=5;
let star = "";

for (i=n; i>=0; i--) {
  for (j=0; j<n; j++){
    star += (j>=i) ? "*" : " ";
  }
  console.log(star);
  star = "";
}

//repetindo a estrutura anterior porem ao contrario, as mudanças se tornam mais complexas.
//ao contrario do for de incrementação, vamos retirando "" e "*" da repetição a medida que desce.
//como dessa vez será preciso um array com uma matriz, colocamos for duplo, com j incrementando valores.
//se j for maior ou igual a i retorna "*" se true ou "" se false. fazendo assim cada estrutura 
//comparando o i decrementando e o j incrementando e aumentando o numero de "" a medida que declara 
//false.
