/* 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos,
 *   el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente,
 *   pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
 */

const ordenarArreglo = (arr = undefined) => {

    if (arr === undefined) return console.warn("No ingresaste ningún arreglo");
    if (!(arr instanceof Array)) return console.error("El valor ingresado no es un arreglo válido");
    if (arr.length === 0) return console.error("El arreglo está vacío");

    for (numero of arr) 
        if (typeof numero !== "number") return console.error(`El valor "${numero}" ingresado, NO es un número`);

    return console.log({
        original: arr,
        ascendente: [...arr].sort((a, b) => a - b),
        descendente: [...arr].sort((a, b) => b - a),
    });
}

ordenarArreglo([7, 5, 7, 8, 6]);

// ---------------------------------------------

/* 25) Programa una función que dado un arreglo de elementos, elimine los duplicados,
 *  pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
 */

const eliminarDuplicados = (arr = undefined) => {

    if (arr === undefined) return console.warn("No ingresaste ningún arreglo");
    if (!(arr instanceof Array)) return console.error("El valor ingresado no es un arreglo válido");
    if (arr.length === 0) return console.error("El arreglo está vacío");
    if (arr.length === 1) return console.error("El arreglo debe tener al menos 2 elementos");
    
    return console.log({
        original: arr,
        sinDuplicados: arr.filter((element, index, self) => self.indexOf(element) === index)
    });
}

eliminarDuplicados(["x", 10, "x", 2, "10", 10, true, true]);

// ---------------------------------------------

/*
26) Programa una función que dado un arreglo de números obtenga el promedio, 
*   pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
*/

const promedio = (arr = undefined) => {

    if (arr === undefined) return console.warn("No ingresaste ningún arreglo");
    if (!(arr instanceof Array)) return console.error("El valor ingresado no es un arreglo válido");
    if (arr.length === 0) return console.error("El arreglo está vacío");

    for (numero of arr) 
        if (typeof numero !== "number") return console.error(`El valor "${numero}" ingresado, NO es un número`);

    return console.log(
        arr.reduce((total, elemento, index, arr) => {
            total += elemento;
            if (index === arr.length - 1) return `El promedio de ${arr.join(" + ")} es ${total / arr.length}`
            else return total;
        })
    )
}

promedio([9,8,7,6,5,4,3,2,1,0]);