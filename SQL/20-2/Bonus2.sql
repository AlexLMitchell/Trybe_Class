-- 2-Escreve uma query para exibir todas as informações das cinco peças com os maiores preços.
SELECT * FROM PiecesProviders.Provides
ORDER BY price DESC
LIMIT 5;
