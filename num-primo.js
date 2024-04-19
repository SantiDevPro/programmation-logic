/*
  Escribe un programa que se encargue de comprobar si un número es o no primo.
  Hecho esto, imprime los números primos entre 1 y 100.
*/

function esPrimo(num) {
  if (num < 2) return false;
  for (let n = 2; n < num; n++) {
    if (num % n == 0) return false;
  }
  return true;
}

function printNumPrimos(num) {
  for (let n = 1; n <= num; n++) {
    if (esPrimo(n)) {
      console.log(n);
    } else {
      continue;
    }
  }
}

printNumPrimos(100);
