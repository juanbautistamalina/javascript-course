/* VALIDAD EDAD DEL USUARIO

- Crea una función validarEdad(edad) que devuelva una promesa. 
Si la edad es mayor o igual a 18, la promesa se resuelve con "Acceso permitido".
Si no, se rechaza con "Acceso denegado".
*/

function validarEdad(edad) {
  return new Promise((resolve, reject) => {
    if (edad >= 18) resolve("Acceso Permitido");
    return reject("Acceso Denegado");
  })
};

validarEdad(18)
.then(response => console.log(response))
.catch(error => console.error(error));
