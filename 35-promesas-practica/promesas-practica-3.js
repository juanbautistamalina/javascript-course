function verificarClima() {
  
  const lloviendo = false;
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!lloviendo)
        resolve("El clima está bien. ¡Puedes salir a caminar!");
      
      return reject("Está lloviendo. Mejor quedate en casa.");
    }, 1500)
  })
}


verificarClima()
.then(msg => console.log("☀️", msg))
.catch(err => console.error("🌧️", err));