const usuarios = [
  { id: 1, nombre: "Ana" },
  { id: 2, nombre: "Luis" },
  { id: 3, nombre: "Carlos" },
];

function obtenerUsuario(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const usuario = usuarios.find(u => u.id === id);
      
      if (usuario)
        resolve(usuario);
      
      return reject("Usuario no encontrado");

    }, 1000);
  });
}

async function funcionAsincrona() {
  try {
    const id = 2;
    let usuario = await obtenerUsuario(id);
    console.log(usuario);
  } catch (error) {
    console.error(error);
  }
}

funcionAsincrona();
