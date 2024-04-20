/*
  Crea un programa que cuente cuantas veces se repite cada palabra y que muestre el recuento final de todas ellas.
  - Los signos de puntuación no forman parte de la palabra.
  - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
  - No se pueden utilizar funciones propias del lenguaje que lo resuelvan automáticamente.
*/

function countWords(text) {
  const words = {};
  const arText = text.toLowerCase().split(" ");
  for (let w = 0; w < arText.length; w++) {
    const cleanWord = deleteExpression(arText[w]);
    if (words[cleanWord]) {
      words[cleanWord]++;
    } else {
      words[cleanWord] = 1;
    }
  }
  showKeysValue(words);
}

function deleteExpression(word) {
  const charactersToDelete = [",", ";", "."];
  let cleanWord = "";
  for (let c = 0; c < word.length; c++) {
    const currentWord = word[c];
    if (!charactersToDelete.includes(currentWord)) cleanWord += currentWord;
  }
  return cleanWord;
}

function showKeysValue(obj) {
  const arObj = Object.keys(obj);
  for (let o = 0; o < arObj.length; o++) {
    console.log(`${o + 1}. ${arObj[o]}: ${obj[arObj[o]]}`);
  }
}

countWords(
  "Esto es un texto de ejemplo, esto sirve para verificar que cuente palabras de un texto"
);

countWords("Palabra, perro, palabra, gato, Perro, hola, Hola, duda, hoLaS");
