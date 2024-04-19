/*
  Crea una única función (importante que sólo sea una) que sea capaz de calcular y retornar el área de un polígono.
  - La función recibirá por parámetro sólo UN polígono a la vez.
  - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
  - Imprime el cálculo del área de un polígono de cada tipo.
*/

const polygon = {
  triangle: areaTriangle,
  rectangle: areaRectagle,
  square: areaSquare,
};

function areaPolygon(polyn, base, height = 0) {
  if (polygon[polyn]) {
    console.log(
      height == 0 ? polygon[polyn](base) : polygon[polyn](base, height)
    );
  } else {
    console.log("Lo siento, no soportamos ese poligono aún");
  }
}

function areaTriangle(base, height) {
  return (base * height) / 2;
}

function areaRectagle(base, height) {
  return base * height;
}

function areaSquare(side) {
  return side ** 2;
}

areaPolygon("triangle", 20, 10);
areaPolygon("rectangle", 20, 10);
areaPolygon("square", 20);
