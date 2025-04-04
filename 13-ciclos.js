let contador = 0;

// while: ingresa al bucle en caso de que la condición se cumpla
while (contador < 10) {
  contador++;
  console.log("while", contador);
}

contador = 100;
console.log("\n");

// do while: el bucle se ejecuta al menos una vez, sin importar si la condición se cumple o no
do {
  contador++;
  console.log("do while", contador);
} while (contador < 10);

console.log("\n");

// for
for (let i = 0; i < 10; i++) {
  console.log(i);
}

console.log("\n");

let colores = [
  "verde",
  "naranja",
  "rosa",
  "blanco",
  "negro",
  "azúl",
  "amarillo",
];
for (let i = 0; i < colores.length; i++) {
  console.log(colores[i]);
}

console.log("\n");

const persona = {
  nombre: "Juan Bautista",
  apellido: "Malina",
  edad: 22,
};

// for in: Permite recorrer las propiedades de un objeto
for (const key in persona) {
  console.log("key:", key, " - value:", persona[key]);
}

console.log("\n");

// for of: Permite recorrer todos los elementos de un objeto que sea iterable
for (const color of colores) {
  console.log(color);
}
