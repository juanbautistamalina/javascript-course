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

// Solución minimizada
const contarCaracteres = (cadena) =>
    typeof cadena === "string"
? console.log(`La cadena "${cadena}" tiene ${cadena.length} caracteres`)
: console.log("Introduce una cadena");


contarCaracteres("Hola Mundo");
// ---------------------------------------------

/* 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados,
   pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
*/

function recortarCadena(cadena = "", numero) {
  if (typeof cadena === "string") {
    let nuevaCadena = "";

    for (let i = 0; i < numero; i++) {
      nuevaCadena += cadena[i];
    }

    console.log(`La cadena ${cadena} recortada a ${numero} caracteres, es: ${nuevaCadena}`);

  } else {
    console.log("Introduce una cadena");
  }
}

recortarCadena("Hola Mundo", 4);

// ---------------------------------------------

/* 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, 
    pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
*/

function stringToArray(cadena = "", separador) {
  if (typeof cadena === "string") {
    let nuevaCadena = cadena.split(separador);
    console.log(`La cadena "${cadena}" separada por '${separador}' queda así: [${nuevaCadena}]'`);
  } else {
    console.log("Introduce una cadena");
  }
}

stringToArray("hola que tal", " ");

// ---------------------------------------------

/* 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) 
   devolverá Hola Mundo Hola Mundo Hola Mundo.
*/

function repetirCadena(cadena = "", repeticiones) {
  if (typeof cadena === "string") {
    console.log("\nRepetición de cadena:")
    for (let i = 0; i < repeticiones; i++) {
      console.log(cadena);
    }
  } else {
    console.log("Introduce una cadena");
  }
}

repetirCadena("Hola Mundo", 3);