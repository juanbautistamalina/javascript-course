const PI = Math.PI;
console.log(PI)

// Los tipos de datos primitivos NO pueden ser reasignados en las constantes
// PI = 12345; --> ERROR

// Los tipos de datos de referencia SI pueden ser modificados en las constantes
const objeto = {
    nombre: "Juan Bautista",
    edad: 22
}

objeto.profesion = "Programador";
console.log(objeto);

const array = ["Rojo", "Verde", "Azúl"];
array.push("Negro");
console.log(array);