// Herencia Prototípica: Manera antigua de trabajar con clases

function Animal(nombre, especie) {
  this.nombre = nombre;
  this.especie = especie;
}

Animal.prototype.hablar = function () {
  console.log(`Hola, soy ${this.nombre}`);
};

Animal.prototype.saltar = function () {
  console.log(`${this.nombre} está saltando 🐾`);
};

function Perro(nombre, especie, raza) {
  this.super = Animal; // Guardar una referencia a la función Animal
  this.super(nombre, especie); // Llamar a la función animal, pasándole nombre y especie
  this.raza = raza;
}

Perro.prototype = new Animal(); // Hereda los métodos del prototipo Animal
Perro.prototype.constructor = Perro; // Corrige el constructor

// Sobreescritura de métodos del Prototipo padre en el hijo
Perro.prototype.hablar = function () {
  console.log("Guau Guau!");
};

// Método propio de Perro
Perro.prototype.correr = function () {
  console.log(`${this.nombre} está corriendo`);
};

const scoobyDoo = new Perro("Scooby-Doo", "Perro", "Gran Danés");
const bugsBunny = new Animal("Bugs Bunny", "Conejo");
console.log(scoobyDoo);
console.log(bugsBunny);

scoobyDoo.hablar();
scoobyDoo.correr();
