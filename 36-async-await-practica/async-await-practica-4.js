function obtenerSaldo(cuenta) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (cuenta === 123) 
          resolve(3500);
        return reject("Cuenta no válida");        
      }, 1500);
    });
  }

  
// Crear una función async que reciba un número de cuenta y muestre el saldo.
async function getSaldoAsync() {
    try {
        const id = 123
        console.log("Consultando saldo...");

        if (!id) throw "ID de cuenta inválido"; 

        let saldo = await obtenerSaldo(id);
        console.log(`Saldo: $${saldo}`);

    } catch (error) {
        console.error(error);
    }
}; 

getSaldoAsync();