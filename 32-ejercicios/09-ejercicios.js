/* 27) Programa una clase llamada Pelicula.
*
*  La clase recibirá un objeto al momento de instanciarse con los siguentes datos: 
*  id de la película en IMDB, titulo, director, año de estreno, país o países de origen, 
*  géneros y calificación en IMBD.

*  ✅ Todos los datos del objeto son obligatorios. 
*  ✅ Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números. 
*  ✅ Valida que el título no rebase los 100 caracteres. 
*  ✅ Valida que el director no rebase los 50 caracteres. 
*  ✅ Valida que el año de estreno sea un número entero de 4 dígitos.
*  ✅ Valida que el país o paises sea introducidos en forma de arreglo.
*  ✅ Valida que los géneros sean introducidos en forma de arreglo.

*  Valida que los géneros introducidos esten dentro de los géneros aceptados*.

*  ✅ Crea un método estático que devuelva los géneros aceptados .

*  Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.
*  Crea un método que devuelva toda la ficha técnica de la película.

*  A partir de un arreglo con la información de 3 películas genera 3 instancias de la clase 
*  de forma automatizada e imprime la ficha técnica de cada película.

*  ✅ Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, 
*  Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, 
*  Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
*/


class Pelicula {
    
    
    constructor(obj) {
        
        // validar que sea un objeto
        if (!(obj instanceof Object)) return console.error("El valor ingresado no es un objeto válido");

        // validar que no esté vacío
        if (Object.keys(obj).length === 0) return console.warn("Ingresaste un objeto vacío");
        if (Object.keys(obj).length > 7) return console.warn("El objeto ingresado contiene más propiedades de las esperadas");
        
        this.objeto = obj;

        // Validación de campos obligatorios
        const CAMPOS = [
            ["id", "No ingresaste el id de la película"],
            ["titulo", "No ingresaste el título de la película"],
            ["director", "No ingresaste el director de la película"],
            ["anioEstreno", "No ingresaste el año de estreno de la película"],
            ["paises", "No ingresaste el país de origen de la película"],
            ["generos", "No ingresaste el género de la película"],
            ["clasificacion", "No ingresaste la clasificación de la película"],
          ];

        for (let [clave, mensaje] of CAMPOS) {
            if (this.objeto[clave] === undefined) return console.error(mensaje);
        };


        const GENEROS = [
            "Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", 
            "Crime", "Documentary" , "Drama", "Family", "Fantasy", "Film Noir", "Game-Show",
            "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance",
            "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"
        ];


        // Validaciones específicas
        this.validarID(this.objeto.id);
        this.validarTitulo(this.objeto.titulo);
        this.validarDirector(this.objeto.director);
        this.validarAnioEstreno(this.objeto.anioEstreno);
        this.validarPaises(this.objeto.paises);
        this.validarGeneros(this.objeto.generos, GENEROS);
        this.validarClasificacion(this.objeto.clasificacion);
    };

    validarID(id) {
        const regExpID = /^[a-zA-Z]{2}[0-9]{7}$/;
        if (!regExpID.test(id)) return console.error(`El id '${id}' ingresado no es válido`);
    };

    validarTitulo(titulo) {
        if (typeof titulo !== "string") return console.error(`El título ingresado '${titulo}' no es una cadena de texto`);
        if (titulo === "" || titulo.length > 100) return console.error(`El título '${titulo}' ingresado no es válido`);
    };

    validarDirector(director) {
        if (typeof director !== "string") return console.error(`El director ingresado '${director}' no es una cadena de texto`);
        if (director === "" || director.length > 50) return console.error(`El director '${director}' ingresado no es válido`);
    };

    validarAnioEstreno(anioEstreno) {
        if ( typeof anioEstreno !== "number") return console.error(`El valor ingresado '${anioEstreno}' en el año de estreno, no es un número`);
        const anioActual = new Date().getFullYear();
        const regExpAnioEstreno = /^[0-9]{4}$/;
        if (!regExpAnioEstreno.test(anioEstreno)) return console.error(`El año de estreno ingresado '${anioEstreno}' no es válido`);
        if (anioEstreno > anioActual) return console.error(`El año ingresado ${anioEstreno}, no puede ser mayor que el año actual ${anioActual}`); 
    };

    validarPaises(paises) {
        if (!(paises instanceof Array)) return console.error(`El país o países ingresados '${paises}' no se encuentra en un arreglo`);
        if (paises.length === 0) return console.error("El arreglo de países está vacío");

        for (let pais of paises) 
            if (typeof pais !== "string") return console.error(`El valor '${pais}' ingresado, NO es una cadena`);
    };


    validarGeneros(generos, generosAceptados) {
        if (!(generos instanceof Array)) return console.error(`El género o géneros ingresados '${generos}' no se encuentra en un arreglo`);
        if (generos.length === 0) return console.error("El arreglo de géneros está vacío");

        for (let genero of generos) 
            if (typeof genero !== "string") return console.error(`El valor '${genero}' ingresado, NO es una cadena`);
        
        // FALTA VALIDAR LOS GÉNEROS ACEPTADOS
        
        Pelicula.mostrarGenerosAceptados(generosAceptados)
    };

    validarClasificacion(clasificacion) {

    };

    static mostrarGenerosAceptados(generosAceptados) { 
        return console.log(`Los géneros aceptados son: ${generosAceptados}`);
    }
}


const pelicula = new Pelicula({
    id: "tt2343212",
    titulo: "Avatar",
    director: "James Cameron",
    anioEstreno: 2009,
    paises: ["USA", "Canadá"],
    generos: ["Comedy"],
    clasificacion: 7.9,
});

// const pelicula = new Pelicula();
// const pelicula = new Pelicula({})
