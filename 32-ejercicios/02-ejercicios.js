/* 5) Programa una función que invierta las palabras de una cadena de texto, 
   pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
*/

const invertirPalabras = (cadena = "") =>
  (!cadena)
    ? console.warn("No ingresaste una cadena")
    : typeof cadena !== "string"
        ? console.error("Ingresaste un valor diferente de una cadena")
        : console.log(cadena.split("").reverse().join(""));

invertirPalabras("Hola Mundo");

// ---------------------------------------------

/* 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, }
 *  pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
 */

const contarPalabra = (cadena = "", palabra = "") => {
    if (!cadena) return console.warn("No ingresaste una cadena");

    if (typeof cadena !== "string") return console.error("Ingresaste un valor diferente de una cadena en el texto");

    if (!palabra) return console.error("No ingresaste una palabra para evaluar");

    if (typeof palabra !== "string") return console.error("Ingresaste un valor diferente de una cadena en la palabra a buscar")

    let coincidencias = 0;
    let nuevaCadena = cadena.split(" ");

    for (p of nuevaCadena) if (palabra === p) coincidencias++;

    console.log(`La palabra ${palabra} se repite ${coincidencias} veces"`);
}

contarPalabra("hola mundo adios mundo", "mundo");

// ---------------------------------------------

/* 7) Programa una función que valide si una palabra o frase dada, es un palíndromo
 *  (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
 */

const evaluarPalindromo = (cadena = "") => {

    if (!cadena) return console.warn("No ingresaste una cadena");

    if (typeof cadena !== "string") return console.error("Ingresaste un valor diferente de una cadena");

    cadena = cadena.toLowerCase();
    let cadenaInvertida = cadena.split("").reverse().join("");

    (cadena === cadenaInvertida) ? console.log(true) : console.log(false);
}

evaluarPalindromo("neuquen");

// ---------------------------------------------

/* 8) Programa una función que elimine cierto patrón de caracteres de un texto dado,
   pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5") devolverá "1, 2, 3, 4 y 5" */

const eliminarPatron = (cadena = "", patron = "") => {
      
    if (!cadena) return console.warn("No ingresaste una cadena");
      
    if (typeof cadena !== "string") return console.error("Ingresaste un valor diferente de una cadena en el texto");
      
    if (!patron) return console.error("No ingresaste un patrón para eliminar");
      
    if (typeof patron !== "string") return console.error("Ingresaste un valor diferente de una cadena en el patrón a eliminar")

    console.log(cadena.replace(new RegExp(patron, "ig"), ""));    
};

eliminarPatron("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");