-- LEFT, RIGHT AND INNER JOIN

SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM customer c
LEFT JOIN actor a
ON c.last_name = a.last_name
ORDER BY c.last_name;

SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM customer c
RIGHT JOIN actor a
ON c.last_name = a.last_name
ORDER BY c.last_name;

SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM customer c
INNER JOIN actor a
ON c.last_name = a.last_name
ORDER BY c.last_name;

-- SELF JOIN

-- Exercício 1: Queremos saber os ids e custos de substituição dos filmes que possuem o mesmo custo de substituição

SELECT A.film_id, A.replacement_cost, B.film_id, B.replacement_cost
FROM sakila.film AS A, sakila.film AS B
WHERE A.replacement_cost = B.replacement_cost;

-- Exercício 2: Exiba o titulo e a duração de empréstimo dos filmes que possuem a
-- mesma duração. Exiba apenas os filmes com a duração de empréstimo entre 2 a 4
-- dias.

SELECT A.title, A.rental_duration, B.title, B.rental_duration
FROM sakila.film AS A, sakila.film AS B
WHERE A.rental_duration = B.rental_duration
HAVING A.rental_duration BETWEEN 2 AND 4;

-- UNION, UNION ALL

-- Exercício 1: Todos os funcionários foram promovidos a atores.
-- Monte uma query que exiba a união da tabela staff com a tabela actor, exibindo
-- apenas o nome e o sobrenome. Seu resultado não deve excluir nenhum funcionário
-- ao unir as tabelas.

SELECT first_name, last_name FROM sakila.actor
UNION ALL
SELECT first_name, last_name FROM sakila.staff;

-- Exercício 2: Monte uma query que una os resultados das tabelas customer e
-- actor, exibindo os nomes que contém a palavra "tracy" na tabela customer e os
-- que contém "je" na tabela actor. Exiba apenas os resultados únicos.

SELECT first_name FROM customer WHERE first_name LIKE '%tracy%'
UNION
SELECT first_name FROM actor WHERE first_name LIKE '%je%';

-- Exercício 3: Monte uma query que exiba a união dos 5 últimos nomes da tabela
-- actor, o primeiro nome da tabela staff e 5 nomes a partir da 15ª posição da
-- tabela customer. Não permita que dados repetidos sejam exibidos. Ordene os
-- resultados em ordem alfabética.

(SELECT first_name from sakila.actor ORDER BY actor_id DESC LIMIT 5)
UNION
(SELECT first_name from sakila.staff LIMIT 1)
UNION
(SELECT first_name FROM sakila.customer LIMIT 5 OFFSET 15)
ORDER BY first_name;

-- Exercício 4: Você quer exibir uma lista paginada com os nomes e sobrenomes de
-- todos os clientes e atores do banco de dados, em ordem alfabética. Considere
-- que a paginação está sendo feita de 15 em 15 resultados e que você está na 4ª
-- página. Monte uma query que simule esse cenário.

(SELECT first_name, last_name
 FROM   sakila.customer
 ORDER  BY first_name, last_name
 LIMIT  60)
UNION
(SELECT first_name, last_name
 FROM   sakila.actor
 ORDER  BY first_name, last_name
 LIMIT  60)
ORDER  BY first_name, last_name
LIMIT 15
OFFSET 45;

