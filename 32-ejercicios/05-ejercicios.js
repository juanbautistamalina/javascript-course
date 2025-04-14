/* 15) Programa una función para convertir números de base binaria a decimal 
    y viceversa, pe. miFuncion(100,2) devolverá 4 base 10. 
*/

const convertirBase = (numero = undefined, base = undefined) => {
(numero === undefined)
    ? console.warn("No ingresaste el número a convertir")
    : (typeof numero !== "number")
        ? console.error(`El valor "${numero}", no es un número`)
        : (base === undefined)
            ? console.warn("No ingresaste la base a convertir")
            : (typeof base !== "number")
                ? console.error("El valor ingresado para la base, no es válido")
                : (base === 2)
                    ? console.log(`${numero} base ${base} = ${parseInt(numero, base)} base 10`) 
                    : (base === 10)
                        ? console.log(`${numero} base ${base}  = ${numero.toString(2)} base 2`) 
                        : console.error("La base introducida no es válida. Usa 2 o 10");
}

convertirBase(100, 2);

// ---------------------------------------------

/* 16) Programa una función que devuelva el monto final después de aplicar un descuento a una 
    cantidad dada, pe. miFuncion(1000, 20) devolverá 800. 
*/

const aplicarDescuento = (monto = undefined, descuento = 0) => {
    (monto === undefined)
    ? console.warn("No ingresaste el monto de dinero para aplicarle el descuento")
    : (typeof monto !== "number")
        ? console.error(`El valor "${monto}" en el monto, no es un número`)
        : (monto <= 0)
            ? console.error("El monto introducido no es válido. Debe ser mayor a 0")
            : (descuento === undefined)
                    ? console.error("No ingresaste el descuento a aplicar")
                    : (typeof descuento !== "number")
                        ? console.error(`El valor ${descuento} en el descuento, no es un número`)
                        : (descuento < 0)
                            ? console.error("El descuento introducido no es válido. Debe ser mayor a 0")
                            : console.log(`Monto Original: ${monto} - Descuento: ${descuento}% = ${monto - ((descuento * monto) / 100)}`);
}


aplicarDescuento(1000, 20);

// ---------------------------------------------

/* 17) Programa una función que dada una fecha válida determine cuantos años han pasado 
    hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
*/

const calcularAnios = (fecha = undefined) => {

    if (fecha === undefined) return console.warn("No ingresaste la fecha");
    if (!fecha instanceof Date) return console.error("El valor ingresado no es una fecha válida");

    let hoyMenosFecha = new Date().getTime() - fecha.getTime(); // formato epoch
    let aniosMS = 1000 * 60 * 60 * 25 * 365;
    let aniosHumanos = Math.floor(hoyMenosFecha / aniosMS);

    return (Math.sign(aniosHumanos) === -1)
    ? console.log(`Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}`)
    : (Math.sign(aniosHumanos) === 1)
        ? console.log(`Han pasado ${aniosHumanos} años, desde el ${fecha.getFullYear()}`)
        : console.log(`Estamos en el año actual ${fecha.getFullYear()}`)

}

calcularAnios(new Date(2002, 6, 29));