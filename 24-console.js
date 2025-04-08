console.log(console); 
console.error("Mensaje de Error");
console.warn("Mensaje de Advertencia");
console.info("Mensaje Informativo");
console.log("Mensaje para registrar lo que ocurre en la aplicación");

// Limpiar la consola
// console.clear()

// Crear grupos en la consola
console.group("🎨 Colores principales");
console.log("Rojo: #FF0000");
console.log("Verde: #00FF00");
console.log("Azul: #0000FF");
console.groupEnd(); 

// Crear una tabla en la consola
console.table(Object.entries(console));

const producto = {
  nombre: "Teclado",
  precio: 45,
  disponible: true,
};

console.table(producto);

console.time("Cuánto tiempo tarda mi código");
const arreglo = Array(1000000);

for (let i = 0; i < arreglo.length; i++) {
    arreglo[i] = i;
}

console.timeEnd("Cuánto tiempo tarda mi código");


// Contar la cantidad de veces que se ejecuta un bloque de código
for (let i = 0; i <= 100; i++) {
    console.count("contador del for");
    console.log(i);
}

// Pruebas o Testing por consola
let x = 10;
let y = 5;
mensaje = "Se espera que X siempre sea menor que Y";
console.assert(x < y, {x, y, mensaje});
// console.assert(condición, {variablesEnJuego, mensaje})
