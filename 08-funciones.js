// Declaración de función
function getName(name = "usuario") {
  return `Mi nombre es ${name}`;
}

// Función Anónima
const mensaje3 = function () {
    console.log("Esto es una función");
}


let mensaje1 = getName("Juan");
let mensaje2 = getName();

console.log(mensaje1);
console.log(mensaje2);
mensaje3();
 