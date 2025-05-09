/* DOBLE DE UN NÚMERO

Creá una función que reciba un número y devuelva su doble después de 1.5 segundos con una promesa.
Luego, usá async/await para obtener ese resultado y mostrarlo.
*/

function calcularDoble(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof num === "number") resolve(num * 2);
      else reject("El valor proporcionado no es un número");
    }, 1500);
  });
}

async function getDoble() {
  try {
    const num = 10;
    const doble = await calcularDoble(num);
    console.log(`${num} x 2 = ${doble}`);
  } catch (error) {
    console.error("Error:", error);
  }
}

getDoble();
