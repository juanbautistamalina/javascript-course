/* 21) Programa una función que dado un array numérico devuelve otro array con los números elevados 
*  al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
*/

const potenciaArray = (array = undefined) => {
    if (array === undefined) return console.warn("No ingresaste ningún arreglo");
    if (!(array instanceof Array)) return console.error(`El valor ingresado no es un arreglo`);
    if (array.length === 0) return console.error("El arreglo está vacío");


    let arrayAlCuadrado = [];

    for (let num of array) {
        if (typeof num !== "number") return console.error(`El valor "${num}" ingresado, NO es un número`);
        arrayAlCuadrado.push(num * num);
    }

    // Opción alternativa
    // const newArr = array.map(elemento => elemento * elemento);

    console.log({
        "Array Original" : array,
        "Array al cuadrado" : arrayAlCuadrado,
    })
}

potenciaArray([1, 4, 5]);

// ---------------------------------------------


/* 22) Programa una función que dado un array devuelva el número mas alto y el más bajo 
*  de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
*/ 

const mayorMenor = (array = undefined) => {
    if (array === undefined) return console.warn("No ingresaste ningún array");
    if (!(array instanceof Array)) return console.error("El valor ingresado no es un array válido");
    if (array.length === 0) return console.error("El array está vacío");

    for (let num of array) 
        if (typeof num !== "number") return console.error(`El valor "${num}" ingresado, NO es un número`);

    return console.log(`[${array}]: \nMayor ${Math.max(...array)} \nMenor ${Math.min(...array)}`);
}

mayorMenor([1, 4, 5, 99, -60]);

// ---------------------------------------------

/* 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos
*  en el primero almacena los números pares y en el segundo los impares, pe. 
*  miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
*/

const paresImpares = (array = undefined) => {
    if (array === undefined) return console.warn("No ingresaste ningún array");
    if (!(array instanceof Array)) return console.error("El valor ingresado no es un array válido");
    if (array.length === 0) return console.error("El array está vacío");

    // let pares = [];
    // let impares = [];

    for (numero of array) {
        if (typeof numero !== "number") return console.error(`El valor "${num}" ingresado, NO es un número`);
        
        // (numero % 2 == 0)
        // ? pares.push(numero)
        // : impares.push(numero)
    }

    return console.log({
        pares: array.filter(n => n % 2 === 0),
        impares: array.filter(n => n % 2 !== 0)
    })
}

paresImpares([1,2,3,4,5,6,7,8,9,0])