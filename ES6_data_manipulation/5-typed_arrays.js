export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);  // crear un nuevo buffer de longitud especificada, ArrayBuffer = es un bloque de memoria en binario
  const int8View = new Int8Array(buffer);  // crear una vista de datos Int8 sobre el buffer

  if (position < 0 || position >= length) {  // verificar si la posición es válida, lanzar un error si la posición está fuera de rango
    throw new Error('Position outside range');
  }
  int8View[position] = value;  // asignar el valor en la posición especificada

  return int8View;   // retornar la vista de datos
}
