// Formas de crear un array
const array1 = ["cadena", 231, true, 24.1, false];
console.log(array1);

const array2 = Array.of("X", "Y", "Z", 1, 2, 3);
console.log(array2);

// Crear un array de n posiciones y asignarles a todas las posiciones x valor
const array3 = Array(100).fill(false);
console.log(array3);

const colores = ["Rojo", "Verde", "Azúl"];

colores.push("Rosa"); // Agregar un elemento al final del array
console.log(colores);

colores.pop(); // Eliminar el último elemento del array
console.log(colores);

colores.forEach((element, id) => {console.log(`<li id=${id}>${element}</li>`)});
