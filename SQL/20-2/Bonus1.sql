-- 1-Escreva uma query para exibir a peça e o preço de tudo que é provido pela empresa RBT.
SELECT piece, price FROM PiecesProviders.Provides
WHERE provider LIKE 'RBT';
