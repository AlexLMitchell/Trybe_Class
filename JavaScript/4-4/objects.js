let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
  /* 1-Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.
  2- Insira no objeto uma nova propriedade com o nome de chave "recorrente" e o valor "Sim" e, em 
  seguida, imprima o objeto no console. */
  console.log(`Bem vinda, ${info.personagem}!`);
  info.recorrente = 'sim';
  console.log(info);
  //3-Faça um for/in que mostre todas as chaves do objeto.
  for (content in info) {
    console.log(content);
  }
  
  //4-Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto.
  for (content in info) {
    console.log(info[content]);
  }
  /* 5-Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes
  valores: "Tio Patinhas", "Christmas on Bear Mountain, Dell's Four Color Comics #178", "O último MacPatinhas",
  "Sim". */
  let info2 = Object.create(info);
  info2.personagem="Tio Patinhas";
  info2.origem="Christmas on Bear Mountain, Dell’s Four Color Comics #178";
  info2.nota="O último MacPatinhas";
  info2.recorrente= "Sim";
  for(content in info){
      console.log(info[content] + " e " +info2[content]);
    }