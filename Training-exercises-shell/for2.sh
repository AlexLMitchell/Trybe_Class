#!/bin/bash

for item in /home/alex/Trybe/*
do
	if [ -d $item ]
	then
		echo "O item $item é um diretório"
	elif [ -f $item ]
	then
		echo "O item é um arquivo"
	fi
done
