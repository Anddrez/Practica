let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);

    console.log(numeroSecreto === numeroUsuario);
    if (numeroUsuario ===numeroSecreto) {
        asignarTextoElemento ("p",`acertaste el numero en ${intentos} ${(intentos === 1) ? "turno" : "turnos"}`);
    document.getElementById("reiniciar").removeAttribute("disabled");

    }
    // el usuario no acierta
    else { 
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento ("p", "el numero secreo es menor");
        } else {
            asignarTextoElemento ("p", "el numero secreto es mayor");
        }
        intentos ++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //si ya se sortearon todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento("p", "ya se sortearon todos los numeros");
    } else {

        //si el numero generado esta incluido en la lista...
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();

        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function valoresIniciales() {
    asignarTextoElemento("h1", "Juego del numero secreto");
    asignarTextoElemento("p", `Elije un numero entre 1 y ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar el numero aleatorio
    //inicializar el numero de intentos
    valoresIniciales();
    //deshabilitar boton de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
}
valoresIniciales();