document.getElementById("continuar").addEventListener("click", function() {
    guardarDatos();
});

// Función para guardar los datos en sessionStorage
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

    // Puedes agregar un mensaje para indicar que los datos se han guardado
    alert("Datos guardados en sessionStorage");


    formulario.submit
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


