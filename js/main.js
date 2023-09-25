const nombres = {nombre:prompt("Ingrese su nombre y apellido").toUpperCase(), edad:prompt("Ingrese su Edad")};
const domicilio = {nombreCalle:prompt("Ingrese su domicilio"), alturaCalle:prompt("Altura de domicilio")};

/* console.log(nombres);
console.log(domicilio);
 */

class Persona{
    constructor (nombres, datosUbicacion) {
        this.nombrePersona = nombres.nombre;
        this.edadPersona = nombres.edad;
        this.calle = datosUbicacion.nombreCalle;
        this.altura = datosUbicacion.alturaCalle;
    }

    mostrarDatos () {
        return "Nombre: " + this.nombrePersona + "Edad: " + this.edadPersona;
    }
}

const nuevaPersona = new Persona(nombres, domicilio);
// console.log(nuevaPersona);

const Yo = [nuevaPersona];
console.log(Yo);