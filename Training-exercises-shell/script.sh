#!/bin/bash

Teste=cd unix_tests 

if [ $Teste -d  ]
	echo "Diretorio"
elif [ $Teste -f ]
then
	echo "Arquivo
fi
