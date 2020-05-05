#!/bin/bash

file="/home/alex/Trybe/exercicio3.sh"

if [ -e "$file" ]
	then
 echo "O caminho $file está habilitado"
fi
if [ -w $file ]
then 
echo "Você tem permissão para editar $file"
else
echo "você NÃO foi autorizado a editar $file"
fi
