let pecaXadrez;
pecaXadrez = "Rook"

pecaXadrez = pecaXadrez.toLowerCase();

if (pecaXadrez === "rook")
  console.log("Move Horizontally or vertically any number of squares.");
else if (pecaXadrez === "bishop") console.log("Move Diagonal");
else if (pecaXadrez === "pawn") console.log("Vertically forward one square");
else if (pecaXadrez === "knight") console.log("Move in L shape");
else if (pecaXadrez === "queen") console.log("free roam");
else if (pecaXadrez === "king") console.log("One square in any direction");
else console.log("Error:Invalid Move");
