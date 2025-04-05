let nombre = "Juan";
let edad = 22;

// Objeto Normal
const persona1 = {
  nombre: nombre,
  edad: edad,
  saludar: function () {
    console.log(`Hola, mi nombre es ${this.nombre}`);
  },
};

// Objeto Literal: si la variable a asignar tiene el mismo nombre que la propiedad, no es necesario repetirla.
const persona2 = {
  nombre,
  edad,
  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`);
  },
};

