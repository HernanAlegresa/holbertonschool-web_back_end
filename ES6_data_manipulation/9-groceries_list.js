export default function groceriesList() {
  const groceries = new Map();  // Crear un nuevo Map con los productos y cantidades especificadas

  groceries.set('Apples', 10);
  groceries.set('Tomatoes', 10);
  groceries.set('Pasta', 1);
  groceries.set('Rice', 1);
  groceries.set('Banana', 5);

  return groceries;
}