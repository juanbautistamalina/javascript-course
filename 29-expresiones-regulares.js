/* Expresiones Regulares: Son una secuencia de caractéres que forman un patrón de búsqueda. 
*  Principalmente utilizado en la búsqueda de cadenas de texto. 

   Documentación:
   - https://es.wikipedia.org/wiki/Expresi%C3%B3n_regular
   - https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions  
*/

let cadena =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco lorem laboris nisi ut aliquip ex lorem ea commodo consequat lorem";

// Algunos ejemplos:
// \d: Decimales
// [0-9]: Desde el 0 al 9
// palabra{1,}: Repetición al menos 1 vez

let expReg = new RegExp("lorem", "ig");
let expReg2 = /lorem/ig;

console.log(expReg.test(cadena));
console.log(expReg.exec(cadena));