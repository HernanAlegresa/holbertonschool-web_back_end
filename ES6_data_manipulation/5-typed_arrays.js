export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);  // crear un nuevo buffer de longitud especificada, ArrayBuffer = es un bloque de memoria en binario

  if (position < 0 || position >= length) {  // verificar si la posición es válida, lanzar un error si la posición está fuera de rango
    throw new Error('Position outside range');
  }

}
