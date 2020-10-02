let custoDoProduto = 7;
let valorDeVenda = 13;
let lucro = 0;

lucro = valorDeVenda - custoDoProduto * 1.2;

if (valorDeVenda < 0 || custoDoProduto < 0) {
  console.log("Erro, um dos numeros é menor que 0");
} else
  console.log("Após vender 1000 unidades, tivemos lucro de ", lucro * 1000);

//Obs: para calcular porcentagens faça multiplicação de "1.valordaporcentagem".
