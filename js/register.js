document.getElementById("continuar").addEventListener("click", function(event) {
    event.preventDefault();
    // Llamar a la función de validación antes de guardar los datos
    if (validarFormulario()) {
        guardarDatos();
    }
});

// Función para validar el formulario
function validarFormulario() {
    var nombre = document.getElementById("nombre").value.trim();
    var apellido = document.getElementById("apellido").value.trim();
    var correo = document.getElementById("correo").value.trim();
    var contrasenia = document.getElementById("contrasenia").value.trim();

    // Limpiar mensajes de error
    limpiarMensajesError();

    var validacionCorrecta = true;

    // Validar nombre
    if (nombre === '') {
        mostrarError('errorNombre', 'El campo Nombre es obligatorio.');
        validacionCorrecta = false;
    }

    // Validar apellido
    if (apellido === '') {
        mostrarError('errorApellido', 'El campo Apellido es obligatorio.');
        validacionCorrecta = false;
    }

    // Validar el formato del correo electrónico
    var regexEmail = /^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,}$/;
    if (!regexEmail.test(correo)) {
        mostrarError('errorCorreo', 'Ingrese un correo electrónico válido.');
        validacionCorrecta = false;
    }

    // Validar la contraseña
    var regexContrasenia = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!regexContrasenia.test(contrasenia)) {
        mostrarError('errorContrasenia', 'La contraseña debe tener al menos 8 caracteres y contener letras y números.');
        validacionCorrecta = false;
    }

    return validacionCorrecta;
}

// Función para mostrar mensajes de error
function mostrarError(idElemento, mensaje) {
    var elementoError = document.getElementById(idElemento);
    elementoError.textContent = mensaje;
}

// Función para limpiar mensajes de error
function limpiarMensajesError() {
    var elementosError = document.querySelectorAll('.error-message');
    elementosError.forEach(function(elemento) {
        elemento.textContent = '';
    });
}

document.addEventListener('onhaschange', function(){}, false);

// Función para guardar los datos en sessionStorage y redirigir al usuario
function guardarDatos() {
    var formulario = document.getElementById("miFormulario");

    // Obtener los valores de los campos del formulario
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var correo = document.getElementById("correo").value;

    // Crear un objeto con los datos
    var datos = {
        nombre: nombre,
        apellido: apellido,
        correo: correo
    };

    // Convertir el objeto a una cadena JSON y almacenarlo en sessionStorage
    sessionStorage.setItem("datosFormulario", JSON.stringify(datos));

    // Redirigir al usuario a otra página
    window.location.href = "register2.html";
}

// Puedes llamar a esta función al cargar la página para recuperar los datos si existen
function cargarDatos() {
    var datosGuardados = sessionStorage.getItem("datosFormulario");
    if (datosGuardados) {
        // Convertir la cadena JSON a un objeto
        var datos = JSON.parse(datosGuardados);

        // Asignar los valores a los campos del formulario
        document.getElementById("nombre").value = datos.nombre;
        document.getElementById("apellido").value = datos.apellido;
        document.getElementById("correo").value = datos.correo;
    }
}

// Llamar a la función cargarDatos al cargar la página
window.onload = cargarDatos;