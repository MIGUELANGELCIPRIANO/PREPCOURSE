function doWhile(num) {
    // Implementar una función que aumente el valor recibido en 5 hasta un límite de 8 veces.
    // Retornar el valor final.
    // Utilizar el bucle Do-While.
    // Tu código:
    var i = 0
    do{
        i = i + 1;
        num = num + 5;
    }while (i < 8);

    console.log(num);
 }

 doWhile(56);
