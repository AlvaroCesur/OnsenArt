var x = document.querySelector(".usuario");
var y = document.querySelector(".psswd");


function sesion() {
    if (x.value == "admin" && y.value == "admin") {
        window.location.href = "administracion.html";
        alert("Si");
    }else{
        window.location.href = "index.html";
    }
}



