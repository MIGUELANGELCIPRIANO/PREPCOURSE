// Array.prototype.mayorQueTres = function () {
//     var arreglo = [];
//     for (var i = 0; i < this.length; i++) {
//            if (this[ i ] > 3) {
//                   arreglo.push(false);
//            } else {
//                   arreglo.push(this[ i ]);
//            }
//     }
//     return arreglo;
//  };
  
//  var arreglo = [1, 2, 3, 4, 5];
//  var nuevoArreglo = arreglo.mayorQueTres();
//  console.log(nuevoArreglo);

class LatinoAmerica {
	constructor() {
		this.paises = [];
	};
};
 
LatinoAmerica.prototype.agregarPais = function (pais) {
   	this.paises.push(pais);
};

var continente = new LatinoAmerica();
continente.agregarPais('México');
// continente.agregarPais('Argentina');
// continente.agregarPais('Brasil');
console.log(continente.paises);