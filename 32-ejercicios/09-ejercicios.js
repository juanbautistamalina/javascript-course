/* 27) Programa una clase llamada Pelicula.
*
*  La clase recibirá un objeto al momento de instanciarse con los siguentes datos: 
*  id de la película en IMDB, titulo, director, año de estreno, país o países de origen, 
*  géneros y calificación en IMBD.

*  Todos los datos del objeto son obligatorios. SI
*  Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números. SI
*  Valida que el título no rebase los 100 caracteres. SI
*  Valida que el director no rebase los 50 caracteres.
*  Valida que el año de estreno sea un número entero de 4 dígitos.
*  Valida que el país o paises sea introducidos en forma de arreglo.
*  Valida que los géneros sean introducidos en forma de arreglo.
*  Valida que los géneros introducidos esten dentro de los géneros aceptados*.
*  Crea un método estático que devuelva los géneros aceptados*.
*  Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.
*  Crea un método que devuelva toda la ficha técnica de la película.
*  A partir de un arreglo con la información de 3 películas genera 3 instancias de la clase 
*  de forma automatizada e imprime la ficha técnica de cada película.

*  Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, 
*  Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, 
*  Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
*/


class Pelicula {
    constructor(obj) {
        this.objeto = obj;
        
        if (!(this.objeto instanceof Object)) return console.error("El valor ingresado no es un objeto válido")
        if (Object.keys(this.objeto).length === 0) return console.warn("Ingresaste un objeto vacío");

        if (this.objeto.id === undefined) return console.error("No ingresaste el id de la película");
        if (this.objeto.titulo === undefined) return console.error("No ingresaste el título de la película")
        if (this.objeto.director === undefined) return console.error("No ingresaste el director de la película");
        if (this.objeto.anioEstreno === undefined) return console.error("No ingresaste el año de estreno de la película");
        if (this.objeto.pais === undefined) return console.error("No ingresaste el país de origen de la película");
        if (this.objeto.genero === undefined) return console.error("No ingresaste el género de la película");
        if (this.objeto.clasificacion === undefined) return console.error("No ingresaste la clasificación de la película");

        // ID
        const regExpID = /^[a-zA-Z]{2}[0-9]{7}$/;
        if (!regExpID.test(this.objeto.id)) return console.error("El id ingresado no es válido")
        
        // TÍTULO
        if (this.objeto.titulo.length > 100) return console.error("El título ingresado no es válido");
        // console.log(this.objeto.titulo.length)

    }

   
}

const pelicula = new Pelicula({
    id: "CA1234354",
    titulo: "Avatar",
    director: "James Cameron",
    anioEstreno: 2009,
    pais: "Estados Unidos",
    genero: "Ciencia Ficción",
    clasificacion: 7.9,
})

// const peli = new Pelicula()