
var b = document.getElementById("enviar");
b.addEventListener("click", validateForm);




function validateForm(){
let nombre = document.forms["myForm"]["name"].value;
if (nombre == ""){
    alert("El campo Nombre no puede estar vacío");
}else {
    let cadNombre = /^[A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+$/;
    if (!cadNombre.test(nombre)){
        alert("La primera letra debe ser Mayúscula");
    }
}
/*--------------------------------------------------*/

 let apellido = document.forms["myForm"]["apellidos"].value;
    if (apellido == ""){
        alert("El campo Apellidos  no puede estar vacío");
    }else{
        let cadApellido =/^[A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+$/;
        if(!cadApellido.test(apellido)){
            alert("La primera letra de cada apellido debe ser Mayúscula, y debes introducir los dos apellidos");
        }
    }

 /*--------------------------------------------------*/
  let direccion = document.forms["myForm"]["direccion"].value;
 if (direccion  == ""){
     alert("El campo Dirección no puede estar vacío");
 }else{
     let cadDireccion = /^[A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+$/;
     if(!cadDireccion.test(direccion)){
         alert("El campo direccion solo puede contener letras, la primera mayúscula");
     }
 } 

 /*--------------------------------------------------*/
let email = document.forms["myForm"]["email"].value;
 if (email  == ""){
     alert("El campo email no puede estar vacío");
 }else{
     let cadEmail =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/;
     if(!cadEmail.test(email)){
         alert("el campo email no es valido");
     }
 }
/*--------------------------------------------------*/
 let telefono = document.forms["myForm"]["number"].value;
 if (telefono  == ""){
     alert("El campo telefono no puede estar vacío");
 }else{
    let cadTelefono=/^\+\d{2,3}\s\d{9}$/;
     if(!cadTelefono.test(telefono)){
         alert("El campo Móvil sólo puede contener números");
     }
 }
}





    
