// push abaixo insere items no documento vazio supplies

db.supplies.updateOne(
  { _id: 1 },
  {
    $push: {
      items: {
        name: 'notepad',
        price: 35.29,
        quantity: 2,
      },
    },
  },
  { upsert: true },
);

// modificador $each
// operação abaixo insere vários produtos no array
db.supplies.updateOne(
  {},
  {
    $push: {
      items: {
        $each: [
          { name: 'pens', price: 56.12, quantity: 5 },
          { name: 'envelopes', price: 19.95, quantity: 8 },
        ],
      },
    },
  },
  { upsert: false },
);

// Múltiplos modificadores

db.supplies.updateOne(
  { _id: 1 },
  {
    $push: {
      items: {
        $each: [
          { name: 'notepad', price: 35.29, quantity: 2 },
          { name: 'envelopes', price: 19.95, quantity: 8 },
          { name: 'pens', price: 56.12, quantity: 5 },
        ],
        $sort: { quantity: -1 }, // ordena em decrescente
        $slice: 2, // remove notepad
      },
    },
  },
  { upsert: true },
);

// pop remover primeiro item

db.supplies.updateOne({ _id: 1 }, { $pop: { items: -1 } });

// pop remover o ultimo item

db.supplies.update({ _id: 1 }, { $pop: { items: 1 } });

// removendo multiplos itens do array

db.supplies.updateMany({}, { pull: { items: { name: { $in: ['pens', 'envelopes'] } } } });

// removendo multiplos itens com condição no pull
// { _id: 1, votes: [3, 5, 6, 7, 7, 8] }

db.profiles.updateOne({ _id: 1 }, { pull: { votes: { $gte: 6 } } });

// o pull abaixo retira apenas do primeiro nivel do array e não do segundo.
//ainda aprenderemos mais a frente como contornar isso.

db.survey.updateMany({}, { pull: { results: { score: 8, item: 'B' } } });

// $addToSet

db.inventory.update({ _id: 1 }, { $addToSet: { tags: 'accessories' } });

// A operação abaixo acima o elem "accessories" ao array tags desde que já não exista no array.

// ARRAY FILTERS


db.recipes.updateMany( // Passamos de updateOne para updateMany.
    {}, // Retiramos a restrição do título.
    { $set : {
      "ingredients.$[elemento].unit": "xícara", // Setamos `unit` como "xícara",
      "ingredients.$[elemento].name": "Farinha Integral"// `name` como "Farinha Integral".
      }
    }, 
    { arrayFilters: [ { "elemento.name": "Farinha" } ]} // Filtramos os arrays que o valor da propriedade `name` seja "Farinha".
  )
// acima substituimos pelo filtro todos os arrays que tenham farinha por farinha integral com unidade de xicara

