/* Los Map en Javascript son estructuras de datos que permiten almacenar pares clave-valor. 
* En los Maps, no pueden repetirse las claves, similar a lo que ocurre en los Sets.

*  La diferencia principal entre los Map y los Objetos es la siguiente:
* - En los objetos, las claves son strings (o symbol)
* - En los Maps, las claves pueden ser de cualquier tipo (sin conversión a string)
*/

const mapa = new Map();

// mapa.set(propiedad, valor);
mapa.set("nombre", "Juan Bautista");
mapa.set("apellido", "Malina");
mapa.set("edad", 22);

console.log(mapa);

// Propeidades y métodos
console.log(mapa.size); // cantidad de elementos
console.log(mapa.has("nombre")); // verificar si posee una key
console.log(mapa.has("email"));

console.log(mapa.get("nombre")); // Obtener el valor de una key

// Sobreescribir un valor de un Map
mapa.set("nombre", "Juan");

// Eliminar un valor de un Map
mapa.delete("apellido");
console.log(mapa);

// Recorrer un Map
for (let [key, value] of mapa) console.log(`key: ${key}, "value: ${value}`);


const mapa2 = new Map([
    ["nombre", "Martin Garrix"],
    ["profesión", "DJ"],
    ["edad", 28],
]);

console.log(mapa2);

// Almacenar las keys y los valores por separado
const keys = [...mapa2.keys()];
const values = [...mapa2.values()];
console.log(keys);
console.log(values);