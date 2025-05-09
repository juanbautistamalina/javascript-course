/* PROCESO DE COMPRA ONLINE (callback hell)

Simulá un proceso de compra online con 4 pasos encadenados, todos asincrónicos (con setTimeout) y usando callbacks:

Requisitos:
1) Verificar producto disponible: si el producto tiene stock > 0, continuar.
2) Verificar datos de pago: si el número de tarjeta tiene 16 dígitos, continuar.
3) Procesar pago: simular la espera y dar éxito.
4) Mostrar mensaje de confirmación de compra: “¡Compra realizada con éxito!”

Reglas:
- Cada paso debe ser una función separada con setTimeout.
- Encadená los pasos con callbacks.
- Simulá los valores como si vinieran de un formulario (nombre del producto, stock, tarjeta, etc.).

*/

function verificarProducto(cantidadStock, numTarjeta, callback) {
  console.log("Verificando Stock...");
  setTimeout(() => {
    if (cantidadStock > 0) {
      console.log("Hay stock disponible ✅");
      callback(numTarjeta);
    } else {
      console.log("Stock Agotado ❌");
    }
  }, Math.random() * 3000);
}

function verificarTarjeta(tarjeta, callback) {
  if (typeof tarjeta === "number") {
    setTimeout(() => {
      if (tarjeta.toString().length === 16) {
        console.log("Tarjeta validada correctamente ✅");
        callback("Procesando Pago...");
      } else {
        console.log("El número introducido no es válido ❌");
      }
    }, Math.random() * 3000);
  } else {
    console.log("El valor introducido en la tarjeta no es válido ❌");
  }
};

function procesarPago(mensajeProcesando,callback) {
  console.log(mensajeProcesando);
  setTimeout(() => {
    callback("💲 ¡Compra realizada con éxito! ✅");
  }, Math.random() * 3000);
}

function mensajeConfirmacionCompra(mensaje) {
  setTimeout(() => {
    console.log(mensaje);
  }, 1000);
}

verificarProducto(5, 1234567891234567, (tarjeta) => {
  verificarTarjeta(tarjeta, (mensaje) => {
    procesarPago(mensaje, (mensajeFinal) => {
      mensajeConfirmacionCompra(mensajeFinal);
    })
  });
});
