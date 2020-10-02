let n=5;
let star = "";
let nlinhas = Math.floor(n/2);

for (i=0; i<nlinhas+2; i++) {
  for (j=0; j<n; j++){
    if(j<=nlinhas-i || j>=nlinhas+i){
      star += " ";
    } else {
      star += "*";
    }
  }
  console.log(star);
  star = "";
}

//Math.floor() função que retorna o maior integral menor ou igual ao numero apresentado.
// primeiro for executa n de linhas e segundo o design de cada coluna
//