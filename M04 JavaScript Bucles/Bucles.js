var suma = 0;
//suma = suma + 1;
//suma = suma + 2;
//suma = suma + 3;
//suma = suma + 4;
//console.log(suma);


//for(var i=0 ; i<5 ; i++){
    //suma = suma + i;
    //console.log('Variable de iteracion: ', i);

//}

//console.log('Variable suma: ', suma);


while (suma < 3){
    suma = suma + 1;
    console.log(suma);
}



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