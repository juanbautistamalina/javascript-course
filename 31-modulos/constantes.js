// Exportación de constantes
export const PI = Math.PI;
export let usuario = "Juan";

// Exportación de funciones y clases
export function saludar() {
  console.log("Función exportada");
}

export class Saludar {
  constructor() {
    console.log("Clase exportada");
  }
}

// Export default
export default function miFuncion() {
  console.log("Función exportada por defecto");
}

/* ¿Por qué  no puede usarse directamente export default en las variables y constantes?

  export default const nombre = 'Lucía'; // ❌ ERROR

  Respuesta: Como son expresiones, al momento de aplicar el export default, JavaScript no sabe todavía qué
  va a almacenarse. 

  Para usar export default en una constante o variable, hay que hacerlo en la línea siguiente:
  let password = 12345;
  export default password; ✅

  DATO IMPORTANTE: Un módulo (archivo) no puede tener más de 1 export default.

*/

