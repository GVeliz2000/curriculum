// Antes de ejecutar Javascript espera que toda la página se dibuje
document.addEventListener('DOMContentLoaded', function () {

    //======================================================================
    // VARIABLES
    //======================================================================

    const listaPalabras = [
        'perro', 'gato', 'raton', 'elefante', 'tigre', 'leon', 'jirafa', 'cebra', 'mono', 'ardilla', 'rinoceronte', 'hipopotamo', 'camello',
        'gorila', 'conejo', 'cerdo', 'oveja', 'vaca', 'caballo', 'pato', 'gallina', 'pollo', 'pavo', 'aguila', 'buho', 'pingüino', 'delfin',
        'ballena', 'tiburón', 'tortuga', 'cocodrilo'
    ];

    let palabraAdivinar = [];
    let palabraMostrar = [];
    let historialLetrasUsuario = [];
    let numIntentos = 5;
    let elementoLetra = document.getElementById('letra');
    let elementoBoton = document.getElementById('boton');
    let elementoResultado = document.getElementById('resultado');
    let elementoIntentos = document.getElementById('intentos');
    let elementoHistorial = document.getElementById('historial');

    //======================================================================
    // FUNCIONES
    //======================================================================

    function prepararJuego () {
        let posAleatoriaListaPalabras = _.random(listaPalabras.length - 1);
        let palabraAleatoria = listaPalabras[posAleatoriaListaPalabras];
        palabraAdivinar = palabraAleatoria.split('');
        for (let letra of palabraAdivinar) {
            palabraMostrar.push('_');
        }
        dibujarJuego();
    }

    function dibujarJuego () {
        elementoResultado.textContent = palabraMostrar.join(' ');
        elementoIntentos.textContent = numIntentos;
        elementoHistorial.textContent = historialLetrasUsuario.join(' ');
    }

    function comprobarLetraUsuario () {
        let letraUsuario = elementoLetra.value;
        elementoLetra.value = '';
        elementoLetra.focus();
        for (const [posicion, letraAdivinar] of palabraAdivinar.entries()) {
            if (letraUsuario == letraAdivinar) {
                palabraMostrar[posicion] = letraAdivinar;
            }
        }
        if (!palabraAdivinar.includes(letraUsuario)) {
            numIntentos -= 1;
            historialLetrasUsuario.push(letraUsuario);
        }
        acabarJuego();
        dibujarJuego();
    }

    function comprobarPulsadoEnter (evento) {
        if (evento.code == 'Enter') {
            comprobarLetraUsuario();
        }
    }

    function acabarJuego () {
        let myModal = new bootstrap.Modal(document.getElementById('myModal'));
        let tituloModal = document.getElementById('exampleModalLabel');
        let contenidoModal = document.getElementById('modal-body');

        if (!palabraMostrar.includes('_')) {
            document.getElementById('myModal').style.backgroundColor = '#ccffe6';
            tituloModal.innerHTML = 'Has ganado!!!';
            contenidoModal.innerHTML = 'Sigue jugando para mas diversión';
            myModal.show()
        }
        if (numIntentos == 0) {
            document.getElementById('myModal').style.backgroundColor = '#ffe6e6';
            tituloModal.innerHTML = 'Has Perdido!!!';
            contenidoModal.innerHTML = 'Realmente era facil, era un: ' + palabraAdivinar.join('');
            myModal.show()
        }
    }

    //======================================================================
    // EVENTOS
    //======================================================================
    // Al hacer clic en el boton se llama la funcion comprobarLetraUsuario
    elementoBoton.addEventListener('click', comprobarLetraUsuario);
    // Al hacer Enter con el teclado se llama a la funcion comprobarLetraUsuario
    elementoLetra.addEventListener('keyup', comprobarPulsadoEnter);

    //======================================================================
    // INICIO
    //======================================================================
    prepararJuego();
});
