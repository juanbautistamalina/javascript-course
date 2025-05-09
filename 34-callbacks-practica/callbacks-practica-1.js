/* CALCULADORA BÁSICA CON CALLBACK

Crea una función que reciba dos números, una operación matemática 
(como suma o resta) y un callback. La función debe aplicar la operación y 
pasar el resultado al callback.
*/

function calculadoraCallback(num1, num2, operacion, callback) {
  const resultado = operacion(num1, num2);
  callback(resultado);
}

function sumar(a, b) {
  return a + b
}

function restar(a, b) {
  return a - b;
}

calculadoraCallback(2, 2, sumar, (res) => {
  console.log("Resultado: " , res)
})