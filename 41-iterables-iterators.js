/* 
* Iterable: Elemento cuyo contenido puede ser iterado (recorrido)
* Iterador: Es una especie de apuntador que va recorriendo los elementos y las estructuras de datos
*/


const iterable = [1, 2, 3, 4, 5];
// const iterable = "Hola Mundo";
// const iterable = new Set([1, 2, 2, 3, 3, 4, 5]);
// const iterable = new Map([["nombre", "Juan"], ["edad", 22]]);


const iterador = iterable[Symbol.iterator](); // accediendo al iterador del iterable
console.log(iterador);

let next = iterador.next();
while (!next.done) {
    console.log(next.value);
    next = iterador.next()
}