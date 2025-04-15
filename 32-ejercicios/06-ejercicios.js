/* 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes,
 *   pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
 */

// Mi Solución sin expresiónes regulares
// const vocalesYConsonantes = (cadena = "") => {

//     if (!cadena) return console.warn("No ingresaste ninguna cadena");
//     if (typeof cadena !== "string") return console.error(`El valor ingresado: ${cadena}, no es una cadena`);

//     let bandera = false;
//     let cantVocales = 0;
//     let cantConsonantes = 0;

//     let cadenaOriginal = cadena;
//     cadena = cadena.toLowerCase();

//     const VOCALES = ["a", "e", "i", "o", "u"];
//     const CONSONANTES = [
//         'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm',
//         'n', 'ñ', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'
//       ];

//     for (let letra of cadena) {

//         if (letra === " " || letra === "," || letra === ".") continue;

//         for(let vocal of VOCALES) {
//             if (letra === vocal) {
//                 cantVocales++;
//                 bandera = true;
//                 break;
//             }
//         }

//         if (bandera === false){
//             for(let consonante of CONSONANTES) {
//                 if (letra === consonante) {
//                     cantConsonantes++;
//                     break;
//                     }
//                 }
//         }

//         bandera = false;
//     }

//     console.log(`La cadena "${cadenaOriginal}" tiene: ${cantVocales} vocales, y ${cantConsonantes} consonantes.`)

// }

// vocalesYConsonantes("Hola Mundo");

// Solución usando expresiones regulares:
const vocalesYConsonantes = (cadena = "") => {
    if (!cadena) return console.warn("No ingresaste ninguna cadena");
    if (typeof cadena !== "string") return console.error(`El valor ingresado: ${cadena}, no es una cadena de texto`);

    let vocales = 0, consonantes = 0;

    for (let letra of cadena) {
        if (/[AEIOUÁÉÍÓÚÜaeiouáéíóúü]/.test(letra)) vocales++;
        if (/[BCDFGHJKLMNÑPQRSTVWXYZbcdfghjklmnñpqrstvwxyz]/.test(letra)) consonantes++;
    }

    return console.log({
        cadena,
        vocales,
        consonantes
    })
}

vocalesYConsonantes("Hola Mundo")

// ---------------------------------------------

/* 19) Programa una función que valide que un texto sea un nombre válido,
 * pe. miFuncion("Jonathan MirCha") devolverá verdadero.
 */

const validarNombre = (nombre = "") => {
  if (!nombre) return console.warn("No ingresaste un nombre");
  if (typeof nombre !== "string")
    return console.error(`El valor ingresado: ${nombre}, no es una cadena`);

    const regExp = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g.test(nombre);
    // ^ Significa que NO puede haber nada antes de la expresión
    // $ Significa que NO puede haber nada después de la expresión

  (regExp)
    ? console.log(`${nombre}, es un nombre válido`)
    : console.log(`${nombre} NO es un nombre válido`);
};

validarNombre("Juan");

// ---------------------------------------------

/* 20) Programa una función que valide que un texto sea un email válido, pe.
 *  miFuncion("jonmircha@gmail.com") devolverá verdadero.
 */

const validarCorreo = (email) => {
  if (!email) return console.warn("No ingresaste un nombre");
  if (typeof email !== "string")
    return console.error(`El valor ingresado: '${email}' no es una cadena`);

  // const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA -Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const regexEmail = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);

  return regexEmail
    ? console.log(`${email} es un email válido`)
    : console.log(`${email} no es un email válido`);
};
validarCorreo("juan@gmail.com");