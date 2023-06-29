// FUNCIÓN CONVENCIONAL;
// var quieroComer = function(comida){
//     console.log (`Hoy quiero comer ${comida}`);
// }
// quieroComer(`pasta`); 

// FUNCIÓN CALLBACK;
// var quieroComer = function(comida){
//     return `Hoy quiero comer ${comida}`;
// }
// var pedir = function(comida, cb){
//     return cb(comida);
// }
// var fraseFinal = pedir(`pasta`, quieroComer);
// console.log(fraseFinal);

// FUNCIÓN CONVENCIONAL;
// MÉTODO CHARAT(). Devuelve el carácter especificado de una cadena. 'hola'.charAt(0) => 'h';
// MÉTODO TOUPPERCASE(). Convierte el string llamado a mayúscula. 'hola'.toUpperCase() => 'HOLA';
// MÉTODO SLICE(). Devuelve los carácteres de una cadena que comienza en la ubicación especificada a través del número especificado de carácteres. 'hola'.slice(1) => 'ola';
// function mayuscula(nombre) {
//     console.log(nombre.charAt(0).toUpperCase() + nombre.slice(1));
// }
// mayuscula('mario');

// FUNCIÓN CALLBACK;
// function primerLetraMayuscula(nombre) {
//     return(nombre.charAt(0).toUpperCase());
// }
// function finalCadena(nombre) {
//     return (nombre.slice(1));
// }
// function mayuscula(nombre, cb1, cb2){
// return cb1(nombre)+cb2(nombre);
// }
// var persona = mayuscula('lucas', primerLetraMayuscula, finalCadena);
// console.log(persona);

// OTRO EJEMPLO;
// function devuelvoUsuario() {
//     return 'Miguel';
// }
// function devuelvoSaludo() {
//     return 'Hola';
// }
// function saludar(cb1, cb2) {
//     return cb1() + ' ' + cb2();
// }
// var saludo = saludar(devuelvoSaludo, devuelvoUsuario);
// console.log(saludo);