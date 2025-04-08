// console.log(Date());

let fecha = new Date();
console.log(fecha);
console.log(fecha.getDate()); // Día del mes
console.log(fecha.getDay()); // Día de la semana: D L M M J V S -> 0 1 2 3 4 5 6
console.log(fecha.getMonth()); // Mes: Ene, Feb, Mar, Abr, May, Jun, Jul, Ago, Sep, Oct, Nov, Dic -> 0 1 2 3 4 5 6 7 8 9 10 11
console.log(fecha.getFullYear()); // Año
console.log(fecha.getHours()); // Hora
console.log(fecha.getMinutes()); // Minutos
console.log(fecha.getSeconds()); // Segundos

// Convierte el objeto Date a una cadena legible con la fecha y hora completas.
console.log(fecha.toString());

// Devuelve el número de milisegundos desde el 1 de enero de 1970 (fecha Timestamp o Epoch).
// Se usa mucho para medir tiempos o hacer cálculos de diferencia de fechas.
console.log(Date.now());

// Crear una fecha personalizada
let fechaNacimiento = new Date(2002, 6, 29);
console.log(fechaNacimiento.toString());

// Librería: Moment.js https://momentjs.com/