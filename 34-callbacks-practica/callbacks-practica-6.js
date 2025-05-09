/* FILTRADO DE USUARIOS VÁLIDOS

Tienes un array de nombres. Crea una función filtrarUsuarios que reciba el array y un callback.
La función debe recorrer los nombres, validar que tengan al menos 5 letras, y usar el 
callback para devolver un nuevo array con los válidos en mayúsculas.
*/

const nombres = ["Juan", "Carlos", "Pepe", "Ana", "Leo", "Laura", "Bianca"];
const nombresMayuscula = [];

function filtrarUsuarios(arr, callback) {
  const nombresValidos = arr.filter((n) => n.length >= 5);
  callback(nombresValidos);
}

filtrarUsuarios(nombres, (nombresValidos) => {
  for (let i in nombresValidos)
    nombresMayuscula.push(nombresValidos[i].toUpperCase());
  console.log(nombresMayuscula);
});
