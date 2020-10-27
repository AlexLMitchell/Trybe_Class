-- 10-Escreva uma query para exibir todas as informações dos cinco projetos com a menor quantidade de horas.
SELECT * FROM Scientists.Projects
ORDER BY hours
LIMIT 5;
