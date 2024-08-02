export default function hasValuesFromArray(set, array) {
  return array.every(element => set.has(element));  // Usar every para verificar si cada elemento del array está en el Set
}