/*
  Escribe una función que calcule y retorne el factorial de un número dado de forma recursiva.
*/

function nFactorial(num) {
  if (num == 0 || num == 1) return 1;
  return num * nFactorial(num - 1);
}

function strFactorial(num) {
  if (num == 0 || num == 1) return "1";
  return `${num}x${strFactorial(num - 1)}`;
}

function factorial(num) {
  let total = nFactorial(num);
  const strTotal = strFactorial(num);
  console.log(`${strTotal} = ${total}`);
}

factorial(0);
factorial(1);
factorial(5);
factorial(9);
factorial(15);
