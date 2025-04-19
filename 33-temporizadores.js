console.log("Inicio");

// setTimeout(() => {
//     console.log("Ejecutando setTimeout. Se ejecuta una sola vez");
// }, 3000);

// setInterval(() => {
//     console.log("Ejecutando setInterval. Se ejecuta indefinidamente cada cierto intervalo de tiempo");
// }, 5000);

let reloj = setInterval(() => {
    console.log(new Date().toLocaleTimeString());
}, 1000);

setTimeout(() => {
    clearInterval(reloj);
}, 5000);