/*
  Escribe un programa que imprima los 50 primeros números de la sucesión de Fibonacci empezando en 0.
  - La serie Fibonacci se compone por una sucesión de números en la que el siguiente siempre es la suma de los dos anteriores.
  0, 1, 1, 2, 3, 5, 8, 13...
*/

const number = 50;

function fibonacci(num) {
  const arFib = [0, 1];
  let n1 = 0,
    n2 = 1;
  for (let n = 0; n < num; n++) {
    const nFib = n1 + n2;
    arFib.push(nFib);
    n1 = n2;
    n2 = nFib;
    n++;
  }
  console.log(arFib.join(", "));
}

fibonacci(number);
