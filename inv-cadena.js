/*
  Crea un programa que invierta el orden de una cadena de texto sin usar funciones propias del lenguaje que lo hagan de forma automática.
  - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
*/

function invertString(text) {
  let invertText = "";
  for (let l = 0; l < text.length; l++) {
    invertText = text[l] + invertText;
  }
  console.log(invertText);
}

invertString("Hola gente");
invertString("Sigue así crack");
invertString("lógica");
invertString("oditrevni otxeT");
