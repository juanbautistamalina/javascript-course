function cuadradoPromise(value) {
    
    if (typeof value !== "number")
        return Promise.reject(`El valor '${value}' no es un número`);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                valor: value,
                resultado: value * value
            });
        }, 2000);
    });
}


// Función Asíncrona
async function funcionAsincronaDeclarada() {
    try {
        console.log("Función Asíncrona Declarada: Inicio");

        /* 
         * La palabra reservada 'await' detiene la ejecución de esta función 
         * hasta que la promesa se resuelva.
         *
         * Si no se usara 'await', el resultado sería una promesa pendiente 
         * y no podríamos acceder directamente a sus valores.
         * 
         * En este caso, como cuadradoPromise utiliza setTimeout para simular 
         * una espera, si no se hiciera uso de await, el resultado sería 'undefined'.
         */
        
        let obj = await cuadradoPromise(2);
        console.log(`${obj.valor}, ${obj.resultado}`);

    } catch (error) {
        console.error("Error:", error);
    }
}

funcionAsincronaDeclarada();

// -------------------------------------------------------------

const funcionAsincronaExpresada = async () => {
    try {
        let obj = await cuadradoPromise(10);
        console.log(`${obj.valor}, ${obj.resultado}`);
    } catch (error) {
        console.error("Error:", error);
    }
}

funcionAsincronaExpresada()
