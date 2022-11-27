const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   // Animacion de los links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    // Animacion de la hamburguesa
    hamburger.classList.toggle("toggle");
});

$(function() {

    $('.toggles button').click(function(){
      var get_id = this.id;
      var get_current = $('.covers .' + get_id);
  
        $('.cover').not( get_current ).hide(500);
        get_current.show(500);
    });
    
    
    $('#showall').click(function() {
        $('.cover').show(500);
    });


}); 
























// //validacion contacto

// const nombre = document.getElementById("name");
// const email = document.getElementById("email");
// const tef = document.getElementById("tef");
// const mensaje = document.getElementById("mensaje");
// const form = document.getElementById("formu");
// const parraf = document.getElementById("warnings");

// form.addEventListener("submit" , e=>{
//     e.preventDefault();
//     let warnings = "";
//     let entrar = false;
//     let regexNombre= /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
//     let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     let regexTef = /^\d{9}$/;
//     let regexMensaje= /^[a-zA-ZÀ-ÿ\s]{1,120}$/;
//     parraf.innerHTML = "";

//     if(!regexNombre.test(nombre.value)){
//         warnings += `El nombre no es válido <br>`;
//         entrar = true;
//     }

//     if(!regexEmail.test(email.value)){
//         warnings += `El email no es válido <br>`;
//         entrar = true;
//     }

//     if(!regexTef.test(tef.value)){
//         warnings += `El teléfono no es válido <br>`;
//         entrar = true;
//     }

//     if(!regexMensaje.test(mensaje.value)){
//         warnings += `Rellene el mensaje <br>`;
//         entrar = true;
//     }

//     if (entrar){
//         parraf.innerHTML = warnings;
//     }else{
//         parraf.innerHTML = "Enviado";
//     }
// });