/* SIMULACIÓN DE DESCARGA:

Crea una función que simule la descarga de un archivo usando setTimeout. 
Una vez "descargado", debe ejecutar un callback que muestre un mensaje indicando que la 
descarga fue exitosa.
*/

function descarga(callback) {
  let file = false;
  setTimeout(() => {
    console.log("Descargando archivo...");
    file = true;
    if (file) callback();
  }, Math.random() * 5000)

}

descarga(() => {console.log("Descarga exitosa")})