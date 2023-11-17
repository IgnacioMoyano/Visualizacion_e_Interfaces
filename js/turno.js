var monthName = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio",
                 "Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

var now = new Date();
var day = now.getDate();
var month = now.getMonth();
var currentMonth = month;
var year = now.getFullYear();


const modal = document.getElementById('myModal');
const btnAceptar = document.getElementById('btnAceptar');
const btnCerrar = document.getElementById('btnCerrar');
const closeBtn = document.getElementsByClassName('close')[0];
const abrirBtn = document.getElementById('continuar');

initCalender();
console.log(startDay());

function initCalender(){
    $("#text_day").text(day);
    $("#text_month").text(monthName[currentMonth]);

    $("#text_month_02").text(monthName[month]);
    $("#text_year").text(year);

    $(".item_day").remove();

    for(let i = startDay(); i>0; i--){
        $(".container_days").append
        (`<span class="week_days_item item_day prev_days">${getTotalDays(month-1)-(i-1)}</span>`);
    }

    for(let i=1; i<=getTotalDays(month); i++){
        if(i==day && month==currentMonth){
            $(".container_days").append
        (`<span class="week_days_item item_day today">${i}</span>`);
        }else{
        $(".container_days").append
        (`<span class="week_days_item item_day">${i}</span>`);
        }
    }
}
function getNextMonth(){
    if(month !== 11){
        month++;
    }else{
        year++;
        month = 0;
    }
    initCalender();
}
function getPrevMonth(){
    if(month !== 0){
        month--;
    }else{
        year--;
        month = 11;
    }
    initCalender();
}
function startDay(){
    var start = new Date(year, month, 1);
    return((start.getDate()-1)===-1) ? 6 : start.getDay();
}

function leapMonth(){
    return((year % 400 === 0) || (year % 4 === 0) && (year % 100 !== 0));
}

function getTotalDays(){
    if(month === -1) month = 11;

    var numMonthReal = month +1;

    if(numMonthReal == 3 || numMonthReal == 5 || numMonthReal == 8 || numMonthReal == 10){
        return 31;
    }else if(numMonthReal == 0 || numMonthReal == 2 || numMonthReal == 4 || numMonthReal == 6 
             || numMonthReal == 7 || numMonthReal == 9 || numMonthReal == 10){
        return 30;
    }else{
        return leapMonth() ? 29:28;
    }
}

$("#next_month").click(function(){
    getNextMonth();
});
$("#last_month").click(function(){
    getPrevMonth();
})

//PopUP
// Abre el modal cuando se hace clic en algún botón (puedes ajustar este evento según tu necesidad)
continuar.addEventListener('click', function () {
    modal.style.display = 'block';
});

// Cierra el modal si se hace clic en el botón "Cerrar" o en la "x"
btnCerrar.addEventListener('click', function () {
    modal.style.display = 'none';
});

closeBtn.addEventListener('click', function () {
    modal.style.display = 'none';
});

// Cierra el modal si se hace clic fuera de él
window.addEventListener('click', function (event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

//Bloqueador de opciones
document.addEventListener('DOMContentLoaded', function () {
    const especialidadSelect = document.getElementById('especialidad');
    const profesionalSelect = document.getElementById('profesional');
    const containerCalendar = document.querySelector('.fechayhora');

    // Añade un evento de cambio al select de especialidad
    especialidadSelect.addEventListener('change', function () {
        // Obtiene el valor seleccionado
        const selectedValue = especialidadSelect.value;

        // Habilita o deshabilita el segundo select según el valor seleccionado
        if (selectedValue !== '0') {
            // Si el valor es distinto de 0, habilita el segundo select
            profesionalSelect.removeAttribute('disabled');
        } else {
            // Si el valor es 0, deshabilita el segundo select y restablece su valor
            profesionalSelect.setAttribute('disabled', true);
            profesionalSelect.value = '0';
        }
    });

    // Función para manejar el cambio en la carga de la página
    function handleInitialChange() {
        const selectedValue = profesionalSelect.value;

        // Muestra u oculta el contenedor de calendario según el valor seleccionado
        if (selectedValue === '0') {
            containerCalendar.style.display = 'none';
        } else {
            containerCalendar.style.display = 'flex';
        }
    }

    // Llama a la función para manejar el cambio inicial
    handleInitialChange();

    // Añade un evento de cambio al select de profesional
    profesionalSelect.addEventListener('change', function () {
        handleInitialChange();
    });

});

//Botones de horario
