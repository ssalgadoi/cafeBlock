// seleccionar contenido de un html
//este nos devueve uno o ninguno de lo que estamos seleccionando
//esta funcion nos sirve para manipular todo el html con JavaScript
const heading = document.querySelector('.header__texto h2');//nos retorna 0 0 1

console.log(heading);

// querySelectorAll

const enlaces = document.querySelectorAll('.navegacion a');
enlaces[0].textContent = 'Nosotres';//podemos cambiar el html


// Generar nuevo elnaces de JavaScrip

const nuevoEnlace = document.createElement('A')// las etiquetas en mayuscula

// Agregamos el href
nuevoEnlace.href = 'nuevo-enlace.html';
// Agregamos el texto
nuevoEnlace.textContent = 'Productos';
// Agregamos la clase
nuevoEnlace.classList.add('navegacion__enlace')
// Agregamos al Documento html
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace)

console.log(nuevoEnlace);


// Eventos (esto general mente los realiza el cliente)
// window es es documento global
// console.log(1);

// window.addEventListener('load', function() {// load espera q JS y los archivos que dependen del HTML esten listos
//     console.log(2);
// });

// window.onload = function() {
//     console.log(3);

// };
// document.addEventListener('DOMContentLoaded' , function(){// Solo espera que se descarge el HTML, pero no espera CSS o IMG 
//     console.log(4);

// })
// console.log(5);

// window.onscroll = function(e){
//     console.log(e);
// }

// Seleccionar un elemento y asociarlo a un evento

// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function(e){// e de evento
//     console.log(e);
//     e.preventDefault();
//     esto nos sirve para validar los formularios
//     console.log('Enviando formulario');
// });


// Eventos input y textArea
const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto );
email.addEventListener('input', leerTexto );
mensaje.addEventListener('input', leerTexto );

// Evento de Submit

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('Enviando Formulario');
    // Validar Formulario
    const { nombre, email, mensaje} = datos;
    if (nombre === '' || email === '' || mensaje === ''){
        mostrarError('Todos los campos son obligatorios');
        return;
    }
    // Crear la otra alerta Enviar Formulario
    mostrarMensaje('Mensaje enviado correctamente');
});
   
function leerTexto(e){
    datos[e.target.id] = e.target.value;
    // console.log(datos);
}
// Muestar una lerta que se encio correctamente
function mostrarMensaje(mensaje) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    alerta.classList.add('correcto');

    formulario.appendChild( alerta );

    // Desaparesca despues de 5 minutos
    setTimeout(() =>{
        alerta.remove();
    }, 5000);
}

// Muestar un error en pantalla

function mostrarError(mensaje) {
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('error');

    // agregamos el error al HTML
    formulario.appendChild( error );

    // Desaparesca despues de 5 segundos

    setTimeout(() =>{
        error.remove();
    }, 5000);

}





