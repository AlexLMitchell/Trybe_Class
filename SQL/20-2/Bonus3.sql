-- 3-Escreva uma query para exibir o nome das empresas, sem repetições, que provêm as peças com os quatro maiores preços.
SELECT DISTINCT * FROM PiecesProviders.Provides
ORDER BY price DESC
LIMIT 4;
