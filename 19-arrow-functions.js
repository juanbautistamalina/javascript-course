const saludar = (nombre) => console.log(`Hola ${nombre}`);
saludar("Juan");

// Las funciones flecha tienen un return implicito
const sumar = (a, b) => a + b;
console.log(sumar(10, 10));

const numeros = [56, 22, 83, 24, 90];
numeros.forEach((n, index) =>
  console.log(`El elemento ${n} está en la posición ${index} `)
);


// Las funciones flecha heredan el valor de this del contexto donde fueron definidas.

// Caso 1: En este caso, this hace referencia al objeto
const persona1 = {
    nombre: "Juan",
    saludar() {
        console.log(this)
    }
}

persona1.saludar();


// Caso 2: En el caso de las funciones flecha, this hace referencia al objeto Window

/* Las funciones flecha no tienen su propio this, y al definirse en el contexto global 
* (fuera de una función normal), this no apunta al objeto en el que se trabaja, sino al objeto global 
* (o undefined en modo estricto).
*/

const persona2 = {
    nombre: "Juan",
    saludar: () => {
        console.log(this)
    }
}

persona2.saludar();