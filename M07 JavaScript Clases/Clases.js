// FUNCIÓN CONSTRUCTORA;
//
function Auto(puertas, color, marca, año, motor) {
   this.puertas = puertas;
   this.color = color;
   this.marca = marca;
   this.año = año;
   this.motor = motor;
   this.info = function(){
    console.log(this.marca + ' Scirocco ' + this.motor + ' modelo ' + this.año);
   }
}
var miPrimerAuto = new Auto(2, 'Negro', 'Volkswagen', 2018, '1.4');
miPrimerAuto.info();
console.log(miPrimerAuto);
console.log(miPrimerAuto.marca);

// EXPRESIÓN DE CLASE;

// class Auto {
//    constructor(puertas, color, marca, año, motor) {
//       this.puertas = puertas;
//       this.color = color;
//       this.marca = marca;
//       this.año = año;
//       this.motor = motor;
//    }
//     info(){
//         console.log(this.marca + ' 208 Roadtrip ' + this.motor + ' modelo ' + this.año);
//     }
// }
// var miSegundoAuto = new Auto(4, 'Azul', 'Peugeot', 2022, '1.6');
// miSegundoAuto.info();
// console.log(miSegundoAuto);
// console.log(miSegundoAuto.marca);

// class Football{
//     constructor(jugador){
//         this.jugador = jugador;
//     }
//     obtenerNombre(){
//         console.log(this.jugador);
//     }
// }

// var Argentina = new Football('Messi');
// var Portugal = new Football('Ronaldo');

// Argentina.obtenerNombre();
// Portugal.obtenerNombre();