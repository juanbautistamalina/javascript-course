/* PROCESO DE COMPRA EN LÍNEA

Simulá un proceso de compra creando las siguientes funciones que devuelvan promesas:

1. verificarStock(producto):
- Si el producto existe en stock (usá un array simulado como base de datos), resolvé con el producto.
- Si no, rechazá con "Producto no disponible".


2. verificarPago(monto)
- Si el monto es mayor a 0, resolvé después de 1 segundo con "Pago aprobado".
- Si no, rechazá con "Pago rechazado".

3. confirmarCompra(producto)
- Después de 1 segundo, resolvé con "Compra confirmada del producto: <nombre>".

*/

const baseDeDatos = [
  { nombre: "Zapatillas Adizero Boston 12", precio: 120 },
  { nombre: "Campera North Storm Pro", precio: 220 },
  { nombre: "Remera DryFit", precio: 45 },
  { nombre: "Pantalón Térmico", precio: 90 },
  { nombre: "Guantes Invierno", precio: 35 },
  { nombre: "Mochila Urban Pro", precio: 150 },
];

function verificarStock(nombreProducto) {
  return new Promise((resolve, reject) => {
    const productoEncontrado = baseDeDatos.find(
      (producto) => producto.nombre === nombreProducto
    );

    if (productoEncontrado) {
      console.log("Producto disponible ✅");
      resolve({
        nombre: productoEncontrado.nombre,
        precio: productoEncontrado.precio,
      });
    }

    return reject("Producto no disponible");
  });
}

function verificarPago(producto) {
  return new Promise((resolve, reject) => {
    if (producto.precio > 0) {
      setTimeout(() => {
        console.log("Pago aprobado ✅");
        resolve(producto);
      }, 1000);
    } else {
      return reject("Pago Rechazado ❌");
    }
  });
}

function confirmarCompra(producto) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Compra confirmada del producto: ${producto.nombre} ✅`);
    }, 1000);
  });
}

verificarStock("Zapatillas Adizero Boston 12")
  .then((producto) => verificarPago(producto))
  .then((producto) => confirmarCompra(producto))
  .then((mensaje) => console.log(mensaje))
  .catch((error) => console.error(error));
