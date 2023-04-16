function sumaTres (x) {
    console.log(x + 3); 
}

sumaTres(5);



// PRIMERO
function sumaTres(x) {
    return x + 3;
}

//SEGUNDO 
var sumaTres = function (x) {
    return x + 3;
}

//TERCERO
var sumaTres = (x) => {
    return x + 3;
} 



function cuidadoConElConsoleLog(nombre) {
        return(nombre);
}

function otraFuncion(nombre) {
    return (
        "El nombre retornado por la funcion 'cuidadoConElConsoleLog' es: " +
        cuidadoConElConsoleLog(nombre)
    );
}