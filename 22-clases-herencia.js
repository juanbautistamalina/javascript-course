// Clase
class Animal {
  // El constructor es un método especial que se ejecuta en el momento de instanciar la clase
  constructor(nombre, especie) {
    this.nombre = nombre;
    this.especie = especie;
  }

  // Métodos
  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre} y soy un ${this.especie}`);
  }

  saltar() {
    console.log(`${this.nombre} está saltando`);
  }
}

// Herencia
class Perro extends Animal {
  constructor(nombre, especie, raza) {
    super(nombre, especie);
    this.raza = raza;
  }

  saludar() {
    console.log(
      `Hola, mi nombre es ${this.nombre}, soy un ${this.especie} ${this.raza} 🐾`
    );
  }
}

// Instancias
const jerry = new Animal("Jerry", "Ratón");
console.log(jerry);
jerry.saludar();

const alex = new Animal("Alex", "León");
console.log(alex);
alex.saludar();

const scooby = new Perro("Scooby-Doo", "Perro", "Gran Danés");
console.log(scooby);
scooby.saludar();
