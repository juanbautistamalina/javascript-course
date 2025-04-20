# 📚 Curso de JavaScript

---

## Tipos de datos

### Primitivos

- Se accede directamente al valor:
  - `string`
  - `number`
  - `boolean`
  - `null`
  - `undefined`
  - `NaN`

### Compuestos o de Referencia

- Se accede a la referencia del valor:
  - `object = {}`
  - `array = []`
  - `function () {…}`
  - `Class {}`

---

## Variables

- `var`: Variables de ámbito global. Forman parte del objeto `window`.
- `let`: Variables de ámbito de bloque.
- `const`: Constantes, su valor no puede modificarse.

---

## Cadenas de Texto (`strings`)

- Es un tipo de dato que representa texto, escrito entre comillas.

### Métodos

- **`toLowerCase()`**: Convierte una cadena a minúsculas.
- **`toUpperCase()`**: Convierte una cadena a mayúsculas.
- **`trim()`**: Elimina los espacios en blanco al principio y al final de una cadena.
- **`includes()`**: Si una cadena puede encontrarse dentro de otra cadena, devuelve `true`, sino devuelve `false`.
- **`split()`**: Divide la cadena como le pidamos y la convierte en un array. La cadena se va a dividir cada vez que encuentre lo establecido en los paréntesis, y cada división representa un elemento.

---

## Números (`numbers`)

- Es un tipo de dato que representa números, ya sean enteros o decimales.

### Métodos

- **`toFixed(digitos)`**: Formatea un número a un número específico de decimales y lo devuelve como una cadena.
- **`parseInt(number)`**: Convierte una cadena de texto en un número entero.

---

## undefined, null y NaN

- `undefined`: Es un valor asignado por el propio lenguaje JavaScript para indicar que una variable no ha sido inicializada.
- `null`: Es un valor que se le asigna de manera intencional a una variable, para indicar que está vacía.
- `NaN`: Su nombre significa _Not a Number_, y se obtendrá un valor NaN cuando se realicen operaciones en donde uno de los datos en cuestión no sean un número.

---

## Funciones

- Una función es un bloque de código autocontenido, que se puede definir una vez y ejecutar en cualquier momento. Opcionalmente, una función puede aceptar parámetros y devolver un valor. Las funciones en JavaScript son objetos, un tipo especial de objetos:

```javascript
// Declaración de una Función
function nombreDeLaFuncion(nombre) {
  console.log(`Mi nombre es ${nombre}.`);
}

// Invocación de una Función
nombreDeLaFuncion("Juan");

// Expresión de una Función Anónima
const funcionExpresada = function () {
  console.log("Esto es una función expresada");
};
```

---

## Arreglos [Arrays]

- Un array es un objeto especial que permite almacenar una colección ordenada de elementos, accesibles por su índice numérico.

```jsx
const myArray = ["Juan", 22, true];
const newArray = Array.of("A", "B", "C", 1, 2, 3);

// Crear un array de 100 posiciones y rellenarlo con el valor 'false'
const otherArray = Array(100).fill(false);

const colores = ["Rojo", "Verde", "Azúl"];
colores.forEach((element) => console.log(element));

// Salida:
/*
	Rojo
	Verde
	Azúl
*/
```

### Métodos

- **`pop()`**: Elimina el último elemento de un array y lo devuelve.
- **`push()`**: Agrega un elemento al final del array.

---

## Objetos

- Un objeto es una estructura que permite almacenar pares clave-valor, donde cada clave (o propiedad) está asociada a un valor

```jsx
const persona = {
  nombre: "Juan Bautista",
  apellido: "Malina",
  edad: 22,
  pasatiempos: ["Correr", "Gimnasio", "Leer", "Jugar ajedrez", "Programar"],
  contacto: {
    email: "malinajuanbautista@gmail.com",
    movil: "123456",
  },
  saludar: function () {
    console.log(`Hola, mi nombre es ${this.nombre}`);
  },
};
```

### Métodos

- `Object.keys(nombreObjeto)`: Devuelve un arreglo con las keys del objeto.
- `Object.values(nombreObjeto)`: Devuelve un arreglo con los valores de las propiedades del objeto.
- `nombreObjeto.hasOwnProperty("nombre")`: Verifica si el objeto tiene una propiedad con ese nombre y devuelve `true` o `false`.

---

## Tipos de Operadores

### Aritméticos

- **+**: Suma
- **-**: Resta
- **\***: Multiplicación
- **/**: División
- **%**: Módulo o resto
- **\*\***: Exponenciación
- **++**: Incremento
- **--**: Decremento

### Relacionales

- `a > b`: Mayor que
- `a < b`: Menor que
- `a >= b`: Mayor o igual que
- `a <= b`: Menor o igual que
- `a == b`: Igualdad (comparación de valores)
- `a === b`: Idénticos (comparación de tipo y valor)
- `a != b`: Desigualdad

### Asignación

- `x = y`: Asignación
- `x += y`: Asignación de adición
- `x -= y`: Asignación de sustracción
- `x *= y`: Asignación de multiplicación
- `x /= y`: Asignación de división
- `x %= y`: Asignación de resto
- `x **= y`: Asignación de exponenciación

### Operadores Lógicos

- Devuelven un resultado booleano a partir de si se cumple o no una condición.
  - `exp1 && exp2`: **AND**
  - `exp1 || exp2`: **OR**
  - `!exp`: **NOT**

---

## Condicionales

### if else

```jsx
if (condicion) {
  // bloque a ejecutar si la condición es verdadera
} else {
  // bloque a ejecutar si la condición es falsa
}
```

### Operador Ternario

```jsx
let edad = 18;
let eresMayor = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
```

### Switch

```jsx
const valor = 1;

switch (valor) {
  case 1:
    // Bloque a ejecutar si el número es 1
    console.log("El número vale 1");
    break;
  case 2:
    // Bloque a ejecutar si el número es 2
    console.log("El número vale 2");
    break;
  case 3:
    // Bloque a ejecutar si el número es 3
    console.log("El número vale 3");
    break;
  default:
    // Bloque opcional para manejar otros casos, si es necesario
    console.log("El número es desconocido");
}
```

---

## Ciclos

### while y do while

```jsx
let contador = 0; // Inicializar el contador

while (contador < 5) {
  console.log(`Contador: ${contador}`);
  contador++;
}

// -------------------------------------------------

let contador = 0;

do {
  console.log(`Contador: ${contador}`);
  contador++;
} while (contador < 5);
```

### for

```jsx
for (inicialización de la variable; condición; decremento o incremento){
	// sentencias que ejecuta el for
}
```

### for in y for of

- **`for in`**: Devuelve el índice o posición del elemento. Permite recorrer propiedades de un objeto primitivo.

```jsx
const persona = { nombre: "Juan", edad: 22, pais: "Estados Unidos" };

for (let clave in persona) {
  console.log(clave + ": " + persona[clave]);
}

/* Salida: 
	nombre: Juan
	edad: 22
	pais: Estados Unidos
*/
```

- **`for of`**: Devuelve cada elemento dentro del arreglo. Permite recorrer todos los elementos de cualquier objeto que sea iterable.

```jsx
const numeros = [1, 2, 3, 4, 5];

for (let numero of numeros) {
  console.log(numero);
}

/* Salida: 
	1
	2
	3
	4
	5
*/
```

---

## Manejo de Errores

- **`try`**: Intentar ejecutar un bloque de código.
- **`catch`**: Se ejecutará en caso de que ocurra un error dentro del try. Recibe como parámetros el error ocurrido en el try.
- **`finally`**: Se ejecutará siempre, al terminar de ejecutar ya sea el try o el catch.
- **`throw`**: Sirve para provocar un error.

```jsx
try {
  // se intentará ejecutar este bloque de código
} catch (error) {
  // en caso de que haya un error, se ejecutará lo que se encuentre dentro del catch
} finally {
  // sin importar si hay errores o no, se ejecutará el bloque del finally
}

// --------------------------------------------------------------------

// Ejemplo de try catch

try {
  let numero = "abc";

  if (isNaN(numero)) {
    throw new Error("El valor introducido no es válido");
  }
} catch (error) {
  console.log(`Se produjo el siguiente error: ${error}`);
} finally {
  console.log("bloque finally");
}
```

---

## Destructuración

```jsx
// Destructuración con Arrays
const numeros = [1, 2, 3];
const [uno, dos, tres] = numeros;
console.log(uno, dos, tres);

// Destructuración con Objetos
const persona = {
  nombre: "Juan Bautista",
  apellido: "Malina",
  edad: 22,
};

// los nombres de las variables deben ser los mismos que las keys
const { nombre, apellido, edad } = persona;
console.log(nombre, apellido);
```

---

## Objetos Literales

```jsx
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

// Objeto Literal: si la variable a asignar tiene el mismo nombre que la propiedad,
// no es necesario repetirla.
const persona2 = {
  nombre,
  edad,
  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`);
  },
};
```

---

## Parámetros REST y Operador Spread

```jsx
// Parámetros REST: Son una forma de agregar parámetros infinitos a funciones o variables
// Usado en funciones, el parámetro "c" siempre va a ser un array

function sumar(a, b, ...c) {
  let resultado = a + b;

  c.forEach(function (n) {
    resultado += n;
  });
  return resultado;
}

console.log(sumar(1, 2, 10)); // Salida: 13

// Operador Spread: Permite copiar o expandir los elementos de un array u
// objeto en otro lugar. Se usa para combinar, clonar o pasar valores de forma sencilla.

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];

const arr3 = [...arr1, ...arr2];
console.log(arr3);
```

---

## Funciones Flecha

- Una función flecha es una forma corta de escribir funciones. A diferencia de las funciones tradicionales, **no tiene su propio `this`**, sino que **hereda el `this` del contexto donde fue creada**.

```jsx
const saludar = (nombre) => console.log(`Hola ${nombre}`);
saludar("Juan");
```

---

## Prototipos

- Un prototipo es un objeto del cual otros objetos pueden heredar propiedades y métodos.

```jsx
// _proto__: Object
const animal = {
  nombre: "Bugs Bunny",
  especie: "Conejo",
  color: "Gris y blanco",
};

// Función constructora: Se asignan los métodos al Prototipo, NO a la función como tal
function Animal(nombre, especie) {
  this.nombre = nombre;
  this.especie = especie;
}

// Métodos agregados al prototipo de la función constructora
Animal.prototype.hablar = function () {
  console.log(`Hola, soy ${this.nombre}`);
};

Animal.prototype.saltar = function () {
  console.log(`${this.nombre} está saltando 🐾`);
};
```

---

## Clases y Herencia

- Una **clase** es una forma de definir estructuras (molde o plantilla) para crear objetos con propiedades y métodos. La **herencia** permite que una clase (hija) obtenga propiedades y métodos de otra clase (padre).

```jsx
// Clase
class Animal {
  // El constructor es un método especial que se ejecuta en el momento de
  // instanciar la clase
  constructor(nombre, especie) {
    this.nombre = nombre;
    this.especie = especie;
  }

  // Método
  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre} y soy un ${this.especie}`);
  }
}

// Herencia
class Perro extends Animal {
  constructor(nombre, especie, raza) {
    super(nombre, especie);
    this.raza = raza;
  }

  // Sobreescritura de método
  saludar() {
    console.log(
      `Hola, mi nombre es ${this.nombre}, soy un ${this.especie} ${this.raza} 🐾`
    );
  }
}

// Instancias
const jerry = new Animal("Jerry", "Ratón");
console.log(jerry);
jerry.saludar();

const scooby = new Perro("Scooby-Doo", "Perro", "Gran Danés");
console.log(scooby);
scooby.saludar();
```

---

## Métodos estáticos, getters y setters

- Un método estático es un método que puede utilizarse sin necesidad de crear una instancia de la clase. Se utiliza usando la clase directamente, no un objeto creado con ella.
- **Getters**: métodos que obtienen el valor de una propiedad.
- **Setters**: métodos que permiten establecer o modificar el valor de una propiedad.

```jsx
class Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }

  // Getter: devuelve el nombre
  get nombre() {
    return this._nombre;
  }

  // Setter: actualiza el nombre
  set nombre(nuevoNombre) {
    this._nombre = nuevoNombre;
  }

  // Método estático: no necesita instancia
  static saludar() {
    console.log("Hola, soy una persona.");
  }
}

// Llamada al método estático sin crear objeto
Persona.saludar();

const persona = new Persona("Juan");

// Usar getter y setter como si fueran propiedades
console.log(persona.nombre); // Getter
persona.nombre = "Juan"; // Setter
console.log(persona.nombre); // Getter actualizado
```

---

## Objeto Console

- El objeto `console` en JavaScript es una herramienta integrada que se usa principalmente para mostrar mensajes en la consola del navegador o del entorno de desarrollo. Sirve para depurar código, mostrar valores, errores, advertencias o información durante la ejecución del programa.

### Métodos

- **`console.log()`**  
  Muestra mensajes generales en la consola. Se usa para imprimir valores o seguir el flujo del código.

- **`console.info()`**  
  Muestra un mensaje informativo, similar a `log()`, pero se puede usar para distinguir tipos de mensajes.

- **`console.error()`**  
  Muestra un mensaje de error en la consola, generalmente con un estilo visual que indica que algo falló.

- **`console.warn()`**  
  Muestra una advertencia en la consola. No detiene la ejecución, pero avisa de un posible problema.

- **`console.table()`**  
  Muestra datos en forma de tabla. Muy útil para arrays y objetos.

- **`console.group()`**  
  Agrupa mensajes en un bloque. Todo lo que se imprima entre `console.group()` y `console.groupEnd()` se verá anidado.

- **`console.clear()`**  
  Limpia la consola.

- **`console.time(label)` / `console.timeEnd(label)`**  
  Se usan juntos para medir el tiempo de ejecución de un bloque de código. `console.time(label)` inicia el temporizador, y `console.timeEnd(label)` lo detiene y muestra en consola el tiempo transcurrido desde que comenzó.

- **`console.count(label)`**  
  Muestra cuántas veces se ejecuta esa línea de código con la etiqueta dada. Ideal para contar repeticiones.

- **`console.assert(condición, datos)`**  
  Solo imprime un error si la condición es falsa. Útil para debug o testing.

---

## Objeto Date

- El objeto `Date` permite trabajar con fechas y horas. Se puede obtener la fecha actual, crear fechas personalizadas, obtener partes específicas de una fecha (como el día, mes, año, etc.), y hacer operaciones como comparaciones o cálculos de tiempo.

### Métodos

- **`new Date(year, month, day)`**  
  Crea una nueva instancia con la fecha y hora actual.

- **`getDate()`**  
  Devuelve el día del mes (entre 1 y 31).

- **`getDay()`**  
  Devuelve el día de la semana (entre 0 y 6), donde 0 = Domingo y 6 = Sábado.

- **`getMonth()`**  
  Devuelve el número del mes (entre 0 y 11), donde 0 = Enero y 11 = Diciembre.

- **`getFullYear()`**  
  Devuelve el año completo (por ejemplo, 2025).

- **`getHours()`**  
  Devuelve la hora actual (entre 0 y 23).

- **`getMinutes()`**  
  Devuelve los minutos actuales (entre 0 y 59).

- **`getSeconds()`**  
  Devuelve los segundos actuales (entre 0 y 59).

- **`toString()`**  
  Convierte el objeto `Date` en una cadena legible que incluye la fecha y la hora completas.

- **`Date.now()`**  
  Devuelve el número de milisegundos transcurridos desde el 1 de enero de 1970 (fecha Epoch). Muy útil para medir duración de procesos o diferencias entre fechas.

---

## Objeto Math

- `Math` es un objeto estático incorporado en JavaScript que contiene propiedades y métodos para realizar operaciones matemáticas, como redondeos, raíces, potencias, valores absolutos y generación de números aleatorios.

### Métodos

- **`Math.PI`**  
  Devuelve el valor de π.

- **`Math.abs(x)`**  
  Devuelve el valor absoluto de `x` (convierte negativos en positivos).

- **`Math.ceil(x)`**  
  Redondea `x` hacia arriba al entero más cercano.

- **`Math.floor(x)`**  
  Redondea `x` hacia abajo al entero más cercano.

- **`Math.round(x)`**  
  Redondea `x` al entero más cercano.

- **`Math.sqrt(x)`**  
  Devuelve la raíz cuadrada de `x`.

- **`Math.pow(base, exponente)`**  
  Eleva la base a la potencia del exponente.

- **`Math.random()`**  
  Genera un número aleatorio entre 0 (inclusive) y 1 (exclusivo).

- **`Math.sign(x)`**  
  Devuelve:
  - `1` si `x` es positivo
  - `-1` si `x` es negativo
  - `0` si `x` es cero

---

## Operador Cortocircuito

- Los operadores de cortocircuito permiten evaluar expresiones lógicas (`||` y `&&`) donde JavaScript detiene la evaluación tan pronto como el resultado está determinado.

### `||` (OR lógico) – _Cortocircuito a verdadero_:

- Si el **primer valor es verdadero (truthy)**, se devuelve ese valor **sin evaluar el segundo**.
- Si el **primer valor es falso (falsy)**, se evalúa y retorna el segundo.

### `&&` (AND lógico) – _Cortocircuito a falso_:

- Si el **primer valor es falso (falsy)**, se devuelve ese valor directamente.
- Si el **primer valor es verdadero (truthy)**, se devuelve el segundo valor.

---

## alert, confirm y prompt

- Estos métodos pertenecen al objeto global `window`, y solo funcionan en navegadores web, no en Node.js.

### Métodos

- **`alert(mensaje)`**  
  Muestra una ventana emergente de alerta con un mensaje y un único botón "Aceptar". No retorna ningún valor.

- **`confirm(mensaje)`**  
  Muestra una ventana emergente con un mensaje y dos botones: "Aceptar" y "Cancelar".  
  Retorna `true` si el usuario hace clic en Aceptar, o `false` si hace clic en Cancelar.

- **`prompt(mensaje)`**  
  Muestra una ventana emergente con un mensaje y un campo de texto para que el usuario escriba algo.  
  Retorna el texto ingresado (como string). Si el usuario cancela, retorna `null`.

---

## Expresiones Regulares

- Son una secuencia de caracteres que forman un patrón de búsqueda.  
  Se utilizan principalmente para buscar, validar o reemplazar cadenas de texto.

### Documentación

- [Wikipedia - Expresión regular](https://es.wikipedia.org/wiki/Expresi%C3%B3n_regular)
- [MDN - Expresiones regulares en JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions)

---

## Funciones Anónimas Autoejecutables

- Una **IIFE** (Immediately Invoked Function Expression) es una función anónima que se ejecuta automáticamente en el momento en que se define, sin necesidad de ser llamada después.

```js
// Sintaxis
(function () {
  // Código que se ejecuta inmediatamente
})();

// Ejemplo con parámetros
(function (d, w, c) {
  c.log("Función anónima autoejecutable");
  c.log(d);
})(document, window, console);
```

---

## Módulos

- Un **módulo** es un **archivo JavaScript** que puede **exportar** funciones, variables, objetos o clases para que otros archivos las **importen** y usen.

### Ejemplo de uso

#### 📄 `file.js` (módulo que exporta)

```js
// exportación de variables y constantes
export let usuario = "Juan";
export const password = 12345;

const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;

// exportación como objeto
export const aritmetica = {
  sumar,
  restar,
};

// Exportación por defecto
export default function saludar(nombre) {
  console.log(`Hola, ${nombre}!`);
}
```

#### 📄 `main.js` (módulo que importa)

```js
import saludar, { usuario, password, aritmetica } from './file.js';
console.log(usuario); // Juan
console.log(password); // 12345
console.log(aritmetica.sumar(3, 2)); // 5
console.log(aritmetica.restar(5, 1)); // 4

saludar("Juan"); // Hola, Juan!
```

#### 📄 `index.html`

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Módulos en JS</title>
</head>
<body>
  <h1>Módulos en JavaScript</h1>

  <!-- Script como módulo -->
  <script src="./main.js" type="module"></script>

  <!-- Si el navegador no soporta módulos -->
  <script src="./main.js" nomodule></script>
</body>
</html>
```

### ¿Qué es `export default`?

- `export default` te permite exportar **una única cosa principal** desde un módulo. Esto puede ser una función, clase, objeto o cualquier valor.
  - Solo puede ser usado una vez (por archivo).
  - Se utiliza principalmente para exportar una única función/clase/valor principal.
  - Al importarlo, se le puede dar cualquier nombre.

---

## Métodos de Arrays

### 🔹 `filter()`

- Crea un nuevo array con los elementos que cumplen una condición. No modifica el array original.

```js
const numeros = [1, 2, 3, 4, 5, 6];
const pares = numeros.filter(num => num % 2 === 0);

console.log(pares); // [2, 4, 6]
```

### 🔹 `map()`

- Crea un nuevo array aplicando una función a cada elemento. No cambia el array original.

```js
const numeros = [1, 2, 3];
const alCuadrado = numeros.map(num => num ** 2);

console.log(alCuadrado); // [1, 4, 9]
```

### 🔹 `reduce()`

- Reduce el array a un solo valor, ejecutando una función sobre cada elemento, acumulando el resultado.

```js
const numeros = [1, 2, 3, 4];

// El 0 del final, es el valor inicial del acumulador
const suma = numeros.reduce((acumulador, actual) => acumulador + actual, 0);

console.log(suma); // 10
```

### 🔹 `sort()`

- Ordena los elementos del array **modificándolo directamente**. Por defecto los convierte a texto, así que se recomienda usar una función de comparación.

```js
// Ejemplo con números
const numeros = [10, 5, 20];
numeros.sort((a, b) => a - b);

console.log(numeros); // [5, 10, 20]

// Ejemplo con palabras
const nombres = ['Mateo', 'Juan', 'Manuel'];
nombres.sort();

console.log(nombres); // ['Juan', 'Manuel', 'Mateo']
```

### 🔹 `includes()`

- Devuelve `true` si el array contiene el elemento especificado.

```js
const frutas = ['manzana', 'pera', 'banana'];
const tienePera = frutas.includes('pera');

console.log(tienePera); // true
```

---

## ¿Cuándo usar `typeof` y cuándo `instanceof`?

- **`typeof`** se usa para saber el **tipo primitivo** de una variable, como `"string"`, `"number"`, `"boolean"`, `"undefined"`, `"object"` o `"function"`.
- **`instanceof`** se usa para saber si un **objeto fue creado por una clase o constructor específico**, como `Array`, `Date`, o una clase personalizada.

### 🔹 `typeof`

- Devuelve el **tipo primitivo** de una variable como una cadena de texto (`"string"`, `"number"`, `"boolean"`, `"object"`, `"function"`, etc.).

**🟢** Usar para saber el tipo de un valor primitivo o si es una función.


### 🔹 `instanceof`

- Verifica si un objeto **es una instancia de una clase o constructor** específico (incluyendo clases nativas como `Array`, `Date`, etc.).

🟢 Usar para saber si algo fue creado con una clase o constructor.
