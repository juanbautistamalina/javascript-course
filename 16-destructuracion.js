// Destructuración: Es una forma de extraer valores de arrays u objetos y guardarlos en variables de forma rápida y clara.

// destructuración en arrays
const numeros = [1, 2, 3];
const [uno, dos, tres] = numeros;
console.log(uno, dos, tres);

// destructuración en objetos: la variable a crear debe llamarse igual que la propiedad que se va a almacenar
let persona = {
  nombre: "Juan Bautista",
  apellido: "Malina",
  edad: 22,
};

let { nombre, apellido, edad } = persona; // no importa el orden
console.log(nombre, apellido, edad);
