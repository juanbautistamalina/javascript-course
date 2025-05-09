/* SIMULACIÓN DE PEDIDO ONLINE

Objetivo: Simular el proceso completo de un pedido en línea usando async/await con manejo de errores.

Requisitos:

1) verificarProducto(producto)
- Simula una promesa de 1 segundo.
- Si el producto está en la base de datos (["Pizza", "Hamburguesa", "Ensalada"]), resuelve con el nombre del producto.
- Si no, lanza "Producto no disponible".

2) procesarPago(producto)
- Simula una promesa de 1.5 segundos.
- Siempre resuelve con "Pago realizado para <producto>".

3) enviarPedido(producto)
- Simula una promesa de 2 segundos.
- Resuelve con "Pedido de <producto> enviado ✅".

4) Crear una función realizarPedido(producto) que use async/await para:
- Verificar el producto.
- Procesar el pago.
- Enviar el pedido.

Manejar cualquier error en el proceso con try/catch.
*/

const baseDeDatos = [
  { id: 1, nombre: "Pizza", precio: 1200 },
  { id: 2, nombre: "Hamburguesa", precio: 950 },
  { id: 3, nombre: "Ensalada", precio: 700 },
];

function verificarProducto(nombreProducto) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const productoEncontrado = baseDeDatos.find(
        (producto) => producto.nombre === nombreProducto
      );

      if (productoEncontrado) resolve(productoEncontrado.nombre);
      else reject("Producto no disponible");
    }, 1000);
  });
}

function procesarPago(producto) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Pago realizado para ${producto} ✅`);
    }, 1500);
  });
}

function enviarPedido(producto) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Pedido de ${producto} enviado ✅`);
    }, 2000);
  });
}

async function realizarPedido(prod) {
  try {
    const producto = await verificarProducto(prod);

    const pago = await procesarPago(producto);
    console.log(pago);

    const pedido = await enviarPedido(producto);
    console.log(pedido);

  } catch (error) {
    console.error("Error:", error)
  }
}

realizarPedido("Hamburguesa");