let nota = 89;
if (nota > 100 || nota < 0) console.log("Error!");
else if (nota >= 90) console.log("a");
else if (nota >= 80) console.log("b");
else if (nota >= 70) console.log("c");
else if (nota >= 60) console.log("d");
else if (nota >= 50) console.log("e");
else console.log("f");

//Changed "OR" to first line to avoid previous conflict where error appeard on screen no matter what.
