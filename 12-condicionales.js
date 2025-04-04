// if - else
let edad = 18;

if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}

let hora = 5;
if (hora >= 0 && hora <= 5) {
  console.log("Déjame dormir");
} else if (hora >= 6 && hora <= 11) {
  console.log("Buenos Días");
} else if (hora >= 12 && hora <= 18) {
  console.log("Buenas tardes");
} else {
  console.log("Buenas noches");
}

// Operador Ternario
let distancia = 42;
let condicion = distancia === 42 ? true : false;
console.log("¿Voy a correr una Maratón?:", condicion);


let dia = 0;
switch (dia) {
    case 0:
        console.log("Hoy es Domingo");
        break;
    case 1:
        console.log("Hoy es Lunes");
        break;
    case 2:
         console.log("Hoy es Martes");
         break;
    case 3:
        console.log("Hoy es Miércoles");
        break;
    case 4:
        console.log("Hoy es Jueves");
        break;
    case 5:
        console.log("Hoy es Viernes");
        break;
    case 6:
        console.log("Hoy es Sábado");
        break;
    default:
        console.log("El día indicado no existe.")
}