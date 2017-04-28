var nombre  = document.getElementById('name');
var apellido = document.getElementById('lastname');
var dni = document.getElementById('dni');
var pass = document.getElementById('input-password');
var cumpleanios = document.getElementById("input-cumpleanios");
var celular = document.getElementById("input-celular");
var telefono = document.getElementById("input-telefono");
var passconfirm=document.getElementById("input-passwordc");
var btnEnviar = document.getElementById("btnEnviar");

function validateForm(){

  //valida nombre, primera letra en mayuscula
  var expresionLeMayus = /^[A-Z]{1}/;
  if(!expresionLeMayus.test(nombre.value)){
    mostrarOcultar(0,"Su Nombre debe iniciar con mayuscula");
  }
  if(!expresionLeMayus.test(apellido.value)){
    mostrarOcultar(1,"Su apellido debe iniciar con mayuscula");
  }
  if(!(/\d{8}/.test(dni.value))){
     mostrarOcultar(2,"El dni debe tener 8 numeros");
  }
  //validar fecha
  var expFecha = /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))/;
  if(!expFecha.test(cumpleanios.value)){
    mostrarOcultar(3,"Formato: YYYY-MM-DD (debes tener mas de 18;))")
  }

  var expcel = /^[9][0-9]{8}$/;
  if(!expcel.test(celular.value)){
    mostrarOcultar(4,"Formato: 9xxxxxxxx");
  }

  var expTelf = /\d{3}-\d{2}-\d{2}/;
  if(!expTelf.test(telefono.value)){
    mostrarOcultar(5,"Formato: xxx-xx-xx");
  }

  var expcontrasenia = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}[^'\s]/;
  if(!expcontrasenia.test(pass.value)){
    mostrarOcultar(6,"Min 8 - max 15 caraceteres,min 1 letra mayuscula, minuscula, digito y caracter especial,no espacios en blanco");
  }

  if(pass.value != passconfirm.value){
    mostrarOcultar(6,"Las contrasenia no coinciden");
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
