-- 4-Escreva uma query para exibir o resultado de uma expressão aritmética qualquer
SELECT FLOOR(RAND() *(10 -1 + 1)) + 1 /* 
FLOOR(RAND()*(b-a+1))+a; onde b = maior numero e a = menor numero aleatorio
 FLOOR serve para a expressão encontrar um numero inteiro ao invés de decimal
 No exemplo acima a expressão retorna um número aleatório >=1 e <=10
*/;
