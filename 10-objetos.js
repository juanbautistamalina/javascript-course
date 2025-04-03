// Dentro de un objeto existen atributos/propiedades (variables), y métodos (funciones)
const persona = {
  nombre: "Juan Bautista",
  apellido: "Malina",
  edad: 22,
  pasatiempos: ["Running", "Gimnasio", "Leer"],
  contacto: {
    email: "juan@gmail.com",
    telefono: "+54 123456",
  },
  saludar: function () {
    console.log(`Hola, mi nombre es ${this.nombre}`);
  },
};

persona.saludar();

// Métodos de Objetos
console.log("\nKeys:");
console.log(Object.keys(persona));

console.log("\nValues:");
console.log(Object.values(persona));

console.log("\nPares:");
console.log(Object.entries(persona));

// Verificar si un objeto tiene una propiedad
console.log(persona.hasOwnProperty("nombre"));
