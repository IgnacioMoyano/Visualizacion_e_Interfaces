 // Obtener referencias a los elementos del formulario
 const fechaInput = document.getElementById('fecha');
 const numeroDocumentoInput = document.getElementById('numero_documento');
 const sexoSelect = document.getElementById('sexo');
 const telefonoInput = document.getElementById('telefono');
 const errorFecha = document.getElementById('error_fecha');
 const errorNumeroDocumento = document.getElementById('error_numero_documento');
 const errorSexo = document.getElementById('error_sexo');
 const errorTelefono = document.getElementById('error_telefono');

 // Funciones de validación
 function validarFecha() {
     if (fechaInput.value === '') {
         errorFecha.textContent = 'El campo Fecha de Nacimiento es obligatorio.';
         return false;
     } else {
         errorFecha.textContent = '';
         return true;
     }
 }

 function validarNumeroDocumento() {
     const valor = numeroDocumentoInput.value;
     if (valor === '') {
         errorNumeroDocumento.textContent = 'El campo Número de Documento es obligatorio.';
         return false;
     } else if (valor.length !== 8) {
         errorNumeroDocumento.textContent = 'El número de documento debe tener 8 dígitos.';
         return false;
     } else {
         errorNumeroDocumento.textContent = '';
         return true;
     }
 }

 function validarSexo() {
     if (sexoSelect.value === '0') {
         errorSexo.textContent = 'Seleccione un sexo.';
         return false;
     } else {
         errorSexo.textContent = '';
         return true;
     }
 }

 function validarTelefono() {
     const valor = telefonoInput.value;
     if (valor === '') {
         errorTelefono.textContent = 'El campo Teléfono es obligatorio.';
         return false;
     } else {
         errorTelefono.textContent = '';
         return true;
     }
 }

 // Función para realizar la validación manual
 function validarFormulario() {
     const validacionFecha = validarFecha();
     const validacionNumeroDocumento = validarNumeroDocumento();
     const validacionSexo = validarSexo();
     const validacionTelefono = validarTelefono();

     return validacionFecha && validacionNumeroDocumento && validacionSexo && validacionTelefono;
 }

 // Evento para validar el formulario antes de enviar
 document.getElementById('continuar').addEventListener('click', function (event) {
    event.preventDefault();
     // Realizar la validación manual
     if (validarFormulario()) {
         // Lógica adicional si es necesario
         // Llamar a la función de guardarDatos si la validación es exitosa
         guardarDatos();
     }
 });

 // Puedes llamar a esta función al cargar la página para recuperar los datos si existen
 function cargarDatos() {
     // Lógica para cargar datos si es necesario
 }

 // Llamar a la función cargarDatos al cargar la página
 window.onload = cargarDatos;

 // Función para guardar los datos en sessionStorage y redirigir al usuario
 function guardarDatos() {
     // Lógica para guardar datos si es necesario
 }