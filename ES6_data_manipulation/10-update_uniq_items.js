export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {  // Verificar si el argumento es un Map, Lanzar error si no es un Map
    throw new Error('Cannot process');
  }

  for (let [key, value] of map) {  // Iterar sobre los pares clave-valor del Map
    if (value === 1) {    // Si el valor es 1, actualizar a 100
      map.set(key, 100);
    }
  }

  return map;  // Devolver el Map actualizado
}