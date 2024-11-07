const final = { dia: 25, mes: 11, año: new Date().getFullYear() };

function diasHasta(final) {
    let Hoy = new Date();
    let fin = new Date(final.año, final.mes, final.dia);
    //Las fechas en JS se calculan a milisegundos
    let mseg_dia = 1000 * 60 * 60 * 24;

    // Si estamos en diciembre y hoy ya es después del 25, ajusta al año siguiente
    /*FullYear tiene el año de la fecha almacenada en el objeto Date.
    Por tanto setFullYear cambia el año y getFullYear toma el año almacenado*/
    if (Hoy.getMonth() === final.mes && Hoy.getDate() > final.dia) {
        fin.setFullYear(fin.getFullYear() + 1);
    }

    // Cálculo de los días restantes
    //Usamos Math.ceil para redondear el resultado en milisegundos hacia arriba
    let dias = Math.ceil((fin.getTime() - Hoy.getTime()) / mseg_dia);

    // Modificar el contenido del DOM en el párrafo
    document.getElementById('mensaje').innerText = `Faltan ${dias} días hasta Navidad (${fin.toLocaleDateString()})`;
}

// Agregar un event listener para el botón
const botonMostrar= document.getElementById('mostrarDias'); //Tomamos el boton por la id "mostrarDias"
botonMostrar.addEventListener('click', function() {
    diasHasta(final);
});

//Obtener id mensaje para modificar el texto
const textMensaje= document.getElementById('mensaje');

//Cambiar el estilo del texto
textMensaje.style.fontWeight="bold";
textMensaje.style.color="red";


// Cambiar el estilo del botón
botonMostrar.style.backgroundColor = "green";
botonMostrar.style.color = "white";
botonMostrar.style.padding = "10px";
botonMostrar.style.border = "none";
botonMostrar.style.borderRadius = "5px";
botonMostrar.style.textShadow = "2px 2px 4px rgba(0, 0, 0, 1)";

 