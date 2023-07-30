const cuenta = document.querySelector("#cuenta");
const password = document.querySelector("#password");
const btnLogin = document.querySelector("#login");

const cuentasUsuarios = [
    {
        saldo: 0,
        nombre: "Camilo",
        cuenta: "00001",
        password: "1425",
    },
    {
        saldo: 10,
        nombre: "Holi",
        cuenta: "00002",
        password: "Gato",
    }
]

btnLogin.addEventListener('click', () => {
    const currentUser = cuenta.value;
    const currentPass = password.value;
    // for, forEch, for of, filter, find, map
    for (const cuenta of cuentasUsuarios) {
        if (cuenta.cuenta === currentUser && cuenta.password === currentPass) {
            // Guardar usuario actual => Localstorage
            localStorage.setItem('currentCuenta', JSON.stringify(cuenta))
            window.location = "cajero.html";
            // mandar al cajero
            return
        }
    }
    alert("No puedes entrar")
    // Buscar en el arreglo
    // Si existe, ingresa
    // No existe, no puede entrar

});
