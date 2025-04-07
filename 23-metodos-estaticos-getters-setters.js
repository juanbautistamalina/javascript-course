class Perro {
  // El constructor es un método especial que se ejecuta en el momento de instanciar la clase
  constructor(nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;
    this.raza = null;
  }

  ladrar() {
    console.log(`Guau Guau!`);
  }

  // Método Estático: Métodos que pueden ejecutarse sin necesidad de instanciar la clase
  static info() {
    console.log(
      "Los perros somos animales mamíferos que pertenecemos a la familia de los caninos."
    );
  }

  // Método getter
  get getRaza() {
    return `La raza del perro es: ${this.raza}`;
  }

  // Método setter
  set setRaza(raza) {
    this.raza = raza;
  }
}

// Llamado al método estático
Perro.info();
const perro = new Perro("Scooby Doo", "Macho");

// Los getters y setters en JavaScript se trabajan como propiedades o atributos, no como métodos
perro.setRaza = "Gran Danés";
console.log(perro.getRaza);
