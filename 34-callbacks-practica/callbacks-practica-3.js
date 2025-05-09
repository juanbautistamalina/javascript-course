/* ORDENAR NOMBRES Y MOSTRARLOS

Crea una función que reciba un arreglo de nombres y un callback. La función debe ordenar los nombres 
alfabéticamente y luego llamar al callback una vez por cada nombre.
*/

const nombres = ["Walter", "Juan", "Gastón", "Milton", "Ana", "Jack", "Sebastian"];


function ordenarNombres(names, callback) {
  names.sort();
  names.forEach(name => {

    if (name.length >= 5) callback(name)
  });
};

ordenarNombres(nombres, (nombre) => {
  console.log(nombre.toLowerCase())
})


