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

