
// break: Sale por completo de un bucle, cuando se cumple una condición.
// continue: Omite el resto del código dentro del bucle **en esa vuelta** y pasa a la siguiente iteración.


const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log("** break **");
for (let i = 0; i < numeros.length; i++) {
  if (i === 5) {
    break;
  }

  console.log(numeros[i]);
}

console.log("\n** continue **");
for (let i = 0; i < numeros.length; i++) {
  if (i === 5) {
    continue;
  }

  console.log(numeros[i]);
}
