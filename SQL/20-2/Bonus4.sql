-- 4-Escreva uma query para exibir todas as informações das peças que são providas pela empresa HAL. Ordene o resultado pelos preços dos peças de forma decrescente.
SELECT * FROM PiecesProviders.Provides
WHERE provider = 'HAL'
ORDER BY price DESC;
