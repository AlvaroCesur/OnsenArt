var user = document.querySelector(".usuario");
console.log(user);
var psswd = document.querySelector(".psswd");
console.log(psswd);


function iniciosesion() {
    if (user.value == "admin" && psswd.value == "admin") {
        location.href="administracion.html";
    } else {
        alert("Usuario y contraseña incorrectos");
    }
}

var z = document.querySelector(".enter").addEventListener("click", iniciosesion);