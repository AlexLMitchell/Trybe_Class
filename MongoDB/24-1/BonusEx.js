/* As informações acima são sobre a Escola Jean Grey de Ensino Superior. Para todas as alterações realizadas, você deve sempre atualizar ou adicionar o campo lastUpdate, que armazena a data da última alteração com o tipo timestamp. Os exercícios devem ser realizados na ordem. */

// Exercício 14: Remova o campo class dos documentos que possuem esse campo com o valor unknown.

db.xmen.updateMany(
  { class: 'unknown' },
  { $unset: { class: '' }, $currentDate: { lastUpdate: { $type: 'timestamp' } } },
);

/* Exercício 15: Produza uma query que renomeie os campos de name para hero_name,
e de true_name para full_name; adicione o campo power com valor 100, em todos os
documentos. */

db.xmen.updateMany(
  {},
  {
    $rename: { name: 'hero_name', true_name: 'full_name' },
    $set: { power: 100 },
    $currentDate: { lastUpdate: { $type: 'timestamp' } },
  },
);

/* Exercício 16: Produza uma query onde os mutantes class ômega ou gama passam a
ter seu poder de 500 somente se seu poder for menor que 500. */

db.xmen.updateMany(
  { class: { $in: ['ômega', 'gama'] } },
  { $max: { power: 500 }, $currentDate: { lastUpdate: { $type: 'timestamp' } } },
);

/* Exercício 17: Produza uma query onde os mutantes class gama passam a ter seu poder de 300 somente se seu poder for maior que 300. */

db.xmen.updateMany(
  { class: 'gama' },
  { $min: { power: 300 }, $currentDate: { lastUpdate: { $type: 'timestamp' } } },
);

// Exercício 18: Decremente em 100 o poder dos mutantes não contêm a propriedade class.

db.xmen.updateMany(
  { class: { $exists: false } },
  { $inc: { power: -100 }, $currentDate: { lastUpdate: { $type: 'timestamp' } } },
);

/* Exercício 19: Em apenas uma query adicione o campo area com o seguinte array
como valor: [ "Students Room" ] a todos os mutantes que são Senior Staff que
tenham poder acima de 100 e para todos os Junior Staff com poder acima de 200. */

db.xmen.updateMany(
  {
    $or: [
      { $and: [{ occupation: 'Senior Staff' }, { power: { $gt: 100 } }] },
      { $and: [{ occupation: 'Junior Staff' }, { power: { $gt: 200 } }] },
    ],
  },
  { $set: { area: ['Students Room'] }, $currentDate: { lastUpdate: { $type: 'timestamp' } } },
);

/* Exercício 20: Em apenas uma query, adicione o campo áreas com [ "outside" ] a
todos os Junior Staff que não tenham o campo area definido. */

db.xmen.updateMany(
  { $and: [{ occupation: 'Junior Staff' }, { areas: { $exists: false } }] },
  { $set: { areas: ['Outside'] }, $currentDate: { lastUpdate: { $type: 'timestamp' } } },
);
