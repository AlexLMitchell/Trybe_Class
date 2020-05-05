#!/bin/bash

if [ $USER = roberto ] | [ -x operadores2.sh ]
then 
	echo "O usuario eh o $USER e tem permissão sobre o arquivo"
else
	echo "Ou o usuario não é o root ou não tem permissão sobre o arquivo"
fi
