export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true; // const para definir variables de bloque
    const task2 = false;
  }

  return [task, task2];
}
