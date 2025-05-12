/* Los Set en JS son estructuras de datos nativas, para representar conjuntos de datos. 
* La característica principal es que los datos insertados no se pueden repetir. 
*/

const set = new Set(["manzana", "naranja", "manzana", "banana", "manzana", "banana", "pera", "mandarina", "kiwi"]);
console.log(set); // manzana, naranja, banana, pera, mandarina, kiwi
console.log(`El Set tiene ${set.size} elementos`); // 6

console.log("\n");

const set2 = new Set();

// Agregar valores a un Set
set2.add(1);
set2.add(2);
set2.add(3);
set2.add(4);
set2.add(false);
set2.add(true);
console.log(set2);

console.log("\n");

// Recorrer un Set
console.log("Recorriendo SET1: ");
for (let elemento of set) console.log(elemento);

console.log("\nRecorriendo SET2: ");
set2.forEach(item => console.log(item));

console.log("\n");

// Acceder a los valores del Set
const arr = Array.from(set); // Convierte un objeto iterable a un array
console.log(`Set convertido en Array: [${arr.join(", ")}]`);

// Eliminar un valor del Set
const valorAEliminar = "manzana"
set.delete(valorAEliminar);
console.log(`Se ha eliminado el elemento '${valorAEliminar}' del set`);
console.log(set);

console.log("\n");

// Comprobar si un valor existe en un Set
console.log(set.has("manzana"));
console.log(set.has("banana"));
console.log(set.has("kiwi"));

console.log("\n");

// Limpiar un Set
console.log(set2);
set2.clear();
console.log(set2);