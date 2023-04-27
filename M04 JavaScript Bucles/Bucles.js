var suma = 0;
//suma = suma + 1;
//suma = suma + 2;
//suma = suma + 3;
//suma = suma + 4;
//console.log(suma);

//Bucle For;
//for(var i=0 ; i<5 ; i++){
    //suma = suma + i;
    //console.log('Variable de iteracion: ', i);

//}

//console.log('Variable suma: ', suma);

//Bucle While;
while (suma < 3){
    suma = suma + 1;
    console.log(suma);
}

//Expresión Switch;
function colors(color) {
 switch(color){
    case 'blue' :
        console.log('This is blue');
        break;
    case 'red' :
        console.log('This is red');
        break;
    case 'green' :
        console.log('This is green');
        break;
    case 'orange' :
        console.log('This is orange');
        break;
    default :
    console.log('Color not found');
 }
 }

 colors('blue');
 colors('red');
 colors('green');
 colors('orange');
 colors('black');

 //Bucle DoWhile;
 function doWhile(num) {
    // Implementar una función que aumente el valor recibido en 5 hasta un límite de 8 veces.
    // Retornar el valor final.
    // Utilizar el bucle Do-While.
    // Tu código:
    var i = 0
    do{
        i = i + 1;
        num = num + 5;
    }
    while (i < 8);

    console.log(num);
 }

 doWhile(0);