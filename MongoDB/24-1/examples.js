// update one

db.inventory.updateOne(
  { item: "paper" },
  { $set: { "size.uom": "cm", status: "P" } }
);

// update many
db.inventory.updateMany({ qty: { $lt: 50 } }, { $set: { 'size.uom': 'in', status: 'P' } });

// update

db.products.update(
  { _id: 100 },
  {
    $set: {
      quantity: 500,
      details: { model: '14Q3', make: 'xyz' },
      tags: ['coats', 'outerwear', 'clothing'],
    },
  },
);

// update em sub documento

db.products.update(
  { _id: 100 },
  { $set: { "details.make": "zzz" } } // dot notation para acessar subdoc
);

// manipulando arrays 

db.products.update(
  { _id: 100 },
  { $set: {
      "tags.1": "rain gear", // arrays em mongo voltam a usar index a partir do 0
      "ratings.0.rating": 2 // usa dotnotation + o index para alterar arrays.
    }
  }
);

// mul

db.products.update(
  { _id: 1 },
  { $mul: { price: NumberDecimal("1.25"), qty: 2 } }
); // valores inseridos dentro de mul sao os que irao multiplicar o original

//INCREMENT valores são incrementados ou decrementados no update pelo numero informado

db.increment.update(
  { sku: "abc123" },
  { $inc: { quantity: -2, "metrics.orders": 1 } }
);

/* MIN/MAX faz a comparação e utiliza um update conforme o maior ou menor numero
em relação ao valor inserido */
use conteudo_trybe;
db.scores.insertOne(
  { _id: 1, highScore: 800, lowScore: 200 }
);

// a operação abaixo não irá alterar o update pois o lowscore é menor que 250
db.scores.update({ _id: 1 }, { $min: { lowScore: 250 } })

// a operação abaixo altera o update pois 950 é maior que 800.

db.scores.update({ _id: 1 }, { $max: { highScore: 950 } });

// manipulando data

db.customers.updateOne(
  { _id: 1 },
  { $currentDate: {
      lastModified: true, // true para atribuir o valor da data corrente ao campo usando o tipo Date
      "cancellation.date": { $type: "timestamp" } // type define o tipo "timestamp"
    }, $set: {
      "cancellation.reason": "user request",
      status: "D"
    }
  }
);

// rename

use conteudo_trybe;
db.fruits.insertOne(
  { _id: 100, name: "Banana", quantity: 100, inStock: true }
);

// a alteração abaixo usa rename para trocar name por productName

db.fruits.updateOne(
  { name: "Banana" },
  { $rename: {
      "name": "productName"
    }
  }
);

// unset para deletar valores como abaixo

db.fruits.updateMany(
  { productName: "Banana" },
  { $unset: { quantity: "" } }
);

