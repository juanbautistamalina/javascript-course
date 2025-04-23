/* Haciendo un triángulo con bucles:
- Escribe un bucle que realice siete llamadas a console.log para mostrar el
  siguiente triángulo:
  #
  ##
  ###
  ####
  #####
  ######
  #######
*/

const crearTriangulo = (longitud) => {
  const caracter = "#";

  for (let i = 1; i <= longitud; i++) {
    console.log(caracter.repeat(i));
  }
};

crearTriangulo(5);

// --------------------------------

/* FizzBuzz
  Escribe un programa que use console.log para imprimir todos los números
  del 1 al 100, con dos excepciones. Para los números divisibles por 3, imprime
  "Fizz" en lugar del número, y para los números divisibles por 5 (y no por 3),
  imprime "Buzz" en su lugar.
  Cuando tengas eso funcionando, modifica tu programa para imprimir "FizzBuzz
  " para los números que son divisibles por 3 y 5 (y sigue imprimiendo "Fizz" o
  "Buzz" para los números que son divisibles solo por uno de esos).
*/

const fizzBuzz = () => {
    for (let i = 1; i<= 100; i++){

        if (i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz");
        }

        else if (i % 3 === 0) {
            console.log("Fizz")
        }

        else if (i % 5 === 0) {
            console.log("Buzz")
        }

        else {
            console.log(i);
        }
    }
}

fizzBuzz()

// --------------------------------

/*  Escribe un programa que cree una cadena que represente un tablero de 8x8,
   usando caracteres de salto de línea para separar las líneas. En cada posición
   del tablero hay un carácter de espacio o un carácter "#". Los caracteres deben
   formar un tablero de ajedrez.
   Cuando tengas un programa que genere este patrón, define una variable size
   = 8 y cambia el programa para que funcione para cualquier size, generando
   un tablero con el ancho y alto dados
*/

const tablero = (size) => {

    for (let i = 0; i < size; i++) {

        (i % 2 === 0) 
        ? console.log(" #".repeat(size)) 
        : console.log("# ".repeat(size))
    }
}

tablero(10);