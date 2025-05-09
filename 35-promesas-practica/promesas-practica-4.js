/* SIMULACIÓN DE LOGIN

Crea una función login(usuario, contraseña) que devuelva una promesa:
- Si el usuario es "admin" y la contraseña "1234", resuelve con "Login exitoso".
- En caso contrario, rechaza con "Credenciales incorrectas".
*/

function login(user, password) {
  return new Promise((resolve, reject) => {
    if (user === "admin" && password === "1234") resolve("Login exitoso");
    return reject("Credenciales Incorrectas");
  })
};

login("Juan", "123")
.then(response => console.log(response))
.catch(error => console.error(error));