/*
  Escribe una función que reciba un texto y retorne verdadero o falso (Boolean) según sean o no palíndromos.
  Un Palíndromo es una palabra o expresión que es igual si se lee de izquierda a derecha que de derecha a izquierda.
  NO se tienen en cuenta los espacios, signos de puntuación y tildes.
  Ejemplo: Ana lleva al oso la avellana.
*/

function isPalindromo(text) {
  const arText = text.toLowerCase().split(" ");
  const text1 = arText.join("");
  let text2 = "";
  for (let c = 0; c < text1.length; c++) {
    text2 = text1[c] + text2;
  }
  console.log(`${text}: `, text1 == text2);
}

isPalindromo("Oso");
isPalindromo("No soy palindromo");
isPalindromo("Amor a la roma");
isPalindromo("Los osos del sol");
isPalindromo("Ana lleva al oso la avellana");
