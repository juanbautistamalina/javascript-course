const productos = [
  { id: 1, nombre: "Laptop", precio: 1500 },
  { id: 2, nombre: "Mouse", precio: 25 },
  { id: 3, nombre: "Teclado", precio: 45 },
];


function cargarProducto(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const productoEncontrado = productos.find(
        (producto) => producto.id === id
      );

      if (productoEncontrado)
        resolve({
          nombre: productoEncontrado.nombre,
          precio: productoEncontrado.precio,
        });

      return reject("Producto no encontrado");
      
    }, 2000);
  });
}


cargarProducto(2)
  .then((producto) => console.log("Producto cargado:", producto))
  .catch((error) => console.error("Error:", error));
