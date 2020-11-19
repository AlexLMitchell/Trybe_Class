// $ADD

// Ex1
db.sales.aggregate([{ $project: { item: 1, total: { $add: ['$price', '$fee'] } } }]);
// no exemplo acima usamos total para somar os campos price e fee

//Ex2

db.sales.aggregate([{ $project: { item: 1, billing_date: { $add: ['$date', 2.592e8] } } }]);
db.sales.aggregate([
  { $project: { item: 1, billing_date: { $add: ['$date', 3 * 24 * 60 * 60000] } } },
]);
/* para adicionar á datas temos que fazer uma dessas operações pelo fato de um
dos argumentos ser sempre em milisegundos.. */

// $SUBTRACT

db.sales.aggregate([
  { $project: { item: 1, total: { $subtract: [{ $add: ['$price', '$fee'] }, '$discount'] } } },
]);
/* resultado:
{ "_id" : 1, "item" : "abc", "total" : 7 }
{ "_id" : 2, "item" : "jkl", "total" : 19 }
soma o preço e as taxas e subtração aplica o desconto retornando o valor final em
total. */

// EX 2 $subtract com data

db.sales.aggregate([{ $project: { item: 1, dateDifference: { $subtract: ['$$NOW', '$date'] } } }]);
/* exemplo acima utiliza a expressão $subtract para subtrair o valor do campo date
da data corrente, utilizando a variável de sistema NOW (disponível a partir da vers 4.2 do MongoDB)
e retorna a diferença em milissegundos */

db.sales.aggregate([{ $project: { item: 1, dateDifference: { $subtract: [new Date(), '$date'] } } }]);
// alternativamente poderia ser feito como acima usando new date

// $CEIL

db.samples.aggregate([{ $project: { value: 1, ceilingValue: { $ceil: '$value' } } }]);
// o exemplo acima usa ceil pra retornar um campo chamado ceilingValue que arredonda tudo pra cima.

// $FLOOR
db.samples.aggregate([{ $project: { value: 1, floorValue: { $floor: '$value' } } }]);
// faz o mesmo que ceil porém arredondando para baixo.

// $ABS

db.ratings.aggregate([{ $project: { delta: { $abs: { $subtract: ['$start', '$end'] } } } }]);
// retorna valor absoluto de diferença entre os valores usando o subtract em conjunto

// $multiply multiplica valores
// $divide divide valores. primeiro valor sendo dividendo e segundo divisor

db.planning.aggregate([{ $project: { name: 1, workdays: { $divide: ['$hours', 8] } } }]);
// acima divide as horas por 8 para descobrir quantos dias trabalhados.

// $addToFields

// Ex1

db.scores.aggregate([
  { $addFields: { totalHomework: { $sum: '$homework' }, totalQuiz: { $sum: '$quiz' } } },
  { $addFields: { totalScore: { $add: ['$totalHomework', '$totalQuiz', '$extraCredit'] } } },
]);

/* acima está sendo adicionado 3 novos campos. totalHomework somando o total de deveres,
totalQuiz que soma todos os valores de quiz e total score que soma os deveres, provas e créditos
extra da coleção */

