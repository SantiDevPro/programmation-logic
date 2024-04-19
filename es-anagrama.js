/*
  Escribe una función que reciba dos palabras (String) y retorne verdadero o falso (Bool) según sean o no anagramas.
  - Un Anagrama consiste en formar una palabra reordenando TODAS las letras de otra palabra inicial.
  - NO hace falta comprobar que ambas palabras existan.
  - Dos palabras exactamente iguales no son anagrama.
*/

function esAnagrama(str1, str2) {
  if (str1.split("").sort().join("") === str2.split("").sort().join("")) {
    console.log("Es anagrama", true);
  } else {
    console.log("No es anagrama", false);
  }
}

esAnagrama("amor", "aroma");
esAnagrama("tapa", "pata");
esAnagrama("arma", "rama");
esAnagrama("sapo", "sepa");
esAnagrama("ruta", "trua");
