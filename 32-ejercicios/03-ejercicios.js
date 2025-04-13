// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

const obtenerNumero = () => console.log(Math.round(Math.random() * (600 - 501) + 501));

obtenerNumero();

// ---------------------------------------------

/* 10) Programa una función que reciba un número y evalúe si es capicúa o no 
   (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
*/

const evaluarCapicua = (numero = 0) => {

    if (!numero) return console.warn("No ingresaste un número");

    if (typeof numero !== "number") return console.error("El valor ingresado, no es un número");

    numero = numero.toString();
    let numeroInvertido = numero.split("").reverse().join("");

    (numero === numeroInvertido) 
    ? console.log(`Si es capícua. Número original ${numero}. Número invertido ${numeroInvertido}`) 
    : console.log(`No es capícua. Número original ${numero}. Número invertido ${numeroInvertido}`);
}

evaluarCapicua(1991) 
evaluarCapicua(2002) 
evaluarCapicua(122.221)

// ---------------------------------------------

/** 11) Programa una función que calcule el factorial de un número 
 * (El factorial de un entero positivo n, se define como el producto
 *  de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
 */

const calcularFactorial = (numero = undefined) => {
    
    if (numero === undefined) return console.warn("No ingresaste ningún número");

    if (typeof numero !== "number") return console.error("Ingresaste un valor diferente de un número");
    
    if (numero < 0) return console.error("No existe el factorial de un número negativo");

    if (numero === 0) return console.error("No se puede calcular el factorial del número 0");
    
    let resultado = numero;
    
    // por ej: numero = 5   
    // i = (5 - 1) = 4
    // resultado = 5  x  4 -> vuelta 1
    // resultado = 20 x  3 -> vuelta 2
    // resultado = 60 x  2 -> vuelta 3
    // resultado = 120 x 1 -> vuelta 4
    
    for (let i = numero-1; i >= 1; i--) resultado *= i;
    console.log(`El factorial del número ${numero} es ${resultado}`);
}

calcularFactorial();
calcularFactorial("5");
calcularFactorial([]);
calcularFactorial(0)
calcularFactorial(5);
calcularFactorial(8)
