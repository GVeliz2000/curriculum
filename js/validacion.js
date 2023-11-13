// Almaceno cada elemento del formulario en un variable
let nombre = document.getElementById('nombre');

// Seteo el campo nombre como el primero a ser complatado
nombre.focus();

// Implento funciones para validad cada campo
const valNombre = (nombre) =>{
    if (nombre.length == 0) {
        document.getElementById("e-nombre").style.display = "block";
        return false;
    } else {
        document.getElementById("e-nombre").style.display = "none";
    }
    return true; 
}

const valEmail = (email) =>{
    const patron = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!patron.test(email)) {
        document.getElementById("e-email").style.display = "block";
        return false;
    } else {
        document.getElementById("e-email").style.display = "none";
    }
    return true;

}

const valAsunto = (asunto) =>{
    if (asunto.length == 0) {
        document.getElementById("e-asunto").style.display = "block";
        return false;
    } else {
        document.getElementById("e-asunto").style.display = "none";
    }
    return true;
}

const valMensaje = (mensaje) =>{
    if (mensaje.length == 0) {
        document.getElementById("e-mensaje").style.display = "block";
        return false;
    } else {
        document.getElementById("e-mensaje").style.display = "none";
    }
    return true;
}

// Implento funcion para enviar formulario
const enviarFormulario = (formulario) =>{
    let eNombre = valNombre(formulario.nombre.value)
    let eEmail = valEmail(formulario.email.value)
    let eAsunto = valAsunto(formulario.asunto.value)
    let eMensaje = valMensaje(formulario.mensaje.value)

    if (eNombre && eEmail && eAsunto && eMensaje) {
        // Si pasa todas las validacion el formulario se envia
        alert('Formulario enviado correctamente!!!');
    } else {
        // Muesto por consola que existen errores
        console.log('Existen errores');
    }
}
