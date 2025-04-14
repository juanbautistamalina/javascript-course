/* 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1)
*  o no, pe. miFuncion(7) devolverá true.
*/

const primo = (num = undefined) => {
    
    if (num === undefined) return console.warn("No ingresaste ningún número");

    if (typeof num !== "number") return console.error("El valor ingresado, no es un número");

    if (num === 0) return console.error("El número no puede ser 0");

    if (num < 0) return console.error("El número no puede ser negativo");

    let contador = 0;

    for (i = 1; i <= num; i++) if (num % i === 0) contador++;

    (contador === 2) ? console.log(`El número ${num} es primo`) : console.log(`El número ${num} NO es primo`);
}

primo(7);

// ---------------------------------------------

// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

const par = (num = undefined) => 
    (num === undefined)
    ? console.warn("No ingresaste ningún número")
    : (typeof num !== "number")
        ? console.warn("El valor ingresado, no es un número")
        : (num % 2 === 0) ? console.log(`El número ${num} es par`) : console.log(`El número ${num} es impar`);

par(20);

// ---------------------------------------------

/* 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, 
    pe. miFuncion(0,"C") devolverá 32°F.
*/

const celsiusToFahrenheit = (grados = undefined, unidad = "") => {
    (grados === undefined)
    ? console.warn("No ingresaste los grados a convertir")
    : (typeof grados !== "number")
        ? console.error("El valor ingresado en los grados, no es un número")
        : (!unidad)
            ? console.warn("No ingresaste la unidad: C para Celsius o F para Fahrenheit")
            : (typeof unidad !== "string")
                ? console.error("El valor ingresado para la unidad, no es válido")
                : (unidad = unidad.toUpperCase(), (unidad === "C") 
                    ? console.log(`${grados}°C = ${((grados * 9/5) + 32).toFixed(1)}°F`) 
                    : (unidad === "F")
                        ? console.log(`${grados}°F = ${((grados - 32) * 5/9).toFixed(1)}°C`) 
                        : console.error("La escala introducida no es correcta. C para Celsius o F para Fahrenheit")
                    )
}


celsiusToFahrenheit(0, "C");