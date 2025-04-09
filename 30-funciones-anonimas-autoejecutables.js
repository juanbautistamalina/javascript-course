// La estructura de una Función Anónima Autoejecutable es: (function () {...})()
// Una función dentro de paréntesis, con el código a ejecutar, y seguidamente de los paréntesis
// que contienen a la función, otros paréntesis para ejecutar dicha función. 


(function (d, w, c) {
  console.log("Función anónima autoejecutable");
  console.log(d);
})(document, window, console);


// Clásica
(function (){
    console.log("Versión Clásica");
})();

// La Crockford (JavaScript The Good Parts)
((function (){
    console.log("Versión Crockford");
})());

// Unaria
+function (){
    console.log("Versión Unaria");
}();

// Facebook
!function (){
    console.log("Versión Facebook");
}();