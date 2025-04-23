const usuarios = ["ana", "luis", "marcos"];

function verificarUsuario(nombre) {
  return new Promise((resolve, reject) => {
    if (usuarios.includes(nombre)) 
      resolve({ nombre, rol: "admin" });

    return reject("Usuario no encontrado");
  });
}

verificarUsuario("ana")
  .then((obj) => console.log("Usuario válido:", obj))
  .catch((err) => console.error("Error:", err));
