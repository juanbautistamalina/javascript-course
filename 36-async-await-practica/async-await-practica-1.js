/* SALUDO ASÍNCRONO

Simulá una función que devuelva un saludo ("Hola, usuario") después de 1 segundo usando una promesa. 
Luego, creá una función async que espere ese saludo y lo muestre por consola.
*/

function saludar(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hola, usuario");
      // reject("Algo salió mal...");
    }, 1000);
  });
}

async function mostrarSaludo() {
  try {
    const saludo = await saludar();
    console.log(saludo);
  } catch (error) {
    console.error("Error: ", error);
  }
}

mostrarSaludo();