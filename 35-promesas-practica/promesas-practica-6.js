/* MULTIPLICACIÓN ASÍNCRONA

Crea una función multiplicarAsync(a, b) que:
- Devuelva una promesa.
- Si ambos son números, resuelve con a * b después de 1 segundo.
- Si alguno no es un número, rechaza con "Valores no válidos".
*/

function multiplicarAsync(a, b) {
  return new Promise((resolve, reject) => {
    if (typeof a === "number" && typeof b === "number"){
      setTimeout(() => {
        resolve(a * b);
      }, 1000);
    } else {
      return reject("Valores no válidos");
    };
  });
};


multiplicarAsync(12, 2)
.then(response => console.log("Resultado: ", response))
.catch(error => console.error(error));