// VARIABLE OBJETO{ KEY : VALUE};

// var deportes = {
//    conBalon : ['Football', 'Basketball', 'Rugby'], 
//    sinBalon : ['Boxeo', 'Surf', 'trekking'],
// };

// var persona = {
//    nombre : 'Lucas', edad : 26, estudio : {Programador : true}
// };
// console.log(persona);

//ACCEDER;

// console.log(persona.edad); 

//ASIGNAR;

// persona.nombre = 'Martin';
// console.log(persona.nombre);
// persona.edad = 32;
// //console.log(persona.edad);

//CREAR Y BORRAR;

// var autos = {};
// autos.marcas = ['Ford', 'Audi', 'Ferrari'];
// delete autos.marcas;
// console.log(autos);

// FUNCION DENTRO DE OBJETO;

// var misFunciones = {
//     saludar: function() {
//         console.log('Hola');
//     },
// };

// misFunciones.saludar();

//DOT-NOTATION;

//var atuendos = {manos : ['Guantes', 'Anillos'], pies: ['Zapatos', 'soquetes']};
//console.log(atuendos.manos);

// BRACKET-NOTATION;
// atuendos['piernas'] = ['Bermudas', 'Pantalones'];
// console.log(atuendos);

// var comidas = {};
// var diferenciaDeNotaciones = function(propUno, propDos){
//    comidas[propUno] = ['Frutas', 'Vegetales']; //No es posible utilizar Dot-Notation.
//    comidas[propDos] = ['Hamburguesa', 'Papas fritas'];
//    //La propiedad (clave) o Key resulta ser una variable externa por lo que, no necesita comillas.
// }
// diferenciaDeNotaciones('Saludable', 'NoSaludable');
// console.log(comidas);

//MÉTODOS DE OBJETOS;

// HAS OWN PROPERTY;
// var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
// var tienePropiedad = libro.hasOwnProperty('nombre');

// console.log(tienePropiedad);

// KEYS
// var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
// var todasLasPropiedades = Object.keys(libro);

// console.log(todasLasPropiedades);

// FOR IN;

// var mundo = {continentes: 7, paises: 195, oceanos: 5}; 
// for (var prop in mundo) {
//     console.log('Esta es la propiedad:', prop);
//     console.log('Este es el valor:', mundo[prop]);
// }

// THIS;

// var mascota = {
//     animal: 'Perro',
//     raza: 'Ovejero Alemán',
//     amistoso: true,
//     dueño: 'María López',
//     info: function () {
//        console.log('Mi perro es un ' + this.raza);
//     },
// };

// mascota.info();
