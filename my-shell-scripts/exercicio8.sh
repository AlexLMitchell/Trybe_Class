#!/bin/bash

FILE=$@
echo "Digite o nome de um arquivo ou diretorio:"

if [ -f $FILE ]
then
        echo "$FILE é um arquivo comum"

elif [ -d $FILE ]
then
        echo "$FILE é um diretorio comum"
else

        echo "$FILE é outro tipo de arquivo"
fi
ls -l $FILE

