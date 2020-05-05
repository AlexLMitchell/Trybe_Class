#!/bin/bash

arquivo=/home/alex/Trybe/lista.txt

for nomes in `cat $arquivo`
do
	echo $nomes
done
