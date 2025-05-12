/* WeakSets y WeakMaps: Solo pueden almacenar referencias débiles a objetos.
* Esto quiere decir que las llaves deben de ser de tipo objeto. Por ej: let valor1 = {clave: valor}
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
*
*
* WeakMap: 
*
*
*/

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
// console.log(weakset);
