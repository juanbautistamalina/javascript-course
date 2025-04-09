/* Cortocircuito OR: Cuando el valor de la izquierda en la expresión siempre pueda
 * validar a true, es el valor que se cargará por defecto.
 */

function saludar(nombre) {
  nombre = nombre || "Desconocido";
  console.log(`Mi nombre es ${nombre}`);
}
saludar("Juan");
saludar();

console.log("cadena" || "Valor de la derecha");  // Salida: cadena
console.log(19 || "Valor de la derecha");        // Saluda: 19
console.log(true || "Valor de la derecha");      // Salida: true
console.log([] || "Valor de la derecha");        // Salida: []
console.log({} || "Valor de la derecha");        // Salida: {}
console.log(false || "Valor de la derecha");     // Salida: 'Valor de la derecha'
console.log(null || "Valor de la derecha");      // Salida: 'Valor de la derecha'
console.log(undefined || "Valor de la derecha"); // Salida: 'Valor de la derecha'
console.log("" || "Valor de la derecha");        // Salida: 'Valor de la derecha'

/* Cortocircuito AND: Cuando el valor de la izquierda en la expresión siempre pueda
 * validar a false, es el valor que se cargará por defecto.
 */

console.log("cadena" && "Valor de la derecha");  // Salida: 'Valor de la derecha'
console.log(19 && "Valor de la derecha");        // Saluda: 'Valor de la derecha'
console.log(true && "Valor de la derecha");      // Salida: 'Valor de la derecha'
console.log([] && "Valor de la derecha");        // Salida: 'Valor de la derecha'
console.log({} && "Valor de la derecha");        // Salida: 'Valor de la derecha'
console.log(false && "Valor de la derecha");     // Salida: false
console.log(null && "Valor de la derecha");      // Salida: null
console.log(undefined && "Valor de la derecha"); // Salida: undefined
console.log("" && "Valor de la derecha");        // Salida: ""