/* Generador: Podría decirse que un generador consiste en convertir el código de una función en iterable.
* 
* - Se utiliza function*
* - Cada "yield" es similar a un "return", pero representa lo que valdrá cada next()
*/
function* iterable(){
    // la palabra reservada "yield" ...
    yield "valor 1";
    console.log("Código de ejemplo...");
    yield "valor 2";
    console.log("Generators en JavaScript");
    yield "valor 3";
    yield "valor 4";
}

let iterador = iterable();
for (let y of iterador) console.log(y);


const arr = [...iterable()]; // arreglo con todos los "yield" del generador
console.log(arr);

function cuadrado(valor) {
    setTimeout(() => {
       return console.log({
            valor, 
            resultado: valor * valor
        }); 
    }, Math.random() * 1000);
}

function* generador() {
    console.log("Inicia Generator");
    yield cuadrado(1);
    yield cuadrado(2);
    yield cuadrado(3);
    yield cuadrado(4);
    yield cuadrado(5);
    console.log("Termina Generator");
}

let gen = generador();
for (let y of gen) {
    console.log(y)
}

