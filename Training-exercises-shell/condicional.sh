#!/bin/bash

mkdir Alex

var1="Aff"
var2="merda"
var3="Alex"

if ls $var1
then
	echo"diretorio $var1 encontrado"
elif ls $var2
then
	echo "Diretorio $var2 encontrado"
elif ls $var3
then
	echo "diretorio $var3 encontrado"
else 
	echo "Não existe nenhum diretorio com esses nomes"
fi
