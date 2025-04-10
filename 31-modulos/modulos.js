// Importación de constantes, funciones, etc.
import funcion, { PI, usuario, saludar, Saludar } from "./constantes.js";
import { aritmetica as calculos } from "./aritmetica.js"; // Usando alias con 'as'

console.log("Archivo modulos.js");
console.log(`Variables importadas: ${PI}, ${usuario}`);

console.log("Sumar: " + calculos.sumar(10, 10));
console.log("Restar: " + calculos.restar(100, 10));

saludar();
let saludo = new Saludar();


funcion();