// $all
db.inventory.find({ tags: { $all: ['ssl', 'security'] } });
// a query acima seria o mesmo de usar $and porém para arrays e poupa linha de codigo

// $eleMatch

db.survey.find({ results: { $elemMatch: { product: 'xyz', score: { $gte: 8 } } } });
// a query acima retorna o match de apenas os elementos de xyz igual ou acima de 8

// $size

db.products.find({ tags: { $size: 2 } });
// a query $size retorna apenas os elementos cujos arrays tenham o tamanho especificado

// $where

db.players.find({
  $where: function () {
    return hex_md5(this.name) == '9b53e667f30cd329dca1ec9e6a83e994';
  },
});
// $where utiliza funções JS para realizar queries. A função acima compara o hash md5 com nomes

// $expr

db.monthlyBudget.find({
  $expr: { $gt: ['$spent', '$budget'] },
});
// $expr na query acim serve para retornar apenas doc onde spent seja maior que budget.
// o $ antes de spent e budget indica que a string referencia um campo.

// $regex

db.products.find({ sku: { $regex: /789$/ } });
// seleciona todos os documentos em que o campo sku termina com "789"
db.products.find({ sku: { $regex: /^ABC/i } });
// seleciona todos os documentos com ABC sendo case-insensitive.

/* O operador $text faz uma busca "textual" em um campo indexado por um text index. A expressão
para utilizar o $text tem a seguinte sintaxe:
{
text:
    {
search: <string>,
language: <string>,
caseSensitive: <boolean>,
diacriticSensitive: <boolean>
    }
} */

