// Callback:  una función que se pasa como argumento a otra función

// Ejemplo 1:

function saludar(nombre, callback) {
    console.log("Hola, " + nombre);
    callback();
}

saludar("Juan", () => {
    console.log("Esto se ejecuta después del saludo."); 
});


// Ejemplo 2:

// 1. Función que recibe como segundo argumento una callback
function cuadradoCallback(value, callback) {
    setTimeout(() => {
        callback(value, value * value);
    }, 0 | Math.random() * 1000);
}

// Llamando a la función, pasando una función como segundo parámetro
cuadradoCallback(2, (value, result) => {
    console.log("Inicia Callback");
    console.log(`Callback: ${value}, ${result}`);
})

