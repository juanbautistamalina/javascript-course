/* COMPOSICIÓN DE CÁLCULOS

Crea una función procesarNumeros(num1, num2, suma, multiplicacion, callbackFinal) que:

1) Sume los números usando la función suma.
2) Multiplique el resultado por un número fijo (ej. 2) usando multiplicacion.
3) Pase el resultado final a callbackFinal.

*/

const sumar = (a, b) => a + b;
const multiplicar = (a, b) => a * b;


function procesarNumeros(num1, num2, suma, multiplicacion, callbackFinal) {
  let resultado = suma(num1, num2);
  resultado = multiplicacion(resultado, 2);
  callbackFinal(resultado);
};

procesarNumeros(2, 5, sumar, multiplicar, (res) => {
  console.log("El resultado es: ", res);
});
