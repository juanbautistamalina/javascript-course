/* POO

- Clase: Modelo a seguir
- Objetos: Instancia de una clase
    --> Atributos: Característica o propiedad del objeto (variables dentro de un objeto)
    --> Métodos: Acciones que un objeto puede realizar (funciones dentro de un objeto) 
*/

// JavaScript es un lenguaje orientado a objetos basado en Prototipos (NO en Clases)
// Prototipo: Mecanismo por el cual un objeto puede heredar atributos y métodos de un objeto padre

// __proto__: Object
const animal = {
  nombre: "Bugs Bunny",
  especie: "Conejo",
  color: "Gris y blanco",
};

// Función constructora: Se asignan los métodos al Prototino, NO a la función como tal
function Animal(nombre, especie) {
  this.nombre = nombre;
  this.especie = especie;
}

// Métodos agregados al prototipo de la función constructora
Animal.prototype.hablar = function () {
  console.log(`Hola, soy ${this.nombre}`);
};

Animal.prototype.saltar = function () {
  console.log(`${this.nombre} está saltando 🐾`);
};

// ---------------------------------------------------------------

const scoobyDoo = new Animal("Scooby-Doo", "Perro");
const bugsBunny = new Animal("Bugs Bunny", "Conejo");
console.log(scoobyDoo);
console.log(bugsBunny);
