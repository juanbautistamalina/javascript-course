/* WeakSets y WeakMaps: Solo pueden almacenar referencias débiles a objetos.
* Esto significa que solo pueden guardar objetos. 
* No aceptan valores como strings, números, booleanos, etc.
* Ejemplo válido: let valor1 = { clave: "valor" }
*
* Cuando ya no existen referencias fuertes a un objeto contenido en un WeakSet
* o usado como clave en un WeakMap, puede ser eliminado automáticamente por el recolector de basura.
*
* Datos Importantes:
* - No se puede iterar sobre sus elementos
* - No tienen métodos como clear()
* - No se puede saber cuántos elementos contienen (no tienen size)
*
* 
* WeakSet:
* - Solo acepta objetos como valores
* - Se pueden añadir objetos individualmente con .add()
* - También se puede crear con un array de objetos: ✅ new WeakSet([obj1, obj2])
* - ❌ new WeakSet([1, 2, 3]) → Error, porque los valores no son objetos
* - Se puede utilizar el método .has() para verificar si existe un elemento
* - Se puede utilizar el método .delete() para eliminar uno por uno los elementos
*
*
* WeakMap: 
* - Se puede obtener una key con el método .get()
* - Se puede establecer una propiedad con el método .set()
* - Se puede evaluar si existe una llave con el método .has()
*/


// WeakSet --> son una especie de arreglos mejorados
const weakset = new WeakSet();

let valor1 = { valor1: 1 };
let valor2 = { valor2: 2 };
let valor3 = { valor3: 3 };

weakset.add(valor1);
weakset.add(valor2);
weakset.add(valor3);

console.log(weakset.has(valor1));
console.log(weakset.has(valor2));

weakset.delete(valor2);
console.log(weakset.has(valor2));

weakset.add(valor2);
console.log(weakset);

// -----------------------------------------

// WeakMap --> son una especie de objetos mejorados
const weakmap = new WeakMap();

let llave1 = {};
let llave2 = {};
let llave3 = {};

weakmap.set(llave1, 1);
weakmap.set(llave2, 2);
weakmap.set(llave3, 3)

weakmap.get(llave1);
weakmap.get(llave2);

console.log(weakmap);