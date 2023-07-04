/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   newArray = [];
    for(var prop in objeto){
        newArray.push([prop, objeto[prop]]);
    }
   return(newArray);
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   array = string.toLowerCase().split('').sort();
    objeto = {};
    array.forEach(function(num){
        objeto[num] = (objeto[num] || 0) + 1;        
    });
   return(objeto); 
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   array = string.split('');
    arrayMayus = [];
    arrayMinus = [];
    for(i=0; i<array.length; i++){
        if(array[i].toUpperCase() !== array[i]){
            arrayMinus.push(array[i]);
        }
        else{
            arrayMayus.push(array[i]);
        }
    }
    newArray = (arrayMayus.concat(arrayMinus)).join('');
    return(newArray);
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   array = frase.split('').reverse().join('');
   newArray = array.split(' ').reverse().join(' ');
   return(newArray);
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   string = numero.toString();
    array = string.split('').reverse().join('');
    if(array == numero){
        return("Es capicua"); 
    }
    else{
        return("No es capicua"); 
    }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   newString = string.replace(/(a)/gm, '').replace(/(b)/gm,'').replace(/(c)/gm,'');
   return (newString);
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   return(arrayOfStrings.sort(function(a, b){
      if(a.length == b.length){
          return 0; //Si a y b son iguales devolvemos 0;
      }
      if(a.length < b.length){
          return -1;//Si a debe ir ordenado antes que b, devolvemos un número menor que 0;
      }
      else{
          return 1;//Si a debe ir ordenado después que b, devolvemos un número mayor que 0;
      }
  }));
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   array = array1.concat(array2).sort();
    newArray = [];
    for(i=0; i<array.length; i++){
        if(array[i+1] === array[i]){
            newArray.push(array[i]);
        }
    }
    return(newArray);
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
