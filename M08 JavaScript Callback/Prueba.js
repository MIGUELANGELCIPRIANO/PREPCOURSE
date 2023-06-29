function filter(arrayOfStrings) {
    // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
    // Luego retorna un nuevo arreglo con estos elementos.
    // Tu código:
    newArray = [];
    for(i = 0; i<arrayOfStrings.length; i++){
        if(arrayOfStrings[i].charAt(0) === 'A'){
            newArray.push(arrayOfStrings[i]);
        }
    }
    return newArray;
 }

var arrayOfStrings = ['Arbol', 'Casa', 'Ardilla', 'Amarillo', 'Rojo', 'Silla'];
var resultado = filter(arrayOfStrings);
console.log(resultado);