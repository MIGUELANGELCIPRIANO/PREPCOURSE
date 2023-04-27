//var listaDeCompras = [];
//listaDeCompras[0] = 'Lechuga';
//listaDeCompras[1] = 'Tomates';
//listaDeCompras[2] = 'Cebolla';
//listaDeCompras[3] = 'Morron';
//listaDeCompras[4] = 'Zanahoria';
//listaDeCompras[5] = 'Papa';
//listaDeCompras[6] = 'Batata';
//listaDeCompras[7] = 'Zapallo';

//Devolver elemento del array;
//console.log(listaDeCompras [0]);


//Otra forma de devolverlo;
//var elementoDelArray = listaDeCompras[1];
//console.log(elementoDelArray);

//Método length;
//Cantidad de elementos del array;
//console.log(listaDeCompras.length);

//var colores = ['Amarillo', 'Azul'];

//Método push();
//Agrega elementos al final del array;
//colores.push('Verde');

//Método unshift();
//Agrega elementos al inicio del array;
//colores.unshift('Rojo');

//Método pop();
//Elimina el último elemento del array;
//colores.pop();

//Método shift();
//Elimina el primer elemento del array;
//colores.shift();
//console.log(colores);

//Método includes();
//Conocer si un elemento se encuentra incluido en el array;
//var pintores = ['Picasso', 'Velazquez', 'Van Gogh', 'Dali'];
//var incluyeDali = pintores.includes('Dali');
//console.log(incluyeDali);

//Método every();
//Conocer si todos los elementos del array cumplen con una condición;
//var numeros = [10, 9, 8, 6, 5];
//var cumpleCondicion = numeros.every(num =>{
//    return (num > 5);
//});
//console.log(cumpleCondicion);

//var palabra = 'Henri';

//Método split();
//Convierte un string en un array;
//var palabraSeparada = palabra.split('');
//palabraSeparada.pop();
//palabraSeparada.push('y');
//console.log(palabraSeparada);

//Método join();
//Convierte un array en un string;
//var palabraArreglada = palabraSeparada.join('');
//console.log(palabraArreglada);

//Método for.Each;
//Permite recorrer un array mediante una acción sin modificar sus elementos;
//var numeros = [1, 2, 3, 4];
//numeros.forEach((num)=> console.log(num));
//numeros.forEach((num) => {if(num === 3){
//console.log([num])}});

//Método map();
//Permite recorrer un array y realizar una modificación en sus elementos. 
//var masUno = numeros.map((num) => {
//    return num + 1;
//});console.log(masUno);

//var array = [1, 2, 3, 4, 5];
//for(var i = 0; i < array.length; i++) {
//    console.log(array[i]);
//};

//function encontrarLetraP(string){
//    var letras = string.split('');
//
//    for(var i = 0; i < letras.length; i++){
//        if(letras[i] ==='p'){
//            console.log('Contiene a P');
//        }
//    }
//}

//encontrarLetraP('JavaScript');

//var array = [1, 2, 3, 4, 5];

//while(array.length > 10){
//    array.push('Boom');
//}

//console.log(array.length);

//function mesesDelAño(array){
//var newArray = [];
//for(var i = 0; i < array.length; i++){
//    if(array[i]==='Enero' || array[i]==='Marzo' || array[i]==='Noviembre'){
//        newArray.push(array[i]);
//    }
//}
//if(newArray.length === 3){
//    console.log((newArray));
//} else{
//    console.log('No se encontraron los meses pedidos');
//}
//}
//
//var array = ['Marzo', 'Diciembre', 'Enero']
//mesesDelAño(array)

//function tablaSeis(){
//var array = [];
//for(var i = 0; i <= 10; i++){
//   array.push = (i * 6);
//   }
//   console.log(array);
//}
//
//tablaSeis()