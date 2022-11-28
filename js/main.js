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
        alert("Si");
    }else{
        window.location.href = "index.html";
    }
}



    /* Categoria */
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
 document.getElementById("save_button"+no).style.display="block";
	
 var nombreProducto=document.getElementById("nombreProducto"+no);
 var precio=document.getElementById("precio"+no);
 var descripcion=document.getElementById("descripcion"+no);
 var stock=document.getElementById("stock"+no);
	
 var nombreProducto_data=nombreProducto.innerHTML;
 var precio_data=precio.innerHTML;
 var descripcion_data=descripcion.innerHTML;
 var stock_data=stock.innerHTML;
	
 nombreProducto.innerHTML="<input type='text' id='nombreProducto_text"+no+"' value='"+nombreProducto_data+"'>";
 precio.innerHTML="<input type='text' id='precio_text"+no+"' value='"+precio_data+"'>";
 descripcion.innerHTML="<input type='text' id='descripcion_text"+no+"' value='"+descripcion_data+"'>";
 stock.innerHTML="<input type='text' id='stock_text"+no+"' value='"+stock_data+"'>";
}

function save_row(no)
{
 var nombreProducto_val=document.getElementById("nombreProducto_text"+no).value;
 var precio_val=document.getElementById("precio_text"+no).value;
 var descripcion_val=document.getElementById("descripcion_text"+no).value;
 var stock_val=document.getElementById("stock_text"+no).value;

 document.getElementById("nombreProducto"+no).innerHTML=nombreProducto_val;
 document.getElementById("precio"+no).innerHTML=precio_val;
 document.getElementById("descripcion"+no).innerHTML=descripcion_val;
 document.getElementById("stock"+no).innerHTML=stock_val;

 document.getElementById("edit_button"+no).style.display="block";
 document.getElementById("save_button"+no).style.display="none";
}

function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}

function add_row()
{
 var new_nombreProducto=document.getElementById("new_nombreProducto").value;
 var new_precio=document.getElementById("new_precio").value;
 var new_descripcion=document.getElementById("new_descripcion").value;
 var new_stock=document.getElementById("new_stock").value;
	
 var table=document.getElementById("data_table");
 var table_len=(table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='nombreProducto"+table_len+"'>"+new_nombreProducto+"</td><td id='precio"+table_len+"'>"+new_precio+"</td><td id='descripcion"+table_len+"'>"+new_descripcion+"</td><td id='stock"+table_len+"'>"+new_stock+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

 document.getElementById("new_nombreProducto").value="";
 document.getElementById("new_precio").value="";
 document.getElementById("new_descripcion").value="";
 document.getElementById("new_stock").value="";

}