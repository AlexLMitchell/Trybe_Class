let n=5;
let text = "";
let median = Math.floor(n/2);

for (i=0; i<median+2; i++) {
  for (j=0; j<n; j++){
    if(j<=median-i || j>=median+i){
      text += " ";
    } else {
      text += "*";
    }
  }
  console.log(text);
  text = "";
}