// Symbol es un tipo de dato Primitivo
// Al crear un Symbol su valor se va a mantener privado y para uso interno
// Se utiliza generalmente para crear propiedades privadas en los objetos

const id1 = "123";
const id2 = "123";
console.log(id1 === id2); // true → los strings iguales son estrictamente iguales

const id3 = Symbol();
const id4 = Symbol();
console.log(id3 === id4); // false → cada Symbol es único


// Symbol en objetos
const NOMBRE = Symbol("nombre");
const SALUDAR = Symbol("saludar");

const persona = {
  [NOMBRE]: "Juan", // propiedad privada con Symbol
  NOMBRE: "Juan Bautista Malina", // propiedad común con string
  edad: 22
};

console.log(persona[NOMBRE]); // Accediendo al valor asociado al Symbol


// Agregar funciones como propiedades privadas
persona[SALUDAR] = function() {
    console.log("Hola");
}

persona[SALUDAR]();


console.log(persona);

// Listar Symbols "propiedades privadas"
console.log(Object.getOwnPropertySymbols(persona));