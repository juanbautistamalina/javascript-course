const productos = [
  { id: 1, nombre: "Avena" },
  { id: 2, nombre: "Cereales" },
  { id: 3, nombre: "Mermelada" },
  { id: 4, nombre: "Leche" },
  { id: 5, nombre: "Caramelos" },
  { id: 6, nombre: "Frutas" },
  { id: 7, nombre: "Postres" },
];


function disponibilidadProducto(nombre) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
        const productoEncontrado = productos.find(
          (producto) => producto.nombre === nombre
        );

        if (productoEncontrado) 
          resolve(productoEncontrado)
        
        return reject(`Producto '${nombre}' no disponible`)

      }, Math.random() * 1500);
  }) 
}



async function getProductoAsync() {
  try {
    const nombreProducto = "Cereales";
    console.log("Buscando el producto en la base de datos...");
    const producto = await disponibilidadProducto(nombreProducto);
    console.log(producto);
  } catch (error) {
    console.error(`Error: ${error}`)
  }
}

getProductoAsync();