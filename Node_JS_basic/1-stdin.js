// 1-stdin.js

console.log("Welcome to Holberton School, what is your name?");

process.stdin.on('data', (data) => {  // captura la entrada del usaurio y lo convierte en string
  const name = data.toString().trim();
  console.log(`Your name is: ${name}`);
  process.stdin.pause();  // pausa stdin para que no se quede esperando más entrada
});

process.on('exit', () => {  // termina el proceso de espera de entrada del usuario y muestra mensaje
  console.log("This important software is now closing");
});
