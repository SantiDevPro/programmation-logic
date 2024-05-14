/*
  Escribe una función que calcule si un número dado es un número de Armstrong (o también llamado narcisista).
  Si no conoces qué es un número de Armstrong, debes buscar información al respecto.
*/

function isArmstrong(num) {
  const strNum = `${num}`;
  let nTotal = 0;
  for (let n = 0; n < strNum.length; n++) {
    nTotal += parseInt(strNum[n]) ** strNum.length;
  }
  console.log(`${num}: ${num === nTotal}`);
}

isArmstrong(371);
isArmstrong(21);
isArmstrong(407);
isArmstrong(705);
isArmstrong(153);
