/* VALIDACIÓN DE USUARIO

Crea una función validarUsuario(nombre, callback) que simule (con setTimeout) una validación de un nombre. 
Si el nombre tiene más de 3 letras, llama al callback con un mensaje de "Usuario válido". 
Si no, llama al callback con "Usuario inválido".
*/

function validarUsuario(nombre, callback) {
  console.log("Validando Usuario...");
  setTimeout(() => {
    nombre.length > 3 
    ? callback("Usuario Válido")
    : callback("Usuario inválido");
  }, Math.random() * 5000);
};

validarUsuario("Juan Bautista", (msg) => {
  console.log(msg)
})