try {
  console.log("Bloque try");
  variableNoDefinida;
} catch (error) {
  console.log("Bloque catch");
  console.log(`El error es: ${error}`);
} finally {
  console.log("Bloque finally");
}

try {
  let numero = "a";

  if (isNaN(numero)) {
    throw new Error("El carácter introducido no es un número"); // Arrojar un error personalizado
  }

  console.log(numero * numero);

} catch (error) {
  console.log("Ha ocurrido un error:", error);
}
