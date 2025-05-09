/* REGISTRO DE USUARIO PASO A PASO (callback hell en acción)

Crea una función registrarUsuario que simule un proceso de registro con varias etapas, 
todas asincrónicas (usando setTimeout) y dependientes entre sí. Cada paso debe usar 
un callback que llame al siguiente.

Pasos a simular:

1) Verificar si el nombre es válido (mínimo 4 caracteres).
2) Verificar si el correo tiene formato válido (incluye un @).
3) Guardar usuario en la "base de datos" (simulado con un setTimeout).
4) Mostrar mensaje de éxito al final.

Reglas:
- Cada paso debe tener su propia función.
- Usa setTimeout en todos los pasos para simular operaciones asincrónicas.
- Encadena los callbacks de forma que se vea el callback hell (estructurado en cascada).

*/

function registrarUsuario(nombre, correo, callback) {
  setTimeout(() => {
    if (nombre.length >= 4) {
      console.log("✅ Nombre válido");
      callback(nombre, correo);
    } else {
      console.error("❌ El nombre ingresado no es válido");
    }
  }, Math.random() * 3000);
}

function verificarCorreo(nombre, correo, callback) {
  setTimeout(() => {
    if (correo.includes("@")) {
      console.log("✅ Correo válido");
      callback({ nombre, correo });
    } else {
      console.error("❌ El correo ingresado no es válido");
    }
  }, Math.random() * 3000);
}

function guardarEnBD(usuario, callback) {
  setTimeout(() => {
    console.log("💾 Guardando en la base de datos...");
    callback(`🎉 Usuario ${usuario.nombre} registrado con éxito`);
  }, Math.random() * 3000);
}


function mostrarMensaje(mensaje) {
  setTimeout(() => {
    console.log(mensaje);
  }, 1000);
}

registrarUsuario("Juan", "juan@email.com", (nombre, correo) => {
  verificarCorreo(nombre, correo, (usuario) => {
    guardarEnBD(usuario, (mensaje) => {
      mostrarMensaje(mensaje);
    });
  });
});
