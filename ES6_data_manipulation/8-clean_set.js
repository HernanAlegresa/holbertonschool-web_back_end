export default function cleanSet(set, startString) {
  // Verificar que startString no sea una cadena vacía
  if (!startString || startString.length === 0) {
    return '';
  }

  // Filtrar y transformar los valores del Set
  const filterValues = [...set]
    .filter(value => typeof value === 'string' && value.startsWith(startString))
    .map(value => value.slice(startString.length));

  // Unir los valores transformados con '-'
  return filterValues.join('-');
}
