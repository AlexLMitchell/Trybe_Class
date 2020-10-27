-- 7-Escreva uma query para exibir o nome e as horas dos três projetos com a maior quantidade de horas.

SELECT name, hours FROM Scientists.Projects 
ORDER BY hours DESC
LIMIT 3;
