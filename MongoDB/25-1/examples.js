// MATCH groups below all results with the author as "Dave"

db.articles.aggregate([{ $match: { author: 'dave' } }]);

/* O primeiro estágio abaixo seleciona todos os documentos da coleção articles em
que o score seja maior que 70 e menor que 90 , ou o campo views seja maior ou
igual a 1000 */
db.articles.aggregate([
  {
    $match: {
      $or: [{ score: { $gt: 70, $lt: 90 } }, { views: { $gte: 1000 } }],
    },
  },
]);

// LIMIT limita numero de documentos passados pro próx estágio do pipeline

db.articles.aggregate([{ $limit: 5 }]);
// retorna apenas 5 documentos de articles

// $lookup = equivalente join do MySQL

db.orders.aggregate([
  {
    $lookup: {
      from: 'inventory', //tabela que quer juntar
      localField: 'item', //primary key
      foreignField: 'sku', // foreign key
      as: 'inventory_docs', //nome do novo array
    },
  },
]);

// $lookup complexo
/* let = cria variaveis como javascript pois o estágio pipeline não consegue
acessar diretamente os campos dos documentos de entrada, então esses campos
precisam ser definidos previamente e transformados em variáveis. */

/* pipeline : define as condições ou o pipeline que será executado na coleção de junção. Se você quiser todos os documentos da coleção de junção, é só especificá-lo como vazio ( [] ) */

db.orders.aggregate([
  {
    $lookup: {
      from: 'warehouses', //tabela a ser juntada
      let: { order_item: '$item', order_qty: '$ordered' }, // variaveis criadas
      pipeline: [
        {
          $match: {
            $expr: {
              $and: [
                { $eq: ['$stock_item', '$$order_item'] },
                { $gte: ['$instock', '$$order_qty'] },
              ],
            },
          },
        },
        { $project: { stock_item: 0, _id: 0 } },
      ],
      as: 'stockdata',
    },
  },
]);

/* $match que utiliza uma expressão ( $expr ). Esta, por sua vez, utiliza o operador
$and . Dentro do $and , são utilizados operadores de igualdade ( $eq ) e de comparação
( $gte ). O símbolo $ é utilizado para se referir aos campos da coleção warehouse
(a coleção de junção), enquanto $$ se refere às variáveis definidas no estágio let
(os campos da coleção orders ). Os campos _id e stock_item da coleção de join
( warehouse ) são excluídos com o uso do operador $project . */

// $GROUP

//ex1
db.sales.aggregate([{ $group: { _id: null, count: { $sum: 1 } } }]);
// equivalente á SELECT COUNT(*) AS count FROM sales;
// retorno dessa operação { "_id" : null, "count" : 8 }

//ex2
db.sales.aggregate([{ $group: { _id: '$item', count: { $sum: 1 } } }]);
// campo item deve ser precedido de $. Ex acima serve pra encontrar todos valores unicos de item.

//ex3
db.sales.aggregate([
  { $group: { _id: '$item', totalSaleAmount: { $sum: { $multiply: ['$price', '$quantity'] } } } },
]);

//ex acima multiplica os campos price pelo valor de quantity em um campo chamado: totalSaleAmount
// em SQL: SELECT item, SUM(price * quantity) AS totalSaleAmount FROM sales GROUP BY item;

// ex4

db.sales.aggregate([
  // Primeiro Estágio
  {
    $group: {
      _id: '$item',
      totalSaleAmount: {
        $sum: {
          $multiply: ['$price', '$quantity'],
        },
      },
    },
  },
  // Segundo Estágio
  {
    $match: { totalSaleAmount: { $gte: 100 } },
  },
]);
// ex acima seria como having de SQL. o equivalente seria como abaixo:
/*
SELECT item, SUM(price * quantity) AS totalSaleAmount
FROM sales
GROUP BY item
HAVING totalSaleAmount >= 100;
*/

// ex 5

db.sales.aggregate([
  {
    group: {
      _id: null,
      totalSaleAmount: {
        $sum: { $multiply: ['$price', '$quantity'] },
      },
      averageQuantity: { $avg: '$quantity' },
      count: { $sum: 1 },
    },
  },
]);
/* Basta passar null no _id e seguir com os operadores de acumulação para
executar em todos docs */

/* EM SQL A OPERAÇÃO ACIMA SERIA:
SELECT SUM(price * quantity) AS totalSaleAmount,
       AVG(quantity)         AS averageQuantity,
       COUNT(*)              AS count
FROM sales */

// $UNWIND:
/* O operador $unwind "desconstrói" um campo array do documento de entrada e gera como saída um documento para cada elemento do array . Cada documento de saída é o documento de entrada com o valor do campo array substituído por um elemento do array . */
db.inventory.insertOne({ _id: 7, item: 'ABC1', $sizes: ['S', 'M', 'L'] });
db.inventory.aggregate([{ $unwind: '$sizes' }]);
// operação acima retorna 3 documentos ao invés do array:
/* 
{ "_id" : 7, "item" : "ABC1", "sizes" : "S" }
{ "_id" : 7, "item" : "ABC1", "sizes" : "M" }
{ "_id" : 7, "item" : "ABC1", "sizes" : "L" }
*/

// $PROJECT projeta apenas os campos especificados pelo pipeline

db.books.aggregate([{ $project: { title: 1, author: 1 } }]);
// mostra apenas titulo, author e _id

db.books.aggregate([{ $project: { _id: 0, title: 1, author: 1 } }]);
// mesma coisa que exemplo anterior sem _id

db.books.aggregate([{ $project: { 'author.first': 0, copies: 0 } }]);
// exemplo acima exclui subdocumento first

db.books.aggregate([
  {
    $project: {
      title: 1,
      isbn: {
        prefix: { $substr: ['$isbn', 0, 3] },
        group: { $substr: ['$isbn', 3, 2] },
        publisher: { $substr: ['$isbn', 5, 4] },
        title: { $substr: ['$isbn', 9, 3] },
        checkDigit: { $substr: ['$isbn', 12, 1] },
      },
      lastName: '$author.last',
      copiesSold: '$copies',
    },
  },
]);
// A operação acima adiciona os novos campos isbn , lastname e copiesSold