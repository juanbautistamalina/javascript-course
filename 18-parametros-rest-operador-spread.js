// Parámetros REST: Son una forma de agregar parámetros infinitos a funciones o variables.
// Usado en funciones, el parámetro "c" siempre va a ser un array

function sumar(a, b, ...c) {
  let resultado = a + b;

  c.forEach(function (n) {
    resultado += n;
  });
  return resultado;
}

console.log(sumar(1, 2, 10));

// Operador Spread: Permite copiar o expandir los elementos de un array u objeto en otro lugar.
// Se usa para combinar, clonar o pasar valores de forma sencilla.

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];

const arr3 = [...arr1, ...arr2];
console.log(arr3);
