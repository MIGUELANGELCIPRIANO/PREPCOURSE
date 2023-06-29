//Operador 'And' (&&);
function mayorYMenor (num){
    if(num > 5 && num < 10) console.log(true);
    else console.log(false);
}

mayorYMenor(2);
mayorYMenor(7);
mayorYMenor(20);

//Operador 'Or' (||);
function operadorOr(str){
    if(str === "Henry" || str.length<2) console.log(true);
    else console.log(false);
}

operadorOr("java");

//Operador 'Not' (!);
function negacion(permiso){
    if(!permiso === true) console.log("Tiene permiso");
    else console.log("No tiene permiso");
}

negacion(true);

function condicionCompleja(num){
    if(num > 9 && num % 2 === 0 || num === 3) console.log(true);
    else console.log(false);
}

condicionCompleja(10);
condicionCompleja(6);
condicionCompleja(3);
condicionCompleja(5);

function boolean(num){
    if (num === Math.round(num) || num === 0){
        console.log(true);
    }
    else {
        console.log(false);
    }
}

boolean(-45);
boolean(-1);
boolean(0);
boolean(9);