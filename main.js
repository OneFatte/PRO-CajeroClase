const input = document.querySelector("#cant-deposito");
const btnDeposito = document.querySelector("#btn-deposito");
const tagCuenta = document.querySelector("#tag-cuenta");
const btnRetiro = document.querySelector("#btn-retiro");
const notificacionSpan = document.querySelector("#notificacionSpan");
const notificacion = document.querySelector("#notificacion");
const saludo = document.querySelector("#saludo");
const cerrar = document.querySelector("#cerrar");

let cuenta = null;

// Eventos del usuario
btnDeposito.addEventListener('click', () => {
    // Tomar cantidad que el usuario quiere depositar
    const deposito = input.value;
    const numDeposito = parseInt(deposito);
    // Saber cuanto dinero tiene su cuenta
    const saldo = cuenta.saldo;
    // Sumarlo con el deposito
    const resultado = saldo + numDeposito;
    // Mostrar la cantidad
    tagCuenta.innerText = resultado;
    console.log(resultado);
    // Actualizar el saldo
    cuenta.saldo = resultado;
    localStorage.setItem('saldo', resultado);
})

btnRetiro.addEventListener('click', () => {
    const deposito = input.value;
    const numDeposito = parseInt(deposito);
    const saldo = cuenta.saldo;

    if (numDeposito > saldo) {
        resetNotificacion();
        return;
    }

    const resultado = saldo - numDeposito;
    tagCuenta.innerText = resultado;
    cuenta.saldo = resultado;
    localStorage.setItem('saldo', resultado);
})

function resetNotificacion() {
    notificacion.classList.remove("hidden");
    notificacionSpan.innerText = "Saldo insuficiente !";
    setTimeout(() => {
        notificacion.classList.toggle("hidden");
        notificacionSpan.innerText = "";
    }, 1000);
}

addEventListener('DOMContentLoaded', () => {
    //hidratar estado
    const currentCuenta = this.localStorage.getItem('currentCuenta');
    cuenta = JSON.parse(currentCuenta);
    saludo.innerText = `Bienvenido ${cuenta.nombre}`;

    localStorage.setItem('saldo', cuenta.saldo);
    // Se ejecuta cuando carga todo el SOM
    const saldoLoacal = localStorage.getItem('saldo');
    tagCuenta.innerText = parseInt(saldoLoacal);

})

cerrar.addEventListener('click', () => {

    localStorage.clear();
    window.location = "index.html";
})

// Validar la cantidad de retiro
// Limpiar el input
// LocalStorage + evento dom