var nombre  = document.getElementById('name');
var apellido = document.getElementById('lastname');
var dni = document.getElementById('dni');
var email = document.getElementById('input-email');
var pass = document.getElementById('input-password');
var cumpleanios = document.getElementById("input-cumpleanios");
var celular = document.getElementById("input-celular");
var telefono = document.getElementById("input-telefono");
var passconfirm=document.getElementById("input-passwordc");
function validateForm() {
  var nombreMayuscula = nombre.value.charAt(0);
  if(nombreMayuscula.toUpperCase() != nombreMayuscula){
      mostrarOcultar(0,"La primera letra debe ser mayuscula");
  }
}
function mostrarOcultar(id,mensaje){
    var span = document.createElement('span');
    span.classList.add("tooltiptext");
    //span.setAttibute("class","tooltiptext");
    var texto = document.createTextNode(mensaje);
    span.appendChild(texto);
    var inputbox = document.getElementsByClassName('input-box')[id].appendChild(span);
    var tooltip = document.getElementsByClassName('tooltiptext');
    tooltip[id].style.display = "block";
    //tooltip[id].innerHTML = mensaje;
}
