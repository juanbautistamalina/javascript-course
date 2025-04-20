/* Temporizadores: 
*  JavaScript tiene funciones que permiten lanzar acciones después de que haya pasado un cierto tiempo
*  o repetir una función n cantidad de veces. 
*/ 

console.log("Inicio");


// setTimeout: Ejecuta una función una vez que se haya cumplido el tiempo indicado
// setTimeout(() => {
//     console.log("Ejecutando setTimeout. Se ejecuta una sola vez");
// }, 3000);

// setInterval: Ejecuta una función en bucle de manera indefinida, cada cierto intervalo de tiempo
// setInterval(() => {
//     console.log("Ejecutando setInterval. Se ejecuta indefinidamente cada cierto intervalo de tiempo");
// }, 5000);


// Además de las funciones setTimeout y setInterval, existen sus contrapartes: clearTimeout y clearInterval

// Ejemplo de uso: 
let reloj = setInterval(() => {
    console.log(new Date().toLocaleTimeString());
}, 1000);

setTimeout(() => {
    clearInterval(reloj);
    console.log("Intervalo Finalizado")
}, 5000);