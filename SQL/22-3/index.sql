-- Avaliar impacto de usar index em uma tabela
CREATE INDEX index_first_name ON sakila.actor(first_name);

-- Verificar custo de execução no workbench
SELECT *
FROM sakila.actor
WHERE first_name = 'RITA';

-- Agora verifique sem o index
DROP INDEX index_first_name ON sakila.actor;

SELECT *
FROM sakila.actor
WHERE first_name = 'RITA';

-- Comparar o mesmo com FULLTEXT INDEX
CREATE FULLTEXT INDEX index_address ON sakila.address(address);

SELECT *
FROM sakila.address
WHERE MATCH(address) AGAINST('drive');

-- Agora sem:

DROP INDEX index_address ON sakila.address;

SELECT *
FROM sakila.address
WHERE address LIKE '%drive%';

