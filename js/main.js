    /* Menú */
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



    /* Login */
var x = document.querySelector(".usuario");
var y = document.querySelector(".psswd");

function sesion() {
    if (x.value == "admin" && y.value == "admin") {
        window.location.href = "administracion.html";
        alert("Credenciales correctas");
    }else{
        window.location.href = "index.html";
        alert("Credenciales correctas");
    }
}



    /* Categoria */
// Ordenar los productos por categoría (imprescindible que sea en JQuery)
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


    /* Administracion */
    function edit_row(no)
    {
     document.getElementById("edit_button"+no).style.display="none";
     document.getElementById("save_button"+no).style.display="inline";
        
     var id=document.getElementById("id"+no);
     var nombre=document.getElementById("nombre"+no);
     var precio=document.getElementById("precio"+no);
     var descripcion=document.getElementById("descripcion"+no);
     var stock=document.getElementById("stock"+no);
        
     var id_data=id.innerHTML;
     var nombre_data=nombre.innerHTML;
     var precio_data=precio.innerHTML;
     var descripcion_data=descripcion.innerHTML;
     var stock_data=stock.innerHTML;
        
     id.innerHTML="<input type='text' id='id_text"+no+"' value='"+id_data+"'>";
     nombre.innerHTML="<input type='text' id='nombre_text"+no+"' value='"+ nombre_data+"'>";
     precio.innerHTML="<input type='text' id='precio_text"+no+"' value='"+precio_data+"'>";
     descripcion.innerHTML="<input type='text' id='descripcion_text"+no+"' value='"+descripcion_data+"'>";
     stock.innerHTML="<input type='text' id='stock_text"+no+"' value='"+stock_data+"'>";
    }
    
    function save_row(no)
    {
     var id_val=document.getElementById("id_text"+no).value;
     var nombre_val=document.getElementById("nombre_text"+no).value;
     var precio_val=document.getElementById("precio_text"+no).value;
     var descripcion_val=document.getElementById("descripcion_text"+no).value;
     var stock_val=document.getElementById("stock_text"+no).value;
    
     document.getElementById("id"+no).innerHTML=id_val;
     document.getElementById("nombre"+no).innerHTML=nombre_val;
     document.getElementById("precio"+no).innerHTML=precio_val;
     document.getElementById("descripcion"+no).innerHTML=descripcion_val;
     document.getElementById("stock"+no).innerHTML=stock_val;
    
     document.getElementById("edit_button"+no).style.display="inline";
     document.getElementById("save_button"+no).style.display="none";
    }
    
    function delete_row(no)
    {
     document.getElementById("row"+no+"").outerHTML="";
    }
    
    function add_row()
    {
     var nuevo_id=document.getElementById("nuevo_id").value;
     var nuevo_nombre=document.getElementById("nuevo_nombre").value;
     var nuevo_precio=document.getElementById("nuevo_precio").value;
     var nuevo_descripcion=document.getElementById("nuevo_descripcion").value;
     var nuevo_stock=document.getElementById("nuevo_stock").value;
        
     var table=document.getElementById("data_table");
     var table_len=(table.rows.length)-1;
     var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='id"+table_len+"'>"+nuevo_id+"</td><td id='nombre"+table_len+"'>"+nuevo_nombre+"</td><td id='precio"+table_len+"'>"+nuevo_precio+"</td><td id='descripcion"+table_len+"'>"+nuevo_descripcion+"</td><td id='stock"+table_len+"'>"+nuevo_stock+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")' hidden> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";
    
     document.getElementById("nuevo_id").value="";
     document.getElementById("nuevo_nombre").value="";
     document.getElementById("nuevo_precio").value="";
     document.getElementById("nuevo_descripcion").value="";
     document.getElementById("nuevo_stock").value="";
    }
    
    $("#editableTable").find("a[title='Delete']").click(function(e){  
      var x;
        if (confirm("Are you sure you want to delete entire row?") == true) {
            $(this).closest("tr").remove();
        } else {
            
        }     
    });


    /* FUNCIONALIDAD MAPA */
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('background-map'), {
    center: {lat: 36.719753548933475, lng: -4.365634167338904},
    zoom: 10
  });
}
//center-map
 if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(function (position) {
         initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
         map.setCenter(initialLocation);
     });
 }
