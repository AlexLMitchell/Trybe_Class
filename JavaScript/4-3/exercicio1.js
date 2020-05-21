let n = 5;
for (let i = 0; i < n; i++) {
    let star = '';
    for (let j = 0; j < n; j += 1) {
        star += '*';
    }
    console.log(star);
}

//criar variavel para inserir "*"
// O uso mais frequente de i e j é iteração dentro de um array.
//Mas o mais importante a se entender é que esse i e j são variáveis de controle.
//entender o porquê do for dentro do outro a gente tem que imaginar uma representação gráfica do array e da matriz
//O array é como se fosse uma linha só, com várias colunas e a matriz é como se fosse uma tabela.
