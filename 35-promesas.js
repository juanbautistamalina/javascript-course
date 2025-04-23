function cuadradoPromise(value) {
    
    if (typeof value !== "number")
        return Promise.reject(`El valor '${value}' ingresado no es un número`);
    
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                value,
                result: value * value,
            });
        }, 0 | (Math.random() * 1000));
  });
};


// No se cumple la promesa: reject
cuadradoPromise("dato string")
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
  })
  .catch((err) => console.error(`Error: ${err}`));


// Se cumple la promesa: resolve
cuadradoPromise(2)
  .then((obj) => {
    console.log("Inicio Promise");
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradoPromise(4);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    console.log("Fin Promise");
  });

