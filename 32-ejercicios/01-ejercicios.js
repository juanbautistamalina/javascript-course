/* 1) Programa una función que cuente el número de caracteres de una cadena de texto, 
   pe. miFuncion("Hola Mundo") devolverá 10.
*/

// function contarCaracteres(cadena = "") {
//   if (typeof cadena === "string") {
//     console.log(`La cadena "${cadena}" tiene ${cadena.length} caracteres`);
//   } else {
//     console.log("Introduce una cadena");
//   }
// }


const contarCaracteres = (cadena = "") =>
  (!cadena)
  ? console.warn("No ingresaste ninguna cadena")
  : (typeof cadena !== "string")
    ? console.error("Ingresaste un valor diferente de una cadena") 
    : console.log(`La cadena "${cadena}" tiene ${cadena.length} caracteres`)

contarCaracteres("Hola Mundo");

// ---------------------------------------------

/* 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados,
   pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
*/

// function recortarCadena(cadena = "", numero) {
//   if (typeof cadena === "string") {
//     let nuevaCadena = "";

//     for (let i = 0; i < numero; i++) {
//       nuevaCadena += cadena[i];
//     }

//     console.log(`La cadena ${cadena} recortada a ${numero} caracteres, es: ${nuevaCadena}`);

//   } else {
//     console.log("Introduce una cadena");
//   }
// }

const recortarCadena = (cadena = "", longitud = undefined) => 
(!cadena)
? console.warn("No ingresaste ninguna cadena")
: (typeof cadena !== "string")
  ? console.error("Ingresaste un valor diferente de una cadena") 
  : (longitud === undefined || longitud <= 0)
    ? console.error("Ingresaste una longitud no válida")
    : console.log(cadena.slice(0, longitud))

recortarCadena("Hola Mundo", 4);

// ---------------------------------------------

/* 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, 
    pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
*/

// function stringToArray(cadena = "", separador) {
//   if (typeof cadena === "string") {
//     let nuevaCadena = cadena.split(separador);
//     console.log(`La cadena "${cadena}" separada por '${separador}' queda así: [${nuevaCadena}]'`);
//   } else {
//     console.log("Introduce una cadena");
//   }
// }

const stringToArray = (cadena = "", separador = undefined) => 
  (!cadena)
  ? console.warn("No ingresaste ninguna cadena")
  : (typeof cadena !== "string")
    ? console.error("Ingresaste un valor diferente de una cadena") 
    : (separador === undefined)
      ? console.warn("No ingresaste ningún separador")
      : console.log(cadena.split(separador))

stringToArray("hola que tal", " ");

// ---------------------------------------------

/* 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) 
   devolverá Hola Mundo Hola Mundo Hola Mundo.
*/

// function repetirCadena(cadena = "", repeticiones) {
//   if (typeof cadena === "string") {
//     console.log("\nRepetición de cadena:")
//     for (let i = 0; i < repeticiones; i++) {
//       console.log(cadena);
//     }
//   } else {
//     console.log("Introduce una cadena");
//   }
// }

const repetirCadena = (cadena = "", repeticiones = undefined) => {
  
  if (!cadena) return console.warn("No ingresaste ninguna cadena");

  if (typeof cadena !== "string") return console.error("Ingresaste un valor diferente de una cadena"); 

  if (repeticiones === undefined) return console.warn("No ingresaste las repeticiones"); 
  
  if (repeticiones === 0) return console.error("El número de repeticiones no puede ser 0");

  if (Math.sign(repeticiones) === -1) return console.error("El número de repeticiones no puede ser negativo");
  
  
  for (let i = 1; i <= repeticiones; i++) console.log(cadena)
}

repetirCadena("Hola Mundo", 3);