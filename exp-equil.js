/*
  Crea una función que reciba dos cadenas como parámetro (str1, str2) e imprima otras dos cadenas como salida (out1, out2).
  - out1 contendrá todos los caracteres presentes en la str1 pero NO estén presentes en str2.
  - out2 contendrá todos los caracteres presentes en la str2 pero NO estén presentes en str1.
*/

function expEqual(str1, str2) {
  let out1 = "",
    out2 = "";
  for (let c1 = 0; c1 < str1.length; c1++) {
    if (!str2.includes(`${str1[c1]}`)) {
      out1 += str1[c1];
    }
  }
  for (let c2 = 0; c2 < str2.length; c2++) {
    if (!str1.includes(`${str2[c2]}`)) {
      out2 += str2[c2];
    }
  }
  console.log("Resultado 1: ", out1, "\n Resultado 2: ", out2);
}

expEqual("{a - [2 + b(c + d)]}", "[x + (a - c + d) + (y - z)]");
expEqual("1, 2, 3, 5, 7, 9, 11", "2, 4, 6, 10");
