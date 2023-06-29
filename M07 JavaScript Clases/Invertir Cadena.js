//INVERTIR CADENA MÉTODO SPLIT().REVERSE().JOIN();

// Paso 1. Usa el método split() para devolver un nuevo arreglo;
// Paso 2. Usa el método reverse() para invertir el nuevo arreglo creado;
// Paso 3. Usa el método join() para unir todos los elementos del arreglo en una cadena;
// Paso 4. Devolver la cadena invertida;

// function invertirCadena(palabra){
//     console.log(palabra.split('').reverse().join(''));
// }
// invertirCadena('palabra'); 

//INVERTIR CADENA BUCLE FOR DECREMENTO;

// Paso 1. Crear una cadena vacía que almacenará la nueva cadena creada;
// Paso 2. Crear el bucle FOR.
//      El punto de partida del bucle será (cadena.length - 1) que corresponde al último caracter de la cadena;
//      Mientras i sea mayor que o igual a 0, el bucle se ejecutará;
//      Decrementamos i después de cada iteración;
// Paso 3. Devolver la cadena invertida

// function invertirCadena(palabra){
//     var nuevaCadena = "";
//     for (var i = palabra.length - 1; i >= 0; i--){
//         nuevaCadena += palabra[i]; // o nuevaCadena = nuevaCadena + palabra[i];
//     }
//     console.log(nuevaCadena);
// }
// invertirCadena('hola');

// INVERTIR CADENA MÉTODO SUBSTR() + MÉTODO CHARAT();

// MÉTODO SUBSTR(). Devuelve los carácteres de una cadena que comienza en la ubicación especificada a través del número especificado de carácteres;
//                  No está estrictamente obsoleto, pero no se recomienda su uso ya que puede dar resultados inconsistentes;
//                  En su lugar está la opción SLICE();
//      'hola'.substr(1) => 'ola'
//      'hola'.slice(1) => 'ola';
// MÉTODO CHARAT(). Devuelve el carácter especificado de una cadena;
//      'hola'.charAt(0) => 'h';

// function invertirCadena(palabra){
//   if (palabra === ('')){
//     return('');
//   }
//   else{
//     return(invertirCadena((palabra.substr(1)))+palabra.charAt(0));
//   }
// }
// var string = 'hola';
// console.log(invertirCadena(string));