const nombres = []; // array de nombres
const apellidos = []; // array de apellidos
const nombreCompleto = nombres.concat(apellidos);
let btnEnviar = document.getElementById("btnEnviar");

const elNombre = () => {
    let nombre = document.getElementById("nombre");
    console.log(nombre);

    if (nombre.value == "") {
        alert("Ingrese un nombre");
    }

    const nuevoNombre = {titulo:nombre.value, completada:false}
    console.log(nuevoNombre);
    nombres.push(nuevoNombre);
    console.log(nombres);

}

btnEnviar.addEventListener("click", nombres);