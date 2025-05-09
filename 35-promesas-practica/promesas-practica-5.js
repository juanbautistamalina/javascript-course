/* FETCH SIMULADO

Simula una función obtenerDatos(id) que devuelva una promesa que:
- Si el id es válido (por ejemplo, id > 0), resuelve con un objeto { id, nombre: "Producto X" } tras 2 segundos.
- Si no es válido, rechaza con "ID inválido".

*/

function obtenerDatos(id) {
  return new Promise((resolve, reject) => {
    console.log(`Buscando producto con el ID ${id}...`);
    setTimeout(() => {
      if (id > 0)
      return resolve({
        id,
        nombre: "Zapatillas Adizero Boston 12"
      });
      
    return reject("ID inválido");
    }, 2000);
  });
};

obtenerDatos(1)
.then(response => console.log(response))
.catch(error => console.error(error));