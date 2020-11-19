/* Exercício 1 : Utilize uma combinação das expressões aritméticas e adicione um campo chamado idade à coleção clientes . Algumas dicas:
arredonde para baixo o valor da idade;
calcule a idade usando a diferença entre a data corrente e a data de nascimento;
1 dia é igual a 86400000 milissegundos. */

db.clientes.aggregate([
  {
    $addFields: {
      idade: {
        $floor: {
          $divide: [{ $subtract: ['$$NOW', '$dataNascimento'] }, { $multiply: [86400000, 365] }],
        },
      },
    },
  },
]);

// Exercício 2 : Utilizando o novo campo idade , conte quantos clientes têm entre 18 e 25 anos.

db.clientes.aggregate([
  {
    $addFields: {
      idade: {
        $floor: {
          $divide: [{ $subtract: ['$$NOW', '$dataNascimento'] }, { $multiply: [86400000, 365] }],
        },
      },
    },
  },
  { $match: { idade: { $gte: 18, $lte: 25 } } },
  { $count: 'clientes18a25' },
]);

/* Exercício 3 : Remova os estágios $count e $match do exercício anterior e
adicione um estágio no pipeline que coloque as compras do cliente no campo
compras */

db.clientes.aggregate([
    {
      $addFields: {
        idade: {
          $floor: {
            $divide: [{ $subtract: ['$$NOW', '$dataNascimento'] }, { $multiply: [86400000, 365] }],
          },
        },
      },
    },
    {
      $lookup: {
        from: 'vendas',
        localField: 'clienteId',
        foreignField: 'clienteId',
        as: 'compras',
      },
    },
  ]).pretty();

// Exercício 4 : Selecione TODOS os clientes que compraram entre Junho de 2019 e Março de 2020.

db.clientes.aggregate([
    {
      $lookup: {
        from: 'vendas',
        localField: 'clienteId',
        foreignField: 'clienteId',
        as: 'compras',
      },
    },
    {
      $match: { 'compras.dataVenda': { $gte: ISODate('2019-06-01'), $lte: ISODate('2020-03-31') } },
    },
  ]).pretty();

/* Exercício 5 : Confira o número de documentos retornados pelo pipeline com o
método itcount(). Até aqui, você deve ter 486 documentos sendo retornados. */

db.clientes.aggregate([
    {
      $lookup: {
        from: 'vendas',
        localField: 'clienteId',
        foreignField: 'clienteId',
        as: 'compras',
      },
    },
    {
      $match: { 'compras.dataVenda': { $gte: ISODate('2019-06-01'), $lte: ISODate('2020-03-31') } },
    },
  ]).itcount();

// Exercício 6 : Deixe apenas os top 10 clientes com mais compras nesse período.

db.clientes.aggregate([
    {
      $addFields: {
        idade: {
          $floor: {
            $divide: [{ $subtract: ['$$NOW', '$dataNascimento'] }, { $multiply: [86400000, 365] }],
          },
        },
      },
    },
    {
      $lookup: {
        from: 'vendas',
        localField: 'clienteId',
        foreignField: 'clienteId',
        as: 'compras',
      },
    },
    {
      $match: { 'compras.dataVenda': { $gte: ISODate('2019-06-01'), $lte: ISODate('2020-03-31') } },
    },
    { $addFields: { totalCompras: { $size: '$compras' } } },
    { $sort: { totalCompras: -1 } },
    { $limit: 10 },
  ]).pretty();

/* Exercício 7 : Para esses clientes, adicione um campo chamado compras
valorComDesconto em todas as compras do período, aplicando 10% de desconto sobre
o valor total da compra ( valorTotal ). */

db.clientes.aggregate([
  {
    $addFields: {
      idade: {
        $floor: {
          $divide: [{ $subtract: ['$$NOW', '$dataNascimento'] }, { $multiply: [86400000, 365] }],
        },
      },
    },
  },
  {
    $lookup: { from: 'vendas', localField: 'clienteId', foreignField: 'clienteId', as: 'compras' },
  },
  { $match: { 'compras.dataVenda': { $gte: ISODate('2019-06-01'), $lte: ISODate('2020-03-31') } } },
  { $addFields: { totalCompras: { $size: '$compras' } } },
  { $sort: { totalCompras: -1 } },
  { $limit: 10 },
  { $unwind: '$compras' },
  {
    $addFields: {
      'compras.valorComDesconto': {
        $subtract: ['$compras.valorTotal', { $multiply: ['$compras.valorTotal', 0.1] }],
      },
    },
  },
]).pretty(); // multiplicar por 0.1 para ver o desconto de 10%

// Exercício 8 : Ainda nesse pipeline , descubra os 5 estados com mais compras.

db.clientes.aggregate([
    {
      $addFields: {
        idade: {
          $floor: {
            $divide: [{ $subtract: ['$$NOW', '$dataNascimento'] }, { $multiply: [86400000, 365] }],
          },
        },
      },
    },
    {
      $lookup: { from: 'vendas', localField: 'clienteId', foreignField: 'clienteId', as: 'compras' },
    },
    { $match: { 'compras.dataVenda': { $gte: ISODate('2019-06-01'), $lte: ISODate('2020-03-31') } } },
    { $addFields: { totalCompras: { $size: '$compras' } } },
    { $sort: { totalCompras: -1 } },
    { $limit: 10 },
    { $unwind: '$compras' },
    {
      $addFields: {
        'compras.valorComDesconto': {
          $subtract: ['$compras.valorTotal', { $multiply: ['$compras.valorTotal', 0.1] }],
        },
      },
    },
    { $group: { _id: '$endereco.uf', totalCompras: { $sum: 1 } } },
    { $sort: { totalCompras: -1 } },
    { $limit: 5 },
  ]);

/* Exercício 9 : Descubra o cliente que mais consumiu QUEIJO PRATO . Retorne um
documento com a seguinte estrutura:

{
  "nomeCliente": "NOME",
  "uf": "UF DO CLIENTE",
  "totalConsumido": 100
} */

db.vendas.aggregate([
    { $match: { 'itens.nome': 'QUEIJO PRATO' } },
    { $unwind: '$itens' },
    { $match: { 'itens.nome': 'QUEIJO PRATO' } },
    { $group: { _id: '$clienteId', totalConsumido: { $sum: '$itens.quantidade' } } },
    { $sort: { totalConsumido: -1 } },
    { $limit: 1 },
    { $lookup: { from: 'clientes', localField: '_id', foreignField: 'clienteId', as: 'cliente' } },
    { $unwind: '$cliente' },
    {
      $project: {
        nomeCliente: '$cliente.nome',
        uf: '$cliente.endereco.uf',
        totalConsumido: '$totalConsumido',
        _id: 0,
      },
    },
  ]).pretty();

/* Exercício 10 : Selecione todas as vendas do mês de Março de 2020 , com status
EM SEPARACAO . Acrescente um campo chamado dataEntregaPrevista com valor igual a
três dias após a data da venda. Retorne apenas os campos clienteId , dataVenda e
dataEntregaPrevista . */

db.vendas.aggregate([
    {
      $match: {
        dataVenda: { $gte: ISODate('2020-03-01'), $lte: ISODate('2020-03-31') },
        status: 'EM SEPARACAO',
      },
    },
    { $addFields: { dataEntregaPrevista: { $add: ['$dataVenda', 3 * 24 * 60 * 60000] } } },
    { $project: { _id: 0, clienteId: 1, dataVenda: 1, dataEntregaPrevista: 1 } },
  ]);

//  ****BONUS****
/* Exercício 11 : Calcule a diferença absoluta em dias entre a data da primeira
entrega prevista e a última, considerando o pipeline do exercício 10 */

db.vendas.aggregate([
    {
      $match: {
        dataVenda: {
          $gte: ISODate('2020-03-01'),
          $lte: ISODate('2020-03-31')
        },
        status: "EM SEPARACAO"
      }
    },
    {
      $addFields: {
        dataEntregaPrevista: {
          $add: ["$dataVenda", 3 * 24 * 60 * 60000]
        }
      }
    },
    {
      $project: {
        _id: 0,
        clienteId: 1,
        dataVenda: 1,
        dataEntregaPrevista: 1
      }
    },
    {
      $group: {
        _id: null,
        maxDataEntrega: {
          $max: "$dataEntregaPrevista"
        },
        minDataEntrega: {
          $min: "$dataEntregaPrevista"
        }
      }
    },
    {
      $project: {
        _id: 0,
        diasDiferenca: {
          $ceil: {
            $abs: {
              $divide: [
                { $subtract: ["$maxDataEntrega", "$minDataEntrega"] },
                86400000
              ]
            }
          }
        }
      }
    }
  ]);