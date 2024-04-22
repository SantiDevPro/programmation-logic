/*
  Crea un programa que sea capaz de transformar texto natural a código morse y viceversa.
  - Debe detectar automáticamente de qué tipo se trata y realizar la conversión.
  - En morse se soporta raya "—", punto ".", un espacio " " entre letras o símbolos y dos espacios entre palabras "  ".
  - El alfabeto morse soportado será el mostrado en https://es.wikipedia.org/wiki/Código_morse.
*/

const morseCode = {
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
};

function parseToMorseCode(text) {
  let textMorseCode = "";
  for (let c = 0; c < text.length; c++) {
    if (text[c] == " ") {
      textMorseCode += "  ";
    } else {
      text[c + 1] == " " || c == text.length - 1
        ? (textMorseCode += `${morseCode[text[c].toLowerCase()]}`)
        : (textMorseCode += `${morseCode[text[c].toLowerCase()]} `);
    }
  }
  return textMorseCode;
}

function parseToTextNatural(text) {
  let textNormal = "";
  const wordsMorseCode = text.split("  ");
  for (let w = 0; w < wordsMorseCode.length; w++) {
    let wordNormal = "";
    const charsMorseCode = wordsMorseCode[w].split(" ");
    for (let c = 0; c < charsMorseCode.length; c++) {
      wordNormal += morseCode[charsMorseCode[c]];
    }
    textNormal += `${wordNormal} `;
  }
  return textNormal;
}

function parseText(text) {
  const regex = /[a-zA-Z]/;
  if (regex.test(text)) {
    return parseToMorseCode(text);
  } else {
    return parseToTextNatural(text);
  }
}

console.log(parseText("Hola amigo"));
console.log(parseText(".... --- .-.. .-  .- -- .. --. ---"));
console.log(parseText("Santiago Gavidia"));
console.log(parseText("... .- -. - .. .- --. ---  --. .- ...- .. -.. .. .-"));
