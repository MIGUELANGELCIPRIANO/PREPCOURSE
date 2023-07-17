function esPrimo(num) {
    // Retornar true si "num" es primo.
    // De lo contrario retorna false.
    // [Pista 1]: un número primo sólo es divisible por sí mismo y por 1.
    // [Pista 2]: puedes resolverlo utilizando un `bucle for`.
    // [Nota]: los números negativos, 0 y 1 NO son números primos.
    // Tu código:
    if(num < 2){
       console.log(false);
   }
   for (let i = 2 ; i < num ; i++){
       if(num % i === 0){
       console.log(false);
       }
       else{
        console.log(true);
       }
   }
}

 esPrimo(-1);
 esPrimo(0);
 esPrimo(1);
 esPrimo(2);
 esPrimo(3);
 esPrimo(4);
 esPrimo(5);

 function esPrimo(num) {
    for(var i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
  }
  
  function sumaTodosPrimos(array) {
    return array.reduce((acumulado, numero) => {
      if (esPrimo(numero)) {
        acumulado += numero;
      }
      return acumulado
  },0);
  }
  
  console.log(sumaTodosPrimos([1,5,2,9,3,4,11]));