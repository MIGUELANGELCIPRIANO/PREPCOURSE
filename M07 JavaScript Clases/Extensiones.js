class Persona {
    constructor(nombre, edad) {
       this.nombre = nombre;
       this.edad = edad;
    }
    saludar() {
       console.log('Hola, mi nombre es ' + this.nombre + '. Tengo ' + this.edad + '.');
    }
 }
//  var persona = new Persona('Martin', 26);
//  persona.saludar();


class Programador extends Persona {
    constructor(nombre, edad, añosDeExperiencia) {
       super(nombre, edad);
       this.añosDeExperiencia = añosDeExperiencia;
    }
    codear() {
       console.log(this.saludar() + ' Y codeo desde hace ' + this.añosDeExperiencia + ' años.');
    }
 }
 var programador = new Programador('María', 30, 4);
 programador.codear();