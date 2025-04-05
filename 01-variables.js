// Diferencia entre var y let

console.log("*** VAR ***");
var a = "Valor Inicial";
console.log(a);

{
    var a = "Valor Modificado";
    console.log(a);
}

console.log(a);



console.log("*** LET ***");
let b = "Valor Inicial";
console.log(b);

{
    let b = "Valor Modificado";
    console.log(b);
}

console.log(b);